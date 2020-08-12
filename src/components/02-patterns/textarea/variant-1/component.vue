
<template>

  <div :class="classes">
    <label :for="id" class="label">{{ label }}</label>
    <textarea v-model="text" :id="id" :name="id" @keyup="autosize" :maxlength="maxLength" class="textarea_input"></textarea>
    <T3 class="message--information">{{ charactersRemaining }} of {{ this.maxCharacters }} characters remaining.</T3>
    <T3 v-if="this.fieldError" class="message--error">{{this.fieldError}}</T3>
  </div>

</template>

<script>

  export default {
    name: 'Textarea',
    props: {
      classList:{
        type: String,
        default: "",
      },
      labelVisible: {
        type: Boolean,
        default: true
      },
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      },
      maxLength: {
        type: String,
        required: true
      },
      fieldError: {
        type: [String, null]
      }
    },
    data: function() {
      return {
        text: '',
        maxCharacters: 140,
      }
    },
    computed: {
      classes() {
        return `textarea ${this.classList}`;  
      },
      charactersRemaining: function () {
        return (this.text.length < this.maxCharacters) ? (this.maxCharacters - this.text.length) : 0;
      }
    },
    methods: {
      autosize: function(){
        //console.log("autosize");

        setTimeout(function(){

          let input = this.$el.getElementsByTagName('textarea')[0];
          input.style.height = "auto";
          input.style.height = `${input.scrollHeight}px`;
          
        }.bind(this), 0);

      }
    },
    mounted: function () {
      this.maxCharacters = parseInt(this.maxLength);
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



