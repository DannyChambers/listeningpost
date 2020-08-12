<template>
  <div :class="classes" :style="`height: ${this.getHeight()}; width: ${this.getWidth()};`">
    <div class="small-round-top"></div>
    <div class="round-top-left"></div>
    <div class="speaker"></div>
      <iframe :src="this.source" />
      <div class="button"></div>
  </div>
</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Device',
    props: {
      classList: {
        type: String,
        default: "",
      },
      source: {
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
        let device = "";
        if(this.$route.query.device == "xsmall" || this.$route.query.device == "small" || this.$route.query.device == "medium"){
          device = "in-device";
        }
        return `device device--${this.variant} ${this.classList} ${device}`;
      }
    },
    methods: {
      getWidth(){
        let width
        if(this.$route.query.device){
          switch(this.$route.query.device){
            case "xsmall":
              width = "320px"
            break;
            case "small":
              width = "414px"
            break;
            case "medium":
              width = "768px"
            break;
            case "large":
              width = "1024px"
            break;
            case "xlarge":
              width = "1200px"
            break;
            case "huge":
              width = "1440px"
            break;
            default:
               width = "auto"
            break;
          }
        } else {
          width = "auto"
        }
        return width
      },
      getHeight(){
        let height
        if(this.$route.query.device){
          switch(this.$route.query.device){
            case "xsmall":
              height = "568px"
            break;
            case "small":
              height = "736px"
            break;
            case "medium":
              height = "1024px"
            break;
            case "large":
              height = "768px"
            break;
            case "xlarge":
              height = "100vh"
            break;
            case "huge":
              height = "100vh"
            break;
            default:
               height = "100vh"
            break;
          }
        } else {
          height = "100vh"
        }
        return height
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