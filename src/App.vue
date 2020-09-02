<template>
  <div id="app">

    <Speech text="Will there ever be a boy, who can swim as fast as a Shark.." />
    <br/><br/>
    <Button text="background" @click="backgroundAudio()" />
    <br/><br/>
    <Button text="Get messages" @click="getMessages()" />
  </div>
</template>

<script>
  
  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'App',
    methods:{
      backgroundAudio (){
        const audio = new Audio(require('./assets/audio/sound.mp3'));
        audio.loop = true;
        audio.play();
      },
      getMessages(){

        

      }
    }
  }
</script>

<style lang="scss">

  html, body {
    margin: 0;
    padding: 0;
  }

</style>


