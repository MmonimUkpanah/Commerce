<template>
  <div>
    <div class="section">
      <Navbar/>
            <div class="four">
        <div class="four1">
          <div class="four2 s">
            <h6 @click="displayAtomy">ATOMY    <span v-show="!showAtomy">+</span><span v-show="showAtomy">-</span></h6>
            <div v-show="showAtomy">
              <a href="/products/atomy/beauty"><p>- Beauty Products </p></a>
              <a href="/products/atomy/body"><p>- Body and Wellness</p></a>
              <a href="/products/atomy/health"><p>- Health Product</p></a>
            </div>
            <h6 @click="displayEnagic">ENAGIC KANGEN   <span v-show="!showEnagic">+</span><span v-show="showEnagic">-</span></h6>
            <div v-show="showEnagic">
              <a href="/products/enagic/water"><p>- Water Machines</p></a>
              <a href="/products/enagic/health"><p>- Supplements</p></a>
            </div>
            
            <h6 @click="displayRain">RAINBOW REXAIR    <span v-show="!showRain">+</span><span v-show="showRain">-</span></h6>
            <div v-show="showRain">
              <a href="/products/rainbow/cleaningmachines"><p>- Cleaning Machines</p></a>
              <a href="/products/rainbow/solutions"><p>- Cleaning Solutions</p></a>
            </div>
            <h6 @click="displayQ">QUIARI    <span v-show="!showQ">+</span><span v-show="showQ">-</span></h6>
            <div v-show="showQ">
              <a href="/products/quiari/energy"><p>- Quiari Energy</p></a>
              <a href="/products/quiari/shake"><p>- Quiari Shake</p></a>
            </div>     
            <h6 @click="displaySlepm">SLEPM    <span v-show="!showSlepm">+</span><span v-show="showSlepm">-</span></h6>
            <div v-show="showSlepm">
              <a href="/products/slepm/beauty"><p>- Beauty Products</p></a>
            </div>
            
            
          </div>
          <div class="sin">
            <h3>Enagic Kangen {{category1.name}}</h3>
            <hr>
            <div class="sin4" >
              <div class="sin3" v-for="(pro, index) in category1.products " :key="index" @click="viewProduct(pro.id)">
              <div class="sin1" >
              <img :src="pro.photo_main" alt="" >
              <div class="sin11" >
                <p> {{pro.name}}</p>
                <p>${{pro.price}}</p>
              </div>
              <button>Product Details</button>
            </div>
            </div>
            </div>
            
            
          </div>
          <!-- <div class="four3">
            <h3>ATOMY PRODUCTS</h3>
            <hr>
            <div class="four31">
                <div >
                  <img src="/1.svg" alt="">
                  <button>ADD TO CART</button>
                </div>
                <div>
                    <p>(Black + Grey) = 7999 Men's Hiphop Cropped Trouser Pants </p>
                    <p>4678</p>
                    <button>PRODUCT DETAILS</button>
                </div>
            </div>
          </div> -->
          
        </div>
      </div>
      
      
      
      
      
    </div>
    <Footer/>
  </div>
</template>


