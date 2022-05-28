<template>
    <footer>
        <section class="finito">
            <div class="one">
                <img src="/img/head.png" alt="logo">
                <button>Start Live Chat</button>
            </div>
            
            <div class="sec">
               <div class="two">
                <p class="title">Company</p>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
               </div> 
               <div class="three">
                <p class="title">Help</p>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
               </div>
            </div>
            <div class="sec1">
                <div class="four">
                <p class="title">Resources</p>
                <p>Free Ebooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
            </div>
            <div class="five">
                <p class="title">Extra Links</p>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>
            </div>
            
            
        </section>
        
    </footer>
</template>


<style scoped>
    footer{
        padding: 2rem 5rem;
        background: #000000;
        color: white;
    }
    .finito{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;
    }
    .sec, .sec1{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    
    .title{
        font-weight: 700;
    }
    
    .one img{
        width: 5rem;
    }
    .one button{
        background: #94004F;
        border-radius: 5px;
        padding: 5px 20px;
        border: none;
        color: white;
        display: block;
        margin-top: 1rem;
    }



    @media(max-width:567px){
        .finito{
        display: grid;
        grid-template-columns:1fr;
        row-gap: 1rem;

    }
    
    .sec, .sec1{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
        footer{
        padding: 2rem 10px;
        text-align: left;
    }
        .one{
        margin-top: 10px;
        text-align: center;
    }
    .one button{
        background: #94004F;
        border-radius: 5px;
        padding: 5px 20px;
        border: none;
        color: white;
        display: block;
        margin-top: 1rem;
        width: 100%;
    }
    }


    @media(min-width:577px) and (max-width:1200px){
        footer{
        padding: 2rem 10px;
    }
    .one{
        margin-top: 0px;
    }
    }
</style>