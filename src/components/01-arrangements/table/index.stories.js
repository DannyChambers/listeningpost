import { storiesOf } from '@storybook/vue'

import Table from './variant-1/component.vue'

storiesOf('components/Arrangements/Table', module)
  .add('Default', () => ({
    components: { Table },
    template: '<Table />'
  }));