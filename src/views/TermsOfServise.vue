<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
        <div class='content__torn' style='margin-top: 96px;'>
              <div class='content__rornam'>
                <div>
                   Terms of Use
                </div>
              </div>
              <div class='termsOfUse'>
                  <div>
                     <p>1. <span>The purpose</span></p>
                     <div>
                        <div>1.1.</div>
                        <div>A night to remember for Brazil. 
                        Drama is never too far away at Copa 
                        America and this final had it by the 
                        bucketlad. Thanks for your company. 
                        Drama is never too far away at Copa 
                        America and this final had it by the 
                        bucketlad. Thanks for your company.</div>
                     </div>
                     <div>
                        <div>1.2.</div>
                        <div>A night to remember for Brazil. 
                        Drama is never too far away at Copa 
                        America and this final had it by the 
                        bucketlad. Thanks for your company. 
                        Drama is never too far away at Copa 
                        America and this final had it by the 
                        bucketlad. Thanks for your company.</div>
                     </div>
                  </div>
                  <div>
                     <p>2. <span>The purpose</span></p>
                     <div>
                        <div>2.1.</div>
                        <div>A night to remember for Brazil. 
                        Drama is never too far away at Copa 
                        America and this final had it by the 
                        bucketlad. Thanks for your company. 
                        Drama is never too far away at Copa 
                        America and this final had it by the 
                        bucketlad. Thanks for your company.</div>
                     </div>
                  </div>
                  <div>
                  
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

 .termsOfUse>div{
     margin-top: 30px;
 }

 .termsOfUse>div>p{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #F5F5F5;
 }

 .termsOfUse>div>p>span{
     font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #F5F5F5;
    margin-left: 30px;
 }

 .termsOfUse>div>div{
     display: flex;
     margin-left: 52px;
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 24px;
     color: #67707A;
 }

 .termsOfUse>div>div:nth-child(2){
     margin-top: 22px;
     margin-bottom: 16px;
 }

 .termsOfUse>div>div:nth-child(2)>div:first-child{
     margin-right: 30px;
 }

 .termsOfUse>div>div:nth-child(2)>div:last-child{
     width: 600px;
 }

 .termsOfUse>div>div:nth-child(3)>div:first-child{
     margin-right: 30px;
 }

 .termsOfUse>div>div:nth-child(3)>div:last-child{
     width: 600px;
 }
   
</style>
