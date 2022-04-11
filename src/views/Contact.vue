<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
        <div class='content__torn' id='content__torn'>
              <div class='content__rornam' style='margin-left: 10px;'>
                <div>
                   Contact us
                </div>
              </div>
              <div class='content__contact'>
               <div>
                 <div>
                    <div>
                    <img src='../assets/contact-crd.png'>
                    </div>
                    <div></div>
                 </div>
                 <div>
                    2440, Daisy Dr undefined Pembroke Pines, Arizona
                 </div> 
               </div>
               <div>
                 <div>
                    <div>
                    <img src='../assets/contact-tel.png'>
                    </div>
                    <div></div>
                 </div>
                 <div>
                    <p><span>Headquater</span> <span>(+48) 517 429 774</span></p>
                 </div> 
               </div>
               <div>
                 <div>
                    <div>
                    <img src='../assets/contact-email.png'>
                    </div>
                    <div></div>
                 </div>
                 <div>
                    <p><span>Support</span> <span>@doit.gg</span></p>
                    <p><span>Organizer</span> <span>@doit.gg</span></p>
                    <p><span>Sponsorship</span> <span>@doit.gg</span></p>
                 </div> 
               </div>
              </div>
        </div>
      </div>
   </div>
</template>

<script>
import TopPannel from '../components/top-pannel.vue';
import LeftPannel from '../components/left-pannel.vue'

export default {
    components:{
      TopPannel,
      LeftPannel
   },
}
</script>

<style>

  #content__torn{
     margin-top: 100px;
  }

  body{
     overflow: scroll;
     overflow-x: hidden;
  }

 *{
    padding: 0;
    margin: 0;
    border: 0; 
 }

 .container {
    max-width: 1216px;
    margin: 0 auto;
 }

 .wrapper {
    background-color: #0F1215;
    min-height: 100%;
    min-width: 576px;
    display: flex;
    flex-direction: column;
    font-family: 'Rubik', sans-serif;
    color: white;
 }

 /* */

 .content__contact>div{
     display: flex;
 }

 .content__contact>div:first-child{
     margin-top: 48px;
 }

 .content__contact>div>div>div:first-child{
     min-width: 48px;
     min-height: 48px;
     max-width: 48px;
     max-height: 48px;
     border: 2px solid #151A1F;
     display: flex;
     align-items: center;
     justify-content: center;
 }

 .content__contact>div>div>div:last-child{
     height: 42px;
     max-width: 0.1px;
     border: 2px solid #151A1F;
     border-left: 0px;
     border-bottom: 0px;
     margin-left: 24px;
 }

 .content__contact>div>div:last-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 22px;
     line-height: 100%;
     color: #CCCCCC;
     margin-left: 16px;
     margin-top: 13px;
     margin-bottom: 13px;
 }

 .content__contact>div:first-child>div:last-child{
     opacity: 0.5;
 }

 .content__contact>div>div:last-child>p>span:first-child{
     opacity: 0.5;
     color: #CCCCCC;
 }

 .content__contact>div>div:last-child>p>span:last-child{
     color: white;
     opacity: 1.0;
 }

 .content__contact>div:last-child>div:last-child>p>span:first-child{
     opacity: 1.0;
     color: white;
 }

 .content__contact>div:last-child>div:last-child>p>span:last-child{
     color: #CCCCCC;
     opacity: 0.5;
 }

 .content__contact>div:last-child>div:last-child>p{
     margin-bottom: 22px;
 }

 .content__contact>div:last-child>div>div:last-child{
     height: 74px;
     max-width: 0.1px;
     border: 2px solid #151A1F;
     border-left: 0px;
     border-bottom: 0px;
     margin-left: 24px;
 }

 @media(max-width: 992px){
    #content__torn{
       margin-top: 0px;
       align-items: center;
    }

    .content__rornam{
       width: 950px;
       display: flex;
       justify-content: center;
    }
 }

 @media(max-width: 768px){
   .container{
      max-width: 748px;
   }
 }

 @media(max-width: 576px){
    .content__contact{
      max-width: 576px;
      margin-left: 25px;
   }

   .content__rornam{
      max-width: 540px;
      margin-left: -20px;
   }
 }
   
</style>
