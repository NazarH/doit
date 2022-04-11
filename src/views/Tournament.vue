<template>
   <div class='wrapper' style='background-color: #121417;' id='tourn__wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
        <div class='tournam'>
           <div>
            <router-link to="/tournaments">← Back</router-link>
           </div>
           <div class='tournam__items'>
             <div>
                <div class='tournam__firstb' style='background-color: #0F1215;'>
                  <img src='../assets/tourn-games.png'>
                  <div>
                    <div>
                      {{tournamentObj.tournGame}} - {{tournamentObj.tournMode}} - {{tournamentObj.tournStartTime1}}
                    </div>
                    <div>
                      {{tournamentObj.tournPlayersList.length}} players signed up
                    </div>
                  </div>
                </div>
                <div class='tournam__secondb'>
                   <div>
                      <div @click='showInfo' id='t1' class='styleBtn'>Info</div>
                      <div @click='showBracket' id='t2'>Bracket</div>
                      <div @click='showPlayers' id='t3'>Players</div>
                      <div id='t4'>Rules</div>
                      <div id='t5'>Support</div>
                   </div>
                   <div class='tournam__secondbl'>
                    <div id='tournamF'>
                       <div>
                        <div>Start: {{tournamentObj.tournStartTime1}} at {{tournamentObj.tournStartTime2}}</div>
                        <div>Check in time</div>
                        <div>{{tournamentObj.tournSomeTime}}</div>
                        <div>Additional requirements</div>
                        <div>
                          At least {{tournamentObj.tournMinAge}} years 
                          <p>
                          Linked Account: 
                          {{tournamentObj.tournPSN === true ? 'PSN ' : ''}}
                          {{tournamentObj.tournXbox === true ? 'Xbox ' : ''}}
                          {{tournamentObj.tournSteam === true ? 'Steam ' : ''}}
                          {{tournamentObj.tournLOL === true ? 'LoL ' : ''}}
                          {{tournamentObj.tournBlizz === true ? 'BattleNet ' : ''}}
                          {{tournamentObj.tournOrigin === true ? 'Origin ' : ''}}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>Game</div>
                        <div>{{tournamentObj.tournGame}}</div>
                        <div>Mode</div>
                        <div>{{tournamentObj.tournMode}} - {{tournamentObj.tournFormat}} <p>BO1 | Final BO3</p></div>
                        <div>Lobby</div>
                        <div>Game chat: OCR3</div>
                      </div>
                      <div>
                        <div>Prize pool</div>
                        <div>{{tournamentObj.tournPrizePool}} USD</div>
                        <div>VETO</div>
                        <div><p>{{tournamentObj.tournVeto}}</p> Start player with higher seed</div>
                        <button>MORE RULES</button>
                      </div>
                    </div>
                    <div id='tournamS'>
                       <div>
                          <div>
                             <span>←</span> Round 8 
                          </div>
                          <div>
                             Semi-final
                          </div>
                          <div>
                             Final <span>→</span>
                          </div>
                       </div>
                       <div>
                        <div class='tournamS__1'>
                          <div>
                             <div>
                                <div>4</div>
                                <div>
                                   <img src='../assets/tourn-flag.png' style='margin-right: 10px;'> Walkower
                                </div>
                                <div>
                                  6
                                </div>
                             </div>
                          </div>
                          <div>
                             <div>
                                <div>21</div>
                                <div>
                                   <img src='../assets/tourn-flag2.png' style='margin-right: 10px; margin-left: 10px;'> BF’s Squad
                                </div>
                                <div>
                                  8
                                </div>
                             </div>
                          </div>

                          <div>
                             <div>
                                <div>13</div>
                                <div>
                                   <img src='../assets/tourn-flag.png' style='margin-right: 10px;'> Walkower
                                </div>
                                <div>
                                  10
                                </div>
                             </div>
                          </div>
                          <div>
                             <div>
                                <div>8</div>
                                <div>
                                   <img src='../assets/tourn-flag2.png' style='margin-right: 10px; margin-left: 10px;'> BF’s Squad
                                </div>
                                <div>
                                  4
                                </div>
                             </div>
                          </div>

                          <div>
                             <div>
                                <div>13</div>
                                <div>
                                   <img src='../assets/tourn-flag.png' style='margin-right: 10px;'> Walkower
                                </div>
                                <div>
                                  6
                                </div>
                             </div>
                          </div>
                          <div>
                             <div>
                                <div>12</div>
                                <div>
                                   <img src='../assets/tourn-flag2.png' style='margin-right: 10px; margin-left: 10px;'> BF’s Squad
                                </div>
                                <div>
                                  8
                                </div>
                             </div>
                          </div>
                          
                          <div>
                             <div>
                                <div>1</div>
                                <div>
                                   <img src='../assets/tourn-flag.png' style='margin-right: 10px;'> Walkower
                                </div>
                                <div>
                                  10
                                </div>
                             </div>
                          </div>
                          <div>
                             <div>
                                <div>5</div>
                                <div>
                                   <img src='../assets/tourn-flag2.png' style='margin-right: 10px; margin-left: 10px;'> BF’s Squad
                                </div>
                                <div>
                                  4
                                </div>
                             </div>
                          </div>
                        </div>
                        <div class='tournamS__1-1'>
                           <div>
                              <div></div>
                              <div></div>
                           </div>
                           <div>
                              <div></div>
                              <div></div>
                           </div>
                        </div>
                        <div class='tournamS__2'>
                          <div>
                             <div>
                                <div></div>
                                <div>
                                   <img src='../assets/tourn-flag.png' style='margin-right: 10px;'> Walkower
                                </div>
                                <div>
                                  6
                                </div>
                             </div>
                          </div>
                          <div>
                             <div>
                                <div></div>
                                <div>
                                   <img src='../assets/tourn-flag2.png' style='margin-right: 10px; margin-left: 10px;'> BF’s Squad
                                </div>
                                <div>
                                  8
                                </div>
                             </div>
                          </div>

                          <div>
                             <div>
                                <div></div>
                                <div>
                                    <img src='../assets/tourn-flag.png' style='margin-right: 10px;'> Walkower
                                </div>
                                <div>
                                  10
                                </div>
                             </div>
                          </div>
                          <div>
                             <div>
                                <div></div>
                                <div>
                                   <img src='../assets/tourn-flag2.png' style='margin-right: 10px; margin-left: 10px;'> BF’s Squad
                                </div>
                                <div>
                                  4
                                </div>
                             </div>
                          </div>
                        </div>
                        <div class='tournamS__2-1'>
                           <div>
                              <div></div>
                              <div></div>
                           </div>
                        </div>
                        <div class='tournamS__3'>
                          <div>
                             <div>
                                <div></div>
                                <div>
                                   <img src='../assets/tourn-flag.png' style='margin-right: 10px;'> Walkower
                                </div>
                                <div>
                                  10
                                </div>
                             </div>
                             <div>
                                <div></div>
                                <div style='border-bottom: 1px solid #20272E;'>
                                   
                                </div>
                                <div >
                                  
                                </div>
                             </div>
                          </div>
                        </div>
                       </div>
                       
                    </div>
                    <div id='tournamT'>
                       <div v-for='player in tournamentObj.tournPlayersList'>
                          <div>
                            <img src='../assets/tourn-avatar.png'>
                          </div>
                          <div>
                            <div style='margin-left: 10px'>{{player.userNickn}}</div>
                            <div>registred</div>
                          </div>
                       </div>
                    </div>
                   </div>
                </div>

                <div class='tournam__secondb'>
                   <div>
                      <div class='styleBtn'>Quick rules</div>
                   </div>
                   <div class='tournam__secondbl2'>
                      <div>
                        <div>
                          <div class='social__med'>
                            <div>
                              <div>
                                 Discord URL:
                              </div>
                              <div>
                                 {{tournamentObj.tournDiscord}}
                              </div>
                            </div>
                            <div>
                              <div>
                                 Facebook URL:
                              </div>
                              <div>
                                 {{tournamentObj.tournFacebook}}
                              </div>
                            </div>
                            <div>
                              <div>
                                 Twitter URL:
                              </div>
                              <div>
                                 {{tournamentObj.tournTwitt}}
                              </div>
                            </div>
                            <div>
                              <div>
                                 VK URL:
                              </div>
                              <div>
                                 {{tournamentObj.tournVK}}
                              </div>
                            </div>
                            <div>
                              <div>
                                 Twitch URL:
                              </div>
                              <div>
                                 {{tournamentObj.tournTwitch}}
                              </div>
                            </div>
                            <div>
                              <div>
                                 YouTube URL:
                              </div>
                              <div>
                                 {{tournamentObj.tournYouTube}}
                              </div>
                            </div>
                          </div>
                          <div class='quick-rules'>
                               <div>Quick rules:</div>
                               <div>{{tournamentObj.tournQRules}}</div>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
                <div class='tournam__secondb'>
                   <div>
                      <div class='styleBtn' id='t6' @click='showStreams'>Streams</div>
                   </div>
                   <div class='tournam__secondbl3'>
                       <div class='stream__arr'>
                           <div v-for='stream in tournamentObj.tournTwitchArr' :key='stream.id'>
                               <input type='text' :value='stream.streamLink' disabled>
                               <input type='text' :value='stream.streamLang' disabled>
                           </div>
                       </div>
                   </div>
                </div>
                <div class='tournam__secondb' style='margin-bottom: 60px;'>
                   <div>
                      <div class='styleBtn'>Prize pool</div>
                   </div>
                   <div class='tournam__secondbl4'>
                    <div>
                       <div>
                          <div>
                             Max players:
                          </div>
                          <div>
                             {{tournamentObj.tournMaxPlayers}}
                          </div>
                       </div>
                       <div>
                        <div>
                          <div>
                             Prize pool:
                          </div>
                          <div>
                             {{tournamentObj.tournPrizePool}}$
                          </div>
                        </div>
                        <div>
                          <div>
                          <div>
                             1st place:
                          </div>
                          <div>
                             {{tournamentObj.tourn1ST}}$
                          </div>
                       </div>
                       <div>
                          <div>
                             2st place:
                          </div>
                          <div>
                             {{tournamentObj.tourn2ST}}$
                          </div>
                       </div>
                       <div>
                          <div>
                             3st place:
                          </div>
                          <div>
                             {{tournamentObj.tourn3ST}}$
                          </div>
                       </div>
                       <div>
                          <div>
                             4st place:
                          </div>
                          <div>
                             {{tournamentObj.tourn4ST}}$
                          </div>
                       </div>
                       </div>
                       <div>
                          <div>
                             <div>Ro8:</div>
                             <div>{{tournamentObj.tournRO8}}</div>
                          </div>
                          <div>
                             <div>Ro16:</div>
                             <div>{{tournamentObj.tournRO16}}</div>
                          </div>
                          <div>
                             <div>Ro32:</div>
                             <div>{{tournamentObj.tournRO32}}</div>
                          </div>
                          <div>
                             <div>Ro64:</div>
                             <div>{{tournamentObj.tournRO64}}</div>
                          </div>
                          <div>
                             <div>Ro128:</div>
                             <div>{{tournamentObj.tournRO128}}</div>
                          </div>
                          <div>
                             <div>Ro256:</div>
                             <div>{{tournamentObj.tournRO256}}</div>
                          </div>
                          <div>
                             <div>Ro512:</div>
                             <div>{{tournamentObj.tournRO512}}</div>
                          </div>
                       </div>
                       </div>
                       <div>
                          <div>Type:</div>
                          <div>
                            <div>{{tournamentObj.tournTypeMoney === 'true' ? 'Money ' : ' '}}</div>
                            <div>{{tournamentObj.tournTypeThing === 'true' ? 'Thing ' : ' '}}</div>
                            <div>{{tournamentObj.tournTypeQualifers === 'true' ? 'Qualifers ' : ' '}}</div>
                            <div>{{tournamentObj.tournTypeMPT === 'true' ? 'Money + thing' : ' '}}</div>
                            <div>{{tournamentObj.tournTypeNothing === 'true' ? 'Nothing ' : ' '}}</div>
                          </div>
                       </div>
                    </div>
                   </div>
                </div>
             </div>
             <div>
                <div class='tournam__rfirstb'>
                   <div style='background-color: #0F1215;'>
                      Requirements
                   </div>
                   <div style='background-color: #0F1215;'>
                      <div>Minimum age</div>
                      <div>At least 18 years old</div>
                      <div>Residence</div>
                      <div><span>More info</span></div>
                      <div>PSN account</div>
                      <div>Register your name ID</div>
                      <div>Play</div>
                      <div>Please log in to take part <p>in this tournament.</p></div>
                   </div>
                   <div style='background-color: #0F1215;'>
                      <div>
                         Sign up closes in 43 minutes
                      </div>
                      <button>Log in / Register</button>
                   </div>
                   <div style='background-color: #0F1215;'>
                      <img src='../assets/tourn-face.png'>
                      <img src='../assets/tourn-twitt.png'>
                      <img src='../assets/tourn-inst.png'>
                      <img src='../assets/tourn-ppp.png'>
                      <img src='../assets/tourn-cat.png'>
                   </div>
                </div>
                <div class='tournam__rsecondb'>
                   <div style='background-color: #0F1215;'>
                      Donations
                   </div>
                   <div style='background-color: #0F1215;'>
                      <img src='../assets/tourn-donat.png'>
                   </div>
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
    components:{
      TopPannel,
      LeftPannel
   },
   data(){
     return{
       tournamentObj: JSON.parse(localStorage.getItem("tournament"))
     }
   },
   methods:{
       showInfo(){
           document.getElementById('tournamF').style='display: flex;';
           document.getElementById('tournamS').style='display: none;';
           document.getElementById('tournamT').style='display: none;';

           document.getElementById("t1").classList.add('styleBtn');
           document.getElementById("t2").classList.remove('styleBtn');
           document.getElementById("t3").classList.remove('styleBtn');
           document.getElementById("t4").classList.remove('styleBtn');
           document.getElementById("t5").classList.remove('styleBtn');
       },
       showBracket(){
           document.getElementById('tournamF').style='display: none;';
           document.getElementById('tournamS').style='display: flex;';
           document.getElementById('tournamT').style='display: none;';

           document.getElementById("t1").classList.remove('styleBtn');
           document.getElementById("t2").classList.add('styleBtn');
           document.getElementById("t3").classList.remove('styleBtn');
           document.getElementById("t4").classList.remove('styleBtn');
           document.getElementById("t5").classList.remove('styleBtn');
       },
       showPlayers(){
           document.getElementById('tournamF').style='display: none;';
           document.getElementById('tournamS').style='display: none;';
           document.getElementById('tournamT').style='display: flex;';

           document.getElementById("t1").classList.remove('styleBtn');
           document.getElementById("t2").classList.remove('styleBtn');
           document.getElementById("t3").classList.add('styleBtn');
           document.getElementById("t4").classList.remove('styleBtn');
           document.getElementById("t5").classList.remove('styleBtn');
       },
       showStreams(){
           document.getElementById("t6").classList.add('styleBtn');
           document.getElementById("t7").classList.remove('styleBtn');
       },
       showAddStreams(){
           document.getElementById("t6").classList.remove('styleBtn');
           document.getElementById("t7").classList.add('styleBtn');
       },
       firstFucnTourn(){
         console.log(this.tournamentObj);
       }
   },
   mounted(){
     this.firstFucnTourn()
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

/* 1 */

  .tournam{
      margin-left: 5px;
  }

  .tournam>div:first-child>a{
      text-decoration: none;
      color: #9FB1CC;
  }

  .tournam>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #9FB1CC;
    margin-top: 110px;
  }

  .tournam__firstb{
      display: flex;
      align-items: center;
      width: 812px;
      border: 2px solid #20252B;
      margin-top: 18px;
      padding-right: 35px;
  }

  .tournam__firstb>img{
      margin-top: 42px;
      margin-left: 44px;
      margin-bottom: 50px;
      margin-right: 15px;
  }

  .tournam__firstb>div>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      color: #F5F5F5;
  }

  .tournam__firstb>div>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #67707A;
  }

  .tournam__items{
      display: flex;
  }

  .tournam__items>div:first-child{
      display: flex;
      flex-direction: column;
  }

  .tournam__items>div:last-child{
      display: flex;
      flex-direction: column;
  }

