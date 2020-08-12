<template>
  <div :class="classes" :style="`background-image: url('${this.backgroundImage}'); min-height: ${height}px;`" @click="onClick">
    <div class="pane_inner">
      <slot></slot>
    </div>
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
      backgroundImage: {
        type: String,
        default: "",
      },
      height: {
        type: String,
        default: "none",
      },
      variant: String
    },
    computed: {
      classes() {
        return `pane pane--${this.variant} ${this.classList}`;
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