<template>
    <div>
      <Navbar/>
      <section class="one">
        <div class="one0">
          <div class="one1">
          <div class="one11">
            <img :src= product.photo_main alt="">
          </div>
          <div class="one12">
            <p id="one121">{{product.name}}</p>
            <hr>
            <p>${{product.price}}</p> 
            <button @click="addToCart()">ADD TO CART</button>
          </div>
        </div>
        <hr>
        <div class="one3">
          <div class="one31">
            <p>Share this product</p>
            <img src="/img/1.svg" alt=""> <img src="/img/2.svg" alt=""> <img src="/img/3.svg" alt=""> <img src="/img/4.svg" alt="">
          </div>
          <div class="one32">
            <p>Share this product</p>
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo.</li>
            </ul>
          </div>
        </div>
        </div>
        
        <div class="one2">
          <p>Delivery and Returns</p>
          <p>Details</p>
          <p>Choose location</p>
          <input type="text">
          <p>Door Delivery</p>
          <p>Delivery 2430</p>
          <p>Ready for delivery between 08 and 18th April when you order in the next 24hours </p>
           <p>Pickup Station</p>
          <p>Delivery 2430</p>
          <p>Ready for delivery between 08 and 18th April when you order in the next 24hours </p>
           <p>Return Policy</p>
          <p>Delivery 2430</p>
          <p>Ready for delivery between 08 and 18th April when you order in the next 24hours </p>
        </div>
      </section>
      <section class="two">
        <div class="two1">
          <p id="product">Product Details</p>
          <hr>
          <p>Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi quos, rem temporibus maxime dicta similique ad incidunt iure perferendis labore, aperiam consectetur dolorem quis, vitae error assumenda voluptas reiciendis. Rem fugiat, architecto veritatis tempore rerum iusto aliquid, repudiandae adipisci enim sit placeat eum laborum iste. Tempora, porro. Consequuntur aspernatur vero accusamus iure exercitationem quas illo praesentium iste ipsam quasi. Est quisquam ullam rerum facilis rem excepturi fugit dolores ex earum amet nemo nisi, eius odit fuga neque natus quasi ipsam asperiores quis. Mollitia reiciendis laboriosam eaque fugiat magni molestiae aliquam, ratione placeat, deserunt veniam laudantium sunt voluptas explicabo commodi? dolor sit amet consectetur adipisicing elit. Velit excepturi porro sit, non numquam nesciunt eum, saepe ut praesentium a enim iure deleniti animi possimus, quidem voluptatibus ipsam earum? Praesentium laboriosam iste similique, fugit odio itaque, autem corporis dolorem veniam recusandae dolore dolorum corrupti distinctio rem soluta, a rerum ducimus.</p>
        </div>
        <div class="two2">
          <p class="header">SELLER INFORMATION</p>
          <hr>
          <p class="header">MATUTU</p>
          <hr>
          <p>66% Seller Score</p>
          <p>864 followers</p>
          <hr>
          <p class="header">Seller's Performance</p>
          <p>Order Fulfillment rate</p>
          <p>Quality Score: Average</p>
          <p>Customer Rating: Average</p>
        </div>
      </section>
      <Footer/>
    </div>
</template>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .one{
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 4fr 1fr;
    column-gap: 2rem;
  }
  .one1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  .one11 img{
    width: 100%;
    
  }
  .one12 button{
    background: #4C67F5;
    color: #fff;
    width: 100%;
    border: none;
    padding: 5px;
    margin-top: 2rem;
  }
  #one121{
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  hr{
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .one3{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .one31 p{
    color: #4C67F5;
    font-weight: 16px;
    text-transform: uppercase;
  }
  .one31 img{
    margin-top: 0.5rem;
    margin-right: 1rem;
  }
  .one32 p{
    color: #4C67F5;
    font-weight: 16px;
    text-transform: uppercase;
  }
  .one32 ul{
    list-style-type: square;
  }
  .one32 li{
    margin-left: 1.4rem;
  }
  .two{
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 4fr 1fr;
    column-gap: 2rem;
  }
  .two1 #product{
    color: #4C67F5;
    font-size: 18px;

  }
  .two2 .header{
    font-weight: 500;
  }



  @media(max-width:768px){
    .one{
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap:1rem;
  }
    .one1{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  .one3{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  .one31 img{
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
  .two{
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 1rem;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  }

  
  
</style>
<script>
export default {
    data(){
        return{
          product:{}
        }
    },
    mounted(){
        this.getProduct()
    },
    methods:{
        async getProduct() {
      try {
        const response = await this.$axios.get(
          `https://direshop777.herokuapp.com/api/products/${this.$route.params.id}`
        );
        
        this.product = response.data;
        console.log(this.product)
        
      } catch (error) {
        console.error(error);
        this.$message({
          message: error,
          type: "warning",
        });
      }
    },
      async addToCart() {
      try {
        const response = await this.$axios.post(
          "https://direshop777.herokuapp.com/api/carts/"
        );
        
        console.log(response)
        
      } catch (error) {
        console.error(error);
        this.$message({
          message: error,
          type: "warning",
        });
      }
    },
    }
}
</script>