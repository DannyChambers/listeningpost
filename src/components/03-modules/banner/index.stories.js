import { storiesOf } from '@storybook/vue'

import AppBar 	from './variant-1/component.vue'
import Container 	from '@/components/01-arrangements/container/variant-1/component.vue'

storiesOf('components/Modules/App bar', module)
  .add('Default', () => ({
    components: { AppBar, Container},
    template: `
      <AppBar />
    `
  }));