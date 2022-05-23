<template>
    <section>
      <div class="dash">
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
        <div class="one">
        <!-- <div class="one1">
          <p>Reach Us on Whatsapp</p> 
          <p>+17045606540</p>
        </div> -->
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
      <div class="three">
        <ul>
          <li><img src="/img/head.png" alt="logo"></li>
          <li><input type="search" name="" id=""></li>
          <li><button>Search</button></li>
          <li v-if=" this.$auth.loggedIn"><span>Welcome back, {{this.$auth.user.first_name}}</span> </li>
          <li @click="viewCart()"> <span>Cart</span> </li>
          <li><span><a href="/login" v-if="!this.$auth.loggedIn">Login</a></span></li>
          <li v-if=" !this.$auth.loggedIn"><span><a href="/signup">Sign Up</a> </span></li>
          <li v-if="this.$auth.loggedIn" @click="$auth.logout()"> <span>Log Out</span> </li>
        </ul>
      </div>
      <div class="four">
        <ul>
          <li>All Categories</li>
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
</template>


<script>
export default {
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
    }
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
    background: #ED017F;
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
  .three li input{
    background: #FFFFFF;
    border: 1px solid rgba(196, 196, 196, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 300px;
    padding: 4px 5px;
    margin-right: 1rem;
  }
  .three li button{
    background: #FBA100;
    border-radius: 10px;
    padding: 5.5px 20px;
    border: none;
    color: white;
  }
  .three li span{
    margin-left: 1rem;
    margin-right: 1rem;
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
    background: #94004F;
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
    background: #ED017F;
    height: 0rem;
  }

.dash{
  padding-left: 5rem;
  padding-right: 5rem;
}

  @media(max-width:576px){
    .dash{
  padding-left: 10px;
  padding-right: 10px;
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
  li{
    display: block;
    list-style: none;
    margin-right: 0rem;
    margin-left: 0rem;
  }
  .four li a{
    margin-right: 1rem;
    margin-left: 0rem;
    display: block;
  }
  .four{
    background: #94004F;
    color: white;
    padding: 5px 10px;
  }
  

  
  }



  @media(min-width: 577px) and (max-width:768px){
    .three{
    background: #ED017F;
    padding: 5px 10px;
  }
  .four{
    background: #94004F;
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
    background: #94004F;
    color: white;
    padding: 5px 10px;
  }
    
  }
</style>