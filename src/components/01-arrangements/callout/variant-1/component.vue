<template>
  <div :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Pane',
    props: {
      classList: {
        type: String,
        default: "",
      },
      variant: String
    },
    computed: {
      classes() {
        return `callout callout--${this.variant} ${this.classList}`;
      }
    },
    methods: {
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