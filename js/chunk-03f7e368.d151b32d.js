(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03f7e368"],{"25f0":function(e,t,s){"use strict";var a=s("e330"),n=s("5e77").PROPER,i=s("6eeb"),l=s("825a"),r=s("3a9b"),u=s("577e"),o=s("d039"),c=s("ad6d"),m="toString",d=RegExp.prototype,p=d[m],f=a(c),b=o((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),y=n&&p.name!=m;(b||y)&&i(RegExp.prototype,m,(function(){var e=l(this),t=u(e.source),s=e.flags,a=u(void 0===s&&r(d,e)&&!("flags"in d)?f(e):s);return"/"+t+"/"+a}),{unsafe:!0})},a434:function(e,t,s){"use strict";var a=s("23e7"),n=s("da84"),i=s("23cb"),l=s("5926"),r=s("07fa"),u=s("7b0b"),o=s("65f0"),c=s("8418"),m=s("1dde"),d=m("splice"),p=n.TypeError,f=Math.max,b=Math.min,y=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var s,a,n,m,d,O,v=u(this),j=r(v),g=i(e,j),T=arguments.length;if(0===T?s=a=0:1===T?(s=0,a=j-g):(s=T-2,a=b(f(l(t),0),j-g)),j+s-a>y)throw p(h);for(n=o(v,a),m=0;m<a;m++)d=g+m,d in v&&c(n,m,v[d]);if(n.length=a,s<a){for(m=g;m<j-a;m++)d=m+a,O=m+s,d in v?v[O]=v[d]:delete v[O];for(m=j;m>j-a+s;m--)delete v[m-1]}else if(s>a)for(m=j-a;m>g;m--)d=m+a-1,O=m+s-1,d in v?v[O]=v[d]:delete v[O];for(m=0;m<s;m++)v[m+g]=arguments[m+2];return v.length=j-a+s,n}})},ad6d:function(e,t,s){"use strict";var a=s("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},c41d:function(e,t,s){},c8ab:function(e,t,s){"use strict";s.r(t);var a=s("7a23"),n=s("cd5c"),i=s.n(n),l={class:"wrapper"},r={class:"container"},u={class:"profile__edit-team",id:"profile__edit-team"},o=Object(a["f"])("div",null,"Edit Team",-1),c=Object(a["f"])("div",{class:"basic"},"Basic info",-1),m=Object(a["f"])("div",null,"Team name",-1),d=["value"],p=Object(a["f"])("div",null,"Main Game",-1),f=Object(a["g"])('<option value="Dota II">Dota II</option><option value="CS:GO">CS:GO</option><option value="VALORANT">VALORANT</option><option value="WarCraft III">WarCraft III</option><option value="StarCraft II">StarCraft II</option><option value="Fifa 2022">Fifa 2022</option>',6),b=[f],y=Object(a["f"])("div",null,"Team Leader",-1),h=["value"],O=Object(a["f"])("div",null,"Join password",-1),v=["value"],j=Object(a["f"])("div",null,"Country",-1),g=["value"],T=Object(a["f"])("div",null,"Web-site",-1),I=["value"],w=Object(a["f"])("div",null,"URL",-1),E=Object(a["f"])("div",null,"Doit.gg/team",-1),L=["value"],k=Object(a["f"])("div",{class:"basic"},"Players",-1),B=Object(a["f"])("div",{class:"basic"},"Advance",-1),_=Object(a["f"])("div",null,"logo 128 x 128",-1),N=["value"],S=Object(a["f"])("button",{onclick:"iE.click()"},"UPLOAD",-1),x=["src"],C={class:"popup-temp-player-list",id:"popup-temp-player-list"},P=Object(a["f"])("div",null," Users List ",-1),G=Object(a["f"])("img",{src:i.a},null,-1),A=[G],D={class:"temp-player-list"},U=["onClick"],R={class:"popup-player-list",id:"popup-player-list"},F=Object(a["f"])("div",null," Players List ",-1),J=Object(a["f"])("img",{src:i.a},null,-1),M=[J],V={class:"temp-player-list2"};function W(e,t,s,n,i,f){var G=Object(a["C"])("left-pannel"),J=Object(a["C"])("top-pannel");return Object(a["x"])(),Object(a["e"])("div",l,[Object(a["i"])(G),Object(a["i"])(J),Object(a["f"])("div",r,[Object(a["f"])("div",u,[o,Object(a["f"])("div",null,[c,Object(a["f"])("div",null,[m,Object(a["f"])("input",{type:"text",value:i.tempTeam.teamName,onInput:t[0]||(t[0]=function(e){return i.tempTeam.teamName=e.target.value})},null,40,d)]),Object(a["f"])("div",null,[p,Object(a["L"])(Object(a["f"])("select",{class:"select-css",id:"select-css","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.mainGame=e})},b,512),[[a["H"],i.mainGame]])]),Object(a["f"])("div",null,[y,Object(a["f"])("input",{type:"text",value:i.tempTeam.teamLeader,onInput:t[2]||(t[2]=function(e){return i.tempTeam.teamLeader=e.target.value}),disabled:""},null,40,h)]),Object(a["f"])("div",null,[O,Object(a["f"])("input",{type:"text",value:i.tempTeam.joinPass,onInput:t[3]||(t[3]=function(e){return i.tempTeam.joinPass=e.target.value})},null,40,v)]),Object(a["f"])("div",null,[j,Object(a["f"])("input",{type:"text",value:i.tempTeam.teamCountry,onInput:t[4]||(t[4]=function(e){return i.tempTeam.teamCountry=e.target.value})},null,40,g)]),Object(a["f"])("div",null,[T,Object(a["f"])("input",{type:"text",value:i.tempTeam.webSite,onInput:t[5]||(t[5]=function(e){return i.tempTeam.webSite=e.target.value})},null,40,I)]),Object(a["f"])("div",null,[w,Object(a["f"])("div",null,[E,Object(a["f"])("input",{type:"text",value:i.tempTeam.url,onInput:t[6]||(t[6]=function(e){return i.tempTeam.url=e.target.value}),disabled:""},null,40,L)])])]),Object(a["f"])("div",null,[k,Object(a["f"])("div",null,[Object(a["f"])("button",{onClick:t[7]||(t[7]=function(){return f.showPlayersList&&f.showPlayersList.apply(f,arguments)})},"List of players"),Object(a["f"])("button",{onClick:t[8]||(t[8]=function(){return f.showUsersList&&f.showUsersList.apply(f,arguments)})},"Add players")])]),Object(a["f"])("div",null,[B,Object(a["f"])("div",null,[_,Object(a["f"])("div",null,[Object(a["f"])("input",{type:"text",placeholder:"Logo URL",id:"tempUrl2",value:i.tempTeam.img,disabled:""},null,8,N),Object(a["f"])("input",{type:"file",accept:"image/*",id:"iE",style:{display:"none"},onChange:t[9]||(t[9]=function(){return f.fileSelectEdit&&f.fileSelectEdit.apply(f,arguments)})},null,32),S]),Object(a["f"])("img",{src:i.tempTeam.img,id:"img2",class:"img"},null,8,x)])]),Object(a["f"])("div",null,[Object(a["f"])("button",{onClick:t[10]||(t[10]=function(){return f.deleteTeam&&f.deleteTeam.apply(f,arguments)})},"Delete Team"),Object(a["f"])("button",{onClick:t[11]||(t[11]=function(){return f.editTeamInfo&&f.editTeamInfo.apply(f,arguments)})},"Save Team")])]),Object(a["f"])("div",C,[Object(a["f"])("div",null,[Object(a["f"])("div",null,[P,Object(a["f"])("div",{onClick:t[12]||(t[12]=function(){return f.closeUsersList&&f.closeUsersList.apply(f,arguments)})},A)]),Object(a["f"])("div",D,[(Object(a["x"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(i.users,(function(e,t){return Object(a["x"])(),Object(a["e"])("div",{key:e.id,onClick:function(s){return f.addNewPlayer(e,t)}},Object(a["E"])(e.userNickn),9,U)})),128))])])]),Object(a["f"])("div",R,[Object(a["f"])("div",null,[Object(a["f"])("div",null,[F,Object(a["f"])("div",{onClick:t[13]||(t[13]=function(){return f.closePlayersList&&f.closePlayersList.apply(f,arguments)})},M)]),Object(a["f"])("div",V,[(Object(a["x"])(!0),Object(a["e"])(a["a"],null,Object(a["B"])(i.tempTeam.playersList,(function(e,s){return Object(a["x"])(),Object(a["e"])("div",{key:e.id,onClick:t[14]||(t[14]=function(){})},Object(a["E"])(e.userNickn),1)})),128))])])])])])}s("d3b7"),s("25f0"),s("159b"),s("a434"),s("e9c4");var H=s("66ce"),$=s("588e"),q=s("e758"),z=s("a83c"),K={data:function(){return{teams:[],users:[],userInfo:this.$store.getters.LOGIN,deposite:0,users2:[],users3:[],support:[],suppName:"",suppTopic:"",suppSubj:"",suppProb:"",widthName:"",widthEmail:"",widthAmount:"",depositName:"",depositAmount:"",genderType:"",yourCountry:"",yourTeam:"",dayA:"",mounthA:"",yearA:"",currentPass:"",newEmail:"",newPass:"",newTeam:{teamName:"",mainGame:"",teamLeader:"",joinPass:"",teamCountry:"",webSite:"",url:Date.now(),img:""},imgData:null,tempSrc:"",storage:null,mainGame:"",mainPlayer:"",tempTeam:JSON.parse(localStorage.getItem("team-edit")),tempIndex:0,back:"<<"}},components:{TopPannel:q["a"],LeftPannel:z["a"]},methods:{showMyTeams:function(){document.getElementById("profile__user-panel").style="display: none",document.getElementById("profile__myteam").style="display: flex"},addTeam:function(){document.getElementById("profile__myteam").style="display: none",document.getElementById("profile__create-team").style="display: flex"},fileSelect:function(e){var t=document.getElementById("img");this.imgData=e.target.files[0];var s,a=new FileReader;a.onload=function(e){for(var a=e.target.result,n=0;n<a.length;++n)s=a.charCodeAt(n),s.toString(16)," ";t.src=a,this.tempSrc=t.src,document.getElementById("tempUrl").value=this.tempSrc},a.readAsDataURL(this.imgData),this.storage=Object($["b"])(),document.getElementById("img").style="display: block;"},saveNewTeam:function(){var e=this,t=Object($["c"])(this.storage,"teams-image/"+this.newTeam.url);Object($["d"])(t,this.imgData).then((function(e){console.log("Файл завантажено")})),setTimeout((function(){Object($["a"])(Object($["c"])(e.storage,"teams-image/"+e.newTeam.url)).then((function(t){e.newTeam.img=t,console.log(e.newTeam);var s=Object(H["d"])(Object(H["c"])()),a=Object(H["c"])();Object(H["b"])(Object(H["a"])(s,"users/")).then((function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.users2=s,e.newTeam.mainGame=e.mainGame,void 0===e.newTeam.playersList&&(e.newTeam.playersList=[],e.newTeam.playersList.push(e.userInfo.userNickn)),"1"===e.teams[0]&&e.teams.splice(0,1),e.teams.push(e.newTeam);Object(H["d"])(Object(H["c"])());Object(H["e"])(Object(H["d"])(a,"teams/"),e.teams),e.userInfo.userTeams.push(e.newTeam),localStorage.setItem("signIn",JSON.stringify(e.userInfo));for(var n=0;n<e.users2.length;n++)e.users2[n].userNickn===e.userInfo.userNickn&&(e.users2[n]={},e.users2[n]=e.userInfo);Object(H["e"])(Object(H["d"])(a,"users/"),e.users2),e.newTeam={teamName:"",mainGame:"",teamLeader:"",joinPass:"",teamCountry:"",webSite:"",url:Date.now(),img:""},e.newTeam.teamLeader=e.userInfo.userNickn,e.users2=[],e.mainGame="",e.tempSrc="",document.getElementById("img").style="display: none;",document.getElementById("profile__myteam").style="display: flex",document.getElementById("profile__create-team").style="display: none"}))}))}),1e3)},editTeam:function(e,t){this.tempTeam=e,this.tempIndex=t,this.mainGame=this.tempTeam.mainGame,document.getElementById("profile__myteam").style="display: none",document.getElementById("profile__edit-team").style="display: flex"},fileSelectEdit:function(e){var t=document.getElementById("img2");this.imgData=e.target.files[0];var s,a=new FileReader;a.onload=function(e){for(var a=e.target.result,n=0;n<a.length;++n)s=a.charCodeAt(n),s.toString(16)," ";t.src=a,this.tempSrc=t.src,document.getElementById("tempUrl2").value=this.tempSrc},a.readAsDataURL(this.imgData),this.storage=Object($["b"])(),document.getElementById("img2").style="display: block;"},editTeamInfo:function(){var e=this;if(null!==this.imgData){var t=Object($["c"])(this.storage,"teams-image/"+this.tempTeam.url);Object($["d"])(t,this.imgData).then((function(e){console.log("Файл завантажено")})),setTimeout((function(){Object($["a"])(Object($["c"])(e.storage,"teams-image/"+e.tempTeam.url)).then((function(t){e.tempTeam.img=t;var s=Object(H["d"])(Object(H["c"])()),a=Object(H["c"])();Object(H["b"])(Object(H["a"])(s,"users/")).then((function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.users2=s,e.tempTeam.mainGame=e.mainGame;for(var n=0,i=0;i<e.users2.length;i++){if(void 0!==e.users2[i].userTeams)for(var l=0;l<e.users2[i].userTeams.length;l++)if(e.users2[i].userTeams[l].url===e.tempTeam.url){e.users2[i].userTeams[l]=e.tempTeam,n=1;break}if(1===n){n=0;break}}for(var r=0;r<e.teams.length;r++)if(e.teams[r].url===e.tempTeam.url){e.teams[r]=e.tempTeam;break}Object(H["e"])(Object(H["d"])(a,"users/"),e.users2),Object(H["e"])(Object(H["d"])(a,"teams/"),e.teams),window.location.href="/admin-pannel"}))}))}),1e3)}else{var s=Object(H["d"])(Object(H["c"])()),a=Object(H["c"])();Object(H["b"])(Object(H["a"])(s,"users/")).then((function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.users2=s,e.tempTeam.mainGame=e.mainGame;for(var n=0,i=0;i<e.users2.length;i++){if(console.log(1),void 0!==e.users2[i].userTeams){console.log(2);for(var l=0;l<e.users2[i].userTeams.length;l++)if(console.log(3),e.users2[i].userTeams[l].url===e.tempTeam.url){console.log(4),e.users2[i].userTeams[l]=e.tempTeam,n=1;break}}if(1===n){n=0;break}}for(var r=0;r<e.teams.length;r++)if(e.teams[r].url===e.tempTeam.url){e.teams[r]=e.tempTeam;break}Object(H["e"])(Object(H["d"])(a,"users/"),e.users2),Object(H["e"])(Object(H["d"])(a,"teams/"),e.teams),window.location.href="/admin-pannel"}))}},addPlayers:function(){var e=this;document.getElementById("profile__edit-team").style="display: none",document.getElementById("profile__add-players").style="display: flex";var t=Object(H["d"])(Object(H["c"])());Object(H["b"])(Object(H["a"])(t,"users/")).then((function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.users2=s;for(var a=0;a<e.users2.length;a++)for(var n=0;n<e.tempTeam.playersList.length;n++)e.tempTeam.playersList[n]===e.users2[a].userNickn&&e.users2.splice(a,1);e.users2[0].userNickn===e.userInfo.userNickn&&(e.users2=[]),console.log(e.users2)}))},addPlayer:function(e,t){void 0===this.tempTeam.playersList?(this.tempTeam.playersList=[],this.tempTeam.playersList.push(e.userNickn),this.users2.splice(t,1)):(this.tempTeam.playersList.push(e.userNickn),this.users2.splice(t,1))},listPlayers:function(){document.getElementById("profile__edit-team").style="display: none",document.getElementById("profile__players-list").style="display: flex"},editLBack:function(){document.getElementById("profile__edit-team").style="display: flex",document.getElementById("profile__players-list").style="display: none"},editUBlack:function(){document.getElementById("profile__edit-team").style="display: flex",document.getElementById("profile__add-players").style="display: none"},deleteTeam:function(){for(var e=this,t=0;t<this.userInfo.userTeams.length;t++)this.tempTeam.teamName===this.userInfo.userTeams[t].teamName&&this.userInfo.userTeams.splice(t,1);var s=Object(H["d"])(Object(H["c"])()),a=Object(H["c"])();Object(H["b"])(Object(H["a"])(s,"users/")).then((function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.users2=s,localStorage.setItem("signIn",JSON.stringify(e.userInfo));for(var n=0;n<e.users2.length;n++)e.users2[n].userNickn===e.userInfo.userNickn&&(e.users2[n]={},e.users2[n]=e.userInfo);Object(H["e"])(Object(H["d"])(a,"users/"),e.users2),e.users2=[],document.getElementById("profile__myteam").style="display: flex",document.getElementById("profile__edit-team").style="display: none"}))},teamFFunc:function(){var e=this;this.mainGame=this.tempTeam.mainGame;var t=Object(H["d"])(Object(H["c"])());Object(H["b"])(Object(H["a"])(t,"users/")).then((function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.users=s,console.log(e.users)})),Object(H["b"])(Object(H["a"])(t,"teams/")).then((function(t){var s=[];t.forEach((function(e){s.push(e.val())})),e.teams=s}))},tournCheck4:function(){!1===this.tournament.tournShow?(this.tournament.tournShow=!0,document.getElementById("tournCheck4").style="display: block"):!0===this.tournament.tournShow&&(this.tournament.tournShow=!1,document.getElementById("tournCheck4").style="display: none")},closeUsersList:function(){document.getElementById("popup-temp-player-list").style="display: none",document.getElementById("body").style="overflow: auto"},showUsersList:function(){if(void 0===this.tempTeam.playersList){this.tempTeam.playersList=[];for(var e=0;e<this.users.length;e++)this.users[e].userNickn===this.tempTeam.teamLeader&&(this.tempTeam.playersList.push(this.users[e]),this.users.splice(e,1))}for(var t=0;t<this.users.length;t++)for(var s=0;s<this.tempTeam.playersList.length;s++)this.tempTeam.playersList[s].userNickn===this.users[t].userNickn&&this.users.splice(t,1);this.users[0].userNickn===this.tempTeam.teamLeader&&(this.users=[]),document.getElementById("body").style="overflow: hidden",document.getElementById("popup-temp-player-list").style="display: block"},addNewPlayer:function(e,t){void 0===this.tempTeam.playersList&&(this.tempTeam.playersList=[]),this.tempTeam.playersList.push(e),this.users.splice(t,1)},closePlayersList:function(){document.getElementById("popup-player-list").style="display: none",document.getElementById("body").style="overflow: auto"},showPlayersList:function(){document.getElementById("body").style="overflow: hidden",document.getElementById("popup-player-list").style="display: block"}},mounted:function(){this.teamFFunc()}},Q=(s("e97a"),s("6b0d")),X=s.n(Q);const Y=X()(K,[["render",W]]);t["default"]=Y},e97a:function(e,t,s){"use strict";s("c41d")}}]);
//# sourceMappingURL=chunk-03f7e368.d151b32d.js.map