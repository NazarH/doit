<template>
    <div class='signup' id='signup'>

       <div class='signup__login' id='signup__login'>
          <div>
             <div style='visibility: hidden;'>
               <img src='../assets/arrow-left.png'>
             </div>
             <div @click='closeForm'>
               <img src='../assets/close.png'>
             </div>
          </div>
          <div>
            <img src='../assets/logo.png'>
          </div>
          <div>
            Login
          </div>
          <div>
               <p>Email</p>
               <input type='text'
                      placeholder='google@gmail.com'
                      v-bind:value='loginEmail'
                      @input='loginEmail = $event.target.value'
                      id = 'emailLogin'
               >
               <div class='invalid' id='invalid5'>
                   invalid type of data
               </div>
          </div>
          <div>
               <p>Password</p>
               <input type='password'
                      placeholder='*******'
                      v-bind:value='loginPass'
                      @input='loginPass = $event.target.value'
                      id = 'passLogin'
               >
               <div class='invalid' id='invalid6'>
                   invalid type of data
               </div>
          </div>
          <button @click='loginIn'>Login</button>
          <div>
             or signup with
          </div>
          <div>
            <div><img src='../assets/signup-face.png'></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
             Forgot password?
          </div>
          <div>
             <p>Don't have an account? <span @click='signUp'>Sign up!</span></p>
          </div>
       </div>

       <div class='signup__form' id='signup__form'>
          <div>
             <div style='visibility: hidden;'>
               <img src='../assets/arrow-left.png'>
             </div>
             <div @click='closeForm'>
               <img src='../assets/close.png'>
             </div>
          </div>
          <div>
            <img src='../assets/logo.png'>
          </div>
          <div>
            Sign up 1/2
          </div>
          <div>
               <p>Email</p>
               <input 
                   type='text'
                   placeholder='google@gmail.com'
                   v-bind:value='userEmail'
                   @input='userEmail = $event.target.value'
                   id='emailF'
               >
               <div class='invalid' id='invalid'>
                   invalid type of data
               </div>
          </div>
          <div>
               <p>Password</p>
               <input type='password'
                      placeholder='🞄🞄🞄🞄🞄🞄🞄🞄'
                      v-bind:value='userPass'
                      @input='userPass = $event.target.value'
                      id='passF'
               >
               <div class='invalid' id='invalid2'>
                   invalid type of data
               </div>
          </div>
          <button @click='form1Valid'>Next step</button>
          <div>
             or signup with
          </div>
          <div>
            <div><img src='../assets/signup-face.png'></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
             Already have an account?
          </div>
       </div>
       <div class='signup__form2' id='signup__form2'>
          <div>
             <div @click='prevForm1'>
               <img src='../assets/arrow-left.png'>
             </div>
             <div @click='closeForm'>
               <img src='../assets/close.png'>
             </div>
          </div>
          <div>
            <img src='../assets/logo.png'>
          </div>
          <div>
            Sign up 2/2
          </div>
          <div>
               <p>Username</p>
               <input type='text'
                      placeholder='BestPlayerInTheWorld'
                      v-bind:value='userNickn'
                      @input='userNickn = $event.target.value'
                      id='usernF'
               >
               <div class='invalid' id='invalid3'>
                   invalid type of data
               </div>
          </div>
          <div>
               <p>Country</p>
               <select class='select-css' id='select-css' v-model='sortType'>
                  <option value='none'>Chose your country</option>
                  <option value='Ukraine'>Ukraine</option>
                  <option value='Poland'>Poland</option>
                  <option value='Germany'>Germany</option>
                  <option value='Great Britain'>Great Britain</option>
                  <option value='USA'>USA</option>
                  <option value='China'>China</option>
               </select>
               <div class='invalid' id='invalid4'>
                   invalid type of data
               </div>
          </div>
          <div>
               <p>Date of birth</p>
               <div>
                 <div>
                 <input type='number' placeholder='dd' v-on:keyup='dayValid' v-bind:value='dayB'
                      @input='dayB = $event.target.value' id='dayF'>
                 </div>
                 <div>
                 <input type='number' placeholder='mm' v-on:keyup='mounthValid' v-bind:value='mounthB'
                      @input='mounthB = $event.target.value' id='mounthF'>
                 </div>
                 <div>
                 <input type='number' placeholder='yyyy' v-on:keyup='yearValid'  v-bind:value='yearB'
                      @input='yearB = $event.target.value' id='yearF'>
                 </div>
               </div>
          </div>
          <div>
             <div class="custom-checkbox" @click='check' id='custom-checkbox'>
                <img src='../assets/check.png' id='imgCheck'>
             </div>
             <div>
               <p>I’m have at least 13 years of age and agree to the <router-link to="/terms-of-servise" class='terms'><span>terms of service</span></router-link></p>
             </div>
          </div>
          <button @click='form2Valid'>Create an account</button>
       </div>
       <div class='signup__form3' id='signup__form3'>
          <div></div>
          <div>
            <img src='../assets/logo.png'>
          </div>
          <div>
            <p>You registered on doit.gg</p>
            <p>to continue verify your email</p>
          </div>
          <button @click='endReg'>Verify email</button>
          <div>
             <p>This is an automated email.</p>
             <p>If you recieved it in error, no action is required</p>
          </div>
       </div>
    </div>
