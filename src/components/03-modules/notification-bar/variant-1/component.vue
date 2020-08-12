<template>
  <div :class="classes" v-if="this.display == 'true'">
    <div class="notification-bar_inner">
      <T3 classList="notification_copy">
        <a href="this.link" v-if="this.link != ''" class="notification_link"><span class="notification_link_text">{{this.text}}</span></a>
        <span v-else>{{this.text}}</span>
      </T3>
    </div>
    <Button class="button button--icononly" @click="dismiss()" v-if="this.dismissable == 'true'">
      <span class="button_text">Dismiss</span>
      <Icon iconPlacement="after" iconGraphic="close" />
    </Button>
  </div>
</template>
<script>

  //Tokens --
  import Icon from        '@/components/00-tokens/icon/variant-1/component'

  //Arrangements --
  import T3 from          '@/components/01-arrangements/t3/variant-1/component'

  //Patterns --
  import Button from      '@/components/02-patterns/button/variant-1/component'

  //Modules --

  //Pages --
  

  export default {
    components: {
      T3, Button, Icon
    },
    name: 'NotificationBar',
    props: {
      classList: {
        type: String,
        default: "",
      },
      variant: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        default: null,
      },
      link: {
        type: String,
        default: "This is a notification bar",
      },
      dismissable: {
        type: String,
        default: ""
      },
      removeafterseconds: {
        type: String,
        default: ''
      },
    },
    data: function () {
      return {
        display: "true"
      }
    },
    computed: {
      classes() {
        return `notification-bar notification-bar--${this.variant} ${this.classList}`;  
      }
    },
    methods: {
      dismiss(){
        this.display = "false"
      }
    },
    created(){
      if(this.removeafterseconds != ''){
        setTimeout(() => {
          this.dismiss();
        }, (this.removeafterseconds * 1000));
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
