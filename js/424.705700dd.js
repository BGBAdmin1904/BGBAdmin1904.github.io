"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[424],{4127:(a,e,t)=>{t.d(e,{CW:()=>u,Fd:()=>_,Gt:()=>k,Jf:()=>b,NI:()=>h,Ri:()=>m,TV:()=>v,UE:()=>i,UG:()=>f,W8:()=>c,Y0:()=>C,a8:()=>p,bR:()=>d,fr:()=>r,gj:()=>g,iR:()=>y,qt:()=>n,vm:()=>o});const l=!0,s="3NGdo3Lbyd0",r="service_1z8boq8",i="template_uc9j4dn",o="z6CsuBOLcuYCsxNiZ",n="Auf geht's SCF",d="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",c="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",u="https://planthegame.ch",g="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",m=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),r=t.split(";");for(let l=0;l<r.length;l++){let a=r[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?s:void 0},v=function(a,e){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+a+";"+l+'";path=/',document.cookie="applicationCode="+e+";"+l+'";path=/'},b=function(a){let e="";if("HOME"===a)return"3Home2emoH9";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},h=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},p=function(a){return"statics/images/"+a+"/Logo.png"},C=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},_=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.svg"),e},f=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.svg":"statics/teams/Event.webp"},y=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.svg"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.svg"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.svg"},{label:"Bayer Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.svg"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.svg"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.svg"},{label:"Borussia Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.svg"},{label:"Borussia Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.svg"},{label:"Champions League",value:"Champions_League",image:"statics/teams/Champions_League.svg"},{label:"Conference League",value:"Conference_League",image:"statics/teams/Conference_League.svg"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.svg"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Eintracht Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.svg"},{label:"Eintracht Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.svg"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.svg"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.svg"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.svg"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.svg"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.svg"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.svg"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.svg"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.svg"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.svg"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.svg"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.svg"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.svg"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.svg"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.svg"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.svg"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.svg"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.svg"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.svg"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.svg"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.svg"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.svg"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.svg"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.svg"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.svg"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"VfL Osnabrück",value:"VfL_Osnabrück",image:"statics/teams/VfL_Osnabrück.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.svg"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.svg"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.svg"}],k=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},9424:(a,e,t)=>{t.r(e),t.d(e,{default:()=>oa});var l=t(1758),s=t(8790);const r={class:"q-pa-md",style:{"max-width":"500px"}},i={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},o=["src"],n=["src"],d={class:"q-pa-md q-gutter-sm"},c=(0,l.Lk)("div",{class:"text-h6"},"Karte erfassen",-1),u={class:"q-pt-md",style:{"max-width":"350px"}},g={class:"q-pt-md",style:{"max-width":"350px"}},m={class:"q-pt-md",style:{"max-width":"350px"}},v={class:"q-pt-md",style:{"max-width":"350px"}},b=(0,l.Lk)("div",{class:"text-h6"},"Karte ändern",-1),h={class:"q-pt-md",style:{"max-width":"350px"}},p={class:"q-pt-md",style:{"max-width":"350px"}},C={class:"q-pt-md",style:{"max-width":"350px"}},_={class:"q-pt-md",style:{"max-width":"350px"}},f=(0,l.Lk)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function y(a,e,t,y,k,M){const H=(0,l.g2)("q-toolbar-title"),w=(0,l.g2)("q-btn"),W=(0,l.g2)("q-toolbar"),x=(0,l.g2)("q-avatar"),T=(0,l.g2)("q-item-section"),S=(0,l.g2)("q-item-label"),A=(0,l.g2)("q-item"),I=(0,l.g2)("q-list"),F=(0,l.g2)("q-card-section"),L=(0,l.g2)("q-input"),K=(0,l.g2)("q-toggle"),D=(0,l.g2)("q-separator"),B=(0,l.g2)("q-card-actions"),V=(0,l.g2)("q-card"),O=(0,l.g2)("q-dialog"),R=(0,l.g2)("q-img"),q=(0,l.g2)("q-page"),P=(0,l.gN)("ripple"),U=(0,l.gN)("close-popup");return(0,l.uX)(),(0,l.Wv)(q,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",r,[(0,l.bF)(W,{class:"bg-primary text-white"},{default:(0,l.k6)((()=>[(0,l.bF)(H,{class:"text-overline"},{default:(0,l.k6)((()=>[(0,l.eW)("Wer hat meine Karte ("+(0,s.v_)(k.whereIsMyCardObject.length)+")",1)])),_:1}),(0,l.bF)(w,{class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[0]||(e[0]=a=>y.addWhereIsMyCard=!0)})])),_:1})]),(0,l.Lk)("div",i,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(k.whereIsMyCardObject,((a,e)=>(0,l.bo)(((0,l.uX)(),(0,l.Wv)(I,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(A,{clickable:"",onClick:e=>M.onWhereIsMyCardClick(a.cardHolderId,a.cardHolder,a.discounted,a.whoHasTheCard,a.digital)},{default:(0,l.k6)((()=>[(0,l.bF)(T,{avatar:""},{default:(0,l.k6)((()=>[""===a.cardHolderAvatar?((0,l.uX)(),(0,l.Wv)(x,{key:0,size:"50px",color:"lime-10","text-color":"white"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(a.cardHolder.substring(0,1)),1)])),_:2},1024)):(0,l.Q3)("",!0),""!==a.cardHolderAvatar?((0,l.uX)(),(0,l.Wv)(x,{key:1,size:"50px"},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:k.getAvatar(y.varAdminCode,a.cardHolderAvatar,a.cardHolderAvatarIsCustomized)},null,8,o)])),_:2},1024)):(0,l.Q3)("",!0)])),_:2},1024),(0,l.bF)(T,{avatar:""},{default:(0,l.k6)((()=>[""===a.whoHasTheCardAvatar?((0,l.uX)(),(0,l.Wv)(x,{key:0,size:"50px",color:"green-10","text-color":"white"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(a.whoHasTheCard.substring(0,1)),1)])),_:2},1024)):(0,l.Q3)("",!0),""!==a.whoHasTheCardAvatar?((0,l.uX)(),(0,l.Wv)(x,{key:1,size:"50px"},{default:(0,l.k6)((()=>[(0,l.Lk)("img",{src:k.getAvatar(y.varAdminCode,a.whoHasTheCardAvatar,a.whoHasTheCardAvatarIsCustomized)},null,8,n)])),_:2},1024)):(0,l.Q3)("",!0)])),_:2},1024),(0,l.bF)(T,null,{default:(0,l.k6)((()=>[(0,l.bF)(S,{overline:""},{default:(0,l.k6)((()=>[(0,l.eW)("Inhaber: "+(0,s.v_)(a.cardHolder),1)])),_:2},1024),a.discounted?((0,l.uX)(),(0,l.Wv)(S,{key:0,caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Kind: Ja")])),_:1})):(0,l.Q3)("",!0),a.discounted?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(S,{key:1,caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Kind: Nein")])),_:1})),(0,l.bF)(S,{caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Wer hat die Karte: "+(0,s.v_)(a.whoHasTheCard),1)])),_:2},1024),a.digital?((0,l.uX)(),(0,l.Wv)(S,{key:2,caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Digital: Ja")])),_:1})):(0,l.Q3)("",!0),a.digital?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(S,{key:3,caption:""},{default:(0,l.k6)((()=>[(0,l.eW)("Digital: Nein")])),_:1}))])),_:2},1024)])),_:2},1032,["onClick"])),[[P]])])),_:2},1024)),[[P]]))),128))]),(0,l.Lk)("div",d,[(0,l.bF)(O,{modelValue:y.addWhereIsMyCard,"onUpdate:modelValue":e[6]||(e[6]=a=>y.addWhereIsMyCard=a),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(V,{style:{"min-width":"350px"}},{default:(0,l.k6)((()=>[(0,l.bF)(F,null,{default:(0,l.k6)((()=>[c])),_:1}),(0,l.bF)(F,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",u,[(0,l.bF)(L,{filled:"",dense:"",modelValue:y.txtCardHolderNew,"onUpdate:modelValue":e[1]||(e[1]=a=>y.txtCardHolderNew=a),autofocus:"",label:"Inhaber *"},null,8,["modelValue"])]),(0,l.Lk)("div",g,[(0,l.bF)(K,{modelValue:y.tglDiscountedNew,"onUpdate:modelValue":e[2]||(e[2]=a=>y.tglDiscountedNew=a),color:"red",label:"Kind","left-label":""},null,8,["modelValue"])]),(0,l.Lk)("div",m,[(0,l.bF)(L,{filled:"",dense:"",modelValue:y.txtWhoHasTheCardNew,"onUpdate:modelValue":e[3]||(e[3]=a=>y.txtWhoHasTheCardNew=a),label:"Wer hat die Karte *"},null,8,["modelValue"])]),(0,l.Lk)("div",v,[(0,l.bF)(K,{modelValue:y.tglDigitalNew,"onUpdate:modelValue":e[4]||(e[4]=a=>y.tglDigitalNew=a),color:"red",label:"Digital","left-label":""},null,8,["modelValue"])])])),_:1}),(0,l.bF)(D),(0,l.bF)(B,{class:"text-primary",align:"right"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(w,{flat:"",label:"Abbrechen"},null,512),[[U]]),(0,l.bo)((0,l.bF)(w,{icon:"save",label:"Speichern",onClick:e[5]||(e[5]=a=>M.addWhereIsMyCardSave(y.txtCardHolderNew,y.tglDiscountedNew,y.txtWhoHasTheCardNew,y.tglDigitalNew)),disable:""===y.txtCardHolderNew||""===y.txtWhoHasTheCardNew},null,8,["disable"]),[[U]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.bF)(O,{modelValue:y.editWhereIsMyCard,"onUpdate:modelValue":e[13]||(e[13]=a=>y.editWhereIsMyCard=a),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(V,{style:{"min-width":"350px"}},{default:(0,l.k6)((()=>[(0,l.bF)(F,null,{default:(0,l.k6)((()=>[b])),_:1}),(0,l.bF)(F,{class:"q-pt-none"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",h,[(0,l.bF)(L,{filled:"",dense:"",modelValue:y.txtCardHolder,"onUpdate:modelValue":e[7]||(e[7]=a=>y.txtCardHolder=a),label:"Inhaber *"},null,8,["modelValue"])]),(0,l.Lk)("div",p,[(0,l.bF)(K,{modelValue:y.tglDiscounted,"onUpdate:modelValue":e[8]||(e[8]=a=>y.tglDiscounted=a),color:"red",label:"Kind","left-label":""},null,8,["modelValue"])]),(0,l.Lk)("div",C,[(0,l.bF)(L,{filled:"",dense:"",modelValue:y.txtWhoHasTheCard,"onUpdate:modelValue":e[9]||(e[9]=a=>y.txtWhoHasTheCard=a),autofocus:"",label:"Wer hat die Karte *"},null,8,["modelValue"])]),(0,l.Lk)("div",_,[(0,l.bF)(K,{modelValue:y.tglDigital,"onUpdate:modelValue":e[10]||(e[10]=a=>y.tglDigital=a),color:"red",label:"Digital","left-label":""},null,8,["modelValue"])])])),_:1}),(0,l.bF)(D),(0,l.bF)(B,{class:"text-primary",align:"right"},{default:(0,l.k6)((()=>[k.getCookie("isAdministrator")?((0,l.uX)(),(0,l.Wv)(w,{key:0,icon:"delete",color:"primary",onClick:e[11]||(e[11]=a=>y.delWhereIsMyCard=!0)})):(0,l.Q3)("",!0),(0,l.bo)((0,l.bF)(w,{flat:"",label:"Abbrechen"},null,512),[[U]]),(0,l.bo)((0,l.bF)(w,{icon:"save",label:"Speichern",onClick:e[12]||(e[12]=a=>M.editWhereIsMyCardSave(y.txtCardHolderId,y.txtCardHolder,y.txtCardHolderOld,y.tglDiscounted,y.txtWhoHasTheCard,y.tglDigital)),disable:""===y.txtCardHolder||""===y.txtWhoHasTheCard},null,8,["disable"]),[[U]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.bF)(O,{modelValue:y.delWhereIsMyCard,"onUpdate:modelValue":e[15]||(e[15]=a=>y.delWhereIsMyCard=a),persistent:""},{default:(0,l.k6)((()=>[(0,l.bF)(V,null,{default:(0,l.k6)((()=>[(0,l.bF)(F,{class:"row items-center"},{default:(0,l.k6)((()=>[(0,l.bF)(x,{icon:"delete",color:"primary","text-color":"white"}),f])),_:1}),(0,l.bF)(B,{align:"right"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(w,{flat:"",label:"Nein",color:"primary"},null,512),[[U]]),(0,l.bo)((0,l.bF)(w,{flat:"",label:"Ja",color:"primary",onClick:e[14]||(e[14]=a=>M.deleteWhereIsMyCard(y.txtCardHolderId))},null,512),[[U]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.bF)(R,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}t(4748);var k=t(4907),M=t(4127),H=t(8734),w=t(3090);const W=(0,H.KR)(""),x=(0,H.KR)(""),T=(0,H.KR)(""),S=(0,H.KR)(""),A=(0,H.KR)(""),I=(0,H.KR)(""),F=(0,H.KR)("");let L,K,D,B;const V={name:"ListWhoHasTheCard",setup(){const a=(0,k.A)();return{varAdminCode:(0,H.KR)(F),txtCardHolderId:(0,H.KR)(W),txtCardHolder:(0,H.KR)(x),txtCardHolderOld:(0,H.KR)(T),tglDiscounted:(0,H.KR)(S),txtWhoHasTheCard:(0,H.KR)(A),tglDigital:(0,H.KR)(I),txtCardHolderNew:(0,H.KR)(""),tglDiscountedNew:(0,H.KR)(!1),txtWhoHasTheCardNew:(0,H.KR)(""),tglDigitalNew:(0,H.KR)(!1),onCardHolderCreated(){a.notify({type:"positive",message:"Karteninhaber wurde erfolgreich erfasst!"})},onCardHolderUpdated(){a.notify({type:"positive",message:"Karteninhaber wurde erfolgreich aktualisiert!"})},onCardHolderDeleted(){a.notify({message:"Karteninhaber wurde erfolgreich gelöscht!",color:"orange"})},onCardHolderAlreadyExists(){a.notify({type:"negative",message:"Dieser Karteninhaber besteht bereits!"})},addWhereIsMyCard:(0,H.KR)(!1),editWhereIsMyCard:(0,H.KR)(!1),delWhereIsMyCard:(0,H.KR)(!1)}},data(){return{getCookie:M.Ri,getAdminCode:M.Jf,getAvatar:M.Y0,URLMatchManagementAPI:M.CW,whereIsMyCardObject:[{cardHolderId:"",cardHolder:"",cardHolderAvatar:"",cardHolderAvatarIsCustomized:"",discounted:"",whoHasTheCard:"",whoHasTheCardAvatar:"",whoHasTheCardAvatarIsCustomized:"",digital:""}],memberObject:[{member:"",avatar:"",customized:""}]}},computed:{},mounted(){this.setVariables().then((()=>{this.getTenantId().then((()=>{this.getTableMember().then((()=>{this.getTableWhereIsMyCard()}))}))}))},methods:{setVariables(){return F.value=(0,M.Jf)((0,M.Ri)("applicationCode")),K=M.CW+"/Tenant",B=M.CW+"/CardHolder",D=M.CW+"/Member",this.whereIsMyCardObject=[],Promise.resolve()},getTenantId(){return new Promise(((a,e)=>{this.$axios.get(`${K}/code/${F.value}`).then((t=>{200===t.status?(L=t.data.id,a()):(console.log("Unexpected status code:",t.status),e(new Error("Unexpected status code")))})).catch((a=>{console.log(a),e(a)}))}))},getTableMember(){return new Promise(((a,e)=>{this.memberObject=[],this.$axios.get(`${D}/${L}`).then((t=>{if(200===t.status){for(let a=0;a<t.data.length;a++)this.setMemberObject(t.data[a].name.trim(),t.data[a].avatar.trim(),t.data[a].isCustomized);a()}else console.log("Unexpected status code:",t.status),e(new Error("Unexpected status code"))})).catch((a=>{console.log(a),e(a)}))}))},setMemberObject(a,e,t){this.memberObject.push({member:a,avatar:e,customized:t})},getTableWhereIsMyCard(){this.whereIsMyCardObject=[],this.$axios.get(`${B}/${L}`).then((a=>{if(200===a.status)for(let e=0;e<a.data.length;e++){let t=this.memberObject.find((t=>t.member===a.data[e].name.trim()))?.avatar;"undefined"===typeof t&&(t="");let l=this.memberObject.find((t=>t.member===a.data[e].name.trim()))?.customized;"undefined"===typeof l&&(l=!1);let s=this.memberObject.find((t=>t.member===a.data[e].whoHasTheCard))?.avatar;"undefined"===typeof s&&(s="");let r=this.memberObject.find((t=>t.member===a.data[e].whoHasTheCard))?.customized;"undefined"===typeof r&&(r=!1),this.setWhereIsMyCardObject(a.data[e].id,a.data[e].name.trim(),t,l,a.data[e].isDiscounted,a.data[e].whoHasTheCard.trim(),s,r,a.data[e].isDigital)}else console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))},setWhereIsMyCardObject(a,e,t,l,s,r,i,o,n){this.whereIsMyCardObject.push({cardHolderId:a,cardHolder:e,cardHolderAvatar:t,cardHolderAvatarIsCustomized:l,discounted:s,whoHasTheCard:r,whoHasTheCardAvatar:i,whoHasTheCardAvatarIsCustomized:o,digital:n})},onWhereIsMyCardClick(a,e,t,l,s){W.value=a,x.value=e,T.value=e,S.value=t,A.value=l,I.value=s,this.editWhereIsMyCard=!0},addWhereIsMyCardSave(a,e,t,l){const s=this.whereIsMyCardObject.map((a=>a.cardHolder)),r=s.includes(a);if(r)this.onCardHolderAlreadyExists();else{const s=(0,w.A)(),r=new Date,i={id:s,creationTime:r,lastModificationTime:null,tenantId:L,name:a.trim(),isDiscounted:e,whoHasTheCard:t.trim(),isDigital:l};this.$axios.post(`${B}/${L}`,i).then((a=>{201===a.status?(this.onCardHolderCreated(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}},editWhereIsMyCardSave(a,e,t,l,s,r){const i=this.whereIsMyCardObject.map((a=>a.cardHolder)),o=i.includes(e)&&e!==t;if(o)this.onCardHolderAlreadyExists();else{const t={id:a,creationTime:null,lastModificationTime:null,tenantId:L,name:e.trim(),isDiscounted:l,whoHasTheCard:s.trim(),isDigital:r};this.$axios.put(`${B}/${L}/${a}`,t).then((a=>{200===a.status?(this.onCardHolderUpdated(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}},deleteWhereIsMyCard(a){this.$axios.delete(`${B}/${L}/${a}`).then((a=>{200===a.status?(this.editWhereIsMyCard=!1,this.onCardHolderDeleted(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}}};var O=t(2807),R=t(7716),q=t(6914),P=t(9150),U=t(6384),N=t(3999),E=t(124),Q=t(5173),z=t(3952),J=t(3796),j=t(2156),$=t(3316),G=t(4189),X=t(9270),Y=t(5087),Z=t(386),aa=t(2669),ea=t(330),ta=t(9626),la=t(8672),sa=t(8582),ra=t.n(sa);const ia=(0,O.A)(V,[["render",y]]),oa=ia;ra()(V,"components",{QPage:R.A,QToolbar:q.A,QToolbarTitle:P.A,QBtn:U.A,QList:N.A,QItem:E.A,QItemSection:Q.A,QAvatar:z.A,QItemLabel:J.A,QDialog:j.A,QCard:$.A,QCardSection:G.A,QInput:X.A,QToggle:Y.A,QSeparator:Z.A,QCardActions:aa.A,QImg:ea.A}),ra()(V,"directives",{Ripple:ta.A,ClosePopup:la.A})}}]);