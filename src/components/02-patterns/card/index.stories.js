import { storiesOf } from '@storybook/vue'

import Layout   from   '../../01-arrangements/layout/variant-1/component.vue'
import T2       from   '../../01-arrangements/t2/variant-1/component.vue'

import Card1 from './variant-1/component.vue'

storiesOf('components/Patterns/Card', module)
  .add('Variant 1', () => ({
    components: { Card1, T2, Layout },
    template: `
    <Layout grid="25_25_25_25" style="padding: 20px">
      <div class="column">

          <Card1>
            <div class="card_media">
              <img src="https://via.placeholder.com/600x400" />
            </div>
          	<h2 class="card_title">Card title here</h2>
          	<div class="card_content">
          		<T2>Loren ipsum dolor sit etiet emet..</T2>
          	</div>
          </Card1>

        </div>
      </Layout>
    `
  }));