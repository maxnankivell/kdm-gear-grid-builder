import{d as F,r as k,u as Q,c as x,s as R,a as C,b as B,e as s,o as c,f as d,g as t,h as X,F as y,p as N,i as O,j as U,w as L,k as D,n as P,l as Y,m as A,q as Z,t as ee,v as re,x as h,y as S,z as H,A as ae,T as E,B as se,C as oe,D as te,E as ie}from"./vendor.213c5fbf.js";const ne=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}};ne();const V=F("gridStateStore",()=>({gridState:k("one")})),K=F("clearButtonStore",()=>({clearButtonState:k(!1)})),{width:v,height:$}=Q(),G=x(()=>{const{gridState:n}=R(V());return n.value==="four"?v.value<1150?75:v.value<1380?100:v.value<1580?125:v.value<1780?150:v.value<1980?175:v.value<2180?200:v.value<2380?225:250:v.value<960||$.value<700?110:v.value<1160||$.value<830?150:v.value<1360||$.value<980?190:v.value<1560||$.value<1080?230:v.value<1760||$.value<1200?270:v.value<1960||$.value<1300?310:v.value<2160||$.value<1420?350:390}),J=k(16),z=x(()=>J.value+"px");var I=(n,u)=>{const l=n.__vccOpts||n;for(const[r,e]of u)l[r]=e;return l};const ge=n=>(N("data-v-6a0473d0"),n=n(),O(),n),ce={class:"modal-container"},ue=ge(()=>t("div",{class:"modal-background"},null,-1)),le=C({setup(n){return B(u=>({"46caf256":s(z)})),(u,l)=>(c(),d(y,null,[t("div",ce,[X(u.$slots,"default",{},void 0,!0)]),ue],64))}});var me=I(le,[["__scopeId","data-v-6a0473d0"]]);const W=n=>(N("data-v-c1989d1e"),n=n(),O(),n),de={class:"nav"},pe=W(()=>t("div",{class:"nav-option left-nav-option save-button"},"Save Grids",-1)),_e={class:"modal"},be=W(()=>t("h2",{style:{"grid-area":"header"}},"Confirm",-1)),we=W(()=>t("p",{style:{"grid-area":"paragraph"}},"Are you sure you want to clear ALL grids?",-1)),ve=C({setup(n){B(i=>({"580a9f6b":s(z)}));const{gridState:u}=R(V()),{clearButtonState:l}=R(K()),r=k(!1);function e(){l.value=!0,r.value=!1}return(i,o)=>(c(),d("div",null,[t("nav",de,[t("div",{class:"nav-option right-nav-option",onClick:o[0]||(o[0]=b=>u.value="one")},"Cycle"),t("div",{class:"nav-option right-nav-option",onClick:o[1]||(o[1]=b=>u.value="four")},"Scroll"),t("div",{class:"nav-option left-nav-option",style:{"margin-left":"auto"},onClick:o[2]||(o[2]=b=>r.value=!0)},"Clear"),pe]),r.value?(c(),U(me,{key:0},{default:L(()=>[t("div",_e,[be,we,t("button",{style:{"grid-area":"yes"},onClick:e},"Yes"),t("button",{style:{"grid-area":"no"},onClick:o[3]||(o[3]=b=>r.value=!1)},"No")])]),_:1})):D("",!0)]))}});var he=I(ve,[["__scopeId","data-v-c1989d1e"]]);const fe=["src","draggable"],ke=C({props:{id:null,imageSource:null},emits:["update:image-source","reset-image"],setup(n,{emit:u}){const l=n;B(_=>({"6165085d":s(z)}));const r=x({get:()=>l.imageSource,set:_=>u("update:image-source",_)});let e="-1";const i=k(0),o=x(()=>r.value.endsWith("gear_default.webp"));function b(_){if(_.preventDefault(),i.value=0,!_.dataTransfer||!_.dataTransfer.getData("imageAndPosition")){console.error("event null");return}const m=_.dataTransfer.getData("imageAndPosition").split("|");r.value=m[0],e=m[1]}function p(_){if(!_.dataTransfer||o.value){console.warn("drag cancel"),_.preventDefault();return}_.dataTransfer.effectAllowed="move",_.dataTransfer.dropEffect="move",_.dataTransfer.setData("imageAndPosition",r.value+`|${l.id}`)}function f(_){if(!_.dataTransfer||_.dataTransfer.dropEffect==="none"||e===l.id){e="-1";return}u("reset-image")}return(_,m)=>(c(),d("div",{class:P(["dropzone",{highlighted:i.value>0}]),onDrop:m[2]||(m[2]=g=>b(g)),onDragenter:m[3]||(m[3]=A(g=>i.value++,["prevent"])),onDragleave:m[4]||(m[4]=g=>i.value--),onDragover:m[5]||(m[5]=A(()=>{},["prevent"]))},[t("div",null,[t("img",{src:s(r),class:P(["image",{"no-drag":s(o)}]),style:Y({width:s(G)+"px",height:s(G)+"px"}),draggable:!s(o),onDragstart:m[0]||(m[0]=g=>p(g)),onDragend:m[1]||(m[1]=g=>f(g))},null,46,fe)])],34))}});var T=I(ke,[["__scopeId","data-v-71c8d663"]]);const M=n=>(N("data-v-04fb925b"),n=n(),O(),n),ye={id:"scroll-pane"},Se={key:0,class:"gear-grids-container-four"},$e={class:"grid-header"},xe=["onClick"],Ce={key:1,class:"gear-grids-container-one"},Ie={key:"1",class:"gear-grid"},De={class:"grid-header"},Be=M(()=>t("h1",null,"Survivor 1:",-1)),ze={key:"2",class:"gear-grid"},Te={class:"grid-header"},Ae=M(()=>t("h1",null,"Survivor 2:",-1)),Re={key:"3",class:"gear-grid"},Ue={class:"grid-header"},Le=M(()=>t("h1",null,"Survivor 3:",-1)),Ge={key:"4",class:"gear-grid"},Me={class:"grid-header"},Pe=M(()=>t("h1",null,"Survivor 4:",-1)),Ee=C({setup(n){B(m=>({f1e18944:s(b),"08a02025":s(z)}));const{gridState:u}=R(V()),{clearButtonState:l}=R(K()),r=k(1),e=k(1),i=k(new URL("/kdm-gear-grid-builder/assets/gear_default.a22836cc.webp",self.location).href),o=Z({}),b=x(()=>u.value==="one"?"hidden":"auto");ee(()=>_()),re(l,()=>{_(),l.value=!1});function p(m){for(let g=1;g<=9;g++)o[""+m+g]=i.value}function f(m){e.value=r.value,r.value=r.value+m}function _(){for(let m=1;m<=4;m++)for(let g=1;g<=9;g++)o[""+m+g]=i.value}return(m,g)=>(c(),d("div",ye,[h(E,{name:"fade",mode:"out-in"},{default:L(()=>[s(u)==="four"?(c(),d("div",Se,[(c(),d(y,null,S(4,a=>t("div",{key:a,class:"gear-grid"},[t("div",$e,[t("h1",null,"Survivor "+H(a)+":",1),t("button",{style:{"flex-grow":"0"},onClick:w=>p(a)},"Clear",8,xe)]),(c(),d(y,null,S(9,w=>h(T,{id:""+a+w,key:w,imageSource:s(o)[""+a+w],"onUpdate:imageSource":j=>s(o)[""+a+w]=j,onResetImage:j=>s(o)[""+a+w]=i.value},null,8,["id","imageSource","onUpdate:imageSource","onResetImage"])),64))])),64))])):s(u)==="one"?(c(),d("div",Ce,[r.value>1?(c(),U(s(ae),{key:0,class:"arrow left-arrow",size:64,onClick:g[0]||(g[0]=a=>f(-1))})):D("",!0),h(E,{name:r.value>e.value?"cycle-right":"cycle-left",mode:"out-in"},{default:L(()=>[r.value===1?(c(),d("div",Ie,[t("div",De,[Be,t("button",{style:{"flex-grow":"0"},onClick:g[1]||(g[1]=a=>p(1))},"Clear")]),(c(),d(y,null,S(9,a=>h(T,{id:""+1+a,key:a,imageSource:s(o)[""+1+a],"onUpdate:imageSource":w=>s(o)[""+1+a]=w,onResetImage:w=>s(o)[""+1+a]=i.value},null,8,["id","imageSource","onUpdate:imageSource","onResetImage"])),64))])):r.value===2?(c(),d("div",ze,[t("div",Te,[Ae,t("button",{style:{"flex-grow":"0"},onClick:g[2]||(g[2]=a=>p(2))},"Clear")]),(c(),d(y,null,S(9,a=>h(T,{id:""+2+a,key:a,imageSource:s(o)[""+2+a],"onUpdate:imageSource":w=>s(o)[""+2+a]=w,onResetImage:w=>s(o)[""+2+a]=i.value},null,8,["id","imageSource","onUpdate:imageSource","onResetImage"])),64))])):r.value===3?(c(),d("div",Re,[t("div",Ue,[Le,t("button",{style:{"flex-grow":"0"},onClick:g[3]||(g[3]=a=>p(3))},"Clear")]),(c(),d(y,null,S(9,a=>h(T,{id:""+3+a,key:a,imageSource:s(o)[""+3+a],"onUpdate:imageSource":w=>s(o)[""+3+a]=w,onResetImage:w=>s(o)[""+3+a]=i.value},null,8,["id","imageSource","onUpdate:imageSource","onResetImage"])),64))])):r.value===4?(c(),d("div",Ge,[t("div",Me,[Pe,t("button",{style:{"flex-grow":"0"},onClick:g[4]||(g[4]=a=>p(4))},"Clear")]),(c(),d(y,null,S(9,a=>h(T,{id:""+4+a,key:a,imageSource:s(o)[""+4+a],"onUpdate:imageSource":w=>s(o)[""+4+a]=w,onResetImage:w=>s(o)[""+4+a]=i.value},null,8,["id","imageSource","onUpdate:imageSource","onResetImage"])),64))])):D("",!0)]),_:1},8,["name"]),r.value<4?(c(),U(s(se),{key:1,class:"arrow right-arrow",size:64,onClick:g[5]||(g[5]=a=>f(1))})):D("",!0)])):D("",!0)]),_:1})]))}});var Ne=I(Ee,[["__scopeId","data-v-04fb925b"]]);const q=[{source:"gear-images/barber-surgeon/almanac.webp",categories:["barber-surgeon"]},{source:"gear-images/barber-surgeon/brain_mint.webp",categories:["barber-surgeon"]},{source:"gear-images/barber-surgeon/bug_trap.webp",categories:["barber-surgeon"]},{source:"gear-images/barber-surgeon/elder_earrings.webp",categories:["barber-surgeon"]},{source:"gear-images/barber-surgeon/first_aid_kit.webp",categories:["barber-surgeon"]},{source:"gear-images/barber-surgeon/musk_bomb.webp",categories:["barber-surgeon"]},{source:"gear-images/barber-surgeon/scavenger_kit.webp",categories:["barber-surgeon"]},{source:"gear-images/barber-surgeon/speed_powder.webp",categories:["barber-surgeon"]},{source:"gear-images/blacksmith/beacon_shield.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/dragon_slayer.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/lantern_cuirass.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/lantern_dagger.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/lantern_gauntlets.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/lantern_glaive.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/lantern_greaves.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/lantern_helm.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/lantern_mail.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/lantern_sword.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/perfect_slayer.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/ring_whip.webp",categories:["blacksmith"]},{source:"gear-images/blacksmith/scrap_shield.webp",categories:["blacksmith"]},{source:"gear-images/bone-smith/bone_axe.webp",categories:["bone-smith"]},{source:"gear-images/bone-smith/bone_blade.webp",categories:["bone-smith"]},{source:"gear-images/bone-smith/bone_club.webp",categories:["bone-smith"]},{source:"gear-images/bone-smith/bone_dagger.webp",categories:["bone-smith"]},{source:"gear-images/bone-smith/bone_darts.webp",categories:["bone-smith"]},{source:"gear-images/bone-smith/bone_pickaxe.webp",categories:["bone-smith"]},{source:"gear-images/bone-smith/bone_sickle.webp",categories:["bone-smith"]},{source:"gear-images/bone-smith/skull_helm.webp",categories:["bone-smith"]},{source:"gear-images/catarium/cat_eye_circlet.webp",categories:["catarium"]},{source:"gear-images/catarium/cat_fang_knife.webp",categories:["catarium"]},{source:"gear-images/catarium/cat_gut_bow.webp",categories:["catarium"]},{source:"gear-images/catarium/claw_head_arrow.webp",categories:["catarium"]},{source:"gear-images/catarium/frenzy_drink.webp",categories:["catarium"]},{source:"gear-images/catarium/king_spear.webp",categories:["catarium"]},{source:"gear-images/catarium/lion_beast_katar.webp",categories:["catarium"]},{source:"gear-images/catarium/lion_headdress.webp",categories:["catarium"]},{source:"gear-images/catarium/lion_skin_cloak.webp",categories:["catarium"]},{source:"gear-images/catarium/whisker_harp.webp",categories:["catarium"]},{source:"gear-images/catarium/white_lion_boots.webp",categories:["catarium"]},{source:"gear-images/catarium/white_lion_coat.webp",categories:["catarium"]},{source:"gear-images/catarium/white_lion_gauntlet.webp",categories:["catarium"]},{source:"gear-images/catarium/white_lion_helm.webp",categories:["catarium"]},{source:"gear-images/catarium/white_lion_skirt.webp",categories:["catarium"]},{source:"gear-images/exhausted-lantern-hoard/final_lantern.webp",categories:["exhausted-lantern-hoard"]},{source:"gear-images/exhausted-lantern-hoard/oxidized_beacon_shield.webp",categories:["exhausted-lantern-hoard"]},{source:"gear-images/exhausted-lantern-hoard/oxidized_lantern_dagger.webp",categories:["exhausted-lantern-hoard"]},{source:"gear-images/exhausted-lantern-hoard/oxidized_lantern_glaive.webp",categories:["exhausted-lantern-hoard"]},{source:"gear-images/exhausted-lantern-hoard/oxidized_lantern_helm.webp",categories:["exhausted-lantern-hoard"]},{source:"gear-images/exhausted-lantern-hoard/oxidized_lantern_sword.webp",categories:["exhausted-lantern-hoard"]},{source:"gear-images/exhausted-lantern-hoard/oxidized_ring_whip.webp",categories:["exhausted-lantern-hoard"]},{source:"gear-images/exhausted-lantern-hoard/survivors'_lantern.webp",categories:["exhausted-lantern-hoard"]},{source:"gear-images/leather-worker/hunter_whip.webp",categories:["leather-worker"]},{source:"gear-images/leather-worker/leather_boots.webp",categories:["leather-worker"]},{source:"gear-images/leather-worker/leather_bracers.webp",categories:["leather-worker"]},{source:"gear-images/leather-worker/leather_cuirass.webp",categories:["leather-worker"]},{source:"gear-images/leather-worker/leather_mask.webp",categories:["leather-worker"]},{source:"gear-images/leather-worker/leather_skirt.webp",categories:["leather-worker"]},{source:"gear-images/leather-worker/round_leather_shield.webp",categories:["leather-worker"]},{source:"gear-images/mask-maker/antelope_mask.webp",categories:["mask-maker"]},{source:"gear-images/mask-maker/death_mask.webp",categories:["mask-maker"]},{source:"gear-images/mask-maker/god_mask.webp",categories:["mask-maker"]},{source:"gear-images/mask-maker/man_mask.webp",categories:["mask-maker"]},{source:"gear-images/mask-maker/phoenix_mask.webp",categories:["mask-maker"]},{source:"gear-images/mask-maker/white_lion_mask.webp",categories:["mask-maker"]},{source:"gear-images/organ-grinder/dried_acanthus.webp",categories:["organ-grinder"]},{source:"gear-images/organ-grinder/fecal_salve.webp",categories:["organ-grinder"]},{source:"gear-images/organ-grinder/lucky_charm.webp",categories:["organ-grinder"]},{source:"gear-images/organ-grinder/monster_grease.webp",categories:["organ-grinder"]},{source:"gear-images/organ-grinder/monster_tooth_necklace.webp",categories:["organ-grinder"]},{source:"gear-images/organ-grinder/stone_noses.webp",categories:["organ-grinder"]},{source:"gear-images/plumery/arc_bow.webp",categories:["plumery"]},{source:"gear-images/plumery/bird_bread.webp",categories:["plumery"]},{source:"gear-images/plumery/bloom_sphere.webp",categories:["plumery"]},{source:"gear-images/plumery/crest_crown.webp",categories:["plumery"]},{source:"gear-images/plumery/feather_mantle.webp",categories:["plumery"]},{source:"gear-images/plumery/feather_shield.webp",categories:["plumery"]},{source:"gear-images/plumery/hollow_sword.webp",categories:["plumery"]},{source:"gear-images/plumery/hollowpoint_arrow.webp",categories:["plumery"]},{source:"gear-images/plumery/hours_ring.webp",categories:["plumery"]},{source:"gear-images/plumery/phoenix_faulds.webp",categories:["plumery"]},{source:"gear-images/plumery/phoenix_gauntlet.webp",categories:["plumery"]},{source:"gear-images/plumery/phoenix_greaves.webp",categories:["plumery"]},{source:"gear-images/plumery/phoenix_helm.webp",categories:["plumery"]},{source:"gear-images/plumery/phoenix_plackart.webp",categories:["plumery"]},{source:"gear-images/plumery/sonic_tomahawk.webp",categories:["plumery"]},{source:"gear-images/rare-gear/adventure_sword.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/butcher_cleaver.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/forsaker_mask.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/lantern_halberd.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/muramasa.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/regal_faulds.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/regal_gauntlet.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/regal_greaves.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/regal_helm.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/regal_plackart.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/steel_shield.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/steel_sword.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/thunder_maul.webp",categories:["rare-gear"]},{source:"gear-images/rare-gear/twilight_sword.webp",categories:["rare-gear"]},{source:"gear-images/skinnery/bandages.webp",categories:["skinnery"]},{source:"gear-images/skinnery/rawhide_boots.webp",categories:["skinnery"]},{source:"gear-images/skinnery/rawhide_drum.webp",categories:["skinnery"]},{source:"gear-images/skinnery/rawhide_gloves.webp",categories:["skinnery"]},{source:"gear-images/skinnery/rawhide_headband.webp",categories:["skinnery"]},{source:"gear-images/skinnery/rawhide_pants.webp",categories:["skinnery"]},{source:"gear-images/skinnery/rawhide_vest.webp",categories:["skinnery"]},{source:"gear-images/skinnery/rawhide_whip.webp",categories:["skinnery"]},{source:"gear-images/starting-gear/cloth.webp",categories:["starting-gear"]},{source:"gear-images/starting-gear/founding_stone.webp",categories:["starting-gear"]},{source:"gear-images/stone-circle/beast_knuckle.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/blood_paint.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/blue_charm.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/bone_earrings.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/boss_mehndi.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/green_charm.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/lance_of_longinus.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/red_charm.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/screaming_bracers.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/screaming_coat.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/screaming_horns.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/screaming_leg_warmers.webp",categories:["stone-circle"]},{source:"gear-images/stone-circle/screaming_skirt.webp",categories:["stone-circle"]},{source:"gear-images/weapon-crafter/blood_sheath.webp",categories:["weapon-crafter"]},{source:"gear-images/weapon-crafter/counterweighted_axe.webp",categories:["weapon-crafter"]},{source:"gear-images/weapon-crafter/finger_of_god.webp",categories:["weapon-crafter"]},{source:"gear-images/weapon-crafter/rainbow_katana.webp",categories:["weapon-crafter"]},{source:"gear-images/weapon-crafter/scrap_dagger.webp",categories:["weapon-crafter"]},{source:"gear-images/weapon-crafter/scrap_sword.webp",categories:["weapon-crafter"]},{source:"gear-images/weapon-crafter/skullcap_hammer.webp",categories:["weapon-crafter"]},{source:"gear-images/weapon-crafter/whistling_mace.webp",categories:["weapon-crafter"]},{source:"gear-images/weapon-crafter/zambato.webp",categories:["weapon-crafter"]}];const Oe={class:"question"},Ve={style:{overflow:"hidden"}},We={key:0,class:"image-container"},je=["src","onDragstart"],qe=C({props:{category:null,images:null},setup(n){const u=n;B(b=>({bbffa208:s(z),"7e5134d3":s(i)}));const l=k(!1),r=k(!1),e=x(()=>{const b=u.category.split("-");for(let p=0;p<b.length;p++)b[p]=b[p].charAt(0).toUpperCase()+b[p].slice(1);return b.join(" ")}),i=x(()=>G.value+"px");function o(b,p){if(!b.dataTransfer){console.warn("drag cancel");return}b.dataTransfer.effectAllowed="copy",b.dataTransfer.dropEffect="copy",b.dataTransfer.setData("imageAndPosition",p+"|-1")}return(b,p)=>(c(),d("div",null,[t("div",{class:"accordion-header",style:Y({"border-radius":l.value?"8px 8px 0 0 ":"8px",width:s(G)*2+s(J)*3+"px"}),onClick:p[0]||(p[0]=f=>l.value=!l.value),onMouseenter:p[1]||(p[1]=f=>r.value=!0),onMouseleave:p[2]||(p[2]=f=>r.value=!1)},[t("div",Oe,H(s(e)),1),h(s(oe),{size:32,class:P(["chevron",{"rotate-chevron-90":r.value,"rotate-chevron-180":l.value}])},null,8,["class"])],36),t("div",Ve,[h(E,{name:"slide-down"},{default:L(()=>[l.value?(c(),d("div",We,[(c(!0),d(y,null,S(n.images,f=>(c(),d("img",{key:f,src:f,alt:"gear image",class:"image",draggable:"true",onDragstart:_=>o(_,f)},null,40,je))),128))])):D("",!0)]),_:1})])]))}});var Fe=I(qe,[["__scopeId","data-v-688fe1ab"]]);const Ye=C({setup(n){B(r=>({"8b6097a4":s(z)}));const u=k([]);for(const r of q)for(const e of r.categories)u.value.includes(e)||u.value.push(e);const l=Z({});for(const r of u.value)for(const e of q)e.categories.includes(r)&&(l[r]||(l[r]=[]),l[r].push(e.source));return(r,e)=>(c(),d("div",{class:"category-container",onDragenter:e[0]||(e[0]=A(()=>{},["prevent"])),onDragover:e[1]||(e[1]=A(()=>{},["prevent"])),onDrop:e[2]||(e[2]=A(()=>{},["prevent"]))},[(c(!0),d(y,null,S(u.value,i=>(c(),U(Fe,{key:i,category:i,images:s(l)[i]},null,8,["category","images"]))),128))],32))}});var Ze=I(Ye,[["__scopeId","data-v-c3a11aba"]]);const He={class:"page-container"},Ke=C({setup(n){return(u,l)=>(c(),d("div",He,[h(he,{style:{"grid-area":"header"}}),h(Ze,{style:{"grid-area":"sidebar"}}),h(Ne,{style:{"grid-area":"gear-grid"}})]))}});var Je=I(Ke,[["__scopeId","data-v-bd17dd2e"]]);te(Je).use(ie()).mount("#app");
