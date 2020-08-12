import { storiesOf } from '@storybook/vue'

import Legend from './variant-1/component.vue'

storiesOf('components/Arrangements/Legend', module)
  .add('Default', () => ({
    components: { Legend },
    template: '<Legend text="This is a form legend" />'
  }));