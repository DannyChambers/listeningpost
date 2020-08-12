<template>
  <div :class="classes">

  </div>
</template>

<script>

  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  let recognition = SpeechRecognition? new SpeechRecognition() : false

  export default {
    name: 'Voice',
    components: {
    },
    props: {
      classList:{
        type: String,
        default: "",
      },
      lang: {
        type: String,
        default: 'en-US'
      },
      text: {
        type: [String, null]
      },
      watchword: {
        type: [String, null]
      },
      sleepword: {
        type: String,
        default: "sleep"
      },
      listening: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        error: false,
        speaking: false,
        listen: this.listening,
        awake: false,
        runtimeTranscription: '',
        sentences: []
      }
    },
    computed: {
      classes() {
        return `listen ${this.classList}`;  
      },
    },
    methods: {
      checkCompatibility () {
        if (!recognition) {
          this.error = 'Speech Recognition is not available on this browser.'
        }
      },
      endSpeechRecognition () {
        recognition.stop()
        this.listen = false
        this.$emit('speechend', {
          sentences: this.sentences,
          text: this.sentences.join('. ')
        })
      },
      startSpeechRecognition () {
        if (!recognition) {
          this.error = 'Speech Recognition is not available on this browser.'
          return false
        }

        recognition.lang = this.lang
        recognition.interimResults = true

        recognition.addEventListener('result', event => {
          const text = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('')
          this.runtimeTranscription = text
        })

        recognition.addEventListener('end', () => {
          if (this.runtimeTranscription !== '') {
            this.sentences.push(this.capitalizeFirstLetter(this.runtimeTranscription))
            this.$emit('update:text', `${this.text}${this.sentences.slice(-1)[0]}. `)
          }

          if(this.runtimeTranscription === undefined){

            this.runtimeTranscription = "";

          }

          if(this.runtimeTranscription.includes(this.watchword) || this.watchword == null){

            this.awake = true
            //console.log("Awaken");

          } else if(this.runtimeTranscription == this.sleepword){

            this.awake = false

          }

          this.runtimeTranscription = ''
          recognition.stop()

          if (this.listen) {

            recognition.start()

            if (this.awake) {

              //console.log("Inputs from Listen component: ", this.sentences);

              this.returnSpoken(this.sentences.pop())

            }
        }

        ////console.log("Listening: ", this.listening);
        ////console.log("Awake: ", this.awake);

        });
        recognition.start()
      },
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      speechEnd ({sentences, text}) {
        ////console.log('text', text)
        ////console.log('sentences', sentences)
        this.sentences = sentences
      },
      returnSpoken (lastSentence){
        ////console.log("Called returnSpoken");
        if(lastSentence !== undefined){
          this.$emit('phrasesHeard', lastSentence)
        }
      }
    },
    mounted () {
      this.checkCompatibility()
    },
    created (){
      ////console.log("Created");
      this.startSpeechRecognition();
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
