import { storiesOf } from '@storybook/vue'

import H2 from   '../../01-arrangements/h2/variant-1/component.vue'
import T2 from   '../../01-arrangements/t2/variant-1/component.vue'
import CopyBlock from './variant-1/component.vue'

storiesOf('components/Arrangements/Copy block', module)
  .add('Default', () => ({
    components: { CopyBlock, H2, T2 },
    template: `
          <CopyBlock>
          	<H2 class="card_title">This is a copy-block</H2>
          	<T2>Loren ipsum dolor sit etiet emet..</T2>
          </CopyBlock>
    `
  }));