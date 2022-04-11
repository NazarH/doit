<template>
    <div class='header'>
        <div class='header__logo'>
            <img src='../assets/top-left-2.1.png' @click='menuShow' id='imge1'>
            <div style='display:none; width:32px; height:32px;' @click='menuHide' id='imge2'>
               <img src='../assets/top-left-2.2.png'>
            </div>
            <router-link to="/"><img src='../assets/logo.png'></router-link>
        </div>
        <div class='header__nav' id='header__nav'>
           <ul>
              <li id='nav__home'>
                <router-link to="/">Home</router-link> 
              </li>
              <li>
                <router-link to="/play">Play</router-link> 
              </li>
              <li>
                <router-link to="/news">News</router-link> 
              </li>
              <li>
                <router-link to="/games">Games</router-link> 
              </li>
              <li>
                <router-link to="/shop">Shop</router-link> 
              </li>
              <li>
                <router-link to="/sponsorship">Sponsorship</router-link> 
              </li>
              <li>
                <router-link to="/contact-us">Contacts</router-link> 
              </li>
           </ul>
        </div>
        <div class='header__login' id='header__login'>
            <button @click='login' id='l'>Login</button>
            <button @click='signUp' id='s'>Sign up</button>
        </div>
        <div class='header__loginIn' id='header__loginIn' onmouseover="document.getElementById('dropdown').style.display='block';"
                   onmouseout="document.getElementById('dropdown').style.display='none';">
           <div>
              <img src='../assets/profile-avatar.png'>
              <div>
                   <router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showProfile'>{{this.$store.getters.LOGIN.userNickn}}</router-link>
                   <div>{{this.$store.getters.LOGIN.deposite}} USD / 0 DTC</div>
              </div>
              <div>
              <img src='../assets/profile-vector.png'>
              </div>
           </div>
           <div>
              LVL 999 <div><div></div></div>
           </div>
           <div id="dropdown" onmouseover="document.getElementById('dropdown').style.display='block';"
                   onmouseout="document.getElementById('dropdown').style.display='none';">
              <ul :style='this.$store.getters.LOGIN.status === "admin" ? "display: flex" : "display: none"'>
                <li><router-link to='/admin-pannel'>Admin Pannel</router-link><img src='../assets/profile-vector.png'></li>
              </ul>
              <ul>
                 <li><router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showMyProfile'>My profile</router-link> <img src='../assets/profile-vector.png'></li>
                 <li><router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showMyTeams'>My team</router-link> <img src='../assets/profile-vector.png'></li>
                 <li><router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showWidthdraw'>Widthdraw</router-link> <img src='../assets/profile-vector.png'></li>
                 <li><router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showWidthdraw'>Deposit</router-link> <img src='../assets/profile-vector.png'></li>
                 <li><router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showPremium'>Premium</router-link> <img src='../assets/profile-vector.png'></li>
                 <li><router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showStatistics'>Statistics</router-link> <img src='../assets/profile-vector.png'></li>
              </ul>
              <ul>
                 <li><router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showSupport'>Support</router-link> <img src='../assets/profile-vector.png'></li>
                 <li><router-link :to="{name:'Profile',params:{userNickn:this.$store.getters.LOGIN.userNickn}}" 
                   @click='showSettings'>Settings</router-link> <img src='../assets/profile-vector.png'></li>
                 <li @click='logOff'><router-link to="/">Log Out</router-link> <img src='../assets/profile-vector.png'></li>
              </ul>
           </div>
           <!-- <button @click='logOff'>Выход</button> -->
        </div>
        <sign-up></sign-up>
    </div>
    
</template>

<script>
import SignUp from './sign-up.vue';

