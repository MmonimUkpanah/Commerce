<template>
    <section>
        <Navbar/>
            <div class="sign">
                <div class="sign2">

                </div>
                <div class="sign1">
                    <div class="sign11">
                        <h2>Create An Account</h2>
                        <form method="post" @submit.prevent="signUp">
                            <div class="form">
                                 <input type="text" placeholder="First Name" v-model="signupinfo.first_name">
                                <input type="text" placeholder="Last Name" v-model="signupinfo.surname">
                                <input type="email" placeholder="Email" v-model="signupinfo.email">
                                <input type="password" placeholder="Password" v-model="signupinfo.password">
                                <input type="text" placeholder="Confirm Password" v-model="signupinfo.password2">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    I accept the terms and conditions
                                </label>
                                </div>
                            </div>
                        
                           <button type="submit">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        <Footer/>
    </section>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      baseUrl: "https://direshop777.herokuapp.com/",
      signupinfo:{
          email:'',
          first_name:'',
          surname:'',
          password:'',
          password2:''
      }
    };
  },
  methods: {
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
    
  },

  mounted() {
    
  },
};
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
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        margin-top: 1.5rem;
    }
    form input{
        border-top: none;
        border-left: none;
        border-right: none;
        margin-bottom: 3rem;
    }
    .form-check{
        margin-top: 1rem;
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