<template>
          
  <button :disabled="isSpeaking" @click="this.speak">
    Speak
  </button>

</template>

<script>

  export default {
    name: 'Speech',
    props: {
      classList:{
        type: String,
        default: "",
      },
      variant: String,
      text: String
    },
    data() {
      return {
        supported: true,
        lang: this.lang || "en-GB",
        autoPlay: false,
        isSpeaking: false
      };
    },
    computed: {
      classes() {
        return `speech speech--${this.variant} ${this.classList}`;  
      },
    },
    methods: {
        speak() {
            this._speech.text = this.text;
            this._speech.lang = this.lang;
            this.isSpeaking = true;
            window.speechSynthesis.speak(this._speech);
        }
    },
    mounted(){
        if ("speechSynthesis" in window) {
            this._speech = new SpeechSynthesisUtterance();
            this._speech.lang = "en-GB";
            this._speech.pitch = "0.4";
            this._speech.rate = "0.7";
            this._speech.volume = "0.5";
            this._speech.onend = () => this.isSpeaking = false;
        } else {
            this.supported = false;
        }
    },
    created() {
        if(this.supported && this.autoPlay){
            this.speak();
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

  //@import "./_style";

</style>