/* 2 */

  .tournam__rfirstb>div:nth-child(2){
      padding-top: 30px;
      padding-bottom: 30px;
      border: 2px solid #20252B;
      border-top: 0px;
      border-bottom: 0px;
      margin-left: 30px;
  }

  .tournam__rfirstb>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #F5F5F5;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 135px;

    border: 2px solid #20252B;
    margin-left: 30px;
    margin-top: 18px;
  }

  .tournam__rfirstb>div:nth-child(2)>div:nth-child(2n+1){
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-transform: uppercase;
      color: #F5F5F5;
      margin-left: 30px;
      margin-bottom: 12px;
  }

  .tournam__rfirstb>div:nth-child(2)>div:nth-child(2n){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 100%;
      color: #67707A;
      margin-left: 30px;
      margin-bottom: 24px;
  }

  .tournam__rfirstb>div:nth-child(3)>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #B83333;
  }

  .tournam__rfirstb>div:nth-child(3){
      padding: 30px 32px;
      border: 2px solid #20252B;
      margin-left: 30px;
  }

  .tournam__rfirstb>div:nth-child(3)>button{
      width: 264px;
      height: 48px;
      background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 2px;
      margin-top: 16px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      color: #FFFFFF;
  }

  .tournam__rfirstb>div:last-child{
      padding: 16px 0px;
      width: 328px;
      border: 2px solid #20252B;
      margin-left: 30px;
      display: flex;
      justify-content: center;
  }

  .tournam__rfirstb>div:last-child>img{
      display: block;
      margin-right: 34px;
  }

  .tournam__rfirstb>div:last-child>img:last-child{
      margin-right: 0px;
  }

  .tournam__rfirstb>div:last-child{
      display: flex;
      align-items: center;
  }

