<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
        <div class='popup-temp-player-list' id='popup-temp-player-list'>
            <div>
               <div>
                  <div>
                     Users List
                  </div>
                  <div @click='closeUsersList'>
                     <img src='../assets/close.png'>
                  </div>
               </div>
               <div class='temp-player-list'>
                    <div v-for='(player, index) in tempPlayersList' :key='player.id' @click='addNewPlayer(player, index)'>
                       {{player.userNickn}}
                    </div>
               </div>
            </div>
        </div>
        <div class='popup-player-list' id='popup-player-list'>
            <div>
               <div>
                  <div>
                     Players List
                  </div>
                  <div @click='closePlayersList'>
                     <img src='../assets/close.png'>
                  </div>
               </div>
               <div class='temp-player-list2'>
                    <div v-for='(player, index) in tournament.tournPlayersList' :key='player.id' @click=''>
                       {{player.userNickn}}
                    </div>
               </div>
            </div>
        </div>

        <div class='basic-info' >
            <div class='basic'>Game profile</div>
            <div>
                <div>Host</div>
                <select v-model='tournament.tournHost'>
                   <option v-for='player in playersList' :value='player.userNickn'>{{player.userNickn}}</option>
                </select>
            </div>
            <div>
                <div>Tournament name*</div>
                <input type='text' v-bind:value='tournament.tournName' @input='tournament.tournName = $event.target.value'>
            </div>
            <div>
                <div>URL</div>
                <div><div>Doit.gg/</div><input type='text'
                v-bind:value='tournament.tournURL'
                @input='tournament.tournURL = $event.target.value' disabled></div>
            </div>
            <div>
                <div>Quick Rules</div>
                <textarea placeholder='You can write here somebody about your tournament...'
                v-bind:value='tournament.tournQRules' @input='tournament.tournQRules = $event.target.value'></textarea>
            </div>  
        </div>
        <div class='game-info'>
            <div class='basic'>GAME INFO</div>
            <div>
                <div>Game</div>
                <select v-model='tournament.tournGame'>
                    <option value='Dota 2'>Dota 2</option>
                    <option value='CS:GO'>CS:GO</option>
                    <option value='Valorant'>Valorant</option>
                    <option value='WarCraft 3'>WarCraft 3</option>
                    <option value='StarCraft 2'>StarCraft 2</option>
                    <option value='Fifa 2022'>Fifa 2022</option>
                </select>
            </div>
            <div>
                <div>Type</div>
                <div class="form_radio">
	                <input id="radio-1" type="radio" name="radio" value='Single' v-model='tournament.tournType' > 
	                <label for="radio-1">Single stage tournament</label>
                </div>
                <div class="form_radio">
	                <input id="radio-2" type="radio" name="radio" value='Two stage' v-model='tournament.tournType' >
	                <label for="radio-2">Two stage tournament</label>
                </div>
            </div>
            <div>
                <div>Format*</div>
                <select placeholder='The game or sport being played' v-model='tournament.tournFormat'>
                   <option value='one'>one-stage tournament</option>
                   <option value='multi'>multi-stage tournament</option>
                   <option value='single'>single session tournament</option>
                </select>
            </div>
            <div>
               <div @click='tournCheck1' class='tournCheck'>
                  <img src='../assets/check2.png' id='tournCheck' :style='tournament.tourn3RD === true ? "display: block" : "display: none"'>
               </div> 
               <div>Include a match for 3rd place</div>
            </div>
            <div>
                <div>
                   <div>Mode*</div>
                   <select v-model='tournament.tournMode'>
                       <option value='1 vs 1'>1 vs 1</option>
                       <option value='2 vs 2'>2 vs 2</option>
                       <option calue='5 vs 5'>5 vs 5</option>
                   </select>
                </div>
                <div>
                   <div>Map voting system</div>
                   <select v-model='tournament.tournGame' disabled>
                       <option :value='tournament.tournGame'>{{tournament.tournGame}}</option>
                   </select>
                </div>
            </div>
            <div>
                <div>Main Banner 370x200*</div>
                <div>
                    <input type='text' placeholder='banner url' id='tempUrl1' :value='tournament.tournMainBanner' disabled>
                    <input type='file' accept="image/*" id='g' style='display: none' @change="mainBanner">
                    <button onclick='g.click()'>UPLOAD</button>
                </div>
                <img :src='tournament.tournMainBanner' id='img1' class='img'>
            </div>
            <div>
                <div>Torunamnet background min 2000 x 3000</div>
                <div>
                    <input type='text' placeholder='banner url' id='tempUrl2' disabled :value='tournament.tournBackground'>
                    <input type='file' accept="image/*" id='g2' style='display: none' @change="tournBackground">
                    <button onclick='g2.click()'>UPLOAD</button>
                </div>
                <img :src='tournament.tournBackground' id='img2' class='img'>
            </div>
        </div>
        <div class='registration'>
            <div class='basic'>
                REGISTRATION
                <div>
                    <div @click='tournCheck2' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck2' :style='tournament.tournAppr === true ? "display: block" : "display: none"'>
                    </div> 
                    <div>Don’t Aprove players automaticly</div>
                </div>
            </div>
            <div>
               <div>Registration*</div>
               <div>
                  <div @click='regAct1' id='r1' :class='tournament.tournRegistr === "free" ? "someReg regActive" : "someReg"'>Free</div>
                  <div @click='regAct2' id='r2' :class='tournament.tournRegistr === "paid" ? "someReg regActive" : "someReg"'>Paid</div>
                  <div @click='regAct3' id='r3' :class='tournament.tournRegistr === "premium" ? "someReg regActive" : "someReg"'>PRERMIUM</div>
                  <div @click='regAct4' id='r4' :class='tournament.tournRegistr === "private" ? "someReg regActive" : "someReg"'>PRIVATE</div>
               </div>
            </div>
            <div>
                <div @click='show'>Start time*</div>
                <div>
                   <input type='date' v-model='tournament.tournStartTime1'>
                   <input type='time' v-model='tournament.tournStartTime2'>
                </div>
            </div>
            <div>
                <div>Estimated end*</div>
                <div>
                   <input type='date' v-model='tournament.tournEstimateTime1'>
                   <input type='time' v-model='tournament.tournEstimateTime2'>
                </div>
            </div>
            <div>
                <div @click='tournCheck3' class='tournCheck'>
                    <img src='../assets/check2.png' id='tournCheck3' :style='tournament.tournChekinTime === true ? "display: block" : "display: none"'>
                </div>
               <div>Checkin Time</div>
            </div>
            <div>
               <select v-model='tournament.tournSomeTime'>
                  <option>5 min.</option>
                  <option>10 min.</option>
                  <option>15 min.</option>
                  <option>20 min.</option>
                  <option>25 min.</option>
                  <option>30 min.</option>
                  <option>35 min.</option>
                  <option>40 min.</option>
                  <option>45 min.</option>
                  <option>50 min.</option>
                  <option>55 min.</option>
                  <option>60 min.</option>
               </select>
            </div>
            <div>
               (GMT -05:00) Eastern time — set the time zone from your <span>settings</span>
            </div>
        </div>
        <div class='if-paid'>
            <div class='basic'>If Paid</div>
            <div>
               Register cost <input type='text' v-model='tournament.tournRegCost'>
            </div>
        </div>
        <div class='player-list'>
           <div class='basic'>Player list</div>
           <div>
              <button @click='showPlayersList'>List of players</button>
              <button @click='showUsersList'>Add players</button>
           </div>
           <div>
              <div @click='tournCheck4' class='tournCheck'>
                   <img src='../assets/check2.png' id='tournCheck4' :style='tournament.tournShow === true ? "display: block" : "display: none"'>
              </div> 
              <div>Don’t show tournamnet on website</div>
           </div>
        </div>
        <div class='leagues'>
           <div class='basic'>Leagues</div>
           <div>
              <div>Connect tournament with league</div>
              <button>Choose League</button>
           </div>
           <div>
              <div @click='tournCheck5' class='tournCheck'>
                   <img src='../assets/check2.png' id='tournCheck5' :style='tournament.tournOnlyLeague === true ? "display: block" : "display: none"'>
              </div>  
              <div>Only League System</div>
           </div>
        </div>
        <div class='prize-pool'>
            <div class='basic'>Prize pool</div>
            <div>
               <div>
                  Prize pool: <input type='text' v-model='tournament.tournPrizePool'>
               </div>
               <div>
                  MAX players/teams number: <input type='text' v-model='tournament.tournMaxPlayers'>
               </div>
            </div>
            <div>
              <div @click='tournCheck26' class='tournCheck'>
                <img src='../assets/check2.png' id='tournCheck26' :style='tournament.tourn3rdPlace === true ? "display: block" : "display: none"'>
              </div>  
              <div>3rd place turn on?</div>
            </div>
            <div>
                <div>
                   <div>
                       <div>
                          <div>1st place: </div><input type='text' v-model='tournament.tourn1ST'>
                       </div>
                       <div>
                          <div>2st place:</div><input type='text' v-model='tournament.tourn2ST'>
                       </div>
                       <div>
                          <div>3st place:</div><input type='text' v-model='tournament.tourn3ST'>
                       </div>
                       <div>
                          <div>4st place:</div><input type='text' v-model='tournament.tourn4ST'>
                       </div>
                   </div>
                   <div>
                        <div>Type</div>
                        <div class="form_radio">
	                        <input id="radio-3" type="radio" name="radio1" value='true' v-model='tournament.tournTypeMoney'>
	                        <label for="radio-3">Money</label>
                        </div>
                        <div class="form_radio">
	                        <input id="radio-4" type="radio" name="radio2" value='true' v-model='tournament.tournTypeThing'>
	                        <label for="radio-4">Thing</label>
                        </div>
                        <div class="form_radio">
	                        <input id="radio-5" type="radio" name="radio3" value='true' v-model='tournament.tournTypeMPT'>
	                        <label for="radio-5">Money + Thing</label>
                        </div>
                        <div class="form_radio">
	                        <input id="radio-6" type="radio" name="radio4" value='true' v-model='tournament.tournTypeNothing'>
	                        <label for="radio-6">Nothing</label>
                        </div>
                        <div class="form_radio">
	                        <input id="radio-7" type="radio" name="radio5" value='true' v-model='tournament.tournTypeQualifers'>
	                        <label for="radio-7">Qualifers</label>
                        </div>
                   </div>
                </div>
                <div>
                   <div>
                      <div><div>Ro8</div>  <input type='text' v-model='tournament.tournRO8'></div>
                      <div><div>Ro16</div> <input type='text' v-model='tournament.tournRO16'></div>
                      <div><div>Ro32</div> <input type='text' v-model='tournament.tournRO32'></div>
                      <div><div>Ro64</div> <input type='text' v-model='tournament.tournRO64'></div>
                      <div><div>Ro128</div> <input type='text' v-model='tournament.tournRO128'></div>
                      <div><div>Ro256</div> <input type='text' v-model='tournament.tournRO256'></div>
                      <div><div>Ro512</div> <input type='text' v-model='tournament.tournRO512'></div>
                   </div>
                   <div>
                      <div>Donations</div>
                      <div class="form_radio">
	                        <input id="radio-8" type="radio" name="radio6" value='Active' v-model='tournament.tournDotation'>
	                        <label for="radio-8">Active</label>
                      </div>
                      <div class="form_radio">
	                        <input id="radio-9" type="radio" name="radio6" value='No active' v-model='tournament.tournDotation'>
	                        <label for="radio-9">No Active</label>
                      </div>
                   </div>
                </div>
            </div>
        </div>
        <div class='voting'>
            <div class='basic'>VOTING</div>
            <div>
              <div @click='tournCheck6' class='tournCheck'>
                   <img src='../assets/check2.png' id='tournCheck6' :style='tournament.tournVotingOne === true ? "display: block" : "display: none"'>
              </div>  
              <div>Allow registred users in tournamnet to provide scores for every match</div>
           </div>
           <div>
              <div @click='tournCheck7' class='tournCheck'>
                   <img src='../assets/check2.png' id='tournCheck7' :style='tournament.tournVotingTwo === true ? "display: block" : "display: none"'>
              </div>   
              <div>Allow regsitred users only in their match to provide scores</div>
           </div>
        </div>
        <div class='add-req'>
            <div class='basic'>Additional requairments</div>
            <div>
                <div>
                   <div>
                     <div @click='tournCheck8' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck8' :style='tournament.tournPSN === true ? "display: block" : "display: none"'>
                     </div> 
                     <div>PSN Account</div>
                   </div>
                   <div>
                     <div @click='tournCheck9' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck9' :style='tournament.tournXbox === true ? "display: block" : "display: none"'>
                     </div> 
                     <div>Xbox Account</div>
                   </div>
                   <div>
                     <div @click='tournCheck10' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck10' :style='tournament.tournSteam === true ? "display: block" : "display: none"'>
                     </div> 
                     <div>Steam Account</div>
                   </div>
                   <div>
                     <div @click='tournCheck11' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck11' :style='tournament.tournLOL === true ? "display: block" : "display: none"'>
                     </div> 
                     <div>League of Legends Account</div>
                   </div>
                   <div>
                     <div @click='tournCheck12' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck12' :style='tournament.tournBlizz === true ? "display: block" : "display: none"'>
                     </div> 
                     <div>Blizzard Account</div>
                   </div>
                   <div>
                     <div @click='tournCheck13' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck13' :style='tournament.tournOrigin === true ? "display: block" : "display: none"'>
                     </div> 
                     <div>Origin Account</div>
                   </div>
                </div>
                <div>
                  <div>
                    Country: <input type='text' v-model='tournament.tournCountry'>
                  </div>
                  <div>
                    Min Age: <input type='text' v-model='tournament.tournMinAge'>
                  </div>
                </div>
            </div>
        </div>
        <div class='extra'>
             <div class='basic'>Extra</div>
             <div>
                <div>
                    <div>Lobby</div>
                    <input type='text' v-model='tournament.tournLobby'>
                </div>
                <div>
                    <div>Mode</div>
                    <input type='text' v-model='tournament.tournMode2'>
                </div>
                <div>
                    <div>VETO</div>
                    <input type='text' v-model='tournament.tournVeto'>
                </div>
             </div>
             <div>
                <div>
                   <div>Server region</div>
                   <div>
                     <div @click='tournCheck14' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck14' :style='tournament.tournEuropeNord === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>europe nordic & east</div>
                   </div>
                   <div>
                     <div @click='tournCheck15' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck15' :style='tournament.tournEuropeWest === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>Europe West</div>
                   </div>
                   <div>
                     <div @click='tournCheck16' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck16' :style='tournament.tournAustralia === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>Australia & Oceania</div>
                   </div>
                   <div>
                     <div @click='tournCheck17' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck17' :style='tournament.tournChina === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>china</div>
                   </div>
                   <div>
                     <div @click='tournCheck18' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck18' :style='tournament.tournAsia === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>Asia</div>
                   </div>
                   <div>
                     <div @click='tournCheck19' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck19' :style='tournament.tournAmerica === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>Amercia</div>
                   </div>
                </div>
                <div>
                   <div>Platform</div>
                   <div>
                     <div @click='tournCheck20' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck20' :style='tournament.tournPC === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>PC</div>
                   </div>
                   <div>
                     <div @click='tournCheck21' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck21' :style='tournament.tournXboxOne === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>Xbox one</div>
                   </div>
                   <div>
                     <div @click='tournCheck22' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck22' :style='tournament.tournPS4 === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>ps4</div>
                   </div>
                   <div>
                     <div @click='tournCheck23' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck23' :style='tournament.tournSwitch === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>nintendo switch</div>
                   </div>
                   <div>
                     <div @click='tournCheck24' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck24' :style='tournament.tournPS5 === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>PS5</div>
                   </div>
                   <div>
                     <div @click='tournCheck25' class='tournCheck'>
                        <img src='../assets/check2.png' id='tournCheck25' :style='tournament.tournSeriesX === true ? "display: block" : "display: none"'>
                     </div> 
                      <div>Xbox Series X</div>
                   </div>
                </div>
             </div>
             <div>
                <div>
                    <div>Discord URL</div>
                    <input type='text' v-model='tournament.tournDiscord'>
                </div>
                <div>
                    <div>Facebook URL</div>
                    <input type='text' v-model='tournament.tournFacebook'>
                </div>
                <div>
                    <div>Twitter URL</div>
                    <input type='text' v-model='tournament.tournTwitt'>
                </div>
                <div>
                    <div>VK URL</div>
                    <input type='text' v-model='tournament.tournVK'>
                </div>
                <div>
                    <div>Twitch URL</div>
                    <input type='text' v-model='tournament.tournTwitch'>
                </div>
                <div>
                    <div>Youtube URL</div>
                    <input type='text' v-model='tournament.tournYouTube'>
                </div>
             </div>
        </div>
        <div class='streams'>
            <div class='basic'>Streams</div>
            <div>
                <div v-for='stream in tournament.tournTwitchArr' :key='stream.id'>
                    <div>Twitch Stream</div>
                    <input type='text' v-model='stream.streamLink'>
                    <select v-model='stream.streamLang'>
                        <option value='English'>English</option>
                        <option value='Chinese'>Chinese</option>
                        <option value='Ukrainian'>Ukrainian</option>
                        <option value='Polish'>Polish</option>
                        <option value='Russian'>Russian</option>
                    </select>
                </div>
                <div>
                   <button @click='addStream'>+ Add Stream</button>
                </div>
             </div>
        </div>
        <div class='sponsors'>
            <div class='basic'>Sponsors</div>
            <div v-for='(sponsor, index) in tournament.tournSponsors' :key='sponsor.id'>
                <div>Sponsor logo</div>
                <div>
                    <input type='text' placeholder='banner url' :id='"tempsURL" + index' :value='sponsor.sponsorLogo' disabled>
                    <input type='file' accept="image/*" :id='"sp" + index' style='display: none' @change="addSponsBanner(sponsor, index, $event)">
                    <button @click='addPhot(index)'>UPLOAD</button>
                </div>
                <img :src='sponsor.sponsorLogo' :id='"imgSpons" + index' class='img'>
            </div>
            <div>
                <button @click='addSponsor'>+ Add Sponsor</button>
            </div>
        </div>
        <div class='rules'>
            <div class='basic'>Rules</div>
            <div>
               <div>Rules</div>
               <textarea placeholder='You can write here somebody about your tournament...'
               v-model='tournament.tournRules'></textarea>
            </div>
        </div>
        <div class='three-buttons'>
           <button @click='deleteTournament'>Delete Torunament</button>
           <button @click='deleteTournament'>Finish Torunament</button>
           <button @click='saveThisTournament'>Save changes</button>
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
    components:{
      TopPannel,
      LeftPannel
   },
   data(){
       return{
           tournaments: [],

           playersList: [],
           playersList2: [],
           playerHost: '',

           imgData1: null,
           imgData2: null,

           startDate: '',
           startTime: '',
           tournament: JSON.parse(localStorage.getItem("tournament-edit")),
           tempPlayersList: []
       }
   },
   methods:{

   //game info
       tournCheck1(){
           if(this.tournament.tourn3RD === false){
               this.tournament.tourn3RD = true;
               document.getElementById('tournCheck').style='display: block'
           } else if(this.tournament.tourn3RD === true){
               this.tournament.tourn3RD = false;
               document.getElementById('tournCheck').style='display: none'
           }
           
       },
       mainBanner(){
          let img = document.getElementById('img1');
          this.imgData1 = event.target.files[0];

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
            document.getElementById("tempUrl1").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData1);
          this.storage = getStorage();
          
          document.getElementById('img1').style='display: block;';

          this.tournament.tournMainBannerName = Date.now(); 
       },
       tournBackground(){
          let img = document.getElementById('img2');
          this.imgData2 = event.target.files[0];

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
          reader.readAsDataURL(this.imgData2);
          this.storage = getStorage();
          
          document.getElementById('img2').style='display: block;'; 

          this.tournament.tournBackgroundName = Date.now();
       },
   //registration
        tournCheck2(){
           if(this.tournament.tournAppr === false){
               this.tournament.tournAppr = true;
               document.getElementById('tournCheck2').style='display: block'
           } else if(this.tournament.tournAppr === true){
               this.tournament.tournAppr = false;
               document.getElementById('tournCheck2').style='display: none'
           }   
        },
        tournCheck3(){
           if(this.tournament.tournChekinTime === false){
               this.tournament.tournChekinTime = true;
               document.getElementById('tournCheck3').style='display: block'
           } else if(this.tournament.tournChekinTime === true){
               this.tournament.tournChekinTime = false;
               document.getElementById('tournCheck3').style='display: none'
           }   
        },
        regAct1(){
           this.tournament.tournRegistr = 'free';
           document.getElementById("r1").classList.add('regActive');
           document.getElementById("r2").classList.remove('regActive');
           document.getElementById("r3").classList.remove('regActive');
           document.getElementById("r4").classList.remove('regActive');
        },
        regAct2(){
           this.tournament.tournRegistr = 'paid';
           document.getElementById("r1").classList.remove('regActive');
           document.getElementById("r2").classList.add('regActive');
           document.getElementById("r3").classList.remove('regActive');
           document.getElementById("r4").classList.remove('regActive');
        },
        regAct3(){
           this.tournament.tournRegistr = 'premium';
           document.getElementById("r1").classList.remove('regActive');
           document.getElementById("r2").classList.remove('regActive');
           document.getElementById("r3").classList.add('regActive');
           document.getElementById("r4").classList.remove('regActive');
        },
        regAct4(){
           this.tournament.tournRegistr = 'private';
           document.getElementById("r1").classList.remove('regActive');
           document.getElementById("r2").classList.remove('regActive');
           document.getElementById("r3").classList.remove('regActive');
           document.getElementById("r4").classList.add('regActive');
        },

   //player list
        tournCheck4(){
           if(this.tournament.tournShow === false){
               this.tournament.tournShow = true;
               document.getElementById('tournCheck4').style='display: block'
           } else if(this.tournament.tournShow === true){
               this.tournament.tournShow = false;
               document.getElementById('tournCheck4').style='display: none'
           }   
        },

        closeUsersList(){
           document.getElementById('popup-temp-player-list').style='display: none';
           document.getElementById('body').style='overflow: auto';
        },
        showUsersList(){
           for(let i = 0; i < this.tournament.tournPlayersList.lenght; i++){
               for(let e = 0; e < this.tempPlayersList.length; e++){
                   if(this.tempPlayersList[e].userNickn === this.tournament.tournPlayersList[i].userNickn){
                       this.tempPlayersList.splice(e, 1);
                       break;
                   }
               }
           }
           document.getElementById('body').style='overflow: hidden';
           document.getElementById('popup-temp-player-list').style='display: block'
        },
        addNewPlayer(player, index){
           this.tournament.tournPlayersList.push(player);
           this.tempPlayersList.splice(index, 1);
        },

        closePlayersList(){
           document.getElementById('popup-player-list').style='display: none';
           document.getElementById('body').style='overflow: auto';
        },
        showPlayersList(){
           document.getElementById('body').style='overflow: hidden';
           document.getElementById('popup-player-list').style='display: block'
        },


   //leagues

        tournCheck5(){
           if(this.tournament.tournOnlyLeague === false){
               this.tournament.tournOnlyLeague = true;
               document.getElementById('tournCheck5').style='display: block'
           } else if(this.tournament.tournOnlyLeague === true){
               this.tournament.tournOnlyLeague = false;
               document.getElementById('tournCheck5').style='display: none'
           }   
        },

   //voting
        tournCheck6(){
           if(this.tournament.tournVotingOne === false){
               this.tournament.tournVotingOne = true;
               document.getElementById('tournCheck6').style='display: block'
           } else if(this.tournament.tournVotingOne === true){
               this.tournament.tournVotingOne = false;
               document.getElementById('tournCheck6').style='display: none'
           }   
        },
        tournCheck7(){
           if(this.tournament.tournVotingTwo === false){
               this.tournament.tournVotingTwo = true;
               document.getElementById('tournCheck7').style='display: block'
           } else if(this.tournament.tournVotingTwo === true){
               this.tournament.tournVotingTwo = false;
               document.getElementById('tournCheck7').style='display: none'
           }   
        },
   //add-req

        tournCheck8(){
           if(this.tournament.tournPSN === false){
               this.tournament.tournPSN = true;
               document.getElementById('tournCheck8').style='display: block'
           } else if(this.tournament.tournPSN === true){
               this.tournament.tournPSN = false;
               document.getElementById('tournCheck8').style='display: none'
           }   
        },
        tournCheck9(){
           if(this.tournament.tournXbox === false){
               this.tournament.tournXbox = true;
               document.getElementById('tournCheck9').style='display: block'
           } else if(this.tournament.tournXbox === true){
               this.tournament.tournXbox = false;
               document.getElementById('tournCheck9').style='display: none'
           }   
        },
        tournCheck10(){
           if(this.tournament.tournSteam === false){
               this.tournament.tournSteam = true;
               document.getElementById('tournCheck10').style='display: block'
           } else if(this.tournament.tournSteam === true){
               this.tournament.tournSteam = false;
               document.getElementById('tournCheck10').style='display: none'
           }   
        },
        tournCheck11(){
           if(this.tournament.tournLOL === false){
               this.tournament.tournLOL = true;
               document.getElementById('tournCheck11').style='display: block'
           } else if(this.tournament.tournLOL === true){
               this.tournament.tournLOL = false;
               document.getElementById('tournCheck11').style='display: none'
           }   
        },
        tournCheck12(){
           if(this.tournament.tournBlizz === false){
               this.tournament.tournBlizz = true;
               document.getElementById('tournCheck12').style='display: block'
           } else if(this.tournament.tournBlizz === true){
               this.tournament.tournBlizz = false;
               document.getElementById('tournCheck12').style='display: none'
           }   
        },
        tournCheck13(){
           if(this.tournament.tournOrigin === false){
               this.tournament.tournOrigin = true;
               document.getElementById('tournCheck13').style='display: block'
           } else if(this.tournament.tournOrigin === true){
               this.tournament.tournOrigin = false;
               document.getElementById('tournCheck13').style='display: none'
           }   
        },

   //extra

        tournCheck14(){
           if(this.tournament.tournEuropeNord === false){
               this.tournament.tournEuropeNord = true;
               this.tournament.tournRegion = 'EuropeNord';
               document.getElementById('tournCheck14').style='display: block'

               this.tournament.tournEuropeWest = false;
               document.getElementById('tournCheck15').style='display: none'
               this.tournament.tournAustralia = false;
               document.getElementById('tournCheck16').style='display: none'
               this.tournament.tournChina = false;
               document.getElementById('tournCheck17').style='display: none'
               this.tournament.tournAsia = false;
               document.getElementById('tournCheck18').style='display: none'
               this.tournament.tournAmerica = false;
               document.getElementById('tournCheck19').style='display: none'

           } else if(this.tournament.tournEuropeNord === true){
               this.tournament.tournEuropeNord = false;
               this.tournament.tournRegion = '';
               document.getElementById('tournCheck14').style='display: none'
           }   
        },
        tournCheck15(){
           if(this.tournament.tournEuropeWest === false){
               this.tournament.tournEuropeWest = true;
               this.tournament.tournRegion = 'EuropeWest';
               document.getElementById('tournCheck15').style='display: block'

               this.tournament.tournAustralia = false;
               document.getElementById('tournCheck16').style='display: none'
               this.tournament.tournChina = false;
               document.getElementById('tournCheck17').style='display: none'
               this.tournament.tournAsia = false;
               document.getElementById('tournCheck18').style='display: none'
               this.tournament.tournAmerica = false;
               document.getElementById('tournCheck19').style='display: none'
               this.tournament.tournEuropeNord = false;
               document.getElementById('tournCheck14').style='display: none'
           } else if(this.tournament.tournEuropeWest === true){
               this.tournament.tournRegion = '';
               this.tournament.tournEuropeWest = false;
               document.getElementById('tournCheck15').style='display: none'
           }   
        },
        tournCheck16(){
           if(this.tournament.tournAustralia === false){
               this.tournament.tournAustralia = true;
               this.tournament.tournRegion = 'Australia';
               document.getElementById('tournCheck16').style='display: block'

               this.tournament.tournEuropeWest = false;
               document.getElementById('tournCheck15').style='display: none'
               this.tournament.tournChina = false;
               document.getElementById('tournCheck17').style='display: none'
               this.tournament.tournAsia = false;
               document.getElementById('tournCheck18').style='display: none'
               this.tournament.tournAmerica = false;
               document.getElementById('tournCheck19').style='display: none'
               this.tournament.tournEuropeNord = false;
               document.getElementById('tournCheck14').style='display: none'
           } else if(this.tournament.tournAustralia === true){
               this.tournament.tournAustralia = false;
               this.tournament.tournRegion = '';
               document.getElementById('tournCheck16').style='display: none'
           }   
        },
        tournCheck17(){
           if(this.tournament.tournChina === false){
               this.tournament.tournChina = true;
               this.tournament.tournRegion = 'China';
               document.getElementById('tournCheck17').style='display: block'

               this.tournament.tournEuropeWest = false;
               document.getElementById('tournCheck15').style='display: none'
               this.tournament.tournAustralia = false;
               document.getElementById('tournCheck16').style='display: none'
               this.tournament.tournAsia = false;
               document.getElementById('tournCheck18').style='display: none'
               this.tournament.tournAmerica = false;
               document.getElementById('tournCheck19').style='display: none'
               this.tournament.tournEuropeNord = false;
               document.getElementById('tournCheck14').style='display: none'
           } else if(this.tournament.tournChina === true){
               this.tournament.tournChina = false;
               this.tournament.tournRegion = '';
               document.getElementById('tournCheck17').style='display: none'
           }   
        },
        tournCheck18(){
           if(this.tournament.tournAsia === false){
               this.tournament.tournAsia = true;
               this.tournament.tournRegion = 'Asia';
               document.getElementById('tournCheck18').style='display: block'

               this.tournament.tournEuropeWest = false;
               document.getElementById('tournCheck15').style='display: none'
               this.tournament.tournAustralia = false;
               document.getElementById('tournCheck16').style='display: none'
               this.tournament.tournChina = false;
               document.getElementById('tournCheck17').style='display: none'
               this.tournament.tournAmerica = false;
               document.getElementById('tournCheck19').style='display: none'
               this.tournament.tournEuropeNord = false;
               document.getElementById('tournCheck14').style='display: none'
           } else if(this.tournament.tournAsia === true){
               this.tournament.tournAsia = false;
               this.tournament.tournRegion = '';
               document.getElementById('tournCheck18').style='display: none'
           }   
        },
        tournCheck19(){
           if(this.tournament.tournAmerica === false){
               this.tournament.tournAmerica = true;
               this.tournament.tournRegion = 'America';
               document.getElementById('tournCheck19').style='display: block'

               this.tournament.tournEuropeWest = false;
               document.getElementById('tournCheck15').style='display: none'
               this.tournament.tournAustralia = false;
               document.getElementById('tournCheck16').style='display: none'
               this.tournament.tournChina = false;
               document.getElementById('tournCheck17').style='display: none'
               this.tournament.tournAsia = false;
               document.getElementById('tournCheck18').style='display: none'
               this.tournament.tournEuropeNord = false;
               document.getElementById('tournCheck14').style='display: none'
           } else if(this.tournament.tournAmerica === true){
               this.tournament.tournAmerica = false;
               this.tournament.tournRegion = '';
               document.getElementById('tournCheck19').style='display: none'
           }   
        },    

        tournCheck20(){
           if(this.tournament.tournPC === false){
               this.tournament.tournPC = true;
               this.tournament.tournPlatform = 'PC';
               document.getElementById('tournCheck20').style='display: block'

               this.tournament.tournXboxOne = false;
               document.getElementById('tournCheck21').style='display: none'
               this.tournament.tournPS4 = false;
               document.getElementById('tournCheck22').style='display: none'
               this.tournament.tournSwitch = false;
               document.getElementById('tournCheck23').style='display: none'
               this.tournament.tournPS5 = false;
               document.getElementById('tournCheck24').style='display: none'
               this.tournament.tournSeriesX = false;
               document.getElementById('tournCheck25').style='display: none'
           } else if(this.tournament.tournPC === true){
               this.tournament.tournPC = false;
               this.tournament.tournPlatform = '';
               document.getElementById('tournCheck20').style='display: none'
           }   
        },
        tournCheck21(){
           if(this.tournament.tournXboxOne === false){
               this.tournament.tournXboxOne = true;
               this.tournament.tournPlatform = 'Xbox One';
               document.getElementById('tournCheck21').style='display: block'

               this.tournament.tournPS4 = false;
               document.getElementById('tournCheck22').style='display: none'
               this.tournament.tournSwitch = false;
               document.getElementById('tournCheck23').style='display: none'
               this.tournament.tournPS5 = false;
               document.getElementById('tournCheck24').style='display: none'
               this.tournament.tournSeriesX = false;
               document.getElementById('tournCheck25').style='display: none'
               this.tournament.tournPC = false;
               document.getElementById('tournCheck20').style='display: none'
           } else if(this.tournament.tournXboxOne === true){
               this.tournament.tournXboxOne = false;
               this.tournament.tournPlatform = '';
               document.getElementById('tournCheck21').style='display: none'
           }   
        },
        tournCheck22(){
           if(this.tournament.tournPS4 === false){
               this.tournament.tournPS4 = true;
               this.tournament.tournPlatform = 'PS4';
               document.getElementById('tournCheck22').style='display: block'

               this.tournament.tournXboxOne = false;
               document.getElementById('tournCheck21').style='display: none'
               this.tournament.tournSwitch = false;
               document.getElementById('tournCheck23').style='display: none'
               this.tournament.tournPS5 = false;
               document.getElementById('tournCheck24').style='display: none'
               this.tournament.tournSeriesX = false;
               document.getElementById('tournCheck25').style='display: none'
               this.tournament.tournPC = false;
               document.getElementById('tournCheck20').style='display: none'
           } else if(this.tournament.tournPS4 === true){
               this.tournament.tournPS4 = false;
               this.tournament.tournPlatform = '';
               document.getElementById('tournCheck22').style='display: none'
           }   
        },
        tournCheck23(){
           if(this.tournament.tournSwitch === false){
               this.tournament.tournSwitch = true;
               this.tournament.tournPlatform = 'Switch';
               document.getElementById('tournCheck23').style='display: block'

               this.tournament.tournXboxOne = false;
               document.getElementById('tournCheck21').style='display: none'
               this.tournament.tournPS4 = false;
               document.getElementById('tournCheck22').style='display: none'
               this.tournament.tournPS5 = false;
               document.getElementById('tournCheck24').style='display: none'
               this.tournament.tournSeriesX = false;
               document.getElementById('tournCheck25').style='display: none'
               this.tournament.tournPC = false;
               document.getElementById('tournCheck20').style='display: none'
           } else if(this.tournament.tournSwitch === true){
               this.tournament.tournSwitch = false;
               this.tournament.tournPlatform = '';
               document.getElementById('tournCheck23').style='display: none'
           }   
        },
        tournCheck24(){
           if(this.tournament.tournPS5 === false){
               this.tournament.tournPS5 = true;
               this.tournament.tournPlatform = 'PS5';
               document.getElementById('tournCheck24').style='display: block'

               this.tournament.tournXboxOne = false;
               document.getElementById('tournCheck21').style='display: none'
               this.tournament.tournPS4 = false;
               document.getElementById('tournCheck22').style='display: none'
               this.tournament.tournSwitch = false;
               document.getElementById('tournCheck23').style='display: none'
               this.tournament.tournSeriesX = false;
               document.getElementById('tournCheck25').style='display: none'
               this.tournament.tournPC = false;
               document.getElementById('tournCheck20').style='display: none'
           } else if(this.tournament.tournPS5 === true){
               this.tournament.tournPS5 = false;
               this.tournament.tournPlatform = '';
               document.getElementById('tournCheck24').style='display: none'
           }   
        },
        tournCheck25(){
           if(this.tournament.tournSeriesX === false){
               this.tournament.tournSeriesX = true;
               this.tournament.tournPlatform = 'Series X';
               document.getElementById('tournCheck25').style='display: block'

               this.tournament.tournXboxOne = false;
               document.getElementById('tournCheck21').style='display: none'
               this.tournament.tournPS4 = false;
               document.getElementById('tournCheck22').style='display: none'
               this.tournament.tournSwitch = false;
               document.getElementById('tournCheck23').style='display: none'
               this.tournament.tournPS5 = false;
               document.getElementById('tournCheck24').style='display: none'
               this.tournament.tournPC = false;
               document.getElementById('tournCheck20').style='display: none'
           } else if(this.tournament.tournSeriesX === true){
               this.tournament.tournSeriesX = false;
               this.tournament.tournPlatform = '';
               document.getElementById('tournCheck25').style='display: none'
           }   
        },

   //prize pool

        tournCheck26(){
           if(this.tournament.tourn3rdPlace === false){
               this.tournament.tourn3rdPlace = true;
               document.getElementById('tournCheck26').style='display: block'
           } else if(this.tournament.tourn3rdPlace === true){
               this.tournament.tourn3rdPlace = false;
               document.getElementById('tournCheck26').style='display: none'
           }   
        },

   //stream

    addStream(){
       this.tournament.tournTwitchArr.push({
            streamLink: 'https://www.twitch.tv/',
            streamLang: ''
       });
    },

   //sponsors
     addPhot(index){
         document.getElementById("sp" + index).click();
     },
     addSponsor(){
         this.tournament.tournSponsors.push({
              sponsorLogo: '',
              sponsorData: null,
              sponsorName: Date.now()
         });
     },
     addSponsBanner(sponsor, index, event){
          let img = document.getElementById("imgSpons" + index);
          sponsor.sponsorData = event.target.files[0];

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
            document.getElementById("tempsURL" + index).value = this.tempSrc;
          }
          reader.readAsDataURL(sponsor.sponsorData);
          this.storage = getStorage();
          
          document.getElementById("imgSpons" + index).style='display: block;'; 
       },
   //save tournament

     saveThisTournament(){
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;

        if(this.imgData1 !== null){
           count1 = 1;
           const storageRef = ref(this.storage, `tournament-images/${this.tournament.tournURL}` + this.tournament.tournMainBannerName);
           uploadBytes(storageRef, this.imgData1).then((snapshot) => {
              console.log('Файл завантажено');
           });    
        } 
        if(this.imgData2 !== null){
           count2 = 1;  
           const storageRef2 = ref(this.storage, `tournament-images/${this.tournament.tournURL}` + this.tournament.tournBackgroundName);
           uploadBytes(storageRef2, this.imgData2).then((snapshot) => {
              console.log('Файл завантажено');
           });             
        } 

        for(let i = 0; i < this.tournament.tournSponsors.length; i++){
            if(this.tournament.tournSponsors[i].sponsorData !== undefined){
               count3 = 1;
               const storageRef3 = ref(this.storage, `tournament-images/${this.tournament.tournURL}` + this.tournament.tournSponsors[i].sponsorName);
               uploadBytes(storageRef3, this.tournament.tournSponsors[i].sponsorData).then((snapshot) => {
               console.log('Файл завантажено');
               });
            }
        }

        setTimeout(() => {
           if(count1 !== 0){
                getDownloadURL(ref(this.storage, `tournament-images/${this.tournament.tournURL}` + this.tournament.tournMainBannerName)).then((url) => {
                  this.tournament.tournMainBanner = url;
                }); 
           }
           if(count2 !== 0){
              getDownloadURL(ref(this.storage, `tournament-images/${this.tournament.tournURL}` + this.tournament.tournBackgroundName)).then((url) => {
                     this.tournament.tournBackground = url;
              }); 
           }
           if(count3 !== 0){
             for(let i = 0; i < this.tournament.tournSponsors.length; i++){
               getDownloadURL(ref(this.storage, `tournament-images/${this.tournament.tournURL}` + this.tournament.tournSponsors[i].sponsorName)).then((url) => {
                    this.tournament.tournSponsors[i].sponsorLogo = url;
               }); 
             };
           }

           setTimeout(() => {
              const dbRef = fireRef(getDatabase());
              get(child(dbRef, `tournaments/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.tournaments = tempArr;

                for(let i = 0; i < this.tournaments.length; i++){
                    if(this.tournament.tournURL === this.tournaments[i].tournURL){
                        this.tournaments[i] = this.tournament;
                    }
                }

                const db = getDatabase();

                set(fireRef(db, `tournaments/`), this.tournaments); 

                window.location.href = '/tournaments';  
              });
           }, 3000); 
        }, 1000);   

     },
   
   //delete

       deleteTournament(){
         const dbRef = fireRef(getDatabase());
         get(child(dbRef, `tournaments/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.tournaments = tempArr;

                for(let i = 0; i < this.tournaments.length; i++){
                    if(this.tournament.tournURL === this.tournaments[i].tournURL){
                        this.tournaments.splice(i, 1);
                    }
                }

                const db = getDatabase();
                set(fireRef(db, `tournaments/`), this.tournaments);
                window.location.href = '/tournaments';
         });
       },

   //

     

   //
       show(){
           console.log(this.tournament);
       },
       tournFirstFunc(){
           const dbRef = fireRef(getDatabase());
           get(child(dbRef, `users/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.playersList = tempArr;
           });
           get(child(dbRef, `users/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.tempPlayersList = tempArr;
           });
       }
   },
   mounted(){
       this.tournFirstFunc()
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

 input[type=date]::-webkit-calendar-picker-indicator {
  opacity: 0;
 }
 input[type=time]::-webkit-calendar-picker-indicator {
  opacity: 0;
 }

/* popup player list */ 

  .popup-temp-player-list{
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    top: 0;
    left: 0;
    color: black;

    display: none;
  }

  .popup-temp-player-list>div{
    width: 769px;
    height: 598px;
     
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);



    background: #0F1215;
    border: 2px solid #20252B;
  }

  .popup-temp-player-list>div>div:first-child{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  .popup-temp-player-list>div>div:first-child>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 137.5%;
      color: #F5F5F5;

      margin-left: 10px;
      margin-bottom: 10px;
      margin-top: 10px;
  }

  .popup-temp-player-list>div>div:first-child>div:last-child{
      margin-right: 10px;
      cursor: pointer;
  }

  .temp-player-list{
    display: flex;
    flex-wrap: wrap;
  }

  .temp-player-list>div{
    padding: 30px 15px;
    width: 236px;
    height: 85px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 100%;
    color: #F5F5F5;
    text-align: center;

    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;

    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;

    cursor: pointer;
  }

  /* *** */

  .popup-player-list{
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    top: 0;
    left: 0;
    color: black;

    display: none;
  }

  .popup-player-list>div{
    width: 769px;
    height: 598px;
     
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);



    background: #0F1215;
    border: 2px solid #20252B;
  }

  .popup-player-list>div>div:first-child{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  .popup-player-list>div>div:first-child>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 137.5%;
      color: #F5F5F5;

      margin-left: 10px;
      margin-bottom: 10px;
      margin-top: 10px;
  }

  .popup-player-list>div>div:first-child>div:last-child{
      margin-right: 10px;
      cursor: pointer;
  }

  .temp-player-list2{
    display: flex;
    flex-wrap: wrap;
  }

  .temp-player-list2>div{
    padding: 30px 15px;
    width: 236px;
    height: 85px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 100%;
    color: #F5F5F5;
    text-align: center;

    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;

    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;

    cursor: pointer;
  }

/* content */

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

/* basic info */

  .basic-info{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-top: 78px;

     margin-bottom: 14px;
  }

  .basic{
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #CCCDCD;

     margin-bottom: 44px;
  }

  .basic-info>div:first-child{
      margin-left: -14px;
  }



  .basic-info>div>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-bottom: 12px;
      margin-top: 22px;
  }

  .basic-info>div>input{
      width: 512px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

  .basic-info>div>textarea{
      width: 512px;
      height: 184px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding: 12px 16px;

      resize: none;
  }

  .basic-info>div>select{
      width: 512px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown-2.png') no-repeat;
      background-position: 480px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

  .basic-info>div:nth-child(2)>div:first-child{
      margin-top: 0px;
  }

   .basic-info>div:nth-child(4)>div:last-child{
    display: flex;
    align-items: center;
 }

 .basic-info>div:nth-child(4)>div:last-child>div{
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

  .basic-info>div:nth-child(4)>div:last-child>input{
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

 .basic-info>div:nth-child(4)>div:last-child>input{
    margin-bottom: 0px;
    width: 418px;
 }

/* game info */

  .game-info{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .basic{
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #CCCDCD;

     margin-bottom: 44px;
  }

  .game-info>div:first-child{
      margin-left: -14px;
  }

  .game-info>div>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-bottom: 12px;
      margin-top: 22px;
  }

  .game-info>div>input{
      width: 512px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

  .game-info>div>textarea{
      width: 512px;
      height: 184px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding: 12px 16px;

      resize: none;
  }

  .game-info>div>textarea::placeholder{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #20252B;
  }

  .game-info>div>select{
      width: 512px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown-2.png') no-repeat;
      background-position: 480px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

  .game-info>div:nth-child(2)>div:first-child{
      margin-top: 0px;
  }

  .game-info>div:nth-child(3)>div:nth-child(2),
  .game-info>div:nth-child(3)>div:nth-child(3)
  {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

 .form_radio {
 	margin-bottom: 10px;
 }
 .form_radio input[type=radio] {
	display: none;
 }
 .form_radio label {
	display: inline-block;
	cursor: pointer;
	position: relative;
	padding-left: 25px;
	margin-right: 0;
	line-height: 18px;
	user-select: none;
 }
 .form_radio label:before {
	content: "";
	display: inline-block;
	width: 20px;
	height: 20px;
	position: absolute;
	left: 0;
	bottom: -0.5px;
	background: url('../assets/tourn-reg-radio-1.png') 0 0 no-repeat;
 }
 
 .form_radio input[type=radio]:checked + label:before {
	background: url('../assets/tourn-reg-radio-3.jpg') 0 0 no-repeat;
 }

  .game-info>div:nth-child(4)>div:first-child{
      margin-top: 5px;
  }

  .game-info>div:nth-child(5){
      display: flex;
      align-items: center;
      margin-top: -7px;
      margin-bottom: -18px;
  }

  .game-info>div:nth-child(5)>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .game-info>div:nth-child(5)>div:last-child{
      margin-top: 11px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  .game-info>div:nth-child(6){
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  .game-info>div:nth-child(6)>div>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
      margin-bottom: 12px;
      
  }

  .game-info>div:nth-child(6)>div:first-child>select{
      width: 108px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown-2.png') no-repeat;
      background-position: 80px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

  .game-info>div:nth-child(6)>div:last-child{
      margin-top: 10px;
  }

    .game-info>div:nth-child(6)>div:last-child>select{
      width: 276px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown-2.png') no-repeat;
      background-position: 247px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

  .game-info>div:nth-child(7)>div:first-child{
      margin-top: 5px;
  }

  .game-info>div:nth-child(7)>div{
      display: flex;
      justify-content: space-between;
  }

  .game-info>div:nth-child(7)>div>input{
    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;
    border-radius: 4px;
    width: 355px;
    height: 40px;
    padding-left: 16px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;

  }

  .game-info>div:nth-child(7)>div>button{
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

  .game-info>div:nth-child(8)>div:first-child{
     margin-top: 15px;
  }

  .game-info>div:nth-child(8)>div{
      display: flex;
      justify-content: space-between;
  }

  .game-info>div:nth-child(8)>div>input{
    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;
    border-radius: 4px;
    width: 355px;
    height: 40px;
    padding-left: 16px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;

  }

  .game-info>div:nth-child(8)>div>button{
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

  #tournCheck{
      display: none;
  }

/* registration */

 .registration{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .registration>div:first-child{
      margin-left: -14px;
      display: flex;
      align-items: center;
  }

  .registration>div:first-child>div:first-child{
      display: flex;
      align-items: center;
      margin-top: 12px;
      margin-left: 24px;
  }

  .registration>div:first-child>div:first-child>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .registration>div:first-child>div:first-child>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  .registration>div>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-bottom: 12px;
      margin-top: 22px;
  }

  .registration>div>div>input[type='date']{
      width: 160px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown-2.png') no-repeat;
      background-position: 130px;

      margin-right: 16px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

    .registration>div>div>input[type='time']{
      width: 160px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown-2.png') no-repeat;
      background-position: 130px;

      margin-right: 16px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

  .registration>div:nth-child(2)>div:first-child{
      margin-top: 0px;
  }

  .registration>div:nth-child(2)>div:last-child{
      display: flex;
  }

  .someReg{
      padding: 12px 22px;
      background: #1A222D;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #0A61E1;

      margin-right: 12px;
      cursor: pointer;
  }

 .registration>div:nth-child(5){
      display: flex;
      align-items: center;
      margin-top: -7px;
  }

  .registration>div:nth-child(5)>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .registration>div:nth-child(5)>div:last-child{
      margin-top: 11px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

    .registration>div>select{
      width: 160px;
      height: 40px;
      left: 0px;
      top: 28px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown-2.png') no-repeat;
      background-position: 130px;

      margin-right: 16px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

  .registration>div:nth-child(7){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #3C434D;

      margin-top: 29px;
  }

  #tournCheck2{
      display: none;
  }

    #tournCheck3{
      display: none;
  }


/* if paid */

  .if-paid{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .if-paid>div:first-child{
      margin-left: -14px;
  }

  .if-paid>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  .if-paid>div:last-child>input{
      width: 214px;
      height: 25px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      margin-left: 15px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding-left: 16px;
  }

/* player list */
  .player-list{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .player-list>div:first-child{
      margin-left: -14px;
  }

  .player-list>div:nth-child(2)>button{
      padding: 12px 22px;
      background: #1A222D;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #0A61E1;

      margin-right: 19px;
      cursor: pointer;
  }

  .player-list>div:last-child{
      display: flex;
      align-items: center;
      margin-top: 41px;
  }

  .player-list>div:last-child>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .player-list>div:last-child>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  #tournCheck4{
      display: none;
  }


/* leagues */
  
  .leagues{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .leagues>div:first-child{
      margin-left: -14px;
  }

  .leagues>div:nth-child(2){
      display: flex;
      align-items: center;
  }

  .leagues>div:nth-child(2)>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-right: 25px;
  }

  .leagues>div:nth-child(2)>button{
      padding: 12px 22px;
      background: #1A222D;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #0A61E1;
  }

  .leagues>div:last-child{
      display: flex;
      align-items: center;
      margin-top: 41px;
  }

  .leagues>div:last-child>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .leagues>div:last-child>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

    #tournCheck5{
      display: none;
  }

/* prize pool */

  .prize-pool{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .prize-pool>div:first-child{
      margin-left: -14px;
  }

  .prize-pool>div:nth-child(2)>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

   .prize-pool>div:nth-child(2)>div:first-child{
       margin-right: 10px;
  }

  .prize-pool>div:nth-child(2)>div>input{
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      width: 107px;
      height: 25px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
      text-align: center;
  }

  .prize-pool>div:nth-child(2){
      display: flex;
      width: 108%;
  }

  .prize-pool>div:nth-child(3){
      display: flex;
      align-items: center;
      margin-top: 11px;
  }

  .prize-pool>div:nth-child(3)>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
      margin-left: 12px;
  }

  .prize-pool>div:nth-child(3)>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  .prize-pool>div:nth-child(4){
      display: flex;
  }

  .prize-pool>div:nth-child(4)>div:first-child>div:first-child>div{
      display: flex;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
      margin-bottom: 8px;
  }

  .prize-pool>div:nth-child(4)>div:first-child>div:first-child>div>input{
      width: 119px;
      height: 25px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      text-align: center;
      margin-left: 9px;
  }

  .prize-pool>div:nth-child(4)>div:first-child>div:first-child>div:first-child{
      margin-top: 21px;
  }

  .prize-pool>div:nth-child(4)>div:first-child>div:first-child>div:first-child>input{
      margin-left: 11px;
  }

  .prize-pool>div:nth-child(4)>div:first-child>div:last-child>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-top: 14px;
      margin-bottom: 12px;
  }

  .prize-pool>div:nth-child(4)>div:first-child>div:last-child>.form_radio{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  .prize-pool>div:nth-child(4)>div:last-child{
      margin-left: 62px;
  }

  .prize-pool>div:nth-child(4)>div:last-child>div:first-child>div{
      display: flex;
  }

  .prize-pool>div:nth-child(4)>div:last-child>div:first-child>div>div:first-child{
      width: 52px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  .prize-pool>div:nth-child(4)>div:last-child>div:first-child>div>input{
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      width: 107px;
      height: 25px;
      margin-left: 27px;
      margin-bottom: 5.5px;

      text-align: center;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  .prize-pool>div:nth-child(4)>div:last-child>div:last-child>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-top: 26px;
      margin-bottom: 12px;
  }

  .prize-pool>div:nth-child(4)>div:last-child>div:last-child>.form_radio{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
  }

  #tournCheck26{
      display: none;
  }

/* voting */
  .voting{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .voting>div:first-child{
      margin-left: -14px;
  }

  .voting>div{
      display: flex;
      align-items: center;
      width: 108%;
  }

  .voting>div:nth-child(2){
      margin-bottom: 16px;
  }

  .voting>div>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .voting>div>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 100%;
      color: #CCCDCD;
  }

  #tournCheck6{
      display: none;
  }

  #tournCheck7{
      display: none;
  }

/* Additional req */
  .add-req{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .add-req>div:first-child{
      margin-left: -14px;
  }

  .add-req>div:last-child{
     display: flex;
  }

  .add-req>div:last-child>div>div{
      display: flex;
      
  }

  .add-req>div:last-child>div>div>div:nth-child(2){
      margin-top: 2px;

  }

  .add-req>div:last-child>div>div{
      margin-bottom: 15px;
  }

  .add-req>div:last-child>div>div>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .add-req>div:last-child>div>div>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 100%;
      color: #CCCDCD;
  }

  .add-req>div:last-child>div:last-child{
      margin-top: -12px;
  }

  .add-req>div:last-child>div:last-child>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      display: flex;
      align-items: center;
  }

  .add-req>div:last-child>div:last-child>div>button{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #0A61E1;
      background: #1A222D;
      width: 145px;
      height: 40px;

      margin-left: 8px;
  }

  .add-req>div:last-child>div:last-child>div>input{
      width: 176px;
      height: 25px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      margin-left: 10px;

        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #CCCDCD;

        padding-left: 16px;
  }

    .add-req>div:last-child>div:last-child>div:last-child>input{
        margin-left: 12px;
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 100%;
        color: #CCCDCD;

        padding-left: 16px;
  }

    #tournCheck8{
      display: none;
  }
    #tournCheck9{
      display: none;
  }
    #tournCheck10{
      display: none;
  }
    #tournCheck11{
      display: none;
  }
    #tournCheck12{
      display: none;
  }
    #tournCheck13{
      display: none;
  }

/* extra */

  .extra{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .extra>div:first-child{
      margin-left: -14px;
  }

  .extra>div:nth-child(2)>div>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-bottom: 12px;
  }

  .extra>div:nth-child(2)>div>input{
      width: 512px;
      height: 40px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      margin-bottom: 17px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
      padding-left: 16px;
  }

  .extra>div:nth-child(3){
      display: flex;
  }

  .extra>div:nth-child(3)>div:first-child>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #F5F5F5;

      margin-bottom: 14px;
  }

  .extra>div:nth-child(3)>div:first-child>div{
      display: flex;
      align-items: center;
  }

  .extra>div:nth-child(3)>div:first-child>div>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .extra>div:nth-child(3)>div:first-child>div>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #67707A;
  }

  .add-req>div:last-child>div>div>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 100%;
      color: #CCCDCD;
  }

  /* *** */

  .extra>div:nth-child(3)>div:last-child{
      margin-left: 92px;
  }

  .extra>div:nth-child(3)>div:last-child>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #F5F5F5;

      margin-bottom: 14px;
  }

  .extra>div:nth-child(3)>div:last-child>div{
      display: flex;
      align-items: center;
  }

  .extra>div:nth-child(3)>div:last-child>div>div:first-child{
      width: 18px;
      height: 18px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;
      cursor: pointer;

      margin-right: 8px;
  }

  .extra>div:nth-child(3)>div:last-child>div>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #67707A;
  }

    .extra>div:nth-child(4)>div>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-bottom: 12px;
  }

  .extra>div:nth-child(4)>div:first-child>div{
      margin-top: 27px;
  }

  .extra>div:nth-child(4)>div>input{
      width: 512px;
      height: 40px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      margin-bottom: 11px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
      padding-left: 16px;
  }

  .extra>div:nth-child(4)>div:last-child>input{
      margin-bottom: 0px;
  }

  #tournCheck14{
      display: none;
  }
  #tournCheck15{
      display: none;
  }
  #tournCheck16{
      display: none;
  }
  #tournCheck17{
      display: none;
  }
    #tournCheck18{
      display: none;
  }
  #tournCheck19{
      display: none;
  }
    #tournCheck20{
      display: none;
  }
    #tournCheck21{
      display: none;
  }
    #tournCheck22{
      display: none;
  }
    #tournCheck23{
      display: none;
  }
    #tournCheck24{
      display: none;
  }
      #tournCheck25{
      display: none;
  }

