import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		globals: true,
		testTimeout: 10000,
		poolOptions: {
			workers: {
				wrangler: { configPath: './wrangler.jsonc' }, // 既存の設定を維持
				miniflare: {
					// Cloudflare Workers環境の設定
					compatibilityDate: '2023-05-18',
				},
			},
		},
	},
});
