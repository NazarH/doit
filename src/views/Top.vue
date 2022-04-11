<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container' id='container__top'>
         <div class='content' style='margin-left: 24px;'>
            <div class='content__topof'>
               Top of
               <select class='content__select'>
                 <option>2018</option>
                 <option>2019</option>
                 <option>2020</option>
                 <option>2021</option>
                 <option>2022</option>
               </select>
            </div>
            <div class='content__stat'>
               <div>
                  <p><span>Total Tournaments:</span><span>157,260,352</span></p>
               </div>
               <div>
                  <p><span>Total Prize money:</span><span>$157,260,352.09</span></p>
               </div>
               <div>
                  <p><span>Total Players:</span><span>322</span></p>
               </div>
            </div>
            <div class='content__table'>
                <table>
                   <tr class='tableF'>
                      <td>Top Countries</td>
                      <td>Top Players</td>
                      <td>Top Teams</td>
                      <td>Top Games</td>
                   </tr>
                </table>
                <table>
                  <tr class='tableS'>
                     <td>Rank</td>
                     <td>Country & Nickname</td>
                     <td>NAME</td>
                     <td>Total (year)</td>
                     <td>Total (OVERAl)</td>
                   </tr>
                   <tr class='tableS2' v-for='(player, index) in playersArr' :key='player.id'>
                     <td>{{index + 1}}</td>
                     <td><img src='../assets/top-ukr.png'>{{player.nickname + ` ` + (index + 1)}}</td>
                     <td>{{player.name  + ` ` + (index + 1)}}</td>
                     <td>${{player.totalYear}}</td>
                     <td>${{player.totalOver}}</td>
                   </tr>
                </table>
                <div class='content__pagin'>
                    <div>
                       <img src='../assets/top-leftt.png'>
                       <img src='../assets/top-left.png'>
                       <div>4</div>
                       <div>5</div>
                       <div>6</div>
                       <img src='../assets/top-right.png' style='height: 16px; margin-left: 60px;'>
                       <img src='../assets/top-rightt.png'>
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
    data(){
        return{
            playersArr: [
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                },
                {
                    nickname: 'twtv Rykomastery',
                    name: 'Albert Fox',
                    totalYear: '800,652.82',
                    totalOver: '542,986.37'
                }
            ]
        }
    },
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

/* */

  .content__topof{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 100%;
    text-align: center;
    color: #F5F5F5;

    margin-top: 96px;
    width: 1170px;
  }

  .content__select{
      width: 141px;
      background-color: #0F1215;
      color: #2787F6;
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 44px;
      line-height: 100%;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/top-xmlid.png') no-repeat;
      background-position: 115px;
  }

  .content__select>option{
      background-color: #0F1215;
  }

  .content__stat{
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      width: 1170px;
  }

  .content__stat>div>p>span:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 100%;
    color: #E6E8EB;
  }

  .content__stat>div>p>span:last-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 100%;
    text-align: right;
    color: #8995A3;

    margin-left: 16px;
  }

  .content__table{
      width: 1170px;
      margin-top: 50px;
  }

  .content__table>table:nth-child(2){
      border-bottom:  2px solid #242B33;
  }

  table{
      width: 100%;
      border-spacing: 0px;
  }

  .tableF>td{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 100%;
    text-align: center;
    color: #F5F5F5;
    width: 294px;
    padding-top: 22px;
    padding-bottom: 22px;
    border: 2px solid #242B33;
    border-right: 0px;
  }

  .tableF>td:last-child{
      border-right: 2px solid #242B33;
  }

  .tableF>td:nth-child(2){
      background: #D8DFEB;
      color: #0F1215;
      cursor: pointer;
  }

  .tableF>td:hover{
      background: #D8DFEB;
      color: #0F1215;
      cursor: pointer;
  }

  .tableS>td{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;
    color: #E6E6E6;
    opacity: 0.88;
    border: 2px solid #242B33;
    border-right: 0px;
    border-left: 0px;
    border-top: 0px;
  }

  .tableS>td:first-child{
      width: 45px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-left: 30px;
      padding-right: 60px;
      border-left: 2px solid #242B33;
  }

  .tableS>td:nth-child(2){
      width: 302px;
      padding-right: 60px;
  }

  .tableS>td:nth-child(3){
      width: 268px;
      padding-right: 60px;
  }

  .tableS>td:nth-child(4){
      width: 110px;
      padding-right: 60px;
  }

  .tableS>td:nth-child(5){
      border-right: 2px solid #242B33;
  }


  .tableS2>td{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #67707A;
    opacity: 0.88;
    
  }

  .tableS2>td:first-child{
      width: 45px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-left: 30px;
      padding-right: 60px;
      border-left: 2px solid #242B33;
  }

  .tableS2>td:nth-child(2){
      display: flex;
      align-items: center;
      width: 302px;
      padding-right: 60px;
      padding-top: 30px;
      color: #CCCCCC;    
  }

  .tableS2>td:nth-child(2)>img{
      margin-right: 12px;
  }

  .tableS2>td:nth-child(3){
      width: 268px;
      padding-right: 60px;
  }

  .tableS2>td:nth-child(4){
      width: 110px;
      padding-right: 60px;
  }

  .tableS2>td:nth-child(5){
      border-right: 2px solid #242B33;
  }

  .content__pagin{
      width: 1166px;
      padding-top: 20px;
      padding-bottom: 20px;
      border: 2px solid #242B33;
      border-top: 0px;
      margin-bottom: 100px;
  }

  .content__pagin>div{
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .content__pagin>div>img:first-child{
      margin-right: 35px;
  }

  .content__pagin>div>img:last-child{
      margin-left: 35px;
  }

  .content__pagin>div>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #FFFFFF;
  }

  .content__pagin>div>div:nth-child(4){
      margin-left: 30px;
      margin-right: 30px;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      color: #2787F6;
  }

  .content__pagin>div>img:nth-child(2){
      width: 16;
      Height: 16px;
      margin-right: 60px;
  }

  @media(max-width: 992px){
      #container__top{
          transform: scale(0.7); 
          margin-left: -100px; 
          margin-top: -250px;
          margin-bottom: -100px;
      }
  }

  @media(max-width: 768px){
      #container__top{
          transform: scale(0.5);
          margin-left: -125px; 
          margin-top: -385px;
          margin-bottom: -280px;
      }
  }

  @media(max-width: 576px){
      #container__top{
          transform: scale(0.45);
          margin-top: -420px;
          margin-left: -214px; 
      }

      #body{
          overflow-x: hidden;
      }
  }
   
</style>
