(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0ae3e58"],{"25f0":function(t,e,n){"use strict";var o=n("e330"),a=n("5e77").PROPER,r=n("6eeb"),u=n("825a"),i=n("3a9b"),s=n("577e"),m=n("d039"),l=n("ad6d"),c="toString",d=RegExp.prototype,g=d[c],h=o(l),y=m((function(){return"/a/b"!=g.call({source:"a",flags:"b"})})),p=a&&g.name!=c;(y||p)&&r(RegExp.prototype,c,(function(){var t=u(this),e=s(t.source),n=t.flags,o=s(void 0===n&&i(d,t)&&!("flags"in d)?h(t):n);return"/"+e+"/"+o}),{unsafe:!0})},2841:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),a={class:"wrapper"},r={class:"container"},u={class:"basic-info"},i=Object(o["f"])("div",{class:"basic"},"Basic Info",-1),s=Object(o["f"])("div",null,"Game Name*",-1),m=["value"],l=Object(o["f"])("div",null,"URL",-1),c=Object(o["f"])("div",null,"Doit.gg/games",-1),d=["value"],g=Object(o["f"])("div",null,"Active",-1),h={class:"form_radio"},y=Object(o["f"])("label",{for:"radio-5"},"No",-1),p={class:"form_radio"},f=Object(o["f"])("label",{for:"radio-6"},"Yes",-1),b=Object(o["f"])("div",null,"Description",-1),v=["value"],C={class:"sponsors"},k=Object(o["f"])("div",{class:"basic"},"Capsules",-1),O=Object(o["f"])("div",null,"Main Banner 387x500*",-1),B=["value"],E=["src"],I=Object(o["f"])("div",null,"Mobile Banner 329x129*",-1),j=["value"],S=["src"],L=Object(o["f"])("div",null,"Game icon 32x32*",-1),A=["value"],P=["src"],w=Object(o["f"])("div",null,"Game logo 253x45*",-1),N=["value"],D=["src"],R=Object(o["f"])("div",null,"Game background 2206 x 2278",-1),G=["value"],U=["src"],x=Object(o["f"])("div",null,"Game logo 64x64*",-1),M=["value"],X=["src"],V={class:"game-info"},T=Object(o["f"])("div",{class:"basic"},"Toruanment system",-1),F=Object(o["f"])("div",null,"Active",-1),W={class:"form_radio"},z=Object(o["f"])("label",{for:"radio-1"},"No",-1),_={class:"form_radio"},Y=Object(o["f"])("label",{for:"radio-2"},"Yes",-1),J=Object(o["f"])("div",null,"Servers system",-1),H=Object(o["g"])('<option value="Dota 2">Dota 2</option><option value="CS:GO">CS:GO</option><option value="Valorant">Valorant</option><option value="WarCraft 3">WarCraft 3</option><option value="StarCraft 2">StarCraft 2</option><option value="Fifa 2022">Fifa 2022</option>',6),q=[H],K={class:"game-info",id:"game__info"},Q=Object(o["f"])("div",{class:"basic"},"Map Voting",-1),Z=Object(o["f"])("div",null,"Active",-1),$={class:"form_radio"},tt=Object(o["f"])("label",{for:"radio-3"},"No",-1),et={class:"form_radio"},nt=Object(o["f"])("label",{for:"radio-4"},"Yes",-1),ot=Object(o["f"])("div",null,"Maps",-1),at=["value","onInput"],rt=["id","value"],ut=["id","onChange"],it=["onClick"],st=["src","id"],mt={class:"three-buttons"};function lt(t,e,n,H,lt,ct){var dt=Object(o["C"])("left-pannel"),gt=Object(o["C"])("top-pannel");return Object(o["x"])(),Object(o["e"])("div",a,[Object(o["i"])(dt),Object(o["i"])(gt),Object(o["f"])("div",r,[Object(o["f"])("div",u,[i,Object(o["f"])("div",null,[s,Object(o["f"])("input",{type:"text",value:lt.game.gameName,onInput:e[0]||(e[0]=function(t){return lt.game.gameName=t.target.value})},null,40,m)]),Object(o["f"])("div",null,[l,Object(o["f"])("div",null,[c,Object(o["f"])("input",{type:"text",value:lt.game.gameURL,disabled:""},null,8,d)])]),Object(o["f"])("div",null,[g,Object(o["f"])("div",h,[Object(o["L"])(Object(o["f"])("input",{id:"radio-5",type:"radio",name:"radio2",value:"No","onUpdate:modelValue":e[1]||(e[1]=function(t){return lt.game.gameActOrNot=t})},null,512),[[o["G"],lt.game.gameActOrNot]]),y]),Object(o["f"])("div",p,[Object(o["L"])(Object(o["f"])("input",{id:"radio-6",type:"radio",name:"radio2",value:"Yes","onUpdate:modelValue":e[2]||(e[2]=function(t){return lt.game.gameActOrNot=t})},null,512),[[o["G"],lt.game.gameActOrNot]]),f])]),Object(o["f"])("div",null,[b,Object(o["f"])("textarea",{placeholder:"You can write here somebody about your tournament...",value:lt.game.gameDesc,onInput:e[3]||(e[3]=function(t){return lt.game.gameDesc=t.target.value})},null,40,v)])]),Object(o["f"])("div",C,[k,Object(o["f"])("div",null,[O,Object(o["f"])("div",null,[Object(o["f"])("input",{type:"text",placeholder:"banner url",id:"tempsURL1",value:lt.game.gameBanner,disabled:""},null,8,B),Object(o["f"])("input",{type:"file",accept:"image/*",id:"sp1",style:{display:"none"},onChange:e[4]||(e[4]=function(t){return ct.addCapsPhot1(t)})},null,32),Object(o["f"])("button",{onClick:e[5]||(e[5]=function(t){return ct.addNewPhot1()})},"UPLOAD")]),Object(o["f"])("img",{src:lt.game.gameBanner,id:"imgSpons1",class:"img"},null,8,E)]),Object(o["f"])("div",null,[I,Object(o["f"])("div",null,[Object(o["f"])("input",{type:"text",placeholder:"banner url",id:"tempsURL2",value:lt.game.gameMobile,disabled:""},null,8,j),Object(o["f"])("input",{type:"file",accept:"image/*",id:"sp2",style:{display:"none"},onChange:e[6]||(e[6]=function(t){return ct.addCapsPhot2(t)})},null,32),Object(o["f"])("button",{onClick:e[7]||(e[7]=function(t){return ct.addNewPhot2()})},"UPLOAD")]),Object(o["f"])("img",{src:lt.game.gameMobile,id:"imgSpons1",class:"img"},null,8,S)]),Object(o["f"])("div",null,[L,Object(o["f"])("div",null,[Object(o["f"])("input",{type:"text",placeholder:"banner url",id:"tempsURL3",value:lt.game.gameIcon,disabled:""},null,8,A),Object(o["f"])("input",{type:"file",accept:"image/*",id:"sp3",style:{display:"none"},onChange:e[8]||(e[8]=function(t){return ct.addCapsPhot3(t)})},null,32),Object(o["f"])("button",{onClick:e[9]||(e[9]=function(t){return ct.addNewPhot3()})},"UPLOAD")]),Object(o["f"])("img",{src:lt.game.gameIcon,id:"imgSpons1",class:"img"},null,8,P)]),Object(o["f"])("div",null,[w,Object(o["f"])("div",null,[Object(o["f"])("input",{type:"text",placeholder:"banner url",id:"tempsURL4",value:lt.game.gameLogo253,disabled:""},null,8,N),Object(o["f"])("input",{type:"file",accept:"image/*",id:"sp4",style:{display:"none"},onChange:e[10]||(e[10]=function(t){return ct.addCapsPhot4(t)})},null,32),Object(o["f"])("button",{onClick:e[11]||(e[11]=function(t){return ct.addNewPhot4()})},"UPLOAD")]),Object(o["f"])("img",{src:lt.game.gameLogo253,id:"imgSpons1",class:"img"},null,8,D)]),Object(o["f"])("div",null,[R,Object(o["f"])("div",null,[Object(o["f"])("input",{type:"text",placeholder:"banner url",id:"tempsURL5",value:lt.game.gameBack,disabled:""},null,8,G),Object(o["f"])("input",{type:"file",accept:"image/*",id:"sp5",style:{display:"none"},onChange:e[12]||(e[12]=function(t){return ct.addCapsPhot5(t)})},null,32),Object(o["f"])("button",{onClick:e[13]||(e[13]=function(t){return ct.addNewPhot5()})},"UPLOAD")]),Object(o["f"])("img",{src:lt.game.gameBack,id:"imgSpons1",class:"img"},null,8,U)]),Object(o["f"])("div",null,[x,Object(o["f"])("div",null,[Object(o["f"])("input",{type:"text",placeholder:"banner url",id:"tempsURL6",value:lt.game.gameLogo64,disabled:""},null,8,M),Object(o["f"])("input",{type:"file",accept:"image/*",id:"sp6",style:{display:"none"},onChange:e[14]||(e[14]=function(t){return ct.addCapsPhot6(t)})},null,32),Object(o["f"])("button",{onClick:e[15]||(e[15]=function(t){return ct.addNewPhot6()})},"UPLOAD")]),Object(o["f"])("img",{src:lt.game.gameLogo64,id:"imgSpons1",class:"img"},null,8,X)])]),Object(o["f"])("div",V,[T,Object(o["f"])("div",null,[Object(o["f"])("div",null,[F,Object(o["f"])("div",W,[Object(o["L"])(Object(o["f"])("input",{id:"radio-1",type:"radio",name:"radio",value:"No","onUpdate:modelValue":e[16]||(e[16]=function(t){return lt.game.gameTActive=t})},null,512),[[o["G"],lt.game.gameTActive]]),z]),Object(o["f"])("div",_,[Object(o["L"])(Object(o["f"])("input",{id:"radio-2",type:"radio",name:"radio",value:"Yes","onUpdate:modelValue":e[17]||(e[17]=function(t){return lt.game.gameTActive=t})},null,512),[[o["G"],lt.game.gameTActive]]),Y])]),J,Object(o["L"])(Object(o["f"])("select",{"onUpdate:modelValue":e[18]||(e[18]=function(t){return lt.game.gameServerS=t})},q,512),[[o["H"],lt.game.gameServerS]])])]),Object(o["f"])("div",K,[Q,Object(o["f"])("div",null,[Object(o["f"])("div",null,[Z,Object(o["f"])("div",$,[Object(o["L"])(Object(o["f"])("input",{id:"radio-3",type:"radio",name:"radio1",value:"No","onUpdate:modelValue":e[19]||(e[19]=function(t){return lt.game.gameVActive=t})},null,512),[[o["G"],lt.game.gameVActive]]),tt]),Object(o["f"])("div",et,[Object(o["L"])(Object(o["f"])("input",{id:"radio-4",type:"radio",name:"radio1",value:"Yes","onUpdate:modelValue":e[20]||(e[20]=function(t){return lt.game.gameVActive=t})},null,512),[[o["G"],lt.game.gameVActive]]),nt]),ot,Object(o["f"])("div",null,[(Object(o["x"])(!0),Object(o["e"])(o["a"],null,Object(o["B"])(lt.game.gameMaps,(function(t,e){return Object(o["x"])(),Object(o["e"])("div",{key:t.id},[Object(o["f"])("div",null," Map "+Object(o["E"])(e+1),1),Object(o["f"])("div",null,[Object(o["f"])("input",{type:"text",placeholder:"Map name",value:t.mapName,onInput:function(e){return t.mapName=e.target.value},style:{color:"#CCCDCD"}},null,40,at),Object(o["f"])("input",{type:"text",placeholder:"Logo map 256 x 256",id:"tempsURLL"+e,value:t.mapImg,disabled:"",style:{color:"#CCCDCD"}},null,8,rt),Object(o["f"])("input",{type:"file",accept:"image/*",id:"map"+e,style:{display:"none"},onChange:function(n){return ct.addBtnMapPhot(t,e,n)}},null,40,ut),Object(o["f"])("button",{onClick:function(t){return ct.addMapPhot(e)}},"UPLOAD",8,it)]),Object(o["f"])("img",{src:t.mapImg,id:"imgSponsL"+e,class:"img"},null,8,st)])})),128)),Object(o["f"])("button",{onClick:e[21]||(e[21]=function(){return ct.addMap&&ct.addMap.apply(ct,arguments)})},"+ Add Map")])])])]),Object(o["f"])("div",mt,[Object(o["f"])("button",{onClick:e[22]||(e[22]=function(){return ct.deleteGame&&ct.deleteGame.apply(ct,arguments)})},"Delete Game"),Object(o["f"])("button",{onClick:e[23]||(e[23]=function(){return ct.saveNewGame&&ct.saveNewGame.apply(ct,arguments)})},"Save Game")])])])}n("d3b7"),n("25f0"),n("a434"),n("159b");var ct=n("66ce"),dt=n("588e"),gt=n("e758"),ht=n("a83c"),yt={components:{TopPannel:gt["a"],LeftPannel:ht["a"]},data:function(){return{gamesList:[],imgData1:null,imgData2:null,imgData3:null,imgData4:null,imgData5:null,imgData6:null,game:JSON.parse(localStorage.getItem("game-edit"))}},methods:{tournCheck1:function(){!1===this.tournament.tourn3RD?(this.tournament.tourn3RD=!0,document.getElementById("tournCheck").style="display: block"):!0===this.tournament.tourn3RD&&(this.tournament.tourn3RD=!1,document.getElementById("tournCheck").style="display: none")},mainBanner:function(){var t=document.getElementById("img1");this.imgData1=event.target.files[0];var e,n=new FileReader;n.onload=function(n){for(var o=n.target.result,a=0;a<o.length;++a)e=o.charCodeAt(a),e.toString(16)," ";t.src=o,this.tempSrc=t.src,document.getElementById("tempUrl1").value=this.tempSrc},n.readAsDataURL(this.imgData1),this.storage=Object(dt["b"])(),document.getElementById("img1").style="display: block;",this.tournament.tournMainBannerName=Date.now()},tournBackground:function(){var t=document.getElementById("img2");this.imgData2=event.target.files[0];var e,n=new FileReader;n.onload=function(n){for(var o=n.target.result,a=0;a<o.length;++a)e=o.charCodeAt(a),e.toString(16)," ";t.src=o,this.tempSrc=t.src,document.getElementById("tempUrl2").value=this.tempSrc},n.readAsDataURL(this.imgData2),this.storage=Object(dt["b"])(),document.getElementById("img2").style="display: block;",this.tournament.tournBackgroundName=Date.now()},tournCheck2:function(){!1===this.tournament.tournAppr?(this.tournament.tournAppr=!0,document.getElementById("tournCheck2").style="display: block"):!0===this.tournament.tournAppr&&(this.tournament.tournAppr=!1,document.getElementById("tournCheck2").style="display: none")},tournCheck3:function(){!1===this.tournament.tournChekinTime?(this.tournament.tournChekinTime=!0,document.getElementById("tournCheck3").style="display: block"):!0===this.tournament.tournChekinTime&&(this.tournament.tournChekinTime=!1,document.getElementById("tournCheck3").style="display: none")},regAct1:function(){this.tournament.tournRegistr="free",document.getElementById("r1").classList.add("regActive"),document.getElementById("r2").classList.remove("regActive"),document.getElementById("r3").classList.remove("regActive"),document.getElementById("r4").classList.remove("regActive")},regAct2:function(){this.tournament.tournRegistr="paid",document.getElementById("r1").classList.remove("regActive"),document.getElementById("r2").classList.add("regActive"),document.getElementById("r3").classList.remove("regActive"),document.getElementById("r4").classList.remove("regActive")},regAct3:function(){this.tournament.tournRegistr="premium",document.getElementById("r1").classList.remove("regActive"),document.getElementById("r2").classList.remove("regActive"),document.getElementById("r3").classList.add("regActive"),document.getElementById("r4").classList.remove("regActive")},regAct4:function(){this.tournament.tournRegistr="private",document.getElementById("r1").classList.remove("regActive"),document.getElementById("r2").classList.remove("regActive"),document.getElementById("r3").classList.remove("regActive"),document.getElementById("r4").classList.add("regActive")},tournCheck4:function(){!1===this.tournament.tournShow?(this.tournament.tournShow=!0,document.getElementById("tournCheck4").style="display: block"):!0===this.tournament.tournShow&&(this.tournament.tournShow=!1,document.getElementById("tournCheck4").style="display: none")},closeUsersList:function(){document.getElementById("popup-temp-player-list").style="display: none",document.getElementById("body").style="overflow: auto"},showUsersList:function(){for(var t=0;t<this.tournament.tournPlayersList.lenght;t++)for(var e=0;e<this.tempPlayersList.length;e++)if(this.tempPlayersList[e].userNickn===this.tournament.tournPlayersList[t].userNickn){this.tempPlayersList.splice(e,1);break}document.getElementById("body").style="overflow: hidden",document.getElementById("popup-temp-player-list").style="display: block"},addNewPlayer:function(t,e){this.tournament.tournPlayersList.push(t),this.tempPlayersList.splice(e,1)},closePlayersList:function(){document.getElementById("popup-player-list").style="display: none",document.getElementById("body").style="overflow: auto"},showPlayersList:function(){document.getElementById("body").style="overflow: hidden",document.getElementById("popup-player-list").style="display: block"},tournCheck5:function(){!1===this.tournament.tournOnlyLeague?(this.tournament.tournOnlyLeague=!0,document.getElementById("tournCheck5").style="display: block"):!0===this.tournament.tournOnlyLeague&&(this.tournament.tournOnlyLeague=!1,document.getElementById("tournCheck5").style="display: none")},tournCheck6:function(){!1===this.tournament.tournVotingOne?(this.tournament.tournVotingOne=!0,document.getElementById("tournCheck6").style="display: block"):!0===this.tournament.tournVotingOne&&(this.tournament.tournVotingOne=!1,document.getElementById("tournCheck6").style="display: none")},tournCheck7:function(){!1===this.tournament.tournVotingTwo?(this.tournament.tournVotingTwo=!0,document.getElementById("tournCheck7").style="display: block"):!0===this.tournament.tournVotingTwo&&(this.tournament.tournVotingTwo=!1,document.getElementById("tournCheck7").style="display: none")},tournCheck8:function(){!1===this.tournament.tournPSN?(this.tournament.tournPSN=!0,document.getElementById("tournCheck8").style="display: block"):!0===this.tournament.tournPSN&&(this.tournament.tournPSN=!1,document.getElementById("tournCheck8").style="display: none")},tournCheck9:function(){!1===this.tournament.tournXbox?(this.tournament.tournXbox=!0,document.getElementById("tournCheck9").style="display: block"):!0===this.tournament.tournXbox&&(this.tournament.tournXbox=!1,document.getElementById("tournCheck9").style="display: none")},tournCheck10:function(){!1===this.tournament.tournSteam?(this.tournament.tournSteam=!0,document.getElementById("tournCheck10").style="display: block"):!0===this.tournament.tournSteam&&(this.tournament.tournSteam=!1,document.getElementById("tournCheck10").style="display: none")},tournCheck11:function(){!1===this.tournament.tournLOL?(this.tournament.tournLOL=!0,document.getElementById("tournCheck11").style="display: block"):!0===this.tournament.tournLOL&&(this.tournament.tournLOL=!1,document.getElementById("tournCheck11").style="display: none")},tournCheck12:function(){!1===this.tournament.tournBlizz?(this.tournament.tournBlizz=!0,document.getElementById("tournCheck12").style="display: block"):!0===this.tournament.tournBlizz&&(this.tournament.tournBlizz=!1,document.getElementById("tournCheck12").style="display: none")},tournCheck13:function(){!1===this.tournament.tournOrigin?(this.tournament.tournOrigin=!0,document.getElementById("tournCheck13").style="display: block"):!0===this.tournament.tournOrigin&&(this.tournament.tournOrigin=!1,document.getElementById("tournCheck13").style="display: none")},tournCheck14:function(){!1===this.tournament.tournEuropeNord?(this.tournament.tournEuropeNord=!0,this.tournament.tournRegion="EuropeNord",document.getElementById("tournCheck14").style="display: block",this.tournament.tournEuropeWest=!1,document.getElementById("tournCheck15").style="display: none",this.tournament.tournAustralia=!1,document.getElementById("tournCheck16").style="display: none",this.tournament.tournChina=!1,document.getElementById("tournCheck17").style="display: none",this.tournament.tournAsia=!1,document.getElementById("tournCheck18").style="display: none",this.tournament.tournAmerica=!1,document.getElementById("tournCheck19").style="display: none"):!0===this.tournament.tournEuropeNord&&(this.tournament.tournEuropeNord=!1,this.tournament.tournRegion="",document.getElementById("tournCheck14").style="display: none")},tournCheck15:function(){!1===this.tournament.tournEuropeWest?(this.tournament.tournEuropeWest=!0,this.tournament.tournRegion="EuropeWest",document.getElementById("tournCheck15").style="display: block",this.tournament.tournAustralia=!1,document.getElementById("tournCheck16").style="display: none",this.tournament.tournChina=!1,document.getElementById("tournCheck17").style="display: none",this.tournament.tournAsia=!1,document.getElementById("tournCheck18").style="display: none",this.tournament.tournAmerica=!1,document.getElementById("tournCheck19").style="display: none",this.tournament.tournEuropeNord=!1,document.getElementById("tournCheck14").style="display: none"):!0===this.tournament.tournEuropeWest&&(this.tournament.tournRegion="",this.tournament.tournEuropeWest=!1,document.getElementById("tournCheck15").style="display: none")},tournCheck16:function(){!1===this.tournament.tournAustralia?(this.tournament.tournAustralia=!0,this.tournament.tournRegion="Australia",document.getElementById("tournCheck16").style="display: block",this.tournament.tournEuropeWest=!1,document.getElementById("tournCheck15").style="display: none",this.tournament.tournChina=!1,document.getElementById("tournCheck17").style="display: none",this.tournament.tournAsia=!1,document.getElementById("tournCheck18").style="display: none",this.tournament.tournAmerica=!1,document.getElementById("tournCheck19").style="display: none",this.tournament.tournEuropeNord=!1,document.getElementById("tournCheck14").style="display: none"):!0===this.tournament.tournAustralia&&(this.tournament.tournAustralia=!1,this.tournament.tournRegion="",document.getElementById("tournCheck16").style="display: none")},tournCheck17:function(){!1===this.tournament.tournChina?(this.tournament.tournChina=!0,this.tournament.tournRegion="China",document.getElementById("tournCheck17").style="display: block",this.tournament.tournEuropeWest=!1,document.getElementById("tournCheck15").style="display: none",this.tournament.tournAustralia=!1,document.getElementById("tournCheck16").style="display: none",this.tournament.tournAsia=!1,document.getElementById("tournCheck18").style="display: none",this.tournament.tournAmerica=!1,document.getElementById("tournCheck19").style="display: none",this.tournament.tournEuropeNord=!1,document.getElementById("tournCheck14").style="display: none"):!0===this.tournament.tournChina&&(this.tournament.tournChina=!1,this.tournament.tournRegion="",document.getElementById("tournCheck17").style="display: none")},tournCheck18:function(){!1===this.tournament.tournAsia?(this.tournament.tournAsia=!0,this.tournament.tournRegion="Asia",document.getElementById("tournCheck18").style="display: block",this.tournament.tournEuropeWest=!1,document.getElementById("tournCheck15").style="display: none",this.tournament.tournAustralia=!1,document.getElementById("tournCheck16").style="display: none",this.tournament.tournChina=!1,document.getElementById("tournCheck17").style="display: none",this.tournament.tournAmerica=!1,document.getElementById("tournCheck19").style="display: none",this.tournament.tournEuropeNord=!1,document.getElementById("tournCheck14").style="display: none"):!0===this.tournament.tournAsia&&(this.tournament.tournAsia=!1,this.tournament.tournRegion="",document.getElementById("tournCheck18").style="display: none")},tournCheck19:function(){!1===this.tournament.tournAmerica?(this.tournament.tournAmerica=!0,this.tournament.tournRegion="America",document.getElementById("tournCheck19").style="display: block",this.tournament.tournEuropeWest=!1,document.getElementById("tournCheck15").style="display: none",this.tournament.tournAustralia=!1,document.getElementById("tournCheck16").style="display: none",this.tournament.tournChina=!1,document.getElementById("tournCheck17").style="display: none",this.tournament.tournAsia=!1,document.getElementById("tournCheck18").style="display: none",this.tournament.tournEuropeNord=!1,document.getElementById("tournCheck14").style="display: none"):!0===this.tournament.tournAmerica&&(this.tournament.tournAmerica=!1,this.tournament.tournRegion="",document.getElementById("tournCheck19").style="display: none")},tournCheck20:function(){!1===this.tournament.tournPC?(this.tournament.tournPC=!0,this.tournament.tournPlatform="PC",document.getElementById("tournCheck20").style="display: block",this.tournament.tournXboxOne=!1,document.getElementById("tournCheck21").style="display: none",this.tournament.tournPS4=!1,document.getElementById("tournCheck22").style="display: none",this.tournament.tournSwitch=!1,document.getElementById("tournCheck23").style="display: none",this.tournament.tournPS5=!1,document.getElementById("tournCheck24").style="display: none",this.tournament.tournSeriesX=!1,document.getElementById("tournCheck25").style="display: none"):!0===this.tournament.tournPC&&(this.tournament.tournPC=!1,this.tournament.tournPlatform="",document.getElementById("tournCheck20").style="display: none")},tournCheck21:function(){!1===this.tournament.tournXboxOne?(this.tournament.tournXboxOne=!0,this.tournament.tournPlatform="Xbox One",document.getElementById("tournCheck21").style="display: block",this.tournament.tournPS4=!1,document.getElementById("tournCheck22").style="display: none",this.tournament.tournSwitch=!1,document.getElementById("tournCheck23").style="display: none",this.tournament.tournPS5=!1,document.getElementById("tournCheck24").style="display: none",this.tournament.tournSeriesX=!1,document.getElementById("tournCheck25").style="display: none",this.tournament.tournPC=!1,document.getElementById("tournCheck20").style="display: none"):!0===this.tournament.tournXboxOne&&(this.tournament.tournXboxOne=!1,this.tournament.tournPlatform="",document.getElementById("tournCheck21").style="display: none")},tournCheck22:function(){!1===this.tournament.tournPS4?(this.tournament.tournPS4=!0,this.tournament.tournPlatform="PS4",document.getElementById("tournCheck22").style="display: block",this.tournament.tournXboxOne=!1,document.getElementById("tournCheck21").style="display: none",this.tournament.tournSwitch=!1,document.getElementById("tournCheck23").style="display: none",this.tournament.tournPS5=!1,document.getElementById("tournCheck24").style="display: none",this.tournament.tournSeriesX=!1,document.getElementById("tournCheck25").style="display: none",this.tournament.tournPC=!1,document.getElementById("tournCheck20").style="display: none"):!0===this.tournament.tournPS4&&(this.tournament.tournPS4=!1,this.tournament.tournPlatform="",document.getElementById("tournCheck22").style="display: none")},tournCheck23:function(){!1===this.tournament.tournSwitch?(this.tournament.tournSwitch=!0,this.tournament.tournPlatform="Switch",document.getElementById("tournCheck23").style="display: block",this.tournament.tournXboxOne=!1,document.getElementById("tournCheck21").style="display: none",this.tournament.tournPS4=!1,document.getElementById("tournCheck22").style="display: none",this.tournament.tournPS5=!1,document.getElementById("tournCheck24").style="display: none",this.tournament.tournSeriesX=!1,document.getElementById("tournCheck25").style="display: none",this.tournament.tournPC=!1,document.getElementById("tournCheck20").style="display: none"):!0===this.tournament.tournSwitch&&(this.tournament.tournSwitch=!1,this.tournament.tournPlatform="",document.getElementById("tournCheck23").style="display: none")},tournCheck24:function(){!1===this.tournament.tournPS5?(this.tournament.tournPS5=!0,this.tournament.tournPlatform="PS5",document.getElementById("tournCheck24").style="display: block",this.tournament.tournXboxOne=!1,document.getElementById("tournCheck21").style="display: none",this.tournament.tournPS4=!1,document.getElementById("tournCheck22").style="display: none",this.tournament.tournSwitch=!1,document.getElementById("tournCheck23").style="display: none",this.tournament.tournSeriesX=!1,document.getElementById("tournCheck25").style="display: none",this.tournament.tournPC=!1,document.getElementById("tournCheck20").style="display: none"):!0===this.tournament.tournPS5&&(this.tournament.tournPS5=!1,this.tournament.tournPlatform="",document.getElementById("tournCheck24").style="display: none")},tournCheck25:function(){!1===this.tournament.tournSeriesX?(this.tournament.tournSeriesX=!0,this.tournament.tournPlatform="Series X",document.getElementById("tournCheck25").style="display: block",this.tournament.tournXboxOne=!1,document.getElementById("tournCheck21").style="display: none",this.tournament.tournPS4=!1,document.getElementById("tournCheck22").style="display: none",this.tournament.tournSwitch=!1,document.getElementById("tournCheck23").style="display: none",this.tournament.tournPS5=!1,document.getElementById("tournCheck24").style="display: none",this.tournament.tournPC=!1,document.getElementById("tournCheck20").style="display: none"):!0===this.tournament.tournSeriesX&&(this.tournament.tournSeriesX=!1,this.tournament.tournPlatform="",document.getElementById("tournCheck25").style="display: none")},tournCheck26:function(){!1===this.tournament.tourn3rdPlace?(this.tournament.tourn3rdPlace=!0,document.getElementById("tournCheck26").style="display: block"):!0===this.tournament.tourn3rdPlace&&(this.tournament.tourn3rdPlace=!1,document.getElementById("tournCheck26").style="display: none")},addStream:function(){this.tournament.tournTwitchArr.push({streamLink:"https://www.twitch.tv/",streamLang:""})},addPhot:function(t){document.getElementById("sp"+t).click()},addSponsor:function(){this.tournament.tournSponsors.push({sponsorLogo:"",sponsorData:null,sponsorName:Date.now()})},addSponsBanner:function(t,e,n){var o=document.getElementById("imgSpons"+e);t.sponsorData=n.target.files[0];var a,r=new FileReader;r.onload=function(t){for(var n=t.target.result,r=0;r<n.length;++r)a=n.charCodeAt(r),a.toString(16)," ";o.src=n,this.tempSrc=o.src,document.getElementById("tempsURL"+e).value=this.tempSrc},r.readAsDataURL(t.sponsorData),this.storage=Object(dt["b"])(),document.getElementById("imgSpons"+e).style="display: block;"},saveNewGame:function(){var t=this,e=Object(dt["c"])(this.storage,"games-images/"+this.createGame.gameBannerName);Object(dt["d"])(e,this.imgData1).then((function(t){console.log("Файл завантажено")}));var n=Object(dt["c"])(this.storage,"games-images/"+this.createGame.gameMobileName);Object(dt["d"])(n,this.imgData2).then((function(t){console.log("Файл завантажено")}));var o=Object(dt["c"])(this.storage,"games-images/"+this.createGame.gameIconName);Object(dt["d"])(o,this.imgData3).then((function(t){console.log("Файл завантажено")}));var a=Object(dt["c"])(this.storage,"games-images/"+this.createGame.gameLogo253Name);Object(dt["d"])(a,this.imgData4).then((function(t){console.log("Файл завантажено")}));var r=Object(dt["c"])(this.storage,"games-images/"+this.createGame.gameBackName);Object(dt["d"])(r,this.imgData5).then((function(t){console.log("Файл завантажено")}));var u=Object(dt["c"])(this.storage,"games-images/"+this.createGame.gameLogo64Name);Object(dt["d"])(u,this.imgData6).then((function(t){console.log("Файл завантажено")}));for(var i=0;i<this.createGame.gameMaps.length;i++){var s=Object(dt["c"])(this.storage,"games-images/"+this.createGame.gameMaps[i].mapIdName);Object(dt["d"])(s,this.createGame.gameMaps[i].mapImg).then((function(t){console.log("Файл завантажено")}))}setTimeout((function(){Object(dt["a"])(Object(dt["c"])(t.storage,"games-images/"+t.createGame.gameBannerName)).then((function(e){t.createGame.gameBanner=e})),Object(dt["a"])(Object(dt["c"])(t.storage,"games-images/"+t.createGame.gameMobileName)).then((function(e){t.createGame.gameMobile=e})),Object(dt["a"])(Object(dt["c"])(t.storage,"games-images/"+t.createGame.gameIconName)).then((function(e){t.createGame.gameIcon=e})),Object(dt["a"])(Object(dt["c"])(t.storage,"games-images/"+t.createGame.gameLogo253Name)).then((function(e){t.createGame.gameLogo253=e})),Object(dt["a"])(Object(dt["c"])(t.storage,"games-images/"+t.createGame.gameBackName)).then((function(e){t.createGame.gameBack=e})),Object(dt["a"])(Object(dt["c"])(t.storage,"games-images/"+t.createGame.gameLogo64Name)).then((function(e){t.createGame.gameLogo64=e}));for(var e=function(e){Object(dt["a"])(Object(dt["c"])(t.storage,"games-images/"+t.createGame.gameMaps[e].mapIdName)).then((function(n){t.createGame.gameMaps[e].mapImg=n}))},n=0;n<t.createGame.gameMaps.length;n++)e(n);setTimeout((function(){var e=Object(ct["d"])(Object(ct["c"])());Object(ct["b"])(Object(ct["a"])(e,"games/")).then((function(e){var n=[];e.forEach((function(t){n.push(t.val())})),t.gamesList=n,t.gamesList.push(t.createGame);var o=Object(ct["c"])();Object(ct["e"])(Object(ct["d"])(o,"games/"),t.gamesList),t.createGame={gameIdURL:Date.now(),gameName:"",gameURL:"",gameDesc:"",gameBanner:null,gameBannerName:"",gameMobile:null,gameMobileName:"",gameIcon:null,gameIconName:"",gameLogo253:null,gameLogo253Name:"",gameBack:null,gameBackName:"",gameLogo64:null,gameLogo64Name:"",gameTActive:"",gameServerS:"",gameVActive:"",gameMaps:[]},window.location.href="/admin-pannel"}))}),3e3)}),1e3)},addMap:function(){this.createGame.gameMaps.push({mapName:"",mapImg:"",mapIdName:Date.now()})},addMapPhot:function(t){document.getElementById("map"+t).click()},addBtnMapPhot:function(t,e,n){var o=document.getElementById("imgSponsL"+e);t.mapImg=n.target.files[0];var a,r=new FileReader;r.onload=function(t){for(var n=t.target.result,r=0;r<n.length;++r)a=n.charCodeAt(r),a.toString(16)," ";o.src=n,this.tempSrc=o.src,document.getElementById("tempsURLL"+e).value=this.tempSrc},r.readAsDataURL(t.mapImg),this.storage=Object(dt["b"])(),document.getElementById("imgSponsL"+e).style="display: block;"},addNewPhot1:function(){document.getElementById("sp1").click()},addCapsPhot1:function(t){var e=document.getElementById("imgSpons1");this.imgData1=t.target.files[0];var n,o=new FileReader;o.onload=function(t){for(var o=t.target.result,a=0;a<o.length;++a)n=o.charCodeAt(a),n.toString(16)," ";e.src=o,this.tempSrc=e.src,document.getElementById("tempsURL1").value=this.tempSrc},o.readAsDataURL(this.imgData1),this.storage=Object(dt["b"])(),document.getElementById("imgSpons1").style="display: block;",this.createGame.gameBannerName=Date.now()},addNewPhot2:function(){document.getElementById("sp2").click()},addCapsPhot2:function(t){var e=document.getElementById("imgSpons2");this.imgData2=t.target.files[0];var n,o=new FileReader;o.onload=function(t){for(var o=t.target.result,a=0;a<o.length;++a)n=o.charCodeAt(a),n.toString(16)," ";e.src=o,this.tempSrc=e.src,document.getElementById("tempsURL2").value=this.tempSrc},o.readAsDataURL(this.imgData2),this.storage=Object(dt["b"])(),document.getElementById("imgSpons2").style="display: block;",this.createGame.gameMobileName=Date.now()},addNewPhot3:function(){document.getElementById("sp3").click()},addCapsPhot3:function(t){var e=document.getElementById("imgSpons3");this.imgData3=t.target.files[0];var n,o=new FileReader;o.onload=function(t){for(var o=t.target.result,a=0;a<o.length;++a)n=o.charCodeAt(a),n.toString(16)," ";e.src=o,this.tempSrc=e.src,document.getElementById("tempsURL3").value=this.tempSrc},o.readAsDataURL(this.imgData3),this.storage=Object(dt["b"])(),document.getElementById("imgSpons3").style="display: block;",this.createGame.gameIconName=Date.now()},addNewPhot4:function(){document.getElementById("sp4").click()},addCapsPhot4:function(t){var e=document.getElementById("imgSpons4");this.imgData4=t.target.files[0];var n,o=new FileReader;o.onload=function(t){for(var o=t.target.result,a=0;a<o.length;++a)n=o.charCodeAt(a),n.toString(16)," ";e.src=o,this.tempSrc=e.src,document.getElementById("tempsURL4").value=this.tempSrc},o.readAsDataURL(this.imgData4),this.storage=Object(dt["b"])(),document.getElementById("imgSpons4").style="display: block;",this.createGame.gameLogo253Name=Date.now()},addNewPhot5:function(){document.getElementById("sp5").click()},addCapsPhot5:function(t){var e=document.getElementById("imgSpons5");this.imgData5=t.target.files[0];var n,o=new FileReader;o.onload=function(t){for(var o=t.target.result,a=0;a<o.length;++a)n=o.charCodeAt(a),n.toString(16)," ";e.src=o,this.tempSrc=e.src,document.getElementById("tempsURL5").value=this.tempSrc},o.readAsDataURL(this.imgData5),this.storage=Object(dt["b"])(),document.getElementById("imgSpons5").style="display: block;",this.createGame.gameBackName=Date.now()},addNewPhot6:function(){document.getElementById("sp6").click()},addCapsPhot6:function(t){var e=document.getElementById("imgSpons6");this.imgData6=t.target.files[0];var n,o=new FileReader;o.onload=function(t){for(var o=t.target.result,a=0;a<o.length;++a)n=o.charCodeAt(a),n.toString(16)," ";e.src=o,this.tempSrc=e.src,document.getElementById("tempsURL6").value=this.tempSrc},o.readAsDataURL(this.imgData6),this.storage=Object(dt["b"])(),document.getElementById("imgSpons6").style="display: block;",this.createGame.gameLogo64Name=Date.now()},deleteGame:function(){for(var t=0;t<this.gamesList.length;t++)this.gamesList[t].gameURL===this.game.gameURL&&this.gamesList.splice(t,1);var e=Object(ct["c"])();Object(ct["e"])(Object(ct["d"])(e,"games/"),this.gamesList),window.location.href="/admin-pannel"},firstGameEditFunc:function(){var t=this,e=Object(ct["d"])(Object(ct["c"])());Object(ct["b"])(Object(ct["a"])(e,"games/")).then((function(e){var n=[];e.forEach((function(t){n.push(t.val())})),t.gamesList=n}))}},mounted:function(){this.firstGameEditFunc()}},pt=(n("804b"),n("6b0d")),ft=n.n(pt);const bt=ft()(yt,[["render",lt]]);e["default"]=bt},"30b0":function(t,e,n){},"804b":function(t,e,n){"use strict";n("30b0")},a434:function(t,e,n){"use strict";var o=n("23e7"),a=n("da84"),r=n("23cb"),u=n("5926"),i=n("07fa"),s=n("7b0b"),m=n("65f0"),l=n("8418"),c=n("1dde"),d=c("splice"),g=a.TypeError,h=Math.max,y=Math.min,p=9007199254740991,f="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,o,a,c,d,b,v=s(this),C=i(v),k=r(t,C),O=arguments.length;if(0===O?n=o=0:1===O?(n=0,o=C-k):(n=O-2,o=y(h(u(e),0),C-k)),C+n-o>p)throw g(f);for(a=m(v,o),c=0;c<o;c++)d=k+c,d in v&&l(a,c,v[d]);if(a.length=o,n<o){for(c=k;c<C-o;c++)d=c+o,b=c+n,d in v?v[b]=v[d]:delete v[b];for(c=C;c>C-o+n;c--)delete v[c-1]}else if(n>o)for(c=C-o;c>k;c--)d=c+o-1,b=c+n-1,d in v?v[b]=v[d]:delete v[b];for(c=0;c<n;c++)v[c+k]=arguments[c+2];return v.length=C-o+n,a}})},ad6d:function(t,e,n){"use strict";var o=n("825a");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}}}]);
//# sourceMappingURL=chunk-d0ae3e58.e57c9119.js.map