<script>
export default {
  data(){
    return{
      categories:{},
      category1:{},
      category2:{},
      category3:{},
      showAtomy:false,
      showEnagic:false,
      showRain:false,
      showQ:false,
      showSlepm:false
    }
  },
  mounted(){
    this.getCategories()
    // this.getProducts(),
    // this.getHealthCategory(),
    // this.getWaterMachinesCategory(),
    // this.getHealthCategory2()
  },
  methods:{
    displayAtomy(){
      if (this.showAtomy == true){
        this.showAtomy = false
      }else if(this.showAtomy == false){
        this.showAtomy = true
      }
    },
    displayEnagic(){
      if (this.showEnagic == true){
        this.showEnagic = false
      }else if(this.showEnagic == false){
        this.showEnagic = true
      }
    },
    displayRain(){
      if (this.showRain == true){
        this.showRain = false
      }else if(this.showRain == false){
        this.showRain = true
      }
    },
    displayQ(){
      if (this.showQ == true){
        this.showQ = false
      }else if(this.showQ == false){
        this.showQ = true
      }
    },
    displaySlepm(){
      if (this.showSlepm == true){
        this.showSlepm = false
      }else if(this.showSlepm == false){
        this.showSlepm = true
      }
    },
    getCategories() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/2/")
        .then((response) => {
          console.log(response);
          this.categories = response.data;
          console.log(this.categories)
          this.category1 = response.data.children[1];
          
        });
    },
    // getProducts() {
    //   this.$axios.get( "https://direshop777.herokuapp.com/api/products/")
    //     .then((response) => {
    //       console.log(response);
    //       this.products = response.data;
    //       console.log(this.products)
    //     });
    // },
    // getHealthCategory() {
    //   this.$axios.get( "https://direshop777.herokuapp.com/api/categories/8/")
    //     .then((response) => {
    //       console.log(response);
    //       this.healthCategory = response.data;
    //       console.log(this.healthCategory)
    //     });
    // },
    // getWaterMachinesCategory() {
    //   this.$axios.get( "https://direshop777.herokuapp.com/api/categories/12/")
    //     .then((response) => {
    //       console.log(response);
    //       this.waterMachinesCategory = response.data;
    //       console.log(this.waterMachinesCategory)
    //     });
    // },
    // getHealthCategory2() {
    //   this.$axios.get( "https://direshop777.herokuapp.com/api/categories/15/")
    //     .then((response) => {
    //       console.log(response);
    //       this.healthCategory2 = response.data;
    //       console.log(this.healthCategory2)
    //     });
    // },
    viewProduct(product) {
      this.$router.push(`/products/${product}`);
    },
    
    
  }
}
</script>


