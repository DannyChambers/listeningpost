import { storiesOf } from '@storybook/vue'

import Toggle from './variant-1/component.vue'

storiesOf('components/Patterns/Toggle', module)
  .add('Default', () => ({
    components: { Toggle },
    template: '<Toggle labelText="Switch me on or off" fieldError="This field is required"/>'
  }));