<template>
  <router-link :to="buildLink(this.linkTarget)" :class="classes">
    <span class="logo_text">Prototyping Platform</span>
    <!-- SVG here -->
  </router-link>
</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Logo',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: {
        type: String,
        default: "black",
      },
      linkTarget: {
        type: String,
        default: "/",
      }
    },
    computed: {
      classes() {
        return `logo logo--${this.variant} ${this.classList}`;
      },
    },
    methods: {
      buildLink(location) {
        return "/" + this.$store.state.ui.currentPrototype + location
      },
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
