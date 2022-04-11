<template>
   <div class='wrapper'>
      <left-pannel></left-pannel>
      <top-pannel></top-pannel>
      <div class='container'>
         <div class='popup__cancSub-main' id='popup__cancSub-main'>
            <div class='popup__cancSub' id='popup__cancSub'>
               <div>Are you sure?</div>
               <div>
                  <button @click='cancPrem'>Yes</button>
                  <button @click='cancCancPrem'>No</button>
               </div>
            </div>
         </div>
         
         <div class='profile'>
            <div class='profile__nav'>
                <img src='../assets/profile-avatar.png'>
                <div>{{userInfo.name}}</div>
                <div>{{userInfo.userNickn}}</div>
                <div>{{userInfo.mainTeam}}</div>
                <div>Balance: {{userInfo.deposite}}$</div>
                <div>
                
                </div>
                <ul>
                   <li>User Panel</li>
                   <li>Number two</li>
                   <li>Number three</li>
                   <li>Number four</li>
                   <li>Number five</li>
                   <li>Number six</li>
                   <li>Number seven</li>
                   <li>Number eight</li>
                   <li>Number nine</li>
                </ul>
            </div>
            <div class='profile__tools'>
                <div class='profile__user-panel' id='profile__user-panel'>
                   <div>User Panel</div>
                   <div>
                      <div @click='profileInfo'>My profile</div>
                      <div @click='showMyTeams'>My Team</div>
                      <div @click='depositeShow'>Withdraw</div>
                      <div @click='depositeShow'>Deposit</div>
                      <div @click='premiumPage'>Premium Account</div>
                      <div @click='statistShow'>Statistics</div>
                      <div @click='supportPage'>Support</div>
                      <div @click='settingsPage'>Settings</div>
                      <div @click='tournPage'>Tournaments</div>
                      <div @click='gameProfile'>Game profile</div>
                   </div>
                </div>
                <div class='profile__game-profile' id='profile__game-profile'>
                   <div>Game profile</div>
                   <div>
                      <div>
                         <div>Riot Games account</div>
                         <input type='text' :value='userInfo.gameProfiles.riotGames' @input='userInfo.gameProfiles.riotGames = $event.target.value'>
                      </div>
                      <div>
                         <div>Battlenet</div>
                         <input type='text' :value='userInfo.gameProfiles.battleNet' @input='userInfo.gameProfiles.battleNet = $event.target.value'>
                      </div>
                      <div>
                         <div>SteamID</div>
                         <input type='text' :value='userInfo.gameProfiles.steamID' @input='userInfo.gameProfiles.steamID = $event.target.value'>
                      </div>
                      <div>
                         <div>OriginID</div>
                         <input type='text' :value='userInfo.gameProfiles.originID' @input='userInfo.gameProfiles.originID = $event.target.value'>
                      </div>
                      <div>
                         <div>EpicGamesID</div>
                         <input type='text' :value='userInfo.gameProfiles.epicID' @input='userInfo.gameProfiles.epicID = $event.target.value'>
                      </div>
                      <div>
                         <div>UbisoftID</div>
                         <input type='text' :value='userInfo.gameProfiles.ubisoftID' @input='userInfo.gameProfiles.ubisoftID = $event.target.value'>
                      </div>
                   </div>
                   <button @click='saveGameProfiles'>Save Profile</button>
                </div>
                <div class='profile__support' id='profile__support'>
                   <div>
                      Support
                   </div>
                   <div>
                     <input type='text' placeholder='Name'
                     :value='suppName' @input='suppName = $event.target.value'
                     id='suppName'>
                   </div>
                   <div>
                     <input type='text' placeholder='Topic'
                     :value='suppTopic' @input='suppTopic = $event.target.value'
                     id='suppTopic'>
                   </div>
                   <div>
                     <input type='text' placeholder='Subject'
                     :value='suppSubj' @input='suppSubj = $event.target.value'
                     id='suppSubj'>
                   </div>
                   <div>
                     <textarea placeholder='Your problem...'
                     :value='suppProb' @input='suppProb = $event.target.value'
                     id='suppProb'></textarea>
                   </div>
                   <button @click='suppSend'>Submit</button>
                </div>
                <div class='profile__deposit' id='profile__deposit'>
                  <div>
                     Deposit/Witdraw
                  </div>
                  <div>
                     <div>
                        <div>
                           <img src='../assets/profile-avatar.png'>
                        </div>
                        <div>
                           <div>{{userInfo.userNickn}}</div>
                           <div>Balance: {{userInfo.deposite}}$</div>
                           <div>DOIT POINTS: {{userInfo.points}}</div>
                        </div>
                     </div>
                     <div>
                        <div @click='withdShow' id='d1' class='methodAct'>Withdraw</div>
                        <div @click='deposShow' id='d2'>Deposit</div>
                        <div @click='histoShow' id='d3'>History</div>
                     </div>
                  </div>
                  <div id='widthdraw'>
                     <ul>
                        <li class='liActive'>Paypal</li>
                        <li>BTC</li>
                        <li>QIWI</li>
                        <li>Card</li>
                     </ul>
                     <div>
                        <div>
                           Name and last name
                        </div>
                        <input type='text' placeholder='Owner card name'
                        :value='widthName' @input='widthName = $event.target.value'
                        id='widthName'>
                     </div>
                     <div>
                        <div>
                          Provide your paypal email adress
                        </div>
                        <input type='text' placeholder='PayPal email'
                        :value='widthEmail' @input='widthEmail = $event.target.value'
                        id='widthEmail'>
                     </div>
                     <div>
                        <div>
                           Amount
                        </div>
                        <input type='text' placeholder='100$'
                        :value='widthAmount' @input='widthAmount = $event.target.value'
                        id='widthAmount'>
                     </div>
                     <button @click='withdrawFunc'>Withdraw</button>
                  </div>
                  <div id='deposite'>
                     <ul>
                        <li class='liActive'>Paypal</li>
                        <li>BTC</li>
                        <li>QIWI</li>
                        <li>Card</li>
                     </ul>
                     <div>
                        <div>
                           How much do you want to add?
                        </div>
                        <input type='text' placeholder='Owner card name'
                        :value='depositName' @input='depositName = $event.target.value'
                        id='depositName'
                        >
                     </div>
                     <div>
                        <div>
                           Amount
                        </div>
                        <input type='text' placeholder='100$'
                        :value='depositAmount' @input='depositAmount = $event.target.value'
                        id='depositAmount'
                        >
                     </div>
                     <button @click='depositFunc'>Deposite</button>
                  </div>
                  <div id='history'>
                     <div>
                         <div v-for='trans in userInfo.history' :key='trans.id'>
                          <div>
                          {{trans.depositAmount ? 'Deposite' : 'Widthdraw'}}
                          </div>
                          <div>
                          <div>
                          name: <span>{{trans.depositAmount ? trans.depositName : trans.widthName}}</span>
                          </div>
                          <div>
                          amount: <span>{{trans.depositAmount ? trans.depositAmount + '$' : trans.widthAmount + '$'}}</span>
                          </div>
                          <div>
                          {{trans.widthEmail ? 'email: ' : ''}}<span>{{trans.widthEmail ? trans.widthEmail : ''}}</span>
                          </div>
                          </div>
                         </div>
                     </div>
                  </div>
                </div>
                <div class='profile__statistics' id='profile__statistics' style='display: none'>
                   <div>
                     Statistics
                   </div>
                </div>
                <div class='profile__tournaments' id='profile__tournaments' style='display: none'>
                   <div>
                     Tournaments
                   </div>
                </div>
                <div class='profile__premium' id='profile__premium'>
                   <div class='profile__tornn'>
                     <div class='profile__rornam'>
                       <div>
                       Premium
                       </div>
                     </div>
                     <div>
                       <div class='profile__scard'>
                    <div>
                     FREE
                  </div>
                  <div>
                     $10 per mounth
                  </div>
                  <div>
                     A night to remember for Brazil. 
                     Drama is never too far away at 
                     Copa America and this final had 
                     it by the bucketlad. Thanks for 
                     your company. <p>A night to remember 
                     for Brazil. Drama is never too far 
                     away at Copa America and this final
                     had it by the bucketlad. Thanks 
                     for your company.</p>
                  </div>
                  <button @click='buyPrem' id='buyPrem'>{{userInfo.premium === 'FREE' ? 'Purchased 1 m.' : 'Buy'}}</button>
                  <button @click='cancPremPop' id='cancPrem' class='cancPrem'>Cancel sub</button>
                 </div>
                 <div class='profile__scard2'>
                  <div>
                     PRO
                  </div>
                  <div>
                     $15 per mounth
                  </div>
                  <div>
                     <ul>
                       <li>- usecase 1</li>
                       <li>- usecase 1</li>
                       <li>- usecase 1</li>
                       <li>- usecase 1</li>
                       <li>- usecase 1</li>
                     </ul>
                  </div>
                  <button @click='buyPrem2' id='buyPrem2'>{{userInfo.premium === 'PRO' ? 'Purchased 1 m.' : 'Buy'}}</button>
                  <button @click='cancPremPop' id='cancPrem2' class='cancPrem'>Cancel sub</button>
                 </div>
                 <div class='profile__scard3'>
                  <div>
                     Organizer
                  </div>
                  <div>
                     $5 per mounth
                  </div>
                  <div>
                     A night to remember for Brazil. 
                     Drama is never too far away at 
                     Copa America and this final had 
                     it by the bucketlad. Thanks for 
                     your company. <p>A night to remember 
                     for Brazil. Drama is never too far 
                     away at Copa America and this final
                     had it by the bucketlad. Thanks 
                     for your company.</p>
                    </div>
                    <button @click='buyPrem3' id='buyPrem3'>{{userInfo.premium === 'ORG' ? 'Purchased 1 m.' : 'Buy'}}</button>
                    <button @click='cancPremPop' id='cancPrem3' class='cancPrem'>Cancel sub</button>
                   </div>
                   </div>
              
                   </div>
                </div>
                <div class='profile__info' id='profile__info'>
                   <div>
                      <div>Profile</div>
                      <div><div>ID</div><div>{{userInfo.userId}}</div></div>
                      <div><div>Name</div><div>{{userInfo.name}}</div></div>
                      <div><div>Nickname</div><div>{{userInfo.userNickn}}</div></div>
                      <div><div>With us from</div><div>{{userInfo.userBirth}}</div></div>
                      <div><div>Sex / Age</div><div>{{userInfo.gender}}</div></div>
                      <div><div>Nationality</div><div>{{userInfo.userCountry}}</div></div>
                      <div><div>Country</div><div>{{userInfo.userCountry}}</div></div>
                      <div><div>Web-site</div><div>http://blacerTV.com</div></div>
                   </div>
                   <div>
                      <div>Level and awards</div>
                      <div>
                         <div>
                            <div>
                               <div>
                                  <div>StarCraft II</div>
                                  <div>15</div>
                               </div>
                               <div>
                                  <div></div>
                               </div>
                            </div>
                            <div>
                               <div>
                                  <div>League of Legends</div>
                                  <div>3</div>
                               </div>
                               <div>
                                  <div></div>
                               </div>
                            </div>
                            <div>
                               <div>
                                  <div>Hearthstone</div>
                                  <div>2</div>
                               </div>
                               <div>
                                  <div></div>
                               </div>
                            </div>
                            <div>
                               <div>
                                  <div>World of Tanks</div>
                                  <div>1</div>
                               </div>
                               <div>
                                  <div></div>
                               </div>
                            </div>
                            <div>
                               <div>
                                  <div>S.K.I.L.L. – Special Force II</div>
                                  <div>15</div>
                               </div>
                               <div>
                                  <div></div>
                               </div>
                            </div>
                         </div>
                         <div>
                             <div></div>
                             <div></div>
                             <div></div>
                         </div>
                      </div>
                   </div>
                </div>

                <div class='profile__myteam' id='profile__myteam'>
                   <div>My Team</div>
                   <div>
                      <div v-for='(team, index) in userInfo.userTeams' :key='team.id' @click='editTeam(team, index)'>{{team.teamName}}</div>
                      <div @click='addTeam'>+</div>
                   </div>
                </div>
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
                         <input type='text' :value='newTeam.teamLeader' @input='newTeam.teamLeader = $event.target.value'
                         disabled>
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
                   <button @click='saveNewTeam'>Save Team</button>
                </div>
                <div class='profile__edit-team' id='profile__edit-team'>
                    <div>Edit Team</div>
                   <div>
                      <div class='basic'>Basic info</div>
                      <div>
                         <div>Team name</div>
                         <input type='text' :value='tempTeam.teamName' @input='tempTeam.teamName = $event.target.value'>
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
                         <input type='text' :value='tempTeam.teamLeader' @input='tempTeam.teamLeader = $event.target.value'
                         disabled>
                      </div>
                      <div>
                         <div>Join password</div>
                         <input type='text' :value='tempTeam.joinPass' @input='tempTeam.joinPass = $event.target.value'>
                      </div>
                      <div>
                         <div>Country</div>
                         <input type='text' :value='tempTeam.teamCountry' @input='tempTeam.teamCountry = $event.target.value'>
                      </div>
                      <div>
                         <div>Web-site</div>
                         <input type='text' :value='tempTeam.webSite' @input='tempTeam.webSite = $event.target.value'>
                      </div>
                      <div>
                         <div>URL</div>
                         <div><div>Doit.gg/team</div><input type='text' :value='tempTeam.url' @input='tempTeam.url = $event.target.value' disabled></div>
                      </div>
                   </div>
                   <div>
                     <div class='basic'>Players</div>
                     <div>
                       <button @click='listPlayers'>List of players</button>
                       <button @click='addPlayers'>Add players</button>
                     </div>
                   </div>
                   <div>
                      <div class='basic'>Advance</div>
                      <div>
                         <div>logo 128 x 128</div>
                         <div>
                           <input type='text' placeholder='Logo URL' id='tempUrl2' :value='tempTeam.img' disabled>
                           <input type='file' accept="image/*" id='iE' style='display: none' @change="fileSelectEdit">
                           <button onclick='iE.click()'>UPLOAD</button>
                         </div>
                         <img :src='tempTeam.img' id='img2' class='img'>
                      </div>
                   </div>
                   <div>
                     <button @click='deleteTeam'>Delete Team</button>
                     <button @click='editTeamInfo'>Save Team</button>
                   </div>
                   
                </div>
                <div class='profile__add-players' id='profile__add-players'>
                   <div><span @click='editUBlack'>{{back}}</span>All users</div>
                   <div>
                      <div v-for='(player, index) in users2' :key='player.id' @click='addPlayer(player, index)'>
                         {{player.userNickn}}
                      </div>
                   </div>
                </div>
                <div class='profile__players-list' id='profile__players-list'>
                   <div><span @click='editLBack'>{{back}}</span>Players list</div>
                   <div>
                      <div v-for='(player, index) in tempTeam.playersList' :key='player.id' @click=''>
                         {{player}}
                      </div>
                   </div>
                </div>

                <div class='profile__settings' id='profile__settings'>
                  <div>
                     Settings 
                  </div>
                  <div id='profile__settings-menu'>
                     <div @click='accountDetails'>Edit account details</div>
                     <div @click='showChangeEm'>Change adress email</div>
                     <div @click='showChangeP'>Change password</div>
                     <div @click='showManageP'>Manage preferences</div>
                     <div>Close account</div>
                  </div>
                </div>
                <div class='profile__acc-details' id='profile__acc-details'>
                   <div>
                       Edit account details
                   </div>
                   <div>
                      <div>
                        Username
                      </div>
                      <input type='text' :placeholder='userInfo.userNickn' disabled>
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
                      <select class='select-css' id='select-css' v-model='yourCountry'>
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
                      <select class='select-css' id='select-css' v-model='genderType'>
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
                   <button @click='saveChanges'>Change details</button>
                </div>
                <div class='profile__change-email' id='profile__change-email'>
                   <div>
                     Change adress email
                   </div>
                   <div>
                      <div>
                        Current Password
                      </div>
                      <input type='password' placeholder='🞄🞄🞄🞄🞄🞄🞄🞄' :value='currentPass' 
                      @input='currentPass = $event.target.value'
                      id='currentPass'>
                   </div>
                   <div>
                      <div>
                        New Email
                      </div>
                      <input type='text' :placeholder='userInfo.userEmail' :value='newEmail' 
                      @input='newEmail = $event.target.value'
                      id='newEmail'>
                   </div>
                   <button @click='changeEmail'>Change email</button>
                </div>
                <div class='profile__change-pass' id='profile__change-pass'>
                   <div>
                     Change Password
                   </div>
                   <div>
                      <div>
                        Current Password
                      </div>
                      <input type='password' placeholder='🞄🞄🞄🞄🞄🞄🞄🞄' :value='currentPass' 
                      @input='currentPass = $event.target.value'
                      id='currentPass2'>
                   </div>
                   <div>
                      <div>
                        New password
                      </div>
                      <input type='password' placeholder='🞄🞄🞄🞄🞄🞄🞄🞄' :value='newPass' 
                      @input='newPass = $event.target.value'
                      id='newPass'>
                   </div>
                   <button @click='changePass'>Change password</button>
                </div>
                <div class='profile__manage-pref' id='profile__manage-pref'>
                   <div>
                     Manage preferences
                   </div>
                   <div>
                      <div>
                        Time zone
                      </div>
                      <input type='text' placeholder='Your time zone' 
                      :value='userInfo.userCountry === "Urkaine" ? "Kyiv" :
                      userInfo.userCountry === "Poland" ? "Warszawa" :
                      userInfo.userCountry === "Germany" ? "Berlin" :
                      userInfo.userCountry === "Great Britain" ? "London" :
                      userInfo.userCountry === "USA" ? "Washington" :
                      userInfo.userCountry === "China" ? "Beijing" : "error"' 
                      id='timeZone' disabled>
                   </div>
                   <div>
                      <div>
                        Language
                      </div>
                      <input type='text' placeholder='Your language' :value='userInfo.language' 
                      @input='userInfo.language = $event.target.value'
                      id='language'>
                   </div>
                   <button @click='managePref'>Change preferences</button>
                </div>
                
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import TopPannel from '../components/top-pannel.vue';
import LeftPannel from '../components/left-pannel.vue';

