<template>
  <div :class="classes">

    <Logo linkTarget="/" />

    <Button variant="icononly" classList="primary-navigation_trigger" @click="toggleMenu()">
      <span class="button_text">Menu</span>
      <Icon placement="after" graphic="menu" />
    </Button>

    <slot></slot>

  </div>
</template>

<script>

  //Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'

  //Patterns --
  import Button             from '@/components/02-patterns/button/variant-1/component'

  //Modules --
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-1/component'



  export default {
    components: {
      Icon, Logo, Container, Layout, Button, PrimaryNavigation
    },
    name: 'PageHeader',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `page-header ${this.classList}`;  
      },
    },
    methods: {
      toggleMenu (){
        //console.log("Called toggleMenu");
        if(this.$store.state.ui.primaryNavigation.visible == true){
          this.$store.state.ui.primaryNavigation.visible = false
        } else {
          this.$store.state.ui.primaryNavigation.visible = true
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
