// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { generatePresentationItems } from './scripts/generatePresentationItems.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://uyupun.github.io',
	base: '/takada-semi',
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
				}
			],
		}),
	],
});