export default {
    data(){
        return{
        }
    },
    components:{
      SignUp
   },
   methods:{
       showProfile(){
           document.getElementById('profile__user-panel').style='display: flex';
           document.getElementById('profile__game-profile').style='display: none';
           document.getElementById('profile__support').style='display: none';
           document.getElementById('profile__deposit').style='display: none';
           
           document.getElementById('profile__settings').style='display: none';
           document.getElementById('profile__acc-details').style='display: none';
           document.getElementById('profile__change-email').style='display: none';
           document.getElementById('profile__change-pass').style='display: none';
           document.getElementById('profile__manage-pref').style='display: none';
           document.getElementById('profile__statistics').style='display: none';
           document.getElementById('profile__tournaments').style='display: none';
           document.getElementById('profile__premium').style='display: none';
           document.getElementById('profile__info').style='display: none';

           document.getElementById('profile__myteam').style='display: none';
           document.getElementById('profile__create-team').style='display: none';
           document.getElementById('profile__edit-team').style='display: none';
           document.getElementById('profile__players-list').style='display: none';
           document.getElementById('profile__add-players').style='display: none';
       },
       showMyProfile(){
           setTimeout(() => {
           document.getElementById('profile__user-panel').style='display: none';
           document.getElementById('profile__game-profile').style='display: none';
           document.getElementById('profile__support').style='display: none';
           document.getElementById('profile__deposit').style='display: none';
           
           document.getElementById('profile__settings').style='display: none';
           document.getElementById('profile__acc-details').style='display: none';
           document.getElementById('profile__change-email').style='display: none';
           document.getElementById('profile__change-pass').style='display: none';
           document.getElementById('profile__manage-pref').style='display: none';
           document.getElementById('profile__statistics').style='display: none';
           document.getElementById('profile__tournaments').style='display: none';
           document.getElementById('profile__premium').style='display: none';
           document.getElementById('profile__info').style='display: flex';

           document.getElementById('profile__myteam').style='display: none';
           document.getElementById('profile__create-team').style='display: none';
           document.getElementById('profile__edit-team').style='display: none';
           document.getElementById('profile__players-list').style='display: none';
           document.getElementById('profile__add-players').style='display: none';
           }, 20);
       },
       showMyTeams(){
           setTimeout(() => {
           document.getElementById('profile__user-panel').style='display: none';
           document.getElementById('profile__game-profile').style='display: none';
           document.getElementById('profile__support').style='display: none';
           document.getElementById('profile__deposit').style='display: none';
           
           document.getElementById('profile__settings').style='display: none';
           document.getElementById('profile__acc-details').style='display: none';
           document.getElementById('profile__change-email').style='display: none';
           document.getElementById('profile__change-pass').style='display: none';
           document.getElementById('profile__manage-pref').style='display: none';
           document.getElementById('profile__statistics').style='display: none';
           document.getElementById('profile__tournaments').style='display: none';
           document.getElementById('profile__premium').style='display: none';
           document.getElementById('profile__info').style='display: none';

           document.getElementById('profile__myteam').style='display: flex';
           document.getElementById('profile__create-team').style='display: none';
           document.getElementById('profile__edit-team').style='display: none';
           document.getElementById('profile__players-list').style='display: none';
           document.getElementById('profile__add-players').style='display: none';
           }, 20);
       },
       showWidthdraw(){
           setTimeout(() => {
           document.getElementById('profile__user-panel').style='display: none';
           document.getElementById('profile__game-profile').style='display: none';
           document.getElementById('profile__support').style='display: none';
           document.getElementById('profile__deposit').style='display: flex';
           
           document.getElementById('profile__settings').style='display: none';
           document.getElementById('profile__acc-details').style='display: none';
           document.getElementById('profile__change-email').style='display: none';
           document.getElementById('profile__change-pass').style='display: none';
           document.getElementById('profile__manage-pref').style='display: none';
           document.getElementById('profile__statistics').style='display: none';
           document.getElementById('profile__tournaments').style='display: none';
           document.getElementById('profile__premium').style='display: none';
           document.getElementById('profile__info').style='display: none';

           document.getElementById('profile__myteam').style='display: none';
           document.getElementById('profile__create-team').style='display: none';
           document.getElementById('profile__edit-team').style='display: none';
           document.getElementById('profile__players-list').style='display: none';
           document.getElementById('profile__add-players').style='display: none';
           }, 20);
       },
       showPremium(){
           setTimeout(() => {
           document.getElementById('profile__user-panel').style='display: none';
           document.getElementById('profile__game-profile').style='display: none';
           document.getElementById('profile__support').style='display: none';
           document.getElementById('profile__deposit').style='display: none';
           
           document.getElementById('profile__settings').style='display: none';
           document.getElementById('profile__acc-details').style='display: none';
           document.getElementById('profile__change-email').style='display: none';
           document.getElementById('profile__change-pass').style='display: none';
           document.getElementById('profile__manage-pref').style='display: none';
           document.getElementById('profile__statistics').style='display: none';
           document.getElementById('profile__tournaments').style='display: none';
           document.getElementById('profile__premium').style='display: flex';
           document.getElementById('profile__info').style='display: none';

           document.getElementById('profile__myteam').style='display: none';
           document.getElementById('profile__create-team').style='display: none';
           document.getElementById('profile__edit-team').style='display: none';
           document.getElementById('profile__players-list').style='display: none';
           document.getElementById('profile__add-players').style='display: none';
           }, 20);
       },
       showStatistics(){
           setTimeout(() => {
           document.getElementById('profile__user-panel').style='display: none';
           document.getElementById('profile__game-profile').style='display: none';
           document.getElementById('profile__support').style='display: none';
           document.getElementById('profile__deposit').style='display: none';
           
           document.getElementById('profile__settings').style='display: none';
           document.getElementById('profile__acc-details').style='display: none';
           document.getElementById('profile__change-email').style='display: none';
           document.getElementById('profile__change-pass').style='display: none';
           document.getElementById('profile__manage-pref').style='display: none';
           document.getElementById('profile__statistics').style='display: flex';
           document.getElementById('profile__tournaments').style='display: none';
           document.getElementById('profile__premium').style='display: none';
           document.getElementById('profile__info').style='display: none';

           document.getElementById('profile__myteam').style='display: none';
           document.getElementById('profile__create-team').style='display: none';
           document.getElementById('profile__edit-team').style='display: none';
           document.getElementById('profile__players-list').style='display: none';
           document.getElementById('profile__add-players').style='display: none';
           }, 20);
       },
       showSettings(){
           setTimeout(() => {
           document.getElementById('profile__user-panel').style='display: none';
           document.getElementById('profile__game-profile').style='display: none';
           document.getElementById('profile__support').style='display: none';
           document.getElementById('profile__deposit').style='display: none';
           
           document.getElementById('profile__settings').style='display: flex';
           document.getElementById('profile__acc-details').style='display: none';
           document.getElementById('profile__change-email').style='display: none';
           document.getElementById('profile__change-pass').style='display: none';
           document.getElementById('profile__manage-pref').style='display: none';
           document.getElementById('profile__statistics').style='display: none';
           document.getElementById('profile__tournaments').style='display: none';
           document.getElementById('profile__premium').style='display: none';
           document.getElementById('profile__info').style='display: none';

           document.getElementById('profile__myteam').style='display: none';
           document.getElementById('profile__create-team').style='display: none';
           document.getElementById('profile__edit-team').style='display: none';
           document.getElementById('profile__players-list').style='display: none';
           document.getElementById('profile__add-players').style='display: none';
           }, 20);
       },
       showSupport(){
           setTimeout(() => {
           document.getElementById('profile__user-panel').style='display: none';
           document.getElementById('profile__game-profile').style='display: none';
           document.getElementById('profile__support').style='display: flex';
           document.getElementById('profile__deposit').style='display: none';
           
           document.getElementById('profile__settings').style='display: none';
           document.getElementById('profile__acc-details').style='display: none';
           document.getElementById('profile__change-email').style='display: none';
           document.getElementById('profile__change-pass').style='display: none';
           document.getElementById('profile__manage-pref').style='display: none';
           document.getElementById('profile__statistics').style='display: none';
           document.getElementById('profile__tournaments').style='display: none';
           document.getElementById('profile__premium').style='display: none';
           document.getElementById('profile__info').style='display: none';

           document.getElementById('profile__myteam').style='display: none';
           document.getElementById('profile__create-team').style='display: none';
           document.getElementById('profile__edit-team').style='display: none';
           document.getElementById('profile__players-list').style='display: none';
           document.getElementById('profile__add-players').style='display: none';
           }, 20);
       },


       logOff(){
           window.location.href = '/';
           localStorage.signIn = JSON.stringify({ userNickn: '000' });
           document.getElementById('header__login').style='display: block;'
           document.getElementById('header__loginIn').style='display: none;'
       },
       signUp(){
           document.getElementById('signup').style='display: block';
           document.getElementById('signup__form').style='display: block';
           document.getElementById('body').style='overflow: hidden';
       },
       login(){
           document.getElementById('signup').style='display: block';
           document.getElementById('signup__login').style='display: block';
           document.getElementById('body').style='overflow: hidden';
       },
       
       loginVer(){         
           if(this.$store.getters.LOGIN.userNickn === '000'){
              document.getElementById('header__login').style='display: block;'
              document.getElementById('header__loginIn').style='display: none;'
           } else {
              document.getElementById('header__login').style='display: none;'
              document.getElementById('header__loginIn').style='display: block;'
           }
       },

       menuShow(){
           document.getElementById('imge1').style='display: none';
           document.getElementById('imge2').style='display: block';

           document.getElementById('header__nav').style='display: block';
       },
       menuHide(){
           document.getElementById('imge1').style='display: block';
           document.getElementById('imge2').style='display: none';
           
           document.getElementById('header__nav').style='display: none';
       }
   },
   mounted(){
       this.loginVer()
   }
}
</script>

