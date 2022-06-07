<template>

    <div >
<!-- includes jQuery -->

<!-- includes the Braintree JS client SDK -->
                    

                    <!-- includes jQuery -->
                    
        <Navbar/>
        <div class="over">
             <div class="cart">
            <div class="cart1">
                <h2>Cart</h2>
                <hr>
                <div class="cart11" v-for="(item, index) in items" :key="index">
                    <div class="cart12">
                        <img :src= item.product.photo_main alt="">
                    </div>
                    
                    <div>
                        <h5>{{item.product.name}}</h5>
                        <p>{{item.product.description}}</p>
                        <p>Quantity: {{item.quantity}}</p>
                        <p class="delete mt-3" @click="deleteItem(item.id)"><img src="/img/delete.png" alt=""> Remove from cart</p>
                    </div>
                    <div>
                        <p>${{item.total_product_price}}</p>
                    </div>
                    
                </div>
                
            </div>
            <div class="cart2">
                <h2>Cart Summary</h2>
                <hr>
                <div class="cart21" v-for="(item, index) in items" :key="index">
                    <div class="cart22">
                        <p>{{item.product.name}}</p>
                    </div>
                    <div class="cart23">
                        <p>${{item.total_product_price}}</p>
                    </div>
                    
                </div>
                <div class="cart21">
                    <p>Total</p> <p class="cart23">$ {{amount}}</p>
                </div>
                
                <div >
                    <b-button v-b-modal.modal-1 class="but">Checkout Information</b-button>

                    <b-modal id="modal-1" :hide-footer="true" >
                        <form method="post" class="cart24" @submit.prevent="checkOut()">
                            <label for="Shipping Address">Shipping Address</label>
                            <input type="text" class="form-control" v-model="checkoutInfo.address" required>
                            <label for="Gender">Gender</label>
                            <select class="form-select form-control"  v-model="checkoutInfo.gender" aria-label="Default select example" required>
                                <option selected disabled>Open this select menu</option>
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>

                                
                            </select>
                            <!-- <label for="Country">Country</label>
                            <select class="form-select" v-model="checkoutInfo.country" aria-label="Default select example">
                                <option selected disabled>Open this select menu</option>
                                <option  v-for="(item, index) in countries" :key="index" :value=item>{{item}}</option>
                                
                            </select> -->
                            <label for="Zip Code">Zip Code</label>
                            <input type="text" class="form-control" v-model="checkoutInfo.zip" required>
                            <button type="submit" class="form-control but mt-3">Submit</button>
                        </form>
                    </b-modal>
                </div>
                
                   <div >
                    <div class="">
        <div class="mt-3" id="myDIV">
            <div class="card bg-light">
                <div class="card-header">Payment Information</div>
                <div class="card-body">
                    <div class="alert alert-success" v-show="checkoutInfo.payment_method_nonce">
                        Successfully generated nonce.
                    </div>
                    <div class="alert alert-danger" v-show="error">
                        {{ error }}
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="amount">Amount</label>
                            <div class="input-group">
                                <div class="input-group-prepend"><span class="input-group-text">$</span></div>
                                <input type="number" id="amount" v-model="amount" class="form-control" placeholder="Enter Amount">
                            </div>
                        </div>
                         <hr />
                        <div class="form-group">
                            <label>Credit Card Number</label>
                            <div id="creditCardNumber" class="form-control"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>Expire Date</label>
                                    <div id="expireDate" class="form-control"></div>
                                </div>
                                <div class="col-6">
                                    <label>CVV</label>
                                    <div id="cvv" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block" @click.prevent="payWithCreditCard">Pay with Credit Card</button>
                        <hr />
                        <div id="paypalButton"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
                

                </div>
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
    
}
.delete{
    cursor: pointer;
}
.delete img{
    width: 1.5rem;
}
.over{
    background: #E5E5E5;
    padding-top: 10vh;
    padding-bottom: 10vh;
    color: #15213B;
}
.but{
    background: #15213B;
    color: white;
    width: 100%;
    border: none;
}
.cart24{
    color: #15213B !important;
}
.cart1{
    padding: 1rem 1rem;
    border-radius: 5px;
    background: white;
    box-shadow: 5px 5px 8px #888888;
}
.cart11{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    column-gap: 1.5rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    border-bottom: 0.5px solid #E5E5E5;
}

