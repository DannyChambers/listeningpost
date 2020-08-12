/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import TextInput from './variant-1/component.vue'

storiesOf('components/Patterns/Text input', module)
  .add('Default', () => ({
    components: { TextInput },
    template: '<TextInput id="abc" label="A Text-input field" fieldError="This field is required" />'
  }));