/* 3 */

  .tournam__rsecondb>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #F5F5F5;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 135px;

    border: 2px solid #20252B;
    margin-left: 30px;
    margin-top: 38px;
  }

  .tournam__rsecondb>div:last-child{
      border: 2px solid #20252B;
      border-top: 0px;
      padding: 30px 63px;
      margin-left: 30px;
  }

  .tournam__rsecondb>div:last-child>img{
      width: 202px;
      height: 165px;
  }

/* 4 */

  .tournam__secondb{
      margin-top: 45px;
  }

  .tournam__secondb>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 32px;
      color: #67707A;
      display: flex;
  }

  .styleBtn{
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      color: #F5F5F5;
      background-color: #0F1215;
      border: 2px solid #20252B;
      border-bottom: 2px solid #0F1215;
      margin-bottom: -2px;
  }

  .tournam__secondb>div:first-child>div{
      padding: 10px 40px;
      cursor: pointer;
  }

  .tournam__secondbl>div{
      display: flex;
      background: #0F1215;
      border: 2px solid #20252B;
      padding-top: 45px;
      padding-left: 40px;
      padding-right: 35px;
  }

  .tournam__secondbl>div>div:first-child>div>div{
    display: flex;
  }

  .tournam__secondbl>div>div:first-child>div>div>div:first-child{
      width: 130px;
      margin-bottom: 5px;
  }

  .tournam__secondbl>div>div:first-child>div>div>div:last-child{
      color: white;
  }

  .tournam__secondbl>div:first-child>div:nth-child(1)>div:nth-child(2n){
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 8.5px;
  }

  .tournam__secondbl>div:first-child>div:nth-child(1)>div:nth-child(2n + 1){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #67707A;
      margin-bottom: 30px;
      margin-right: 50px;
  }

  .tournam__secondbl>div:first-child>div:nth-child(1)>div:first-child{
      margin-bottom: 56px;
  }

  .tournam__secondbl>div:first-child>div:nth-child(1)>div:nth-child(3){
      margin-bottom: 54px;
  }

  .tournam__secondbl>div:first-child>div:nth-child(1)>div:last-child{
      width: 151px;
  }

  .tournam__secondbl>div:first-child>div:nth-child(2)>div:nth-child(2n + 1){
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 8.5px;
  }

  .tournam__secondbl>div:first-child>div:nth-child(2)>div:nth-child(2n){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #67707A;
      margin-bottom: 30px;
  }

  .tournam__secondbl>div:first-child>div:last-child{
      margin-left: 42px;
  }

  .tournam__secondbl>div:first-child>div:last-child>div:nth-child(2n + 1){
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 8.5px;
  }

  .tournam__secondbl>div:first-child>div:last-child>div:nth-child(2n){
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #67707A;
      margin-bottom: 30px;
  }

  .tournam__secondbl>div:first-child>div:last-child>div:nth-child(4){
      margin-bottom: 43px;
  }

  .tournam__secondbl>div:first-child>div:last-child>button{
      width: 121px;
      height: 36px;
      left: 937px;
      top: 716px;
      background: #1A222D;
      border-radius: 2px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 100%;
      color: #FFFFFF;
  }

