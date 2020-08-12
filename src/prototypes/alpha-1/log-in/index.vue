
<template>

  <div>

    <Monitors source="/log-in-v1/" v-if="this.$store.getters.monitors" />

    <Device source="/log-in-v1/" v-if="this.$store.getters.currentDevice" />

    <LoginPage v-if="!this.$store.getters.currentDevice && !this.$store.getters.monitors"  />

  </div>

</template>

<script>

  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Alpha1Login',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
    },
    methods: {
    },
    created (){
      this.$store.dispatch('setCurrentPrototype', "alpha-1");
      //console.log("Current prototype is: ", this.$store.state.ui.currentPrototype)
    }
  }

</script>

<style lang="scss" scoped>

</style>