import { getDatabase, ref as fireRef, set, child, get, onValue } from "firebase/database";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export default {
   data(){
       return{
          teams: [],
          payments: [],
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
   components:{
      TopPannel,
      LeftPannel
   },
   methods:{
//Game profile
      gameProfile(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__game-profile').style='display: flex';
      },
      saveGameProfiles(){
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
         });

         document.getElementById('profile__user-panel').style='display: flex';
         document.getElementById('profile__game-profile').style='display: none';
      },

//Support
      supportPage(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__support').style='display: flex';
      },
      suppSend(){
         let sName = 0;
         let sTopic = 0;
         let sSubj = 0;
         let sProb = 0;

         if(this.suppName === ''){
            document.getElementById("suppName").classList.remove('validClass2');
            document.getElementById("suppName").classList.add('invalidClass2');
         }else{
            sName++;
            document.getElementById("suppName").classList.remove('invalidClass2');
            document.getElementById("suppName").classList.add('validClass2');
         }

         if(this.suppTopic === ''){
            document.getElementById("suppTopic").classList.remove('validClass2');
            document.getElementById("suppTopic").classList.add('invalidClass2');
         }else{
            sTopic++;
            document.getElementById("suppTopic").classList.remove('invalidClass2');
            document.getElementById("suppTopic").classList.add('validClass2');
         }

         if(this.suppSubj === ''){
            document.getElementById("suppSubj").classList.remove('validClass2');
            document.getElementById("suppSubj").classList.add('invalidClass2');
         }else{
            sSubj++;
            document.getElementById("suppSubj").classList.remove('invalidClass2');
            document.getElementById("suppSubj").classList.add('validClass2');
         }

         if(this.suppProb === ''){
            document.getElementById("suppProb").classList.remove('validClass2');
            document.getElementById("suppProb").classList.add('invalidClass2');
         }else{
            sProb++;
            document.getElementById("suppProb").classList.remove('invalidClass2');
            document.getElementById("suppProb").classList.add('validClass2');
         }

         if(sName === 1 && sTopic === 1 && sSubj === 1 && sProb === 1){
            sName = 0;
            sTopic = 0;
            sSubj = 0;
            sProb = 0;

            this.support.push({
              suppSender: this.userInfo.userNickn,
              suppName: this.suppName,
              suppTopic: this.suppTopic,
              suppSubj: this.suppSubj,
              suppProb: this.suppProb
           });

           const db = getDatabase();
           set(fireRef(db, `support/`), this.support);

           setTimeout(() => {
           document.getElementById('profile__user-panel').style='display: flex';
           document.getElementById('profile__support').style='display: none';

           document.getElementById("suppName").classList.remove('validClass2');
           document.getElementById("suppTopic").classList.remove('validClass2');
           document.getElementById("suppSubj").classList.remove('validClass2');
           document.getElementById("suppProb").classList.remove('validClass2');

           this.suppName = '';
           this.suppTopic = '';
           this.suppSubj = '';
           this.suppProb = '';
           }, 1000);
         }
      },

//Deposite
      depositeShow(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__deposit').style='display: flex';
      },
      withdShow(){
         document.getElementById('widthdraw').style='display: block';
         document.getElementById('deposite').style='display: none';
         document.getElementById('history').style='display: none';

         document.getElementById("d1").classList.add('methodAct');
         document.getElementById("d2").classList.remove('methodAct');
         document.getElementById("d3").classList.remove('methodAct');
      },
      deposShow(){
         document.getElementById('widthdraw').style='display: none';
         document.getElementById('deposite').style='display: block';
         document.getElementById('history').style='display: none';

         document.getElementById("d1").classList.remove('methodAct');
         document.getElementById("d2").classList.add('methodAct');
         document.getElementById("d3").classList.remove('methodAct');
      },
      histoShow(){
         document.getElementById('widthdraw').style='display: none';
         document.getElementById('deposite').style='display: none';
         document.getElementById('history').style='display: block';

         document.getElementById("d1").classList.remove('methodAct');
         document.getElementById("d2").classList.remove('methodAct');
         document.getElementById("d3").classList.add('methodAct');
      },
      withdrawFunc(){
         let wName = 0;
         let wEmail = 0;
         let wAmount = 0;

         if(this.widthName === ''){
            wName = 0;
            document.getElementById("widthName").classList.remove('validClass2');
            document.getElementById("widthName").classList.add('invalidClass2');
         } else {
            wName++;
            document.getElementById("widthName").classList.remove('invalidClass2');
            document.getElementById("widthName").classList.add('validClass2');
         }

         if(this.widthEmail === ''){
            wEmail = 0;
            document.getElementById("widthEmail").classList.remove('validClass2');
            document.getElementById("widthEmail").classList.add('invalidClass2');
         } else {
            wEmail++;
            document.getElementById("widthEmail").classList.remove('invalidClass2');
            document.getElementById("widthEmail").classList.add('validClass2');
         }

         if(this.widthAmount === ''){
            wAmount = 0;
            document.getElementById("widthAmount").classList.remove('validClass2');
            document.getElementById("widthAmount").classList.add('invalidClass2');
         } else {
            wAmount++;
            document.getElementById("widthAmount").classList.remove('invalidClass2');
            document.getElementById("widthAmount").classList.add('validClass2');
         }

         const dbRef = fireRef(getDatabase());
         const db = getDatabase();

         if(wName === 1 && wEmail === 1 && wAmount === 1){
            get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;

            wName = 0;
            wEmail = 0;
            wAmount = 0;

            this.userInfo.deposite += Number(this.widthAmount);
            this.userInfo.points += Number(this.widthAmount);

            let tempDate = new Date();

            if(this.userInfo.history === undefined){
               this.userInfo.history = [];

               this.userInfo.history.push({
               widthUser: this.userInfo.userNickn,
               widthBalance: this.userInfo.deposite,
               widthDoit: this.userInfo.points,
               widthName: this.widthName,
               widthEmail: this.widthEmail,
               widthAmount: this.widthAmount,
               widthDeposite: '0',
               widthSystem: 'paypal',
               widthDate: Date.now()
               });

               this.payments.push({
               widthUser: this.userInfo.userNickn,
               widthBalance: this.userInfo.deposite,
               widthDoit: this.userInfo.points,
               widthName: this.widthName,
               widthEmail: this.widthEmail,
               widthAmount: this.widthAmount,
               widthDeposite: '0',
               widthSystem: 'paypal',
               widthDate: Date.now(),
               approve: 'none'
               });
            } else {
               this.userInfo.history.push({
               widthUser: this.userInfo.userNickn,
               widthBalance: this.userInfo.deposite,
               widthDoit: this.userInfo.points,
               widthName: this.widthName,
               widthEmail: this.widthEmail,
               widthAmount: this.widthAmount,
               widthDeposite: '0',
               widthSystem: 'paypal',
               widthDate: Date.now()
               });
               this.payments.push({
               widthUser: this.userInfo.userNickn,
               widthBalance: this.userInfo.deposite,
               widthDoit: this.userInfo.points,
               widthName: this.widthName,
               widthEmail: this.widthEmail,
               widthAmount: this.widthAmount,
               widthDeposite: '0',
               widthSystem: 'paypal',
               widthDate: Date.now(),
               approve: 'none'
               });
            }

            localStorage.setItem('signIn', JSON.stringify(this.userInfo));

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.userInfo.userNickn){
                this.users2[i] = {};
                this.users2[i] = this.userInfo;
             }
            }

            set(fireRef(db, `users/`), this.users2);
            set(fireRef(db, `payments/`), this.payments);

            setTimeout(() => {
            this.widthName = '';
            this.widthEmail = '';
            this.widthAmount = '';
            this.users2 = [];

            document.getElementById("widthName").classList.remove('validClass2');
            document.getElementById("widthEmail").classList.remove('validClass2');
            document.getElementById("widthAmount").classList.remove('validClass2');
            }, 1000);
            });
         }
      },
      depositFunc(){
         let wName = 0;
         let wAmount = 0;

         if(this.depositName === ''){
            wName = 0;
            document.getElementById("depositName").classList.remove('validClass2');
            document.getElementById("depositName").classList.add('invalidClass2');
         } else {
            wName++;
            document.getElementById("depositName").classList.remove('invalidClass2');
            document.getElementById("depositName").classList.add('validClass2');
         }

         if(this.depositAmount === ''){
            wAmount = 0;
            document.getElementById("depositAmount").classList.remove('validClass2');
            document.getElementById("depositAmount").classList.add('invalidClass2');
         } else {
            wAmount++;
            document.getElementById("depositAmount").classList.remove('invalidClass2');
            document.getElementById("depositAmount").classList.add('validClass2');
         }

         const dbRef = fireRef(getDatabase());
         const db = getDatabase();

         if(wName === 1 && wAmount === 1){
            get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;

            wName = 0;
            wAmount = 0;

            this.userInfo.deposite -= Number(this.depositAmount);

            if(this.userInfo.history === undefined){
               this.userInfo.history = [];
               this.userInfo.history.push({
               depositName: this.depositName,
               depositAmount: this.depositAmount,
               depositUser: this.userInfo.userNickn,
               depositBalance: this.userInfo.deposite,
               depositDoit: this.userInfo.points,
               depositPay: '0',
               depositSystem: 'paypal',
               depositDate: Date.now()
               });
               this.payments.push({
               depositName: this.depositName,
               depositAmount: this.depositAmount,
               depositUser: this.userInfo.userNickn,
               depositBalance: this.userInfo.deposite,
               depositDoit: this.userInfo.points,
               depositPay: '0',
               depositSystem: 'paypal',
               depositDate: Date.now(),
               approve: 'none'   
               });
            } else {
               this.userInfo.history.push({
               depositName: this.depositName,
               depositAmount: this.depositAmount,
               depositUser: this.userInfo.userNickn,
               depositBalance: this.userInfo.deposite,
               depositDoit: this.userInfo.points,
               depositPay: '0',
               depositSystem: 'paypal',
               depositDate: Date.now()
               });
               this.payments.push({
               depositName: this.depositName,
               depositAmount: this.depositAmount,
               depositUser: this.userInfo.userNickn,
               depositBalance: this.userInfo.deposite,
               depositDoit: this.userInfo.points,
               depositPay: '0',
               depositSystem: 'paypal',
               depositDate: Date.now(),
               approve: 'none'   
               });
            }

            localStorage.setItem('signIn', JSON.stringify(this.userInfo));

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.userInfo.userNickn){
                this.users2[i] = {};
                this.users2[i] = this.userInfo;
             }
            }

            set(fireRef(db, `users/`), this.users2);
            set(fireRef(db, `payments/`), this.payments);

            setTimeout(() => {
            this.depositName = '';
            this.depositAmount = '';
            this.users2 = [];

            document.getElementById("depositName").classList.remove('validClass2');
            document.getElementById("depositAmount").classList.remove('validClass2');
            }, 1000);
            });
         }
      },

