import { storiesOf } from '@storybook/vue'

import T2 from '../../01-arrangements/t2/variant-1/component.vue'
import Link from './variant-1/component.vue'

storiesOf('components/Patterns/Link', module)
  .add('Inline', () => ({
    components: { T2, Link },
    template: '<T2>This is a paragraph containing an <Link href="#n" target="_blank" variant="inline" text="An inline link" /></T2>'
  }))
  .add('Standalone', () => ({
    components: { Link },
    template: '<Link href="#n" target="_blank" variant="standalone" text="A standalone link" />'

  }));