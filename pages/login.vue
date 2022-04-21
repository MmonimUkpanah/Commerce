<template>
    <section>
        <Navbar/>
            <div class="sign">
                <div class="sign2">

                </div>
                <div class="sign1">
                    <div class="sign11">
                        <h2>Login</h2>
                        <form @submit.prevent="userLogin()" method="post" >
                            <div class="form">
                                
                                <input type="email" placeholder="Email" v-model="login.email">
                                <input type="password" placeholder="Password" v-model="login.password">
                                
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember Me
                                </label>
                                </div>
                            </div>
                           <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        <Footer/>
    </section>
</template>


<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  mounted(){
      
  },
  methods: {
    async userLogin() {
      try {
        
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response);
        this.$auth.setUser(response.data.user)
        this.$auth.setUserToken(response.data.token);
        //  localStorage.setItem('token', response.data.token)
        // this.$auth.strategy.token.set(response.data.token)
        // this.$store.state.localStorage.token = response.data.token
        console.log(this.$auth.user)
        // console.log(this.$auth.UserToken)
        console.log(this.$auth.loggedIn)
        this.$router.push("/");


      } catch (error) {
        
        console.log(error);
        
      }
    },
  }
}
</script>


<style scoped>
    .sign{
        background: #E5E5E5;
        height: 100vh;
    }
    .sign1{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        background: white;
        height: 80vh;
        padding: 5rem 3rem;
    }
    .sign2{
        height: 10vh;
    }
    .form{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 1rem;
        margin-top: 1.5rem;
    }
    form input{
        border-top: none;
        border-left: none;
        border-right: none;
        margin-bottom: 3rem;
    }
    
    button{
        width: 100%;
        background-color: rgba(80, 199, 255, 0.5);
        border: none;
        padding: 10px;
        color: white;
        font-weight: 700;
        margin-top: 1rem;
    }
    h2{
        color: rgba(80, 199, 255, 0.5);;
    }


    @media(max-width:576px){
        .sign{
        background: #E5E5E5;
        height: 120vh;
    }
        .sign1{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        background: white;
        height: 100vh;
        padding: 5rem 10px;
    }
        .form{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
        margin-top: 1.5rem;
    }
    }
</style>