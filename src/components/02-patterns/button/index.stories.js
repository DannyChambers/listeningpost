import { storiesOf } from '@storybook/vue'

import Button from './variant-1/component.vue'

storiesOf('components/Patterns/Button', module)
  .add('Primary', () => ({
    components: { Button },
    template: '<Button variant="primary" text="Submit" />'
  }))
  .add('Secondary', () => ({
    components: { Button },
    template: '<Button variant="secondary" text="Cancel" />'
  }));