/* Streams */

  .streams{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .streams>div:first-child{
      margin-left: -14px;
  }

  .streams>div:nth-child(2)>div{
      display: flex;
      flex-direction: column;
  }

    .streams>div:nth-child(2)>div>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-bottom: 12px;
  }

  .streams>div:nth-child(2)>div>input{
      width: 512px;
      height: 40px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      margin-bottom: 12px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
      
      padding-left: 16px;
  }

  .streams>div:nth-child(2)>div>select{
      width: 160px;
      height: 40px;
      background: #0F1215;
      border: 2px solid #20252B;
      border-radius: 4px;

      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: url('../assets/dropdown-2.png') no-repeat;
      background-position: 130px;

      margin-bottom: 44px;

      align-self: flex-end;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;
      
      padding-left: 16px;
  }

  .streams>div:nth-child(2)>div>button{
      background: #1A222D;
      padding: 16px 44px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #F5F5F5;

      width: 195px;

      margin: 0 auto;
  }

/* Sponsors */

  .sponsors{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .sponsors>div:first-child{
      margin-left: -14px;
  }

  .sponsors>div>div{
      display: flex;
      justify-content: space-between;
  }

  .sponsors>div>div>input{
    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;
    border-radius: 4px;
    width: 355px;
    height: 40px;
    padding-left: 16px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;

  }

  .sponsors>div>div>button{
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

  .sponsors>div>div:first-child{
      margin-bottom: 12px;
  }

  .sponsors>div{
      margin-bottom: 16px;
  }

  .sponsors>div:first-child{
      margin-bottom: 44px;
  }

  .sponsors>div:last-child{
      display: flex;
      align-self: center;
  }

  .sponsors>div>button{
      background: #1A222D;
      padding: 16px 44px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #F5F5F5;

      width: 205px;
      margin-top: 35px;

      cursor: pointer;
  }



/* Rules */
  
    .rules{
     display: flex;
     flex-direction: column;
     background: #0F1215;
     border: 1px solid #20252B;
     box-sizing: border-box;
     padding: 44px 44px;
     width: 600px;
     margin: 0 auto;
     margin-bottom: 14px;
  }

  .rules>div:first-child{
      margin-left: -14px;
  }

  .rules>div>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      margin-bottom: 12px;
  }

  .rules>div>textarea{
      width: 512px;
      height: 348px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #CCCDCD;

      padding: 12px 16px;

      resize: none;
  }

/* three buttons */

  .three-buttons{
      display: flex;
      justify-content: center;
  }

  .three-buttons>button{

      background: #1A222D;
      margin-right: 33px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #F5F5F5;
      margin-top: 14px;
      margin-bottom: 78px;

      cursor: pointer;
  }

  .three-buttons>button:first-child{
      width: 188px;
      height: 51px;
  }

  .three-buttons>button:nth-child(2){
      width: 187px;
      height: 51px;
  }

  .three-buttons>button:last-child{
      margin-right: 0px;
      width: 159px;
      height: 51px;
  }

/* */

  .tournCheck{
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
  }

  .img{
    border: 2px solid #20252B;
    margin-top: 10px;
    width: 128px; 
    height: 128px; 
 }

   .regActive{
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;
  }

  @media(max-width: 576px){
      .basic-info{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -30px;
      }
      .game-info{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -75px;
      }
      .registration{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -75px;
      }
      .if-paid{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -30px; 
      }
      .player-list{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -15px;
      }
      .leagues{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -20px;
      }
      .prize-pool{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -30px;
      }
      .voting{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -30px;
      }
      .add-req{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -20px;
      }
      .extra{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -60px;
      }
      .streams{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -70px;
      }
      .sponsors{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -65px;
      }
      .rules{
          transform: scale(0.9);  
          margin-left: -22px; 
          margin-top: -65px;
      }

      .three-buttons{
          max-width: 500px;
          margin-left: 35px;
          margin-bottom: 50px;
      }

      #body{
          overflow-x: hidden;
      }
  }

</style>
