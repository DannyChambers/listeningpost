import { storiesOf } from '@storybook/vue'

import Checkbox from './variant-1/component.vue'

storiesOf('components/Patterns/Checkbox', module)
  .add('Multiple', () => ({
    components: { Checkbox },
    template: '<Checkbox name="checkbox1" legend="Please specify any of the following options" options="Option one | Option two | Option three" fieldError="This field is required"  />'
  }))
  .add('Single', () => ({
    components: { Checkbox },
    template: '<Checkbox name="checkbox1" legend="This will be ignored as there is only one option in this example" options="A longer label that you might see at the bottom of a form, such as a terms and conditions aknowledgement" fieldError="This field is required"  />'
  }));