//Setting - user details
      settingsPage(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__settings').style='display: flex';
      },
      saveChanges(){
         this.userInfo.gender = this.genderType;
         this.userInfo.userCountry = this.yourCountry;

         if(this.dayA === ''){
            this.dayA = this.userInfo.userBirth.substring(0, 2);
         }
         if(this.mounthA === ''){
            this.mounthA = this.userInfo.userBirth.substring(3, 5);
         }
         if(this.yearA === ''){
            this.yearA = this.userInfo.userBirth.substring(6, 10);
         }

         this.userInfo.userBirth = `${this.dayA}.${this.mounthA}.${this.yearA}`;

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
         });
      },
      dayValid(){
          if(this.mounthA.length === 1){
            this.mounthA = '0' + this.mounthB;
          }

          if(this.dayA.length > 2){
           this.dayA =  this.dayA.substr(0, 2);
          }
          if(Number(this.dayA) > 31){
            this.dayA = '';
          }
      },
      mounthValid(){
          if(this.dayA.length === 1){
            this.dayA = '0' + this.dayA;
          }
          if(this.mounthA.length > 2){
           this.mounthA =  this.mounthA.substr(0, 2);
          }
          if(Number(this.mounthA) > 12){
            this.mounthA = '';
          }
          if((Number(this.mounthA) === 2 || String(this.mounthA) === '02') && Number(this.dayA) > 28){
            this.dayA = '';
          }
          if(Number(this.mounthA) % 2 === 0 && Number(this.dayA) > 30 && this.mounthA !== ''){
            this.dayA = '';
          }
      },
      yearValid(){
          if(this.mounthA.length === 1){
            this.mounthA = '0' + this.mounthA;
          }
          if(this.dayA.length === 1){
            this.dayA = '0' + this.dayA;
          }

          if(this.yearA.length > 4){
           this.yearA =  this.yearA.substr(0, 4);
          }
          if(this.yearA.length === 4 && (Number(this.yearA) < 1922 || Number(this.yearA) > 2022)){
            this.yearA = '';
          }
      },
      accountDetails(){
         document.getElementById('profile__settings').style='display: none';
         document.getElementById('profile__acc-details').style='display: flex';
      },

