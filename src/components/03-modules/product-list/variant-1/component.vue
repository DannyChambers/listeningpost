<template>
  <div :class="classes">

    <Accordion openText="Hide filters" closedText="Show filters" v-if="filter == 'true'">

        <div class="product-list_filter">

            <h3 class="t2"><span class="visually-hidden">Filter by</span> Solutions</h3>

            <Layout grid="33_33_33" classList="prodict-list_filter--primary_filter">

              <div class="column">
                <Checkbox name="checkbox1" options="Show all" :checked="filterCriteria1.length > 0 ? false : true" @change="filterProducts('Show all', 'category')" classList="no-spot">
                  <T3 classList="product-list_filter_count">{{ this.$store.state.data.products.length }} topics</T3>
                </Checkbox>
              </div>

              <div class="column" v-for="(category, index) in getCategories" :key="index">
                <Checkbox name="checkbox1" :options="category" :checked="filterCriteria1.includes(category) ? true : false" fieldError="" @change="filterProducts(category, 'category')" :classList="getCategoryClass(category)">
                  <T3 classList="product-list_filter_count">{{ getNumberInCategory(category) }} topics</T3>
                </Checkbox>
              </div>

            </Layout>

            <h3 class="t2"><span class="visually-hidden">Filter by</span> Format</h3>

            <Layout grid="20_20_20_20_20">

              <div class="column">
                <Checkbox name="checkbox1" options="Show all" :checked="filterCriteria2.length > 0 ? false : true" @change="filterProducts('Show all', 'format')" />
              </div>

              <div class="column" v-for="(format, index) in getFormats" :key="index">
                <Checkbox name="checkbox1" :options="format" :checked="filterCriteria2.includes(format) ? true : false" fieldError="" @change="filterProducts(format, 'format')" />
              </div>

            </Layout>

        </div>

      </Accordion>

      <div>

        <T2 v-if="this.filteredProducts.length == 0">Oops! No results for those parametres. Please try again.</T2>

        <Layout variant="list" grid="33_33_33" classList="products" v-if="getVariant == 'all'">
          <li class="column" v-for="(product, index) in filteredProducts" :key="index">
            <Card @click="selectProduct(product)">
              <h2 class="card_title">{{product.title}}</h2>
              <div class="card_content">
                <T3>{{product.description}}</T3>
                <ul class="category_list">
                  <li v-for="(category, index) in product.categories" :key="index" :class="getCategoryClass(category)">
                    <span>{{ category }}</span>
                  </li>
                </ul>
              </div>
            </Card>
          </li>
        </Layout>

        <Layout variant="list" grid="33_33_33" classList="products" v-if="getVariant == 'recent' && this.$store.getters.loggedInUser">
          <li class="column" v-for="(product, index) in recentlyViewedProducts.slice(0, 3)" :key="index">
            <Card @click="selectProduct(product)">
              <h2 class="card_title">{{product.title}}</h2>
              <div class="card_content">
                <T3>{{product.description}}</T3>
                <ul class="category_list">
                  <li v-for="(category, index) in product.categories" :key="index" :class="getCategoryClass(category)">
                    <span>{{ category }}</span>
                  </li>
                </ul>
              </div>
            </Card>
          </li>
        </Layout>

        <Layout variant="list" grid="33_33_33" classList="products" v-if="getVariant == 'inprogress' && this.$store.getters.loggedInUser">
          <li class="column" v-for="(product, index) in inProgressProducts" :key="index">
            <Card @click="selectProduct(product)">
              <h2 class="card_title">{{product.title}}</h2>
              <div class="card_content">
                <T3>{{product.description}}</T3>
                <ProgressIndicator :progress="product.progress" />
              </div>
            </Card>
          </li>
        </Layout>

        <Layout variant="list" grid="33_33_33" classList="products" v-if="getVariant == 'completed' && this.$store.getters.loggedInUser">
          <li class="column" v-for="(product, index) in completedProducts" :key="index">
            <Card @click="selectProduct(product)">
              <h2 class="card_title">{{product.title}}</h2>
              <div class="card_content">
                <T3>{{product.description}}</T3>
                <ul class="category_list">
                  <li v-for="(category, index) in product.categories" :key="index" :class="getCategoryClass(category)">
                    <span>{{ category }}</span>
                  </li>
                </ul>
              </div>
            </Card>
          </li>
        </Layout>

        <Layout variant="list" grid="33_33_33" classList="products" v-if="getVariant == 'recommended' && this.$store.getters.loggedInUser">
          <li class="column" v-for="(product, index) in recommendedProducts.slice(0, 3)" :key="index">
            <Card @click="selectProduct(product)">
              <h2 class="card_title">{{product.title}}</h2>
              <div class="card_content">
                <T3>{{product.description}}</T3>
                <ul class="category_list">
                  <li v-for="(category, index) in product.categories" :key="index" :class="getCategoryClass(category)">
                    <span>{{ category }}</span>
                  </li>
                </ul>
              </div>
            </Card>
          </li>
        </Layout>

        <Layout variant="list" grid="33_33_33" classList="products" v-if="getVariant == 'suggested' && this.$store.getters.loggedInUser">
          <li class="column" v-for="(product, index) in suggestedProducts.slice(0, 3)" :key="index">
            <Card @click="selectProduct(product)">
              <h2 class="card_title">{{product.title}}</h2>
              <div class="card_content">
                <T3>{{product.description}}</T3>
                <ul class="category_list">
                  <li v-for="(category, index) in product.categories" :key="index" :class="getCategoryClass(category)">
                    <span>{{ category }}</span>
                  </li>
                </ul>
              </div>
            </Card>
          </li>
        </Layout>

      </div>

  </div>
