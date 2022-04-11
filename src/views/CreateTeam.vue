<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
            <div class='profile__create-team' id='profile__create-team'>
                   <div>Create Team</div>
                   <div>
                      <div class='basic'>Basic info</div>
                      <div>
                         <div>Team name</div>
                         <input type='text' :value='newTeam.teamName' @input='newTeam.teamName = $event.target.value'>
                      </div>
                      <div>
                         <div>Main Game</div>
                        <select class='select-css' id='select-css' v-model='mainGame'>
                          <option value='Dota II'>Dota II</option>
                          <option value='CS:GO'>CS:GO</option>
                          <option value='VALORANT'>VALORANT</option>
                          <option value='WarCraft III'>WarCraft III</option>
                          <option value='StarCraft II'>StarCraft II</option>
                          <option value='Fifa 2022'>Fifa 2022</option>
                        </select>
                      </div>
                      <div>
                         <div>Team Leader</div>
                         <select class='select-css' id='select-css' v-model='mainPlayer'>
                            <option v-for='player in users' :value='player.userNickn'>{{player.userNickn}}</option>
                         </select>
                      </div>
                      <div>
                         <div>Join password</div>
                         <input type='text' :value='newTeam.joinPass' @input='newTeam.joinPass = $event.target.value'>
                      </div>
                      <div>
                         <div>Country</div>
                         <input type='text' :value='newTeam.teamCountry' @input='newTeam.teamCountry = $event.target.value'>
                      </div>
                      <div>
                         <div>Web-site</div>
                         <input type='text' :value='newTeam.webSite' @input='newTeam.webSite = $event.target.value'>
                      </div>
                      <div>
                         <div>URL</div>
                         <div><div>Doit.gg/team</div><input type='text' :value='newTeam.url' @input='newTeam.url = $event.target.value' disabled></div>
                      </div>
                   </div>
                   <div>
                      <div class='basic'>Advance</div>
                      <div>
                         <div>logo 128 x 128</div>
                         <div>
                           <input type='text' placeholder='Logo URL' id='tempUrl' disabled>
                           <input type='file' accept="image/*" id='i' style='display: none' @change="fileSelect">
                           <button onclick='i.click()'>UPLOAD</button>
                         </div>
                         <img src='' id='img' style='display: none' class='img'>
                      </div>
                   </div>
                   <button @click='svNewTeam'>Save Team</button>
            </div>
      </div>
   </div>
</template>

<script>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

import TopPannel from '../components/top-pannel.vue';
import LeftPannel from '../components/left-pannel.vue'