//Settings - change email
      showChangeEm(){
         document.getElementById('profile__settings').style='display: none';
         document.getElementById('profile__change-email').style='display: flex';
      },
      changeEmail(){
         let currPassC = 0;
         let validMailCount = 0;
         let charValid = 0;
         let dogCount = 0;

         //password

         if(this.currentPass !== this.userInfo.userPass){
            currPassC = 0;
            document.getElementById("currentPass").classList.remove('validClass');
            document.getElementById("currentPass").classList.add('invalidClass');
         } else {
            currPassC = 1;
            document.getElementById("currentPass").classList.remove('invalidClass');
            document.getElementById("currentPass").classList.add('validClass');
         }

         //email

         if(this.newEmail === ''){
         }else{
            validMailCount++;
         }

         if(this.newEmail === this.userInfo.userEmail){

         }else{
            validMailCount++;
         }

         for(let i = 0; i < this.newEmail.length; i++){
            for(let u = 1040; u <= 1103; u++){
              if(this.newEmail[i].charCodeAt() === u){
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

          for(let i = 0; i <= this.newEmail.length; i++){
            if(this.newEmail[i] === '@'){
              dogCount++;
            } else if(i === this.newEmail.length){
                 if(dogCount === 1){
                   dogCount = 0;
                   validMailCount++;
                   break;
                 } else {
                   dogCount = 0;
                 }  
            }
          }
          
          if(this.newEmail.endsWith('.com') || this.newEmail.endsWith('.ru')){
            validMailCount++;
          } else {
          }


          if(validMailCount === 5){
              validMailCount = 1;
              document.getElementById("newEmail").classList.remove('invalidClass');
              document.getElementById("newEmail").classList.add('validClass');
          } else {
              validMailCount = 0;
              document.getElementById("newEmail").classList.remove('validClass');
              document.getElementById("newEmail").classList.add('invalidClass');
          }

          if(validMailCount === 1 && currPassC === 1){
            const dbRef = fireRef(getDatabase());
            const db = getDatabase();

            get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;

            currPassC = 0;
            validMailCount = 0;
            charValid = 0;
            dogCount = 0;

            this.userInfo.userEmail = this.newEmail;
            localStorage.setItem('signIn', JSON.stringify(this.userInfo));

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.userInfo.userNickn){
                this.users2[i] = {};
                this.users2[i] = this.userInfo;
             }
            }

            console.log(this.users2)

            set(fireRef(db, `users/`), this.users2);

            setTimeout(() => {
            this.currentPass = '';
            this.newEmail = '';
            this.users2 = [];

            document.getElementById("currentPass").classList.remove('validClass');
            document.getElementById("newEmail").classList.remove('validClass');
            }, 1000);            
          });
        }
      },
//Settings - change password
      showChangeP(){
         document.getElementById('profile__settings').style='display: none';
         document.getElementById('profile__change-pass').style='display: flex';
      },
      changePass(){
          let currPassC = 0;
          let validPassCount = 0;

          //current password

         if(this.currentPass !== this.userInfo.userPass){
            currPassC = 0;
            document.getElementById("currentPass2").classList.remove('validClass');
            document.getElementById("currentPass2").classList.add('invalidClass');
         } else {
            currPassC = 1;
            document.getElementById("currentPass2").classList.remove('invalidClass');
            document.getElementById("currentPass2").classList.add('validClass');
         }

          //new password
          if(this.newPass.length > 8 || this.newPass.length < 8){
          } else {
            validPassCount++;
          }

          if(this.newPass === this.userInfo.userPass){
             validPassCount = 0;
          }

          if(validPassCount === 1){
              validPassCount = 1;
              document.getElementById("newPass").classList.remove('invalidClass');
              document.getElementById("newPass").classList.add('validClass');
          } else {
              validPassCount = 0;
              document.getElementById("newPass").classList.remove('validClass');
              document.getElementById("newPass").classList.add('invalidClass');
          }

          if(validPassCount === 1 && currPassC === 1){;
            const dbRef = fireRef(getDatabase());
            const db = getDatabase();

            get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;
            
            currPassC = 0;
            validPassCount = 0;

            this.userInfo.userPass = this.newPass;
            localStorage.setItem('signIn', JSON.stringify(this.userInfo));

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.userInfo.userNickn){
                this.users2[i] = {};
                this.users2[i] = this.userInfo;
             }
            }

            set(fireRef(db, `users/`), this.users2);

            setTimeout(() => {
            this.currentPass = '';
            this.newPass = '';
            this.users2 = [];

            document.getElementById("currentPass2").classList.remove('validClass');
            document.getElementById("newPass").classList.remove('validClass');
            }, 1000); 
            });
          }
      },
//Settings - manage pref
      showManageP(){
         document.getElementById('profile__settings').style='display: none';
         document.getElementById('profile__manage-pref').style='display: flex';
      },
      managePref(){
         if(this.userInfo.language !== ''){
            const dbRef = fireRef(getDatabase());
            const db = getDatabase();

            get(child(dbRef, `users/`)).then((snapshot) => {
            let tempArr = [];
            snapshot.forEach(element => {
              tempArr.push(element.val());
            });
            this.users2 = tempArr;

            console.log(this.userInfo)

            localStorage.setItem('signIn', JSON.stringify(this.userInfo));

            for(let i = 0; i < this.users2.length; i++){
             if(this.users2[i].userNickn === this.userInfo.userNickn){
                this.users2[i] = {};
                this.users2[i] = this.userInfo;
             }
            }

            console.log(this.users2);

            set(fireRef(db, `users/`), this.users2);
            
            document.getElementById("profile__settings").style='display: flex';
            document.getElementById("profile__manage-pref").style='display: none';
            this.users2 = [];
            });
         }
      },

//Statistics
      statistShow(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__statistics').style='display: flex';
      },
