// @ts-check
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * @typedef {Object} PresentationItem
 * @property {string} label - 表示ラベル
 * @property {string} slug - スラッグ（URL用のパス）
 */

/**
 * @typedef {Object} DateGroup
 * @property {string} label - 表示ラベル（日付）
 * @property {boolean} collapsed - 折りたたみ状態
 * @property {PresentationItem[]} items - プレゼンテーション項目の配列
 */

/**
 * @typedef {Object} YearGroup
 * @property {string} label - 表示ラベル（年）
 * @property {boolean} collapsed - 折りたたみ状態
 * @property {DateGroup[]} items - 日付グループの配列
 */

/**
 * @typedef {Object.<string, string[]>} YearData
 * 年をキー、日付の配列を値とするオブジェクト
 */

/**
 * @typedef {Object} LatestInfo
 * @property {string|null} year - 年
 * @property {string|null} date - 日付
 * @property {number} timestamp - タイムスタンプ
 */

/** @type {string} */
const PRESENTATIONS_ROOT_DIR = './src/content/docs/presentations';
/** @type {string[]} */
const MARKDOWN_EXTENSIONS = ['.md', '.mdx'];
/** @type {string} */
const PRESENTATION_PATH_PREFIX = 'presentations';

/**
 * 指定されたディレクトリ内のサブディレクトリを取得する
 * @param {string} dirPath - ディレクトリパス
 * @returns {string[]} - サブディレクトリ名の配列
 */
function getDirectories(dirPath) {
  try {
    return fs.readdirSync(dirPath)
      .filter(item => {
        const fullPath = path.join(dirPath, item);
        return fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
      });
  } catch (/** @type {any} */ error) {
    console.warn(`⚠️ Failed to read directories from ${dirPath}: ${error}`);
    return [];
  }
}

/**
 * 指定されたディレクトリ内のマークダウンファイルを取得する
 * @param {string} dirPath - ディレクトリパス
 * @returns {string[]} - マークダウンファイル名の配列
 */
function getMarkdownFiles(dirPath) {
  try {
    return fs.readdirSync(dirPath)
      .filter(file => MARKDOWN_EXTENSIONS.some(ext => file.endsWith(ext)));
  } catch (/** @type {any} */ error) {
    console.warn(`⚠️ Failed to read markdown files from ${dirPath}: ${error}`);
    return [];
  }
}

/**
 * 日付文字列をDate型に変換する
 * @param {string} year - 年
 * @param {string} dateStr - 日付文字列（例: '04-18'）
 * @returns {Date|null} - 変換されたDate型、変換失敗時はnull
 */
function parseDate(year, dateStr) {
  try {
    return new Date(`${year}-${dateStr.replace('-', '/')}`);
  } catch (/** @type {any} */ error) {
    console.warn(`⚠️ Failed to parse date ${year}-${dateStr}: ${error}`);
    return null;
  }
}

/**
 * ファイルからプレゼンテーションのタイトルを抽出する
 * @param {string} filePath - ファイルパス
 * @param {string} defaultTitle - デフォルトのタイトル
 * @returns {string} - 抽出されたタイトル
 */
function extractPresentationTitle(filePath, defaultTitle) {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data.title || defaultTitle;
  } catch (/** @type {any} */ error) {
    console.warn(`⚠️ Failed to read frontmatter title from ${filePath}: ${error}`);
    return defaultTitle;
  }
}

/**
 * プレゼンテーション項目を作成する
 * @param {string} rootPath - プレゼンテーションのルートパス
 * @param {string} year - 年
 * @param {string} date - 日付
 * @param {string} file - ファイル名
 * @returns {PresentationItem} - プレゼンテーション項目
 */
function createPresentationItem(rootPath, year, date, file) {
  const dateDirPath = path.join(rootPath, year, date);
  const filePath = path.join(dateDirPath, file);
  const name = file.replace(/\.mdx?$/, '');
  const title = extractPresentationTitle(filePath, name);

  return {
    label: title,
    slug: `${PRESENTATION_PATH_PREFIX}/${year}/${date}/${name}`,
  };
}

/**
 * 日付グループを作成する
 * @param {string} rootPath - プレゼンテーションのルートパス
 * @param {string} year - 年
 * @param {string} date - 日付
 * @param {string|null} latestPath - 最新プレゼンテーションのパス
 * @returns {DateGroup} - 日付グループ
 */
function createDateGroup(rootPath, year, date, latestPath) {
  const dateDirPath = path.join(rootPath, year, date);
  const files = getMarkdownFiles(dateDirPath);

  return {
    label: date,
    collapsed: `${year}/${date}` !== latestPath,
    items: files.map(file => createPresentationItem(rootPath, year, date, file)),
  };
}

/**
 * プレゼンテーションの年と日付の情報を収集する
 * @param {string} rootPath - プレゼンテーションのルートパス
 * @returns {YearData} - 年と日付の情報
 */
function collectPresentationYearData(rootPath) {
  const years = getDirectories(rootPath);
  /** @type {YearData} */
  const yearData = {};

  for (const year of years) {
    const yearDirPath = path.join(rootPath, year);
    const dates = getDirectories(yearDirPath);
    yearData[year] = dates;
  }

  return yearData;
}

/**
 * 最新のプレゼンテーションパスを取得する
 * @param {YearData} yearData - 年と日付の情報
 * @returns {string|null} - 最新プレゼンテーションのパス（例: '2025/04-18'）、存在しない場合はnull
 */
function getLatestPresentationPath(yearData) {
  /** @type {LatestInfo} */
  let latestInfo = { year: null, date: null, timestamp: 0 };

  for (const [year, dates] of Object.entries(yearData)) {
    for (const date of dates) {
      const dateObj = parseDate(year, date);
      if (!dateObj) continue;

      const timestamp = dateObj.getTime();
      if (timestamp > latestInfo.timestamp) {
        latestInfo = { year, date, timestamp };
      }
    }
  }

  return latestInfo.year && latestInfo.date
    ? `${latestInfo.year}/${latestInfo.date}`
    : null;
}

/**
 * プレゼンテーション項目のツリー構造を生成する
 * @returns {YearGroup[]} - プレゼンテーション項目のツリー構造
 */
export function generatePresentationItems() {
  const rootPath = path.resolve(PRESENTATIONS_ROOT_DIR);
  const yearData = collectPresentationYearData(rootPath);
  const latestPath = getLatestPresentationPath(yearData);

  return Object.entries(yearData).map(([year, dates]) => {
    return {
      label: year,
      collapsed: false,
      items: dates.map(date => createDateGroup(rootPath, year, date, latestPath)),
    };
  });
}