export default {
    data(){
        return{
          teams: [],
          users: [],
          userInfo: this.$store.getters.LOGIN,
          deposite: 0, 

          users2: [],
          users3: [],
          support: [],

          suppName: '',
          suppTopic: '',
          suppSubj: '',
          suppProb: '',

          widthName: '',
          widthEmail: '',
          widthAmount: '',

          depositName: '',
          depositAmount: '',

          genderType: '',
          yourCountry: '',
          yourTeam: '',

          dayA: '',
          mounthA: '',
          yearA: '',

          currentPass: '',
          newEmail: '',

          newPass: '',

          newTeam: {
             teamName: '',
             mainGame: '',
             teamLeader: '',
             joinPass: '',
             teamCountry: '',
             webSite: '',
             url: Date.now(),
             img: '',
          },
          imgData: null,
          tempSrc: '',
          storage: null,
          mainGame: '',
          mainPlayer: '',

          tempTeam: {},
          tempIndex: 0,
          back: '<<'
       }
    },
    components:{
      TopPannel,
      LeftPannel
   },
   methods:{
      showMyTeams(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__myteam').style='display: flex';
         
      },
      addTeam(){
         document.getElementById('profile__myteam').style='display: none';
         document.getElementById('profile__create-team').style='display: flex';
      },
      fileSelect(event){
          let img = document.getElementById('img');
          this.imgData = event.target.files[0];

          let out = '';
          let aByte;
          let byteStr;
          let reader = new FileReader();
          reader.onload = function(event){
            let result = event.target.result;
            for(let i = 0; i < result.length; ++i){
              aByte = result.charCodeAt(i);
              byteStr = aByte.toString(16);
              out += byteStr = " ";
            }
            img.src = result;
            this.tempSrc = img.src;
            document.getElementById("tempUrl").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData);
          this.storage = getStorage();
          
          document.getElementById('img').style='display: block;'; 
      },
      svNewTeam(){
         const storageRef = ref(this.storage, `teams-image/` + this.newTeam.url);
         uploadBytes(storageRef, this.imgData).then((snapshot) => {
            console.log('Файл завантажено');
         });
         setTimeout(() => {
         getDownloadURL(ref(this.storage, `teams-image/` + this.newTeam.url)).then((url) => {
              this.newTeam.img = url;
              
              console.log(this.newTeam);
              
              const dbRef = fireRef(getDatabase());
              const db = getDatabase();

          get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;

            this.newTeam.mainGame = this.mainGame;
            this.newTeam.teamLeader = this.mainPlayer;

            this.teams.push(this.newTeam);
                   
            const dbRef = fireRef(getDatabase());
            set(fireRef(db, `teams/`), this.teams);

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.newTeam.teamLeader){
                if(this.users2[i].userTeams === undefined){
                   this.users2[i].userTeams = [];
                }
                this.users2[i].userTeams.push(this.newTeam);
             }
            }

            set(fireRef(db, `users/`), this.users2);

            this.newTeam = {
               teamName: '',
               mainGame: '',
               teamLeader: '',
               joinPass: '',
               teamCountry: '',
               webSite: '',
               url: Date.now(),
               img: ''
            };

            this.newTeam.teamLeader = this.userInfo.userNickn;
            this.users2 = [];
            this.mainGame = '';
            this.mainPlayer = '';
            this.tempSrc = '';

            window.location.href = '/admin-pannel';  
            
          });
         });
         }, 1000);
      },
      editTeam(team, index){
         this.tempTeam = team;
         this.tempIndex = index;
         this.mainGame = this.tempTeam.mainGame;

         document.getElementById('profile__myteam').style='display: none';
         document.getElementById('profile__edit-team').style='display: flex';
      },
      fileSelectEdit(event){
          let img = document.getElementById('img2');
          this.imgData = event.target.files[0];

          let out = '';
          let aByte;
          let byteStr;
          let reader = new FileReader();
          reader.onload = function(event){
            let result = event.target.result;
            for(let i = 0; i < result.length; ++i){
              aByte = result.charCodeAt(i);
              byteStr = aByte.toString(16);
              out += byteStr = " ";
            }
            img.src = result;
            this.tempSrc = img.src;
            document.getElementById("tempUrl2").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData);
          this.storage = getStorage();
          
          document.getElementById('img2').style='display: block;'; 
      },
      editTeamInfo(){
       if(this.imgData !== null){
         const storageRef = ref(this.storage, `teams-image/` + this.tempTeam.url);
         uploadBytes(storageRef, this.imgData).then((snapshot) => {
            console.log('Файл завантажено');
         });
         setTimeout(() => {
         getDownloadURL(ref(this.storage, `teams-image/` + this.tempTeam.url)).then((url) => {
              this.tempTeam.img = url;
              
              const dbRef = fireRef(getDatabase());
              const db = getDatabase();

          get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;

            this.tempTeam.mainGame = this.mainGame;

            for(let i = 0; i < this.userInfo.userTeams.length; i++){
               if(this.tempIndex === i){
                  this.userInfo.userTeams[i] = this.tempTeam;
               }
            }

            console.log(this.userInfo);

            localStorage.setItem('signIn', JSON.stringify(this.userInfo));

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.userInfo.userNickn){
                this.users2[i] = {};
                this.users2[i] = this.userInfo;
             }
            }

            set(fireRef(db, `users/`), this.users2);
            
            console.log(this.users2);

            this.newTeam = {
               teamName: '',
               mainGame: '',
               teamLeader: '',
               joinPass: '',
               teamCountry: '',
               webSite: '',
               url: Date.now(),
               img: ''
            };

            this.users2 = [];
            this.mainGame = '';
            this.tempSrc = '';
            this.tempTeam = {};

            document.getElementById('profile__myteam').style='display: flex';
            document.getElementById('profile__edit-team').style='display: none';
            
          });
         });
         }, 1000);
       } else {
          const dbRef = fireRef(getDatabase());
          const db = getDatabase();
          get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;

            this.tempTeam.mainGame = this.mainGame;

            for(let i = 0; i < this.userInfo.userTeams.length; i++){
               if(this.tempIndex === i){
                  this.userInfo.userTeams[i] = this.tempTeam;
               }
            }

            localStorage.setItem('signIn', JSON.stringify(this.userInfo));

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.userInfo.userNickn){
                this.users2[i] = {};
                this.users2[i] = this.userInfo;
             }
            }

            set(fireRef(db, `users/`), this.users2);
            

            this.newTeam = {
               teamName: '',
               mainGame: '',
               teamLeader: '',
               joinPass: '',
               teamCountry: '',
               webSite: '',
               url: Date.now(),
               img: ''
            };

            this.users2 = [];
            this.mainGame = '';
            this.tempSrc = '';
            this.tempTeam = {};

            document.getElementById('profile__myteam').style='display: flex';
            document.getElementById('profile__edit-team').style='display: none';
          });
       }
         
      },
      addPlayers(){
          document.getElementById('profile__edit-team').style='display: none';
          document.getElementById('profile__add-players').style='display: flex';
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;
            for(let i = 0; i < this.users2.length; i++){
               for(let e = 0; e < this.tempTeam.playersList.length; e++){
                  if(this.tempTeam.playersList[e] === this.users2[i].userNickn){
                     this.users2.splice(i, 1);
                  }
               }
            }
            if(this.users2[0].userNickn === this.userInfo.userNickn){
               this.users2 = [];
            }
            console.log(this.users2);
          });
      },
      addPlayer(player, index){
         if(this.tempTeam.playersList === undefined){
            this.tempTeam.playersList = [];
            this.tempTeam.playersList.push(player.userNickn);
            this.users2.splice(index, 1);
         } else {
            this.tempTeam.playersList.push(player.userNickn);
            this.users2.splice(index, 1);
         }
      },
      listPlayers(){
         document.getElementById('profile__edit-team').style='display: none';
         document.getElementById('profile__players-list').style='display: flex';
      },
      editLBack(){
         document.getElementById('profile__edit-team').style='display: flex';
         document.getElementById('profile__players-list').style='display: none';
      },
      editUBlack(){
         document.getElementById('profile__edit-team').style='display: flex';
         document.getElementById('profile__add-players').style='display: none';
      },
      deleteTeam(){
         for(let i = 0; i < this.userInfo.userTeams.length; i++){
            if(this.tempTeam.teamName === this.userInfo.userTeams[i].teamName){
               this.userInfo.userTeams.splice(i, 1);
            }
         }

          const dbRef = fireRef(getDatabase());
              const db = getDatabase();

          get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;

            localStorage.setItem('signIn', JSON.stringify(this.userInfo));

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.userInfo.userNickn){
                this.users2[i] = {};
                this.users2[i] = this.userInfo;
             }
            }

            set(fireRef(db, `users/`), this.users2);

            this.users2 = [];

            document.getElementById('profile__myteam').style='display: flex';
            document.getElementById('profile__edit-team').style='display: none';
          });


      },

      createTeamFirstFunc(){
          const dbRef = fireRef(getDatabase());
          get(child(dbRef, `users/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.users = tempArr;

                console.log(this.users);
         });
         get(child(dbRef, `teams/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.teams = tempArr;
         });
      }
   },
   mounted(){
       this.createTeamFirstFunc()
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

/* create team */

  .profile__create-team{
     display: flex;
     flex-direction: column;
     width: 630px;

     margin: 0 auto;
     margin-top: 78px;
  }

  .basic{
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #CCCDCD;

     margin-bottom: 44px;
     margin-left: -25px;
  }

  .profile__create-team>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 40px;
 }

 .profile__create-team>div:nth-child(2){
    border: 1px solid #20252B;
    padding: 44px 58px;
 }

 .profile__create-team>div:nth-child(2)>div>input{
    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;
    border-radius: 4px;
    width: 512px;
    height: 40px;
    padding-left: 16px;
    margin-bottom: 22px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;

 }

  .profile__create-team>div:nth-child(2)>div>select{
    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;
    border-radius: 4px;
    width: 512px;
    height: 40px;
    padding-left: 16px;
    margin-bottom: 22px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown.png') no-repeat;
      background-position: 480px;
  }


 .profile__create-team>div:nth-child(2)>div:last-child>div:last-child{
    display: flex;
    align-items: center;
 }

 .profile__create-team>div:nth-child(2)>div:last-child>div:last-child>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #78828F;

    background: #20252B;
    border: 2px solid #20252B;
    border-radius: 4px 0px 0px 4px;
    text-align: center;
    padding: 10px 10px 10px 16px;
 }

  .profile__create-team>div:nth-child(2)>div:last-child>div>input{
    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;
    border-radius: 0px 4px 4px 0px;
    height: 40px;
    padding-left: 16px;
    margin-bottom: 22px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;


 }

 .profile__create-team>div:nth-child(2)>div:last-child>div>input{
    margin-bottom: 0px;
    width: 375px;
 }

 .profile__create-team>div:nth-child(2)>div>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;
    margin-bottom: 12px;
 }

 .profile__create-team>button{
    display: block;
    width: 159px;
    height: 51px;
    background: #1A222D;
    
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #F5F5F5;

    margin: 0 auto;
    margin-top: 33px;
    margin-bottom: 50px;
 }

 .profile__create-team>div:nth-child(3){
    border: 1px solid #20252B;
    padding: 44px 58px;
    margin-top: 24px;
 }

 .profile__create-team>div:nth-child(3)>div:nth-child(2)>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;
    margin-bottom: 12px;
 }

 .profile__create-team>div:nth-child(3)>div>div{

 }

  .profile__create-team>div:nth-child(3)>div>div>input{
    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;
    border-radius: 4px;
    width: 339px;
    height: 40px;
    padding-left: 16px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;

    margin-right: 16px;
 }

 .profile__create-team>div:nth-child(3)>div>div>button{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    color: #F5F5F5;

    background: #1A222D;
    padding: 13px 44px;

    cursor: pointer;
 }

 .profile__create-team>div:nth-child(3)>div>div{
    display: flex;
    align-items: center;
 }

 .img{
    border: 2px solid #20252B;
    margin-top: 10px;
    width: 128px; 
    height: 128px; 
 }

/* */

  @media(max-width: 576px){
     .profile__create-team>div:nth-child(2){
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -68px;
     }
     .profile__create-team>div:nth-child(3){
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -58px;
     }
     .profile__create-team>button{
        margin: 0;
        margin-bottom: 100px;
        margin-top: 10px;

        margin-left: 200px;
        
     }
     .profile__create-team>div:first-child{
        max-width: 540px;
     }
     .container{
        max-width: 576px;
     }
     .profile__create-team{
        max-width: 576px;
     }
     .profile__create-team{
        margin-top: 0px;
     }

     #body{
        overflow-x: hidden;
     }
  }

   
</style>
