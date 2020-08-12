<template>
  <form action="this.action" method="post" v-on:submit.prevent :class="classes">

    <Logo />


    <fieldset class="login-form_fieldset">
      <Legend text="Sign in" />

      <CopyBlock>
        <T2>This information was provided by Interface Interface LTD.</T2>
      </CopyBlock>

      <TextInput label="Email address" id="email" placeholder="eg. example@mail.com" v-model="email" />

      <PasswordInput label="Password" id="password" placeholder="Your password" v-model="password" />

      <T3 if="formError" classList="message--error">{{formError}}</T3>

    </fieldset>

    <ButtonGroup variant="fullwidth">
      <Button variant="primary" text="Sign in" @click="logIn()" />
    </ButtonGroup>

  </form>
</template>

<script>

  //Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'
  import Pane               from '@/components/01-arrangements/pane/variant-1/component'
  import H2                 from '@/components/01-arrangements/h2/variant-1/component'
  import T2                 from '@/components/01-arrangements/t2/variant-1/component'
  import T3                 from '@/components/01-arrangements/t3/variant-1/component.vue'
  import Legend             from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup        from '@/components/01-arrangements/button-group/variant-1/component.vue'
  import CopyBlock          from '@/components/01-arrangements/copy-block/variant-1/component'

  //Patterns --
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput      from '@/components/02-patterns/password-input/variant-1/component'
  import Select1            from '@/components/02-patterns/select/variant-1/component'
  import Select2            from '@/components/02-patterns/select/variant-1/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'
  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'
  import Listen             from '@/components/02-patterns/listen/variant-1/component'
  import Card               from '@/components/02-patterns/card/variant-1/component'


  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-1/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import ProductList        from '@/components/03-modules/product-list/variant-1/component'

  //Pages --

  export default {
    name: 'LoginForm',
    components: {
      Listen, Container, Layout, PageHeader, ProductList, Logo, PrimaryNavigation, Pane, LoginForm, Legend, Card, CopyBlock, H2, T2, T3, 
      TextInput, PasswordInput, Textarea, Select1, Select2, Toggle, ButtonGroup, Button, Icon, Modal
    },
    props: {
      classList: {
        type: String,
        default: "",
      },
      action: {
        type: String,
        default: "",
      }
    },
    data() {
      return {
        email: null,
        password: null,
        formError: null
      }
    },
    computed: {
      classes() {
        return `login-form ${this.classList}`;  
      }
    },
    methods: {
      logIn (){

        if(!this.email || !this.password){

          this.formError = "Please complete all fields";

          return

        } else { 

          let users = this.$store.state.data.users;

          for(let i = 0; i < users.length; i++){

              let user = users[i];

              if (this.email == user.email){

                if(this.password == user.password){
                
                  this.$store.dispatch('logInUser', user.id);
                  this.$emit('logInAttempt', true);

                  return;

                } else {
                  this.formError = "Incorrect password";
                }

                return

              } else {
                
                if(i == (users.length - 1)){
                  this.formError = "Email not recognised";
                }
              }
          }
        }
      }
    },
    mounted () {
      this.$store.dispatch('loadData', 'users');
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
