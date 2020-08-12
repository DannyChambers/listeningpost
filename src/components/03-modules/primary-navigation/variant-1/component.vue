<template>
  <div :class="this.$store.state.ui.primaryNavigation.visible == true ? 'primary-navigation primary-navigation--inline primary-navigation--visible' : 'primary-navigation primary-navigation--inline'" >

    <Button variant="icononly" classList="primary-navigation_trigger" @click="toggleMenu()">
      <span class="button_text">Menu</span>
      <Icon placement="after" graphic="close" />
    </Button>

    <ul class="primary-navigation_list">
      
      <li  v-for="(navItem, index) in navItems" :key="index" class="primary-navigation_list-item" @click="toggleMenu(buildNavLink(navItem.location))"><router-link :to="buildNavLink(navItem.location)" class="primary-navigation_link"><Icon placement="before" :graphic="navItem.icon" /><span class="link_text">{{navItem.text}}</span></router-link></li>
    
      <li  v-if="this.$store.getters.loggedInUser" class="primary-navigation_list-item"><a href="#n" class="primary-navigation_link" @click.prevent="onLogout"><Icon placement="before" graphic="logout" /><span class="link_text">Sign out</span></a></li>

    </ul>

  </div>
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
  import Card               from '@/components/02-patterns/card/variant-1/component'
  import CopyBlock          from '@/components/01-arrangements/copy-block/variant-1/component'

  //Patterns --
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput      from '@/components/02-patterns/password-input/variant-1/component'
  import Select             from '@/components/02-patterns/select/variant-1/component'
  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'
  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'
  import Listen             from '@/components/02-patterns/listen/variant-1/component'

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'
  import ProductList        from '@/components/03-modules/product-list/variant-1/component'

  //Pages --


  export default {
    name: 'PrimaryNavigation',
    components: {
      Listen, Container, Layout, PageHeader, ProductList, Logo, Pane, LoginForm, Legend, Card, CopyBlock, H2, T2, T3,
      TextInput, PasswordInput, Textarea, Select, Toggle, ButtonGroup, Button, Icon, Modal
    },
    props: {
      classList: {
        type: String,
        default: "",
      },
      variant: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        loggedIn: {
          items: [
            {
              "text": "Dashboard",
              "location": "/dashboard/",
              "icon": "home"
            },
            {
              "text": "All solutions",
              "location": "/all-solutions/",
              "icon": "course"
            },
            {
              "text": "About workouts",
              "location": "/about-workouts/",
              "icon": "eworkout"
            },
            {
              "text": "Your profile",
              "location": "/your-profile/",
              "icon": "star"
            }
          ]
        },
        loggedOut: {
          items: [
            {
              "text": "All solutions",
              "location": "/all-solutions/",
              "icon": "course"
            },
            {
              "text": "About workouts",
              "location": "/about-workouts/",
              "icon": "eworkout"
            }
          ]
        }
      }
    },
    computed: {
      navItems() {
        if(this.$store.getters.loggedInUser){
          return this.loggedIn.items
        } else {
          return this.loggedOut.items
        }
      }
    },
    methods: {
      buildNavLink(location) {
        return "/" + this.$store.state.ui.currentPrototype + location
      },
      toggleMenu (location){
        //console.log("Called toggleMenu");
        if(this.$store.state.ui.primaryNavigation.visible == true){
          this.$store.state.ui.primaryNavigation.visible = false
          if(location){
            this.$router.push(location);
          }
        } else {
          this.$store.state.ui.primaryNavigation.visible = true
        }
      },
      onLogout() {
        this.$emit('logOut')
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
