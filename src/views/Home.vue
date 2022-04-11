<template>
   <div class='wrapper'>
      <top-pannel></top-pannel>
      <div class='container'>
        <div class='content'>
            <div class='content__top'>
               <div class='content__triangles' style='margin-left: 16px;' id='content__triangl'>
                  <img src='../assets/triangle.png'>
                  <img src='../assets/triangle.png'>
                  <img src='../assets/triangle.png'>
                  <img src='../assets/triangle.png'>
                  <img src='../assets/triangle.png'>
               </div>
               <div class='content__info' id='content__info-home'>
                 <div>
                    DOIT BETA
                 </div>
                 <div>
                    Prepare for your esports career and get ready for 
                    awesome tournaments with big prize pools and 
                    many fun! <p>Register Now!</p>
                 </div>
                 <div class='header__login header__log2' id='header__login' :style='this.$store.getters.LOGIN.userNickn !== "000" ? "visibility: hidden" : ""'>
                     <button @click='logIn'>Login</button>
                     <button @click='signOn'>Sign up</button>
                 </div>
               </div>
            </div>
            <div class='content__torn' id='content__torn1'>
              <div class='content__rornam'>
                <div>
                   Tournaments
                </div>
                <ul>
                  <li>All</li>
                  <li>StarCraft II</li>
                  <li>Dota II</li>
                  <li>CS:GO</li>
                  <li>LOL</li>
                  <li>Fortnite</li>
                </ul>
              </div>
              <div class='content__gamecard'>
<!--1--><swiper
        :slidesPerView="3"
        :spaceBetween="23"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :breakpoints="swiperOptions.breakpoints"
        
        class="mySwiper w-1/4 swipe1"
      >
               <swiper-slide>
                 <div class='gamecard'>
                    <div>
                       <img src='../assets/main-dota2.png'>
                    </div>
                    <div>
                       <div>
                          Tournament’s name will be here, maybe, in two lines
                       </div>
                       <ul>
                         <li>Start</li>
                         <li>Mode</li>
                         <li>Slots</li>
                         <li>Pool</li>
                       </ul>
                       <ul>
                         <li>07/06</li>
                         <li>5v5</li>
                         <li>16/30</li>
                         <li>$1500</li>
                       </ul>
                    </div>
                 </div>
               </swiper-slide>
               <swiper-slide>
                 <div class='gamecard'>
                    <div>
                       <img src='../assets/main-dota2.png'>
                    </div>
                    <div>
                       <div>
                          Tournament’s name will be here, maybe, in two lines
                       </div>
                       <ul>
                         <li>Start</li>
                         <li>Mode</li>
                         <li>Slots</li>
                         <li>Pool</li>
                       </ul>
                       <ul>
                         <li>07/06</li>
                         <li>5v5</li>
                         <li>16/30</li>
                         <li>$1500</li>
                       </ul>
                    </div>
                 </div>
               </swiper-slide>
               <swiper-slide>
                 <div class='gamecard'>
                    <div>
                       <img src='../assets/main-dota2.png'>
                    </div>
                    <div>
                       <div>
                          Tournament’s name will be here, maybe, in two lines
                       </div>
                       <ul>
                         <li>Start</li>
                         <li>Mode</li>
                         <li>Slots</li>
                         <li>Pool</li>
                       </ul>
                       <ul>
                         <li>07/06</li>
                         <li>5v5</li>
                         <li>16/30</li>
                         <li>$1500</li>
                       </ul>
                    </div>
                 </div>
               </swiper-slide>
      </swiper>
              </div>  
            </div>
            <div class='content__torn' id='content__torn2'>
              <div class='content__rornam'>
                <div>
                   News
                </div>
                <ul>
                  <li>All</li>
                  <li>StarCraft II</li>
                  <li>Dota II</li>
                  <li>CS:GO</li>
                  <li>LOL</li>
                  <li>Fortnite</li>
                </ul>
              </div>
              <div class='content__gamenews'>
