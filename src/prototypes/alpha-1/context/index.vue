
<template>

  <div :class="classes">

    <Pane>

      <Container>

        <H1>Context</H1>

        <Layout grid="50_50">

          <div class="column">

            <CopyBlock variant="0_0_xx_0">

              <H2 classList="h2">About this demo</H2>

              <T2>This demo will take you through a new experience.</T2>

              <H3>Content</H3>

              <T2>For now the content is a guide and will be updated as it becomes available.</T2>

              <H3 classList="h4">Unbranded</H3>

              <T2>The demo may be unbranded. More brand will be applied as content becomes available. This includes tone-of-voice, fonts, colours and imagery.</T2>

              <H3 classList="h4">User context</H3>

              <T2>This is not a test of you. Rather it is a test of an idea, there are no wrong answers.</T2>

            </CopyBlock>

            <ButtonGroup>
              <Button variant="primary" text="Continue" @click="continueToPrototype()" />
            </ButtonGroup>

          </div>

          <div class="column"></div>

        </Layout>

      </Container>

    </Pane>
  
  </div>

</template>

<script>

  export default {
    name: 'Alpha1Context',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `context-page ${this.classList}`;  
      }
    },
    methods: {
      continueToPrototype() {
        if(this.$route.query.device){
          this.$store.dispatch('setCurrentDevice', this.$route.query.device);
          this.$router.push('/' + this.$store.state.ui.currentPrototype + '/session/?device=' + this.$route.query.device);
        } else if(this.$route.query.monitors){
          this.$store.dispatch('setMonitors', true);
          this.$router.push('/' + this.$store.state.ui.currentPrototype + '/session/?monitors=true');
        } else {
          this.$router.push('/' + this.$store.state.ui.currentPrototype + '/session/');
        }
      }
    },
    created() {
      this.$store.dispatch('setCurrentPrototype', "alpha-1");
      //console.log("Current prototype is: ", this.$store.state.ui.currentPrototype)
    }
  }

</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

</style>



