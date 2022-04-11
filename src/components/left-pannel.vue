<template>
   <div class='left'>
      <ul>
        <li><router-link to="/tournaments"><img src='../assets/l-knight.png'></router-link></li>
        <li><router-link to=""><img src='../assets/l-trophy.png'></router-link></li>
        <li><router-link to="/top"><img src='../assets/l-growth.png'></router-link></li>
        <li><router-link to=""><img src='../assets/l-network.png'></router-link></li>
        <li><router-link to=""><img src='../assets/l-target.png'></router-link></li>
        <li><router-link to="/faq"><img src='../assets/l-megaphone.png'></router-link></li>
      </ul>
   </div>
</template>

<script>

</script>

<style>

.left{
    position: fixed;
    display: flex;
    height: 100%;
    align-items: center;
    border-right: 1px solid #20252B;
}

.left>ul>li{
    list-style-type: none;
    margin: 40px;
}

.left>ul>li>img{
    width: 32px;
    height: 32px;
}

/* media */

  @media (max-width: 1367px){
      .left{
          
      }

      .left>ul{
          
      }

      .left>ul>li:first-child{
          
      }
  }

  @media (max-width: 992px){
      .left{
          position: fixed;
          left: 0;
          bottom: 0%;
          width: 100%;
          height: 75px;

          
          

          border-right: 0px;
          border-top: 1px solid #20252B;
          background: #0F1215;

          z-index: 2;
      }

      .left>ul{
          width: 100%;
          display: flex;
          justify-content: space-between;
      }

      .left>ul>li{
          display: inline-block;
          margin: 0;
      }

      .left>ul>li:first-child{
          margin-left: 35px;
      }

      .left>ul>li:last-child{
          margin-right: 35px;
      }
  }

</style>