<template>

  <router-link :to="buildLink(href)" :target="target" :class="classes" @click="onClick" v-if="href">
    <span class="link_text">
      {{text}}
    </span>
    <slot></slot>
  </router-link>

  <span :class="classes" @click="onClick" v-else>
    <span class="link_text">
      {{text}}
    </span>
    <slot></slot>
  </span>

</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Lozenge',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: {
        type: String,
        default: ""
      },
      href: {
        type: String,
        required: true
      },
      target: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `lozenge lozenge--${this.variant} ${this.classList}`;  
      },
    },
    methods: {
      buildLink(location) {
        return "/" + this.$store.state.ui.currentPrototype + location
      },
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
