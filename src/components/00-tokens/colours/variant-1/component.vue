<template>
  <div>

    <H2>Raw palette</H2>

    <Ul classList="token-list">
      <li class="t2" v-for="(colour, index) in rawPalette" :key="index">
        <div :style="{'background': colour.hexadecimal}">
          <div><strong>Variable: </strong>{{colour.variable}}</div>
          <div><strong>Hex code: </strong>{{colour.hexadecimal}}</div>
        </div>
      </li>
    </Ul>
    
    <H2>Functional palette</H2>

    <Ul classList="token-list">
      <li class="t2" v-for="(colour2, index) in functionalPalette" :key="index">
        <div :style="{'background': colour2.hexadecimal}">
          <div><strong>Variable: </strong>{{colour2.variable}}</div>
          <div><strong>Maps to: </strong>{{colour2.relation}}</div>
        </div>
      </li>
    </Ul>

  </div>
</template>

<script>

  export default {
    name: 'Colours',
    props: {
    },
    data() {
      return {
        palettes: {
          rawPalette: [
            {
            'variable': '$pattern-green-1',
            'hexadecimal': '#2cd649',
            },
            {
            'variable': '$white',
            'hexadecimal': '#ffffff',
            },
            {
            'variable': '$mist-grey',
            'hexadecimal': '#f0f2f5',
            },
            {
            'variable': '$blackboard-grey',
            'hexadecimal': '#3a3a3e',
            },
            {
            'variable': '$marengo',
            'hexadecimal': '#5c5c61',
            },
            {
            'variable': '$eigengrau',
            'hexadecimal': '#16161d',
            },
            {
            'variable': '$turquoise',
            'hexadecimal': '#24bec6',
            },
            {
            'variable': '$amethyst',
            'hexadecimal': '#7978c7',
            },
            {
            'variable': '$pattern-blue-1;',
            'hexadecimal': '#23a0f4',
            },
            {
            'variable': '$coral',
            'hexadecimal': '#f8655b',
            },
            {
            'variable': '$gold',
            'hexadecimal': '#f9a600',
            }
          ],
          functionalPalette: [
            {
            'variable': '$line-colour-1',
            'relation': '$blackboard-grey',
            'hexadecimal': '#3a3a3e'            
            },
            {
            'variable': '$line-colour-2',
            'relation': '$mist-grey',
            'hexadecimal': '#f0f2f5'            
            },
            {
            'variable': '$shadow-colour-1',
            'relation': '$eigengrau',
            'hexadecimal': '#16161d'         
            },
            {
            'variable': '$action-colour',
            'relation': '$pattern-blue-1;',
            'hexadecimal': '#23a0f4'          
            },
            {
            'variable': '$active-colour',
            'relation': '$coral',
            'hexadecimal': '#f8655b'            
            },
            {
            'variable': '$background-colour-1',
            'relation': '$white',
            'hexadecimal': '#ffffff'            
            },
            {
            'variable': '$text-colour-1',
            'relation': '$blackboard-grey',
            'hexadecimal': '#3a3a3e'            
            },
            {
            'variable': '$text-colour-2',
            'relation': '$white',
            'hexadecimal': '#ffffff'         
            },
            {
            'variable': '$link-colour',
            'relation': '$pattern-blue-1;',
            'hexadecimal': '#23a0f4'
            },
            {
            'variable': '$message-success',
            'relation': '$turquoise',
            'hexadecimal': '#24bec6'            
            },
            {
            'variable': '$message-warning',
            'relation': '$coral',
            'hexadecimal': '#f8655b'            
            },
            {
            'variable': '$message-information',
            'relation': '$colbalt',
            'hexadecimal': '#23a0f4'            
            },
            {
            'variable': '$message-error',
            'relation': '$pattern-red-1',
            'hexadecimal': '#b91438'            
            },
          ]
        }
      }
    },
    computed: {
      rawPalette() {
        return this.palettes.rawPalette
      },
      functionalPalette() {
        return this.palettes.functionalPalette
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

  //Tokens --
  @import "@/components/00-tokens/fonts/variant-1/_style";
  @import "@/components/00-tokens/dimensions/variant-1/_style";
  @import "@/components/00-tokens/transitions/variant-1/_style";

  @import "./_style";

</style>
