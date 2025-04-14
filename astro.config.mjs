// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://uyupun.github.io',
	base: '/takada-semi',
	image: {
		// pnpm run build時における `Could not find Sharp.` エラーの暫定的な対応策
		service: passthroughImageService(),
	},
	integrations: [
		starlight({
			title: '高田ゼミ',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/uyupun/takada-semi' }],
			sidebar: [
				{
					label: 'コンセプト',
					collapsed: false,
					slug: 'concept',
				},
				{
					label: '発表資料',
					collapsed: false,
					items: [
						{
							label: '2025',
							collapsed: false,
							items: [
								{
									label: '2/12',
									collapsed: true,
									items: [
										{
											label: 'ヒューマンインタフェースとダグラス・エンゲルバート',
											slug: '2025/0212/kazukichi',
										},
										{
											label: 'CustomPainterとAnimationControllerを使用したアニメーションの作成',
											slug: '2025/0212/takashi',
										},
									],
								},
								{
									label: '2/19',
									collapsed: true,
									items: [
										{
											label: 'ヴァネヴァー・ブッシュと『As We May Think』',
											slug: '2025/0219/kazukichi',
										},
										{
											label: 'Whisk',
											slug: '2025/0219/takashi',
										},
									]
								},
								{
									label: '2/27',
									collapsed: true,
									items: [
										{
											label: '続・ダグラス・エンゲルバートのサーベイ',
											slug: '2025/0227/kazukichi',
										},
										{
											label: 'React Create App との別れ',
											slug: '2025/0227/takashi',
										},
									]
								},
								{
									label: '3/6',
									collapsed: true,
									items: [
										{
											label: 'Next.js v14入門',
											slug: '2025/0306/takashi',
										},
									]
								},
								{
									label: '3/12',
									collapsed: true,
									items: [
										{
											label: 'Testcontainersの紹介',
											slug: '2025/0312/murata',
										},
										{
											label: 'WCAG(Web Content Accessibility Guidelines)',
											slug: '2025/0312/takashi',
										},
									]
								},
								{
									label: '3/18',
									collapsed: true,
									items: [
										{
											label: 'DevContainer とは？',
											slug: '2025/0318/murata',
										},
									]
								},
								{
									label: '4/2',
									collapsed: true,
									items: [
										{
											label: 'AIエージェントに入門した',
											slug: '2025/0402/kazukichi',
										},
									]
								},
								{
									label: '4/9',
									collapsed: false,
									items: [
										{
											label: 'これからのAIの在り方を想像する',
											slug: '2025/0409/kazukichi',
										},
										{
											label: '最近話題のMCPサーバーについてのまとめ',
											slug: '2025/0409/murata',
										},
										{
											label: 'Starlight',
											slug: '2025/0409/takashi',
										}
									]
								},
							],
						},
					],
				},
			],
		}),
	],
});