//Tournaments
      tournPage(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__tournaments').style='display: flex';
      },
//Premium
      premiumPage(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__premium').style='display: block';
      },
      buyPrem(){
         if(this.userInfo.deposite === 0){
            return 0;
         }

         const dbRef = fireRef(getDatabase());
         const db = getDatabase();
         this.userInfo.premium = 'FREE';
         this.userInfo.deposite -= 10;

         document.getElementById('buyPrem2').style='visibility: hidden';
         document.getElementById('buyPrem3').style='visibility: hidden';

         document.getElementById('cancPrem').style='visibility: visible';

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
         });
      },
      buyPrem2(){
         if(this.userInfo.deposite === 0){
            return 0;
         }

         const dbRef = fireRef(getDatabase());
         const db = getDatabase();
         this.userInfo.premium = 'PRO';
         this.userInfo.deposite -= 15;
         document.getElementById('buyPrem').style='visibility: hidden';
         document.getElementById('buyPrem3').style='visibility: hidden';

         document.getElementById('cancPrem2').style='visibility: visible';

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
         });
      },
      buyPrem3(){
         if(this.userInfo.deposite === 0){
            return 0;
         }

         const dbRef = fireRef(getDatabase());
         const db = getDatabase();
         this.userInfo.premium = 'ORG';
         this.userInfo.deposite -= 5;
         document.getElementById('buyPrem').style='visibility: hidden';
         document.getElementById('buyPrem2').style='visibility: hidden';

         document.getElementById('cancPrem3').style='visibility: visible';

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
         });
      },

      cancPremPop(){
         document.getElementById('popup__cancSub').style='display: block';
         document.getElementById('popup__cancSub-main').style='display: block';
      },
      cancPrem(){
         const dbRef = fireRef(getDatabase());
         const db = getDatabase();

         this.userInfo.premium = '';

         document.getElementById('buyPrem').style='visibility: visible';
         document.getElementById('buyPrem2').style='visibility: visible';
         document.getElementById('buyPrem3').style='visibility: visible';

         document.getElementById('cancPrem3').style='visibility: hidden';
         document.getElementById('cancPrem2').style='visibility: hidden';
         document.getElementById('cancPrem').style='visibility: hidden';

         document.getElementById('popup__cancSub').style='display: none';
         document.getElementById('popup__cancSub-main').style='display: none';

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
         });
      },
      cancCancPrem(){
         document.getElementById('popup__cancSub').style='display: none';
         document.getElementById('popup__cancSub-main').style='display: none';
      },
      
//Info
      profileInfo(){
         document.getElementById('profile__user-panel').style='display: none';
         document.getElementById('profile__info').style='display: flex';
      },
//MyTeam
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
      saveNewTeam(){
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
            if(this.newTeam.playersList === undefined){
            this.newTeam.playersList = [];
            this.newTeam.playersList.push(this.userInfo.userNickn);
            } else {}


            if(this.teams[0] === '1'){
               this.teams.splice(0, 1);
            }

            this.teams.push(this.newTeam);
                   
            const dbRef = fireRef(getDatabase());
            set(fireRef(db, `teams/`), this.teams);

            this.userInfo.userTeams.push(this.newTeam);

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

            this.newTeam.teamLeader = this.userInfo.userNickn;
            this.users2 = [];
            this.mainGame = '';
            this.tempSrc = '';

            document.getElementById('img').style='display: none;'; 
            document.getElementById('profile__myteam').style='display: flex';
            document.getElementById('profile__create-team').style='display: none';
            
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
//
      gameProfileInfo(){
         if(this.userInfo.userTeams === undefined){
            this.userInfo.userTeams = [];
         } else {}

         if(this.userInfo.premium === 'FREE'){
            document.getElementById('buyPrem2').style='visibility: hidden';
            document.getElementById('buyPrem3').style='visibility: hidden';

            document.getElementById('cancPrem2').style='visibility: hidden';
            document.getElementById('cancPrem3').style='visibility: hidden';
         }
         if(this.userInfo.premium === 'PRO'){
            document.getElementById('buyPrem').style='visibility: hidden';
            document.getElementById('buyPrem3').style='visibility: hidden';

            document.getElementById('cancPrem').style='visibility: hidden';
            document.getElementById('cancPrem3').style='visibility: hidden';
         }
         if(this.userInfo.premium === 'ORG'){
            document.getElementById('buyPrem').style='visibility: hidden';
            document.getElementById('buyPrem2').style='visibility: hidden';

            document.getElementById('cancPrem2').style='visibility: hidden';
            document.getElementById('cancPrem').style='visibility: hidden';
         }
         if(this.userInfo.premium === ''){
            document.getElementById('cancPrem3').style='visibility: hidden';
            document.getElementById('cancPrem2').style='visibility: hidden';
            document.getElementById('cancPrem').style='visibility: hidden';
         }

          const dbRef = fireRef(getDatabase());

          get(child(dbRef, `support/`)).then((snapshot) => {
            let tempArr2 = [];
            snapshot.forEach(element => {
              tempArr2.push(element.val());
            });
            this.support = tempArr2;
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

          this.genderType = this.userInfo.gender;
          this.yourCountry = this.userInfo.userCountry;
          this.yourTeam = this.userInfo.mainTeam;
          this.newTeam.teamLeader = this.userInfo.userNickn;
      }
   },
   mounted(){
      this.gameProfileInfo() 
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

 .profile{
    display: flex;
    margin-top: 100px;
 }

 .validClass2{
    border-color: #4CB725 !important;
 }

 .invalidClass2{
    border-color: #8E2B2B !important;
 }

 .popup__cancSub-main{
      position: fixed;
      z-index: 10;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.8);
      top: 0;
      left: 0;

      display: none;
 }

 .popup__cancSub{
    width: 300px;
    height: 140px;
    background: #0B1729;
     
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%, -50%);
    display: none;
 }

 .popup__cancSub>div:last-child>button:first-child{
    background: green;
    color: white;
    height: 45px;
    width: 75px;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;

    border: none;
 }

 .popup__cancSub>div:last-child>button:last-child{
    background: red;
    color: white;
    height: 45px;
    width: 75px;
    font-weight: bold;
    margin-left: 10px;
    cursor: pointer;

    border: none;
 }

 .popup__cancSub>div:last-child{
    display: flex;
    justify-content: center;
    align-items: center;
 }

 .popup__cancSub>div:first-child{
    margin: 15px;
    font-size: 24px;
    text-align: center;
 }

 

/* left side */

 .profile__nav{
    border-right: 1px solid #1A1F24;
    padding-right: 70px;
 }

 .profile__nav>ul>li{
    list-style-image:  url('../assets/profile-circle.png');
 }

 .profile__nav>ul>li:first-child{
    list-style-image:  url('../assets/profile-circle2.png');

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #37B7FA;
 }

 .profile__nav>div:nth-child(2){
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    color: #909AA3;

    margin-top: 23px;
    margin-bottom: 5px;
 }

 .profile__nav>div:nth-child(3){
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 130%;
    color: #F5F5F5;
    margin-bottom: 7px;
 }

 .profile__nav>div:nth-child(4){
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    text-transform: uppercase;
    color: #37B7FA;
 }

 .profile__nav>div:nth-child(5){
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    text-transform: uppercase;
    color: #37B7FA;

    margin-bottom: 8px;
 }

 .profile__nav>ul{
    margin-top: 23px;
    margin-left: 18px;
 }

 .profile__nav>ul>li{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;

    margin-bottom: 24px;

    cursor: pointer;
 }

 .profile__nav>ul>li:last-child{
    margin-bottom: 98px;
 }

/* right side */

 .profile__user-panel{
    display: flex;
    flex-direction: column;
    margin-left: 130px;
 }

 .profile__user-panel>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 40px;
 }

 .profile__user-panel>div:last-child{
    display: flex;
    flex-wrap: wrap;
    max-width: 836px;
 }

 .profile__user-panel>div:last-child>div{
   padding: 30px 15px;
   width: 236px;
   background: #0F1215;
   border: 2px solid #20252B;
   box-sizing: border-box;
   text-align: center;

   font-family: Rubik;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 100%;
   text-align: center;
   color: #F5F5F5;

   margin-right: 64px;
   margin-bottom: 50px;

   cursor: pointer;
 }

 .profile__user-panel>div:last-child>div:nth-child(3n+3){
    margin-right: 0px;
 }

 .profile__user-panel>div:last-child>div:last-child{
    margin: 0 auto;
 }

/* game profile */
  
  .profile__game-profile{
     display: none;
     flex-direction: column;
     margin-left: 190px;
  }

  .profile__game-profile>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 40px;
 }

 .profile__game-profile>div:nth-child(2){
    border: 1px solid #20252B;
    padding: 44px 58px;
 }

 .profile__game-profile>div:nth-child(2)>div>input{
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

 .profile__game-profile>div:nth-child(2)>div:last-child>input{
    margin-bottom: 0px;
 }

 .profile__game-profile>div:nth-child(2)>div>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;
    margin-bottom: 12px;
 }

 .profile__game-profile>button{
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

/* support */

 .profile__support{
    flex-direction: column;
    margin-left: 240px;
    display: none;
 }

 .profile__support>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 42px;
 }

 .profile__support>div:nth-child(2)>input,
 .profile__support>div:nth-child(3)>input,
 .profile__support>div:nth-child(4)>input{
    width: 512px;
    height: 40px;
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

    margin-bottom: 10px;
    padding-left: 13px;
 }

 .profile__support>div:nth-child(5)>textarea{
    width: 512px;
    height: 325px;
    background: #0F1215;
    border: 2px solid #20252B;
    box-sizing: border-box;
    border-radius: 4px;
    resize: none;
    padding: 26px 16px;

    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;
 }

 .profile__support>button{
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    border-radius: 2px;
    padding: 14px 98px;
    width: 254px;
    height: 44px;

    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #F5F5F5;

    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 80px;
 }

