<template>
  <div :class="classes">
    <div class="select_inner">
      <label for="{id}" class="label">{{labelText}}</label>
      
      <div v-if="generateOptions.length > 4">
        <select class="select_input" id="{id}">
          <option v-for="(option, index) in generateOptions" :key="index">{{option}}</option>
        </select>
        <span></span>
        <T3 v-if="this.fieldError" class="message--error">{{this.fieldError}}</T3>
      </div>

      <div v-else>
        <div class="option_wrapper">
          <label v-for="(option, index) in generateOptions" :key="index" class="label label--button">
            <input type="radio"  name="{id}"/>
            <span>{{option}}</span>
          </label>
        </div>
        <T3 v-if="this.fieldError" class="message--error">{{this.fieldError}}</T3>
      </div>
      
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Select',
    props: {
      classList:{
        type: String,
        default: "",
      },
      id: {
        type: String,
        required: true
      },
      labelText: {
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
    data: function() {
      return {
      }
    },
    computed: {
      classes() {
        return `select ${this.classList}`;  
      },
      generateOptions() {
        return this.options.split('|');
      },
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
