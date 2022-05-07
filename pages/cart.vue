<template>

    <div>
<!-- includes jQuery -->
<script src="http://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
<!-- includes the Braintree JS client SDK -->
                    <script src="https://js.braintreegateway.com/web/dropin/1.33.1/js/dropin.min.js"></script>

                    <!-- includes jQuery -->
                    <script src="http://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        <Navbar/>
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
                    <p>Total</p> <p class="cart23">${{amount}}</p>
                </div>
                
                <div>
                    <b-button v-b-modal.modal-1>Checkout Information</b-button>

                    <b-modal id="modal-1" title="Checkout"  @ok="checkOut()">
                        <form method="post">
                            <label for="Shipping Address">Shipping Address</label>
                            <input type="text" v-model="checkoutInfo.address" required>
                            <label for="Gender">Gender</label>
                            <select class="form-select" v-model="checkoutInfo.gender" aria-label="Default select example" required>
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
                            <input type="text" v-model="checkoutInfo.zip" required>
                            
                        </form>
                    </b-modal>
                </div>
                
                   <div >
                    <div class="">
        <div class="mt-3" id="myDIV">
            <div class="card bg-light">
                <div class="card-header">Payment Information</div>
                <div class="card-body">
                    <div class="alert alert-success" v-if="checkoutInfo.payment_method_nonce">
                        Successfully generated nonce.
                    </div>
                    <div class="alert alert-danger" v-if="error">
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
    grid-template-columns: 1fr 3fr 1fr;
    column-gap: 1.5rem;
}
.cart12 img{
    width: 100%;
    height: 10rem;
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
    border: 1px solid green;
    border-radius: 5px;
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
    border: 1px solid green;
    border-radius: 5px;
    
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
        this.getTreeConfig(),
        this.getCountries(),
        this.getClientToken()
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
      this.$axios.get( "https://direshop777.herokuapp.com/api/carts/")
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
          console.log(this.summary);
          this.checkoutInfo.id = response.data[0].id;
          this.checkoutInfo.products = response.data[0].products;
          this.checkoutInfo.user = response.data[0].user;
          this.checkoutInfo.date = response.data[0].date;
          this.checkoutInfo.country = response.data[0].country;
          this.checkoutInfo.paid = response.data[0].paid;
          this.user = this.$auth.user,
          this.amount = response.data[0].total.toString();
          this.checkoutInfo.first_name = this.user.first_name;
          this.checkoutInfo.last_name = this.user.surname;
          console.log(this.amount)
        });
    },
    getTreeConfig() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/braintree-config/")
        .then((response) => {
          
          this.config = response.data;
          console.log(this.config);
          
        });
    },
    getClientToken() {
      this.$axios.get( "https://direshop777.herokuapp.com/api/braintree-client/")
        .then((response) => {
          
          this.client_token = response.data.token;
          console.log(this.client_token);
          
        });
    },
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
        setTimeout(() => { this.pay() },5000)
         
        }
      
    },
    
   
    },
    
    
}
</script>