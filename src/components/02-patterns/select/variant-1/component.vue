<template>
  <div :class="classes">
    <div class="select_inner">
      <label for="{id}" class="label">{{labelText}}</label>
      <select class="select_input">
        <option v-for="(option, index) in generateOptions" :key="index">{{option}}</option>
      </select>
      <span></span>
    </div>
    <T3 v-if="this.fieldError" class="message--error">{{this.fieldError}}</T3>
  </div>
</template>

<script>

  //Tokens --

  //Arrangements --
  import T3 from            '@/components/01-arrangements/t3/variant-1/component'

  //Patterns --

  //Modules --

  //Pages --
  
  
  export default {
    name: 'Select2',
    components: {
      T3
    },
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
