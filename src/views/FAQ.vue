<template style='overflow-x: visible'>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container' id='container__faq'>
        <div class='container__faq'>
            <div class='faq_left'>
             <select class='select-css'>
                <option>Counter-Strike: Global Offensive</option>
                <option>Dota 2</option>
                <option>Valorant</option>
                <option>WarCraft 3</option>
                <option>StarCraft 2</option>
                <option>Fifa 2022</option>
             </select>
             <div>
                <div id='faqLeftN1' class='faq_left-active' @click='faqLeftNav1'>Events, apps, promos, & merch</div>
                <div id='faqLeftN2' @click='faqLeftNav2'>Account recovery, safety</div>
                <div id='faqLeftN3' @click='faqLeftNav3'>Ranked gameplay, honor</div>
                <div id='faqLeftN4' @click='faqLeftNav4'>Lag, low FPS, hardware, & bugs</div>
                <div id='faqLeftN5' @click='faqLeftNav5'>Login, patching, crashing</div>
                <div id='faqLeftN6' @click='faqLeftNav6'>League store, gifting</div>
                <div id='faqLeftN7' @click='faqLeftNav7'>Reporting, suspensions, & bans</div>
                <div id='faqLeftN8' @click='faqLeftNav8'>Reporting, suspensions, & bans</div>
             </div>
            </div>
            <div class='faq_right'>
               <input type='text' placeholder='How can we help you?'>
               <div>
                  <div>
                     Where is the region selector?
                     <img id='faq__right-img1' src='../assets/faq-plus.png' @click='textShow1'>
                     <img id='faq__right-img2' src='../assets/faq-minus.png' style='display: none' @click='textHide1'>
                  </div>
                  <div id='faq__right-text1'>
                     Over the past few months, we’ve been transitioning all players from League of 
                     Legends accounts to Riot Accounts. Now that most players have made the 
                     transition, we’re going to be taking the next step towards enabling.
                     Riot’s long-term capabilities towards supporting multiple games: removing the 
                     region selector from the login screen. While you can chat with players on other 
                     servers, and in other Riot games, you can still only play League of Legends 
                     with players in the same region as you.
                     If you wish to Transfer your account, say due to work or moving to a new region, 
                     you can do so! Click here to learn more. 
                  </div>
               </div>
               <div>
                  <div>
                     So wait ... How do i know what region i am in?
                     <img id='faq__right-img3' src='../assets/faq-plus.png' @click='textShow2'>
                     <img id='faq__right-img4' src='../assets/faq-minus.png' style='display: none' @click='textHide2'>
                  </div>
                  <div id='faq__right-text2'>
                     Over the past few months, we’ve been transitioning all players from League of 
                     Legends accounts to Riot Accounts. Now that most players have made the 
                     transition, we’re going to be taking the next step towards enabling.
                     Riot’s long-term capabilities towards supporting multiple games: removing the 
                     region selector from the login screen. While you can chat with players on other 
                     servers, and in other Riot games, you can still only play League of Legends 
                     with players in the same region as you.
                     If you wish to Transfer your account, say due to work or moving to a new region, 
                     you can do so! Click here to learn more. 
                  </div>
               </div>
               <div>
                  <div>
                     Will i still be able to play cs go in other regions?
                     <img id='faq__right-img5' src='../assets/faq-plus.png' @click='textShow3'>
                     <img id='faq__right-img6' src='../assets/faq-minus.png' style='display: none' @click='textHide3'>
                  </div>
                  <div id='faq__right-text3'>
                     Over the past few months, we’ve been transitioning all players from League of 
                     Legends accounts to Riot Accounts. Now that most players have made the 
                     transition, we’re going to be taking the next step towards enabling.
                     Riot’s long-term capabilities towards supporting multiple games: removing the 
                     region selector from the login screen. While you can chat with players on other 
                     servers, and in other Riot games, you can still only play League of Legends 
                     with players in the same region as you.
                     If you wish to Transfer your account, say due to work or moving to a new region, 
                     you can do so! Click here to learn more. 
                  </div>
               </div>
               <div>
                  <div>
                     So wait ... How do i know what region i am in?
                     <img id='faq__right-img7' src='../assets/faq-plus.png' @click='textShow4'>
                     <img id='faq__right-img8' src='../assets/faq-minus.png' style='display: none' @click='textHide4'>
                  </div>
                  <div id='faq__right-text4'>
                     Over the past few months, we’ve been transitioning all players from League of 
                     Legends accounts to Riot Accounts. Now that most players have made the 
                     transition, we’re going to be taking the next step towards enabling.
                     Riot’s long-term capabilities towards supporting multiple games: removing the 
                     region selector from the login screen. While you can chat with players on other 
                     servers, and in other Riot games, you can still only play League of Legends 
                     with players in the same region as you.
                     If you wish to Transfer your account, say due to work or moving to a new region, 
                     you can do so! Click here to learn more. 
                  </div>
               </div>
               <div>
                  <div>
                     Will i still be able to play cs go in other regions?
                     <img id='faq__right-img9' src='../assets/faq-plus.png' @click='textShow5'>
                     <img id='faq__right-img10' src='../assets/faq-minus.png' style='display: none' @click='textHide5'>
                  </div>
                  <div id='faq__right-text5'>
                     Over the past few months, we’ve been transitioning all players from League of 
                     Legends accounts to Riot Accounts. Now that most players have made the 
                     transition, we’re going to be taking the next step towards enabling.
                     Riot’s long-term capabilities towards supporting multiple games: removing the 
                     region selector from the login screen. While you can chat with players on other 
                     servers, and in other Riot games, you can still only play League of Legends 
                     with players in the same region as you.
                     If you wish to Transfer your account, say due to work or moving to a new region, 
                     you can do so! Click here to learn more. 
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
    name: 'PageNotFound',
    components:{
      TopPannel,
      LeftPannel
   },
   methods:{
    /* right */ 
       textShow1(){
           document.getElementById('faq__right-text1').style='display: block';

           document.getElementById('faq__right-img1').style='display: none';
           document.getElementById('faq__right-img2').style='display: block';
       },
       textHide1(){
           document.getElementById('faq__right-text1').style='display: none';

           document.getElementById('faq__right-img1').style='display: block';
           document.getElementById('faq__right-img2').style='display: none';
       },

       textShow2(){
           document.getElementById('faq__right-text2').style='display: block';

           document.getElementById('faq__right-img3').style='display: none';
           document.getElementById('faq__right-img4').style='display: block';
       },
       textHide2(){
           document.getElementById('faq__right-text2').style='display: none';

           document.getElementById('faq__right-img3').style='display: block';
           document.getElementById('faq__right-img4').style='display: none';
       },

       textShow3(){
           document.getElementById('faq__right-text3').style='display: block';

           document.getElementById('faq__right-img5').style='display: none';
           document.getElementById('faq__right-img6').style='display: block';
       },
       textHide3(){
           document.getElementById('faq__right-text3').style='display: none';

           document.getElementById('faq__right-img5').style='display: block';
           document.getElementById('faq__right-img6').style='display: none';
       },

       textShow4(){
           document.getElementById('faq__right-text4').style='display: block';

           document.getElementById('faq__right-img7').style='display: none';
           document.getElementById('faq__right-img8').style='display: block';
       },
       textHide4(){
           document.getElementById('faq__right-text4').style='display: none';

           document.getElementById('faq__right-img7').style='display: block';
           document.getElementById('faq__right-img8').style='display: none';
       },

       textShow5(){
           document.getElementById('faq__right-text5').style='display: block';

           document.getElementById('faq__right-img9').style='display: none';
           document.getElementById('faq__right-img10').style='display: block';
       },
       textHide5(){
           document.getElementById('faq__right-text5').style='display: none';

           document.getElementById('faq__right-img9').style='display: block';
           document.getElementById('faq__right-img10').style='display: none';
       },

    /* left */

       faqLeftNav1(){
           document.getElementById("faqLeftN1").classList.add('faq_left-active');

           document.getElementById("faqLeftN2").classList.remove('faq_left-active');
           document.getElementById("faqLeftN3").classList.remove('faq_left-active');
           document.getElementById("faqLeftN4").classList.remove('faq_left-active');
           document.getElementById("faqLeftN5").classList.remove('faq_left-active');
           document.getElementById("faqLeftN6").classList.remove('faq_left-active');
           document.getElementById("faqLeftN7").classList.remove('faq_left-active');
           document.getElementById("faqLeftN8").classList.remove('faq_left-active');
       },
       faqLeftNav2(){
           document.getElementById("faqLeftN2").classList.add('faq_left-active');

           document.getElementById("faqLeftN1").classList.remove('faq_left-active');
           document.getElementById("faqLeftN3").classList.remove('faq_left-active');
           document.getElementById("faqLeftN4").classList.remove('faq_left-active');
           document.getElementById("faqLeftN5").classList.remove('faq_left-active');
           document.getElementById("faqLeftN6").classList.remove('faq_left-active');
           document.getElementById("faqLeftN7").classList.remove('faq_left-active');
           document.getElementById("faqLeftN8").classList.remove('faq_left-active');
       },
       faqLeftNav3(){
           document.getElementById("faqLeftN3").classList.add('faq_left-active');

           document.getElementById("faqLeftN1").classList.remove('faq_left-active');
           document.getElementById("faqLeftN2").classList.remove('faq_left-active');
           document.getElementById("faqLeftN4").classList.remove('faq_left-active');
           document.getElementById("faqLeftN5").classList.remove('faq_left-active');
           document.getElementById("faqLeftN6").classList.remove('faq_left-active');
           document.getElementById("faqLeftN7").classList.remove('faq_left-active');
           document.getElementById("faqLeftN8").classList.remove('faq_left-active');
       },
       faqLeftNav4(){
           document.getElementById("faqLeftN4").classList.add('faq_left-active');

           document.getElementById("faqLeftN1").classList.remove('faq_left-active');
           document.getElementById("faqLeftN2").classList.remove('faq_left-active');
           document.getElementById("faqLeftN3").classList.remove('faq_left-active');
           document.getElementById("faqLeftN5").classList.remove('faq_left-active');
           document.getElementById("faqLeftN6").classList.remove('faq_left-active');
           document.getElementById("faqLeftN7").classList.remove('faq_left-active');
           document.getElementById("faqLeftN8").classList.remove('faq_left-active');
       },
       faqLeftNav5(){
           document.getElementById("faqLeftN5").classList.add('faq_left-active');

           document.getElementById("faqLeftN1").classList.remove('faq_left-active');
           document.getElementById("faqLeftN2").classList.remove('faq_left-active');
           document.getElementById("faqLeftN3").classList.remove('faq_left-active');
           document.getElementById("faqLeftN4").classList.remove('faq_left-active');
           document.getElementById("faqLeftN6").classList.remove('faq_left-active');
           document.getElementById("faqLeftN7").classList.remove('faq_left-active');
           document.getElementById("faqLeftN8").classList.remove('faq_left-active');
       },
       faqLeftNav6(){
           document.getElementById("faqLeftN6").classList.add('faq_left-active');

           document.getElementById("faqLeftN1").classList.remove('faq_left-active');
           document.getElementById("faqLeftN2").classList.remove('faq_left-active');
           document.getElementById("faqLeftN3").classList.remove('faq_left-active');
           document.getElementById("faqLeftN4").classList.remove('faq_left-active');
           document.getElementById("faqLeftN5").classList.remove('faq_left-active');
           document.getElementById("faqLeftN7").classList.remove('faq_left-active');
           document.getElementById("faqLeftN8").classList.remove('faq_left-active');
       },
       faqLeftNav7(){
           document.getElementById("faqLeftN7").classList.add('faq_left-active');

           document.getElementById("faqLeftN1").classList.remove('faq_left-active');
           document.getElementById("faqLeftN2").classList.remove('faq_left-active');
           document.getElementById("faqLeftN3").classList.remove('faq_left-active');
           document.getElementById("faqLeftN4").classList.remove('faq_left-active');
           document.getElementById("faqLeftN5").classList.remove('faq_left-active');
           document.getElementById("faqLeftN6").classList.remove('faq_left-active');
           document.getElementById("faqLeftN8").classList.remove('faq_left-active');
       },
       faqLeftNav8(){
           document.getElementById("faqLeftN8").classList.add('faq_left-active');

           document.getElementById("faqLeftN1").classList.remove('faq_left-active');
           document.getElementById("faqLeftN2").classList.remove('faq_left-active');
           document.getElementById("faqLeftN3").classList.remove('faq_left-active');
           document.getElementById("faqLeftN4").classList.remove('faq_left-active');
           document.getElementById("faqLeftN5").classList.remove('faq_left-active');
           document.getElementById("faqLeftN6").classList.remove('faq_left-active');
           document.getElementById("faqLeftN7").classList.remove('faq_left-active');
       },


   }
}
</script>

