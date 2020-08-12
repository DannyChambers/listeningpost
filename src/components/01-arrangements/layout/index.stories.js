import { storiesOf } from '@storybook/vue'

import T2 from     '@/components/01-arrangements/t2/variant-1/component.vue'
import Layout from './variant-1/component.vue'

storiesOf('components/Arrangements/Layout', module)
	.add('50_C', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="50_C">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('50-50', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="50_50">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('60-40', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="60_40">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('40-60', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="40_60">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('70-30', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="70_30">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('30-70', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="30_70">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('20-80', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="20_80">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('80-20', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="80_20">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('33-33-33', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="33_33_33">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}))
	.add('25-25-25-25', () => ({
		components: { Layout, T2 },
		template: `
			<Layout grid="25_25_25_25">
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 1</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
				<div class="column">
					<div style="background:#eee;min-height:150px;"><T2>Column 2</T2></div>
				</div>
			</Layout>
		`
	}));







