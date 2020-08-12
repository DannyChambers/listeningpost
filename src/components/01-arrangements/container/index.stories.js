import { storiesOf } from '@storybook/vue'

import Container from './variant-1/component.vue'

storiesOf('components/Arrangements/Container', module)
  .add('Default', () => ({
    components: { Container },
    template: '<Container />'
  }));