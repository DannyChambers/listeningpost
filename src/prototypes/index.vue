
<template>

  <div class="prototypes">

    <div style="border-top: 4px solid #333;">
      <Container>

        <Pane variant="page">

          <CopyBlock variant="xx_0_xx_0">

            <H1>Prototype inventory</H1>

            <T1>This is a list of all the prototypes completed, or in progress.</T1>
              
            <T1>Many of the journeys here are at a low fidelity of design and should not be considered final products. Rather, they are <em>questions</em> realised in code, for testing with users and validation of ideas.</T1>

          </CopyBlock>

          <Table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Users tested</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Alpha-1</th>
                  <td>In progress</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li><router-link to="/alpha-1/?device=xsmall" class="link" target="_blank"><span class="link_text">Extra Small</span></router-link></li>
                      <li><router-link to="/alpha-1/?device=small" class="link" target="_blank"><span class="link_text">Small</span></router-link></li>
                      <li><router-link to="/alpha-1/?device=medium" class="link" target="_blank"><span class="link_text">Medium</span></router-link></li>
                      <li><router-link to="/alpha-1/" class="link" target="_blank"><span class="link_text">Large +</span></router-link></li>
                      <li><router-link to="/alpha-1/?monitors=true" class="link" target="_blank"><span class="link_text">Monitors</span></router-link></li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </Table>

          <br/><br/><br/>

        </Pane>

      </Container>

    </div>

    <PageFooter>
      <CopyBlock variant="x_0_x_0">
        <T3>&copy;2020 Interface Interface LTD</T3>
      </CopyBlock>
    </PageFooter>

  </div>

</template>

<script>
  
  //Tokens --
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'
  import Pane               from '@/components/01-arrangements/pane/variant-1/component'
  import CopyBlock          from '@/components/01-arrangements/copy-block/variant-1/component'
  import H1                 from '@/components/01-arrangements/h1/variant-1/component'
  import H2                 from '@/components/01-arrangements/h2/variant-1/component'
  import H3                 from '@/components/01-arrangements/h3/variant-1/component'
  import H4                 from '@/components/01-arrangements/h4/variant-1/component'
  import H5                 from '@/components/01-arrangements/h5/variant-1/component'
  import T1                 from '@/components/01-arrangements/t1/variant-1/component'  
  import T3                 from '@/components/01-arrangements/t3/variant-1/component'
  import Ul                 from '@/components/01-arrangements/ul/variant-1/component'
  import Table              from '@/components/01-arrangements/table/variant-1/component'

  //Patterns --
  import Link               from '@/components/02-patterns/link/variant-1/component'

  //Modules --
  import PageFooter         from '@/components/03-modules/page-footer/variant-1/component'

  export default {
    components: {
      Container, Layout, Logo, CopyBlock, Pane, H1, H2, H3, H4, H5, T1, T3, Ul, Table, Link, PageFooter
    },
    name: 'Prototypes',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `${this.classList}`;  
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

  .prototypes {
    min-height: calc(100vh - 130px);

    a, a:visited {
      display: inline-block;
      font-family: $font-family-regular;
      color: $link-colour-1;
      text-decoration: none;

      .link_text {
        border-bottom: 1px solid $link-colour-1;
        border-color: transparent;
        transition: border-color .3s ease-in-out;
      }

      &:hover {
        color: $link-colour-1;

        .link_text {
            border-color: $link-colour-1;
        }
      }
    }

    .table {
      border-spacing: 0;

      thead th {
        color: #999;
      }

      tbody {

        tr:nth-child(odd) {

            th, td {
              background: $pattern-grey-1;
            }
        }

          th {
            max-width: 200px;
          }

          td {
            font-size: .8em;

            ul {
              list-style: none;
              margin: 0;
              padding: 0;

              li {
                display: inline-block;
                padding-right: $spacing-quarter;

                &:after {
                  content: ","
                }

                &:last-child:after {
                  display: none;
                }

              }
            }
          }
      }
    }
  }

  .page-footer {
    height: 130px;
  }

  @media only screen and (min-width : $breakpoint-5){


  }

</style>



