
import { storiesOf } from '@storybook/vue'
import store from '@/store';

import H2 from '@/components/01-arrangements/h2/variant-1/component.vue'
import T2 from '@/components/01-arrangements/t2/variant-1/component.vue'
import Button from '@/components/02-patterns/button/variant-1/component.vue'
import Modal from './variant-1/component.vue'

storiesOf('components/Patterns/Modal', module)
  .add('Single', () => ({
    store,
    components: { Modal, H2, T2, Button },
    methods: {
      openModal (id){
        this.$store.state.ui.modal.visible = id
      }
    },
    template: `
      <div>
        <Modal id="abc">
          <H2 classList="modal_title">Modal title here..</H2>
          <T2>Some modal content</T2>
        </Modal>
        <Button variant="secondary" text="Open modal" @click="openModal('abc')" />
      </div>
      `
    }))
    .add('Multiple on page', () => ({
      store,
      components: { Modal, H2, T2, Button },
      methods: {
        openModal (id){
          this.$store.state.ui.modal.visible = id
        }
      },
      template: `
        <div>
          <Modal id="abc">
            <H2 classList="modal_title">Modal title 1</H2>
            <T2>Some modal content 1</T2>
          </Modal>
          <Button variant="secondary" text="Open modal 1" @click="openModal('abc')" />
          <Modal id="xyz">
            <H2 classList="modal_title">Modal title 2</H2>
            <T2>Some modal content 2</T2>
          </Modal>
          <Button variant="secondary" text="Open modal 2" @click="openModal('xyz')" />
        </div>
        `
      }));