/* deposite */
 /* *** */
  .profile__deposit{
     display: flex;
     flex-direction: column;
     margin-left: 45px;
     width: 928px;
     display: none;
  }

  .profile__deposit>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 48px;
     line-height: 137.5%;
     color: #F5F5F5;
     text-align: center;

     margin-bottom: 43px;
  }

  .profile__deposit>div:nth-child(2){
     background: #0D1D2C;
     padding-top: 22px;
     padding-left: 31px;
     padding-right: 31px;
  }

  .profile__deposit>div:nth-child(2)>div:first-child{
     display: flex;
  }

  .profile__deposit>div:nth-child(2)>div:first-child>div>img{
     margin: 0px 20px 37px 0px;
  }

  .profile__deposit>div:nth-child(2)>div:first-child>div:nth-child(2)>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 24px;
     line-height: 130%;
     color: #F5F5F5;
  }

  .profile__deposit>div:nth-child(2)>div:first-child>div:nth-child(2)>div:nth-child(2),
  .profile__deposit>div:nth-child(2)>div:first-child>div:nth-child(2)>div:nth-child(3){
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 130%;
     text-transform: uppercase;
     color: #37B7FA;
  }

  .profile__deposit>div:nth-child(2)>div:last-child{
     display: flex;
     justify-content: space-around;
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 24px;
     line-height: 130%;
     color: #ABABAB;
  }

  .profile__deposit>div:nth-child(2)>div:last-child>div{
     width: 170px;
     text-align: center;
     padding-bottom: 9px;
     cursor: pointer;
  }

  .methodAct{
     border-bottom: 4px solid #FFFFFF;
     color: #FFFFFF;
  }

  #widthdraw{
     background: #0D1D2C;
     padding-top: 19px;
     padding-bottom: 19px;
     padding-left: 41px;
     margin-top: 37px;
     margin-bottom: 100px;
  }

  #widthdraw>ul{
     list-style-type: none;
     border: 1px solid #20252B;
     box-sizing: border-box;
     border-radius: 2px;
     width: 272px;
  }

  #widthdraw>ul>li{
     display: inline-block;
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 100%;
     color: #7A8899;
     padding: 8px 17px;
     background: #0F1215;
  }

  .liActive{
     background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%) !important; 
     border-radius: 1px 0px 0px 1px !important;

     font-family: Rubik !important;
     font-style: normal !important;
     font-weight: normal !important;
     font-size: 14px !important;
     line-height: 100% !important;
     color: #F5F5F5 !important;
  }

  #widthdraw>div>div{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 100%;
     color: #CCCDCD;
  }

  #widthdraw>div:nth-child(2){
     margin-top: 34px;
  }

  #widthdraw>div>input{
     margin-bottom: 19px;
     width: 512px;
     height: 40px;
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
     margin-top: 5px;
  }

  #widthdraw>div:nth-child(4)>input{
     margin-bottom: 33px;
  }

  #widthdraw>button{
     width: 160px;
     height: 29px;
     left: 896px;
     top: 811px;
     background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
     border-radius: 1px 0px 0px 1px;
     display: block;
     margin: 0 auto;

     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 100%;
     color: #F5F5F5;
  }

 /* *** */

   #deposite{
     background: #0D1D2C;
     padding-top: 19px;
     padding-bottom: 19px;
     padding-left: 41px;
     margin-top: 37px;
     margin-bottom: 100px;
     height: 349px;
     display: none;
  }

  #deposite>ul{
     list-style-type: none;
     border: 1px solid #20252B;
     box-sizing: border-box;
     border-radius: 2px;
     width: 272px;
  }

  #deposite>ul>li{
     display: inline-block;
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 100%;
     color: #7A8899;
     padding: 8px 17px;
     background: #0F1215;
  }

  #deposite>div>div{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 100%;
     color: #CCCDCD;
  }

  #deposite>div:nth-child(2){
     margin-top: 34px;
  }

  #deposite>div>input{
     margin-bottom: 19px;
     width: 512px;
     height: 40px;
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
     margin-top: 5px;
  }

  #deposite>div:nth-child(3)>input{
     margin-bottom: 113px;
  }

  #deposite>button{
     width: 160px;
     height: 29px;
     left: 896px;
     top: 811px;
     background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
     border-radius: 1px 0px 0px 1px;
     display: block;
     margin: 0 auto;

     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 100%;
     color: #F5F5F5;
  }

 /* ***2 */

  #history{
     display: none;
     background: #0D1D2C;
     margin-top: 37px;
     padding-top: 19px;
     padding-bottom: 19px;
     padding-left: 41px;
     padding-right: 41px;
     height: 349px;
     margin-bottom: 100px;
  }

  #history>div{
     background: #0F1215;
     height: 311px;
     padding: 10px;
     overflow: auto;
  }

  #history>div>div{
     display: flex;
     margin-bottom: 10px;
  }

  #history>div>div>div:first-child{
     color: #4CB725;
     width: 100px;
  }

/* Settings */

 .profile__settings{
    flex-direction: column;
    justify-content: center;
    margin-left: 88px;
    display: none;
 }

 .profile__settings>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 40px;
 }

 .profile__settings>div:last-child{
    display: flex;
    flex-wrap: wrap;
    max-width: 836px;
 }

 .profile__settings>div:last-child>div{
   padding: 30px 15px;
   width: 236px;
   background: #0F1215;
   border: 2px solid #20252B;
   box-sizing: border-box;
   text-align: center;

   font-family: Rubik;
   font-style: normal;
   font-weight: bold;
   font-size: 19px;
   line-height: 100%;
   text-align: center;
   color: #F5F5F5;

   margin-right: 64px;
   margin-bottom: 50px;

   cursor: pointer;
 }

 .profile__settings>div:last-child>div:nth-child(3n+3){
    margin-right: 0px;
 }

/* details */

 .profile__acc-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 270px;
    display: none;
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
 .profile__acc-details>div:nth-child(7)>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 6px;
 }

 .profile__acc-details>div:nth-child(4)>select,
 .profile__acc-details>div:nth-child(5)>select,
 .profile__acc-details>div:nth-child(6)>select{
    margin-bottom: 16px;
 }


 .profile__acc-details>div:nth-child(2)>input,
 .profile__acc-details>div:nth-child(3)>input
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
 .profile__acc-details>div:nth-child(3)>input::placeholder
 {
   font-family: Rubik;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 100%;
   color: #627CA3;
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
 }

/* email change */

  .profile__change-email{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 270px;
    display: none;
  }

  .profile__change-email>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;

    margin-bottom: 62px;
  }

  .profile__change-email>div:nth-child(2)>div,
  .profile__change-email>div:nth-child(3)>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 6px;
  }

  .profile__change-email>div:nth-child(2)>input,
  .profile__change-email>div:nth-child(3)>input
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

 .profile__change-email>div:nth-child(3)>input{
      margin-bottom: 0px;
 }

 .profile__change-email>div:nth-child(2)>input::placeholder,
 .profile__change-email>div:nth-child(3)>input::placeholder
 {
   font-family: Rubik;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 100%;
   color: #627CA3;
 }

  .profile__change-email>button{
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    border-radius: 2px;
    width: 304px;
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
 }

/* change pass */

   .profile__change-pass{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 270px;
    display: none;
  }

  .profile__change-pass>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;

    margin-bottom: 62px;
  }

  .profile__change-pass>div:nth-child(2)>div,
  .profile__change-pass>div:nth-child(3)>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 6px;
  }

  .profile__change-pass>div:nth-child(2)>input,
  .profile__change-pass>div:nth-child(3)>input
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

 .profile__change-pass>div:nth-child(3)>input{
      margin-bottom: 0px;
 }

 .profile__change-pass>div:nth-child(2)>input::placeholder,
 .profile__change-pass>div:nth-child(3)>input::placeholder
 {
   font-family: Rubik;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 100%;
   color: #627CA3;
 }

  .profile__change-pass>button{
    background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
    border-radius: 2px;
    width: 304px;
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
 }

/* manage pref */

 .profile__manage-pref{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 270px;
    display: none;
  }

  .profile__manage-pref>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;

    margin-bottom: 62px;
  }

  .profile__manage-pref>div:nth-child(2)>div,
  .profile__manage-pref>div:nth-child(3)>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
    margin-bottom: 6px;
  }

  .profile__manage-pref>div:nth-child(2)>input,
  .profile__manage-pref>div:nth-child(3)>input
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

 .profile__manage-pref>div:nth-child(3)>input{
      margin-bottom: 0px;
 }

 .profile__manage-pref>div:nth-child(2)>input::placeholder,
 .profile__manage-pref>div:nth-child(3)>input::placeholder
 {
   font-family: Rubik;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 100%;
   color: #627CA3;
 }

  .profile__manage-pref>button{
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
 }

