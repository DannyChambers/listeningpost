import { storiesOf } from '@storybook/vue'

import LoginForm 	from './variant-1/component.vue'

storiesOf('components/Modules/Login form', module)
  .add('Default', () => ({
    components: { LoginForm },
    template: `
      <LoginForm />
    `
  }));