</template>

<script>
import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
    data(){
        return{
            chacked: 0,
            userEmail: '',
            userPass: '',
            userNickn: '',
            sortType: 'none',
            dayB: '',
            mounthB: '',
            yearB: '',
            terms: false,

            loginEmail: '',
            loginPass: '',
            
            users: [],
        }
    },
    methods:{
        form1Valid(){
          let dogCount = 0;
          let validMailCount = 0;
          let validPassCount = 0;
          let charValid = 0;

          if(this.userEmail === ''){
          }else{
            validMailCount++;
          }

          for(let i = 0; i < this.userEmail.length; i++){
            for(let u = 1040; u <= 1103; u++){
              if(this.userEmail[i].charCodeAt() === u){
                break;
              }
              if(u === 1103){
                charValid++;
                validMailCount++;
              }
            }
            if(charValid === 1){
              charValid = 0;
              break;
            }
          }

          for(let i = 0; i <= this.userEmail.length; i++){
            if(this.userEmail[i] === '@'){
              dogCount++;
            } else if(i === this.userEmail.length){
                 if(dogCount === 1){
                   dogCount = 0;
                   validMailCount++;
                   break;
                 } else {
                   dogCount = 0;
                 }  
            }
          }
          
          if(this.userEmail.endsWith('.com') || this.userEmail.endsWith('.ru')){
            validMailCount++;
          } else {
          }


          if(validMailCount === 4){
              validMailCount = 1;
              document.getElementById('invalid').style='display: none';
              document.getElementById("emailF").classList.remove('invalidClass');
              document.getElementById("emailF").classList.add('validClass');
          } else {
              validMailCount = 0;
              document.getElementById('invalid').style='display: block';
              document.getElementById("emailF").classList.remove('validClass');
              document.getElementById("emailF").classList.add('invalidClass');
          }

          //password

          if(this.userPass.length > 8 || this.userPass.length < 8){

          } else {
            validPassCount++;
          }

          if(validPassCount === 1){
              validPassCount = 1;
              document.getElementById('invalid2').style='display: none';
              document.getElementById("passF").classList.remove('invalidClass');
              document.getElementById("passF").classList.add('validClass');
          } else {
              validPassCount = 0;
              document.getElementById('invalid2').style='display: block';
              document.getElementById("passF").classList.remove('validClass');
              document.getElementById("passF").classList.add('invalidClass');
          }

          //valid or not

          if(validPassCount === 1 && validMailCount === 1){
            setTimeout(() => {
            document.getElementById('signup__form').style='display: none';
            document.getElementById('signup__form2').style='display: block';
            }, 1000); 
          } else {

          }
        },
        form2Valid(){
          let userLCount = 0;
          let conutryValidC = 0;
          let birthCalc = 0;
          let termsCalc = 0;
          //nickname

          if(this.userNickn.length > 20 || this.userNickn.length < 5){
          } else {
            userLCount++;
          }

          if(userLCount === 1){
              userLCount = 1;
              document.getElementById('invalid3').style='display: none';
              document.getElementById("usernF").classList.remove('invalidClass');
              document.getElementById("usernF").classList.add('validClass');
          } else {
              userLCount = 0;
              document.getElementById('invalid3').style='display: block';
              document.getElementById("usernF").classList.remove('validClass');
              document.getElementById("usernF").classList.add('invalidClass');
          }

          //country

          if(document.getElementById('select-css').value === 'none'){
          } else {
            conutryValidC++;
          }

          if(conutryValidC === 1){
              conutryValidC = 1;
              document.getElementById('invalid4').style='display: none';
              document.getElementById("select-css").classList.remove('invalidClass');
              document.getElementById("select-css").classList.add('validClass');
          } else {
              conutryValidC = 0;
              document.getElementById('invalid4').style='display: block';
              document.getElementById("select-css").classList.remove('validClass');
              document.getElementById("select-css").classList.add('invalidClass');
          }

          //birth

          if(this.dayB !== ''){
              birthCalc++;
              document.getElementById("dayF").classList.remove('invalidClass');
              document.getElementById("dayF").classList.add('validClass');
          } else {
              document.getElementById("dayF").classList.remove('validClass');
              document.getElementById("dayF").classList.add('invalidClass');
          }

          if(this.mounthB !== ''){
              birthCalc++;
              document.getElementById("mounthF").classList.remove('invalidClass');
              document.getElementById("mounthF").classList.add('validClass');
          } else {
              document.getElementById("mounthF").classList.remove('validClass');
              document.getElementById("mounthF").classList.add('invalidClass');
          }

          if(this.yearB !== ''){
              if(Number(this.yearB) >= 1922 && Number(this.yearB) <= 2008){
                birthCalc++;
                document.getElementById("yearF").classList.remove('invalidClass');
                document.getElementById("yearF").classList.add('validClass');
              } else {
                document.getElementById("yearF").classList.remove('validClass');
                document.getElementById("yearF").classList.add('invalidClass');
              }
          } else {
              document.getElementById("yearF").classList.remove('validClass');
              document.getElementById("yearF").classList.add('invalidClass');
          }

          if(this.terms === true){
              
              document.getElementById("custom-checkbox").style='border-color: #4CB725';
          } else {
              document.getElementById("custom-checkbox").style='border-color: #8E2B2B';
          }

          for(let i = 0; i < this.users.length; i++){
            if(this.users[i].userNickn === this.userNickn){
              userLCount = 0;
              document.getElementById('invalid3').style='display: block';
              document.getElementById("usernF").classList.remove('validClass');
              document.getElementById("usernF").classList.add('invalidClass');
            }
          }

          if(userLCount === 1 && conutryValidC === 1 && birthCalc === 3 && this.terms === true){
            userLCount = 0;
            conutryValidC = 0;
            birthCalc = 0;
            setTimeout(() => {
            this.regSucces();
            }, 1000);
          }

          this.users.push({
            userEmail: this.userEmail,
            userPass: this.userPass,
            userNickn: this.userNickn,
            userBirth: `${this.dayB}.${this.mounthB}.${this.yearB}`,
            userCountry: this.sortType,
            gameProfiles: {
              battleNet: '',
              epicID: '',
              originID: '',
              riotGames: '',
              steamID: '',
              ubisoftID: ''
            },
            deposite: 0,
            points: 0,
            premium: '',
            timeZone: '',
            language: '',
            name: '',
            teamList: [],
            gender: 'Choose',
            history: [],
            mainTeam: 'none',
            userId: Date.now(),
            status: 'user'
          });

         const db = getDatabase();
         set(fireRef(db, `users/`), this.users);

          console.log(this.users);
        },

        dayValid(){
          if(this.mounthB.length === 1){
            this.mounthB = '0' + this.mounthB;
          }

          if(this.dayB.length > 2){
           this.dayB =  this.dayB.substr(0, 2);
          }
          if(Number(this.dayB) > 31){
            this.dayB = '';
          }
        },
        mounthValid(){
          if(this.dayB.length === 1){
            this.dayB = '0' + this.dayB;
          }
          if(this.mounthB.length > 2){
           this.mounthB =  this.mounthB.substr(0, 2);
          }
          if(Number(this.mounthB) > 12){
            this.mounthB = '';
          }
          if((Number(this.mounthB) === 2 || String(this.mounthB) === '02') && Number(this.dayB) > 28){
            this.dayB = '';
          }
          if(Number(this.mounthB) % 2 === 0 && Number(this.dayB) > 30 && this.mounthB !== ''){
            this.dayB = '';
          }
        },
        yearValid(){
          if(this.mounthB.length === 1){
            this.mounthB = '0' + this.mounthB;
          }
          if(this.dayB.length === 1){
            this.dayB = '0' + this.dayB;
          }

          if(this.yearB.length > 4){
           this.yearB =  this.yearB.substr(0, 4);
          }
          if(this.yearB.length === 4 && (Number(this.yearB) < 1922 || Number(this.yearB) > 2022)){
            this.yearB = '';
          }
        },

        
        check(){
            if(this.chacked === 1){
                document.getElementById('imgCheck').style='display: none';
                this.chacked = 0;
                this.terms = false;
            } else if(this.chacked === 0){
                this.terms = true;
                this.chacked = 1;
                document.getElementById('imgCheck').style='display: block';
            }
        },
        endReg(){
            document.getElementById('signup').style='display: none';
            document.getElementById('signup__form').style='display: none';
            document.getElementById('signup__form2').style='display: none';
            document.getElementById('signup__form3').style='display: none';
            document.getElementById('body').style='overflow: auto';
        },
        closeForm(){
            document.getElementById('signup').style='display: none';
            document.getElementById('signup__form').style='display: none';
            document.getElementById('signup__form2').style='display: none';
            document.getElementById('signup__form3').style='display: none';

            document.getElementById('body').style='overflow: auto';
        },
        nextForm1(){
            document.getElementById('signup__form').style='display: none';
            document.getElementById('signup__form2').style='display: block';
        },
        prevForm1(){
            document.getElementById('signup__form').style='display: block';
            document.getElementById('signup__form2').style='display: none';
        },
        regSucces(){
            document.getElementById('signup__form').style='display: none';
            document.getElementById('signup__form2').style='display: none';
            document.getElementById('signup__form3').style='display: block';
        },

        loginIn(){
            for(let i = 0; i < this.users.length; i++){
              if(this.users[i].userEmail === this.loginEmail){
                  document.getElementById('invalid5').style='display: none';
                  document.getElementById("emailLogin").classList.remove('invalidClass');
                  document.getElementById("emailLogin").classList.add('validClass');
                if(this.users[i].userPass === this.loginPass){
                  document.getElementById('invalid6').style='display: none';
                  document.getElementById("passLogin").classList.remove('invalidClass');
                  document.getElementById("passLogin").classList.add('validClass');

                  localStorage.setItem('signIn', JSON.stringify(this.users[i]));
                  this.$store.commit('SET_LOGIN',  JSON.parse(localStorage.signIn));                  

                  setTimeout(() => {
                  document.getElementById('header__login').style='display: none;'
                  document.getElementById('header__loginIn').style='display: block;'
                  document.getElementById('signup').style='display: none';
                  document.getElementById('signup__login').style='display: none';
                  document.getElementById('body').style='overflow: auto';
                  }, 1000);


                }else{
                  document.getElementById('invalid6').style='display: block';
                  document.getElementById("passLogin").classList.remove('validClass');
                  document.getElementById("passLogin").classList.add('invalidClass');
                }
              } else {
                  document.getElementById('invalid5').style='display: block';
                  document.getElementById('invalid6').style='display: block';
                  document.getElementById("emailLogin").classList.remove('validClass');
                  document.getElementById("emailLogin").classList.add('invalidClass');
                  document.getElementById("passLogin").classList.remove('validClass');
                  document.getElementById("passLogin").classList.add('invalidClass');
              }
            }
        },

        signUp(){
           document.getElementById('signup__login').style='display: none';
           document.getElementById('signup__form').style='display: block';
        },

        userBaseLoad(){
          const dbRef = fireRef(getDatabase());

          get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users = tempArr;
          });
        }
    },
    mounted(){
      this.userBaseLoad()
    }
}
</script>

