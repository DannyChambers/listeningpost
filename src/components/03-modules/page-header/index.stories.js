import { storiesOf } from '@storybook/vue'

import PageHeader1 	          from './variant-1/component.vue'
import PageHeader2 	          from './variant-1/component.vue'
import PageHeader3 	          from './variant-1/component.vue'
import PageHeader4 	          from './variant-1/component.vue'
import PageHeader5 	          from './variant-5/component.vue'
import H2 			              from '../../01-arrangements/h2/variant-1/component.vue'
import PrimaryNavigation 			from '../../03-modules/primary-navigation/variant-1/component.vue'

storiesOf('components/Modules/Page header', module)
  .add('Variant 1', () => ({
    components: { PageHeader1, H2 },
    template: `
    <PageHeader1>
      <H2>Welcome.</H2>
    </PageHeader1>`
  }))
  .add('Variant 2', () => ({
    components: { PageHeader2, H2, PrimaryNavigation },
    template: `
    <PageHeader2>
      <H2>Welcome.</H2>
      <PrimaryNavigation />
    </PageHeader2>`
  }))
  .add('Variant 3', () => ({
    components: { PageHeader3, H2, PrimaryNavigation },
    template: `
    <PageHeader3>
      <H2>Welcome.</H2>
      <PrimaryNavigation />
    </PageHeader3>`
  }))
  .add('Variant 4', () => ({
    components: { PageHeader4, H2, PrimaryNavigation },
    template: `
    <PageHeader4>
      <H2>Welcome.</H2>
      <PrimaryNavigation />
    </PageHeader4>`
  }))
  .add('Variant 5', () => ({
    components: { PageHeader5, H2, PrimaryNavigation },
    template: `
    <PageHeader5>
      <H2>Welcome.</H2>
      <PrimaryNavigation />
    </PageHeader5>`
  }));