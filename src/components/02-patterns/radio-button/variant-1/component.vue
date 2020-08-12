<template>

  <fieldset :class="classes">
    <legend class="legend">{{this.legend}}</legend>
    <T3 v-if="this.fieldError" class="message--error">{{this.fieldError}}</T3>
    <label v-for="(option, index) in generateOptions" :key="index" class="label">
      <input type="radio" :name="name"  @input="$emit('change', $event.target.value)" />
      <span class="label_text">{{option}}</span>
      <em></em>
    </label>
  </fieldset>

</template>

<script>

  export default {
    name: 'RadioButton',
    props: {
      classList:{
        type: String,
        default: "",
      },
      name: {
        type: String,
        required: true
      },
      legend: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      options: {
        type: String,
        required: true
      },
      fieldError: {
        type: [String, null]
      }
    },
    computed: {
      classes() {
        return `radio-buttons ${this.classList}`;  
      },
      generateOptions() {
        return this.options.split('|');
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