<style>

/* media */

  

/* *** */

#nav__home{
    display: none;
}

#imge1{
    display: none;
}

#imge2{
    width: 32px;
    height: 32px;
}

.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1216px;
    padding-left: 112px;
    margin: 0 auto;
    margin-top: 32px;
}

.header__nav>ul>li{
    list-style-type: none;
    display: inline;
    margin-left: 28px;
    margin-right: 28px;
}

.header__nav>ul>li:last-child{
    margin-right: 210px;
}

.header__nav>ul>li>a{
    text-decoration: none;
    color: white;
}

.header__login{
    display: flex;
    align-items: center;
}

.header__loginIn{
    display: flex;
    align-items: center;
    background: #161A1F;
}

.header__loginIn>div:last-child{
    position: absolute;
    z-index: 100;

    display: none;
}

.header__loginIn>div:last-child{
    
}

.header__loginIn>div:last-child>ul{
    list-style-type: none;
    padding: 14px 12px;
    background: #161A1F;
    width: 217px;
    margin-top: 1px;
}

.header__loginIn>div:last-child>ul>li{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    text-transform: uppercase;
    color: #F5F5F5;

    margin-bottom: 16px;

    display: flex;
    align-items: center;

    cursor: pointer;
}

.header__loginIn>div:last-child>ul:first-child>li>a{
    color: #55AAFF;
    min-width: 105px;
}