<!--2--><swiper
        :slidesPerView="3"
        :spaceBetween="23"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :breakpoints="swiperOptions.breakpoints2"
        
        class="mySwiper w-1/4"
      >
                 <swiper-slide>
                 <div class='gamenews'>
                    <div>
                       <img src='../assets/main-dust2.png'>
                    </div>
                    <div>
                       <div>
                          Fortnite map makers recreate Counter-Strike's Dust 2
                       </div>
                       <div>
                          Team Evolve, a collective of players 
                          who create and share impressive maps 
                          using Fortnite's in-game Creative mode...
                       </div>
                    </div>
                 </div>
                 </swiper-slide>
                 <swiper-slide>
                 <div class='gamenews'>
                    <div>
                       <img src='../assets/main-dust2.png'>
                    </div>
                    <div>
                       <div>
                          Fortnite map makers recreate Counter-Strike's Dust 2
                       </div>
                       <div>
                          Team Evolve, a collective of players 
                          who create and share impressive maps 
                          using Fortnite's in-game Creative mode...
                       </div>
                    </div>
                 </div>
                 </swiper-slide>
                 <swiper-slide>
                 <div class='gamenews'>
                    <div>
                       <img src='../assets/main-dust2.png'>
                    </div>
                    <div>
                       <div>
                          Fortnite map makers recreate Counter-Strike's Dust 2
                       </div>
                       <div>
                          Team Evolve, a collective of players 
                          who create and share impressive maps 
                          using Fortnite's in-game Creative mode...
                       </div>
                    </div>
                 </div>
                 </swiper-slide>
      </swiper>
              </div>
        
            </div>
            <div class='content__torn' id='content__torn3'>
              <div class='content__rornam'>
                <div>
                   Streams
                </div>
                <ul>
                  <li>All</li>
                  <li>StarCraft II</li>
                  <li>Dota II</li>
                  <li>CS:GO</li>
                  <li>LOL</li>
                  <li>Fortnite</li>
                </ul>
              </div>
              <div class='content__streams'>
                  <div>
                     <img src='../assets/main-bg.png'>
                     <img src='../assets/main-bg.png'>
                  </div>
                  <div>
                     <img src='../assets/main-bg.png'>
                     <img src='../assets/main-bg.png'>
                     <img src='../assets/main-bg.png'>
                     <img src='../assets/main-bg.png'>
                  </div>
              </div>  
            </div>
            <div class='content__torn' id='content__torn4'>
              <div class='content__rornam'>
                <div>
                   Partners
                </div>
              </div>
              <div class='content__partn'>
                  <div>
      <swiper
        :slidesPerView="5"
        :spaceBetween="140"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :breakpoints="swiperOptions.breakpoints3"
        
        class="mySwiper w-1/4"
      >
                  <swiper-slide>
                     <img src='../assets/main-google.png'>
                  </swiper-slide>
                  <swiper-slide>
                     <img src='../assets/main-nasa.png'>
                  </swiper-slide>
                  <swiper-slide>
                     <img src='../assets/main-navi.png'>
                  </swiper-slide>
                  <swiper-slide>
                     <img src='../assets/main-air.png'>
                  </swiper-slide>
                  <swiper-slide>
                     <img src='../assets/main-teleg.png'>
                  </swiper-slide>
                  <swiper-slide>
                     <img src='../assets/main-yt.png'>
                  </swiper-slide>
                  <swiper-slide>
                     <img src='../assets/main-be.png'>
                  </swiper-slide>
      </swiper>
                  </div>
              </div>  
            </div>
            <div class='content__torn' id='content__torn5'>
              <div class='content__rornam'>
                <div>
                   Games
                </div>
              </div>
              <div class='content__games'>