</template>

<script>

  //Tokens --
  import Icon               from '@/components/00-tokens/icon/variant-1/component'
  import Logo               from '@/components/00-tokens/logo/variant-1/component'

  //Arrangements --
  import Container          from '@/components/01-arrangements/container/variant-1/component'
  import Layout             from '@/components/01-arrangements/layout/variant-1/component'
  import Pane               from '@/components/01-arrangements/pane/variant-1/component'
  import H1                 from '@/components/01-arrangements/h1/variant-1/component'
  import H2                 from '@/components/01-arrangements/h2/variant-1/component'
  import H3                 from '@/components/01-arrangements/h3/variant-1/component'
  import H4                 from '@/components/01-arrangements/h4/variant-1/component'
  import H5                 from '@/components/01-arrangements/h5/variant-1/component'
  import T1                 from '@/components/01-arrangements/t1/variant-1/component'
  import T2                 from '@/components/01-arrangements/t2/variant-1/component'
  import T3                 from '@/components/01-arrangements/t3/variant-1/component.vue'
  import Ul                 from '@/components/01-arrangements/ul/variant-1/component'
  import Ol                 from '@/components/01-arrangements/ol/variant-1/component.vue'
  import Legend             from '@/components/01-arrangements/legend/variant-1/component.vue'
  import ButtonGroup        from '@/components/01-arrangements/button-group/variant-1/component.vue'
  import Card               from '@/components/02-patterns/card/variant-1/component'
  import CopyBlock          from '@/components/01-arrangements/copy-block/variant-1/component'

  //Patterns --
  import Link               from '@/components/02-patterns/link/variant-1/component'
  import Form               from '@/components/02-patterns/form/variant-1/component'
  import Textarea           from '@/components/02-patterns/textarea/variant-1/component'
  import TextInput          from '@/components/02-patterns/text-input/variant-1/component'
  import PasswordInput      from '@/components/02-patterns/password-input/variant-1/component'
  import Select             from '@/components/02-patterns/select/variant-1/component'
  import Checkbox           from '@/components/02-patterns/checkbox/variant-1/component'
  import RadioButton        from '@/components/02-patterns/radio-button/variant-1/component'

  import Toggle             from '@/components/02-patterns/toggle/variant-1/component'
  import Button             from '@/components/02-patterns/button/variant-1/component'
  import Modal              from '@/components/02-patterns/modal/variant-1/component'
  import Accordion          from '@/components/02-patterns/accordion/variant-1/component'
  import ProgressIndicator  from '@/components/02-patterns/progress-indicator/variant-1/component'
  import Listen             from '@/components/02-patterns/listen/variant-1/component'

  //Modules --
  import PageHeader         from '@/components/03-modules/page-header/variant-1/component'
  import PrimaryNavigation  from '@/components/03-modules/primary-navigation/variant-1/component'
  import LoginForm          from '@/components/03-modules/login-form/variant-1/component'

  export default {
    components: {
      Listen, Container, Layout, PageHeader, Logo, PrimaryNavigation, Accordion, ProgressIndicator, Pane, Form, LoginForm, Legend, Card, CopyBlock, H1, H2, H3,H4, H5, T1, T2, T3,
      Ul, Ol, Link, TextInput, PasswordInput, Textarea, Select, Checkbox, RadioButton, Toggle, ButtonGroup, Button, Icon, Modal
    },
    name: 'ProductList',
    props: {
      classList:{
        type: String,
        default: ""
      },
      filter: {
        type: String,
        default: "false"
      },
      variant:{
        type: String,
        required: true
      },
    },
    data() {
      return {
        filteredProducts: [],
        filterCriteria1: [],
        filterCriteria2: [],
        recentlyViewedProducts: [],
        inProgressProducts: [],
        completedProducts: [],
        recommendedProducts: [],
        suggestedProducts: []
      };
    },
    computed: {
      classes() {
        return `product-list ${this.classList}`;
      },
      getVariant() {
        return this.variant;
      },
      getCategories() {
        let categories = [];
        this.$store.state.data.products.map((product) => {
          for(let i = 0; i < product.categories.length; i++){
            if(!categories.includes(product.categories[i])){
              categories.push(product.categories[i]);
            }
          }
        });
        return categories;
      },
      getFormats() {
        let formats = [];
        this.$store.state.data.products.map((product) => {
          for(let i = 0; i < product.formats.length; i++){
            if(!formats.includes(product.formats[i])){
              formats.push(product.formats[i]);
            }
          }
        });
        return formats;
      }
    },
    methods: {
      getCategoryClass(cat){
        let theClass = cat.replace(/\s+/g, '-').toLowerCase();
        theClass = theClass.replace(/&/g,"and");
        return theClass;
      },
      getProductsInCategory(cat){//Get all products in a category --
        return this.$store.state.data.products.filter(product => product.categories.includes(cat));
      },
      getNumberInCategory(cat){//Get number of products in a category --
        return this.getProductsInCategory(cat).length;
      },
      getCategoriesOfCompleted(){//Get the categories of all completed products --
        let completedCategories = [];
        this.completedProducts.forEach((product) => {
          product.categories.forEach((category) => {
            if(!completedCategories.includes(category)){
              completedCategories.push(category);
            }
          })
        })
        return completedCategories
      },
      isProductInArray(product, array){//Is a product in an a array
        return (array.filter(arrProduct => product.id == arrProduct.id).length != "0");
      },
      compareArrays(array1, array2){//Are there any matches between two arrays
        return array1.some(r=> array2.indexOf(r) >= 0);  
      },
      shuffleArray(array){
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array
      },
      getRecentProducts() {//Products recently viewed by the user -- //Bug here.... this.$store.getters.loggedInUser.productsRecentlyViewed is undefined when called from logged out version
        let recent = this.$store.state.data.products.filter((product) => {
          return this.$store.getters.loggedInUser.productsRecentlyViewed.includes(product.id);
        })
        this.recentlyViewedProducts = recent;
      },
      getCompletedProducts(){//Get all completed products for a user --
        let completed = this.$store.state.data.products.filter((product) => {
          return this.$store.getters.loggedInUser.productsCompleted.includes(product.id); 
        })
        this.completedProducts = completed;
      },
      getInProgressProducts(){//Get all in progress products for a user -- //Bug here.... this.$store.getters.loggedInUser.productsInProgress is undefined when called from logged out version
        let getInProgressProducts = []
        this.$store.getters.loggedInUser.productsInProgress.forEach((inProgress) => {
          this.$store.state.data.products.forEach((product) => {
            if(inProgress.id == product.id){
              product.progress = inProgress.progress
              getInProgressProducts.push(product);
            }
          })
        });
        this.inProgressProducts = getInProgressProducts;
      },
      getRecommendedProducts() {
        let recommended = [];
        let categoriesCompleted = this.getCategoriesOfCompleted();
        let allProducts = this.$store.getters.allProducts;
        allProducts.forEach((product) => {
          let productCategories = product.categories;
          if(this.compareArrays(productCategories, categoriesCompleted)){
            if(!this.isProductInArray(product, this.completedProducts)){
              if(!this.isProductInArray(product, recommended)){
                recommended.push(product);
              }
            }
          }
        })
        this.recommendedProducts = this.shuffleArray(recommended);
      },
      getSuggestedProducts() {//Products with categories other than the users productsCompleted.categories
        let suggested = [];
        let categoriesCompleted = this.getCategoriesOfCompleted();
        let allProducts = this.$store.getters.allProducts;
        allProducts.forEach((product) => {
          let productCategories = product.categories;
          if(!this.compareArrays(productCategories, categoriesCompleted)){
            if(!this.isProductInArray(product, this.completedProducts)){
              if(!this.isProductInArray(product, suggested)){
                suggested.push(product);
              }
            }
          }
        })
        this.suggestedProducts = this.shuffleArray(suggested);
      },
      getProducts() {//Add all products to filteredProducts
        this.filteredProducts = this.$store.getters.allProducts
      },
      filterProducts(term, type) {
        let result1, result2;
          if(type == "category"){
            if(term == "Show all"){
              this.filterCriteria1 = [];
            } else {
              //Update filterCriteria1
              if(this.filterCriteria1.includes(term)){
                ////console.log("Included in filterCriteria1 so remove: ", term);
                this.filterCriteria1 = this.filterCriteria1.filter(item => item !== term);
                ////console.log("Removed. filterCriteria1 is now: ", this.filterCriteria1);
                this.getProducts();//Because we are removing a term, we will need restore all products and reduce again
              } else {
                this.filterCriteria1.push(term);
              }
            }
          } else {
            if(term == "Show all"){
              this.filterCriteria2 = [];
            } else {
              //Update filterCriteria2
              if(this.filterCriteria2.includes(term)){
                ////console.log("Included in filterCriteria2 so remove: ", term);
                this.filterCriteria2 = this.filterCriteria2.filter(item => item !== term);
                ////console.log("Removed. filterCriteria2 is now: ", this.filterCriteria2);
                this.getProducts();//Because we are removing a term, we will need restore all products and reduce again --
              } else {
                this.filterCriteria2.push(term);
              }
            }
          }

          //Apply filterCriteria1
          if(this.filterCriteria1.length !== 0){
            this.filterCriteria1.map((criteria) => {
              result1 = this.filteredProducts.filter(product => product.categories.includes(criteria));
            });
          } else {
              //result1 = this.filteredProducts;
              this.getProducts();
              result1 = this.filteredProducts;
          }

          //Apply filterCriteria2
          if(this.filterCriteria2.length !== 0){
            this.filterCriteria2.map((criteria) => {
              result2 = result1.filter(product => product.formats.includes(criteria));
            });
          } else {
              result2 = result1;
          }
          this.filteredProducts = result2;
      },
      selectProduct(product){
        //console.log("selectProduct: ", product);
        this.$store.dispatch('selectProduct', product);

        setTimeout(() => {
          this.$router.push('/' + this.$store.state.ui.currentPrototype + '/workout/');
        }, 1000);
      }
    },
    mounted() {
      this.$store.dispatch('loadData', 'products');
    },
    created() {
      this.getProducts()
      this.getRecentProducts()
      this.getInProgressProducts()
      this.getCompletedProducts()
      this.getRecommendedProducts()
      this.getSuggestedProducts()
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
