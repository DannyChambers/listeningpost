<template>
  <div :class="classes" @click="toggleAccordion">
    <h2 class="accordion_header">{{headingText}}<Icon placement="after" graphic="cheveron" /></h2>
    <div class="accordion_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import Icon               from '@/components/00-tokens/icon/variant-1/component'

  export default {
    components: {
      Icon
    },
    name: 'Accordion',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: {
        type: String,
        default: null
      },
      initialState: {
        type: String,
        default: "accordion--hidden"
      },
      openText:{
        type: String,
        default: "Accordion open"
      },
      closedText:{
        type: String,
        default: "Accordion closed"
      }
    },
    data() {
      return {
        state: this.initialState == "open" ? "accordion--active" : "accordion--hidden",
        headingText: this.closedText
      };
    },
    computed: {
      classes() {
        return `accordion accordion--${this.variant} ${this.state} ${this.classList}`;  
      }
    },
    methods: {
      toggleAccordion() {
        if(this.state == "accordion--hidden"){
          this.state = "accordion--active"
          this.headingText = this.openText;
        } else {
          this.state = "accordion--hidden"
          this.headingText = this.closedText;
        }
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
