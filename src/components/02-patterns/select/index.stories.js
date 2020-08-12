import { storiesOf } from '@storybook/vue'

import SelectInput from './variant-1/component.vue'
import SelectInput2 from './variant-1/component.vue'

storiesOf('components/Patterns/Select', module)
  .add('Default', () => ({
    components: { SelectInput },
    template: '<SelectInput id="abc" labelText="Select an item" options="Option one | Option two | Option three | Option four | Option five" fieldError="This field is required" />'
  }))
  .add('Three or less options', () => ({
    components: { SelectInput2 },
    template: '<SelectInput2 id="xyz" labelText="Select an item" options="Option one | Option two | Option three" fieldError="This field is required" />'
  }));