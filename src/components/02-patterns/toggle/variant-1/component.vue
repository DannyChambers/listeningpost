<template>
  <div :class="classes">
    <label for="{id}" class="label">{{labelText}}</label>
    <div class="toggle_switch">
      <input type="checkbox" id="{id}" class="toggle_input" />
      <em></em>
    </div>
    <T3 v-if="this.fieldError" class="message--error">{{this.fieldError}}</T3>
  </div>
</template>

<script>

  export default {
    name: 'Toggle',
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
      fieldError: {
        type: [String, null]
      }
    },
    computed: {
      classes() {
        return `toggle ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
        this.$emit('click')
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
