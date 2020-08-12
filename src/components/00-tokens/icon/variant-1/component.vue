<template>
  <span :class="classes" @click="onClick()">
    <slot></slot>
  </span>
</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Icon',
    props: {
      classList:{
        type: String,
        default: "",
      },
      placement: String,
      graphic: String,
    },
    computed: {
      classes() {
        return `icon--${this.placement} icon--${this.graphic} ${this.classList}`;  
      },
    },
    methods: {
      onClick(){
        this.$emit("click");
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
