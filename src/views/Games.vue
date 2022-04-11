<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
        <div class='content'>
           <div class='content__nblockk'>
              <div class='content__gamesearch'>
                <div>
                   Games
                </div>
                <input type='text' placeholder='Search the game' class='gamesearch'>
              </div> 
              <div class='content__sgame'>
                  <div>
                     <img src='../assets/games-dota2.png'>
                     <div>
                        DOTA II 
                     </div>
                  </div>
                  <div>
                     <img src='../assets/main-csgo.png'>
                     <div>
                        CS:GO 
                     </div>
                  </div>
                  <div>
                     <img src='../assets/games-starc2.png'>
                     <div>
                        StarCraft II 
                     </div>
                  </div>
              </div>
              <div class='content__sgame'>
                  <div>
                     <img src='../assets/games-dota2.png'>
                     <div>
                        DOTA II 
                     </div>
                  </div>
                  <div>
                     <img src='../assets/main-csgo.png'>
                     <div>
                        CS:GO 
                     </div>
                  </div>
                  <div>
                     <img src='../assets/games-starc2.png'>
                     <div>
                        StarCraft II 
                     </div>
                  </div>
              </div>
              <div class='content__sgame' style='margin-bottom: 130px;'>
                  <div>
                     <img src='../assets/games-dota2.png'>
                     <div>
                        DOTA II 
                     </div>
                  </div>
                  <div>
                     <img src='../assets/main-csgo.png'>
                     <div>
                        CS:GO 
                     </div>
                  </div>
                  <div>
                     <img src='../assets/games-starc2.png'>
                     <div>
                        StarCraft II 
                     </div>
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

/* top */
 .content__nblockk{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
  }

  .content__nblockk>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 100%;
    color: #F5F5F5;
 }

 .content__gamesearch{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 19px;
      margin-top: 92px;
  }

 .content__gamesearch>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 100%;
    color: #F5F5F5;
 }

 .content__gamesearch>input{
   background: #0F1215;
   border: 2px solid #20252B;
   box-sizing: border-box;
   border-radius: 4px;
   width: 512px;
   height: 40px;
   color: white;
   padding-left: 16px;
 }

 .gamesearch::placeholder{
   font-family: Rubik;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 100%;
   color: #CCCDCD;
 }

  .content__sgame{
      display: flex;
  }

  .content__sgame>div{
      width: 387px;
      position: relative;
      margin-right: 17px;
      margin-bottom: 30px;
      margin-top: 0px;
  }

  .content__sgame>div:last-child{
      margin-right: 0px;
  }

  .content__sgame>div>img{
    width: 387px;
  }

  .content__sgame>div>div{
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
     .content__gamesearch{
        max-width: 950px;
        margin-left: 11px;
        margin-top: 0px;
     }

     .content__nblockk{
        align-items: stretch;
     }

     .content__sgame{
        justify-content: center;
     }

     .content__sgame>div{
        width: 287px;
     }

     .content__sgame>div>img{
        width: 287px;
        height: 400px;
     }

     .container{
        margin: 0;
     }

     .header{
        margin-left: 0px;
        padding-left: 0px;
     }
  }

  @media(max-width: 768px){
     .content__sgame>div{
        width: 220px;
     }

     .content__sgame>div>img{
        width: 220px;
        height: 300px;
     }

     .content__gamesearch>input{
        width: 450px;
     }

     .content__gamesearch{
        width: 725px;
     }
  }

  @media(max-width: 576px){
     .content__sgame{
        flex-direction: column;
     }
     .content__sgame>div{
        width: 440px;
        height: 350px;
        overflow:hidden;

        margin-bottom: 15px;
     }

     .content__sgame>div>img{
        width: 440px;
        height: 600px;
     }

     .content__gamesearch{
        max-width: 540px;
     }

     .content__gamesearch>input{
        width: 300px;
     }

     .content__sgame{
        max-width: 540px;
        margin-left: 9px;
        align-items: center;
     }

     .content__sgame>div:last-child{
        margin-left: -15px;
     }
  }
   
</style>