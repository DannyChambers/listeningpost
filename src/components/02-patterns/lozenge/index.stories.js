import { storiesOf } from '@storybook/vue'

import Lozenge from './variant-1/component.vue'

storiesOf('components/Patterns/Lozenge', module)
  .add('Default', () => ({
    components: { Lozenge },
    template: '<Lozenge href="#n" target="_blank" variant="">A lozenge</Lozenge>'
  }))
  .add('Colours', () => ({
    components: { Lozenge },
    template: '<Lozenge href="#n" target="_blank" variant="brand-1">A lozenge</Lozenge><br/><Lozenge href="#n" target="_blank" variant="brand-2">A lozenge</Lozenge><br/><Lozenge href="#n" target="_blank" variant="brand-3">A lozenge</Lozenge><br/><Lozenge href="#n" target="_blank" variant="brand-4">A lozenge</Lozenge><br/><Lozenge href="#n" target="_blank" variant="brand-5">A lozenge</Lozenge><br/>'
  }))
