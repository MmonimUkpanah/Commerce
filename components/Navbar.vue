<template>
  <client-only>
        <section>
      
      <div class="dash">
        <div class="dash1">
          <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="/img/lo.png" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-"><img src="/img/menu.png" alt=""></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <input type="search" name="" id="">
        </li>
        <li class="nav-item">
          <button class="search">Search</button>
        </li>
        <li class="nav-item" v-if="this.$auth.loggedIn">
          <span v-show="this.$auth.loggedIn">Welcome back, {{this.$auth.user.first_name}}</span>
        </li>
        <li class="nav-item" @click="viewCart()">
          <button class="search">Cart <div class="cart"  v-show="this.$auth.loggedIn">{{length}}</div> </button>
        </li>
        <li class="nav-item" v-if="!this.$auth.loggedIn">
          <span><a href="/login" >Login/Sign Up</a></span>
        </li>
        
        <li class="nav-item" v-if="this.$auth.loggedIn" @click="$auth.logout()">
          <span>Log out</span>
        </li>
        
        <li class="nav-item s">
          <span><a href="/products/beauty">Beauty Products</a></span>
        </li>
        <li class="nav-item s">
          <span><a href="/products/body">Body and Wellness Products</a></span>
        </li>
        <li class="nav-item s">
          <span><a href="/products/health">Health products</a></span>
        </li>
        <li class="nav-item s">
          <span><a href="/products/health">Health products</a></span>
        </li>
         <li class="nav-item s">
          <span><a href="/products/cleaningmachines">Cleaning Machines</a></span>
        </li>
         <li class="nav-item s">
          <span><a href="/products/cleaningsolutions">Cleaning Solutions</a></span>
        </li>
         <li class="nav-item s">
          <span><a href="/products/water">Water Machines</a></span>
        </li>
        
          
      
      </ul>
    </div>
  </div>
</nav>
        </div>
        
      </div>
        
      <!-- <div class="two">
        <ul>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Features</li>
          <li>Contact Us</li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a> </li>
        </ul>
      </div> -->
     
      <div class="four b">
        <ul>
          <li>All Categories >></li>
          <li><a href="/products/beauty">Beauty Products</a> </li>
          <li><a href="/products/body">Body and Wellness Products</a></li>
          <li><a href="/products/health">Health products</a></li>
          <li><a href="/products/cleaningmachines">Cleaning Machines</a></li>
          <li><a href="/products/cleaningsolutions">Cleaning Solutions</a></li>
          <li><a href="/products/water">Water Machines</a></li>
        </ul>
      </div>
      <div class="five">

      </div>
    </section>
  </client-only>
    
</template>


<script>
export default {
  data(){
    return{
      items:[],
      length:null
    }
  },
  mounted(){
    this.getCart()
  },
  methods:{
    viewCart(){
      if (this.$auth.loggedIn == true){
        this.$router.push('/cart')
      }else{
        this.$router.push('/login')
      }
    },
    async logOut() {
      try {
        let response = await this.$auth.logoutWith("local");
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
        getCart() {
      this.$axios.get("https://direshop777.herokuapp.com/api/get-carts/")
        .then((response) => {
          
          this.items = response.data;
          this.length = this.items.length
          console.log(this.items.length)
        });
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
  .footer{
    padding-bottom: 1rem;
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
    margin-right: 3rem;
    width: 5rem;
  }
  .navbar-brand img{
    width: 5rem;
  }
  .navbar-nav{
    gap: 2rem;
  }
  .navbar-nav li input{
    background: #FFFFFF;
    border: 1px solid rgba(196, 196, 196, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 300px;
    padding: 4px 5px;
    margin-right: 1rem;
  }
  .navbar-nav li button{
    background: #FBA100;
    border-radius: 10px;
    padding: 5.5px 20px;
    border: none;
    color: white;
  }
  .navbar-nav li span{
    font-size: 20px;
    font-weight: 500;
    color: white;
  }
  a{
    color: white;
    text-decoration: none;
    
  }
  .threesmall{
    display: none;
  }
  .four{
    background: #29A67A;
    color: white;
    padding: 5px 85px;
  }
  .four li{
    display: inline;
  }
  .four li a{
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .five{
    background: #15213B;
    height: 0rem;
  }

.dash{
  background: #15213B !important;
}
.navbar-toggler{
  background: white;
}
.navbar-toggler:focus{
  outline: none !important;
}

 .navbar-toggler {
  border: none;
  border: 5px solid white;
}
.navbar-toggler:focus {
  box-shadow: none;
  
}
.s{
  display: none;
}
.b{
  display: block;
}
/* .navbar-toggler-icon{
  color: white !important;
  background: white !important;
  border: black;
} */
.dash1{
  padding: 0 5rem;
}
.cart{
    background: #29A67A;
    display: inline;
    color: white;
    border-radius: 50%;
    height: 0.5rem;
    width: 0.5rem;
    padding: 0.3rem;
    margin-left: 1rem;
  }


  @media(max-width:576px){
      .navbar-nav li input{
    background: #FFFFFF;
    border: 1px solid rgba(196, 196, 196, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 100%;
    padding: 4px 5px;
    margin-right: 1rem;
  }
  .navbar-nav li button{
    background: #FBA100;
    border-radius: 10px;
    padding: 5.5px 20px;
    width: 100%;
    border: none;
    color: white;
  }
  
 .dash1{
   padding:  0 10px;
   overflow-x: hidden;
 }
.s{
  display: block;
}

.b{
  display: none;
}
.navbar-nav{
    gap: 1rem;
  
  }

/* .navbar{
  padding-left: 10px !important;
  padding-right: 10px !important;
} */
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

  

  .four li a{
    margin-right: 1rem;
    margin-left: 0rem;
    display: block;
  }
  .four{
    background: #29A67A;
    color: white;
    padding: 5px 10px;
  }
 

  
  }



  @media(min-width: 577px) and (max-width:768px){
    .three{
    background: #15213B;
    padding: 5px 10px;
  }
  .navbar-nav{
    gap: 1rem;
  }
  .dash1{
   padding:  0 10px;
   overflow-x: hidden;
 }
  .four{
    background: #29A67A;
    color: white;
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
  
  
  }


  @media(min-width: 769px) and (max-width:1200px){
    .three{
    background: #ED017F;
    padding: 5px 10px;
  }
  .navbar-nav{
    gap: 2rem;
  }
   .dash1{
   padding:  0 10px;
   overflow-x: hidden;
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
  
  .three li span{
    margin-left: 1rem;
    font-size: 20px;
    font-weight: 500;
  }
  .four{
    background: #29A67A;
    color: white;
    padding: 5px 10px;
  }
    
  }
</style>