<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
            <div class='profile__acc-details' id='profile__acc-details'>
                   <div>
                       Edit account details
                   </div>
                   <div>
                      <div>
                        Username
                      </div>
                      <input type='text' :value='userInfo.userNickn' disabled>
                   </div>
                   <div>
                      <div>
                        Name
                      </div>
                      <input type='text' placeholder='First name & last name' :value='userInfo.name' 
                      @input='userInfo.name = $event.target.value'>
                   </div>
                   <div>
                      <div>
                        Country
                      </div>
                      <select class='select-css' id='select-css' v-model='userInfo.userCountry'>
                          <option value='none'>Chose your country</option>
                          <option value='Urkaine'>Ukraine</option>
                          <option value='Poland'>Poland</option>
                          <option value='Germany'>Germany</option>
                          <option value='Great Britain'>Great Britain</option>
                          <option value='USA'>USA</option>
                          <option value='China'>China</option>
                      </select>
                   </div>
                   <div>
                      <div>
                        Main team
                      </div>
                      <select class='select-css' id='select-css'>
                        <option :value='yourTeam'>none</option>
                      </select>
                   </div>
                   <div>
                      <div>
                        Gender
                      </div>
                      <select class='select-css' id='select-css' v-model='userInfo.gender'>
                         <option value='Choose'>Choose your gender</option>
                         <option value='Male'>Male</option>
                         <option value='Female'>Female</option>
                         <option value='Other'>Other/I don't want to talk</option>
                      </select>
                   </div>
                   <div>
                     <div>Date of birth</div>
                     <div>
                       <div>
                         <input type='number' v-on:keyup='dayValid' v-bind:value='dayA'
                         @input='dayA = $event.target.value' :placeholder='userInfo.userBirth.substring(0, 2)' id='dayF'>
                       </div>
                       <div>
                         <input type='number' v-on:keyup='mounthValid' v-bind:value='mounthA'
                         @input='mounthA = $event.target.value' :placeholder='userInfo.userBirth.substring(3, 5)' id='mounthF'>
                       </div>
                       <div>
                         <input type='number' v-on:keyup='yearValid'  v-bind:value='yearA'
                         @input='yearA = $event.target.value' :placeholder='userInfo.userBirth.substring(6, 10)' id='yearF'>
                       </div>
                    </div>
                   </div>
                   <div>
                      <div>
                        User ID
                      </div>
                      <input type='text' :value='userInfo.userId' disabled>
                   </div>
                   <button @click='saveUserChanges'>Change details</button>
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
    components:{
      TopPannel,
      LeftPannel
   },
   data(){
       return{
          teams: [],
          userInfo: JSON.parse(localStorage.getItem("user-edit")),
          deposite: 0, 

          tempUsers: [],
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
             img: ''
          },
          imgData: null,
          tempSrc: '',
          storage: null,
          mainGame: '',

          tempTeam: {},
          tempIndex: 0,
          back: '<<'
       }
   },
   methods:{
      saveUserChanges(){
         const dbRef = fireRef(getDatabase());
         get(child(dbRef, `users/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.tempUsers = tempArr;

                for(let i = 0; i < this.tempUsers.length; i++){
                   if(this.tempUsers[i].userId === this.userInfo.userId){
                      this.tempUsers[i] = this.userInfo;
                      break;
                   }
                }

                const db = getDatabase();
                set(fireRef(db, `users/`), this.tempUsers); 
                window.location.href = '/admin-pannel';  
         });
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

  .profile__acc-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
 }

 .profile__acc-details>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;

    margin-bottom: 73px;
 }

 .profile__acc-details>div:nth-child(2)>div,
 .profile__acc-details>div:nth-child(3)>div,
 .profile__acc-details>div:nth-child(4)>div,
 .profile__acc-details>div:nth-child(5)>div,
 .profile__acc-details>div:nth-child(6)>div,
 .profile__acc-details>div:nth-child(7)>div:first-child,
 .profile__acc-details>div:nth-child(8)>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 6px;
 }

 .profile__acc-details>div:nth-child(8)>div{
    margin-top: 16px;
 }

 .profile__acc-details>div:nth-child(4)>select,
 .profile__acc-details>div:nth-child(5)>select,
 .profile__acc-details>div:nth-child(6)>select{
    margin-bottom: 16px;
 }


 .profile__acc-details>div:nth-child(2)>input,
 .profile__acc-details>div:nth-child(3)>input,
 .profile__acc-details>div:nth-child(8)>input
 {
      padding: 12px 16px;
      width: 240px;
      height: 40px;
      background: #0F1215;
      border: 1px solid #101E33;
      box-sizing: border-box;
      border-radius: 2px;
 
      margin-top: 6px;
      margin-bottom: 16px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
 }

 .profile__acc-details>div:nth-child(2)>input::placeholder,
 .profile__acc-details>div:nth-child(3)>input::placeholder,
 .profile__acc-details>div:nth-child(8)>input::placeholder
 {
   font-family: Rubik;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 100%;
 }
 .profile__acc-details>div:nth-child(7)>div:nth-child(2){
    display: flex;
 }

 .profile__acc-details>div:nth-child(7)>div:nth-child(2)>div>input{
      min-width: 72px;
      max-width: 72px;
      height: 40px;
      border: 1px solid #16263D;
      border-radius: 2px;
      background: none;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #627CA3;
 }

 .profile__acc-details>div:nth-child(7)>div:nth-child(2)>div{
    margin-right: 9px;
 }

 .profile__acc-details>div:nth-child(7)>div:nth-child(2)>div:last-child{
    margin-right: 0px;
 }

 .profile__acc-details>div:nth-child(7)>div:nth-child(2)>div>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #627CA3;
 }

 .profile__acc-details>button{
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    border-radius: 2px;
    width: 240px;
    height: 44px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #E6E6E6;
    margin-top: 22px;
    margin-bottom: 137px;

    cursor: pointer;
 }
   
</style>
