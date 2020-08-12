import { storiesOf } from '@storybook/vue'

import ProductList 	  from './variant-1/component.vue'
import ProductList2 	from './variant-1/component.vue'

storiesOf('components/Patterns/Product list', module)
  .add('Default', () => ({
    components: { ProductList },
    template: '<ProductList />'
  }))
  .add('With filter', () => ({
    components: { ProductList },
    template: '<ProductList filter="true" />'
  }))
  .add('Topic list', () => ({
    components: { ProductList2 },
    template: '<ProductList2 />'
  }));