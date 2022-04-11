<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container' id='container__adm'>
          <div class='adm-categorys' id='adm-categorys'>
            <div @click='showTourn' id='admP1' class='activeAdmC'>Tournaments</div>
            <div @click='showTeam' id='admP2'>Teams</div>
            <div @click='showPlayers' id='admP3'>Players</div>
            <div @click='showPayments' id='admP4'>Payments</div>
            <div @click='showGames' id='admP5'>Games</div>
          </div>
          <div class='adm-tournaments' id='adm-tournaments'>
             <div>
                <div>
                    <input type='text' placeholder='Search by name, prize, signed, etc.'>
                </div>
                <div>
                    <button><router-link to='/tournament-register'>Add Tournament</router-link></button>
                </div>
             </div>
             <div>
                <ul>
                   <li>Tournament`s name</li>
                   <li>Entry price</li>
                   <li>Pool price</li>
                   <li>Signed</li>
                   <li>Start in</li>
                </ul>
                <ul>
                  <div>
                     <li v-for='tourn in tournaments' :key='tourn.id'>
                        <div>{{tourn.tournName}}</div>
                        <div>{{tourn.tournRegCost}}$</div>
                        <div>{{tourn.tournPrizePool}}$</div>
                        <div>{{tourn.tournPlayersList.length}} / {{tourn.tournMode === '1 vs 1' ? '2' : tourn.tournMode === '2 vs 2' ? '4' : tourn.tournMode === '5 vs 5' ? '10' : 'none'}}</div>
                        <div>{{tourn.tournStartTime1.slice(-5)}} 
                        <div><router-link :to="{name:'Tournament-edit',params:{tournURL:tourn.tournURL}}" @click='storageProfile2(tourn)'>edit</router-link></div></div>
                     </li>
                  </div>
                </ul>
             </div>
          </div>
          <div class='adm-teams' id='adm-teams'>
                <div>
                   <div>
                       <input type='text' placeholder='Search by name, prize, signed, etc.'>
                   </div>
                   <div>
                       <button><router-link to='/create-team'>Add Team</router-link></button>
                   </div>
                </div>
                <div>
                <ul>
                   <li>Team</li>
                   <li>Leader</li>
                   <li>Main Game</li>
                   <li>Creation Date</li>
                   <li></li>
                   <li></li>
                   
                </ul>
                <ul>
                  <div>
                     <li v-for='team in teams' :key='team.id'>
                        <div>{{team.teamName}}</div>
                        <div>{{team.teamLeader}}</div>
                        <div>{{team.mainGame}}</div>
                        <div>{{takeDate(team)}} 
                        <div><router-link :to="{name:'Edit-team',params:{url:team.url}}" @click='editTeamFunc(team)'>edit</router-link></div></div>
                     </li>
                  </div>
                </ul>
             </div>
          </div>
          <div class='adm-players' id='adm-players'>
                <div>
                   <div>
                       <input type='text' placeholder='Search by name, prize, signed, etc.'>
                   </div>
                   <div>
                       <button style='visibility: hidden;' id='saveSChange' @click='takeSave'>Save Changes</button>
                   </div>
                </div>
                <div>
                <ul>
                   <li>Nickname</li>
                   <li>Password</li>
                   <li>Country</li>
                   <li>Team</li>
                   <li>Name</li>
                   <li>Age</li>
                   <li style='margin-right: 35px;'>Rank</li>
                </ul>
                <ul>
                  <div>
                     <li v-for='user in users' :key='user.id'>
                        <div>{{user.userNickn}}</div>
                        <div>{{userPass(user)}}</div>
                        <div>{{user.userCountry}}</div>
                        <div>{{user.mainTeam}}</div> 
                        <div>{{userName(user)}}</div>
                        <div>{{calcAge(user)}}</div>
                        <div>
                          <select v-model='user.status' @click='showSaveBtn'>
                            <option value='user'>User</option>
                            <option value='admin'>Admin</option>
                            <option value='moderator'>Moderator</option>
                          </select>
                          <div><router-link :to="{name:'Edit-user',params:{userId:user.userId}}" @click='editUserFunc(user)'>edit</router-link></div>
                        </div>
                        <button style='display: none' id='saveBtn' @click='changeStatus(user)'>Save</button>
                     </li>
                  </div>
                </ul>
             </div>
          </div>
          <div class='adm-payments' id='adm-payments'>
                <div>
                   <div>
                       <input type='text' placeholder='Search by name, prize, signed, etc.'>
                   </div>
                   <div>
                       <button style='visibility: hidden;' id='saveSChange' @click='takeSave'>Save Changes</button>
                   </div>
                </div>
                <div>
                <ul>
                   <li>User</li>
                   <li>Balance</li>
                   <li>Payout</li>
                   <li>Deposit</li>
                   <li>system</li>
                   <li>date</li>
                   <li>Approve</li>
                </ul>
                <ul>
                  <div>
                     <li v-for='pay in payments' :key='pay.id'>
                        <div>{{pay.widthUser === undefined ? pay.depositUser : pay.widthUser}}</div>
                        <div>${{pay.widthBalance === undefined ? pay.depositBalance : pay.widthBalance}} | 
                        {{pay.widthDoit === undefined ? pay.depositDoit : pay.widthDoit}} DOIT</div>
                        <div>{{pay.widthAmount === undefined ? pay.depositPay : pay.widthAmount}}</div>
                        <div>{{pay.depositAmount === undefined ? pay.widthDeposite : pay.depositAmount}}</div> 
                        <div>{{pay.widthSystem === undefined ? pay.depositSystem : pay.widthSystem}}</div>
                        <div>{{getPayDaye(pay)}}</div>
                        <div>
                           <div :style='pay.approve === "none" ? "display: block" : "display: none;"'>
                               <button @click='apprYes(pay)'>Yes</button>
                               <button @click='apprNo(pay)'>No</button>
                           </div>
                           <div :style='pay.approve === "sent" ? "display: block" : "display: none;"'>
                               <button>Sent</button>
                           </div>
                           <div :style='pay.approve === "decl" ? "display: block" : "display: none;"'>
                               <button>Declined</button>
                           </div>
                        </div>
                     </li>
                  </div>
                </ul>
             </div>
          </div>
          <div class='adm-games' id='adm-games'>
                <div>
                   <div>
                       <input type='text' placeholder='Search by name, prize, signed, etc.'>
                   </div>
                   <div>
                       <button id='saveSChange'><router-link to='/create-game'>Add Game</router-link></button>
                   </div>
                </div>
                <div>
                <ul>
                   <li>Title</li>
                   <li>Active</li>
                </ul>
                <ul>
                  <div>
                     <li v-for='(game, index) in listGames' :key='game.id'>
                        <div style='width: 235px'>{{game.gameName}}</div>
                        <div style='text-align: center; width: 142px;'>{{game.gameActOrNot}}</div>
                        <div>
                        <router-link :to="{name:'Game-edit',params:{gameURL:game.gameURL}}" @click='editGameFunc(game)'
                        style='margin-left: 690px; color: #CCCDCD; font-size: 12px; text-decoration: none;'>edit</router-link></div>
                     </li>
                  </div>
                </ul>
             </div>
          </div>
      </div>
   </div>
</template>

<script scoped>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

import TopPannel from '../components/top-pannel.vue';
import LeftPannel from '../components/left-pannel.vue'

export default {
    data(){
       return{
          tournaments: [],
          teams: [],
          users: [],
          tempUsers: [],
          payments: [],
          listGames: []
       }
    },
    components:{
      TopPannel,
      LeftPannel
   },
   methods:{
       apprYes(pay){
           pay.approve = 'sent';

           for(let i = 0; i < this.payments.length; i++){
               if(this.payments[i].widthDate !== undefined){
                   if(this.payments[i].widthDate === pay.widthDate){
                       this.payments[i] = pay;
                   }
               } else {
                   if(this.payments[i].depositDate === pay.depositDate){
                       this.payments[i] = pay;
                   }
               }
           }

           const db = getDatabase();
           set(fireRef(db, `payments/`), this.payments);   
       },
       apprNo(pay){
           pay.approve = 'decl';

           for(let i = 0; i < this.payments.length; i++){
               if(this.payments[i].widthDate !== undefined){
                   if(this.payments[i].widthDate === pay.widthDate){
                       this.payments[i] = pay;
                   }
               } else {
                   if(this.payments[i].depositDate === pay.depositDate){
                       this.payments[i] = pay;
                   }
               }
           }

           const db = getDatabase();
           set(fireRef(db, `payments/`), this.payments);  
       },

       getPayDaye(pay){
           let someDate = new Date(pay.widthDate === undefined ? pay.depositDate : pay.widthDate);
           let month = someDate.getMonth();
           let date = someDate.getDate();
           let year = someDate.getFullYear();

           return `${month}/${date}/${year}`;
       },

       showSaveBtn(){
           document.getElementById('saveSChange').style='visibility: visible;';
       },
       takeSave(){
           document.getElementById('saveBtn').click();
       },
       changeStatus(user){
           const dbRef = fireRef(getDatabase());
           get(child(dbRef, `users/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.tempUsers = tempArr;

                for(let i = 0; i < this.tempUsers.length; i++){
                   if(this.tempUsers[i].userId === user.userId){
                      this.tempUsers[i] = user;
                      break;
                   }
                }

                console.log(this.tempUsers);

                const db = getDatabase();
                set(fireRef(db, `users/`), this.tempUsers);   
                document.getElementById('saveSChange').style='visibility: hidden;';
                this.tempUsers = [];
           });
       },

       showTourn(){
           document.getElementById('adm-tournaments').style='display: block;';
           document.getElementById('adm-teams').style='display: none;';
           document.getElementById('adm-players').style='display: none;';
           document.getElementById('adm-payments').style='display: none;';
           document.getElementById('adm-games').style='display: none;';

           document.getElementById("admP1").classList.add('activeAdmC');
           document.getElementById("admP2").classList.remove('activeAdmC');
           document.getElementById("admP3").classList.remove('activeAdmC');
           document.getElementById("admP4").classList.remove('activeAdmC');
           document.getElementById("admP5").classList.remove('activeAdmC');
       },
       showTeam(){
           document.getElementById('adm-tournaments').style='display: none;';
           document.getElementById('adm-teams').style='display: block;';
           document.getElementById('adm-players').style='display: none;';
           document.getElementById('adm-payments').style='display: none;';
           document.getElementById('adm-games').style='display: none;';

           document.getElementById("admP1").classList.remove('activeAdmC');
           document.getElementById("admP2").classList.add('activeAdmC');
           document.getElementById("admP3").classList.remove('activeAdmC');
           document.getElementById("admP4").classList.remove('activeAdmC');
           document.getElementById("admP5").classList.remove('activeAdmC');
       },
       showPlayers(){
           document.getElementById('adm-tournaments').style='display: none;';
           document.getElementById('adm-teams').style='display: none;';
           document.getElementById('adm-players').style='display: block;';
           document.getElementById('adm-payments').style='display: none;';
           document.getElementById('adm-games').style='display: none;';

           document.getElementById("admP1").classList.remove('activeAdmC');
           document.getElementById("admP2").classList.remove('activeAdmC');
           document.getElementById("admP3").classList.add('activeAdmC');
           document.getElementById("admP4").classList.remove('activeAdmC');
           document.getElementById("admP5").classList.remove('activeAdmC');
       },
       showPayments(){
           document.getElementById('adm-tournaments').style='display: none;';
           document.getElementById('adm-teams').style='display: none;';
           document.getElementById('adm-players').style='display: none;';
           document.getElementById('adm-payments').style='display: block;';
           document.getElementById('adm-games').style='display: none;';

           document.getElementById("admP1").classList.remove('activeAdmC');
           document.getElementById("admP2").classList.remove('activeAdmC');
           document.getElementById("admP3").classList.remove('activeAdmC');
           document.getElementById("admP4").classList.add('activeAdmC');
           document.getElementById("admP5").classList.remove('activeAdmC');
       },
       showGames(){
           document.getElementById('adm-tournaments').style='display: none;';
           document.getElementById('adm-teams').style='display: none;';
           document.getElementById('adm-players').style='display: none;';
           document.getElementById('adm-payments').style='display: none;';
           document.getElementById('adm-games').style='display: block;';

           document.getElementById("admP1").classList.remove('activeAdmC');
           document.getElementById("admP2").classList.remove('activeAdmC');
           document.getElementById("admP3").classList.remove('activeAdmC');
           document.getElementById("admP4").classList.remove('activeAdmC');
           document.getElementById("admP5").classList.add('activeAdmC');
       },

       takeDate(team){
           let someDate = new Date(team.url);
           let month = someDate.getMonth();
           let date = someDate.getDate();
           let year = someDate.getFullYear();

           return `${month}/${date}/${year}`;
       },
       editTeamFunc(team){
           localStorage.setItem('team-edit', JSON.stringify(team));
       },
       regDate(user){
           let date = '';
           for(let i = 0; i < user.userBirth.length; i++){
               if(user.userBirth[i] === '.'){
                   date += '/';
                   continue;
               }
               date += user.userBirth[i];
           }
           return date;
       },
       userName(user){
           let name = '';
           for(let i = 0; i < user.name.length; i++){
               if(user.name[i] === ' '){
                   break;
               }
               name += user.name[i];
           }
           return name;
       },
       userPass(user){
           let pass = '';
           for(let i = 0; i < user.userPass.length; i++){
               pass += '*';
           }
           return pass;
       },
       calcAge(user){
           let age = user.userBirth.slice(-4);
           let dateNow = new Date();
           let dateNow2 = new Date(dateNow);
           let year = dateNow2.getFullYear();
           let userAge = year - Number(age);

           return userAge;
       },

       editUserFunc(user){
           localStorage.setItem('user-edit', JSON.stringify(user));
       },
       editGameFunc(game){
           localStorage.setItem('game-edit', JSON.stringify(game));
       },

       firstTournFunc(){
         const dbRef = fireRef(getDatabase());
         get(child(dbRef, `tournaments/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.tournaments = tempArr;
         });

         get(child(dbRef, `users/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.users = tempArr;
         });

         get(child(dbRef, `teams/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.teams = tempArr;
         });

         get(child(dbRef, `payments/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.payments = tempArr;
          });

          get(child(dbRef, `games/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.listGames = tempArr;
          });
       }
   },
   mounted(){
       this.firstTournFunc()
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

/* adm-categorys */

  .adm-categorys{
      display: flex;
      margin-top: 64px;
      margin-left: 15px;
  }

  .adm-categorys>div{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 22px;
     line-height: 100%;
     color: #F5F5F5;
     list-style-type: none;
     padding: 30px 0px;
     border: 2px solid #20252B;
     border-right: none;
     width: 235px;
     text-align: center;
     cursor: pointer;
  }

  .adm-categorys>div:last-child{
    border-right: 2px solid #20252B;
  }

  .activeAdmC{
     background: #D8DFEB;
     color: #0F1215 !important;
  }

/* adm-tournaments */

 /* 1 */

  .adm-tournaments{
      
  }

  .adm-tournaments>div:first-child{
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 15px;
  }

  .adm-tournaments>div:first-child>div:first-child>input{
      width: 244px;
      background: #0F1215;
      border-bottom: 2px solid #20252B;
      height: 25px;
      

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #CCCDCD;
      
      background: url('../assets/adm-vector.png') no-repeat;
      background-position: 222px;
  }

  .adm-tournaments>div:first-child>div:first-child>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #434951;
      opacity: 0.88;
  }

  .adm-tournaments>div:first-child>div:first-child>input:focus{
      background: #0F1215 !important;
      border-bottom: 2px solid #20252B !important;
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      background: url('../assets/adm-vector.png') no-repeat !important;
      background-position: 222px !important;
      height: 27px !important;
  }

  .adm-tournaments>div:first-child>div:last-child>button{
      width: 236px;
      height: 51px;
      background: #1A222D;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      

      margin-right: 16px;

      cursor: pointer;
  }

  .adm-tournaments>div:first-child>div:last-child>button>a{
      text-decoration: none;
      color: #F5F5F5;
  }

  .adm-tournaments>div:first-child>div:last-child>button:last-child{
      margin-right: 0px;
  }
 
 /* 2 */

   .adm-tournaments>div:nth-child(2){
       margin: 0px 15px;
   }

   .adm-tournaments>div:nth-child(2)>ul{
       border: 2px solid #20252B;
       border-bottom: none;
       display: flex;
       justify-content: space-between;
       padding: 22px 44px;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child{
       border-bottom: 2px solid #20252B;
       display: flex;
       flex-direction: column;

       height: 484px;
       margin-bottom: 30px;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li{
       font-family: Rubik;
       font-style: normal;
       font-weight: normal;
       font-size: 17px;
       line-height: 100%;
       color: #67707A;

       display: flex;

       margin-bottom: 29px;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li>div>span{
       color: #67707A !important;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li:last-child{
       margin-bottom: 0px;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li>div:first-child{
       width: 280px;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(2){
       width: 175px;
       text-align: right;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(3){
       width: 232px;
       text-align: right;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(4){
       width: 200px;
       text-align: right;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(5){
       width: 210px;
       display: flex;
       justify-content: flex-end;
       align-items: center;
       position: relative;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(5)>div{
       position: absolute;
       left: 220px;

       font-family: Rubik;
       font-style: normal;
       font-weight: normal;
       font-size: 12px;
       line-height: 100%;
   }

   .adm-tournaments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(5)>div>a{
       color: #CCCDCD;
       cursor: pointer;
       text-decoration: none;
   }

   .adm-tournaments>div:nth-child(2)>ul>li{
       list-style-type: none;
       font-family: Rubik;
       font-style: normal;
       font-weight: 500;
       font-size: 22px;
       line-height: 100%;
       color: #E6E6E6;
   }



/* adm-teams */

 /* 1 */

  .adm-teams{
      display: none;
  }

  .adm-teams>div:first-child{
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 15px;
  }

  .adm-teams>div:first-child>div:first-child>input{
      width: 244px;
      background: #0F1215;
      border-bottom: 2px solid #20252B;
      height: 25px;
      

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #CCCDCD;
      
      background: url('../assets/adm-vector.png') no-repeat;
      background-position: 222px;
  }

  .adm-teams>div:first-child>div:first-child>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #434951;
      opacity: 0.88;
  }

  .adm-teams>div:first-child>div:first-child>input:focus{
      background: #0F1215 !important;
      border-bottom: 2px solid #20252B !important;
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      background: url('../assets/adm-vector.png') no-repeat !important;
      background-position: 222px !important;
      height: 27px !important;
  }

  .adm-teams>div:first-child>div:last-child>button{
      width: 236px;
      height: 51px;
      background: #1A222D;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      

      margin-right: 16px;

      cursor: pointer;
  }

  .adm-teams>div:first-child>div:last-child>button>a{
      text-decoration: none;
      color: #F5F5F5;
  }

  .adm-teams>div:first-child>div:last-child>button:last-child{
      margin-right: 0px;
  }

 /* 2 */
   
   .adm-teams>div:nth-child(2){
       margin: 0px 15px;
   }

   .adm-teams>div:nth-child(2)>ul{
       border: 2px solid #20252B;
       border-bottom: none;
       display: flex;
       justify-content: space-between;
       padding: 22px 44px;
   }

   .adm-teams>div:nth-child(2)>ul:last-child{
       border-bottom: 2px solid #20252B;
       display: flex;
       flex-direction: column;

       height: 484px;
       margin-bottom: 30px;
   }

   .adm-teams>div:nth-child(2)>ul:last-child>div>li{
       font-family: Rubik;
       font-style: normal;
       font-weight: normal;
       font-size: 17px;
       line-height: 100%;
       color: #67707A;

       display: flex;

       margin-bottom: 29px;
   }

   .adm-teams>div:nth-child(2)>ul:last-child>div>li>div>span{
       color: #67707A !important;
   }

   .adm-teams>div:nth-child(2)>ul:last-child>div>li:last-child{
       margin-bottom: 0px;
   }

   .adm-teams>div:nth-child(2)>ul:last-child>div>li>div:first-child{
       width: 200px;
       
   }

   .adm-teams>div:nth-child(2)>ul:last-child>div>li>div:nth-child(2){
       width: 70px;
       text-align: center;
       margin-right: 165px;
   }

   .adm-teams>div:nth-child(2)>ul:last-child>div>li>div:nth-child(3){
       width: 70px;
       text-align: center;
       margin-right: 187px;
   }


   .adm-teams>div:nth-child(2)>ul:last-child>div>li>div:nth-child(4){
       width: 100px;
       display: flex;
       justify-content: center;
       align-items: center;
       position: relative;
   }

   .adm-teams>div:nth-child(2)>ul:last-child>div>li>div:nth-child(4)>div{
       position: absolute;
       left: 400px;

       font-family: Rubik;
       font-style: normal;
       font-weight: normal;
       font-size: 12px;
       line-height: 100%;
   }

   .adm-teams>div:nth-child(2)>ul:last-child>div>li>div:nth-child(4)>div>a{
       color: #CCCDCD;
       cursor: pointer;
       text-decoration: none;
   }

   .adm-teams>div:nth-child(2)>ul>li{
       list-style-type: none;
       font-family: Rubik;
       font-style: normal;
       font-weight: 500;
       font-size: 22px;
       line-height: 100%;
       color: #E6E6E6;
   }


/* adm-players */
   
 /* 1 */

   .adm-players{
      display: none;
   }

  .adm-players>div:first-child{
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 15px;
  }

  .adm-players>div:first-child>div:first-child>input{
      width: 244px;
      background: #0F1215;
      border-bottom: 2px solid #20252B;
      height: 25px;
      

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #CCCDCD;
      
      background: url('../assets/adm-vector.png') no-repeat;
      background-position: 222px;
  }

  .adm-players>div:first-child>div:first-child>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #434951;
      opacity: 0.88;
  }

  .adm-players>div:first-child>div:first-child>input:focus{
      background: #0F1215 !important;
      border-bottom: 2px solid #20252B !important;
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      background: url('../assets/adm-vector.png') no-repeat !important;
      background-position: 222px !important;
      height: 27px !important;
  }

  .adm-players>div:first-child>div:last-child>button{
      width: 236px;
      height: 51px;
      background: #1A222D;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      

      margin-right: 16px;

      cursor: pointer;
  }

  .adm-players>div:first-child>div:last-child>button{
      text-decoration: none;
      color: #F5F5F5;
  }

  .adm-players>div:first-child>div:last-child>button:last-child{
      margin-right: 0px;
  }

 /* 2 */

   .adm-players>div:nth-child(2){
       margin: 0px 15px;
   }

   .adm-players>div:nth-child(2)>ul{
       border: 2px solid #20252B;
       border-bottom: none;
       display: flex;
       justify-content: space-between;
       padding: 22px 44px;
   }

   .adm-players>div:nth-child(2)>ul:last-child{
       border-bottom: 2px solid #20252B;
       display: flex;
       flex-direction: column;

       height: 484px;
       margin-bottom: 30px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li{
       font-family: Rubik;
       font-style: normal;
       font-weight: normal;
       font-size: 17px;
       line-height: 100%;
       color: #67707A;

       display: flex;

       margin-bottom: 29px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div>span{
       color: #67707A !important;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li:last-child{
       margin-bottom: 0px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:first-child{
       width: 195px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(2){
       width: 197px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(3){
       width: 185px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(4){
       width: 151px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(5){
       width: 143px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(6){
       width: 45px;
       text-align: center;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7){
       display: flex;
       justify-content: center;
       align-items: center;
       position: relative;
       margin-left: 76px;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>select{
       border: 1px solid #20252B;
       background: #0F1215;
       font-family: Rubik;
       color: #67707A;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div{
       position: absolute;
       left: 105px;
       font-family: Rubik;
       font-style: normal;
       font-weight: normal;
       font-size: 12px;
       line-height: 100%;
   }

   .adm-players>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div>a{
       color: #CCCDCD;
       cursor: pointer;
       text-decoration: none;
   }



   .adm-players>div:nth-child(2)>ul>li{
       list-style-type: none;
       font-family: Rubik;
       font-style: normal;
       font-weight: 500;
       font-size: 22px;
       line-height: 100%;
       color: #E6E6E6;
   }
    
/* adm-payments */

 /* 1 */

  .adm-payments{
      display: none;
   }

  .adm-payments>div:first-child{
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 15px;
  }

  .adm-payments>div:first-child>div:first-child>input{
      width: 244px;
      background: #0F1215;
      border-bottom: 2px solid #20252B;
      height: 25px;
      

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #CCCDCD;
      
      background: url('../assets/adm-vector.png') no-repeat;
      background-position: 222px;
  }

  .adm-payments>div:first-child>div:first-child>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #434951;
      opacity: 0.88;
  }

  .adm-payments>div:first-child>div:first-child>input:focus{
      background: #0F1215 !important;
      border-bottom: 2px solid #20252B !important;
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      background: url('../assets/adm-vector.png') no-repeat !important;
      background-position: 222px !important;
      height: 27px !important;
  }

  .adm-payments>div:first-child>div:last-child>button{
      width: 236px;
      height: 51px;
      background: #1A222D;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      

      margin-right: 16px;

      cursor: pointer;
  }

  .adm-payments>div:first-child>div:last-child>button{
      text-decoration: none;
      color: #F5F5F5;
  }

  .adm-payments>div:first-child>div:last-child>button:last-child{
      margin-right: 0px;
  }

 /* 2 */ 

   .adm-payments>div:nth-child(2){
       margin: 0px 15px;
   }

   .adm-payments>div:nth-child(2)>ul{
       border: 2px solid #20252B;
       border-bottom: none;
       display: flex;
       justify-content: space-between;
       padding: 22px 44px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child{
       border-bottom: 2px solid #20252B;
       display: flex;
       flex-direction: column;

       height: 484px;
       margin-bottom: 30px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li{
       font-family: Rubik;
       font-style: normal;
       font-weight: normal;
       font-size: 17px;
       line-height: 100%;
       color: #67707A;

       display: flex;

       margin-bottom: 29px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div>span{
       color: #67707A !important;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li:last-child{
       margin-bottom: 0px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:first-child{
       width: 120px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(2){
       width: 223px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(3){
       width: 180px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(4){
       width: 160px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(5){
       width: 140px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(6){
       width: 151px;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7){
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div:first-child{
       display: flex;
       align-items: center;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div:first-child>button{
       width: 50px;
       height: 24px;
       background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
       border-radius: 2px;

       font-family: Rubik;
       font-style: normal;
       font-weight: bold;
       font-size: 16px;
       line-height: 100%;
       text-align: center;
       color: #F5F5F5;

       margin-right: 10px;

       cursor: pointer;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div:nth-child(2)>button{
       background: linear-gradient(180deg, #46F48C 0%, #2B9D37 100%);
       border-radius: 2px;
       width: 110px;

       font-family: Rubik;
       font-style: normal;
       font-weight: bold;
       font-size: 16px;
       line-height: 100%;
       text-align: center;
       color: #F5F5F5;
   }

   .adm-payments>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div:nth-child(3)>button{
       background: #601414;
       border-radius: 2px;
       width: 110px;

       font-family: Rubik;
       font-style: normal;
       font-weight: bold;
       font-size: 16px;
       line-height: 100%;
       text-align: center;
       color: #F5F5F5;
   }

   .adm-payments>div:nth-child(2)>ul>li{
       list-style-type: none;
       font-family: Rubik;
       font-style: normal;
       font-weight: 500;
       font-size: 22px;
       line-height: 100%;
       color: #E6E6E6;
   }

   .adm-payments>div:nth-child(2)>ul>li:last-child{
       margin-right: 23px;
   }

/* adm-games */

 /* 1 */

  .adm-games{
      display: none;
   }

  .adm-games>div:first-child{
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 15px;
  }

  .adm-games>div:first-child>div:first-child>input{
      width: 244px;
      background: #0F1215;
      border-bottom: 2px solid #20252B;
      height: 25px;
      

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #CCCDCD;
      
      background: url('../assets/adm-vector.png') no-repeat;
      background-position: 222px;
  }

  .adm-games>div:first-child>div:first-child>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #434951;
      opacity: 0.88;
  }

  .adm-games>div:first-child>div:first-child>input:focus{
      background: #0F1215 !important;
      border-bottom: 2px solid #20252B !important;
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      background: url('../assets/adm-vector.png') no-repeat !important;
      background-position: 222px !important;
      height: 27px !important;
  }

  .adm-games>div:first-child>div:last-child>button{
      width: 236px;
      height: 51px;
      background: #1A222D;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      

      margin-right: 16px;

      cursor: pointer;
  }

  .adm-games>div:first-child>div:last-child>button{
      text-decoration: none;
      color: #F5F5F5;
  }

  .adm-games>div:first-child>div:last-child>button:last-child{
      margin-right: 0px;
  }

 /* 2 */

    .adm-games>div:first-child>div:last-child>button>a{
        color: #F5F5F5;
        text-decoration: none;
    }

    .adm-games>div:nth-child(2){
       margin: 0px 15px;
   }

   .adm-games>div:nth-child(2)>ul{
       border: 2px solid #20252B;
       border-bottom: none;
       display: flex;
       padding: 22px 44px;
   }

   .adm-games>div:nth-child(2)>ul>li:last-child{
       padding-left: 225px;
   }

   .adm-games>div:nth-child(2)>ul:last-child{
       border-bottom: 2px solid #20252B;
       display: flex;
       flex-direction: column;

       height: 484px;
       margin-bottom: 30px;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li{
       font-family: Rubik;
       font-style: normal;
       font-weight: normal;
       font-size: 17px;
       line-height: 100%;
       color: #67707A;

       display: flex;

       margin-bottom: 29px;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li>div>span{
       color: #67707A !important;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li:last-child{
       margin-bottom: 0px;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li>div:first-child{
       width: 120px;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li>div:nth-child(2){
       width: 223px;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div:first-child{
       display: flex;
       align-items: center;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div:first-child>button{
       width: 50px;
       height: 24px;
       background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
       border-radius: 2px;

       font-family: Rubik;
       font-style: normal;
       font-weight: bold;
       font-size: 16px;
       line-height: 100%;
       text-align: center;
       color: #F5F5F5;

       margin-right: 10px;

       cursor: pointer;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div:nth-child(2)>button{
       background: linear-gradient(180deg, #46F48C 0%, #2B9D37 100%);
       border-radius: 2px;
       width: 110px;

       font-family: Rubik;
       font-style: normal;
       font-weight: bold;
       font-size: 16px;
       line-height: 100%;
       text-align: center;
       color: #F5F5F5;
   }

   .adm-games>div:nth-child(2)>ul:last-child>div>li>div:nth-child(7)>div:nth-child(3)>button{
       background: #601414;
       border-radius: 2px;
       width: 110px;

       font-family: Rubik;
       font-style: normal;
       font-weight: bold;
       font-size: 16px;
       line-height: 100%;
       text-align: center;
       color: #F5F5F5;
   }

   .adm-games>div:nth-child(2)>ul>li{
       list-style-type: none;
       font-family: Rubik;
       font-style: normal;
       font-weight: 500;
       font-size: 22px;
       line-height: 100%;
       color: #E6E6E6;
   }

   .adm-gamess>div:nth-child(2)>ul>li:last-child{
       margin-right: 23px;
   }

/* */

  @media(max-width: 992px){
      #container__adm{
          transform: scale(0.7); 
          margin-left: -100px; 
          margin-top: -160px;
      }
  }

  @media(max-width: 768px){
      #container__adm{
          transform: scale(0.46); 
          margin-left: -330px; 
          margin-top: -250px;
      }

      #body{
          overflow-x: hidden;
      }
  }
 
</style>
