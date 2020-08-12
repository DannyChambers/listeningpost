  <template>
    <div :class="classes">

    <div class="device-group">
        <div class="device device--xsmall-portrait">
          <H2>Extra small 320x568 (Portrait)</H2>
          <iframe :src="this.source" />
        </div>
        <!--<div class="device device--xsmall-landscape">
          <H2>Extra small 568x320 (Landscape)</H2>
          <iframe :src="this.source" />
        </div>-->
    </div>


    <div class="device-group">
        <div class="device device--small-portrait">
          <H2>Small 375x812 (Portrait)</H2>
          <iframe :src="this.source" />
        </div>
        <!--<div class="device device--small-landscape">
          <H2>Small 812x375 (Landscape)</H2>
          <iframe :src="this.source" />
        </div>-->
    </div>

    <div class="device-group">
        <div class="device device--medium-portrait">
          <H2>Medium 768x1024 (Portrait)</H2>
          <iframe :src="this.source" />
        </div>
        <!--<div class="device device--medium-landscape">
          <H2>Medium 1024x768 (Landscape)</H2>
          <iframe :src="this.source" />
        </div>-->
    </div>

    <div class="device device--large-landscape">
      <H2>Large 1200x1400 (Landscape)</H2>
      <iframe :src="this.source" />
    </div>

    <div class="device device--xlarge-landscape">
      <H2>Extra large 1200x1400 (Landscape)</H2>
      <iframe :src="this.source" />
    </div>

   <div class="device device--huge-landscape">
      <H2>Huge 1600x1800 (Landscape)</H2>
      <iframe :src="this.source" />
    </div>

  </div>
</template>

<script>

  import components from '@/components/imports'

  export default {
    components: {
      ...components
    },
    name: 'Monitors',
    props: {
      classList: {
        type: String,
        default: "",
      },
      source: {
        type: String,
        default: "",
      },
      variant: String
    },
    computed: {
      classes() {
        return `monitors monitors--${this.variant} ${this.classList}`;
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