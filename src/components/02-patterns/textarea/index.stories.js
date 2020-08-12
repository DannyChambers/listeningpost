/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
//import { action } from '@storybook/addon-actions'

import Textarea from './variant-1/component.vue'

storiesOf('components/Patterns/Textarea', module)
  .add('Default', () => ({
    components: { Textarea },
    template: '<Textarea id="comment" label="Comment" maxLength="140" fieldError="This field is required" />'
  }));