<!--4--><swiper
        :slidesPerView="3"
        :spaceBetween="25"
        :slidesPerGroup="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :breakpoints="swiperOptions.breakpoints4"
        
        class="mySwiper w-1/4"
      >
               <swiper-slide>
                  <div>
                     <img src='../assets/main-csgo.png'>
                     <div>
                        CS:GO 
                     </div>
                  </div>
               </swiper-slide>  
               <swiper-slide>
                  <div>
                     <img src='../assets/main-csgo.png'>
                     <div>
                        CS:GO 
                     </div>
                  </div>
               </swiper-slide> 
               <swiper-slide> 
                  <div>
                     <img src='../assets/main-csgo.png'>
                     <div>
                        CS:GO 
                     </div>
                  </div>
               </swiper-slide>    
      </swiper>
              </div>  
            </div>
        </div>
      </div>
      <left-pannel></left-pannel>
   </div>
   
</template>

<script>
import TopPannel from '../components/top-pannel.vue';
import LeftPannel from '../components/left-pannel.vue';

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

export default {
    data(){
       return{
          swiperOptions: {
             breakpoints: {
               375: {
                  slidesPerView: 2,
                  spaceBetween: 240,
                  slidesPerGroup: 1,
                  loop: true
               },
               576: {
                  slidesPerView: 2,
                  spaceBetween: 240,
                  slidesPerGroup: 1,
                  loop: true
               },
               577: {
                  slidesPerView: 2,
                  spaceBetween: 55,
                  slidesPerGroup: 1,
                  loop: true
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 55,
                  slidesPerGroup: 1,
                  loop: true
               },
               769: {
                  slidesPerView: 3,
                  spaceBetween: 200,
                  slidesPerGroup: 1,
                  loop: true
               },
               992: {
                  slidesPerView: 3,
                  spaceBetween: 200,
                  slidesPerGroup: 1,
                  loop: true
               },
               993: {
                  slidesPerView: 3,
                  spaceBetween: 23,
                  slidesPerGroup: 1,
                  loop: true
               }
             },
             breakpoints2: {
               375: {
                  slidesPerView: 2,
                  spaceBetween: 240,
                  slidesPerGroup: 1,
                  loop: true
               },
               576: {
                  slidesPerView: 2,
                  spaceBetween: 240,
                  slidesPerGroup: 1,
                  loop: true
               },
               577: {
                  slidesPerView: 2,
                  spaceBetween: 55,
                  slidesPerGroup: 1,
                  loop: true
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 55,
                  slidesPerGroup: 1,
                  loop: true
               },
               769: {
                  slidesPerView: 3,
                  spaceBetween: 200,
                  slidesPerGroup: 1,
                  loop: true
               },
               992: {
                  slidesPerView: 3,
                  spaceBetween: 200,
                  slidesPerGroup: 1,
                  loop: true
               },
               993: {
                  slidesPerView: 3,
                  spaceBetween: 23,
                  slidesPerGroup: 1,
                  loop: true
               }
             },
             breakpoints3:{
                375: {
                  slidesPerView: 3,
                  spaceBetween: 160,
                  slidesPerGroup: 1,
                  loop: true
                },
                576: {
                  slidesPerView: 3,
                  spaceBetween: 160,
                  slidesPerGroup: 1,
                  loop: true
               },
               577: {
                  slidesPerView: 4,
                  spaceBetween: 55,
                  slidesPerGroup: 1,
                  loop: true
               },
               768: {
                  slidesPerView: 4,
                  spaceBetween: 55,
                  slidesPerGroup: 1,
                  loop: true
               },
               769: {
                  slidesPerView: 4,
                  spaceBetween: 100,
                  slidesPerGroup: 1,
                  loop: true
               },
               992: {
                  slidesPerView: 4,
                  spaceBetween: 100,
                  slidesPerGroup: 1,
                  loop: true
               },
               993: {
                  slidesPerView: 5,
                  spaceBetween: 140,
                  slidesPerGroup: 1,
                  loop: true
               }
             },
             breakpoints4:{
               375: {
                  slidesPerView: 2,
                  spaceBetween: 260,
                  slidesPerGroup: 1,
                  loop: true
               },
               576: {
                  slidesPerView: 2,
                  spaceBetween: 260,
                  slidesPerGroup: 1,
                  loop: true
               },
               577: {
                  slidesPerView: 2,
                  spaceBetween: 75,
                  slidesPerGroup: 1,
                  loop: true
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 75,
                  slidesPerGroup: 1,
                  loop: true
               },
               769: {
                  slidesPerView: 3,
                  spaceBetween: 245,
                  slidesPerGroup: 1,
                  loop: true
               },
               992: {
                  slidesPerView: 3,
                  spaceBetween: 245,
                  slidesPerGroup: 1,
                  loop: true
               },
               993: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                  slidesPerGroup: 1,
                  loop: true
               }
             }
          }
       }
    },
    components:{
      TopPannel,
      LeftPannel,

      Swiper,
      SwiperSlide,
   },
   methods:{
      signOn(){
         document.getElementById('s').click();
      },
      logIn(){
         document.getElementById('l').click();
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

 .container {
    min-width: 1216px;
    max-width: 1216px;
    padding-left: 120px;
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

 .content{
    display: flex;
    flex-direction: column;
 }

/* media */

  @media(max-width: 992px){

       html {
         height: 100%;
      }

     .container{
        min-width: 576px;
        max-width: 992px;
        margin: 0;
        padding-left: 0px;
     }
  }

/* first block */

 .content__top{
    position: relative;
    height: 820px;
 }

 .content__triangles{
    position: absolute;
    z-index: 0;
 }

 .content__triangles>img{
    position: absolute;
    left: 68px;
    top: 64px;
 }

 .content__triangles>img:first-child{
     opacity: .32;
     transform: rotate(1.15deg);
 }

 .content__triangles>img:nth-child(3){
     transform: rotate(-1.7deg);
     opacity: .32;
 }

 .content__triangles>img:nth-child(4){
     width: 634px;
     height: 478px;
     left: 255px;
     top: 152px;
     opacity: 0.32;
 }

 .content__triangles>img:nth-child(5){
    width: 312px;
    height: 236px;
    left: 415px;
    top: 224px;
    opacity: 0.08;
 }

 .content__info{
     position: absolute;
     z-index: 0;
     left: 22%;
     top: 201px;
 }

 .content__top>div{
    margin: 0 auto;
    
 }

 .content__info>div{
     margin: 0 auto;
 }

 .content__info>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 125px;
    line-height: 100%;
    text-align: center;
    color: #F5F5F5;
 }

 .content__info>div:nth-child(2){
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #CCCCCC;
    width: 463px;
    height: 60px;
    text-align: center;
    margin-top: 17px;
    margin-bottom: 26px;
 }

 .content__info>div:last-child{
     justify-content: center;
 }

/* second block */

  .content__torn{
    margin-top: 145px;
    display: flex;
    flex-direction: column;
  }

  .content__rornam{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1170px;
  }

  .content__rornam>ul>li{
      display: inline;
      list-style-type: none;

      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;

      color: #A0A5AD;

      padding: 16px;
      width: 129px;
      height: 56px;
      background: #14191F;
      margin-left: 1px;
      margin-right: 1px;
  }

 .content__rornam>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 100%;
    color: #F5F5F5;
 }

 .content__gamecard{
     display: flex;
     width: 1171px;
 }

 .gamecard{
     display: flex;
     flex-direction: column;
     width: 370px;
     margin-top: 35px;
     margin-right: 30px;
 }

 .gamecard:last-child{
     margin-right: 0px;
 }

 .gamecard>div:first-child{
     margin-bottom: -4px;
 }

 .gamecard>div:last-child{
     background: #151A1F;
 }

 .gamecard>div:last-child>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: #E6E8EB;
    width: 310px;
    margin: 30px 38px 30px 22px;
 }

  .gamecard>div:last-child>ul{
      display: flex;
      justify-content: space-between;
  }

 .gamecard>div:last-child>ul>li{
    list-style-type: none;
    display: inline;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;

    color: #8996A3;
 }

 .gamecard>div:last-child>ul>li:first-child{
    margin-left: 22px;
 }

 .gamecard>div:last-child>ul>li:last-child{
    margin-right: 22px;
 }

 .gamecard>div:last-child>ul:last-child{
     margin-top: 8px;
     margin-bottom: 30px;
 }

 .gamecard>div:last-child>ul:last-child>li{
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      color: #E6E8EB;
  }

  .gamecard>div:last-child>ul:last-child>li:nth-child(2){
      margin-left: -10px;
  }

  .gamecard>div:last-child>ul:last-child>li:nth-child(3){
      margin-right: -18px;
  }

