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
          <div class="four3">
            <div class="four31">
              <div class="four311">
                <img src="~assets/a.jpeg" alt="">
              </div>
              <div>
                <div class="four32">
                  <img src="/new/b.jpeg" alt="">
                </div>
                <div class="four33">
                  <img src="/new/c.jpeg" alt="">
                </div>
              </div>
            </div>
            <div class="four4">
            <div class="four41">
              <img src="/new/d.jpeg" alt="">
            </div>
            <div class="four42">
              <img src="/new/e.jpeg" alt="">
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <div class="five">
        <div class="five1">
          <div class="five11">
            <p>Atomy Beauty Products</p>
          </div>
          <div class="five12">
            <p><a href="/products/atomy/beauty">View More >></a> </p>
          </div>
        </div>
        <div class="five2" >
          <div class="five21" v-for="(cat, index) in computedAtomy" :key="index" @click="viewProduct(cat.id)">
            <img :src= cat.photo_main alt="">
            <p>{{cat.name}}</p>
            <span>${{cat.price}}</span>
          </div>
          
        </div>
      </div>
      <div class="five">
        <div class="five1">
          <div class="five11">
            <p>Enagic Kangen Water Machines</p>
          </div>
          <div class="five12">
            <p><a href="/products/enagic/water">View More >></a></p>
          </div>
        </div>
        <div class="five2" >
          <div class="five21" v-for="(cat, index) in computedEnagic" :key="index" @click="viewProduct(cat.id)">
            <img :src= cat.photo_main alt="">
            <p>{{cat.name}}</p>
            <span>${{cat.price}}</span>
          </div>
          
        </div>
      </div>
      <div class="five">
        <div class="five1">
          <div class="five11">
            <p>Rainbow Rexair Cleaning Machines</p>
          </div>
          <div class="five12">
            <p><a href="/products/rainbow/cleaningmachines">View More >></a></p>
          </div>
        </div>
        <div class="five2" >
          <div class="five21" v-for="(cat, index) in computedRainbow" :key="index" @click="viewProduct(cat.id)">
            <img :src= cat.photo_main alt="">
            <p>{{cat.name}}</p>
            <span>${{cat.price}}</span>
          </div>
          
        </div>
      </div>
      <div class="five">
        <div class="five1">
          <div class="five11">
            <p>Slepm Beauty Products</p>
          </div>
          <div class="five12">
            <p><a href="/products/slepm/beauty">View More >></a></p>
          </div>
        </div>
        <div class="five2" >
          <div class="five21" v-for="(cat, index) in computedSlepm" :key="index" @click="viewProduct(cat.id)">
            <img :src= cat.photo_main alt="">
            <p>{{cat.name}}</p>
            <span>${{cat.price}}</span>
          </div>
          
        </div>
      </div>
      <div class="five">
        <div class="five1">
          <div class="five11">
            <p>Quiari Energy Shake</p>
          </div>
          <div class="five12">
            <p><a href="/products/quiari/energy">View More >></a></p>
          </div>
        </div>
        <div class="five2" >
          <div class="five21" v-for="(cat, index) in computedQ" :key="index" @click="viewProduct(cat.id)">
            <img :src= cat.photo_main alt="">
            <p>{{cat.name}}</p>
            <span>${{cat.price}}</span>
          </div>
          
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
      products:{},
      healthCategory:{},
      waterMachinesCategory:{},
      healthCategory2:{},
      limit: 6,
      atomy:[],
      enagic:[],
      rainbow:[],
      slepm:[],
      q:[],
      showAtomy:false,
      showEnagic:false,
      showRain:false,
      showQ:false,
      showSlepm:false
    }
  },
  mounted(){
    this.getCategories(),
    this.getProducts(),
    this.getAtomyBeauty(),
    this.getEnagicBody(),
    this.getRainbow(),
    this.getSlepm(),
    this.getQ()
    // this.getWaterMachinesCategory(),
    // this.getHealthCategory2()
  },
  computed:{
    computedAtomy(){
    return this.limit ? this.atomy.slice(0,this.limit) : this.atomy
  },
  computedEnagic(){
    return this.limit ? this.enagic.slice(0,this.limit) : this.enagic
  },
   computedRainbow(){
    return this.limit ? this.rainbow.slice(0,this.limit) : this.rainbow
  },
   computedSlepm(){
    return this.limit ? this.slepm.slice(0,this.limit) : this.slepm
  },
  computedQ(){
    return this.limit ? this.q.slice(0,this.limit) : this.q
  },
  },
  methods:{
    getCategories() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/")
        .then((response) => {
          console.log(response);
          this.categories = response.data;
          console.log(this.categories)
        });
    },
    getProducts() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/products/")
        .then((response) => {
          console.log(response);
          this.products = response.data;
          console.log(this.products)
        });
    },
    getAtomyBeauty() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/1/")
        .then((response) => {
          this.atomy = response.data.children[0].products;
          
        });
    },
    getEnagicBody() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/2/")
        .then((response) => {
          this.enagic = response.data.children[0].products;
        
        });
    },
    getRainbow() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/4/")
        .then((response) => {
          this.rainbow = response.data.children[0].products;
        });
    },
    getSlepm() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/5/")
        .then((response) => {
          this.slepm = response.data.products;
        });
    },
    getQ() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/50/")
        .then((response) => {
          this.q = response.data.children[0].products;
        });
    },
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
    background: rgba(80, 199, 255, 0.5);
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
    background: #698EDE;
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
    background: white;
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
    padding-right: 1rem;
    padding-top: 10px;
    background: #0D99FF;
    box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0px 0px 10px;
  }
  .four2 h6{
    color:  black;
    background: white;
    font-weight: 700;
    margin-bottom: 0.5rem;
    cursor: pointer;
    border-radius: 5px;
   padding: 3px 5px;
  }
  
  .four2 p,a{
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
  }
  .four31{
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
  }
  .four311 img{
    height: 26rem;
  
  }
  .four32{
    margin-bottom: 1.6rem;
  }
  .four32 img{
    height: 12rem;
  }
  .four33 img{
    height: 12.5rem;
  }
  .four4{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    padding-top: 1rem;
  }
  .four41 img{
    width: 106%;
    height: 12rem;
   
  }
  .four42 img{
    width: 100%;
    height: 12rem;
  }
  .five{
    background:white;
    padding: 0px 5rem;
    padding-top:1rem ;
    
  }
  .five1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #0D99FF;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
  }
  .five12{
    text-align: right;
  }
  .five12 p a{
    color: white;
  }
  .five2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
  }
  .five21{
    background:   rgba(101, 155, 245, 0.7);
    padding: 10px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
    border-radius: 5px;
    color: black;
  }
  .five21 img{
    width: 100%;
    height: 150px;
  }
  .five21 p,span{
    font-weight: 700;
    font-size: 17px;
    margin-top: 1rem;
  }
  .six{
    background: rgba(80, 199, 255, 0.5);
    padding: 0px 5rem;
    padding-top:1rem ;
  }
  .six1{
    text-align: center;
    background-color: #CCFEDA;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0;
  }
  .six2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }
  .six21 img{
    width: 100%;
  }
  .seven{
    background: rgba(80, 199, 255, 0.5);
    padding: 1rem 5rem;

  }
  .seven1{
    text-align: center;
    background-color: #CCFEDA;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0;
  }
  .seven2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }
  .seven21{
    background: rgba(196, 196, 196, 0.5);
    border-radius: 5px;
  }
  .seven22 img{
    width: 100%;
    
  }
  .seven23{
    background-color: white;
    text-align: center;
  }




  @media(max-width:576px){
    .one1{
    background-color: rgb(255, 148, 0);
    width: 100%;
    margin-left: auto;
    text-align: center;
  }
  .four311 img{
    height: auto;
  
  }
   .four32 img{
    height: auto;
  }
  .four33 img{
    height: auto;
  }
  .four41 img{
    width: 106%;
    height: auto;
   
  }
  .four42 img{
    width: 100%;
    height: auto;
  }
  .s{
    display: none;
  }
    .two ul li{
    display: inline;
    list-style: none;
    color: #6A88CA;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
    .three{
    background: rgba(80, 199, 255, 0.5);
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
    background: #698EDE;
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
  .four1{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
  .four31{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }
  .four32{
    margin-bottom: 10px;
  }
  .four4{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    padding-top: 1rem;
  }
  .four41 img{
    width: 100%;
  }
  .four{
    background:white;
    padding: 0px 10px;
    padding-bottom: 10px;
  }
  .five{
    background: white;
    padding: 0px 10px;
    padding-top:10px ;
  }
  
  .five2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
  }
  .five1{
    display: grid;
    grid-template-columns: 1fr ;
    background-color: #0D99FF;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 10px;
    color: white;
    text-align: center;
  }
  .five12{
    text-align: center;
  }
  .five21{
    background: rgba(255, 255, 255, 0.7);
    padding: 10px;
  }
  .five21 img{
    width: 100%;
  }
  .five21 p,span{
    font-weight: 700;
    font-size: 17px;
    margin-top: 1rem;
  }
  .six{
    background: rgba(80, 199, 255, 0.5);
    padding: 0px 10px;
    padding-top:1rem ;
  }
  .six1{
    text-align: center;
    background-color: #CCFEDA;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0;
  }
  .six2 {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }
  .six21 img{
    width: 100%;
  }
  .seven{
    background: rgba(80, 199, 255, 0.5);
    padding: 1rem 10px;
    
  }
  .seven1{
    text-align: center;
    background-color: #CCFEDA;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0;
  }
  .seven2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
  }
  .seven21{
    background: rgba(196, 196, 196, 0.5);
    border-radius: 5px;
  }
  .seven22 img{
    width: 100%;
    
  }
  .seven23{
    background-color: white;
    text-align: center;
  }
  .four2{
    
    padding-top: 10px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0px 0px 10px;
  }

  
  }



  @media(min-width: 577px) and (max-width:768px){
    .three{
    background: rgba(80, 199, 255, 0.5);
    padding: 5px 10px;
  }
  .four1{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 1rem;
  }
  .three li{
    list-style: none;
    display: inline;
  }
  .four2{
    padding-left:0.1rem;
    padding-top: 10px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0px 0px 10px;
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
    background: #698EDE;
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
    background: white;
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
  .four32{
    margin-bottom: 12px;
  }
  .five{
    background: white;
    padding: 0px 10px;
    padding-top:10px ;
  }
  .six{
    background: rgba(80, 199, 255, 0.5);
    padding: 0px 10px;
    padding-top:1rem ;
  }
  .seven{
    background: rgba(80, 199, 255, 0.5);
    padding: 1rem 10px;
    
  }
  
  }


  @media(min-width: 769px) and (max-width:1200px){
    .three{
    background: rgba(80, 199, 255, 0.5);
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
    background: #698EDE;
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
    background: white;
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
  .four32{
    margin-bottom: 12px;
  }
  .five{
    background: white;
    padding: 0px 10px;
    padding-top:10px ;
  }
  .six{
    background: rgba(80, 199, 255, 0.5);
    padding: 0px 10px;
    padding-top:1rem ;
  }
  .seven{
    background: rgba(80, 199, 255, 0.5);
    padding: 0px 10px;
    padding-top:1rem ;
  }
    
  }
</style>