/* statistics */

  .profile__statistics{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 370px;
    display: none;
  }

  .profile__statistics>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;

    margin-bottom: 62px;
  }

/* Tournaments */
  .profile__tournaments{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 370px;
    display: none;
  }

  .profile__tournaments>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;

    margin-bottom: 62px;
  }

/* Premium */

  .profile__premium{
     display: none;
  }

  .profile__tornn{
    display: flex;
    flex-direction: column;
    margin-left: 18px;
  }

  .profile__rornam>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 62px;
  }

  .profile__tornn>div:last-child{
     display: flex; 
  }

  .profile__scard{
   margin-top: 42px;
   margin-bottom: 138px;
   margin-right: 19px;
   width: 320px;
   height: 540px;
   background: radial-gradient(250.9% 252.09% at -142.43% -152.09%, rgba(20, 114, 255, 0.35) 0%, rgba(20, 114, 255, 0) 120%), #181B1F;
  }

  .profile__scard2{
   margin-top: 42px;
   margin-bottom: 138px;
   margin-right: 19px;
   width: 320px;
   height: 540px;
   background: radial-gradient(250.9% 252.09% at -142.43% -152.09%, rgba(245, 200, 31, 0.25) 0%, rgba(245, 200, 31, 0) 120%), #181B1F;
  }

  .profile__scard3{
   margin-top: 42px;
   margin-bottom: 138px;
   width: 320px;
   height: 540px;
   background: radial-gradient(242.43% 252.09% at -142.43% -152.09%, rgba(66, 232, 128, 0.3) 0%, rgba(66, 232, 128, 0) 120%), #181B1F;
  }

  .profile__scard>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 42px;
     line-height: 100%;
     color: #1976EC;

     margin: 100px 22px 42px 22px;
  }

  .profile__scard>div:nth-child(2){
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #F5F5F5;
     opacity: 0.88;

     margin: 0px 16.5px 16px 22.5px;
  }

  .profile__scard>div:nth-child(3){
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 150%;
     color: #67707A;

     margin: 0px 16.5px 60px 22.5px;
  }

  .profile__scard>button{
     background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%), #095FE0;
     width: 136px;
     height: 48px;

     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 19px;
     text-align: center;
     color: #F5F5F5;
     margin-left: 22px;
     margin-bottom: 84px;
  }

  /* *** */

  .profile__scard2>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 42px;
     line-height: 100%;
     color: #CEA017;

     margin: 100px 22px 42px 22px;
  }

  .profile__scard2>div:nth-child(2){
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #F5F5F5;
     opacity: 0.88;

     margin: 0px 16.5px 16px 22.5px;
  }

  .profile__scard2>div:nth-child(3)>ul{
     margin: 16px 16.5px 99px 22.5px;
  }

  .profile__scard2>div:nth-child(3)>ul>li{
     list-style-type: none;
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 150%;
     color: #67707A;
     margin-bottom: 6px;
  }

  .profile__scard2>button{
     background: linear-gradient(180deg, #FFD321 0%, #9C6C0D 100%);
     width: 136px;
     height: 48px;

     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 19px;
     text-align: center;
     color: #F5F5F5;
     margin-left: 22px;
     margin-bottom: 84px;
  }

  /* --- */

  .profile__scard3>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 42px;
     line-height: 100%;
     color: #38C75F;

     margin: 100px 22px 42px 22px;
  }

  .profile__scard3>div:nth-child(2){
     font-family: Rubik;
     font-style: normal;
     font-weight: 500;
     font-size: 22px;
     line-height: 100%;
     color: #F5F5F5;
     opacity: 0.88;

     margin: 0px 16.5px 16px 22.5px;
  }

  .profile__scard3>div:nth-child(3){
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 150%;
     color: #67707A;

     margin: 0px 16.5px 60px 22.5px;
  }

  .profile__scard3>button{
     background: linear-gradient(180deg, #46F48C 0%, #2B9D37 100%);
     width: 136px;
     height: 48px;

     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 19px;
     text-align: center;
     color: #F5F5F5;
     margin-left: 22px;
     margin-bottom: 84px;
  }

/* Info */

  .profile__info{
     display: flex;
     margin-left: 90px;
     display: none;
  }

  .profile__info>div:first-child>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 100%;
     letter-spacing: 0.1em;
     text-transform: uppercase;
     color: #F5F5F5;

     margin-bottom: 26px;
  }

  .profile__info>div:first-child>div{
     display: flex;
     margin-bottom: 18px;
  }

  .profile__info>div:first-child>div>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 100%;
     color: #67707A;
     width: 118px;
  }

  .profile__info>div:first-child>div>div:last-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 100%;
     color: #FFFFFF;
     margin-left: 62px;
     width: 185px;
  }

  /* second */

  .profile__info>div:last-child{
     margin-left: 115px;
  }

  .profile__info>div:last-child>div:first-child{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 100%;
     letter-spacing: 0.1em;
     text-transform: uppercase;
     color: #F5F5F5;

     margin-bottom: 26px;
  }

    .profile__info>div:last-child>
   div:last-child>div:first-child>
   div>div{
     display: flex;
     align-items: center;
     justify-content: space-between;
  }

  .profile__info>div:last-child>
  div:last-child>div:first-child>
  div>div:first-child>
  div{
     font-family: Rubik;
     font-style: normal;
     font-weight: normal;
     font-size: 16px;
     line-height: 100%;
     color: #55AAFF;
  }

  .profile__info>div:last-child>
  div:last-child>div:first-child>
  div:nth-child(2)>div:first-child>
  div{
     color: #55FF8F;
  }

    .profile__info>div:last-child>
  div:last-child>div:first-child>
  div:nth-child(3)>div:first-child>
  div{
     color: #B455FF;
  }

    .profile__info>div:last-child>
  div:last-child>div:first-child>
  div:nth-child(4)>div:first-child>
  div{
     color: #FF9255;
  }

    .profile__info>div:last-child>
  div:last-child>div:first-child>
  div:nth-child(5)>div:first-child>
  div{
     color: #FF5555;
  }

   .profile__info>div:last-child>
   div:last-child>div:first-child>
   div>div:last-child{
      background: #2B353F;
      border-radius: 2px;
      width: 274px;
      height: 2px;
      margin-top: 10px;
   }

   .profile__info>div:last-child>
   div:last-child>div:first-child>
   div>div:last-child>
   div{
      width: 197px;
      height: 4px;
      background: #55AAFF;
      border-radius: 2px;
   }

   .profile__info>div:last-child>
   div:last-child>div:first-child>
   div:nth-child(2)>div:last-child>
   div{
      background: #55FF8F;
   }

   .profile__info>div:last-child>
   div:last-child>div:first-child>
   div:nth-child(3)>div:last-child>
   div{
      background: #B455FF;
   }

   .profile__info>div:last-child>
   div:last-child>div:first-child>
   div:nth-child(4)>div:last-child>
   div{
      background: #FF9255;
   }

   .profile__info>div:last-child>
   div:last-child>div:first-child>
   div:nth-child(5)>div:last-child>
   div{
      background: #FF5555;
   }

   .profile__info>div:last-child>
   div:last-child>div:first-child>
   div{
      margin-bottom: 26px;
   }

   .profile__info>div:last-child>
   div:last-child>div:first-child{
      margin-right: 68px;
   }

   /* three */

   .profile__info>div:last-child>
   div:last-child>div:last-child>div{
      width: 70px;
      height: 70px;
      background: #0F1215;
      border: 1px solid #55AAFF;
      box-sizing: border-box;
      border-radius: 999px;
      margin-bottom: 19px;
   }

   .profile__info>div:last-child>
   div:last-child>div:last-child>div:nth-child(2){
      border: 1px solid #B455FF;
   }

   .profile__info>div:last-child>
   div:last-child>div:last-child>div:last-child{
      border: 1px solid #FF5555;
   }

   .profile__info>div:last-child>
   div:last-child{
      display: flex;
   }

/* My profile */

 .profile__myteam{
    display: flex;
    flex-direction: column;
    
    margin-left: 130px;
    display: none;
 }

 .profile__myteam>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 40px;
 }

 .profile__myteam>div:last-child{
    display: flex;
    flex-wrap: wrap;
    max-width: 836px;
 }

 .profile__myteam>div:last-child>div{
   padding: 30px 15px;
   width: 236px;
   background: #0F1215;
   border: 2px solid #20252B;
   box-sizing: border-box;
   text-align: center;

   font-family: Rubik;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 100%;
   text-align: center;
   color: #F5F5F5;

   margin-right: 64px;
   margin-bottom: 50px;

   cursor: pointer;
 }

 .profile__myteam>div:last-child>div:nth-child(3n+3){
    margin-right: 0px;
 }

