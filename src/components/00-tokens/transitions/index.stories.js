import { storiesOf } from '@storybook/vue'

import Transitions from './variant-1/component.vue'

storiesOf('components/Tokens/Transitions', module)
  .add('Transitions', () => ({
    components: { Transitions },
      template: '<Transitions />'
  }));