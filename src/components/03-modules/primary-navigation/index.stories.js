import { storiesOf } from '@storybook/vue'

import store from '@/store';
import PrimaryNavigation1 	  from './variant-1/component.vue'
import PrimaryNavigation2 	from './variant-1/component.vue'
import PrimaryNavigation3 	  from './variant-1/component.vue'
import PrimaryNavigation4 	from './variant-1/component.vue'
import PrimaryNavigation5 	from './variant-1/component.vue'

storiesOf('components/Modules/Primary navigation', module)
  .add('Variant 1', () => ({
    store,
    components: { PrimaryNavigation1 },
    template: '<PrimaryNavigation1 />'
  }))
  .add('Variant 2', () => ({
    store,
    components: { PrimaryNavigation2 },
    template: '<PrimaryNavigation2 />'
  }))
  .add('Variant 3', () => ({
    store,
    components: { PrimaryNavigation3 },
    template: '<PrimaryNavigation3 />'
  }))
  .add('Variant 4', () => ({
    store,
    components: { PrimaryNavigation4 },
    template: '<PrimaryNavigation4 />'
  }))
  .add('Variant 5 (inline)', () => ({
    store,
    components: { PrimaryNavigation5 },
    template: '<PrimaryNavigation5 />'
  }));