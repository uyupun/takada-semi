// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { generatePresentationItems } from './scripts/generatePresentationItems.js';

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
					slug: 'concept',
				},
				{
					label: '発表資料',
					collapsed: false,
					items: generatePresentationItems(),
					// autogenerate: {
					// 	directory: 'presentations',
					// 	collapsed: true,
					// },
				}
			],
		}),
	],
});
