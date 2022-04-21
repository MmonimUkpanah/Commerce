<template>
    <div>
      <Navbar/>
      <section class="one">
        <div class="one0">
          <div class="one1">
          <div class="one11">
            <img :src= products.photo_main alt="">
          </div>
          <div class="one12">
            <p id="one121">{{products.name}}</p>
            <hr>
            <p>${{products.price}}</p> 
            <!-- <button @click="addToCart()">ADD TO CART</button> -->
            <div>
              <b-button v-b-modal.modal-1>Add to Cart</b-button>

              <b-modal id="modal-1" title="Quantity">
                <form  method="post" @submit.prevent="addToCart()">
                  <label for="quantity">Quantity</label>
                  <input type="number" min="1" required v-model="product.quantity">
                  <button type="submit">ADD TO CART</button>
                </form>
              </b-modal>
            </div>

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
              <!-- <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo.</li> -->
            </ul>
          </div>
        </div>
        </div>
        
        <div class="one2">
          <!-- <p>Delivery and Returns</p>
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
          <p>Ready for delivery between 08 and 18th April when you order in the next 24hours </p> -->
        </div>
      </section>
      <section class="two">
        <div class="two1">
          <p id="product">Product Details</p>
          <hr>
          <p>{{products.description}}</p>
        </div>
        <div class="two2">
          <!-- <p class="header">SELLER INFORMATION</p>
          <hr>
          <p class="header">MATUTU</p>
          <hr>
          <p>66% Seller Score</p>
          <p>864 followers</p>
          <hr>
          <p class="header">Seller's Performance</p>
          <p>Order Fulfillment rate</p>
          <p>Quality Score: Average</p>
          <p>Customer Rating: Average</p> -->
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
    height: 20rem;
  }
  .one12 button, b-button{
    background: #4C67F5;
    color: #fff;
    width: 100%;
    border: none;
    padding: 5px;
    margin-top: 1rem;
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
 
   #modal-1 input{
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
  }
   #modal-1 button{
    background: #4C67F5;
    color: #fff;
    width: 100%;
    border: none;
    padding: 5px;
    margin-top: 1rem;
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
          products:{},
          product:{
            product:0,
            ordered: true,
            quantity: 1,
          }

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
        
        this.products = response.data;
        this.product.product = response.data.id
        console.log(this.product.product)
        
      } catch (error) {
        console.error(error);
        
      }
    },
      async addToCart() {
      
      if (this.$auth.loggedIn == true){
        try {
        const response = await this.$axios.post(
          "https://direshop777.herokuapp.com/api/carts/", this.product
        );
        
        console.log(response)
        this.$swal({ 
                icon: 'success',
                text: "Successfully added item to cart👍",
                showConfirmButton: false,
                timer: 2500
                })   
        
      } catch (error) {
        console.error(error);
        
      }
      }else{
        this.$router.push("/login");
      }
    },
    }
}
</script>