.cart12 img{
    width: 100%;
    height: 10rem;
}
.cart2{
    padding: 1rem;
    background: white;
    box-shadow: 5px 5px 8px #888888;
    border-radius: 5px;
}
.cart21{
    display: grid;
    grid-template-columns: 1fr 1fr ;
}
.cart23{
    text-align: right;
}
form label{
    display: block;
}
form input, select{
    width: 100%;
    padding: 0.7;
}
#myDIV{
    display: none;
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
   border-radius: 5px;
    background: white;
    box-shadow: 5px 5px 8px #888888;
    text-align: center;
}
.cart11{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    text-align: center;
}
.cart2{
    padding: 1rem 10px;
    border-radius: 5px;
    background: white;
    box-shadow: 5px 5px 8px #888888;
    
}
}
</style>


<script>
// import braintree from 'braintree-web';
// import braintree from 'braintree';
export default {
    components:{
        
        
        
    },
    data(){
        return{
            items:{},
            summary:{},
            user:{},
            checkoutInfo:{
               payment_method_nonce:null
            },
            config:{},
            countries:{},
            client_token:'',
            hostedFieldInstance: false,
            checkedOut:false,
            error: "",
            amount:'',
            credentials:{
                sandbox: 'AdDYh_OGgKNgOj-w2KWXBMNWy0VNM7snxskM_61rCgHsa21f7S-mMi6edZwDB528zoTPwI6mAQ9om6Rm',
                production:''
            },
            experienceOptions:{
                input_fields:{
                    no_shipping: 1
                }
            },
            myStyle:{
                label:'checkout',
                size:'responsive',
                shape:'pill',
                color:'blue'
            }
        }
    },
    mounted(){
        this.getCart(),
        this.getOrderSummary(),
        // this.getTreeConfig(),
        this.getCountries(),
        // this.getClientToken()
        this.$Braintree.client.create({
            authorization: "sandbox_s96mdk2n_x8k6mngqj2qz555h"
        })
        .then(clientInstance => {
            let options = {
                client: clientInstance,
                styles: {
                    input: {
                        'font-size': '14px',
                        'font-family': 'Open Sans'
                    }
                },
                fields: {
                    number: {
                        selector: '#creditCardNumber',
                        placeholder: 'Enter Credit Card'
                    },
                    cvv: {
                        selector: '#cvv',
                        placeholder: 'Enter CVV'
                    },
                    expirationDate: {
                        selector: '#expireDate',
                        placeholder: '00 / 0000'
                    }
                }
            }
            return Promise.all([
                this.$Braintree.hostedFields.create(options),
                this.$Braintree.paypalCheckout.create({ client: clientInstance })
            ])
        })
        .then(instances => {
            const hostedFieldInstance    = instances[0];
            const paypalCheckoutInstance = instances[1];
            // Use hostedFieldInstance to send data to Braintree
            this.hostedFieldInstance = hostedFieldInstance;
            // Setup PayPal Button
                return this.$Paypal.Button.render({
                    env: 'sandbox',
                    style: {
                        label: 'paypal',
                        size: 'responsive',
                        shape: 'rect'
                    },
                    payment: () => {
                        return paypalCheckoutInstance.createPayment({
                                flow: 'checkout',
                                intent: 'sale',
                                amount: parseFloat(this.amount) > 0 ? this.amount : 10,
                                displayName: 'Braintree Testing',
                                currency: 'USD'
                        })
                    },
                    onAuthorize: (data, options) => {
                        return paypalCheckoutInstance.tokenizePayment(data).then(payload => {
                            console.log(payload);
                            this.error = "";
                            this.checkoutInfo.payment_method_nonce = payload.nonce;
                        })
                    },
                    onCancel: (data) => {
                        console.log(data);
                        console.log("Payment Cancelled");
                    },
                    onError: (err) => {
                        console.error(err);
                        this.error = "An error occurred while processing the paypal payment.";
                    }
                }, '#paypalButton')
        })
        .catch(err => {
            console.log(err)
        });
    






 
    },
    methods:{
        getCart() {
      this.$axios.get("https://direshop777.herokuapp.com/api/get-carts/")
        .then((response) => {
          
          this.items = response.data;
          console.log(this.items)
        });
    },
    pay(){
        const response = this.$axios.post(
            'https://direshop777.herokuapp.com/api/checkout/', this.checkoutInfo  
            );
            console.log(response.data);
    },
    getOrderSummary() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/order-summary/")
        .then((response) => {
         
          this.summary = response.data;
          this.checkoutInfo.id = response.data.serializer[0].id
          this.checkoutInfo.products = response.data.serializer[0].products;
          this.checkoutInfo.user = response.data.serializer[0].user;
          this.checkoutInfo.date = response.data.serializer[0].date;
          this.checkoutInfo.country = response.data.serializer[0].country;
          this.checkoutInfo.paid = response.data.serializer[0].paid;
          this.user = this.$auth.user,
          this.amount = response.data.total,
          this.checkoutInfo.first_name = this.user.first_name;
          this.checkoutInfo.last_name = this.user.surname;
          console.log(this.checkoutInfo.id )
        });
    },
    // getTreeConfig() {
    //   this.$axios.get( "https://direshop777.herokuapp.com/api/braintree-config/")
    //     .then((response) => {
          
    //       this.config = response.data;
    //       console.log(this.config);
          
    //     });
    // },
    // getClientToken() {
    //   this.$axios.get( "https://direshop777.herokuapp.com/api/braintree-client/")
    //     .then((response) => {
          
    //       this.client_token = response.data.token;
    //       console.log(this.client_token);
          
    //     });
    // },
    getCountries() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/countries/")
        .then((response) => {
            
          this.countries = response.data;
          console.log(this.countries);
        });
    },
        async checkOut() {
        document.getElementById("myDIV").style.display = "block";
      
    },
    // payWithCreditCard() {
    //         if(this.hostedFieldInstance)
    //         {
    //             this.error = "";
    //             this.nonce = "";
    //             this.hostedFieldInstance.tokenize().then(payload => {
    //                 console.log(payload);
    //                 this.nonce = payload.nonce;
    //             })
    //             .catch(err => {
    //                 console.error(err);
    //                 this.error = err.message;
    //             })
    //         }
    //     }
        async payWithCreditCard() {
        try {
            if(this.hostedFieldInstance)
            {
                this.error = "";
                this.checkoutInfo.payment_method_nonce = "";
                this.hostedFieldInstance.tokenize().then(payload => {
                    console.log(payload);
                    this.checkoutInfo.payment_method_nonce = payload.nonce;
                })
                
            }
        } catch (error) {
            console.error(error);
            this.error = error.message;
        }   finally {
        setTimeout(() => { this.pay() },10000)
         
        }
      
    },
    async deleteItem(item) {
        try {
            this.$swal({
  title: "Are you sure?",
  text: "Are you sure you want to remove this item from your cart?",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
       this.$axios.delete(`https://direshop777.herokuapp.com/api/carts/${item}`)
        .then((response) => {
          console.log(response);
          this.getCart()
        });
    // swal("Poof! Your imaginary file has been deleted!", {
    //   icon: "success",
    // });
  } else {
    swal("Your imaginary file is safe!");
  }
});
        } catch (error) {
            console.log(error);
            
        }   
        // finally {
        // setTimeout(() => { this.pay() },10000)
         
        // }
      
    },
    
   
    },
    
    
}
</script>