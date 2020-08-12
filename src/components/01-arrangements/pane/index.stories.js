import { storiesOf } from '@storybook/vue'

import Pane from './variant-1/component.vue'

storiesOf('components/Arrangements/Pane', module)
  .add('Default', () => ({
    components: { Pane },
    template: '<Pane />'
  }))
  .add('Centred vertically', () => ({
    components: { Pane },
    template: '<Pane variant="vertical" />'
  }));