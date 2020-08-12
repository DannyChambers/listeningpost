<template>

  <div>

    <fieldset :class="classes" v-if="generateOptions.length > 1">
      <legend class="legend">{{this.legend}}</legend>
      <T3 v-if="this.fieldError" class="message--error">{{this.fieldError}}</T3>

      <label v-for="(option, index) in generateOptions" :key="index" class="label">
        <input type="checkbox" :name="uniqueName(index)" :value="value" @input="$emit('change', $event.target.value)" />
        <span class="label_text">{{option}}</span>
        <em></em>
      </label>
      <slot></slot>
    </fieldset>

    <div :class="classes + ' checkbox--single'"  v-else>

      <label v-for="(option, index) in generateOptions" :key="index" class="label">
        <span class="label_text">{{option}}</span>
        <input type="checkbox" :name="uniqueName(index)" :checked="isChecked" :value="value" @input="$emit('change', $event.target.value)"  />
        <em></em>
        <slot></slot>
      </label>

      <T3 v-if="this.fieldError" class="message--error">{{this.fieldError}}</T3>

    </div>
  
  </div>

</template>

<script>

  export default {
    name: 'Checkbox',
    props: {
      classList: {
        type: String,
        default: "",
      },
      name: { 
        type: String,
        required: true
      },
      legend: {
        type: String
      },
      options: {
        type: String,
        required: true
      },
      checked: {
        type: Boolean,
        default: false
      },
      value: {
      },
      fieldError: {
        type: [String, null]
      }
    },
    computed: {
      classes () {
        return `check-box ${this.classList}`;  
      },
      isChecked () {
        return this.checked
      },
      generateOptions() {
        return this.options.split('|');
      }
    },
    methods: {
      uniqueName(index) {
        return this.name + '-' + index;
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
