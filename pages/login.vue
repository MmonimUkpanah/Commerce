<template>
    <section>
        <Navbar/>
            <div class="sign">
                <div class="sign2">

                </div>
                <div class="sign1">
                    <div class="sign11">
                        <div class="one">
                            <div @click="showLogin()" ref="one1" class="l" :class="{ active: login }">
                                <h2>Login</h2>
                            </div>
                            <div @click="showSignup()" ref="one2" class="s" :class="{ active: signup }">
                                <h2>Sign Up</h2>
                            </div>
                             
                        </div>
                        

                        <form @submit.prevent="userLogin()" method="post" v-show="login">
                            <div class="form">
                                
                                <input type="email" placeholder="Email" class="form-control" v-model="loginInfo.email">
                                <input type="password" class="form-control" placeholder="Password" v-model="loginInfo.password">
                                
                                <div class="form-check">
                                <input class="form-check-input"  type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label"  for="flexCheckDefault">
                                    Remember Me
                                </label>
                                </div>
                            </div>
                           <button type="submit" class="form-control">Login</button>
                        </form>
                        <form method="post" @submit.prevent="signUp" v-show="signup">
                            <div class="form">
                                 <input type="text" class="form-control" placeholder="First Name" v-model="signupinfo.first_name">
                                <input type="text" class="form-control" placeholder="Last Name" v-model="signupinfo.surname">
                                <input type="email" class="form-control" placeholder="Email" v-model="signupinfo.email">
                                <input type="password" class="form-control" placeholder="Password" v-model="signupinfo.password">
                                <input type="text" class="form-control" placeholder="Confirm Password" v-model="signupinfo.password2">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    I accept the terms and conditions
                                </label>
                                </div>
                            </div>
                        
                           <button type="submit" class="form-control">Create Account</button>
                        </form>
                    </div>
                </div>
                <div class="sign2">
                    
                </div>
            </div>
        <Footer/>
    </section>
</template>


<script>
import signupVue from './signup.vue';
export default {
  data() {
    return {
      loginInfo: {
        email: '',
        password: ''
      },
      login:true,
      signup:false,
      baseUrl: "https://direshop777.herokuapp.com/",
      signupinfo:{
          email:'',
          first_name:'',
          surname:'',
          password:'',
          password2:''
      }
    }
  },
  mounted(){
      
  },
  methods: {
    async userLogin() {
      try {
        
        let response = await this.$auth.loginWith("local", {
          data: this.loginInfo,
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
    async signUp() {
      try {
        const response = await this.$axios.post(
          this.baseUrl + "accounts/register/",
          this.signupinfo
        );
        // this.$message({
        //   message: "Success",
        //   type: "success",
        //   duration:8000
        // });
        console.log(response);
      } catch (error) {
        console.log(error);
        // this.$message({
        //   message: error,
        //   type: "warning",
        // });
      } finally {
        this.signupinfo = {};
      }
    },
    showLogin(){
        if (this.login == false){
            this.login = true;
            this.signup = false;
        }else{
            this.login = true;
        }
    },
    showSignup(){
        if (this.signup == false){
            this.login = false;
            this.signup = true;
        }else{
            this.signup = true;
        }
    },
  }
}
</script>


<style scoped>
    .sign{
        background: #E5E5E5;
      
    }
    .one{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }
    .active{
        background: #94004F;
        color: white ;
    }

    .sign1{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        background: white;
        height: auto;
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
        margin-bottom: 1rem;
    }
    
    button{
        width: 100%;
        background-color: #94004F;
        border: none;
        color: white;
        font-weight: 700;
        margin-top: 1rem;
    }
    button:active{
        width: 100%;
        background-color: #94004F;
        border: none;
        color: white;
        font-weight: 700;
        margin-top: 1rem;
    }
    button:focus{
        width: 100%;
        background-color: #94004F;
        border: none;
        color: white;
        font-weight: 700;
        margin-top: 1rem;
    }
    .s, .l{
        color: #94004F;
        padding-left: 0.5rem;
        border-radius: 5px;
    }
    .active{
        background: #94004F;
        color: white !important;
    }

    @media(max-width:576px){
        .sign{
        background: #E5E5E5;
    
    }
        .sign1{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        background: white;
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