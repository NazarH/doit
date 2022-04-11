<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
         <div class='content__top' style='margin-bottom: 96px;'>
               <div class='content__triangles' style='margin-left: 16px;'>
                  <img src='../assets/triangle.png'>
                  <img src='../assets/triangle.png'>
                  <img src='../assets/triangle.png'>
                  <img src='../assets/triangle.png'>
                  <img src='../assets/triangle.png'>
               </div>
               <div class='content__info2'>
                 <div>
                    Comming soon
                 </div>
                 <div>
                    We are working hard to provide you the best experience on our platform
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

 .content__info2{
     position: absolute;
     z-index: 0;
     left:50%;
     transform:translate(-50%, -50%);
     top: 308px;
 }

 .content__top>div{
    margin: 0 auto;
 }

 .content__info2>div{
     margin: 0 auto;
 }

 .content__info2>div:first-child{
   font-family: Rubik;
   font-style: normal;
   font-weight: bold;
   font-size: 66px;
   line-height: 100%;
   text-align: center;
   color: #F5F5F5;
 }

 .content__info2>div:nth-child(2){
   font-family: Rubik;
   font-style: normal;
   font-weight: bold;
   font-size: 13px;
   line-height: 100%;
   text-align: center;
   color: #6A6767;
   margin-top: 8px;
 }

 .content__info2>div:last-child{
     justify-content: center;
 }


   @media(max-width: 992px){
     .container{
        margin-left: 10px;
        margin-right: 0px;
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
        left: 147px;
        top: 48px;
        opacity: 0.32;
     }

     .content__triangles>img:nth-child(5){
        width: 312px;
        height: 236px;
        left: 307px;
        top: 130px;
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

    .content__info2{
     position: absolute;
     z-index: 0;
     left:50%;
     transform:translate(-50%, -50%);
     top: 238px;
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
  }

    @media(max-width: 768px){
     .container{
        margin-right: 0px;
     }

     .content{
        max-width: 768px;
     }

     .content__top{
        max-width: 768px;
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
        left: 16%;
        top: 201px;
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
        height: 520px;
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

     #body{
        overflow-x: hidden;
     }
  }
   
</style>
