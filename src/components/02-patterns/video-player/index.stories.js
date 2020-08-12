import { storiesOf } from '@storybook/vue'

import VideoPlayer from './variant-1/component.vue'

storiesOf('components/Patterns/Video player', module)
  .add('Default', () => ({
    components: { VideoPlayer },
    template: '<VideoPlayer src="http://vjs.zencdn.net/v/oceans.mp4" />'
  }));