/* 4.1 */

  .tournam__secondbl2>div{
      display: flex;
      background: #0F1215;
      border: 2px solid #20252B;
      padding-top: 45px;
      padding-left: 40px;
      padding-right: 35px;
  }

  .social__med>div{
      display: flex;
  }

  .social__med>div>div:first-child{
    width: 130px;
    margin-bottom: 5px;
  }

  .social__med>div>div:last-child{
    color: #67707A;
  }

  .quick-rules{
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .quick-rules>div:first-child{
    width: 130px;
    margin-bottom: 3px;
  }

  .quick-rules>div:last-child{
    color: #67707A;
    margin-bottom: 35px;
  }

/* 4.2 */

  .tournam__secondbl3>div{
      display: flex;
      background: #0F1215;
      border: 2px solid #20252B;
      padding-top: 45px;
      padding-left: 40px;
      padding-right: 35px;
      padding-bottom: 30px;
      height: 300px;
      overflow: hidden;
  }

  .stream__arr{
    display: flex;
    flex-direction: column;
  }

  .stream__arr>div{
    display: flex;
  }

  .stream__arr>div>input{
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
    margin-bottom: 10px;
  }

  .stream__arr>div>input:first-child{
    width: 512px;
    height: 40px;
    margin-right: 5px;
  }

/* 4.3 */

  .tournam__secondbl4>div{
      display: flex;
      flex-direction: column;
      background: #0F1215;
      border: 2px solid #20252B;
      padding-top: 45px;
      padding-left: 40px;
      padding-right: 35px;
      padding-bottom: 30px;
      height: 300px;
      overflow: hidden;
  }

  .tournam__secondbl4>div>div{
    display: flex;
    margin-bottom: 1px;
  }

  .tournam__secondbl4>div:first-child>div:first-child{
    margin-bottom: 20px;
  }

  .tournam__secondbl4>div:first-child>div:first-child>div:last-child{
    color: #67707A;
  }

  .tournam__secondbl4>div:first-child>div:last-child{
    margin-bottom: 20px;
  }

  .tournam__secondbl4>div:last-child>div>div>div{
      display: flex;
  }

  .tournam__secondbl4>div:last-child>div:last-child>div:first-child{
    display: flex;
  }

  .tournam__secondbl4>div:last-child>div:last-child>div:first-child>div:first-child{
    width: 90px;
  }

  .tournam__secondbl4>div:last-child>div:last-child>div:first-child>div:last-child{
    color: #67707A;
  }

  .tournam__secondbl4>div:last-child>div>div>div>div:first-child{
    width: 90px;
    margin-left: 100px;
  }

  .tournam__secondbl4>div>div>div:last-child>div>div:first-child {
    width: 70px;
    margin-left: 100px;
  }

  .tournam__secondbl4>div:last-child>div>div>div>div:last-child{
    color: #67707A;
    margin-bottom: 5px;
  }

  .tournam__secondbl4>div>div:nth-child(2)>div:first-child{
    display: flex;
  }

  .tournam__secondbl4>div>div:nth-child(2)>div:first-child>div:first-child{
    width: 90px;
  }

  .tournam__secondbl4>div>div:nth-child(2)>div:first-child>div:last-child{
    color: #67707A;
  }

  .tournam__secondbl4>div>div:nth-child(3)>div:first-child{
    margin-right: 10px;
  }

  .tournam__secondbl4>div>div:nth-child(3)>div:last-child{
    color: #67707A;
  }

/* 5 */

  #tournamS{
    display: flex;
    flex-direction: column;
    display: none;
  }

  #tournamS>div:nth-child(2){
      display: flex;
  }

  #tournamS>div:first-child{
      display: flex;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      text-transform: uppercase;
      color: #FFFFFF;

      margin-bottom: 30px;
      justify-content: center;
  }

  #tournamS>div:first-child>div>span{
      color: white;
  }

  #tournamS>div:first-child>div:first-child>span{
      margin-right: 38px;
  }

  #tournamS>div:first-child>div:last-child>span{
      margin-left: 38px;
  }

  #tournamS>div:first-child>div:nth-child(2){
      margin: 0px 156px;
  }

  .tournamS__1>div>div{
      display: flex;
      align-items: center;
  }

  .tournamS__1>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;
  }

  .tournamS__1>div>div>div:nth-child(1){
      width: 15px;
      height: 15px;
      margin-right: 17px;
  }

  .tournamS__1>div>div>div:nth-child(2){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 124px;
      height: 38px;
      border: 1px solid #20272E;
      box-sizing: border-box;
      border-radius: 2px 2px 0px 0px;  
      
  }

  .tournamS__1>div:nth-child(2n + 1)>div>div:nth-child(2){
      border-bottom: 0px; 
  }

  .tournamS__1>div:nth-child(2n + 1)>div>div:nth-child(3){
      border-bottom: 0px; 
  }

  .tournamS__1>div:nth-child(2){
      margin-bottom: 20px;
  }

  .tournamS__1>div>div>div:nth-child(3){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 36px;
      background: #20272E;
      border: 1px solid #20272E;
      border-radius: 0px 1px 0px 0px;
  }

  .tournamS__1>div:nth-child(4){
      margin-bottom: 30px;
  }

  .tournamS__1>div:nth-child(6){
      margin-bottom: 20px;
  }

  .tournamS__1>div:nth-child(8){
      margin-bottom: 70px;
  }

