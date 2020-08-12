
<template>
  <h2 :class="classes">
    <slot></slot>
  </h2>
</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'H2',
    props: {
      classList: {
        type: String,
        default: "",
      },
      variant: {
        type: String,
        default: "",
      },
      alignment: {
        type: String,
        default: null,
      },
    },
    computed: {
      classes() {
        let $variant = this.variant ? "h2--" + this.variant : "";
        let $alignment = this.alignment ? "h2--" + this.alignment : "";
        return `h2 ${$variant} ${$alignment} ${this.classList}`;
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