.header__loginIn>div:last-child>ul:first-child>li>img{
    margin-left: 101px;
}

.header__loginIn>div:last-child>ul>li>a{
    width: 100px;
    color: #F5F5F5;
    text-decoration: none;
}

.header__loginIn>div:last-child>ul>li>img{
    transform: rotate(90deg); 
    margin-left: 106px;
}

.header__loginIn>div:last-child>ul:last-child>li{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #969BA3;
}

.header__loginIn>div:last-child>ul:last-child>li>a{
    color: #969BA3;
}

.header__loginIn>div:last-child>ul>li:last-child{
    margin-bottom: 0px;
}

.header__loginIn>div:first-child{
    display: flex;
    align-items: center;
    
    padding: 8px;
    width: 225px;
}

.header__loginIn>div:first-child>div:last-child{
    margin-left: 35px;
    transform: rotate(180deg); 
}

.header__loginIn>div:first-child>div:last-child:hover{
    transform: rotate(360deg); 
}

.header__loginIn>div:nth-child(2){
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 100%;
    margin-left: 8px;
    margin-bottom: 14px;
}

.header__loginIn>div:nth-child(2){
    display: flex;
    align-items: center;
}

.header__loginIn>div:nth-child(2)>div{
    width: 162px;
    height: 2px;
    background: #2B353F;
    border-radius: 2px;
    margin-left: 11px;
}

