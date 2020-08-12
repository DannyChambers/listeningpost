import { storiesOf } from '@storybook/vue'

import T2                 from '@/components/01-arrangements/t2/variant-1/component'
import Accordion from './variant-1/component.vue'

storiesOf('components/Patterns/Accordion', module)
  .add('Default', () => ({
    components: { Accordion, T2 },
    template:`<Accordion openText="Hide filters" closedText="Show filters">
                <T2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac velit odio. Nullam vel felis vel mauris bibendum sagittis ac a dui. Sed congue, magna id convallis iaculis, eros nulla porta justo, a iaculis nulla nibh eget nibh. Nam interdum fringilla leo id viverra. Nullam ultrices magna ut nisl ultricies lobortis.</T2>
              </Accordion>`
  }))
  .add('Initial state open', () => ({
    components: { Accordion, T2 },
    template:`<Accordion openText="Hide filters" closedText="Show filters" initialState="open">
                <T2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac velit odio. Nullam vel felis vel mauris bibendum sagittis ac a dui. Sed congue, magna id convallis iaculis, eros nulla porta justo, a iaculis nulla nibh eget nibh. Nam interdum fringilla leo id viverra. Nullam ultrices magna ut nisl ultricies lobortis.</T2>
              </Accordion>`
  }));