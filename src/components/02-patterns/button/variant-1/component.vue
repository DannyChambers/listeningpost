<template>
  
  <router-link :to="buildLink(this.href)" :class="classes" @click="onClick" v-if="this.href" :target="this.target">
    <span class="button_text">{{text}}</span>
    <slot></slot>
  </router-link>

  <button :class="classes" @click="onClick" v-else>
    <span class="button_text">{{text}}</span>
    <slot></slot>
  </button>

</template>

<script>

  export default {
    name: 'Button',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: String,
      text: String,
      href: String,
      target: {
        type: String,
        default: ""
      }
    },
    computed: {
      classes() {
        return `button button--${this.variant} ${this.classList}`;  
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
