(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73d14ed2"],{"13a6":function(e,t,n){"use strict";n("86cd")},"3a30":function(e,t,n){"use strict";n.r(t);n("fb6a");var c=n("7a23"),a={class:"wrapper"},l={class:"container",id:"container__adm"},i={class:"adm-categorys",id:"adm-categorys"},d={class:"adm-tournaments",id:"adm-tournaments"},s=Object(c["f"])("div",null,[Object(c["f"])("input",{type:"text",placeholder:"Search by name, prize, signed, etc."})],-1),o=Object(c["h"])("Add Tournament"),u=Object(c["f"])("ul",null,[Object(c["f"])("li",null,"Tournament`s name"),Object(c["f"])("li",null,"Entry price"),Object(c["f"])("li",null,"Pool price"),Object(c["f"])("li",null,"Signed"),Object(c["f"])("li",null,"Start in")],-1),m=Object(c["h"])("edit"),r={class:"adm-teams",id:"adm-teams"},b=Object(c["f"])("div",null,[Object(c["f"])("input",{type:"text",placeholder:"Search by name, prize, signed, etc."})],-1),f=Object(c["h"])("Add Team"),O=Object(c["f"])("ul",null,[Object(c["f"])("li",null,"Team"),Object(c["f"])("li",null,"Leader"),Object(c["f"])("li",null,"Main Game"),Object(c["f"])("li",null,"Creation Date"),Object(c["f"])("li"),Object(c["f"])("li")],-1),j=Object(c["h"])("edit"),y={class:"adm-players",id:"adm-players"},v=Object(c["f"])("div",null,[Object(c["f"])("input",{type:"text",placeholder:"Search by name, prize, signed, etc."})],-1),p=Object(c["f"])("ul",null,[Object(c["f"])("li",null,"Nickname"),Object(c["f"])("li",null,"Password"),Object(c["f"])("li",null,"Country"),Object(c["f"])("li",null,"Team"),Object(c["f"])("li",null,"Name"),Object(c["f"])("li",null,"Age"),Object(c["f"])("li",{style:{"margin-right":"35px"}},"Rank")],-1),h=["onUpdate:modelValue"],g=Object(c["f"])("option",{value:"user"},"User",-1),E=Object(c["f"])("option",{value:"admin"},"Admin",-1),B=Object(c["f"])("option",{value:"moderator"},"Moderator",-1),C=[g,E,B],I=Object(c["h"])("edit"),P=["onClick"],k={class:"adm-payments",id:"adm-payments"},w=Object(c["f"])("div",null,[Object(c["f"])("input",{type:"text",placeholder:"Search by name, prize, signed, etc."})],-1),A=Object(c["f"])("ul",null,[Object(c["f"])("li",null,"User"),Object(c["f"])("li",null,"Balance"),Object(c["f"])("li",null,"Payout"),Object(c["f"])("li",null,"Deposit"),Object(c["f"])("li",null,"system"),Object(c["f"])("li",null,"date"),Object(c["f"])("li",null,"Approve")],-1),S=["onClick"],D=["onClick"],L=Object(c["f"])("button",null,"Sent",-1),x=[L],T=Object(c["f"])("button",null,"Declined",-1),U=[T],N={class:"adm-games",id:"adm-games"},G=Object(c["f"])("div",null,[Object(c["f"])("input",{type:"text",placeholder:"Search by name, prize, signed, etc."})],-1),F={id:"saveSChange"},_=Object(c["h"])("Add Game"),M=Object(c["f"])("ul",null,[Object(c["f"])("li",null,"Title"),Object(c["f"])("li",null,"Active")],-1),z={style:{width:"235px"}},K={style:{"text-align":"center",width:"142px"}},R=Object(c["h"])("edit");function Y(e,t,n,g,E,B){var L=Object(c["C"])("left-pannel"),T=Object(c["C"])("top-pannel"),Y=Object(c["C"])("router-link");return Object(c["x"])(),Object(c["e"])("div",a,[Object(c["i"])(L),Object(c["i"])(T),Object(c["f"])("div",l,[Object(c["f"])("div",i,[Object(c["f"])("div",{onClick:t[0]||(t[0]=function(){return B.showTourn&&B.showTourn.apply(B,arguments)}),id:"admP1",class:"activeAdmC"},"Tournaments"),Object(c["f"])("div",{onClick:t[1]||(t[1]=function(){return B.showTeam&&B.showTeam.apply(B,arguments)}),id:"admP2"},"Teams"),Object(c["f"])("div",{onClick:t[2]||(t[2]=function(){return B.showPlayers&&B.showPlayers.apply(B,arguments)}),id:"admP3"},"Players"),Object(c["f"])("div",{onClick:t[3]||(t[3]=function(){return B.showPayments&&B.showPayments.apply(B,arguments)}),id:"admP4"},"Payments"),Object(c["f"])("div",{onClick:t[4]||(t[4]=function(){return B.showGames&&B.showGames.apply(B,arguments)}),id:"admP5"},"Games")]),Object(c["f"])("div",d,[Object(c["f"])("div",null,[s,Object(c["f"])("div",null,[Object(c["f"])("button",null,[Object(c["i"])(Y,{to:"/tournament-register"},{default:Object(c["K"])((function(){return[o]})),_:1})])])]),Object(c["f"])("div",null,[u,Object(c["f"])("ul",null,[Object(c["f"])("div",null,[(Object(c["x"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])(E.tournaments,(function(t){return Object(c["x"])(),Object(c["e"])("li",{key:t.id},[Object(c["f"])("div",null,Object(c["E"])(t.tournName),1),Object(c["f"])("div",null,Object(c["E"])(t.tournRegCost)+"$",1),Object(c["f"])("div",null,Object(c["E"])(t.tournPrizePool)+"$",1),Object(c["f"])("div",null,Object(c["E"])(t.tournPlayersList.length)+" / "+Object(c["E"])("1 vs 1"===t.tournMode?"2":"2 vs 2"===t.tournMode?"4":"5 vs 5"===t.tournMode?"10":"none"),1),Object(c["f"])("div",null,[Object(c["h"])(Object(c["E"])(t.tournStartTime1.slice(-5))+" ",1),Object(c["f"])("div",null,[Object(c["i"])(Y,{to:{name:"Tournament-edit",params:{tournURL:t.tournURL}},onClick:function(n){return e.storageProfile2(t)}},{default:Object(c["K"])((function(){return[m]})),_:2},1032,["to","onClick"])])])])})),128))])])])]),Object(c["f"])("div",r,[Object(c["f"])("div",null,[b,Object(c["f"])("div",null,[Object(c["f"])("button",null,[Object(c["i"])(Y,{to:"/create-team"},{default:Object(c["K"])((function(){return[f]})),_:1})])])]),Object(c["f"])("div",null,[O,Object(c["f"])("ul",null,[Object(c["f"])("div",null,[(Object(c["x"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])(E.teams,(function(e){return Object(c["x"])(),Object(c["e"])("li",{key:e.id},[Object(c["f"])("div",null,Object(c["E"])(e.teamName),1),Object(c["f"])("div",null,Object(c["E"])(e.teamLeader),1),Object(c["f"])("div",null,Object(c["E"])(e.mainGame),1),Object(c["f"])("div",null,[Object(c["h"])(Object(c["E"])(B.takeDate(e))+" ",1),Object(c["f"])("div",null,[Object(c["i"])(Y,{to:{name:"Edit-team",params:{url:e.url}},onClick:function(t){return B.editTeamFunc(e)}},{default:Object(c["K"])((function(){return[j]})),_:2},1032,["to","onClick"])])])])})),128))])])])]),Object(c["f"])("div",y,[Object(c["f"])("div",null,[v,Object(c["f"])("div",null,[Object(c["f"])("button",{style:{visibility:"hidden"},id:"saveSChange",onClick:t[5]||(t[5]=function(){return B.takeSave&&B.takeSave.apply(B,arguments)})},"Save Changes")])]),Object(c["f"])("div",null,[p,Object(c["f"])("ul",null,[Object(c["f"])("div",null,[(Object(c["x"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])(E.users,(function(e){return Object(c["x"])(),Object(c["e"])("li",{key:e.id},[Object(c["f"])("div",null,Object(c["E"])(e.userNickn),1),Object(c["f"])("div",null,Object(c["E"])(B.userPass(e)),1),Object(c["f"])("div",null,Object(c["E"])(e.userCountry),1),Object(c["f"])("div",null,Object(c["E"])(e.mainTeam),1),Object(c["f"])("div",null,Object(c["E"])(B.userName(e)),1),Object(c["f"])("div",null,Object(c["E"])(B.calcAge(e)),1),Object(c["f"])("div",null,[Object(c["L"])(Object(c["f"])("select",{"onUpdate:modelValue":function(t){return e.status=t},onClick:t[6]||(t[6]=function(){return B.showSaveBtn&&B.showSaveBtn.apply(B,arguments)})},C,8,h),[[c["H"],e.status]]),Object(c["f"])("div",null,[Object(c["i"])(Y,{to:{name:"Edit-user",params:{userId:e.userId}},onClick:function(t){return B.editUserFunc(e)}},{default:Object(c["K"])((function(){return[I]})),_:2},1032,["to","onClick"])])]),Object(c["f"])("button",{style:{display:"none"},id:"saveBtn",onClick:function(t){return B.changeStatus(e)}},"Save",8,P)])})),128))])])])]),Object(c["f"])("div",k,[Object(c["f"])("div",null,[w,Object(c["f"])("div",null,[Object(c["f"])("button",{style:{visibility:"hidden"},id:"saveSChange",onClick:t[7]||(t[7]=function(){return B.takeSave&&B.takeSave.apply(B,arguments)})},"Save Changes")])]),Object(c["f"])("div",null,[A,Object(c["f"])("ul",null,[Object(c["f"])("div",null,[(Object(c["x"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])(E.payments,(function(e){return Object(c["x"])(),Object(c["e"])("li",{key:e.id},[Object(c["f"])("div",null,Object(c["E"])(void 0===e.widthUser?e.depositUser:e.widthUser),1),Object(c["f"])("div",null,"$"+Object(c["E"])(void 0===e.widthBalance?e.depositBalance:e.widthBalance)+" | "+Object(c["E"])(void 0===e.widthDoit?e.depositDoit:e.widthDoit)+" DOIT",1),Object(c["f"])("div",null,Object(c["E"])(void 0===e.widthAmount?e.depositPay:e.widthAmount),1),Object(c["f"])("div",null,Object(c["E"])(void 0===e.depositAmount?e.widthDeposite:e.depositAmount),1),Object(c["f"])("div",null,Object(c["E"])(void 0===e.widthSystem?e.depositSystem:e.widthSystem),1),Object(c["f"])("div",null,Object(c["E"])(B.getPayDaye(e)),1),Object(c["f"])("div",null,[Object(c["f"])("div",{style:Object(c["p"])("none"===e.approve?"display: block":"display: none;")},[Object(c["f"])("button",{onClick:function(t){return B.apprYes(e)}},"Yes",8,S),Object(c["f"])("button",{onClick:function(t){return B.apprNo(e)}},"No",8,D)],4),Object(c["f"])("div",{style:Object(c["p"])("sent"===e.approve?"display: block":"display: none;")},x,4),Object(c["f"])("div",{style:Object(c["p"])("decl"===e.approve?"display: block":"display: none;")},U,4)])])})),128))])])])]),Object(c["f"])("div",N,[Object(c["f"])("div",null,[G,Object(c["f"])("div",null,[Object(c["f"])("button",F,[Object(c["i"])(Y,{to:"/create-game"},{default:Object(c["K"])((function(){return[_]})),_:1})])])]),Object(c["f"])("div",null,[M,Object(c["f"])("ul",null,[Object(c["f"])("div",null,[(Object(c["x"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])(E.listGames,(function(e,t){return Object(c["x"])(),Object(c["e"])("li",{key:e.id},[Object(c["f"])("div",z,Object(c["E"])(e.gameName),1),Object(c["f"])("div",K,Object(c["E"])(e.gameActOrNot),1),Object(c["f"])("div",null,[Object(c["i"])(Y,{to:{name:"Game-edit",params:{gameURL:e.gameURL}},onClick:function(t){return B.editGameFunc(e)},style:{"margin-left":"690px",color:"#CCCDCD","font-size":"12px","text-decoration":"none"}},{default:Object(c["K"])((function(){return[R]})),_:2},1032,["to","onClick"])])])})),128))])])])])])])}n("99af"),n("d3b7"),n("159b"),n("e9c4"),n("b0c0"),n("a9e3");var J=n("66ce"),$=(n("588e"),n("e758")),V=n("a83c"),H={data:function(){return{tournaments:[],teams:[],users:[],tempUsers:[],payments:[],listGames:[]}},components:{TopPannel:$["a"],LeftPannel:V["a"]},methods:{apprYes:function(e){e.approve="sent";for(var t=0;t<this.payments.length;t++)void 0!==this.payments[t].widthDate?this.payments[t].widthDate===e.widthDate&&(this.payments[t]=e):this.payments[t].depositDate===e.depositDate&&(this.payments[t]=e);var n=Object(J["c"])();Object(J["e"])(Object(J["d"])(n,"payments/"),this.payments)},apprNo:function(e){e.approve="decl";for(var t=0;t<this.payments.length;t++)void 0!==this.payments[t].widthDate?this.payments[t].widthDate===e.widthDate&&(this.payments[t]=e):this.payments[t].depositDate===e.depositDate&&(this.payments[t]=e);var n=Object(J["c"])();Object(J["e"])(Object(J["d"])(n,"payments/"),this.payments)},getPayDaye:function(e){var t=new Date(void 0===e.widthDate?e.depositDate:e.widthDate),n=t.getMonth(),c=t.getDate(),a=t.getFullYear();return"".concat(n,"/").concat(c,"/").concat(a)},showSaveBtn:function(){document.getElementById("saveSChange").style="visibility: visible;"},takeSave:function(){document.getElementById("saveBtn").click()},changeStatus:function(e){var t=this,n=Object(J["d"])(Object(J["c"])());Object(J["b"])(Object(J["a"])(n,"users/")).then((function(n){var c=[];n.forEach((function(e){c.push(e.val())})),t.tempUsers=c;for(var a=0;a<t.tempUsers.length;a++)if(t.tempUsers[a].userId===e.userId){t.tempUsers[a]=e;break}console.log(t.tempUsers);var l=Object(J["c"])();Object(J["e"])(Object(J["d"])(l,"users/"),t.tempUsers),document.getElementById("saveSChange").style="visibility: hidden;",t.tempUsers=[]}))},showTourn:function(){document.getElementById("adm-tournaments").style="display: block;",document.getElementById("adm-teams").style="display: none;",document.getElementById("adm-players").style="display: none;",document.getElementById("adm-payments").style="display: none;",document.getElementById("adm-games").style="display: none;",document.getElementById("admP1").classList.add("activeAdmC"),document.getElementById("admP2").classList.remove("activeAdmC"),document.getElementById("admP3").classList.remove("activeAdmC"),document.getElementById("admP4").classList.remove("activeAdmC"),document.getElementById("admP5").classList.remove("activeAdmC")},showTeam:function(){document.getElementById("adm-tournaments").style="display: none;",document.getElementById("adm-teams").style="display: block;",document.getElementById("adm-players").style="display: none;",document.getElementById("adm-payments").style="display: none;",document.getElementById("adm-games").style="display: none;",document.getElementById("admP1").classList.remove("activeAdmC"),document.getElementById("admP2").classList.add("activeAdmC"),document.getElementById("admP3").classList.remove("activeAdmC"),document.getElementById("admP4").classList.remove("activeAdmC"),document.getElementById("admP5").classList.remove("activeAdmC")},showPlayers:function(){document.getElementById("adm-tournaments").style="display: none;",document.getElementById("adm-teams").style="display: none;",document.getElementById("adm-players").style="display: block;",document.getElementById("adm-payments").style="display: none;",document.getElementById("adm-games").style="display: none;",document.getElementById("admP1").classList.remove("activeAdmC"),document.getElementById("admP2").classList.remove("activeAdmC"),document.getElementById("admP3").classList.add("activeAdmC"),document.getElementById("admP4").classList.remove("activeAdmC"),document.getElementById("admP5").classList.remove("activeAdmC")},showPayments:function(){document.getElementById("adm-tournaments").style="display: none;",document.getElementById("adm-teams").style="display: none;",document.getElementById("adm-players").style="display: none;",document.getElementById("adm-payments").style="display: block;",document.getElementById("adm-games").style="display: none;",document.getElementById("admP1").classList.remove("activeAdmC"),document.getElementById("admP2").classList.remove("activeAdmC"),document.getElementById("admP3").classList.remove("activeAdmC"),document.getElementById("admP4").classList.add("activeAdmC"),document.getElementById("admP5").classList.remove("activeAdmC")},showGames:function(){document.getElementById("adm-tournaments").style="display: none;",document.getElementById("adm-teams").style="display: none;",document.getElementById("adm-players").style="display: none;",document.getElementById("adm-payments").style="display: none;",document.getElementById("adm-games").style="display: block;",document.getElementById("admP1").classList.remove("activeAdmC"),document.getElementById("admP2").classList.remove("activeAdmC"),document.getElementById("admP3").classList.remove("activeAdmC"),document.getElementById("admP4").classList.remove("activeAdmC"),document.getElementById("admP5").classList.add("activeAdmC")},takeDate:function(e){var t=new Date(e.url),n=t.getMonth(),c=t.getDate(),a=t.getFullYear();return"".concat(n,"/").concat(c,"/").concat(a)},editTeamFunc:function(e){localStorage.setItem("team-edit",JSON.stringify(e))},regDate:function(e){for(var t="",n=0;n<e.userBirth.length;n++)"."!==e.userBirth[n]?t+=e.userBirth[n]:t+="/";return t},userName:function(e){for(var t="",n=0;n<e.name.length;n++){if(" "===e.name[n])break;t+=e.name[n]}return t},userPass:function(e){for(var t="",n=0;n<e.userPass.length;n++)t+="*";return t},calcAge:function(e){var t=e.userBirth.slice(-4),n=new Date,c=new Date(n),a=c.getFullYear(),l=a-Number(t);return l},editUserFunc:function(e){localStorage.setItem("user-edit",JSON.stringify(e))},editGameFunc:function(e){localStorage.setItem("game-edit",JSON.stringify(e))},firstTournFunc:function(){var e=this,t=Object(J["d"])(Object(J["c"])());Object(J["b"])(Object(J["a"])(t,"tournaments/")).then((function(t){var n=[];t.forEach((function(e){n.push(e.val())})),e.tournaments=n})),Object(J["b"])(Object(J["a"])(t,"users/")).then((function(t){var n=[];t.forEach((function(e){n.push(e.val())})),e.users=n})),Object(J["b"])(Object(J["a"])(t,"teams/")).then((function(t){var n=[];t.forEach((function(e){n.push(e.val())})),e.teams=n})),Object(J["b"])(Object(J["a"])(t,"payments/")).then((function(t){var n=[];t.forEach((function(e){n.push(e.val())})),e.payments=n})),Object(J["b"])(Object(J["a"])(t,"games/")).then((function(t){var n=[];t.forEach((function(e){n.push(e.val())})),e.listGames=n}))}},mounted:function(){this.firstTournFunc()}},X=(n("13a6"),n("6b0d")),q=n.n(X);const Q=q()(H,[["render",Y]]);t["default"]=Q},"86cd":function(e,t,n){},b0c0:function(e,t,n){var c=n("83ab"),a=n("5e77").EXISTS,l=n("e330"),i=n("9bf2").f,d=Function.prototype,s=l(d.toString),o=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=l(o.exec),m="name";c&&!a&&i(d,m,{configurable:!0,get:function(){try{return u(o,s(this))[1]}catch(e){return""}}})},fb6a:function(e,t,n){"use strict";var c=n("23e7"),a=n("da84"),l=n("e8b5"),i=n("68ee"),d=n("861d"),s=n("23cb"),o=n("07fa"),u=n("fc6a"),m=n("8418"),r=n("b622"),b=n("1dde"),f=n("f36a"),O=b("slice"),j=r("species"),y=a.Array,v=Math.max;c({target:"Array",proto:!0,forced:!O},{slice:function(e,t){var n,c,a,r=u(this),b=o(r),O=s(e,b),p=s(void 0===t?b:t,b);if(l(r)&&(n=r.constructor,i(n)&&(n===y||l(n.prototype))?n=void 0:d(n)&&(n=n[j],null===n&&(n=void 0)),n===y||void 0===n))return f(r,O,p);for(c=new(void 0===n?y:n)(v(p-O,0)),a=0;O<p;O++,a++)O in r&&m(c,a,r[O]);return c.length=a,c}})}}]);
//# sourceMappingURL=chunk-73d14ed2.bff5dc52.js.map