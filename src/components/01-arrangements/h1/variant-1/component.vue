
<template>
	<h1 :class="classes">
    <slot></slot>
  </h1>
</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'H1',
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
        let $variant = this.variant ? "h1--" + this.variant : "";
        let $alignment = this.alignment ? "h1--" + this.alignment : "";
        return `h1 ${$variant} ${$alignment} ${this.classList}`;
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