/*block three*/
   .content__gamenews{
     display: flex;
     width: 1171px;
   }

   .gamenews{
      background: #E1E6EB;
   }

   .gamenews>div:last-child{
      background: #E1E6EB;
   }

   .gamenews{
     display: flex;
     flex-direction: column;
     width: 370px;
     margin-top: 35px;
 }

 .gamenews:last-child{
     margin-right: 0px;
 }

 .gamenews>div:first-child{
     margin-bottom: -4px;
     margin-top: 2px;
     margin-left: 2px;
     margin-right: 2px;
 }

 .gamenews>div:first-child>img{
    width: 365.5px;
 }

 .gamenews>div:last-child>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: #0F1215;
    width: 326px;
    margin: 30px 22px 30px 22px;
 }

 .gamenews>div:last-child>div:last-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #5E656B;

    max-width: 326px;
    margin: 0 22px 42px 22px;
 }

/* block four */
  
  .content__streams{
    display: flex;
    flex-direction: column;
  }

  .content__streams>div:first-child{
      display: flex;
      margin-top: 25px;
  }

  .content__streams>div:first-child>img{
      width: 583px;
  }

  .content__streams>div:first-child>img:first-child{
      margin-right: 4px;
  }

  .content__streams>div:last-child{
      display: flex;
  }

  .content__streams>div:last-child>img{
      width: 290px;
      margin-left: 4px;
      margin-top: 4px;
  }

  .content__streams>div:last-child>img:first-child{
      margin-left: 0px;
  }

