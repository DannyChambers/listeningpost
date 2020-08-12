<template>
  <div :class="classes">

  </div>
</template>

<script>

  export default {
    name: 'Speak',
    props: {
      classList:{
        type: String,
        default: "",
      },
      phrase: {
        type: String,
        default: "",
      }
    },
    data () {
      return {
        synth: window.speechSynthesis,
        speech: new window.SpeechSynthesisUtterance()
      }
    },
    computed: {
      classes() {
        return `speak ${this.classList}`;  
      }
    },
    methods: {
        speak () {
          
          this.speech.text = this.phrase
          let voices = window.speechSynthesis.getVoices();
          this.speech.voice = voices[32];//32//40
          this.speech.pitch = .4;
          this.speech.rate = .8;
          this.synth.speak(this.speech)

        }
    },
    watch: {
      phrase: {
 
        handler () {
          this.speak()
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
