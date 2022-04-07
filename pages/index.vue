<template>
  <div>
    <div class="section">
      <Navbar/>
            <div class="four">
        <div class="four1">
          <div class="four2">
            <h6>ATOMY    +</h6>
            <a href="/products/atomy/beauty"><p>- Beauty Products </p></a>
            <a href="/products/atomy/body"><p>- Body and Wellness</p></a>
            <a href="/products/atomy/health"><p>- Health Product</p></a>
            <h6>ENAGIC    +</h6>
            <a href="/products/enagic/beauty"><p>- Beauty</p></a>
            <a href="/products/enagic/body"><p>- Body Wellness</p></a>
            <a href="/products/enagic/health"><p>- Health</p></a>
            <h6>KANGEN    +</h6>
            <a href="/products/kangen/water"><p>- Water Machines</p></a>
            <a href="/products/kangen/water"><p>- Health products</p></a>
            <h6>RAINBOW REXAIR    +</h6>
            <a href="/products/rainbow/cleaningmachines"><p>- Cleaning Machines</p></a>
            <a href="/products/rainbow/solutions"><p>- Cleaning Solutions</p></a>
            <h6>SLEPM    +</h6>
            <a href="/products/slepm/beauty"><p>- Beauty Products</p></a>
            
          </div>
          <div class="four3">
            <div class="four31">
              <div>
                <img src="/img/bud.svg" alt="">
              </div>
              <div>
                <div class="four32">
                  <img src="/img/k.svg" alt="">
                </div>
                <div>
                  <img src="/img/k.svg" alt="">
                </div>
              </div>
            </div>
            <div class="four4">
            <div class="four41">
              <img src="/img/db.svg" alt="">
            </div>
            <div class="four42">
              <img src="/img/gh.svg" alt="">
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <div class="five">
        <div class="five1">
          <p>{{healthCategory.name}}</p>
        </div>
        <div class="five2" >
          <div class="five21" v-for="(cat, index) in healthCategory.products" :key="index" @click="viewProduct(cat.id)">
            <img :src= cat.photo_main alt="">
            <p>{{cat.name}}</p>
            <!-- <span>{{cat.description}} </span> -->
            <span>${{cat.price}}</span>
          </div>
          <!-- <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div> -->
        </div>
      </div>
      <div class="five">
        <div class="five1">
          <p>{{waterMachinesCategory.name}}</p>
        </div>
        <div class="five2" >
          <div class="five21" v-for="(cat, index) in waterMachinesCategory.products" :key="index" @click="viewProduct(cat.id)">
            <img :src= cat.photo_main alt="">
            <p>{{cat.name}}</p>
            <!-- <span>{{cat.description}} </span> -->
            <span>${{cat.price}}</span>
          </div>
          <!-- <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div> -->
        </div>
      </div>
      <div class="five">
        <div class="five1">
          <p>{{healthCategory2.name}}</p>
        </div>
        <div class="five2" >
          <div class="five21" v-for="(cat, index) in healthCategory2.products" :key="index" @click="viewProduct(cat.id)">
            <img :src= cat.photo_main alt="">
            <p>{{cat.name}}</p>
            <!-- <span>{{cat.description}} </span> -->
            <span>${{cat.price}}</span>
          </div>
          <!-- <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div>
          <div class="five21">
            <img src="/img/cl.svg" alt="">
            <p>Solid Color Men Brown ...</p>
            <span>$10,000 to $25,000  </span>
          </div> -->
        </div>
      </div>
      <!-- <div class="six">
        <div class="six1">
          <p>Don't miss out on these offers!!!</p>
        </div>
        <div class="six2">
          <div class="six21">
            <img src="/img/so.svg" alt="">
          </div>
          <div class="six21">
            <img src="/img/so.svg" alt="">
          </div>
          <div class="six21">
            <img src="/img/so.svg" alt="">
          </div>
          <div class="six21">
            <img src="/img/so.svg" alt="">
          </div>
        </div>
      </div>
      <div class="seven">
        <div class="seven1">
          <p>Top Categories</p>
        </div>
        <div class="seven2">
          <div class="seven21">
            <div class="seven22">
              <img src="/img/a.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/b.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/c.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/a.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/b.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/c.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/a.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/b.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/c.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/a.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/b.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          <div class="seven21">
            <div class="seven22">
              <img src="/img/c.svg" alt="">
            </div>
            <div class="seven23">
              <p>Phone Accessories</p>
            </div>
          </div>
          
        </div>
      </div> -->
      
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
      healthCategory2:{}
    }
  },
  mounted(){
    this.getCategories(),
    this.getProducts(),
    this.getHealthCategory(),
    this.getWaterMachinesCategory(),
    this.getHealthCategory2()
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
    getHealthCategory() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/8/")
        .then((response) => {
          console.log(response);
          this.healthCategory = response.data;
          console.log(this.healthCategory)
        });
    },
    getWaterMachinesCategory() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/12/")
        .then((response) => {
          console.log(response);
          this.waterMachinesCategory = response.data;
          console.log(this.waterMachinesCategory)
        });
    },
    getHealthCategory2() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/categories/15/")
        .then((response) => {
          console.log(response);
          this.healthCategory2 = response.data;
          console.log(this.healthCategory2)
        });
    },
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
    background: rgba(80, 199, 255, 0.5);
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
  }
  .four2 h6{
    color: #4C67F5;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .four2 p,a{
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: black;
  }
  .four31{
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
  }
  .four32{
    margin-bottom: 1.6rem;
  }
  .four4{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    padding-top: 1rem;
  }
  .four41 img{
    width: 106%;
    
   
  }
  .four42 img{
    width: 100%;
    
  }
  .five{
    background: rgba(80, 199, 255, 0.5);
    padding: 0px 5rem;
    padding-top:1rem ;
  }
  .five1{
    text-align: center;
    background-color: #CCFEDA;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0;
  }
  .five2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
  }
  .five21{
    background: rgb(224, 242, 251);
    padding: 10px;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .five21 img{
    width: 100%;
    height: 224px;
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
    background: rgba(80, 199, 255, 0.5);
    padding: 0px 10px;
    padding-bottom: 10px;
  }
  .five{
    background: rgba(80, 199, 255, 0.5);
    padding: 0px 10px;
    padding-top:10px ;
  }
  .five1{
    text-align: center;
    background-color: #CCFEDA;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0;
  }
  .five2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
  }
  .five21{
    background: rgb(224, 242, 251);
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

  
  }



  @media(min-width: 577px) and (max-width:768px){
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
    background: rgba(80, 199, 255, 0.5);
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
    background: rgba(80, 199, 255, 0.5);
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
    background: rgba(80, 199, 255, 0.5);
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
    background: rgba(80, 199, 255, 0.5);
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
