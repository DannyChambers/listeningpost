import { storiesOf } from '@storybook/vue'

import Speak 	from './variant-1/component.vue'

storiesOf('components/Patterns/Speak', module)
  .add('Default', () => ({
    components: { Speak },
    template: `
      <Speak phrase="Hello, I am Milton.." />
    `
  }));