<style>
  .signup{
     position: fixed;
     z-index: 10;
     width: 100%;
     height: 100%;
     background-color: rgba(0,0,0,0.8);
     top: 0;
     left: 0;

     display: none;
  }

  .invalid{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 100%;
    color: #B83333;
    text-align: left;

    margin-top: 3px;
    display: none;
  }

  input[type='text']:focus,
  input[type='password']:focus,
  select:focus, input[type='number']:focus,
  textarea:focus{
    outline: 0 !important;
    background-color: #16263D !important;
    border: 1px solid #185EC7 !important;
    box-sizing: border-box !important;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  input[type=number] {
  -moz-appearance: textfield;
  }

  .select-cssoption:focus{
    padding-top: 5px !important;
    padding-bottom: 5px !important;
    border: 1px solid #185EC7 !important;
  }

  .invalidClass{
    background-color: #0B1729 !important;
    border: 1px solid #8E2B2B !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    -ms-appearance: none !important;
    appearance: none !important;
    background: url('../assets/invalid.png') no-repeat !important;
    background-position: 208px !important;
  }

  .validClass{
    background-color: #0B1729 !important;
    border: 1px solid #4CB725 !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    -ms-appearance: none !important;
    appearance: none !important;
    background: url('../assets/valid.png') no-repeat !important;
    background-position: 208px !important;
  }

/* Login */

  .signup__login{
     width: 698px;
     height: 698px;
     background: #0B1729;
     
     position: absolute;
     left: 50%;
     top: 50%;
     transform:translate(-50%, -50%);

     display: none;
  }

  .signup__login>div:first-child{
      display: flex;
      justify-content: space-between;
  }

  .signup__login>div:first-child>div{
      margin: 16px;
      cursor: pointer;
  }

  .signup__login>div:nth-child(2)>img{
      display: block;
      margin: 0 auto;

      width: 88px;
      height: 80px;
  }

  .signup__login>div:nth-child(3){
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 100%;
    text-align: center;
    color: #E6E6E6;
    margin-top: 44px;
    margin-bottom: 30px;
  }

  .signup__login>div:nth-child(4){
      margin: 0 auto;
      text-align: center;
      width: 240px;
      margin-bottom: 22px;
  }

  .signup__login>div:nth-child(5){
      margin: 0 auto;
      text-align: center;
      width: 240px;
  }

  .signup__login>div:nth-child(4)>p{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      color: #FFFFFF;
      text-align: left;
  }

  .signup__login>div:nth-child(5)>p{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      color: #FFFFFF;
      text-align: left;
  }

  .signup__login>div:nth-child(4)>input{
      padding: 12px 16px;
      width: 240px;
      height: 40px;
      background: #0B1729;
      border: 1px solid #101E33;
      box-sizing: border-box;
      border-radius: 2px;
      color: white;
      margin-top: 6px;
  }

  .signup__login>div:nth-child(4)>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
  }

  .signup__login>div:nth-child(5)>input{
      padding: 12px 16px;
      width: 240px;
      height: 40px;
      background: #0B1729;
      border: 1px solid #101E33;
      box-sizing: border-box;
      border-radius: 2px;
      color: white;
      margin-top: 6px;
  }

  .signup__login>div:nth-child(5)>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
  }

  .signup__login>button{
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      border-radius: 2px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;

      display: block;
      margin: 0 auto;

      width: 241px;
      height: 44px;

      margin-top: 22px;
      margin-bottom: 30px;

      cursor: pointer;
  }

  .signup__login>div:nth-child(7){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
      text-align: center;
      margin-bottom: 16px;
  }

  .signup__login>div:nth-child(8){
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
  }

  .signup__login>div:nth-child(8)>div{
    width: 48px;
    height: 48px;
    border: 1px solid #16263D;
    box-sizing: border-box;
    border-radius: 2px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .signup__login>div:nth-child(8)>div:last-child{
    margin-right: 0px;
  }

  .signup__login>div:nth-child(9){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #0A68F5;
  }

  .signup__login>div:nth-child(10){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      color: #627CA3;
      margin-top: 12px;
  }

/* Form 1 */

  .signup__form{
     width: 698px;
     height: 698px;
     background: #0B1729;
     
     position: absolute;
     left: 50%;
     top: 50%;
     transform:translate(-50%, -50%);

     display: none;
  }

  .signup__form>div:first-child{
      display: flex;
      justify-content: space-between;
  }

  .signup__form>div:first-child>div{
      margin: 16px;
      cursor: pointer;
  }

  .signup__form>div:nth-child(2)>img{
      display: block;
      margin: 0 auto;

      width: 88px;
      height: 80px;
  }

  .signup__form>div:nth-child(3){
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 100%;
    text-align: center;
    color: #E6E6E6;
    margin-top: 44px;
    margin-bottom: 30px;
  }

  .signup__form>div:nth-child(4){
      margin: 0 auto;
      text-align: center;
      width: 240px;
  }

  .signup__form>div:nth-child(5){
      margin: 0 auto;
      text-align: center;
      width: 240px;
  }

  .signup__form>div:nth-child(4)>p{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      color: #FFFFFF;
      text-align: left;
  }

  .signup__form>div:nth-child(5)>p{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      color: #FFFFFF;
      text-align: left;
  }

  .signup__form>div:nth-child(4)>input{
      padding: 12px 16px;
      width: 240px;
      height: 40px;
      background: #0B1729;
      border: 1px solid #101E33;
      box-sizing: border-box;
      border-radius: 2px;
      color: white;
      margin-top: 6px;
  }

  .signup__form>div:nth-child(4){
     margin-bottom: 22px;
  }

  .signup__form>div:nth-child(4)>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
  }

  .signup__form>div:nth-child(5)>input{
      padding: 12px 16px;
      width: 240px;
      height: 40px;
      background: #0B1729;
      border: 1px solid #101E33;
      box-sizing: border-box;
      border-radius: 2px;
      color: white;
      margin-top: 6px;
  }

  .signup__form>div:nth-child(5)>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
  }

  .signup__form>button{
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      border-radius: 2px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;

      display: block;
      margin: 0 auto;

      width: 241px;
      height: 44px;

      margin-top: 22px;
      margin-bottom: 30px;

      cursor: pointer;
  }

  .signup__form>div:nth-child(7){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
      text-align: center;
      margin-bottom: 16px;
  }

  .signup__form>div:nth-child(8){
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
  }

  .signup__form>div:nth-child(8)>div{
    width: 48px;
    height: 48px;
    border: 1px solid #16263D;
    box-sizing: border-box;
    border-radius: 2px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .signup__form>div:nth-child(8)>div:last-child{
    margin-right: 0px;
  }

  .signup__form>div:nth-child(9){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #0A68F5;
  }

/* Form 2 */

   .signup__form2{
     width: 698px;
     height: 698px;
     background: #0B1729;
     
     position: absolute;
     left: 50%;
     top: 50%;
     transform:translate(-50%, -50%);

     display: none;
  }

    .signup__form2>div:first-child{
      display: flex;
      justify-content: space-between;
  }
  .signup__form2>div:first-child>div{
      margin: 16px;
  }

  .signup__form2>div:nth-child(2)>img{
      display: block;
      margin: 0 auto;

      width: 88px;
      height: 80px;
  }

  .signup__form2>div:nth-child(3){
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 100%;
    text-align: center;
    color: #E6E6E6;
    margin-top: 44px;
    margin-bottom: 30px;
  }

  .signup__form2>div:nth-child(4){
      margin: 0 auto;
      text-align: center;
      width: 240px;
      margin-bottom: 22px;
  }

    .signup__form2>div:nth-child(4)>input{
      padding: 12px 16px;
      width: 240px;
      height: 40px;
      background: #0B1729;
      border: 1px solid #101E33;
      box-sizing: border-box;
      border-radius: 2px;
      color: white;
      margin-top: 6px;
  }

  .signup__form2>div:nth-child(4)>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
  }

    .signup__form2>div:nth-child(4)>p{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      color: #FFFFFF;
      text-align: left;
  }

  .signup__form2>button{
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      border-radius: 2px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;

      display: block;
      margin: 0 auto;

      width: 241px;
      height: 44px;

      margin-top: 22px;
      margin-bottom: 30px;
      cursor: pointer;
  }

  .signup__form2>div:nth-child(5){
      margin: 0 auto;
      text-align: center;
      width: 240px;
      margin-bottom: 22px;
  }

    .signup__form2>div:nth-child(5)>input{
      padding: 12px 16px;
      width: 240px;
      height: 40px;
      background: #0B1729;
      border: 1px solid #101E33;
      box-sizing: border-box;
      border-radius: 2px;
      color: white;
      margin-top: 6px;
  }

    .signup__form2>div:nth-child(5)>p{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      color: #FFFFFF;
      text-align: left;
  }

  .select-css{
      border: 1px solid #16263D;
      box-sizing: border-box;
      border-radius: 2px;
      width: 240px;
      height: 40px;
      background: none;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #627CA3;
      padding: 0px 16px;
      margin-top: 6px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown.png') no-repeat;
      background-position: 208px;
  }

  .select-css>option{
    background: #0F1215;
  }

  .signup__form2>div:nth-child(6){
      margin: 0 auto;
      text-align: center;
      width: 240px;
      color: white;
      margin-bottom: 16px;
  }

  .signup__form2>div:nth-child(6)>p{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      color: #FFFFFF;
      text-align: left;
  }

  .signup__form2>div:nth-child(6)>div{
      display: flex;
  }

  .signup__form2>div:nth-child(6)>div>div{
      margin-right: 12px;
      margin-top: 6px;
  }

  .signup__form2>div:nth-child(6)>div>div>input{
      min-width: 72px;
      max-width: 72px;
      height: 40px;
      border: 1px solid #16263D;
      border-radius: 2px;
      background: none;
      color: white;
      text-align: center;
  }

  .signup__form2>div:nth-child(6)>div>div>input::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #627CA3;
  }

  .signup__form2>div:nth-child(7){
      display: flex;
      width: 227px;
      align-items: center;
      margin: 0 auto;
  }

  .signup__form2>div:nth-child(7)>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      color: #627CA3;
  }

  .signup__form2>div:nth-child(7)>input{
      border: 1px solid #1655B3;
      background: none;
  }

  .terms{
    text-decoration: none;
  }

  span{
      color: #0A68F5;
      cursor: pointer;
  }

  .custom-checkbox{
      min-width: 18px;
      min-height: 18px;
      max-width: 18px;
      max-height: 18px;
      border-radius: 2px;
      border: 1px solid #185EC7;
      margin-right: 11px;
      cursor: pointer;

      position: relative;
      z-index: 0;
  }

  .custom-checkbox>img{
      position: absolute;
      z-index: 1;
      left: 5px;
      top: -3px;
      background: #0B1729;
      width: 17px;
      height: 14px;
      display: none;
  }

/* form 3 */

  .signup__form3{
     width: 448px;
     height: 395px;
     background: #0B1729;
     
     position: absolute;
     left: 50%;
     top: 50%;
     transform:translate(-50%, -50%);

     display: none;
  }

  .signup__form3>div:nth-child(2)>img{
      display: block;
      margin: 0 auto;

      width: 88px;
      height: 80px;
      margin-top: 40px;
      margin-bottom: 40px;
  }

    .signup__form3>button{
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      border-radius: 2px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;

      display: block;
      margin: 0 auto;

      width: 241px;
      height: 44px;

      margin-top: 22px;
      margin-bottom: 70px;
      cursor: pointer;
  }

  .signup__form3>div:nth-child(3){
      font-family: Rubik;
      font-style: normal;
      font-size: 22px;
      line-height: 100%;
      text-align: center;
      color: #E6E6E6;
      width: 348px;
      margin: 0 auto;
  }

  .signup__form3>div:nth-child(5){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      text-align: center;
      color: #2B405E;
  }
  




</style>