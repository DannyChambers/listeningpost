import { storiesOf } from '@storybook/vue'

import Button from '../../02-patterns/button/variant-1/component.vue'
import ButtonGroup from './variant-1/component.vue'

storiesOf('components/Arrangements/Button group', module)
  .add('Left', () => ({
    components: { Button, ButtonGroup },
    template: '<ButtonGroup variant="left"><Button variant="primary" text="Submit" /><Button variant="secondary" text="Cancel" /></ButtonGroup>'
  }))
  .add('Right', () => ({
    components: { Button, ButtonGroup },
    template: '<ButtonGroup variant="right"><Button variant="primary" text="Submit" /><Button variant="secondary" text="Cancel" /></ButtonGroup>'
  }))
  .add('Centred', () => ({
    components: { Button, ButtonGroup },
    template: '<ButtonGroup variant="centre"><Button variant="primary" text="Submit" /><Button variant="secondary" text="Cancel" /></ButtonGroup>'
  }))
  .add('Full width', () => ({
    components: { Button, ButtonGroup },
    template: '<ButtonGroup variant="fullwidth"><Button variant="primary" text="Submit" /><Button variant="secondary" text="Cancel" /></ButtonGroup>'
  }));