.header__loginIn>div:nth-child(2)>div>div{
    width: 109px;
    height: 2px;
    background: #F5F5F5;
    border-radius: 2px;
}

.header__loginIn>div:first-child>img{
    width: 50px;
    height: 50px;
}

.header__loginIn>div:first-child>div>a{ 
   font-family: Rubik;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 100%;
   color: #F5F5F5;
   text-decoration: none;
   margin-left: 8px;
}

.header__loginIn>div:first-child>div>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #55AAFF;

    margin-top: 8px;
    margin-left: 8px;
}


.header__loginIn>a{
    color: white;
    text-decoration: none;
}

.header__loginIn>button{
    padding: 12px 30px;
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    border: none;
    border-radius: 2px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #F5F5F5;

    margin-left: 8px;
    cursor: pointer;
}

.header__login>button:first-child{
    padding: 12px 30px;
    background: #1A222D;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #F5F5F5;

    border: none;
    border-radius: 2px;

    cursor: pointer;
    
}

.header__login>button:last-child{
    padding: 12px 30px;
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    border: none;
    border-radius: 2px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #F5F5F5;

    margin-left: 8px;
    cursor: pointer;
}



  @media (max-width: 1367px){
      .header{
          
          margin-left: 125px;
      }

      .header__nav>ul>li:last-child{
         margin-right: 30px;
      }
  }

  @media(max-width: 992px){

      #imge1{
          display: block;
      }

      .header{
          height: 107px;
      }

      .header__nav{
          position: absolute;
          z-index: 4;
          width: 975px;
          justify-content: flex-start;
          background: #0F1215;
          top: 107px;
          left: 0;
          display: none;
      }

      .header__nav>ul>li{
          display: block;
          text-align: center;
          padding-top: 15px;
          padding-bottom: 15px;
      }

      .header__nav>ul>li:last-child{
          margin-bottom: 40px;
      }

      .header__logo>a{
          position: absolute;
          top: 30px;
          left: 46%;
      }

      .header__logo>img{
          position: absolute;
          left: 0;
          margin-top: -37px;
          margin-left: 25px;
      }

      .header__logo>div{
          position: absolute;
          left: 0;
          margin-top: -34px;
          margin-left: 29px;
      }

      .header{
          background: #0F1215;
          width: 107px;
      }

      .header__loginIn{
          position: absolute;
          top: 15px;
          right: 0;
          z-index: 10;
          margin-right: 15px;
      }

      .header__logo{
          background: #0F1215;
      }

      .header__login{
          position: absolute;
          right: 15px;
          top: 47px;
      }
  }

  @media(max-width: 768px){
      .header__nav{
          width: 751px;
      }

      .header__logo>a{
          display: 45%;
      }

      #tournamS>div:nth-child(2){
          transform: scale(0.9); 
      }
  }

  @media(max-width: 576px){

      #nav__home{
          display: block;
      }

      .header__nav{
          width: 576px;
      }

      .header__logo>a{
          display: none;
      }

      #tournamS>div:nth-child(2){
          transform: scale(0.9); 
      }


  }

</style>