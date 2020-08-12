
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import H2 from '@/components/01-arrangements/h2/variant-1/component.vue'
import Ul from '@/components/01-arrangements/ul/variant-1/component.vue';
import Icon from './variant-1/component.vue'

storiesOf('components/Tokens/Icons', module)
  .add('Default', () => ({
    components: { H2, Ul, Icon },
    template: `
    <div>
      <H2>Icons</H2>
      <Ul classList="token-list">
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Logout</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="logout" /></div>
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Star</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="star" /></div>
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Home</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="home" /></div>
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Github</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="github" /></div>
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Facebook</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="facebook" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Twitter</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="twitter" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> LinkedIn</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="linkedin" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Checkmark</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="checkmark" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Cheveron</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="cheveron" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Close</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="close" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Menu</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="menu" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Envelope</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="envelope" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Happy</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="mood-happy-outline" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Neutral</div>    
            <div><strong>Graphic: </strong> <Icon placement="before" graphic="mood-neutral-outline" /></div>
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Sad</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="mood-sad-outline" />
          </div>
        </li>
        <li class="t2">
          <div>
            <div><strong>Name: </strong> Search</div>
            <div><strong>Graphic: </strong><Icon placement="before" graphic="search" /></div>
          </div>
        </li>
      </Ul>
    </div>
    `
  }));