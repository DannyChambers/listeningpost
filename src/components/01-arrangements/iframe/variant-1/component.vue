<template>

  <iframe :src="this.source" :class="classes" />

</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Iframe',
    props: {
      classList:{
        type: String,
        default: "",
      },
      source:{
        type: String,
        default: "",
      },
    },
    computed: {
      classes() {
        return `iframe ${this.classList}`;  
      }
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
