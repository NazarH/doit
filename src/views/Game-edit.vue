<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
        <div class='basic-info' >
            <div class='basic'>Basic Info</div>
            <div>
                <div>Game Name*</div>
                <input type='text'  v-bind:value='game.gameName'
                @input='game.gameName = $event.target.value'>
            </div>
            <div>
                <div>URL</div>
                <div><div>Doit.gg/games</div><input type='text'
                v-bind:value='game.gameURL' disabled></div>
            </div>
            <div>
                  <div>Active</div>
                  <div class="form_radio">
	                <input id="radio-5" type="radio" name="radio2" value='No' v-model='game.gameActOrNot'> 
	                <label for="radio-5">No</label>
                  </div>
                  <div class="form_radio">
	                <input id="radio-6" type="radio" name="radio2" value='Yes' v-model='game.gameActOrNot'>
	                <label for="radio-6">Yes</label>
                  </div>
            </div>
            <div>
                <div>Description</div>
                <textarea placeholder='You can write here somebody about your tournament...'
                v-bind:value='game.gameDesc' @input='game.gameDesc = $event.target.value'></textarea>
            </div>
             
        </div>
        <div class='sponsors'>
            <div class='basic'>Capsules</div>
            <div>
                <div>Main Banner 387x500*</div>
                <div>
                    <input type='text' placeholder='banner url' id="tempsURL1" :value='game.gameBanner' disabled>
                    <input type='file' accept="image/*" id="sp1" style='display: none' @change="addCapsPhot1($event)">
                    <button @click='addNewPhot1()'>UPLOAD</button>
                </div>
                <img :src='game.gameBanner' id="imgSpons1" class='img'>
            </div>
            <div>
                <div>Mobile Banner 329x129*</div>
                <div>
                    <input type='text' placeholder='banner url' id="tempsURL2" :value='game.gameMobile' disabled>
                    <input type='file' accept="image/*" id="sp2" style='display: none' @change="addCapsPhot2($event)">
                    <button @click='addNewPhot2()'>UPLOAD</button>
                </div>
                <img :src='game.gameMobile' id="imgSpons1" class='img'>
            </div>
            <div>
                <div>Game icon 32x32*</div>
                <div>
                    <input type='text' placeholder='banner url' id="tempsURL3" :value='game.gameIcon' disabled>
                    <input type='file' accept="image/*" id="sp3" style='display: none' @change="addCapsPhot3($event)">
                    <button @click='addNewPhot3()'>UPLOAD</button>
                </div>
                <img :src='game.gameIcon' id="imgSpons1" class='img'>
            </div>
            <div>
                <div>Game logo 253x45*</div>
                <div>
                    <input type='text' placeholder='banner url' id="tempsURL4" :value='game.gameLogo253' disabled>
                    <input type='file' accept="image/*" id="sp4" style='display: none' @change="addCapsPhot4($event)">
                    <button @click='addNewPhot4()'>UPLOAD</button>
                </div>
                <img :src='game.gameLogo253' id="imgSpons1" class='img'>
            </div>
            <div>
                <div>Game background 2206 x 2278</div>
                <div>
                    <input type='text' placeholder='banner url' id="tempsURL5" :value='game.gameBack' disabled>
                    <input type='file' accept="image/*" id="sp5" style='display: none' @change="addCapsPhot5($event)">
                    <button @click='addNewPhot5()'>UPLOAD</button>
                </div>
                <img :src='game.gameBack' id="imgSpons1" class='img'>
            </div>
            <div>
                <div>Game logo 64x64*</div>
                <div>
                    <input type='text' placeholder='banner url' id="tempsURL6" :value='game.gameLogo64' disabled>
                    <input type='file' accept="image/*" id="sp6" style='display: none' @change="addCapsPhot6($event)">
                    <button @click='addNewPhot6()'>UPLOAD</button>
                </div>
                <img :src='game.gameLogo64' id="imgSpons1" class='img'>
            </div>
        </div>
        <div class='game-info'>
            <div class='basic'>Toruanment system</div>
            <div>
                <div>
                  <div>Active</div>
                  <div class="form_radio">
	                <input id="radio-1" type="radio" name="radio" value='No' v-model='game.gameTActive'> 
	                <label for="radio-1">No</label>
                  </div>
                  <div class="form_radio">
	                <input id="radio-2" type="radio" name="radio" value='Yes' v-model='game.gameTActive'>
	                <label for="radio-2">Yes</label>
                  </div>
                </div>
                <div>Servers system</div>
                <select v-model='game.gameServerS'>
                    <option value='Dota 2'>Dota 2</option>
                    <option value='CS:GO'>CS:GO</option>
                    <option value='Valorant'>Valorant</option>
                    <option value='WarCraft 3'>WarCraft 3</option>
                    <option value='StarCraft 2'>StarCraft 2</option>
                    <option value='Fifa 2022'>Fifa 2022</option>
                </select>
            </div>
            
        </div>
        <div class='game-info' id='game__info'>
            <div class='basic'>Map Voting</div>
            <div>
                <div>
                  <div>Active</div>
                  <div class="form_radio">
	                <input id="radio-3" type="radio" name="radio1" value='No' v-model='game.gameVActive'> 
	                <label for="radio-3">No</label>
                  </div>
                  <div class="form_radio">
	                <input id="radio-4" type="radio" name="radio1" value='Yes' v-model='game.gameVActive'>
	                <label for="radio-4">Yes</label>
                  </div>
                  <div>Maps</div>
                  <div>
                     <div v-for='(map, index) in game.gameMaps' :key='map.id'>
                        <div>
                           Map {{index + 1}}
                        </div>
                        <div>
                          <input type='text' placeholder='Map name'
                          v-bind:value='map.mapName' @input='map.mapName = $event.target.value' style='color: #CCCDCD;'>
                          <input type='text' placeholder='Logo map 256 x 256' :id='"tempsURLL" + index' :value='map.mapImg' disabled
                          style='color: #CCCDCD;'>
                          <input type='file' accept="image/*" :id='"map" + index' style='display: none' @change="addBtnMapPhot(map, index, $event)">
                          <button @click='addMapPhot(index)'>UPLOAD</button>
                        </div>
                        <img :src='map.mapImg' :id='"imgSponsL" + index' class='img'> 
                     </div>
                     <button @click='addMap'>+ Add Map</button>
                  </div>
                </div>
                
            </div>
            
        </div>
        <div class='three-buttons'>
           <button @click='deleteGame'>Delete Game</button>
           <button @click='saveNewGame'>Save Game</button>
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
           gamesList: [],

           imgData1: null,
           imgData2: null,
           imgData3: null,
           imgData4: null,
           imgData5: null,
           imgData6: null,

           game: JSON.parse(localStorage.getItem("game-edit"))
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
   //save GAME

     saveNewGame(){
        const storageRef = ref(this.storage, `games-images/` + this.createGame.gameBannerName);
        uploadBytes(storageRef, this.imgData1).then((snapshot) => {
           console.log('Файл завантажено');
        });
        const storageRef2 = ref(this.storage, `games-images/` + this.createGame.gameMobileName);
        uploadBytes(storageRef2, this.imgData2).then((snapshot) => {
           console.log('Файл завантажено');
        });
        const storageRef3 = ref(this.storage, `games-images/` + this.createGame.gameIconName);
        uploadBytes(storageRef3, this.imgData3).then((snapshot) => {
           console.log('Файл завантажено');
        });
        const storageRef4 = ref(this.storage, `games-images/` + this.createGame.gameLogo253Name);
        uploadBytes(storageRef4, this.imgData4).then((snapshot) => {
           console.log('Файл завантажено');
        });
        const storageRef5 = ref(this.storage, `games-images/` + this.createGame.gameBackName);
        uploadBytes(storageRef5, this.imgData5).then((snapshot) => {
           console.log('Файл завантажено');
        });
        const storageRef6 = ref(this.storage, `games-images/` + this.createGame.gameLogo64Name);
        uploadBytes(storageRef6, this.imgData6).then((snapshot) => {
           console.log('Файл завантажено');
        });
        

        for(let i = 0; i < this.createGame.gameMaps.length; i++){
             const storageRef3 = ref(this.storage, `games-images/` + this.createGame.gameMaps[i].mapIdName);
             uploadBytes(storageRef3, this.createGame.gameMaps[i].mapImg).then((snapshot) => {
                console.log('Файл завантажено');
        });
        }

        setTimeout(() => {
           getDownloadURL(ref(this.storage, `games-images/` + this.createGame.gameBannerName)).then((url) => {
                  this.createGame.gameBanner = url;
           });
           getDownloadURL(ref(this.storage, `games-images/` + this.createGame.gameMobileName)).then((url) => {
                  this.createGame.gameMobile = url;
           });
           getDownloadURL(ref(this.storage, `games-images/` + this.createGame.gameIconName)).then((url) => {
                  this.createGame.gameIcon = url;
           });
           getDownloadURL(ref(this.storage, `games-images/` + this.createGame.gameLogo253Name)).then((url) => {
                  this.createGame.gameLogo253 = url;
           });
           getDownloadURL(ref(this.storage, `games-images/` + this.createGame.gameBackName)).then((url) => {
                  this.createGame.gameBack = url;
           }); 
           getDownloadURL(ref(this.storage, `games-images/` + this.createGame.gameLogo64Name)).then((url) => {
                  this.createGame.gameLogo64 = url;
           });        
           

           for(let i = 0; i < this.createGame.gameMaps.length; i++){
               getDownloadURL(ref(this.storage, `games-images/` + this.createGame.gameMaps[i].mapIdName)).then((url) => {
                    this.createGame.gameMaps[i].mapImg = url;
               }); 
           };

           setTimeout(() => {

           const dbRef = fireRef(getDatabase());
           get(child(dbRef, `games/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.gamesList = tempArr;

                this.gamesList.push(this.createGame);

               const db = getDatabase();

              set(fireRef(db, `games/`), this.gamesList);

             this.createGame = {
               gameIdURL: Date.now(),

               gameName: '',
               gameURL: '',
               gameDesc: '',
               gameBanner: null,
               gameBannerName: '',
               gameMobile: null,
               gameMobileName: '',
               gameIcon: null,
               gameIconName: '',
               gameLogo253: null,
               gameLogo253Name: '',
               gameBack: null,
               gameBackName: '',
               gameLogo64: null,
               gameLogo64Name: '',

               gameTActive: '',
               gameServerS: '',

               gameVActive: '',
               gameMaps: []
             }

              window.location.href = '/admin-pannel';  
             });    
           }, 3000); 
        }, 1000);   
     },
   //add map
     addMap(){
          this.createGame.gameMaps.push({
              mapName: '',
              mapImg: '',
              mapIdName: Date.now()
          });
     },
     addMapPhot(index){
         document.getElementById("map" + index).click();
     },
     addBtnMapPhot(map, index, event){
          let img = document.getElementById("imgSponsL" + index);
          map.mapImg = event.target.files[0];

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
            document.getElementById("tempsURLL" + index).value = this.tempSrc;
          }
          reader.readAsDataURL(map.mapImg);
          this.storage = getStorage();
          
          document.getElementById("imgSponsL" + index).style='display: block;'; 
       },
   //add phots
    
    addNewPhot1(){
        document.getElementById("sp1").click();
    },
    addCapsPhot1(event){
          let img = document.getElementById("imgSpons1");
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
            document.getElementById("tempsURL1").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData1);
          this.storage = getStorage();
          
          document.getElementById("imgSpons1").style='display: block;';

          this.createGame.gameBannerName = Date.now();  
    },

    addNewPhot2(){
        document.getElementById("sp2").click();
    },
    addCapsPhot2(event){
          let img = document.getElementById("imgSpons2");
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
            document.getElementById("tempsURL2").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData2);
          this.storage = getStorage();
          
          document.getElementById("imgSpons2").style='display: block;';

          this.createGame.gameMobileName = Date.now(); 
    },

    addNewPhot3(){
        document.getElementById("sp3").click();
    },
    addCapsPhot3(event){
          let img = document.getElementById("imgSpons3");
          this.imgData3 = event.target.files[0];

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
            document.getElementById("tempsURL3").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData3);
          this.storage = getStorage();
          
          document.getElementById("imgSpons3").style='display: block;';

          this.createGame.gameIconName = Date.now();  
    },

    addNewPhot4(){
        document.getElementById("sp4").click();
    },
    addCapsPhot4(event){
          let img = document.getElementById("imgSpons4");
          this.imgData4 = event.target.files[0];

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
            document.getElementById("tempsURL4").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData4);
          this.storage = getStorage();
          
          document.getElementById("imgSpons4").style='display: block;'; 

          this.createGame.gameLogo253Name = Date.now(); 
    },

    addNewPhot5(){
        document.getElementById("sp5").click();
    },
    addCapsPhot5(event){
          let img = document.getElementById("imgSpons5");
          this.imgData5 = event.target.files[0];

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
            document.getElementById("tempsURL5").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData5);
          this.storage = getStorage();
          
          document.getElementById("imgSpons5").style='display: block;'; 

          this.createGame.gameBackName = Date.now();
    },

    addNewPhot6(){
        document.getElementById("sp6").click();
    },
    addCapsPhot6(event){
          let img = document.getElementById("imgSpons6");
          this.imgData6 = event.target.files[0];

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
            document.getElementById("tempsURL6").value = this.tempSrc;
          }
          reader.readAsDataURL(this.imgData6);
          this.storage = getStorage();
          
          document.getElementById("imgSpons6").style='display: block;'; 

          this.createGame.gameLogo64Name = Date.now();
    },

   //

    deleteGame(){
        for(let i = 0; i < this.gamesList.length; i++){
            if(this.gamesList[i].gameURL === this.game.gameURL){
                this.gamesList.splice(i, 1);
            }
        }

        const db = getDatabase();
        set(fireRef(db, `games/`), this.gamesList);

        window.location.href = '/admin-pannel'; 
    },
    firstGameEditFunc(){
        const dbRef = fireRef(getDatabase());
        get(child(dbRef, `games/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.gamesList = tempArr;
        });
    }
     
   //
   },
   mounted(){
       this.firstGameEditFunc()
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

  .basic-info>div:nth-child(2)>div:first-child{
      margin-top: 0px;
  }

   .basic-info>div:nth-child(3)>div:last-child{
    display: flex;
    align-items: center;
 }

 .basic-info>div:nth-child(3)>div:last-child>div{
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

  .basic-info>div:nth-child(3)>div:last-child>input{
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

 .basic-info>div:nth-child(3)>div:last-child>input{
    margin-bottom: 0px;
    width: 418px;
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

  .sponsors>div{
      display: flex;
      flex-direction: column;
  }

  .sponsors>div:nth-child(2)>div:nth-child(2){
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

    margin-left: 16px;
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

  .game-info>div:nth-child(2)>div:first-child>div:first-child{
      margin-bottom: 12px;
  }

  .game-info>div:nth-child(2)>div:nth-child(2){
      margin-bottom: 10px;
  }

 .form_radio {
 	margin-bottom: 10px;
 }

 .form_radio input[type=radio] {
	display: none;
 }

 .form_radio:last-child{
     margin-bottom: 30px;
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

/* 2 */

 .game-info>div:nth-child(2)>div:first-child>div:nth-child(4){
      margin-top: 25px;
  }

  .game-info>div:nth-child(2)>div:first-child>div:nth-child(5)>button{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 44px;
      background: #1A222D;

      font-family: 'Rubik';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #F5F5F5;

      margin: 0 auto;
      margin-top: 40px;

      cursor: pointer;
  }

  .game-info>div:nth-child(2)>div:first-child>div:nth-child(5)>div>div:nth-child(1){
      text-align: center;
      margin-top: 14px;
  }

  .game-info>div:nth-child(2)>div:first-child>div:nth-child(5)>div>div:nth-child(2){
      display: flex;
      align-items: center;

      margin-top: 11px;
  }

  .game-info>div:nth-child(2)>div:first-child>div:nth-child(5)>div>div:nth-child(2)>input{
      width: 161px;
      height: 40px;
      background: #0F1215;
      border: 2px solid #20252B;
      box-sizing: border-box;
      border-radius: 4px;

      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #3C434D;

      padding-left: 6px;

      margin-right: 7px;
  }

  .game-info>div:nth-child(2)>div:first-child>div:nth-child(5)>div>div:nth-child(2)>input:nth-child(2){
      width: 171px;
  }

  .game-info>div:nth-child(2)>div:first-child>div:nth-child(5)>div>div:nth-child(2)>button{
      width: 157px;
      height: 39px;
      background: #1A222D;

      font-family: 'Rubik';
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      color: #F5F5F5;

      margin-left: 8px;

      cursor: pointer;
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
          margin-left: -20px; 
          margin-top: -38px;
     }
     .sponsors{
          transform: scale(0.9);  
          margin-left: -20px; 
          margin-top: -88px;
     }
     .game-info{
          transform: scale(0.9);  
          margin-left: -20px; 
          margin-top: -70px;
     }

     #game__info{
         transform: scale(0.9);  
          margin-left: -20px; 
          margin-top: -35px;
     }

     .three-buttons{
         max-width: 540px;
         margin-top: -30px;
         margin-bottom: 75px;
     }
 }

</style>
