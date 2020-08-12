<template>

  <router-link :to="buildLink(this.href)" v-if="this.href" :class="classes" @click="onClick">
    <slot></slot>
  </router-link>

  <div v-else :class="classes" @click="onClick">
    <slot></slot>
  </div>

</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Card',
    props: {
      classList:{
        type: String,
        default: "",
      },
      href:{
        type: String,
        default: "",
      },
    },
    computed: {
      classes() {
        return `card ${this.classList}`;  
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
