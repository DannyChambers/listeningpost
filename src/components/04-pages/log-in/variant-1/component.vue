
<template>

  <div :class="classes">

    <Pane classList="pane--vertical-centre" v-scrollobserver>
      <Container>

        <LoginForm @logInAttempt="logInAttempt" />
    
      </Container>
    </Pane>

  </div>

</template>

<script>

  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'LogInPage',
    props: {
      classList: {
        type: String,
        default: ""
      },
      successLocation: {
        type: String,
        default: ""
      },
    },
    data: function () {
      return {
        loggedInResult: null
      }
    },
    computed: {
      classes() {
        return `log-in-page ${this.classList}`;  
      }
    },
    methods: {
      logInAttempt (result) {

        if(result === true){
          
          setTimeout(() => {
            this.$router.push('/' + this.$store.state.ui.currentPrototype + this.successLocation);
          }, 2000);

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



