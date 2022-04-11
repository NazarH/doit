<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
        
        <div class='content'>
           <div class='content__tornn'>
              <div class='content__rornam'>
                <div>
                   Premium
                </div>
              </div>
              <div>
                 <div class='content__scard'>
                  <div>
                     FREE
                  </div>
                  <div>
                     $10 per mounth
                  </div>
                  <div>
                     A night to remember for Brazil. 
                     Drama is never too far away at 
                     Copa America and this final had 
                     it by the bucketlad. Thanks for 
                     your company. <p>A night to remember 
                     for Brazil. Drama is never too far 
                     away at Copa America and this final
                     had it by the bucketlad. Thanks 
                     for your company.</p>
                  </div>
                  <button>Sign up</button>
                 </div>
                 <div class='content__scard2'>
                  <div>
                     PRO
                  </div>
                  <div>
                     $15 per mounth
                  </div>
                  <div>
                     <ul>
                       <li>- usecase 1</li>
                       <li>- usecase 1</li>
                       <li>- usecase 1</li>
                       <li>- usecase 1</li>
                       <li>- usecase 1</li>
                     </ul>
                  </div>
                  <button>Sign up</button>
                 </div>
                 <div class='content__scard3'>
                  <div>
                     Organizer
                  </div>
                  <div>
                     $4.99 per mounth
                  </div>
                  <div>
                     A night to remember for Brazil. 
                     Drama is never too far away at 
                     Copa America and this final had 
                     it by the bucketlad. Thanks for 
                     your company. <p>A night to remember 
                     for Brazil. Drama is never too far 
                     away at Copa America and this final
                     had it by the bucketlad. Thanks 
                     for your company.</p>
                  </div>
                  <button>Sign up</button>
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

 .content__tornn{
    margin-top: 88px;
    display: flex;
    flex-direction: column;
  }

  .content__tornn>div:last-child{
     display: flex; 
  }

  .content__scard{
   margin-top: 42px;
   margin-bottom: 138px;
   margin-right: 29px;
   width: 371px;
   height: 540px;
   background: radial-gradient(250.9% 252.09% at -142.43% -152.09%, rgba(20, 114, 255, 0.35) 0%, rgba(20, 114, 255, 0) 120%), #181B1F;
  }

  .content__scard2{
   margin-top: 42px;
   margin-bottom: 138px;
   margin-right: 29px;
   width: 371px;
   height: 540px;
   background: radial-gradient(250.9% 252.09% at -142.43% -152.09%, rgba(245, 200, 31, 0.25) 0%, rgba(245, 200, 31, 0) 120%), #181B1F;
  }

  .content__scard3{
   margin-top: 42px;
   margin-bottom: 138px;
   width: 371px;
   height: 540px;
   background: radial-gradient(242.43% 252.09% at -142.43% -152.09%, rgba(66, 232, 128, 0.3) 0%, rgba(66, 232, 128, 0) 120%), #181B1F;
  }

  .content__scard>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 42px;
     line-height: 100%;
     color: #1976EC;

     margin: 100px 22px 42px 22px;
  }

  .content__scard>div:nth-child(2){
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #F5F5F5;
     opacity: 0.88;

     margin: 0px 16.5px 16px 22.5px;
  }

  .content__scard>div:nth-child(3){
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 150%;
     color: #67707A;

     margin: 0px 16.5px 60px 22.5px;
  }

  .content__scard>button{
     background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%), #095FE0;
     width: 136px;
     height: 48px;

     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 19px;
     text-align: center;
     color: #F5F5F5;
     margin-left: 22px;
     margin-bottom: 84px;
  }

  /* *** */

  .content__scard2>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 42px;
     line-height: 100%;
     color: #CEA017;

     margin: 100px 22px 42px 22px;
  }

  .content__scard2>div:nth-child(2){
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #F5F5F5;
     opacity: 0.88;

     margin: 0px 16.5px 16px 22.5px;
  }

  .content__scard2>div:nth-child(3)>ul{
     margin: 16px 16.5px 57px 22.5px;
  }

  .content__scard2>div:nth-child(3)>ul>li{
     list-style-type: none;
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 150%;
     color: #67707A;
     margin-bottom: 6px;
  }

  .content__scard2>button{
     background: linear-gradient(180deg, #FFD321 0%, #9C6C0D 100%);
     width: 136px;
     height: 48px;

     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 19px;
     text-align: center;
     color: #F5F5F5;
     margin-left: 22px;
     margin-bottom: 84px;
  }

  /* --- */

  .content__scard3>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 42px;
     line-height: 100%;
     color: #38C75F;

     margin: 100px 22px 42px 22px;
  }

  .content__scard3>div:nth-child(2){
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #F5F5F5;
     opacity: 0.88;

     margin: 0px 16.5px 16px 22.5px;
  }

  .content__scard3>div:nth-child(3){
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 150%;
     color: #67707A;

     margin: 0px 16.5px 60px 22.5px;
  }

  .content__scard3>button{
     background: linear-gradient(180deg, #46F48C 0%, #2B9D37 100%);
     width: 136px;
     height: 48px;

     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 19px;
     text-align: center;
     color: #F5F5F5;
     margin-left: 22px;
     margin-bottom: 84px;
  }

/* media */

   @media(max-width: 992px){
      .content__tornn{
         margin-top: 0px;
      }

      .content__rornam{
         max-width: 975px;
      }

      .content__scard, .content__scard2, .content__scard3{
         width: 287px;
         height: 475px;
      }

      .content__scard>div:first-child, .content__scard2>div:first-child, .content__scard3>div:first-child{
         margin-top: 30px;
      }

      .content__scard>button, .content__scard2>button, .content__scard3>button{
         margin-bottom: 0px;
      }

      .content__scard2>button{
         margin-top: 43px;
      }

      .content__tornn>div:nth-child(2){
         margin: 0 auto;
      }

      .content__rornam>div{
         margin-left: 30px;
      }
   }

   @media(max-width: 768px){
      .content__scard{
         width: 410px;
         margin-right: 0px;
         margin-bottom: 0px;
         margin-top: 20px;
      }
      .content__scard2{
         width: 410px;
         margin-right: 0px;
         margin-bottom: 0px;
         margin-top: 20px;
      }
      .content__scard3{
         width: 410px;
         margin-right: 0px;
         margin-bottom: 115px;
         margin-top: 20px;
      }

      .content__tornn>div:nth-child(2){
         flex-wrap: wrap;
         width: 410px;
         margin-left: 190px;
      }

      .content__rornam{
         max-width: 743px;
         display: flex;
         justify-content: center;
      }

      .content__rornam>div{
         margin-left: 50px;
      }
   }

   @media(max-width: 576px){
      .content__tornn{
         max-width: 540px;
      }

      .content__rornam{
         max-width: 515px;
      }

      .content__tornn>div:nth-child(2){
         margin-left: 70px;
      }

      #body{
         overflow-x:hidden;
      }
   }
  
   
</style>