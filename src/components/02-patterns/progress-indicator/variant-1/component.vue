<template>
  <div :class="classes">
    <span class="fill" :style="theProgress"><span class="number">{{ this.progress }}% complete</span></span>
  </div>
</template>

<script>

  export default {
    components: {
    },
    name: 'ProgressIndicator',
    props: {
      classList:{
        type: String,
        default: "",
      },
      progress: {
        type: String,
        default: "0"
      }
    },
    data() {
      return {
        currentProgress: "0"
      };
    },
    computed: {
      classes() {
        return `progress-indicator ${this.classList}`;
      },
      theProgress() {
        return 'width:' + this.currentProgress + '%'
      }
    },
    methods: {
      setProgress() {
        this.currentProgress = this.progress
      }
    },
    created() {
      setTimeout(() => {
        this.setProgress()
      }, 500)
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
