/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import RadioButtons from './variant-1/component.vue'

storiesOf('components/Patterns/Radio buttons', module)
  .add('Default', () => ({
    components: { RadioButtons },
    template: '<RadioButtons name="group_1" legend="Please specify one of the following options" options="options="Option one | Option two | Option three" fieldError="This field is required" />'
  }));