<template>
    <div>
        <Navbar/>
        <div class="cart">
            <div class="cart1">
                <h2>Cart</h2>
                <hr>
                <div class="cart11" v-for="(item, index) in items" :key="index">
                    <img src="/img/1.svg" alt="">
                    <div>
                        <h5>Nestle Golden Morn</h5>
                        <p>Seller: Jumia</p>
                        <p>Quantity: {{item.quantity}}</p>
                        <p>Price per Unit: {{item.final_price}}</p>
                    </div>
                    <div>
                        <p>NGN {{item.total_product_price}}</p>
                    </div>
                </div>
            </div>
            <div class="cart2">
                <h2>Cart Summary</h2>
                <hr>
                <div class="cart21">
                    <div class="cart22">
                        <p>Subtitle</p>
                    </div>
                    <div class="cart23">
                        <p>NGN 1056</p>
                    </div>
                </div>
                <button>Checkout</button>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style scoped>
.cart{
    margin-left: 5rem;
    margin-right: 5rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.cart1{
    padding: 1rem 1rem;
    border: 1px solid green;
    border-radius: 5px;
}
.cart11{
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
}
.cart2{
    padding: 1rem;
    border: 1px solid green;
    border-radius: 5px;
}
.cart21{
    display: grid;
    grid-template-columns: 1fr 1fr ;
}
.cart23{
    text-align: right;
}




@media(max-width: 576px){
    .cart{
    margin-left: 10px;
    margin-right: 10px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.cart1{
    padding: 1rem 10px;
    border: 1px solid green;
    border-radius: 5px;
    text-align: center;
}
.cart11{
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
}
.cart2{
    padding: 1rem 10px;
    border: 1px solid green;
    border-radius: 5px;
    
}
}
</style>


<script>
export default {
    data(){
        return{
            items:{}
        }
    },
    mounted(){
        this.getCart()
    },
    methods:{
        getCart() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/carts/")
        .then((response) => {
          console.log(response);
          this.items = response.data;
          console.log(this.items)
        });
    },
    }
}
</script>