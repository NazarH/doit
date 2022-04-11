<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
         <div class='content__top' style='margin-top: 130px; height: 334px;'>
            <div class='content__404'>
               <div>
                  <p>Are you lost?</p>
                  <p>Please back to the game!</p>
               </div>
               <div>
                   404
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

/* --- */

  .content__404{
      display: flex;
  }

  .content__404>div:first-child{
     font-family: Roboto;
     font-style: normal;
     font-weight: normal;
     font-size: 30px;
     line-height: 130%;
     color: #FFFFFF;

     padding: 128px 147px 128px 84px;
  }

  .content__404>div:last-child{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 116px;
    line-height: 100%;
    color: #0F1215;

    padding: 109px 319px 109px 84px;

    background: linear-gradient(90deg, #1472FF 0%, rgba(20, 114, 255, 0) 94.79%);
  }
   
</style>