/* 5 - 1 */

  .tournamS__2>div>div{
      display: flex;
      align-items: center;
  }

  .tournamS__2>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;
  }

  .tournamS__2>div>div>div:nth-child(1){
      margin-right: 13px;
  }

  .tournamS__2>div>div>div:nth-child(2){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 124px;
      height: 38px;
      border: 1px solid #20272E;
      box-sizing: border-box;
      border-radius: 2px 2px 0px 0px;  
      
  }

  .tournamS__2>div:nth-child(2n + 1)>div>div:nth-child(2){
      border-bottom: 0px; 
  }

  .tournamS__2>div:nth-child(2n + 1)>div>div:nth-child(3){
      border-bottom: 0px; 
  }

  .tournamS__2>div:nth-child(2){
      margin-bottom: 20px;
  }

  .tournamS__2>div>div>div:nth-child(3){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 36px;
      background: #20272E;
      border: 1px solid #20272E;
      border-radius: 0px 1px 0px 0px;
  }

  .tournamS__2>div:nth-child(1){
      margin-top: 48px;
  }

  .tournamS__2>div:nth-child(2){
      margin-bottom: 126px;
  }

  .tournamS__2>div:nth-child(4){
      margin-bottom: 30px;
  }

/* 5 - 2 */

  .tournamS__3>div>div{
      display: flex;
      align-items: center;
  }

  .tournamS__3>div{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      text-align: center;
      color: #F5F5F5;
  }

  .tournamS__3>div>div>div:nth-child(1){
      margin-right: 13px;
  }

  .tournamS__3>div>div>div:nth-child(2){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 124px;
      height: 38px;
      border: 1px solid #20272E;
      box-sizing: border-box;
      border-radius: 2px 2px 0px 0px;  
      
  }

  .tournamS__3>div:nth-child(2n + 1)>div>div:nth-child(2){
      border-bottom: 0px; 
  }

  .tournamS__3>div:nth-child(2n + 1)>div>div:nth-child(3){
      border-bottom: 0px; 
  }

  .tournamS__3>div>div>div:nth-child(3){
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 36px;
      background: #20272E;
      border: 1px solid #20272E;
      border-radius: 0px 1px 0px 0px;
  }

  .tournamS__3>div:nth-child(1){
      margin-top: 148px;
  }

