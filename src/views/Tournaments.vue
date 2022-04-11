<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
        <div class='tourn'>
           <div>
               TOURNAMENTS
           </div>
           <div class='tourn__items'>
               <div>
                <div class='tourn__card' v-for='(tournament, index) in tournaments' :key='tournament.id'>
                  <img :src='tournament.tournMainBanner'>
                  <div>
                     <div><router-link :to="{name:'Tournament',params:{tournURL:tournament.tournURL}}" @click='storageProfile(tournament)'>{{tournament.tournGame}} - {{tournament.tournMode}} - {{tournament.tournStartTime1}}</router-link>
                     </div> 
                     <table>
                        <tr class='tourn__tf'>
                           <td>Prize</td>
                           <td>Entry fee</td>
                           <td>platform</td>
                           <td>Slots</td>
                           <td>Mode</td>
                           <td>Server</td>
                        </tr>
                         <tr class='tourn__ts'>
                           <td>{{tournament.tournPrizePool}}$</td>
                           <td>{{tournament.tournRegistr}}</td>
                           <td>{{tournament.tournPlatform}}</td>
                           <td>{{tournament.tournPlayersList.length}} / {{tournament.tournMode === '1 vs 1' ? '2' : tournament.tournMode === '2 vs 2' ? '4' : tournament.tournMode === '5 vs 5' ? '10' : 'none'}}</td>
                           <td>{{tournament.tournMode}}</td>
                           <td>{{tournament.tournRegion}}</td>
                        </tr>
                     </table>
                  </div>
                </div>
               </div>
               <div>
                  
                  <div class='tourn__filt'>
                   <div>
                      Filters <span @click='clearAllFilt'>reset</span>
                   </div>
                   <div class='tourn__check'>
                      <div>Game mode</div>
                      <div>
                         <div><div class='checkst' @click='filterCheck1'><img src='../assets/check2.png' id='filterCheck1'></div>1v1</div>
                         <div><div class='checkst' @click='filterCheck2'><img src='../assets/check2.png' id='filterCheck2'></div>2v2</div>
                         <div><div class='checkst' @click='filterCheck3'><img src='../assets/check2.png' id='filterCheck3'></div>5v5</div>
                      </div>
                   </div>
                   <!-- 
                   <div class='tourn__check' style='margin-top: 24px;'>
                      <div>Status</div>
                      <div>
                         <div><div class='checkst'></div>Upcoming</div>
                         <div><div class='checkst'></div>Past</div>
                      </div>
                   </div>
                   -->
                   <div class='tourn__check2'>
                       <div>Games</div>
                      <div>
                         <div><div class='checkst' @click='filterCheck4'><img src='../assets/check2.png' id='filterCheck4'></div><div>Dota II</div></div>
                         <div><div class='checkst' @click='filterCheck5'><img src='../assets/check2.png' id='filterCheck5'></div><div>CS:GO</div></div>
                         <div><div class='checkst' @click='filterCheck6'><img src='../assets/check2.png' id='filterCheck6'></div><div>Valorant</div></div>
                         <div><div class='checkst' @click='filterCheck7'><img src='../assets/check2.png' id='filterCheck7'></div><div>WarCraft III</div></div>
                         <div><div class='checkst' @click='filterCheck8'><img src='../assets/check2.png' id='filterCheck8'></div><div>StarCraft II</div></div>
                         <div><div class='checkst' @click='filterCheck9'><img src='../assets/check2.png' id='filterCheck9'></div><div>Fifa 2022</div></div>
                      </div>
                   </div>
                   <div class='tourn__check2'>
                       <div>Platform</div>
                      <div>
                         <div><div class='checkst' @click='filterCheck10'><img src='../assets/check2.png' id='filterCheck10'></div><div>PC</div></div>
                         <div><div class='checkst' @click='filterCheck11'><img src='../assets/check2.png' id='filterCheck11'></div><div>XBOX ONE</div></div>
                         <div><div class='checkst' @click='filterCheck12'><img src='../assets/check2.png' id='filterCheck12'></div><div>PS4</div></div>
                         <div><div class='checkst' @click='filterCheck13'><img src='../assets/check2.png' id='filterCheck13'></div><div>Nintendo Switch</div></div>
                         <div><div class='checkst' @click='filterCheck14'><img src='../assets/check2.png' id='filterCheck14'></div><div>PS5</div></div>
                         <div><div class='checkst' @click='filterCheck15'><img src='../assets/check2.png' id='filterCheck15'></div><div>Xbox Series</div></div>
                      </div>
                   </div>
                   <div class='tourn__check2'>
                       <div>Server region</div>
                      <div>
                         <div><div class='checkst' @click='filterCheck16'><img src='../assets/check2.png' id='filterCheck16'></div><div>europe nordic</div></div>
                         <div><div class='checkst' @click='filterCheck17'><img src='../assets/check2.png' id='filterCheck17'></div><div>Europe West</div></div>
                         <div><div class='checkst' @click='filterCheck18'><img src='../assets/check2.png' id='filterCheck18'></div><div>Australia</div></div>
                         <div><div class='checkst' @click='filterCheck19'><img src='../assets/check2.png' id='filterCheck19'></div><div>china</div></div>
                         <div><div class='checkst' @click='filterCheck20'><img src='../assets/check2.png' id='filterCheck20'></div><div>Asia</div></div>
                         <div><div class='checkst' @click='filterCheck21'><img src='../assets/check2.png' id='filterCheck21'></div><div>Amercia</div></div>
                      </div>
                   </div>
                   <div class='tourn__check2'>
                       <button @click='filtApply' onclick='onTop.click()'>Filter Apply</button>
                       <a href="#" style='display: none' id='onTop'></a>
                   </div>
                  </div>
               </div>

           </div>
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
         userInfo: this.$store.getters.LOGIN,
         tournaments: [],

         filt1v1: false,
         filt2v2: false,
         filt5v5: false,

         filtDota2: false,
         filtCSGO: false,
         filtValor: false,
         filtWC3: false,
         filtSC2: false,
         filtF22: false,

         filtPC: false,
         filtXOne: false,
         filtPS4: false,
         filtSwitch: false,
         filtPS5: false,
         filtXSer: false,

         filtENord: false,
         filtEWest: false,
         filtAustr: false,
         filtChina: false,
         filtAsia: false,
         filtAmerc: false
      }
   },
   methods:{

   //filter

     filtApply(){
        let filter = {
           filtMode: '',
           filtGame: '',
           filtPlatform: '',
           filtRegion: ''
        };

        if(this.filt1v1 === true){
           filter.filtMode = "1 vs 1";
        }
        if(this.filt2v2 === true){
           filter.filtMode = "2 vs 2";
        }
        if(this.filt3v3 === true){
           filter.filtMode = "3 vs 3";
        }

        if(this.filtDota2 === true){
           filter.filtGame = "Dota 2";
        }
        if(this.filtCSGO === true){
           filter.filtGame = "CS:GO";
        }
        if(this.filtValor === true){
           filter.filtGame = "Valorant";
        }
        if(this.filtWC3 === true){
           filter.filtGame = "WarCraft 3";
        }
        if(this.filtSC2 === true){
           filter.filtGame = "StarCraft 2";
        }
        if(this.filtF22 === true){
           filter.filtGame = "Fifa 2022";
        }

        if(this.filtPC === true){
           filter.filtPlatform = "PC";
        }
        if(this.filtXOne === true){
           filter.filtPlatform = "Xbox One";
        }
        if(this.filtPS4 === true){
           filter.filtPlatform = "PS4";
        }
        if(this.filtSwitch === true){
           filter.filtPlatform = "Switch";
        }
        if(this.filtPS5 === true){
           filter.filtPlatform = "PS5";
        }
        if(this.filtXSer === true){
           filter.filtPlatform = "Series X";
        }

        if(this.filtENord === true){
           filter.filtRegion = "EuropeNord";
        }
        if(this.filtEWest === true){
           filter.filtRegion = "EuropeWest";
        }
        if(this.filtAustr === true){
           filter.filtRegion = "Australia";
        }
        if(this.filtChina === true){
           filter.filtRegion = "China";
        }
        if(this.filtAsia === true){
           filter.filtRegion = "Asia";
        }
        if(this.filtAmerc === true){
           filter.filtRegion = "America";
        }

        for(let i = 0; i < this.tournaments.length; i++){
           if(filter.filtMode !== ''){
               if(filter.filtMode === this.tournaments[i].tournMode){
               } else {
                  this.tournaments.splice(i, 1);
                  i--;
                  continue;
               }
           }
           if(filter.filtGame !== ''){
              if(filter.filtGame === this.tournaments[i].tournGame){
              } else {
                  this.tournaments.splice(i, 1);
                  i--;
                  continue;
              }
           }
           if(filter.filtPlatform !== ''){
              if(filter.filtPlatform === this.tournaments[i].tournPlatform){
              } else {
                  this.tournaments.splice(i, 1);
                  i--;
                  continue;
              }
           }
           if(filter.filtRegion !== ''){
              if(filter.filtRegion === this.tournaments[i].tournRegion){
              } else {
                  this.tournaments.splice(i, 1);
                  i--;
                  continue;
              }
           }
        }

        document.body.scrollTop = 0;
     },

     clearAllFilt(){
         const dbRef = fireRef(getDatabase());
         get(child(dbRef, `tournaments/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.tournaments = tempArr;
         });

        this.filt1v1 = false;
        document.getElementById('filterCheck1').style='display: none'
        this.filt2v2 = false;
        document.getElementById('filterCheck2').style='display: none'
        this.filt5v5 = false;
        document.getElementById('filterCheck3').style='display: none'
        this.filtDota2 = false;
        document.getElementById('filterCheck4').style='display: none'
        this.filtCSGO = false;
        document.getElementById('filterCheck5').style='display: none'
        this.filtValor = false;
        document.getElementById('filterCheck6').style='display: none'
        this.filtWC3 = false;
        document.getElementById('filterCheck7').style='display: none'
        this.filtSC2 = false;
        document.getElementById('filterCheck8').style='display: none'
        this.filtF22 = false;
        document.getElementById('filterCheck9').style='display: none'
        this.filtPC = false;
        document.getElementById('filterCheck10').style='display: none'
        this.filtXOne = false;
        document.getElementById('filterCheck11').style='display: none'
        this.filtPS4 = false;
        document.getElementById('filterCheck12').style='display: none'
        this.filtSwitch = false;
        document.getElementById('filterCheck13').style='display: none'
        this.filtPS5 = false;
        document.getElementById('filterCheck14').style='display: none'
        this.filtXSer = false;
        document.getElementById('filterCheck15').style='display: none'
        this.filtENord = false;
        document.getElementById('filterCheck16').style='display: none'
        this.filtEWest = false;
        document.getElementById('filterCheck17').style='display: none'
        this.filtAustr = false;
        document.getElementById('filterCheck18').style='display: none'
        this.filtChina = false;
        document.getElementById('filterCheck19').style='display: none'
        this.filtAsia = false;
        document.getElementById('filterCheck20').style='display: none'
        this.filtAmerc = false;
        document.getElementById('filterCheck21').style='display: none'
     },

     filterCheck1(){
            if(this.filt1v1 === false){
               this.filt1v1 = true;
               document.getElementById('filterCheck1').style='display: block'

               this.filt2v2 = false;
               document.getElementById('filterCheck2').style='display: none'
               this.filt5v5 = false;
               document.getElementById('filterCheck3').style='display: none'
            } else if(this.filt1v1 === true){
               this.filt1v1 = false;
               document.getElementById('filterCheck1').style='display: none'
            } 
     },
     filterCheck2(){
            if(this.filt2v2 === false){
               this.filt2v2 = true;
               document.getElementById('filterCheck2').style='display: block'

               this.filt5v5 = false;
               document.getElementById('filterCheck3').style='display: none'
               this.filt1v1 = false;
               document.getElementById('filterCheck1').style='display: none'

            } else if(this.filt2v2 === true){
               this.filt2v2 = false;
               document.getElementById('filterCheck2').style='display: none'
            } 
     },
     filterCheck3(){
            if(this.filt5v5 === false){
               this.filt5v5 = true;
               document.getElementById('filterCheck3').style='display: block'

               this.filt2v2 = false;
               document.getElementById('filterCheck2').style='display: none'
               this.filt1v1 = false;
               document.getElementById('filterCheck1').style='display: none'

            } else if(this.filt5v5 === true){
               this.filt5v5 = false;
               document.getElementById('filterCheck3').style='display: none'
            } 
     },

     filterCheck4(){
            if(this.filtDota2 === false){
               this.filtDota2 = true;
               document.getElementById('filterCheck4').style='display: block'

               this.filtCSGO = false;
               document.getElementById('filterCheck5').style='display: none'
               this.filtValor = false;
               document.getElementById('filterCheck6').style='display: none'
               this.filtWC3 = false;
               document.getElementById('filterCheck7').style='display: none'
               this.filtSC2 = false;
               document.getElementById('filterCheck8').style='display: none'
               this.filtF22 = false;
               document.getElementById('filterCheck9').style='display: none'

            } else if(this.filtDota2 === true){
               this.filtDota2 = false;
               document.getElementById('filterCheck4').style='display: none'
            } 
     },
     filterCheck5(){
            if(this.filtCSGO === false){
               this.filtCSGO = true;
               document.getElementById('filterCheck5').style='display: block'

               this.filtValor = false;
               document.getElementById('filterCheck6').style='display: none'
               this.filtWC3 = false;
               document.getElementById('filterCheck7').style='display: none'
               this.filtSC2 = false;
               document.getElementById('filterCheck8').style='display: none'
               this.filtF22 = false;
               document.getElementById('filterCheck9').style='display: none'
               this.filtDota2 = false;
               document.getElementById('filterCheck4').style='display: none'

            } else if(this.filtCSGO === true){
               this.filtCSGO = false;
               document.getElementById('filterCheck5').style='display: none'
            } 
     },
     filterCheck6(){
            if(this.filtValor === false){
               this.filtValor = true;
               document.getElementById('filterCheck6').style='display: block'

               this.filtCSGO = false;
               document.getElementById('filterCheck5').style='display: none'
               this.filtWC3 = false;
               document.getElementById('filterCheck7').style='display: none'
               this.filtSC2 = false;
               document.getElementById('filterCheck8').style='display: none'
               this.filtF22 = false;
               document.getElementById('filterCheck9').style='display: none'
               this.filtDota2 = false;
               document.getElementById('filterCheck4').style='display: none'

            } else if(this.filtValor === true){
               this.filtValor = false;
               document.getElementById('filterCheck6').style='display: none'
            } 
     },
     filterCheck7(){
            if(this.filtWC3 === false){
               this.filtWC3 = true;
               document.getElementById('filterCheck7').style='display: block'

               this.filtCSGO = false;
               document.getElementById('filterCheck5').style='display: none'
               this.filtValor = false;
               document.getElementById('filterCheck6').style='display: none'
               this.filtSC2 = false;
               document.getElementById('filterCheck8').style='display: none'
               this.filtF22 = false;
               document.getElementById('filterCheck9').style='display: none'
               this.filtDota2 = false;
               document.getElementById('filterCheck4').style='display: none'

            } else if(this.filtWC3 === true){
               this.filtWC3 = false;
               document.getElementById('filterCheck7').style='display: none'
            } 
     },
     filterCheck8(){
            if(this.filtSC2 === false){
               this.filtSC2 = true;
               document.getElementById('filterCheck8').style='display: block'

               this.filtCSGO = false;
               document.getElementById('filterCheck5').style='display: none'
               this.filtValor = false;
               document.getElementById('filterCheck6').style='display: none'
               this.filtWC3 = false;
               document.getElementById('filterCheck7').style='display: none'
               this.filtF22 = false;
               document.getElementById('filterCheck9').style='display: none'
               this.filtDota2 = false;
               document.getElementById('filterCheck4').style='display: none'

            } else if(this.filtSC2 === true){
               this.filtSC2 = false;
               document.getElementById('filterCheck8').style='display: none'
            } 
     },
     filterCheck9(){
            if(this.filtF22 === false){
               this.filtF22 = true;
               document.getElementById('filterCheck9').style='display: block'

               this.filtCSGO = false;
               document.getElementById('filterCheck5').style='display: none'
               this.filtValor = false;
               document.getElementById('filterCheck6').style='display: none'
               this.filtWC3 = false;
               document.getElementById('filterCheck7').style='display: none'
               this.filtSC2 = false;
               document.getElementById('filterCheck8').style='display: none'
               this.filtDota2 = false;
               document.getElementById('filterCheck4').style='display: none'

            } else if(this.filtF22 === true){
               this.filtF22 = false;
               document.getElementById('filterCheck9').style='display: none'
            } 
     },

     filterCheck10(){
            if(this.filtPC === false){
               this.filtPC = true;
               document.getElementById('filterCheck10').style='display: block'

               this.filtXOne = false;
               document.getElementById('filterCheck11').style='display: none'
               this.filtPS4 = false;
               document.getElementById('filterCheck12').style='display: none'
               this.filtSwitch = false;
               document.getElementById('filterCheck13').style='display: none'
               this.filtPS5 = false;
               document.getElementById('filterCheck14').style='display: none'
               this.filtXSer = false;
               document.getElementById('filterCheck15').style='display: none'

            } else if(this.filtPC === true){
               this.filtPC = false;
               document.getElementById('filterCheck10').style='display: none'
            } 
     },
     filterCheck11(){
            if(this.filtXOne === false){
               this.filtXOne = true;
               document.getElementById('filterCheck11').style='display: block'

               this.filtPS4 = false;
               document.getElementById('filterCheck12').style='display: none'
               this.filtSwitch = false;
               document.getElementById('filterCheck13').style='display: none'
               this.filtPS5 = false;
               document.getElementById('filterCheck14').style='display: none'
               this.filtXSer = false;
               document.getElementById('filterCheck15').style='display: none'
               this.filtPC = false;
               document.getElementById('filterCheck10').style='display: none'

            } else if(this.filtXOne === true){
               this.filtXOne = false;
               document.getElementById('filterCheck11').style='display: none'
            } 
     },
     filterCheck12(){
            if(this.filtPS4 === false){
               this.filtPS4 = true;
               document.getElementById('filterCheck12').style='display: block'

               this.filtXOne = false;
               document.getElementById('filterCheck11').style='display: none'
               this.filtSwitch = false;
               document.getElementById('filterCheck13').style='display: none'
               this.filtPS5 = false;
               document.getElementById('filterCheck14').style='display: none'
               this.filtXSer = false;
               document.getElementById('filterCheck15').style='display: none'
               this.filtPC = false;
               document.getElementById('filterCheck10').style='display: none'

            } else if(this.filtPS4 === true){
               this.filtPS4 = false;
               document.getElementById('filterCheck12').style='display: none'
            } 
     },
     filterCheck13(){
            if(this.filtSwitch === false){
               this.filtSwitch = true;
               document.getElementById('filterCheck13').style='display: block'

               this.filtXOne = false;
               document.getElementById('filterCheck11').style='display: none'
               this.filtPS4 = false;
               document.getElementById('filterCheck12').style='display: none'
               this.filtPS5 = false;
               document.getElementById('filterCheck14').style='display: none'
               this.filtXSer = false;
               document.getElementById('filterCheck15').style='display: none'
               this.filtPC = false;
               document.getElementById('filterCheck10').style='display: none'

            } else if(this.filtSwitch === true){
               this.filtSwitch = false;
               document.getElementById('filterCheck13').style='display: none'
            } 
     },
     filterCheck14(){
            if(this.filtPS5 === false){
               this.filtPS5 = true;
               document.getElementById('filterCheck14').style='display: block'

               this.filtXOne = false;
               document.getElementById('filterCheck11').style='display: none'
               this.filtPS4 = false;
               document.getElementById('filterCheck12').style='display: none'
               this.filtSwitch = false;
               document.getElementById('filterCheck13').style='display: none'
               this.filtXSer = false;
               document.getElementById('filterCheck15').style='display: none'
               this.filtPC = false;
               document.getElementById('filterCheck10').style='display: none'

            } else if(this.filtPS5 === true){
               this.filtPS5 = false;
               document.getElementById('filterCheck14').style='display: none'
            } 
     },
     filterCheck15(){
            if(this.filtXSer === false){
               this.filtXSer = true;
               document.getElementById('filterCheck15').style='display: block'

               this.filtXOne = false;
               document.getElementById('filterCheck11').style='display: none'
               this.filtPS4 = false;
               document.getElementById('filterCheck12').style='display: none'
               this.filtSwitch = false;
               document.getElementById('filterCheck13').style='display: none'
               this.filtPS5 = false;
               document.getElementById('filterCheck14').style='display: none'
               this.filtPC = false;
               document.getElementById('filterCheck10').style='display: none'

            } else if(this.filtXSer === true){
               this.filtXSer = false;
               document.getElementById('filterCheck15').style='display: none'
            } 
     },

     filterCheck16(){
            if(this.filtENord === false){
               this.filtENord = true;
               document.getElementById('filterCheck16').style='display: block'

               this.filtEWest = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtChina = false;
               document.getElementById('filterCheck19').style='display: none'
               this.filtAsia = false;
               document.getElementById('filterCheck20').style='display: none'
               this.filtAmerc = false;
               document.getElementById('filterCheck21').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck18').style='display: none'

            } else if(this.filtENord === true){
               this.filtENord = false;
               document.getElementById('filterCheck16').style='display: none'
            } 
     },
     filterCheck17(){
            if(this.filtEWest === false){
               this.filtEWest = true;
               document.getElementById('filterCheck17').style='display: block'

               this.filtAustr = false;
               document.getElementById('filterCheck18').style='display: none'
               this.filtChina = false;
               document.getElementById('filterCheck19').style='display: none'
               this.filtAsia = false;
               document.getElementById('filterCheck20').style='display: none'
               this.filtAmerc = false;
               document.getElementById('filterCheck21').style='display: none'
               this.filtENord = false;
               document.getElementById('filterCheck16').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck18').style='display: none'

            } else if(this.filtEWest === true){
               this.filtEWest = false;
               document.getElementById('filterCheck17').style='display: none'
            } 
     },
     filterCheck18(){
            if(this.filtAustr === false){
               this.filtAustr = true;
               document.getElementById('filterCheck18').style='display: block'

               this.filtEWest = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtChina = false;
               document.getElementById('filterCheck19').style='display: none'
               this.filtAsia = false;
               document.getElementById('filterCheck20').style='display: none'
               this.filtAmerc = false;
               document.getElementById('filterCheck21').style='display: none'
               this.filtENord = false;
               document.getElementById('filterCheck16').style='display: none'
               

            } else if(this.filtAustr === true){
               this.filtAustr = false;
               document.getElementById('filterCheck18').style='display: none'
            } 
     },
     filterCheck19(){
            if(this.filtChina === false){
               this.filtChina = true;
               document.getElementById('filterCheck19').style='display: block'

               this.filtEWest = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtAsia = false;
               document.getElementById('filterCheck20').style='display: none'
               this.filtAmerc = false;
               document.getElementById('filterCheck21').style='display: none'
               this.filtENord = false;
               document.getElementById('filterCheck16').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck18').style='display: none'

            } else if(this.filtChina === true){
               this.filtChina = false;
               document.getElementById('filterCheck19').style='display: none'
            } 
     },
     filterCheck20(){
            if(this.filtAsia === false){
               this.filtAsia = true;
               document.getElementById('filterCheck20').style='display: block'

               this.filtEWest = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtChina = false;
               document.getElementById('filterCheck19').style='display: none'
               this.filtAmerc = false;
               document.getElementById('filterCheck21').style='display: none'
               this.filtENord = false;
               document.getElementById('filterCheck16').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck18').style='display: none'

            } else if(this.filtAsia === true){
               this.filtAsia = false;
               document.getElementById('filterCheck20').style='display: none'
            } 
     },
     filterCheck21(){
            if(this.filtAmerc === false){
               this.filtAmerc = true;
               document.getElementById('filterCheck21').style='display: block'

               this.filtEWest = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck17').style='display: none'
               this.filtChina = false;
               document.getElementById('filterCheck19').style='display: none'
               this.filtAsia = false;
               document.getElementById('filterCheck20').style='display: none'
               this.filtENord = false;
               document.getElementById('filterCheck16').style='display: none'
               this.filtAustr = false;
               document.getElementById('filterCheck18').style='display: none'

            } else if(this.filtAmerc === true){
               this.filtAmerc = false;
               document.getElementById('filterCheck21').style='display: none'
            } 
     },
   //
      removeBtn(){
         
      },
      storageProfile(tournament){
         localStorage.setItem('tournament', JSON.stringify(tournament));
      },
      storageProfile2(tournament){
         localStorage.setItem('tournament-edit', JSON.stringify(tournament));
      },
      tournamentsFirstFunc(){
         const dbRef = fireRef(getDatabase());
         get(child(dbRef, `tournaments/`)).then((snapshot) => {
                let tempArr = [];
                snapshot.forEach(element => {
                   tempArr.push(element.val());
                });
                this.tournaments = tempArr;
         });
      },
   },
   mounted(){
      this.tournamentsFirstFunc()
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

 .checkst{
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
 }

 .tourn__check2>button{
    width: 264px;
    height: 48px;
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 2px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    text-decoration: none;

    margin-left: 15px;

    cursor: pointer;
 }

/* 1 */

  .tourn{
      margin-left: 5px;
  }

 .tourn>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 56px;
    color: #F5F5F5;

    margin-top: 75px;
 }

 .tourn__items{
     display: flex;
 }

 .tourn__items>div:first-child{
    min-width: 878.41px;
 }

 .tourn__card{
     display: flex;
     max-height: 132px;
     margin-bottom: 16px;
     border: 2px solid #20252B;
 }

 .tourn__card>img{
     width: 118px;
     margin-right: 30px;
 }

 .tourn__card>div:last-child>div:first-child>a{
     text-decoration: none;
     color: #F5F5F5;
     opacity: 0.88;
 }

 .tourn__card>div:last-child>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #F5F5F5;
    opacity: 0.88;
    margin-top: 22px;
    margin-bottom: 16px;
 }

 .tourn__tf{
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 24px;
     text-transform: uppercase;
     color: #67707A;
 }

 .tourn__ts{
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 16px;
     line-height: 24px;
     color: #F5F5F5;
 }

 .tourn__ts>td{
     padding-bottom: 22px;
 }

 .tourn__tf>td:first-child{
     padding-right: 30px;
 }

 .tourn__tf>td:nth-child(2){
     padding-right: 68px;
 }

 .tourn__tf>td:nth-child(3){
     padding-right: 50px;
 }

 .tourn__tf>td:nth-child(4){
     padding-right: 49px;
 }

 .tourn__tf>td:nth-child(5){
     padding-right: 116px;
 }

 .tourn__tf>td:nth-child(6){
     padding-right: 30px;
 }

 .tourn__card>div:last-child>div:first-child{
    display: flex;
    justify-content: space-between;
 }

 .tourn__card>div:last-child>div:first-child>div{
   margin-right: 30px;
 }

 .tourn__card>div:last-child>div:first-child>div>a{
   text-decoration: none;
   color: #2585F4;
 }

/* 2 */

  /****/

  .tourn__reg{
     display: flex;
     flex-direction: column;
     align-items: center;

     border: 2px solid #20252B;
     margin-left: 30px;
     padding-bottom: 24px;
     padding-top: 24px;
     margin-bottom: 24px;
 }

 .tourn__reg>button{
    width: 264px;
    height: 48px;
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 2px;
 }

 .tourn__reg>button>a{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    text-decoration: none;
 }

  /****/

 .tourn__filt{
     display: flex;
     flex-direction: column;

     border: 2px solid #20252B;
     margin-left: 30px;
     padding-bottom: 24px;
     margin-bottom: 24px;
 }

 .tourn__filt>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 24px;
     line-height: 32px;
     color: #F5F5F5;
     margin-left: 30px;
     margin-top: 24px;
     margin-bottom: 51px;
 }

 .tourn__filt>div:first-child>span{
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 24px;
     color: #B83333;

     margin-left: 85px;
     margin-right: 32px;
 }

 .tourn__check>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 24px;
     line-height: 32px;
     color: #F5F5F5;

     margin-left: 32px;
     margin-bottom: 12px;
 }

 .tourn__check>div:last-child{
     display: flex;
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 24px;
     text-transform: uppercase;
     color: #67707A;
 }

 .tourn__check>div:last-child>div{
     margin-right: 32px;
     display: flex;
     align-items: center;
 }

 .checkst{
     border: 1px solid #67707A;
     background-color: #0F1215;
     width: 16px;
     height: 16px;
     margin-right: 8px;
 }

 .tourn__check>div:last-child>div:first-child{
     margin-left: 32px;
 }

 .tourn__check2{
     margin-top: 24px;
 }

 .tourn__check2>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 24px;
     line-height: 32px;
     color: #F5F5F5;
     margin-left: 32px;
     margin-bottom: 12px;
 }

 .tourn__check2>div:last-child{
     display: flex;
     flex-direction: column;
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 24px;
     text-transform: uppercase;
     color: #67707A;
 }

 .tourn__check2>div:last-child>div{
     display: flex;
     align-items: center;
 }

 .tourn__check2>div:last-child>div{
     margin-right: 32px;
     display: flex;
     align-items: center;
     margin-left: 32px;
 }

 .tourn__check2>div:last-child>div>div{
     margin-bottom: 16px;
 }

 .tourn__check2>div:last-child>div:last-child>div{
     margin-bottom: 0px;
 }

/* 3 */

  #filterCheck1{
     display: none;
  }
  #filterCheck2{
     display: none;
  }
  #filterCheck3{
     display: none;
  }
  #filterCheck4{
     display: none;
  }
  #filterCheck5{
     display: none;
  }
  #filterCheck6{
     display: none;
  }
  #filterCheck7{
     display: none;
  }
  #filterCheck8{
     display: none;
  }
  #filterCheck9{
     display: none;
  }
  #filterCheck10{
     display: none;
  }
  #filterCheck11{
     display: none;
  }
  #filterCheck12{
     display: none;
  }
  #filterCheck13{
     display: none;
  }
  #filterCheck14{
     display: none;
  }
  #filterCheck15{
     display: none;
  }
  #filterCheck16{
     display: none;
  }
  #filterCheck17{
     display: none;
  }
  #filterCheck18{
     display: none;
  }
  #filterCheck19{
     display: none;
  }
  #filterCheck20{
     display: none;
  }
  #filterCheck21{
     display: none;
  }

/* media */

  @media(max-width: 992px){
     .tourn__filt{
       display: none;
    }
  }

  @media(max-width: 768px){
    .tourn__items{
        width: 740px;
    }

    .tourn__items>div:first-child{
       min-width: 740px;
    }

    .tourn__card{
        width: 730px;
        max-height: 150px;
    }

    .tourn__tf>td:first-child{
     padding-right: 20px;
    }

    .tourn__tf>td:nth-child(2){
      padding-right: 0px;
      min-width: 120px;
    }

    .tourn__tf>td:nth-child(3){
     padding-right: 25px;
    }

    .tourn__tf>td:nth-child(4){
     padding-right: 25px;
    }

    .tourn__tf>td:nth-child(5){
     padding-right: 50px;
    }

    .tourn__tf>td:nth-child(6){
     padding-right: 30px;
    }

    .tourn>div:first-child{
       margin-top: 25px;
    }
  }

  @media(max-width: 576px){
     .tourn__tf>td:nth-child(4){
        display: none;
     }
     .tourn__tf>td:nth-child(3){
        display: none;
     }
     .tourn__ts>td:nth-child(4){
        display: none;
     }
     .tourn__ts>td:nth-child(3){
        display: none;
     }

     .tourn__card{
        max-width: 545px;
     }

     .tourn__items{
        width: 560px;
      }

    .tourn__items>div:first-child{
       min-width: 560px;
      }



  }
   
</style>