<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .one{
    background-color: rgba(80, 199, 255, 0.5);
  }
  .one1{
    background-color: rgb(255, 148, 0);
    width: 15rem;
    margin-left: auto;
    text-align: center;
  }
  .one1 p{
    font-size: 20px;
    font-weight: 500;
    color: white;
  }
  .two{
    background-color: #E7EAED;
    text-align: center;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .two ul li{
    display: inline;
    list-style: none;
    color: #6A88CA;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .three{
    background: #15213B;
    padding: 0px 5rem;
  }
  .three li{
    list-style: none;
    display: inline;
  }
  .three li img{
    margin-right: 11rem;
  }
  .three li input{
    background: #FFFFFF;
    border: 1px solid rgba(196, 196, 196, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 450px;
    padding: 4px 5px;
    margin-right: 1rem;
  }
  .three li button{
    background: #94004F;
    border-radius: 10px;
    padding: 5.5px 20px;
    border: none;
  }
  .three li span{
    margin-left: 3rem;
    font-size: 20px;
    font-weight: 500;
  }
  .threesmall{
    display: none;
  }
  .four{
    background: #15213B;
    padding: 0px 5rem;
    padding-bottom: 1rem;
  }
  .four3 img{
    width: 100%;
  }
  .four1{
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 1rem;
  }
  .four2{
    padding-left:1rem;
    padding-top: 10px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0px 0px 10px;
    height: auto;
  }
  .four2 h6{
    color: #15213B;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .four2 p,a{
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: black;
  }
  .four31{
    background: white;
    color: black;
  }
  .sin{
    background: rgba(255, 255, 255, 0.9);
    color: black;
    padding: 10px 10px;
  }
  .sin1 img{
    height: 150px;
    width: 100%;
  }
  .sin11{
      height: 4.5rem;
  }
  .sin21{
    height: 12rem;
    width: 100%;
  }
  .sin hr{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .sin3{
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1rem;
    text-align: center;
  }
  .sin4{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 1rem;
    box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1rem 0.5rem;
  }
  .sin h3{
     color:#15213B ; 
  }
  .sin1 button{
    width: 100%;
    background: #15213B;
    border-radius: 3px;
    margin-top: 0.5rem;
    border: none;
    color: white;
  }
  .sin2 p{
    font-weight: 600;
  }
  .sin2 button{
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    margin-top: 3.5rem;
    color: white;
    border: none;
    width: 100%;
  }
 
  




  @media(max-width:576px){
    .s{
    display: none;
  }
    .one1{
    background-color: rgb(255, 148, 0);
    width: 100%;
    margin-left: auto;
    text-align: center;
  }
    .two ul li{
    display: inline;
    list-style: none;
    color: #6A88CA;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
    .three{
    background: #15213B;
    padding: 5px 10px;
  }
  .three li{
    list-style: none;
    display: inline;
  }
  .three li img{
    margin-right: 0px;
  }
  .three li input{
    background: #FFFFFF;
    border: 1px solid rgba(196, 196, 196, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 65%;
    padding: 4px 5px;
    margin-right: 5px;
    display: none;
  }
  .three li button{
    background: #15213B;
    border-radius: 10px;
    padding: 5.5px 20px;
    border: none;
    display: none;
    /* width: 20%; */
  }
  .three li span{
    margin-left: 5px;
    font-size: 20px;
    font-weight: 500;
  }
  .four{
    background: #15213B;
    padding: 0px 10px;
    padding-bottom: 1rem;
  }
  .four1{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
  .sin3{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  .sin4{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1rem 0.5rem;
  }
  /* .sin1 img{
    height: 80%;
    width: 100%;
  }
  .sin21{
    height:58%;
    width: 100%;
  } */
  

  
  }



  @media(min-width: 577px) and (max-width:768px){
    .three{
    background: #ED017F;
    padding: 5px 10px;
  }
  .three li{
    list-style: none;
    display: inline;
  }
  .three li img{
    margin-right: 0px;
  }
  .three li input{
    background: #FFFFFF;
    border: 1px solid rgba(196, 196, 196, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 40%;
    padding: 4px 5px;
    margin-right: 5px;
  }
  .three li button{
    background: #94004F;
    border-radius: 10px;
    padding: 5.5px 20px;
    border: none;
    /* width: 20%; */
  }
  .three li span{
    margin-left: 5px;
    font-size: 20px;
    font-weight: 500;
  }
  .four{
    background: #15213B;
    padding: 0px 10px;
    padding-bottom: 10px;
  }
  .four2 ul li::before{
    content: "\2022";
    color: #C4C4C4;
    font-weight: bolder;
    display: inline-block;
    width: 0.5rem;
    margin-right: 0.5rem;

  }
  .four4{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding-top: 10px;
  }
  .four41 img{
    width: 106%;
       
   
  }
  /* .sin1 img{
    height: 80%;
    width: 100%;
  }
  .sin21{
    height:50%;
    width: 100%;
  } */
  .sin4{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1rem 0.5rem;
  }
  }


  @media(min-width: 769px) and (max-width:1200px){
    .three{
    background: #15213B;
    padding: 5px 10px;
  }
  .three li{
    list-style: none;
    display: inline;
  }
  .three li img{
    margin-right: 2rem;
  }
  .three li input{
    background: #FFFFFF;
    border: 1px solid rgba(196, 196, 196, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 45%;
    padding: 4px 5px;
    margin-right: 5px;
  }
  .three li button{
    background: #94004F;
    border-radius: 10px;
    padding: 5.5px 20px;
    border: none;
    /* width: 20%; */
  }
  .three li span{
    margin-left: 1rem;
    font-size: 20px;
    font-weight: 500;
  }
  .four{
    background: #15213B;
    padding: 0px 10px;
    padding-bottom: 10px;
  }
  .four2 ul li::before{
    content: "\2022";
    color: #C4C4C4;
    font-weight: bolder;
    display: inline-block;
    width: 0.5rem;
    margin-right: 0.5rem;

  }
  .four4{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding-top: 10px;
  }
  .four41 img{
    width: 106%;
       
   
  }
  /* .sin1 img{
    height: 80%;
    width: 100%;
  }
  .sin21{
    height:56%;
    width: 100%;
  } */
  
    
  }
</style>