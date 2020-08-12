<template>
  <div :class="classes">
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
      variant: {
        type: String,
        default: "",
      },
    },
    computed: {
      classes() {
        return `copy-block copy-block--${this.variant} ${this.classList}`;  
      },
    },
    methods: {
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
