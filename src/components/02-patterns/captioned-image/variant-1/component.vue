<template>
  <figure :class="classes">
    <img :src="this.source" />
    <T3 v-if="this.caption">{{ this.caption }}</T3>
  </figure>
</template>

<script>

  import T3                     from '@/components/01-arrangements/t3/variant-1/component.vue'

  export default {
    name: 'CaptionedImage',
    components: {
      T3
    },
    props: {
      classList:{
        type: String,
        default: "",
      },
      source: {
        type: String,
        required: true
      },
      caption: {
        type: String,
        required: false
      }
    },
    computed: {
      classes() {
        return `captioned-image ${this.classList}`;  
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
