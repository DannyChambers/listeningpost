/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import PasswordInput from './variant-1/component.vue'

storiesOf('components/Patterns/Password input', module)
  .add('Default', () => ({
    components: { PasswordInput },
    template: '<PasswordInput id="abc" label="A Passord input field" rules="required" fieldError="This field is required" />'
  }));