/* add team form */

  .profile__create-team{
     flex-direction: column;
     margin-left: 190px;
     display: none;
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

/* edit team */

 .profile__edit-team{
     display: flex;
     flex-direction: column;
     margin-left: 190px;
     display: none;
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

  .profile__edit-team>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 40px;
 }

 .profile__edit-team>div:nth-child(2){
    border: 1px solid #20252B;
    padding: 44px 58px;
 }

 .profile__edit-team>div:nth-child(2)>div>input{
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

  .profile__edit-team>div:nth-child(2)>div>select{
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


 .profile__edit-team>div:nth-child(2)>div:last-child>div:last-child{
    display: flex;
    align-items: center;
 }

 .profile__edit-team>div:nth-child(2)>div:last-child>div:last-child>div{
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

  .profile__edit-team>div:nth-child(2)>div:last-child>div>input{
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

 .profile__edit-team>div:nth-child(2)>div:last-child>div>input{
    margin-bottom: 0px;
    width: 375px;
 }

 .profile__edit-team>div:nth-child(2)>div>div{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;
    margin-bottom: 12px;
 }

 .profile__edit-team>div:last-child{
    display: flex;
    justify-content: center;
 }

 .profile__edit-team>div:last-child>button{
    display: block;
    width: 159px;
    height: 51px;
    background: #1A222D;
    
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #F5F5F5;

    margin-top: 33px;
    margin-bottom: 50px;
 }

 .profile__edit-team>div:last-child>button:first-child{
    margin-right: 34px;
 }

  .profile__edit-team>div:nth-child(3){
    border: 1px solid #20252B;
    padding: 44px 58px;
    margin-top: 24px;
  }

  .profile__edit-team>div:nth-child(3)>div:nth-child(2)>button{
     font-family: Rubik;
     font-style: normal;
     font-weight: bold;
     font-size: 16px;
     line-height: 100%;
     text-align: center;
     color: #0A61E1;

     width: 188px;
     height: 40px;
     background: #1A222D;

     margin-right: 19px;

     cursor: pointer;
  }


 .profile__edit-team>div:nth-child(4){
    border: 1px solid #20252B;
    padding: 44px 58px;
    margin-top: 24px;
 }

 .profile__edit-team>div:nth-child(4)>div:nth-child(2)>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    color: #CCCDCD;
    margin-bottom: 12px;
 }

 .profile__edit-team>div:nth-child(4)>div>div{

 }

  .profile__edit-team>div:nth-child(4)>div>div>input{
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

 .profile__edit-team>div:nth-child(4)>div>div>button{
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

 .profile__edit-team>div:nth-child(4)>div>div{
    display: flex;
    align-items: center;
 }

 .img{
    border: 2px solid #20252B;
    margin-top: 10px;
    width: 128px; 
    height: 128px; 
 }

/* Add user */

 .profile__add-players{
    display: flex;
    flex-direction: column;
    
    margin-left: 130px;
    width: 880px;
    display: none;
 }

 .profile__add-players>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 40px;
 }

 .profile__add-players>div:first-child>span{
    margin-right: 10px;
 }

 .profile__add-players>div:last-child{
    display: flex;
    flex-wrap: wrap;
    max-width: 836px;
 }

 .profile__add-players>div:last-child>div{
   padding: 30px 15px;
   width: 236px;
   background: #0F1215;
   border: 2px solid #20252B;
   box-sizing: border-box;
   text-align: center;

   font-family: Rubik;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 100%;
   text-align: center;
   color: #F5F5F5;

   margin-right: 64px;
   margin-bottom: 50px;

   cursor: pointer;
 }

 .profile__add-players>div:last-child>div:nth-child(3n+3){
    margin-right: 0px;
 }

/* Players list */

 .profile__players-list{
    display: flex;
    flex-direction: column;
    
    margin-left: 130px;
    display: none;
    width: 880px;
 }

 .profile__players-list>div:first-child{
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 137.5%;
    color: #F5F5F5;
    text-align: center;

    margin-bottom: 40px;
 }

 .profile__players-list>div:first-child>span{
    margin-right: 10px;
 }

 .profile__players-list>div:last-child{
    display: flex;
    flex-wrap: wrap;
    max-width: 836px;
 }

 .profile__players-list>div:last-child>div{
   padding: 30px 15px;
   width: 236px;
   background: #0F1215;
   border: 2px solid #20252B;
   box-sizing: border-box;
   text-align: center;

   font-family: Rubik;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 100%;
   text-align: center;
   color: #F5F5F5;

   margin-right: 64px;
   margin-bottom: 50px;

   cursor: pointer;
 }

 .profile__players-list>div:last-child>div:nth-child(3n+3){
    margin-right: 0px;
 }

/* */

 @media (max-width: 992px){
     .profile__nav{
         display: none;
     }

     .profile{
        margin-top: 0px;
     }

     .profile__user-panel{
        margin-left: 0px;
     }

     .profile__tools{
        margin-bottom: 125px;
        display: flex;
        align-items: center;
     }

     .profile__myteam{
        margin-left: 0px;
     }

     .profile__info{
        margin-left: 0px;
     }

     .profile__deposit>div:nth-child(2){
        max-width: 860px;
        padding-right: 0px;
     }

     #widthdraw{
        width: 850px;
     }
     #deposite{
        width: 850px;
     }
     #history{
        width: 850px;
        padding: 20px;
     }

     .profile__scard, .profile__scard2, .profile__scard3{
         width: 287px;
         height: 475px;

         margin-bottom: 0px;
      }

      .profile__scard>div:first-child, .profile__scard2>div:first-child, .profile__scard3>div:first-child{
         margin-top: 30px;
      }

      .profile__scard>button, .profile__scard2>button, .profile__scard3>button{
         margin-bottom: 0px;
      }

      .profile__tornn{
         margin-left: 0px;
      }

      .profile__rornam>div{
         margin-bottom: 0px;
      }

      .profile__support{
         margin-left: 0px;
      }

      .profile__statistics{
         display: flex;
         align-items: center;
         width: 975px;
         margin-left: 0px;
      }

      .profile__tournaments{
         display: flex;
         align-items: center;
         width: 975px;
         margin-left: 0px;
      }

      .profile__game-profile{
         margin-left: 0px;
      }

      .profile__settings{
         margin-left: 0px;
      }

      .profile__acc-details{
         margin-left: 50px;
      }

      .profile__change-email{
         margin-left: 50px;
      }

      .profile__change-pass{
         margin-left: 50px;
      }

      .profile__manage-pref{
         margin-left: 50px;
      }
 }

 @media(max-width: 768px){
    .profile__user-panel>div:last-child>div:nth-child(3n+3){
          margin-right: 64px;
      }

      .profile__user-panel>div:last-child>div:last-child{
          margin: 0;
          
          max-height: 86px;
      }

      .profile__user-panel>div:last-child{
         margin-left: 100px;
      }

      .profile__info{
         display: flex; 
         flex-wrap: wrap;
         width: 740px;
         justify-content: center;
      }

      .profile__info>div:last-child{
         margin-left: 50px;
         margin-top: 25px;

      }

      .profile__myteam>div:last-child{
         padding-left: 100px;
      }

      .profile__deposit>div:nth-child(2){
         max-width: 660px;
      }

      #widthdraw{
         max-width: 650px;
      }
      #deposite{
         max-width: 650px;
      }
      #history{
         max-width: 650px;
      }

      .profile__deposit{
         max-width: 690px;
         margin-left: 5px;
      }

      .profile__tornn>div:last-child{
         flex-wrap: wrap;
         width: 410px;

      }

      .profile__scard{
         width: 410px;
         margin-right: 0px;
      }
      .profile__scard2{
         width: 410px;
         margin-right: 0px;
      }
      .profile__scard3{
         width: 410px;
         margin-right: 0px;
      }

      .profile__tornn{
         margin-left: 80px;
      }

      .profile__statistics{
         max-width: 768px;
      }

      .profile__tournaments{
         max-width: 768px;
      }

      .profile__support{
         margin-left: 35px;
      }

      .profile__settings>div:last-child{

      }

      .profile__settings>div:last-child>div:nth-child(3n+3){
         margin-right: 64px;
      }
      
      #profile__settings-menu{
         margin-left: 110px;
      }
 }

 @media(max-width: 576px){
    .profile__user-panel>div:last-child>div{
       margin-right: 0px;
       width: 400px;
       margin-bottom: 15px;
    }
    .profile__user-panel>div:last-child>div:nth-child(3n+3){
       margin-right: 0px;
    }

    .profile__user-panel>div:last-child{
       margin-left: 75px;
    }

    #body{
       overflow-x: hidden;
    }

    .profile__info{
       max-width: 515px;
    }

    .profile__myteam{
       max-width: 540px;
    }

    .profile__myteam>div:last-child>div{
       margin-right: 0px;
       width: 400px;
       margin-bottom: 15px;
    }
    .profile__myteam>div:first-child{
       margin-left: 60px;
    }

    .profile__create-team{
       margin-left: 0px;
    }

    .profile__deposit{
       max-width: 576px;
    }
    .profile__deposit>div:first-child{
       max-width: 540px;
    }

    .profile__deposit>div:nth-child(2){
       max-width: 520px;
    }
    #widthdraw{
       max-width: 545px;
       padding-left: 5px;
    }
    #deposite{
       max-width: 545px;
       padding-left: 5px;
    }
    #history{
       max-width: 510px;
    }
    #history>div{
       max-width: 495px;
    }

    .profile__statistics{
       max-width: 576px;
    }
    .profile__tournaments{
       max-width: 576px;
    }
    .profile__support{
       margin-left: 23px;
    }

    .profile__settings>div:last-child>div{
       margin-right: 0px;
       width: 400px;
       margin-bottom: 15px;
    }

    #profile__settings-menu{
       margin-left: 85px;
    }
 }

 .cancPrem{
    background: red !important;
    cursor: pointer;

    max-width: 100px;
 }
   
</style>
