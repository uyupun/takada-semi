import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * 指定されたディレクトリ内のサブディレクトリを取得する
 * @param {string} dirPath - ディレクトリパス
 * @returns {string[]} - サブディレクトリ名の配列
 */
function getDirectories(dirPath) {
  return fs.readdirSync(dirPath)
    .filter(item => fs.statSync(path.join(dirPath, item)).isDirectory());
}

/**
 * 日付文字列をDate型に変換する
 * @param {string} year - 年
 * @param {string} dateStr - 日付文字列（例: '04-18'）
 * @returns {Date} - 変換されたDate型
 */
function parseDate(year, dateStr) {
  return new Date(`${year}-${dateStr.replace('-', '/')}`);
}

/**
 * 最新のプレゼンテーションディレクトリを取得する
 * @param {string} baseDir - ベースディレクトリ
 * @returns {string} - 最新ディレクトリのパス（例: '2025/04-18'）
 */
function getLatestPresentationDir(baseDir) {
  const years = getDirectories(baseDir);
  let latest = { year: null, date: null };

  for (const year of years) {
    const yearDir = path.join(baseDir, year);
    const dates = getDirectories(yearDir);

    for (const date of dates) {
      if (!latest.year) {
        latest = { year, date };
        continue;
      }

      const currentDate = parseDate(year, date);
      const latestDate = parseDate(latest.year, latest.date);

      if (currentDate > latestDate) {
        latest = { year, date };
      }
    }
  }

  return latest.year && latest.date ? `${latest.year}/${latest.date}` : null;
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
  } catch (error) {
    console.warn(`⚠️ Failed to read frontmatter title from ${filePath}: ${error}`);
    return defaultTitle;
  }
}

/**
 * プレゼンテーション項目を作成する
 * @param {string} baseDir - ベースディレクトリ
 * @param {string} year - 年
 * @param {string} date - 日付
 * @param {string} file - ファイル名
 * @returns {Object} - プレゼンテーション項目
 */
function createPresentationItem(baseDir, year, date, file) {
  const dirPath = path.join(baseDir, year, date);
  const filePath = path.join(dirPath, file);
  const name = file.replace(/\.mdx?$/, '');
  const title = extractPresentationTitle(filePath, name);

  return {
    label: title,
    slug: `presentations/${year}/${date}/${name}`,
  };
}

/**
 * 日付グループを作成する
 * @param {string} baseDir - ベースディレクトリ
 * @param {string} year - 年
 * @param {string} date - 日付
 * @param {string} latestDir - 最新ディレクトリ
 * @returns {Object} - 日付グループ
 */
function createDateGroup(baseDir, year, date, latestDir) {
  const dirPath = path.join(baseDir, year, date);
  const files = fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

  return {
    label: date,
    collapsed: `${year}/${date}` !== latestDir,
    items: files.map(file => createPresentationItem(baseDir, year, date, file)),
  };
}

/**
 * プレゼンテーション項目のツリー構造を生成する
 * @returns {Array} - プレゼンテーション項目のツリー構造
 */
export function generatePresentationItems() {
  const baseDir = path.resolve('./src/content/docs/presentations');
  const latestDir = getLatestPresentationDir(baseDir);
  const years = getDirectories(baseDir);

  return years.map(year => {
    const yearDir = path.join(baseDir, year);
    const dates = getDirectories(yearDir);

    return {
      label: year,
      collapsed: false,
      items: dates.map(date => createDateGroup(baseDir, year, date, latestDir)),
    };
  });
}