/* 5 - 3 */

  .tournamS__1-1>div{
      display: flex;
  } 

  .tournamS__1-1>div>div:first-child{
      width: 30px;
      height: 92px;
      border-right: 1px solid #20272E;
      border-top: 1px solid #20272E;
      border-bottom: 1px solid #20272E;
      margin-left: 17px;
      margin-top: 39px;   
  }

  .tournamS__1-1>div>div:last-child{
      width: 30px;
      height: 0.1px;
      border-top: 1px solid #20272E;
      margin-top: 86px;
  }

  .tournamS__1-1>div:last-child>div:first-child{
      width: 30px;
      height: 92px;
      border-right: 1px solid #20272E;
      border-top: 1px solid #20272E;
      border-bottom: 1px solid #20272E;
      margin-left: 17px;
      margin-top: 108px;   
  }

  .tournamS__1-1>div:last-child>div:last-child{
      width: 30px;
      height: 0.1px;
      border-top: 1px solid #20272E;
      margin-top: 155px;
  }

  .tournamS__2-1>div{
      display: flex;
  } 

  .tournamS__2-1>div>div:first-child{
      width: 30px;
      height: 200px;
      border-right: 1px solid #20272E;
      border-top: 1px solid #20272E;
      border-bottom: 1px solid #20272E;
      margin-left: 17px;
      margin-top: 86px;   
  }

  .tournamS__2-1>div>div:last-child{
      width: 30px;
      height: 0.1px;
      border-top: 1px solid #20272E;
      margin-top: 186px;
  }