/* block five */

  .content__partn>div>div>div{
      width: 1170px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 55px;
  }

/* block six */

  .content__games{
      width: 1180px;
      margin-bottom: 254px;
  }

  

  .content__games>div:last-child{
      margin-right: 0px;
      
  }

  .content__games>div>div:last-child>div>div{
     margin-top: 45px;
  }

  .content__games>div>div:last-child>div>div>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 100%;
    text-align: center;
    color: #F5F5F5;

    position: absolute;
    
    left:50%;
    transform:translate(-50%, -50%);
    bottom: 30px;
  }

/* media */

  @media(max-width: 992px){

     #body{
        zoom: normal;
     }
     
     .header__log2{
        position: relative;
        top: 0px;
        right: 0px;
     }

     .content{
        max-width: 992px;
     }

     .content__top{
        max-width: 975px;
     }

     .content__triangles>img{
        position: absolute;
        left: 0px;
        top: 0px;

        max-width: 943px;
        max-height: 701px; 
      }

     .content__triangles>img:nth-child(4){
        width: 634px;
        height: 478px;
        left: 187px;
        top: 88px;
        opacity: 0.32;
     }

     .content__triangles>img:nth-child(5){
        width: 312px;
        height: 236px;
        left: 347px;
        top: 160px;
        opacity: 0.08;
     }

     .content__info{
        position: absolute;
        z-index: 0;
        left: 16%;
        top: 201px;
     }

     .content__triangles>img:first-child{
        max-width: 943px;
        max-height: 701px;
        opacity: .32;
        transform: rotate(1.15deg);
     }

     .content__triangles>img:nth-child(3){
        max-width: 943px;
        max-height: 701px; 
     }

    .content__triangles>img:nth-child(3){
     max-width: 943px;
        max-height: 701px;   
     transform: rotate(-1.7deg);
     opacity: .32;
    }

    #content__torn1{
       margin-top: 0px;
    }
    #content__torn2{
       margin-top: 0px;
    }
    #content__torn3{
       margin-top: 30px;
    }
    #content__torn4{
       margin-top: 30px;
    }
    #content__torn5{
       margin-top: 30px;
    }

    #content__torn1>.content__rornam{
       flex-direction: column;
       align-items: stretch;
       margin-left: 15px;
       max-width: 950px;
    }
    #content__torn2>.content__rornam{
       flex-direction: column;
       align-items: stretch;
       margin-left: 15px;
       max-width: 950px;
    }
    #content__torn3>.content__rornam{
       flex-direction: column;
       align-items: stretch;
       margin-left: 15px;
       max-width: 950px;
    }
    #content__torn4>.content__rornam{
       flex-direction: column;
       align-items: stretch;
       margin-left: 15px;
       max-width: 950px;
    }
    #content__torn5>.content__rornam{
       flex-direction: column;
       align-items: stretch;
       margin-left: 15px;
       max-width: 950px;
    }
    

    #content__torn1>.content__rornam>div:first-child{
       margin-bottom: 35px;
    }
    #content__torn2>.content__rornam>div:first-child{
       margin-bottom: 35px;
       margin-top: 30px;
    }
    #content__torn3>.content__rornam>div:first-child{
       margin-bottom: 35px;
       margin-top: 30px;
    }

    #content__torn1>.content__gamecard{
        width: 950px;
        margin-left: 15px;
    }
    #content__torn2>.content__gamenews{
        width: 950px;
        margin-left: 15px;
    }
    #content__torn3>.content__streams{
        width: 950px;
        margin-left: 15px;
    }
    #content__torn4>.content__partn{
        width: 950px;
        margin-left: 15px;
    }
    #content__torn5>.content__games{
        width: 950px;
        margin-left: 15px;
    }

    /* 0 */

     #content__torn3>.content__streams{
        max-width: 730px;
        align-items: center;
     }

      #content__torn3>.content__rornam{
        margin-top: 0px;
     }

     #content__torn3>.content__rornam>ul{
        margin-left: 0px;
     }

     #content__torn3>.content__streams>div:first-child{
        margin-left: 225px;
        width: 950px;
     }

     #content__torn3>.content__streams>div:last-child{
        flex-wrap: wrap;
        width: 950px;
        margin-left: 225px;
     }

     #content__torn3>.content__streams>div:first-child>img{
        width: 470px;
        margin-bottom: 5px;
     }

     #content__torn3>.content__streams>div:last-child>img{
        width: 470px;
        margin-bottom: 5px;
        margin-right:
     }

     #content__torn3>.content__streams>div:last-child>img:nth-child(2n){
        margin-left: 0px;
     }

     #content__torn3>.content__streams>div:last-child>img:nth-child(2n + 1){
        margin-left: 0px;
        margin-right: 5px;
     }
  }

    @media(max-width: 768px){
     .container{
        margin-left: 10px;
        margin-right: 0px;
     }

     .content{
        max-width: 768px;
     }

     .content__top{
        max-width: 768px;
     }

     #content__triangl{
        margin-left: 45px !important;
     }

     .content__triangles>img{
        position: absolute;
        left: 0px;
        top: 0px;

        max-width: 768px;
        max-height: 501px; 
      }

     .content__triangles>img:nth-child(4){
        width: 390px;
        height: 278px;
        left: 145px;
        top: 48px;
        opacity: 0.32;
     }

     .content__triangles>img:nth-child(5){
        width: 212px;
        height: 136px;
        left: 237px;
        top: 90px;
        opacity: 0.08;
     }

     .content__info{
        position: absolute;
        z-index: 0;
        left: 7%;
        top: 100px;
     }

     .content__triangles>img:first-child{
        max-width: 740px;
        max-height: 501px;
        opacity: .32;
        transform: rotate(1.15deg);
     }

     .content__triangles>img:nth-child(3){
        max-width: 740px;
        max-height: 501px;
     }

    .content__triangles>img:nth-child(3){
        max-width: 740px;
        max-height: 501px;   
        transform: rotate(-1.7deg);
        opacity: .32;
    }

    .content__info2{
        position: absolute;
        z-index: 0;
        left:46.5%;
        transform:translate(-50%, -50%);
        top: 170px;
     }

     .content__info2>div:first-child{
       font-family: Rubik;
       font-style: normal;
       font-weight: bold;
       font-size: 66px;
       line-height: 100%;
       text-align: center;
       color: #F5F5F5;
       width: 500px;
     }

     .container{
        margin-top: 35px;
     }

     .content__top{
        height: 430px;
     }

     .content__rornam{
        margin-top: 100px;
        width: 730px;
     }

     .content__gamecard{
        width: 720px;
        margin-left: 15px;
     }
     
     /* 0 */

     #content__torn3>.content__streams{
        max-width: 730px;
        align-items: center;
     }

      #content__torn3>.content__rornam{
        margin-top: 0px;
     }

     #content__torn3>.content__rornam>ul{
        margin-left: 92px;
     }

     #content__torn3>.content__streams>div:first-child{
        flex-direction: column;
        width: 540px;
     }

     #content__torn3>.content__streams>div:last-child{
        flex-wrap: wrap;
        width: 540px;
     }

     #content__torn3>.content__streams>div:first-child>img{
        width: 535px;
        margin-bottom: 5px;
     }

     #content__torn3>.content__streams>div:last-child>img{
        width: 263px;
        margin-bottom: 5px;
     }

     #content__torn3>.content__streams>div:last-child>img:nth-child(2n){
        margin-left: 0px;
     }

     #content__torn3>.content__streams>div:last-child>img:nth-child(2n + 1){
        margin-left: 0px;
        margin-right: 10px;
     }

     #content__torn3>.content__streams>div:first-child{
        margin-left: 0px;
     }

     #content__torn3>.content__streams>div:last-child{
        flex-wrap: wrap;
        margin-left: 0px;
     }

     /* 1 */

     #content__torn1>.content__rornam{
        margin-left: 15px;
        margin-top: 120px;
     }
     #content__torn1>.content__gamecard{
        margin-left: 15px;
        width: 720px;
        margin-left: 15px;
     }

     /* 2 */

     #content__torn2>.content__rornam{
        margin-left: 15px;
        margin-top: 30px;
     }
     #content__torn2>.content__gamenews{
        margin-left: 15px;
        width: 720px;
        margin-left: 15px;
     }

     /* 3 */

     #content__torn4{
        margin-top: 0px;
     }

     #content__torn4>.content__rornam{
        margin-left: 15px;
        margin-top: 30px;
     }
     #content__torn4>.content__partn{
        margin-left: 15px;
        width: 720px;
        margin-left: 15px;
     }

     /* 4 */

     #content__torn5>.content__rornam{
        margin-left: 15px;
        margin-top: 30px;
     }
     #content__torn5>.content__games{
        margin-left: 15px;
        width: 720px;
        margin-left: 15px;
     }     
  }

    @media(max-width: 576px){
     .container{
        margin-right: 0px;
     }

     .content{
        max-width: 576px;
     }

     .content__top{
        max-width: 576px;
     }

     .content__triangles>img{
        position: absolute;
        left: 0px;
        top: 0px;

        max-width: 485px;
        max-height: 401px; 
      }

     .content__triangles>img:nth-child(4){
        width: 290px;
        height: 200px;
        left: 100px;
        top: 48px;
        opacity: 0.32;
     }

     .content__triangles>img:nth-child(5){
        width: 150px;
        height: 86px;
        left: 170px;
        top: 90px;
        opacity: 0.08;
     }

     .content__info{
        position: absolute;
        z-index: 0;
        left: 16%;
        top: 201px;
     }

     .content__triangles>img:first-child{
        max-width: 485px;
        max-height: 401px; 
        opacity: .32;
        transform: rotate(1.15deg);
     }

     .content__triangles>img:nth-child(3){
        max-width: 485px;
        max-height: 401px; 
     }

    .content__triangles>img:nth-child(3){
        max-width: 485px;
        max-height: 401px;    
        transform: rotate(-1.7deg);
        opacity: .32;
    }

    .content__info2{
        position: absolute;
        z-index: 0;
        left:46.5%;
        transform:translate(-50%, -50%);
        top: 170px;
     }

     .content__info2>div:first-child{
       font-family: Rubik;
       font-style: normal;
       font-weight: bold;
       font-size: 66px;
       line-height: 100%;
       text-align: center;
       color: #F5F5F5;
       width: 500px;
     }

     .container{
        margin-top: 35px;
     }

     .content__top{
        height: 520px;
     }

     .content__info2{
        top: 125px;
     }

     #content__info-home{
        top: 50px;
        left: 30px;
     }

     #content__info-home>div:first-child{
        font-size: 75px;
     }

     .content__top{
        margin-left: 25px;
        height: 430px;
     }

     .content__torn{
        margin-top: 0px;
     }

     .content__gamecard{
        width: 535px;
        margin-left: 15px;
     }

     .content__rornam{
        margin-top: 0px;
        width: 540px;
     }

     /* 0 */

     #content__torn3>.content__streams>div:first-child{
        flex-direction: column;
        width: 540px;
     }

     #content__torn3>.content__streams>div:last-child{
        flex-wrap: wrap;
        width: 540px;
     }

     #content__torn3>.content__streams>div:first-child>img{
        width: 535px;
        margin-bottom: 5px;
     }

     #content__torn3>.content__streams>div:last-child>img{
        width: 263px;
        margin-bottom: 5px;
     }

     #content__torn3>.content__streams>div:last-child>img:nth-child(2n){
        margin-left: 0px;
     }

     #content__torn3>.content__streams>div:last-child>img:nth-child(2n + 1){
        margin-left: 0px;
        margin-right: 10px;
     }

     #content__torn3>.content__streams{
        max-width: 540px;
     }

     #content__torn3>.content__rornam>ul{
        margin-left: 0px;
     }

     /* 1 */

     #content__torn1>.content__rornam{
        margin-left: 15px;
        margin-top: 30px;
     }
     #content__torn1>.content__gamecard{
        margin-left: 15px;
        width: 535px;
        margin-left: 15px;
     }

     /* 2 */

     #content__torn2>.content__rornam{
        margin-left: 15px;
        margin-top: 30px;
     }
     #content__torn2>.content__gamenews{
        margin-left: 15px;
        width: 535px;
        margin-left: 15px;
     }

     /* 3 */

     #content__torn4>.content__rornam{
        margin-left: 15px;
        margin-top: 30px;
     }
     #content__torn4>.content__partn{
        margin-left: 15px;
        width: 535px;
        margin-left: 15px;
     }

     /* 4 */

     #content__torn5>.content__rornam{
        margin-left: 15px;
        margin-top: 30px;
     }
     #content__torn5>.content__games{
        margin-left: 15px;
        width: 535px;
        margin-left: 15px;
     }


     #body{
        overflow-x: hidden;
     }

     .signup__login>div:first-child>div{
        margin-right: 75px;
     }

     .signup__form2>div:first-child>div:first-child{
        margin-left: 75px;
     }

     .signup__form2>div:first-child>div:last-child{
        margin-right: 75px;
     }
  }

  @media(max-width: 1366px) and (min-width: 993px){
     #body{
        zoom:70%  
     }

     .header{
        margin: 0 auto;
        margin-top: 30px;
     }
  }

  @media(max-width: 992px) and (min-width: 769px){
     #body{
        zoom:70%  
     }
  }

  @media(max-width: 767px) and (min-width: 577px){
     #body{
        zoom:70%  
     }
  }

  @media(max-width: 575px) and (min-width: 375px){
     #body{
        zoom:70%  
     }
  }

  @media(max-width: 410px){
      #body{
        zoom:60%  
     }
  }

  



  
</style>
