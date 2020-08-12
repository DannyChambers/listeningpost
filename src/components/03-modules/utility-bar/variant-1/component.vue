<template>
  <div :class="classes">

    <ul class="utiity-bar_list">
      <li  v-for="(navItem, index) in navItems" :key="index" class="utiity-bar_item"><router-link :to="navItem.location" class="utiity-bar_link"><span class="utility-bar_item_text">{{navItem.text}}</span></router-link></li>
    </ul>

  </div>
</template>

<script>

  export default {
    name: 'UtilityList',
    components: {
    },
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    data() {
      return {
        navitems: [
          {
            "text": "Accessibility",
            "location": "#n"
          },
          {
            "text": "Help",
            "location": "#n"
          },
          {
            "text": "themindgym.com",
            "location": "https:www.themindgym.com"
          }
        ]
      }
    },
    computed: {
      classes() {
        return `utility-bar ${this.classList}`;  
      },
      navItems() {
          return this.navitems
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
