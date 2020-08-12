
<template>
  <p :class="classes">
    <slot></slot>
  </p>
</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'T2',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `t2 ${this.classList}`;
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

