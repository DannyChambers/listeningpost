<template>

  <ul :class="classes" v-if="variant == 'list'">
    <slot></slot>
  </ul>

  <div :class="classes" v-else>
    <slot></slot>
  </div>

</template>

<script>

  export default {
    name: 'Layout',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: String,
      grid: String
    },
    computed: {
      classes() {
        return `layout layout--${this.grid} ${this.classList}`;  
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
