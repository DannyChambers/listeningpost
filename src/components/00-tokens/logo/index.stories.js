
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import Logo  from './variant-1/component.vue'

storiesOf('components/Tokens/logo', module)
  .add('Zest Green', () => ({
    components: { Logo },
    template: '<Logo variant="white" />'
  }))
  .add('White', () => ({
    components: { Logo },
    template: '<Logo variant="white" />'
  }));