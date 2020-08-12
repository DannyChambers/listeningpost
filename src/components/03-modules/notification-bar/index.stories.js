
import { storiesOf } from '@storybook/vue'

import NotificationBar from './variant-1/component.vue'

storiesOf('components/Modules/Notification bar', module)
  .add('Information', () => ({
    components: { NotificationBar },
    template: '<NotificationBar variant="information" text="This is a standard dismissable notification bar no time limit and no link" dismissable="true" removeafterseconds="" href="" />'
  }))
  .add('Warning', () => ({
    components: { NotificationBar },
    template: '<NotificationBar variant="warning" text="This is a warning style non-dismissable notification bar no time limit and no link" dismissable="false" removeafterseconds="" href="http://www.alink.com/" />'
  }))
  .add('Success', () => ({
    components: { NotificationBar },
    template: '<NotificationBar variant="success" text="This is a success style dismissable notification bar with a 4 second time limit and no link" dismissable="true" removeafterseconds="4" href="" />'
  }))
  .add('Error', () => ({
    components: { NotificationBar },
    template: '<NotificationBar variant="error" text="This is an urgent style non-dismissable notification bar no time limit and no link" dismissable="false" removeafterseconds="" href="http://www.alink.com/" />'
  }));