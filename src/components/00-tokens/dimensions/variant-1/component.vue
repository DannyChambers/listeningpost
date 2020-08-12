<template>
  <div>

    <H2>Breakpoints</H2>

    <Ul classList="token-list">
      <li class="t2" v-for="breakpoint in breakpoints" :key="breakpoint.variable">
        <div>
          <div><strong>Name: </strong>{{breakpoint.name}}</div>
          <div><strong>Variable: </strong>{{breakpoint.variable}}</div>
          <div><strong>Pixel value: </strong>{{breakpoint.pixelValue}}</div>
        </div>
      </li>
    </Ul>

    <H2>Dimensions</H2>

    <Ul classList="token-list">
      <li class="t2" v-for="dimension in dimensions" :key="dimension.variable">
        <div>
          <div><strong>Variable: </strong>{{dimension.variable}}</div>
          <div><strong>Pixel value: </strong>{{dimension.pixelValue}}</div>
        </div>
      </li>
    </Ul>
    
    <H2>Spacing</H2>

    <Ul classList="token-list">
      <li class="t2" v-for="spacing in spacings" :key="spacing.variable">
        <div>
          <div><strong>Variable: </strong>{{spacing.variable}}</div>
          <div><strong>Pixel value: </strong>{{spacing.pixelValue}}</div>
        </div>
      </li>
    </Ul>

    <H2>Radii</H2>

    <Ul classList="token-list">
      <li class="t2" v-for="radius in radii" :key="radius.variable">
        <div>
          <div><strong>Variable: </strong>{{radius.variable}}</div>
          <div><strong>Pixel value: </strong>{{radius.pixelValue}}</div>
        </div>
      </li>
    </Ul>

  </div>
</template>

<script>

  export default {
    name: 'Dimensions',
    props: {
    },
    data() {
      return {
        variables: {
          breakpoints: [
            {
            'name': 'x-small',
            'variable': '$breakpoint-1',
            'pixelValue': '320px'
            },
            {
            'name': 'small',
            'variable': '$breakpoint-2',
            'pixelValue': '414px'
            },
            {
            'name': 'medium',
            'variable': '$breakpoint-3',
            'pixelValue': '768px'
            },
            {
            'name': 'large',
            'variable': '$breakpoint-4',
            'pixelValue': '1024px'
            },
            {
            'name': 'x-large',
            'variable': '$breakpoint-5',
            'pixelValue': '1200px'
            },
            {
            'name': 'huge',
            'variable': '$breakpoint-6',
            'pixelValue': '1600px'
            }
          ],
          dimension: [
            {
            'variable': '$dimension-full',
            'pixelValue': '40px'
            },
            {
            'variable': '$dimension-half',
            'pixelValue': '20px'
            },
            {
            'variable': '$dimension-quarter',
            'pixelValue': '10px'
            },
            {
            'variable': '$dimension-eighth',
            'pixelValue': '5px'
            },
            {
            'variable': '$dimension-sixteenth',
            'pixelValue': '3px'
            },
            {
            'variable': '$dimension-double',
            'pixelValue': '80px'
            },
            {
            'variable': '$dimension-triple',
            'pixelValue': '120px'
            },
            {
            'variable': '$dimension-quadruple',
            'pixelValue': '180px'
            }
          ],
          spacing: [
            {
            'variable': '$spacing-full',
            'pixelValue': '20px'
            },
            {
            'variable': '$spacing-half',
            'pixelValue': '10px'
            },
            {
            'variable': '$spacing-quarter',
            'pixelValue': '5px'
            },
            {
            'variable': '$spacing-eighth',
            'pixelValue': '3px'
            },
            {
            'variable': '$spacing-sixteenth',
            'pixelValue': '1px'
            },
            {
            'variable': '$spacing-double',
            'pixelValue': '40px'
            },
            {
            'variable': '$spacing-triple',
            'pixelValue': '60px'
            },
            {
            'variable': '$spacing-quadruple',
            'pixelValue': '80px'
            }
          ],
          radii: [
            {
            'variable': '$radius-full',
            'pixelValue': '10px'
            },
            {
            'variable': '$radius-half',
            'pixelValue': '5px'
            }
          ],
        }
      }
    },
    computed: {
      breakpoints () {
        return this.variables.breakpoints
      },
      dimensions () {
        return this.variables.dimension
      },
      spacings () {
        return this.variables.spacing
      },
      radii () {
        return this.variables.radii
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/colours/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