/* 6 */

  #tournamT{
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 20px;
      display: none;
  }

  #tournamT>div{
      background: #151A1F;
      border-radius: 4px;
      margin-bottom: 30px;
      margin-right: 30px;
  }

  #tournamT>div:nth-child(4){
      margin-right: 0px;
  }

  #tournamT>div:last-child{
      margin-right: 0px;
  }

  #tournamT>div>div:last-child>div:first-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;
      color: #E6E8EB;

      margin-top: 12px;
      margin-bottom: 8px;
      

      display: flex;
      align-items: center;
  }

  #tournamT>div>div:last-child>div:last-child{
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #525C66;

      margin-left: 10px;
      margin-bottom: 16px;
  }

  #tournamT>div>div:last-child>div:first-child>img{
      margin-right: 8px;
      margin-left: 10px;
  }

/* media */ 

  @media (max-width: 992px){
    #tourn__wrapper>.header{
       background: #121417;
    }

    .tournam__rfirstb{
       display: none;
    }

    .tournam__rsecondb{
       display: none;
    }

    .tournam>div:first-child{
       margin-top: 0px;
    }

    .tournam__secondbl4>div{
       margin-bottom: 50px;
    }
  }

  @media(max-width: 768px){
     .tournam__items{
        width: 740px;
     }
     .tournam__firstb{
        max-width: 695px;
     }

     .tournam__secondbl>div{
         padding-right: 0px;
         width: 690px;
     }

     .tournam__secondbl2>div{
        padding-right: 0px;
        width: 690px;
     }

     .tournam__secondbl3>div{
        padding-right: 0px;
        width: 716px;
        padding-left: 15px;
     }

     .tournam__secondbl4>div{
        padding-right: 0px;
        width: 690px;
     }

     .stream__arr>div>input{
        width: 186px;
     }
  }

  @media(max-width: 576px){
     .tournam__firstb>div>div:first-child{
        font-size: 28px;
     }

     .tournam__firstb{
        max-width: 508px;
     }

     #tournamF{
        width: 538px;
        padding-left: 5px;
     }
     #tournamS{
        padding-left: 5px;
        width: 538px;
     }
     #tournamT{
        padding-left: 5px;
        width: 538px;
     }

     .tournam__secondbl>div:first-child>div:nth-child(1)>div:nth-child(2n + 1){
        font-size: 14px;
     }

     .tournam__secondbl>div:first-child>div:nth-child(2)>div:nth-child(2n){
        font-size: 14px;
     }

     .tournam__secondbl>div:first-child>div:last-child>div:nth-child(2n){
        font-size: 14px;
     }

     .tournam__secondbl>div:first-child>div:nth-child(1)>div:nth-child(2n){
        font-size: 14px;
     }

     .tournam__secondbl>div:first-child>div:nth-child(2)>div:nth-child(2n + 1){
        font-size: 14px;
     }

     .tournam__secondbl>div:first-child>div:last-child>div:nth-child(2n + 1){
        font-size: 14px;
     }

     .tournam__secondbl>div:first-child>div:last-child{
        margin-left: 18px;
     }

     .tournam__secondbl>div:first-child>div:last-child>div:nth-child(4){
        width: 160px;
     }

     .tournam__items{
        width: 553px;
     }

     #tournamS>div:nth-child(2){
        transform: scale(0.7);
        margin-left: -65px;
     }

     .tournam__secondb>div:first-child>div{
        padding: 10px 20px;
     }

     #tournamS>div:first-child{
        margin-left: 10px;
     }

     .tournam__secondbl2>div{
        max-width: 504px;
     }

     .tournam__secondbl3>div{
        width: 528px;
     }

     .stream__arr>div>input{
        width: 150px;
        margin-right: 13px;
     }

     .tournam__secondbl4>div{
        width: 532px;
        padding-left: 10px;
     }

     .tournam{
        max-width: 550px;
     }

     .tournam__secondbl4>div:first-child>div:nth-child(2)>div:nth-child(2){
        width: 195px;
     }

     #body{
          overflow-x: hidden;
      }

  }
  


</style>