<style>

 *{
    padding: 0;
    margin: 0;
    border: 0; 
 }

 body{
     overflow: scroll;
     overflow-x: hidden;
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

 .content__top>div{
    margin: 0 auto;
 }

/*faq main */

  .container__faq{
      display: flex;

      margin-left: 24px;
      margin-top: 70px;
  }

/* faq left */

  .faq_left{
      margin-bottom: 50px;
  }

  .faq_left>select{
      width: 400px;
      height: 60px;
      background-position: 365px;

      border: 2px solid #20252B;

      color: #E6E8EB;

      padding-left: 30px;
  }

  .faq_left>div{
      width: 400px;
      height: 498px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;

      margin-top: 15px;
  }

  .faq_left>div>div{
      width: 289px;
      height: 21px;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #E6E8EB;

      padding-top: 17px;
      padding-bottom: 17px;
      margin-left: 20px;
      padding-left: 20px;
      width: 340px;

      cursor: pointer;
  }

  .faq_left>div>div:first-child{
      padding-top: 17px;
      margin-top: 23px;
  }

  .faq_left-active{
      width: 340px;
      height: 51px;
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      border-radius: 3px;
  }

/* faq right */

  .faq_right{
      margin-left: 31px;
  }
   
  .faq_right>input{
      width: 739px;
      height: 60px;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 3px;

      background: #0F1215;
      
      margin-top: 6px;

      margin-bottom: 15px;

      background: url('../assets/adm-vector.png') no-repeat;
      background-position: 700px;
  }

  .faq_right>input::placeholder{
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      color: #29313B;

      padding-left: 15px;
  }

  .faq_right>div{
      border: 2px solid #20252B;
      width: 736px;
  }

  .faq_right>div>div:first-child{
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #E6E8EB;

      background-color: #151A1F;
      width: 704px;

      padding: 30px 0px 30px 30px;

      
      border-right: 2px solid #151A1F;

      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  .faq_right>div>div:first-child>img{
      padding-right: 30px;

      cursor: pointer;
  }

  .faq_right>div>div:last-child{
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 160%;
      color: #CCCCCC;

      padding-left: 28px;
      padding-bottom: 30px;
      padding-top: 30px;
      padding-right: 60px;
  }

  .faq_right>div:last-child{
      margin-bottom: 50px;
  }

  #faq__right-text1{
      display: none;
  }
  #faq__right-text2{
      display: none;
  }
  #faq__right-text3{
      display: none;
  }
  #faq__right-text4{
      display: none;
  }
  #faq__right-text5{
      display: none;
  }

  @media(max-width: 992px){
      #container__faq{
          transform: scale(0.7); 
          margin-left: -100px; 
          margin-top: -160px;
      }
  }

  @media(max-width: 768px){
      #container__faq{
          transform: scale(0.6); 
          margin-left: -225px; 
          margin-top: -160px;
      }
  }

  @media(max-width: 576px){
      #container__faq{
          transform: scale(0.47); 
          margin-left: -325px; 
          margin-top: -200px;
      }
  }

</style>
