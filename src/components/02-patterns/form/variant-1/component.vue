<template>
  <form :action="this.action" method="post" :class="classes">
    <fieldset class="form_fieldset">
      <Legend :text="this.legend" v-if="this.legend" />

      <slot name="form-fields"></slot>

    </fieldset>

    <slot name="form-buttons"></slot>

  </form>
</template>

<script>

  export default {
    name: 'Form',
    props: {
      classList: {
        type: String,
        default: "",
      },
      action: {
        type: String,
        default: "",
      },
      legend: {
        type: String,
        default: null,
      }
    },
    data() {
      return {

      }
    },
    computed: {
      classes() {
        return `form ${this.classList}`;  
      }
    },
    methods: {
    },
    mounted () {

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
