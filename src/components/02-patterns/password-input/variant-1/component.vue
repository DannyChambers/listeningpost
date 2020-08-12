<template>
  <div :class="classes">
    <label :for="id" class="password-input_label">{{ label }}</label>
    <input :id="id" :placeholder="placeholder" :type="type" :value="value" :disabled="isDisabled" @focus="this.HidePassword" @click="this.HidePassword" @input="$emit('input', $event.target.value)" />
    <T3 v-if="fieldError" class="message--error">{{this.fieldError}}</T3>
  </div>
</template>

<script>

  export default {
    name: 'PasswordInput',
    props: {
      classList:{
        type: String,
        default: "",
      },
      label: {
        type: String,
        required: true
      },
      labelVisible: {
        type: Boolean,
        default: true
      },
      id: {
        type: String,
        required: true
      },
      type: {
        default() { return 'text'; }
      },
      value: {
      },
      disabled: {
        type: String,
        default: "false" 
      },
      placeholder: {
        type: String
      },
      fieldError: {
        type: [String, null]
      }
    },
    data: function () {
      return {
      }
    },
    computed: {
      classes() {
        return `password-input ${this.classList}`;  
      },
      isDisabled (){
        let disabled;
        if(this.disabled == "true"){
          disabled = true
        } else {
          disabled = false
        }
        return disabled
      }
    },
    methods: {
      HidePassword (){
        this.type = "password";
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
