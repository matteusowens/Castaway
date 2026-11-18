(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=null;function t(){return e||=new AudioContext,e.state===`suspended`&&e.resume(),e}function n(e,n,r,i){let a=t(),o=a.createOscillator(),s=a.createGain();o.type=r,o.frequency.value=e,s.gain.setValueAtTime(i,a.currentTime),s.gain.exponentialRampToValueAtTime(.001,a.currentTime+n),o.connect(s),s.connect(a.destination),o.start(),o.stop(a.currentTime+n)}function r(e,n){let r=t(),i=Math.floor(r.sampleRate*e),a=r.createBuffer(1,i,r.sampleRate),o=a.getChannelData(0);for(let e=0;e<i;e+=1)o[e]=Math.random()*2-1;let s=r.createBufferSource();s.buffer=a;let c=r.createGain();c.gain.setValueAtTime(n,r.currentTime),c.gain.exponentialRampToValueAtTime(.001,r.currentTime+e),s.connect(c),c.connect(r.destination),s.start()}return{unlock(){t()},shot(){r(.09,.08),n(110,.07,`square`,.03)},hit(){n(420,.06,`square`,.04),n(220,.09,`triangle`,.03)},dry(){n(70,.04,`square`,.025)},boom(){r(.35,.12),n(55,.4,`sawtooth`,.05)},cheer(){n(523,.07,`square`,.035),n(659,.09,`square`,.03),n(784,.14,`triangle`,.03)}}}var t=new Set([`woodminion`,`rockminion`,`vineminion`]),n={knife:{wood:1,stone:1,fiber:0,once:`hasKnife`},axe:{wood:2,stone:1,fiber:0,once:`hasAxe`},spear:{wood:1,stone:1,fiber:1},fire:{wood:4,stone:1,fiber:0,once:`hasFire`},shelter:{wood:6,stone:0,fiber:4,once:`hasShelter`},raft:{wood:8,stone:2,fiber:2,once:`hasRaft`,need:`hasKnife`},catcher:{wood:2,stone:0,fiber:1,once:`hasCatcher`},rack:{wood:3,stone:0,fiber:0,once:`hasRack`},sail:{wood:1,stone:0,fiber:2,fronds:2,once:`hasSail`},woodminion:{wood:8,stone:4,fiber:6,once:`hasWoodMinion`,need:`hasAxe`,also:`hasShelter`},rockminion:{wood:4,stone:8,fiber:4,once:`hasRockMinion`,need:`hasKnife`,also:`hasShelter`},vineminion:{wood:4,stone:3,fiber:8,once:`hasVineMinion`,need:`hasShelter`},salve:{wood:0,stone:0,fiber:0,sap:1},embers:{wood:0,stone:1,fiber:0,cinder:1},charm:{wood:0,stone:0,fiber:0,pearl:1},bait:{wood:0,stone:0,fiber:1,amber:1}},r={knife:`The knife sticks up close and pries more stone.`,axe:`The axe is the only tool that fells a palm.`,spear:`You lash a spear.`,fire:`The campfire catches. The others sit in.`,shelter:`A lean-to keeps the rain off.`,raft:`A dock and a boat wait on the south shore. Q boards it.`,catcher:`A catcher sits by camp. Rain will fill it.`,rack:`A rack stands by the fire. Raw meat can dry on it.`,sail:`A palm-frond sail. It wants a calm morning.`,woodminion:`A collector takes the axe and walks to the palms.`,rockminion:`A collector takes the knife and worries the rocks.`,vineminion:`A collector walks off to pull vine.`,salve:`The sap closes a cut.`,embers:`Two spear heads hold the heat.`,charm:`The pearl sits cool against your chest. The sea is slower to take you.`,bait:`Amber bait. Feed it to a dinosaur, then Q rides.`},i=[{id:`knife`,name:`Knife`,cost:`1 wood  1 stone`},{id:`axe`,name:`Axe`,cost:`2 wood  1 stone`},{id:`spear`,name:`Spear`,cost:`1 wood  1 stone  1 vine`},{id:`fire`,name:`Campfire`,cost:`4 wood  1 stone`},{id:`shelter`,name:`Shelter`,cost:`6 wood  4 vine`},{id:`raft`,name:`Boat`,cost:`8 wood  2 stone  2 vine`},{id:`catcher`,name:`Catcher`,cost:`2 wood  1 vine`},{id:`rack`,name:`Rack`,cost:`3 wood`},{id:`sail`,name:`Sail`,cost:`1 wood  2 vine  2 fronds`}],a=[{id:`salve`,name:`Sap salve`,cost:`1 sap`,seen:`seenSap`},{id:`embers`,name:`Ember spears`,cost:`1 cinder  1 stone`,seen:`seenCinder`},{id:`charm`,name:`Pearl charm`,cost:`1 pearl`,seen:`seenPearl`},{id:`bait`,name:`Amber bait`,cost:`1 amber  1 vine`,seen:`seenAmber`}];function o(e){return[...i,...a.filter(t=>e[t.seen])]}var s={palm:!1,rocks:!1,vines:!1,nuts:!1};function c(){return{crop:`none`,left:0,full:0}}function l(){return[c(),c(),c(),c()]}function u(){return{phase:`crash`,day:1,hunger:78,thirst:72,health:64,wood:0,stone:0,fiber:0,fronds:0,sap:0,cinder:0,pearl:0,amber:0,baits:0,tame:`none`,seenSap:!1,seenCinder:!1,seenPearl:!1,seenAmber:!1,hasCharm:!1,raw:0,rawAge:0,meals:1,shells:0,bullets:0,catcher:0,salted:!1,hasKnife:!1,hasAxe:!1,hasFire:!1,hasShelter:!1,hasSignal:!1,hasRaft:!1,hasCatcher:!1,hasRack:!1,hasSail:!1,hasHandset:!1,hasBattery:!1,hasWire:!1,tsunamiSeen:!1,errand:`none`,bounty:`none`,wheat:0,berry:0,loaf:0,plots:l(),orders:[{good:`wood`,need:3},{good:`stone`,need:2}],houseA:!1,houseB:!1,market:!1,bakery:!1,bakeLeft:0,bakeDone:!1,visited:[],kills:0,hasKeel:!1,hasLungs:!1,hasQuiver:!1,sea:`rough`,hasWoodMinion:!1,hasRockMinion:!1,hasVineMinion:!1,nodes:{...s},wreckDay:0,chatter:0,crash:0,help:!1,lines:[],endTitle:``,speedrun:!1,speedMs:0,bestMs:0}}function d(e){let t=Math.max(0,Math.floor(e)),n=Math.floor(t/6e4),r=Math.floor(t%6e4/1e3),i=Math.floor(t%1e3/100);return`${n}:${r.toString().padStart(2,`0`)}.${i}`}function f(e,t){if(t<=0||e.phase===`win`||e.phase===`lose`)return e;let n=g(e.health-t,0,100);if(n<=0)return{...e,health:0,phase:`lose`,endTitle:`You drown`,lines:[`The water closes over you.`]};let r=`You are drowning. Get ashore.`;return{...e,health:n,lines:e.lines[0]===r?e.lines:[r]}}function p(e,t,n){if(t<=0||e.phase===`win`||e.phase===`lose`)return e;let r=g(e.health-t,0,100);if(r<=0)return{...e,health:0,phase:`lose`,endTitle:`The ${n} takes you`,lines:[`The ${n} closes its teeth.`]};let i=`The ${n} bites.`;return{...e,health:r,lines:e.lines[0]===i?e.lines:[i]}}function m(e,t){return e.baits<1?{...e,lines:[`Craft amber bait from amber and vine.`]}:{...e,baits:e.baits-1,tame:t,lines:[`The ${t} lowers its head. Q rides.`]}}function h(e){return e>=70?`Sound`:e>=40?`Worn`:e>=1?`Hurt`:`Done`}function g(e,t,n){return Math.max(t,Math.min(n,e))}function _(e){return e.hunger<=0?{...e,phase:`lose`,endTitle:`You starve`}:e.thirst<=0?{...e,phase:`lose`,endTitle:`You dry out`}:e.health<=0?{...e,phase:`lose`,endTitle:`The island takes you`}:e}function v(e,t=!1){let n=e.bounty===`none`?S(Math.random):e.bounty;return{...e,phase:`world`,help:!1,speedrun:t,speedMs:0,bounty:n,lines:t?[`Race on. Sail the raft, or signal a plane.`,`The clock is running.`]:[`You are on your feet. The north mine buys what you carry.`,`The buyer wants ${x[n].name}.`]}}var y={raft:{cost:20,name:`Boat`},catcher:{cost:8,name:`Rain catcher`},rack:{cost:6,name:`Drying rack`},sail:{cost:12,name:`Sail`},woodminion:{cost:18,name:`Wood collector`},rockminion:{cost:18,name:`Rock collector`},vineminion:{cost:16,name:`Vine collector`},keel:{cost:24,name:`Quicker boat`},lungs:{cost:28,name:`Longer breath`},quiver:{cost:16,name:`Spare spear`}},b=[`sap`,`cinder`,`pearl`,`monkey`,`lizard`,`crab`],x={sap:{goods:`sap`,pay:8,name:`glow sap`,short:`Sap`},cinder:{goods:`cinder`,pay:12,name:`cinder`,short:`Cinder`},pearl:{goods:`pearl`,pay:18,name:`a pearl`,short:`Pearl`},monkey:{goods:`sap`,pay:10,name:`a monkey`,short:`Monkey`},lizard:{goods:`cinder`,pay:16,name:`a lizard`,short:`Lizard`},crab:{goods:`pearl`,pay:22,name:`a crab`,short:`Crab`}};function S(e,t=`none`){let n=b.filter(e=>e!==t);return n[Math.min(n.length-1,Math.floor(e()*n.length))]??`sap`}function C(e,t=Math.random){if(e.bounty===`none`)return{...e,lines:[`The buyer has no want today.`]};let n=x[e.bounty];if(e[n.goods]<1)return{...e,lines:[`The buyer still wants ${n.name}.`]};let r=S(t,e.bounty);return{...e,[n.goods]:e[n.goods]-1,shells:e.shells+n.pay,bounty:r,lines:[`The buyer pays ${n.pay} shells for ${n.name}. Next, ${x[r].name}.`]}}function w(e){return e.hasRaft&&e.hasCatcher&&e.hasRack&&e.hasSail&&e.hasWoodMinion&&e.hasRockMinion&&e.hasVineMinion}function T(e){return w(e)?e.hasKeel?e.hasLungs?e.hasQuiver?null:`quiver`:`lungs`:`keel`:null}var E={wood:1,stone:1,fiber:1,sap:3,cinder:5,pearl:8},D={wood:`wood`,stone:`stone`,fiber:`vine`,sap:`glow sap`,cinder:`cinder`,pearl:`pearl`};function O(e,t){let n=Math.max(0,Math.floor(t));return n===0?e:{...e,shells:e.shells+n}}function ee(e,t){let n=E[t],r=D[t];return e[t]<1?{...e,lines:[`No ${r} to sell.`]}:{...e,[t]:e[t]-1,shells:e.shells+n,lines:[`The buyer pays ${n} ${n===1?`shell`:`shells`} for the ${r}.`]}}var k=32,A=48,te=24,j={houseA:{shells:8,wood:4,stone:0,name:`house`},houseB:{shells:8,wood:4,stone:0,name:`house`},market:{shells:6,wood:0,stone:2,name:`market`},bakery:{shells:10,wood:4,stone:2,name:`bakery`}},ne={wood:`wood`,stone:`stone`,fiber:`vine`,sap:`sap`,cinder:`cinder`,pearl:`pearl`,wheat:`wheat`,berry:`berries`,loaf:`loaf`};function re(e){return e===`wheat`?2:e===`berry`?3:e===`loaf`?6:E[e]}function ie(e){return e.wheat+e.berry+e.loaf}function ae(e,t){return e[t]}function oe(e){let t=e.reduce((e,t)=>e+re(t.good)*t.need,0);return{loose:t,total:t+Math.max(2,Math.ceil(t*.5))}}function se(e){let t=oe(e.orders);return`Slip: ${e.orders.map(e=>`${e.need} ${ne[e.good]}`).join(` and `)}. A pays ${t.total}. Loose would pay ${t.loose}.`}function ce(e){let t=[`wood`,`stone`,`fiber`];return(e.wheat>0||e.berry>0||e.plots.some(e=>e.crop!==`none`))&&t.push(`wheat`,`berry`),e.bakery&&t.push(`loaf`),t}function le(e,t=Math.random){let n=ce(e),r=()=>n[Math.min(n.length-1,Math.floor(t()*n.length))]??`wood`,i=r(),a=r();a===i&&(a=n.find(e=>e!==i)??`stone`);let o=e=>e===`loaf`||e===`pearl`?1:2+Math.floor(t()*3);return[{good:i,need:o(i)},{good:a,need:o(a)}]}function ue(e){return e.orders.every(t=>ae(e,t.good)>=t.need)}function de(e,t=Math.random){if(!ue(e))return{...e,lines:[se(e)]};let n=oe(e.orders),r={...e,shells:e.shells+n.total,lines:[`The slip pays ${n.total}. A loose sale would pay ${n.loose}.`]};for(let t of e.orders)r[t.good]-=t.need;return r.orders=le(r,t),r}function fe(e,t){if(!(t<=0)){for(let n of e.plots)n.crop!==`none`&&n.left>0&&(n.left=Math.max(0,n.left-t));e.bakeLeft>0&&(e.bakeLeft=Math.max(0,e.bakeLeft-t),e.bakeLeft===0&&(e.bakeDone=!0))}}function pe(e,t){let n=e.plots.findIndex(e=>e.crop===`none`);if(n<0)return{...e,lines:[`Every plot is already sown.`]};let r=e.plots.map(e=>({...e})),i=t===`wheat`?k:A;r[n]={crop:t,left:i,full:i};let a=t===`wheat`?`Wheat`:`Berries`;return{...e,plots:r,lines:[`${a} is in the ground. It needs a short while.`]}}function me(e){let t=e.wheat,n=e.berry,r=0,i=!1,a=e.plots.map(a=>a.crop===`none`||a.left>0?{...a}:t+n+e.loaf>=16?(i=!0,{...a}):(a.crop===`wheat`?t+=1:n+=1,r+=1,c()));if(r===0&&i)return{...e,lines:[`The barn holds 16. Make room before you pick.`]};if(r===0)return{...e,lines:[`Nothing is ripe. Wheat and berries need a short while.`]};let o=`Barn ${t+n+e.loaf} of 16.`;return{...e,wheat:t,berry:n,plots:a,lines:[`You pick ${r}. ${o}`]}}function he(e,t){if(e[t])return{...e,lines:[`The ${j[t].name} is already up.`]};let n=j[t];if(e.shells<n.shells||e.wood<n.wood||e.stone<n.stone){let t=[`${n.shells} shells`];return n.wood>0&&t.push(`${n.wood} wood`),n.stone>0&&t.push(`${n.stone} stone`),{...e,lines:[`The ${n.name} wants ${t.join(` and `)}.`]}}let r={...e,shells:e.shells-n.shells,wood:e.wood-n.wood,stone:e.stone-n.stone,[t]:!0};return r.lines=t===`houseA`||t===`houseB`?[`A house stands. Two people move into the square.`]:t===`market`?[`The market opens. A clerk keeps the square.`]:[`The bakery oven is lit. Two wheat become a loaf.`],r}function ge(e){return e.bakery?e.bakeDone?{...e,lines:[`A loaf is waiting in the oven.`]}:e.bakeLeft>0?{...e,lines:[`The oven is working.`]}:e.wheat<2?{...e,lines:[`The oven wants 2 wheat.`]}:{...e,wheat:e.wheat-2,bakeLeft:te,lines:[`Two wheat go into the oven.`]}:{...e,lines:[`Raise the bakery first.`]}}function _e(e){return e.bakeDone?ie(e)>=16?{...e,lines:[`The barn holds 16. Make room before you take the loaf.`]}:{...e,loaf:e.loaf+1,bakeDone:!1,lines:[`A loaf comes out. Barn ${ie(e)+1} of 16.`]}:{...e,lines:e.bakeLeft>0?[`The oven is working.`]:[`The oven is cold.`]}}function ve(e,t){let n=y[t];if(t===`raft`&&e.hasRaft)return{...e,lines:[`The boat is already at the dock.`]};if(t===`catcher`&&e.hasCatcher)return{...e,lines:[`The catcher is already by camp.`]};if(t===`rack`&&e.hasRack)return{...e,lines:[`The rack is already by the fire.`]};if(t===`sail`&&e.hasSail)return{...e,lines:[`The sail is already laced.`]};if(t===`woodminion`&&e.hasWoodMinion)return{...e,lines:[`A wood collector is already walking.`]};if(t===`rockminion`&&e.hasRockMinion)return{...e,lines:[`A rock collector is already walking.`]};if(t===`vineminion`&&e.hasVineMinion)return{...e,lines:[`A vine collector is already walking.`]};if((t===`keel`||t===`lungs`||t===`quiver`)&&T(e)!==t)return{...e,lines:[`The merchant is not selling that yet.`]};if(e.shells<n.cost)return{...e,lines:[`Need ${n.cost-e.shells} more shells. Sell finds to the buyer.`]};let r={...e,shells:e.shells-n.cost};return t===`raft`?(r.hasRaft=!0,r.lines=[`The boat is yours. A dock waits on the south shore.`]):t===`catcher`?(r.hasCatcher=!0,r.lines=[`A catcher will sit by camp. Rain fills it.`]):t===`rack`?(r.hasRack=!0,e.errand===`rack`?(r.errand=`none`,r.meals+=1,r.lines=[`The rack is up. Pim pays a meal.`]):r.lines=[`A drying rack will stand by the fire.`]):t===`sail`?(r.hasSail=!0,r.lines=[`A palm-frond sail. It wants a calm morning.`]):t===`woodminion`?(r.hasWoodMinion=!0,r.lines=[`A collector takes the axe and walks to the palms.`]):t===`rockminion`?(r.hasRockMinion=!0,r.lines=[`A collector takes the knife and worries the rocks.`]):t===`keel`?(r.hasKeel=!0,r.lines=[`The boat sits lower and runs quicker.`]):t===`lungs`?(r.hasLungs=!0,r.lines=[`A deeper breath. The sea is slower to pull you under.`]):t===`quiver`?(r.hasQuiver=!0,r.bullets+=1,r.lines=[`A spare spear rides on the belt.`]):(r.hasVineMinion=!0,r.lines=[`A collector walks off to pull vine.`]),r}function ye(e,t,n=1){let r={...e};return t===`wood`&&(r.wood+=n),t===`stone`&&(r.stone+=n),t===`fiber`&&(r.fiber+=n),t===`meal`&&(r.meals+=n,r.thirst=g(r.thirst+28*n,0,100)),t===`raw`&&(r.raw+=n),t===`sap`&&(r.sap+=n,r.seenSap=!0),t===`cinder`&&(r.cinder+=n,r.seenCinder=!0),t===`pearl`&&(r.pearl+=n,r.seenPearl=!0),t===`amber`&&(r.amber+=n,r.seenAmber=!0),r.lines=[`Picked up ${t===`raw`?`${n} lb of raw meat`:t===`fiber`?`vine`:t===`meal`?`a coconut. Thirst eases`:t===`sap`?`glow sap. The mine pays 3 shells`:t===`cinder`?`cinder. The mine pays 5 shells`:t===`pearl`?`a pearl. The mine pays 8 shells`:t===`amber`?`amber. It can bait a dinosaur`:t}.`],r}function be(e,t,n=`tree`){if((t===`palm`||t===`tree`)&&!e.hasAxe)return{...e,lines:[t===`palm`?`Only an axe can chop wood.`:`Only an axe can chop the ${n}.`]};let r={...e};if(t===`palm`)r.wood+=3,r.fronds+=1,r.hunger=Math.max(0,r.hunger-6),r.lines=[`The axe fells the palm. 3 wood and a frond.`];else if(t===`tree`){let e=n===`giant tree`?6:n===`dead tree`?2:3,t=n===`giant tree`?2:+(n===`canopy`||n===`flowering tree`);r.wood+=e,r.fronds+=t,r.hunger=Math.max(0,r.hunger-6),r.lines=[t>0?`The axe fells the ${n}. ${e} wood and ${t===1?`a frond`:`${t} fronds`}.`:`The axe fells the ${n}. ${e} wood.`]}else if(t===`log`)r.wood+=2,r.hunger=Math.max(0,r.hunger-3),r.lines=[`You lift the log. 2 wood.`];else if(t===`rocks`){let t=e.hasKnife?2:1;r.stone+=t,r.hunger=Math.max(0,r.hunger-6),r.lines=[e.hasKnife?`The knife pries up ${t} stone.`:`You pry up ${t} stone.`]}else if(t===`plant`){let e=n===`fern`?1:2;r.fiber+=e,r.hunger=Math.max(0,r.hunger-4),r.lines=[`You pull the ${n}. ${e} vine.`]}else r.fiber+=2,r.hunger=Math.max(0,r.hunger-4),!r.hasWire&&r.hasKnife?(r.hasWire=!0,r.lines=[`The knife cuts wire from the vine. 2 vine.`]):r.lines=[`Two lengths of vine come free.`];return r.hunger===0&&(r.health=g(r.health-6,0,100)),_(r)}function xe(e){return{...e,phase:`forage`,nodes:{...s}}}function Se(e,r){if(t.has(r)||r===`charm`&&e.hasCharm)return!1;let i=n[r];return i.once&&e[i.once]||i.need&&!e[i.need]||i.also&&!e[i.also]?!1:e.wood>=i.wood&&e.stone>=i.stone&&e.fiber>=i.fiber&&e.fronds>=(i.fronds??0)&&e.sap>=(i.sap??0)&&e.cinder>=(i.cinder??0)&&e.pearl>=(i.pearl??0)&&e.amber>=(i.amber??0)}function Ce(e,i){if(t.has(i))return{...e,lines:[`The mine sells that. Sell finds to the buyer first.`]};if(!Se(e,i))return{...e,lines:[Ie(e,i)]};let a=n[i],o={...e,wood:e.wood-a.wood,stone:e.stone-a.stone,fiber:e.fiber-a.fiber,fronds:e.fronds-(a.fronds??0),sap:e.sap-(a.sap??0),cinder:e.cinder-(a.cinder??0),pearl:e.pearl-(a.pearl??0),amber:e.amber-(a.amber??0),lines:[r[i]]};return i===`knife`&&(o.hasKnife=!0),i===`axe`&&(o.hasAxe=!0),i===`spear`&&(o.bullets+=1),i===`fire`&&(o.hasFire=!0),i===`shelter`&&(o.hasShelter=!0),i===`raft`&&(o.hasRaft=!0),i===`catcher`&&(o.hasCatcher=!0),i===`rack`&&(o.hasRack=!0,e.errand===`rack`&&(o.errand=`none`,o.meals+=1,o.lines=[`The rack is up. Pim pays a meal.`])),i===`sail`&&(o.hasSail=!0),i===`woodminion`&&(o.hasWoodMinion=!0),i===`rockminion`&&(o.hasRockMinion=!0),i===`vineminion`&&(o.hasVineMinion=!0),i===`salve`&&(o.health=g(o.health+24,0,100)),i===`embers`&&(o.bullets+=2),i===`charm`&&(o.hasCharm=!0),i===`bait`&&(o.baits+=1),o}function we(e,t){if(t===`palm`&&!e.hasAxe)return{...e,lines:[`Only an axe can chop wood.`]};if(e.nodes[t])return e;let n={...e,nodes:{...e.nodes,[t]:!0}};t===`palm`&&(n.wood+=3,n.fronds+=1),t===`rocks`&&(n.stone+=e.hasKnife?2:1),t===`vines`&&(n.fiber+=2,!e.hasWire&&e.hasKnife&&(n.hasWire=!0)),t===`nuts`&&(n.meals+=1,n.thirst=g(n.thirst+28,0,100));let r=t===`nuts`?4:t===`vines`?6:8;return n.hunger=Math.max(0,n.hunger-r),n.hunger===0&&(n.health=g(n.health-6,0,100)),t===`palm`&&(n.lines=[`The axe fells the palm. 3 wood.`]),t===`rocks`&&(n.lines=[`You pry up ${e.hasKnife?2:1} stone.`]),t===`vines`&&(n.lines=[n.hasWire&&!e.hasWire?`The knife cuts wire from the vine. 2 vine.`:`Two lengths of vine come free.`]),t===`nuts`&&(n.lines=[`A coconut. That is a meal, and thirst eases.`]),_(n)}function Te(e,t=Math.random){if(e.wreckDay===e.day)return{...e,lines:[`The shallows are picked clean today.`]};let n={...e,wreckDay:e.day,wood:e.wood+1,stone:e.stone+1,fiber:e.fiber+1,lines:[e.hasHandset?`You haul wood, stone, and vine off the tail.`:`A handset comes off the tail, with wood, stone, and vine.`]};return e.hasHandset||(n.hasHandset=!0),t()<.25&&(n.health=g(n.health-8,0,100),n.lines=[`Metal bites your hand. You still pull scrap free.`]),_(n)}function Ee(e){if(!e.hasFire)return{...e,lines:[`Raw meat will not cook until you build a fire.`]};if(e.raw<10)return{...e,lines:[`Raw ${e.raw} lb. A cooked meal needs 10 lb.`]};let t=e.raw-10,n=e.meals+1;return{...e,raw:t,rawAge:t===0?0:e.rawAge,meals:n,lines:[`Cooked 10 lb into a meal. Raw ${t} lb. Meals ${n}.`]}}function M(e){if(!e.hasRack)return{...e,lines:[`Build a drying rack at camp.`]};if(e.raw<10)return{...e,lines:[`Raw ${e.raw} lb. The rack needs 10 lb.`]};let t=e.raw-10,n=e.meals+1;return{...e,raw:t,rawAge:t===0?0:e.rawAge,meals:n,lines:[`Smoked 10 lb into a meal that keeps. Raw ${t} lb. Meals ${n}.`]}}function De(e){return e.hasCatcher?e.salted?{...e,lines:[`The catcher is salted. Rinse it.`]}:e.catcher<=0?{...e,lines:[`The catcher is dry. Rain will fill it.`]}:{...e,catcher:e.catcher-1,thirst:g(e.thirst+35,0,100),lines:[`You drink. The catcher holds ${e.catcher-1}.`]}:{...e,lines:[`Build a rain catcher first.`]}}function Oe(e){return e.salted?{...e,salted:!1,catcher:0,lines:[`You rinse the salt out. The next rain will fill it.`]}:{...e,lines:[`The catcher is not salted.`]}}function ke(e){if(e.hasSignal)return{...e,lines:[`The radio is already fitted.`]};if(!e.hasFire)return{...e,lines:[`Light the campfire before you fit the radio.`]};let t=[];return e.hasHandset||t.push(`a handset`),e.hasBattery||t.push(`a battery`),e.hasWire||t.push(`wire`),t.length>0?{...e,lines:[`The radio still needs ${t.join(`, `)}.`]}:{...e,hasSignal:!0,lines:[`Handset, battery, and wire. The radio crackles.`]}}function N(e){return e.errand===`canteen`?{...e,errand:`none`,meals:e.meals+1,thirst:g(e.thirst+20,0,100),lines:[`Nia's canteen. She pays you a meal.`]}:e}function Ae(e){return e.errand===`boar`?e.hasBattery?{...e,errand:`none`,bullets:e.bullets+1,lines:[`Sol pays a spear head you did not have to craft.`]}:{...e,errand:`none`,hasBattery:!0,lines:[`Sol pays a fitting. It stands in for the battery.`]}:e}function P(e){return e.meals<=0?{...e,lines:[`No cooked meal. Cook 10 lb of raw at the fire.`]}:{...e,meals:e.meals-1,hunger:g(e.hunger+40,0,100),thirst:g(e.thirst+8,0,100),health:g(e.health+6,0,100),lines:[`You eat a cooked meal. Hunger rises.`]}}function je(e){return e.hasRaft?e.hasSail?e.sea===`flat`?{...e,phase:`win`,endTitle:`Open water`,lines:[`The raft clears the reef.`,`The island drops behind you.`]}:_({...e,hasRaft:!1,health:g(e.health-18,0,100),lines:[`The reef is breaking. You wash back up and the lashings split.`]}):{...e,lines:[`The logs need a palm-frond sail.`]}:{...e,lines:[`Lash a raft before you sail.`]}}function Me(e,t){return e===`canteen`?t?`Nia is still waiting on the canteen.`:`Nia lost a canteen by the tail.`:e===`boar`?t?`Sol is still waiting on that boar.`:`Sol wants a boar before dark.`:e===`rack`?t?`Pim is still waiting on the rack.`:`Pim will not sleep until the rack is built.`:``}function Ne(e,t){let n=[`canteen`,`boar`];return e.hasRack||n.push(`rack`),n[Math.min(n.length-1,Math.floor(t()*n.length))]??`canteen`}function Pe(e,t,n=Math.random){let r={...e,lines:[],endTitle:``},i=!1,a=``;r.raw>0&&(r.rawAge+=1,r.rawAge>=2&&(r.raw=0,r.rawAge=0,i=!0)),r.meals>0?(--r.meals,r.hunger=g(r.hunger+15,0,100),a=`The camp shares a meal.`):r.raw>=10?(r.raw-=10,r.rawAge=r.raw===0?0:r.rawAge,r.hunger=g(r.hunger+8,0,100),r.health=g(r.health-8,0,100),a=`You choke down raw meat.`):(r.hunger=Math.max(0,r.hunger-30),r.health=g(r.health-16,0,100),a=`No food. Hunger sets in.`),r.hasCatcher&&!r.salted&&r.catcher>0?(--r.catcher,r.thirst=g(r.thirst+30,0,100)):(r.thirst=Math.max(0,r.thirst-22),r.thirst===0&&(r.health=g(r.health-14,0,100))),r.hasFire||(r.health=g(r.health-12,0,100));let o=r.hasShelter,s=o?1:n();!o&&s<.5?r.health=g(r.health-10,0,100):o&&(r.health=g(r.health+10,0,100)),r.sea=n()<.4?`rough`:`flat`;let c=r.errand!==`none`;c||(r.errand=Ne(r,n));let l=r.bounty!==`none`;l||(r.bounty=S(n));let u=r.sea===`flat`?`Sea flat.`:`Reef breaking.`,d=Me(r.errand,c);r.day+=1;let f=i?`Spoiled.`:``,p=`Day ${r.day}. ${u} ${f} ${d}`.replace(/ +/g,` `).trim(),m=r.bounty===`none`?``:l?`The buyer still wants ${x[r.bounty].name}.`:`The buyer wants ${x[r.bounty].name}.`;return r.lines=[p,`${t} ${a}`.trim(),m].filter(e=>e.length>0).slice(0,3),r.hunger<=0?(r.phase=`lose`,r.endTitle=`You starve`,r):r.thirst<=0?(r.phase=`lose`,r.endTitle=`You dry out`,r):r.health<=0?(r.phase=`lose`,r.endTitle=`The island takes you`,r):r.hasSignal&&r.hasFire&&(n()<.45||r.day>=6)?(r.phase=`win`,r.endTitle=`The search plane`,r.lines=[`A plane circles the smoke.`,...r.lines].slice(0,3),r):(r.phase=`world`,r)}function Fe(e){return e===`hasFire`?`a campfire`:e===`hasKnife`?`a knife`:e===`hasAxe`?`an axe`:e===`hasShelter`?`a shelter`:`more work`}function Ie(e,t){let r=n[t],i=o(u()).concat(a).find(e=>e.id===t)?.name??`That`;if(t===`charm`&&e.hasCharm)return`The charm already hangs at your chest.`;if(r.once&&e[r.once])return`Already made: ${i}.`;let s=[];if(r.need&&!e[r.need]&&s.push(Fe(r.need)),r.also&&!e[r.also]&&s.push(Fe(r.also)),s.length>0)return`Need ${s.join(` and `)} first.`;let c=[];return e.wood<r.wood&&c.push(`${r.wood-e.wood} more wood`),e.stone<r.stone&&c.push(`${r.stone-e.stone} more stone`),e.fiber<r.fiber&&c.push(`${r.fiber-e.fiber} more vine`),e.fronds<(r.fronds??0)&&c.push(`${(r.fronds??0)-e.fronds} more fronds`),e.sap<(r.sap??0)&&c.push(`${(r.sap??0)-e.sap} more sap`),e.cinder<(r.cinder??0)&&c.push(`${(r.cinder??0)-e.cinder} more cinder`),e.pearl<(r.pearl??0)&&c.push(`${(r.pearl??0)-e.pearl} more pearl`),e.amber<(r.amber??0)&&c.push(`${(r.amber??0)-e.amber} more amber`),c.length>0?`Need ${c.join(`, `)}.`:`You cannot make ${i} yet.`}function Le(e,t){return t<=0||e<.55?`rain`:e<.83?`hurricane`:`tsunami`}function Re(e){return!e.hasHandset||e.hasShelter?!1:(e.hasHandset=!1,e.hasSignal=!1,!0)}function ze(e,t,n,r=!1){let i={...e};if(r)return t===`tsunami`?(i.tsunamiSeen=!0,i.hasCatcher&&(i.catcher=0,i.salted=!0),i.lines=[e.hasCatcher?`The cave holds. The wave salts the catcher.`:`The cave holds against the wave.`],i):(i.lines=[t===`rain`?`Rain outside. The cave stays dry.`:`The hurricane stays outside the cave.`],i);if(t===`tsunami`){i.tsunamiSeen=!0,i.hasCatcher&&(i.catcher=0,i.salted=!0);let t=i.salted&&e.hasCatcher;if(!n||e.hasShelter)return i.lines=[t?`Tsunami misses you. The wave salts the catcher.`:`Tsunami misses. You are inland.`],i;i.health=g(i.health-14,0,100);let r=Re(i);return i.lines=[t?`Tsunami on the beach. The catcher is salted.`:r?`Tsunami on the beach. The handset is soaked.`:`Tsunami on the beach. Health -14.`],_(i)}if(t===`rain`){if(e.hasShelter)return i.lines=[`Rain falls. The shelter holds.`],i;i.health=g(i.health-6,0,100),i.lines=[Re(i)?`Rain soaks you and the handset. Health -6.`:`Rain soaks you. Health -6.`]}else e.hasShelter?(i.health=g(i.health-2,0,100),i.lines=[`Hurricane. Shelter holds. Health -2.`]):(i.health=g(i.health-12,0,100),i.lines=[Re(i)?`Hurricane soaks the handset. Health -12.`:`Hurricane in the open. Health -12.`]);return _(i)}var Be=`saltwake-racer`,Ve=`castaway-racer`;function He(){let e=document.querySelector(`#board-scrim`),t=document.querySelector(`#board-title`),n=document.querySelector(`#board-clock`),r=document.querySelector(`#board-note`),i=document.querySelector(`#board-list`),a=document.querySelector(`#board-form`),o=document.querySelector(`#board-name`),s=document.querySelector(`#board-close`);if(!e||!t||!n||!r||!i||!a||!o||!s)throw Error(`Castaway is missing its leaderboard.`);let c=e,l=n,u=r,f=i,p=a,m=o,h=s,g=null,_=!1,v=localStorage.getItem(Be)??localStorage.getItem(Ve);v&&(m.value=v);function y(e,t){if(f.replaceChildren(),!e){u.textContent=t;return}e.error?u.textContent=e.error:e.sample?u.textContent=`Saved on this computer only.`:u.textContent=`Public times, fastest first.`;let n=e.rows??[];if(n.length===0){let e=document.createElement(`li`);e.textContent=`No finishes yet.`,f.append(e)}else for(let e of n){let t=document.createElement(`li`),n=e.route===`plane`?`plane`:`raft`;t.textContent=`${e.name}  ${d(Number(e.ms))}  ${n}`,f.append(t)}}async function b(){u.textContent=`Reading the board...`;try{let e=await fetch(`/api/board`),t=await e.json();if(!e.ok){y(null,t.error??`The board did not answer.`);return}y(t,`The board did not answer.`)}catch{y(null,`The board did not answer.`)}}function x(){c.hidden=!1;let e=g!==null;p.hidden=!e,l.textContent=e&&g?`Your time ${d(g.ms)}`:``,e&&m.focus(),b()}return p.addEventListener(`submit`,e=>{if(e.preventDefault(),!g||_)return;let t=g;_=!0,fetch(`/api/board`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({name:m.value,ms:t.ms,route:t.route})}).then(async e=>{let t=await e.json();if(!e.ok){y(null,t.error??`The board did not answer.`);return}t.saved&&localStorage.setItem(Be,m.value.trim()),y(t,`The board did not answer.`);let n=t.sample?` Saved on this computer only.`:``;t.improved?u.textContent=`Posted.${n}`:t.reason===`slower`?u.textContent=`A faster time for that name stays up.${n}`:u.textContent=`That finish is already on the board.${n}`}).catch(()=>{y(null,`The board did not answer.`)}).finally(()=>{_=!1})}),h.addEventListener(`click`,()=>{c.hidden=!0}),c.addEventListener(`pointerdown`,e=>{e.target===c&&(c.hidden=!0)}),{open:x,close(){c.hidden=!0},isOpen:()=>!c.hidden,offer(e){g={ms:Math.floor(e.ms),route:e.route},x()},clearFinish(){g=null,p.hidden=!0,l.textContent=``}}}var F={sky:`#6ec4e0`,skyLight:`#b7e6f6`,water:`#1786b4`,waterDeep:`#1278a4`,grass:`#3f7a30`,grassDark:`#2f6a24`,dirt:`#e2c792`,dirtDark:`#8a5a32`,dark:`#3a2414`,cream:`#f3e2bc`,creamDark:`#e2c792`,leaf:`#2f6a24`,wood:`#6b3f1f`},Ue=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]],We={A:[`01110`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],B:[`11110`,`10001`,`10001`,`11110`,`10001`,`10001`,`11110`],C:[`01111`,`10000`,`10000`,`10000`,`10000`,`10000`,`01111`],D:[`11110`,`10001`,`10001`,`10001`,`10001`,`10001`,`11110`],E:[`11111`,`10000`,`10000`,`11110`,`10000`,`10000`,`11111`],F:[`11111`,`10000`,`10000`,`11110`,`10000`,`10000`,`10000`],G:[`01110`,`10001`,`10000`,`10111`,`10001`,`10001`,`01110`],H:[`10001`,`10001`,`10001`,`11111`,`10001`,`10001`,`10001`],I:[`11111`,`00100`,`00100`,`00100`,`00100`,`00100`,`11111`],J:[`00111`,`00010`,`00010`,`00010`,`10010`,`10010`,`01100`],K:[`10001`,`10010`,`10100`,`11000`,`10100`,`10010`,`10001`],L:[`10000`,`10000`,`10000`,`10000`,`10000`,`10000`,`11111`],M:[`10001`,`11011`,`10101`,`10101`,`10001`,`10001`,`10001`],N:[`10001`,`11001`,`10101`,`10011`,`10001`,`10001`,`10001`],O:[`01110`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`],P:[`11110`,`10001`,`10001`,`11110`,`10000`,`10000`,`10000`],Q:[`01110`,`10001`,`10001`,`10001`,`10101`,`10010`,`01101`],R:[`11110`,`10001`,`10001`,`11110`,`10100`,`10010`,`10001`],S:[`01111`,`10000`,`10000`,`01110`,`00001`,`00001`,`11110`],T:[`11111`,`00100`,`00100`,`00100`,`00100`,`00100`,`00100`],U:[`10001`,`10001`,`10001`,`10001`,`10001`,`10001`,`01110`],V:[`10001`,`10001`,`10001`,`10001`,`10001`,`01010`,`00100`],W:[`10001`,`10001`,`10001`,`10101`,`10101`,`10101`,`01010`],X:[`10001`,`10001`,`01010`,`00100`,`01010`,`10001`,`10001`],Y:[`10001`,`10001`,`01010`,`00100`,`00100`,`00100`,`00100`],Z:[`11111`,`00001`,`00010`,`00100`,`01000`,`10000`,`11111`],0:[`01110`,`10001`,`10011`,`10101`,`11001`,`10001`,`01110`],1:[`00100`,`01100`,`00100`,`00100`,`00100`,`00100`,`01110`],2:[`01110`,`10001`,`00001`,`00010`,`00100`,`01000`,`11111`],3:[`11110`,`00001`,`00001`,`01110`,`00001`,`00001`,`11110`],4:[`10010`,`10010`,`10010`,`11111`,`00010`,`00010`,`00010`],5:[`11111`,`10000`,`11110`,`00001`,`00001`,`10001`,`01110`],6:[`01110`,`10000`,`10000`,`11110`,`10001`,`10001`,`01110`],7:[`11111`,`00001`,`00010`,`00100`,`01000`,`01000`,`01000`],8:[`01110`,`10001`,`10001`,`01110`,`10001`,`10001`,`01110`],9:[`01110`,`10001`,`10001`,`01111`,`00001`,`00001`,`01110`],".":[`00000`,`00000`,`00000`,`00000`,`00000`,`01100`,`01100`],",":[`00000`,`00000`,`00000`,`00000`,`00100`,`00100`,`01000`],"'":[`00100`,`00100`,`01000`,`00000`,`00000`,`00000`,`00000`],":":[`00000`,`01100`,`01100`,`00000`,`01100`,`01100`,`00000`],"-":[`00000`,`00000`,`00000`,`11111`,`00000`,`00000`,`00000`],"!":[`00100`,`00100`,`00100`,`00100`,`00100`,`00000`,`00100`]," ":[`00000`,`00000`,`00000`,`00000`,`00000`,`00000`,`00000`]};function Ge(e,t,n){for(let r of e)if(t>=r.x&&n>=r.y&&t<r.x+r.w&&n<r.y+r.h)return r;return null}function Ke(e,t,n,r,i,a=1){e.fillStyle=i;let o=n;for(let n of t.toUpperCase()){let t=We[n]??We[` `];for(let n=0;n<t.length;n+=1){let i=t[n]??``;for(let t=0;t<i.length;t+=1)i[t]===`1`&&e.fillRect(o+t*a,r+n*a,a,a)}o+=6*a}}function qe(e,t,n,r,i=1){let a=t.length*6*i;Ke(e,t,Math.round((320-a)/2),n,r,i)}var Je={A:[`010`,`101`,`111`,`101`,`101`],B:[`110`,`101`,`110`,`101`,`110`],C:[`011`,`100`,`100`,`100`,`011`],D:[`110`,`101`,`101`,`101`,`110`],E:[`111`,`100`,`110`,`100`,`111`],F:[`111`,`100`,`110`,`100`,`100`],G:[`011`,`100`,`101`,`101`,`011`],H:[`101`,`101`,`111`,`101`,`101`],I:[`111`,`010`,`010`,`010`,`111`],J:[`001`,`001`,`001`,`101`,`010`],K:[`101`,`110`,`100`,`110`,`101`],L:[`100`,`100`,`100`,`100`,`111`],M:[`101`,`111`,`101`,`101`,`101`],N:[`110`,`101`,`101`,`101`,`101`],O:[`010`,`101`,`101`,`101`,`010`],P:[`110`,`101`,`110`,`100`,`100`],Q:[`010`,`101`,`101`,`011`,`001`],R:[`110`,`101`,`110`,`101`,`101`],S:[`011`,`100`,`010`,`001`,`110`],T:[`111`,`010`,`010`,`010`,`010`],U:[`101`,`101`,`101`,`101`,`010`],V:[`101`,`101`,`101`,`010`,`010`],W:[`101`,`101`,`111`,`111`,`101`],X:[`101`,`101`,`010`,`101`,`101`],Y:[`101`,`101`,`010`,`010`,`010`],Z:[`111`,`001`,`010`,`100`,`111`],0:[`111`,`101`,`101`,`101`,`111`],1:[`010`,`110`,`010`,`010`,`111`],2:[`110`,`001`,`010`,`100`,`111`],3:[`110`,`001`,`010`,`001`,`110`],4:[`101`,`101`,`111`,`001`,`001`],5:[`111`,`100`,`110`,`001`,`110`],6:[`011`,`100`,`110`,`101`,`010`],7:[`111`,`001`,`010`,`010`,`010`],8:[`010`,`101`,`010`,`101`,`010`],9:[`010`,`101`,`011`,`001`,`110`],".":[`000`,`000`,`000`,`000`,`010`],",":[`000`,`000`,`000`,`010`,`100`],"'":[`010`,`010`,`000`,`000`,`000`],":":[`000`,`010`,`000`,`010`,`000`],"-":[`000`,`000`,`111`,`000`,`000`],"!":[`010`,`010`,`010`,`000`,`010`],"?":[`110`,`001`,`010`,`000`,`010`]," ":[`000`,`000`,`000`,`000`,`000`]};function Ye(e){return e.length*4}function Xe(e,t,n,r,i){e.fillStyle=i;let a=n;for(let n of t.toUpperCase()){let t=Je[n]??Je[` `];for(let n=0;n<t.length;n+=1){let i=t[n]??``;for(let t=0;t<i.length;t+=1)i[t]===`1`&&e.fillRect(a+t,r+n,1,1)}a+=4}}function Ze(e,t,n,r){Xe(e,t,Math.round((320-Ye(t))/2),n,r)}function Qe(e,t,n){let r=t.enabled?n?F.creamDark:F.cream:F.dirt;e.fillStyle=F.dark,e.fillRect(t.x,t.y,t.w,t.h),e.fillStyle=r,e.fillRect(t.x+1,t.y+1,t.w-2,t.h-2);let i=t.label.length*6,a=t.x+Math.round((t.w-i)/2),o=t.y+Math.round((t.h-7)/2);Ke(e,t.label,a,o,t.enabled?F.dark:F.dirtDark)}var $e=new Map;function et(e,t){let n=$e.get(t);n||(n=tt(t),$e.set(t,n)),e.drawImage(n,0,0)}function tt(e){let t=document.createElement(`canvas`);t.width=320,t.height=e;let n=t.getContext(`2d`);if(!n)return t;let r=Math.round(e*.7),i=r-14,a=n.createImageData(320,i);for(let e=0;e<i;e+=1)for(let t=0;t<320;t+=1){let n=(Ue[e&3]?.[t&3]??0)/16>e/i?[183,230,246]:[110,196,224],r=(e*320+t)*4;a.data[r]=n[0]??0,a.data[r+1]=n[1]??0,a.data[r+2]=n[2]??0,a.data[r+3]=255}n.putImageData(a,0,0);let o=n.createImageData(320,r-i);for(let e=0;e<r-i;e+=1)for(let t=0;t<320;t+=1){let n=Math.imul(t,17)+Math.imul(e,31)&3?[18,120,164]:[23,134,180],r=(e*320+t)*4;o.data[r]=n[0]??0,o.data[r+1]=n[1]??0,o.data[r+2]=n[2]??0,o.data[r+3]=255}n.putImageData(o,0,i);let s=n.createImageData(320,e-r);for(let t=0;t<e-r;t+=1)for(let e=0;e<320;e+=1){let n=(Math.imul(e,374761393)+Math.imul(t,668265263)>>>0)%17,r=t<10?n<5?[237,214,168]:[216,188,134]:n<4?[47,106,36]:n<9?[63,122,48]:[226,199,146],i=(t*320+e)*4;s.data[i]=r[0]??0,s.data[i+1]=r[1]??0,s.data[i+2]=r[2]??0,s.data[i+3]=255}return n.putImageData(s,0,r),n.fillStyle=F.cream,n.fillRect(248,12,14,10),n.fillStyle=F.skyLight,n.fillRect(250,14,10,6),nt(n,36,i),rt(n,78,r),rt(n,286,r),it(n,118,r),at(n,214,r),ot(n,186,r),st(n,168,r),t}function nt(e,t,n){e.fillStyle=F.grassDark,e.fillRect(t,n-6,22,6),e.fillStyle=F.dirt,e.fillRect(t+2,n-8,16,3),e.fillStyle=F.grass,e.fillRect(t+8,n-16,3,8),e.fillRect(t+5,n-14,9,3)}function rt(e,t,n){e.fillStyle=F.wood,e.fillRect(t,n-28,3,28),e.fillStyle=F.grass,e.fillRect(t-8,n-32,8,3),e.fillRect(t+3,n-32,8,3),e.fillRect(t-2,n-36,7,4),e.fillStyle=F.grassDark,e.fillRect(t-6,n-30,5,2),e.fillRect(t+4,n-30,5,2)}function it(e,t,n){e.fillStyle=F.wood,e.fillRect(t,n-18,28,16),e.fillStyle=`#c4a070`,e.fillRect(t+2,n-16,24,12),e.fillStyle=F.dark,e.fillRect(t+11,n-12,6,10),e.fillStyle=F.grassDark,e.fillRect(t-2,n-24,32,4),e.fillRect(t+2,n-28,24,5),e.fillRect(t+6,n-31,16,4)}function at(e,t,n){e.fillStyle=F.wood,e.fillRect(t,n-8,26,5),e.fillRect(t+2,n-10,20,3),e.fillStyle=F.dark,e.fillRect(t+12,n-22,2,14),e.fillStyle=F.cream,e.fillRect(t+14,n-20,8,6)}function ot(e,t,n){e.fillStyle=F.dark,e.fillRect(t+2,n-30,6,3),e.fillStyle=`#e2c792`,e.fillRect(t+3,n-27,4,4),e.fillStyle=`#2f6a58`,e.fillRect(t+2,n-23,7,8),e.fillStyle=F.dark,e.fillRect(t+2,n-15,2,7),e.fillRect(t+6,n-15,2,7),e.fillRect(t+8,n-26,14,2)}function st(e,t,n){e.fillStyle=F.dirtDark,e.fillRect(t,n-4,10,3),e.fillRect(t+2,n-6,6,2),e.fillStyle=F.dirt,e.fillRect(t+3,n-10,4,5),e.fillStyle=F.cream,e.fillRect(t+4,n-13,2,4)}function ct(e,t){e.fillStyle=F.cream,e.fillRect(0,t,320,200-t),e.fillStyle=F.dark,e.fillRect(0,t,320,1)}function lt(e,t,n,r,i,a){e.fillStyle=F.dark,e.fillRect(t,n,r,5),e.fillStyle=a;let o=Math.round((r-2)*Math.max(0,Math.min(100,i))/100);e.fillRect(t+1,n+1,o,3)}function ut(e,t,n){e.fillStyle=n?`#16324a`:`#102433`,e.fillRect(0,0,320,132);for(let t=0;t<70;t+=2)e.fillStyle=t%4==0?n?`#1d4664`:`#16324a`:n?`#16324a`:`#102433`,e.fillRect(0,t,320,1);if(e.fillStyle=F.waterDeep,e.fillRect(0,70,320,18),e.fillStyle=`#d8bc86`,e.fillRect(0,88,320,44),e.fillStyle=F.grassDark,e.fillRect(0,108,320,24),_t(e,78,112,`#2f6a58`),_t(e,118,116,`#8a5a32`),_t(e,188,116,`#c4a070`),_t(e,226,112,`#1e4a40`),e.fillStyle=F.wood,e.fillRect(146,108,22,6),n){let n=4+Math.round(Math.sin(t*9)*2+Math.sin(t*17));e.fillStyle=`#e09030`,e.fillRect(150,108-n,14,n+4),e.fillStyle=`#fff1c0`,e.fillRect(154,106-n,6,4)}}function dt(e,t){if(e.fillStyle=F.skyLight,e.fillRect(0,0,320,78),e.fillStyle=F.sky,e.fillRect(0,56,320,40),e.fillStyle=F.cream,e.fillRect(24,14,30,6),e.fillRect(168,26,40,6),e.fillStyle=F.water,e.fillRect(0,96,320,50),e.fillStyle=F.waterDeep,e.fillRect(0,120+Math.sin(t*3),320,28),e.fillStyle=`#d8bc86`,e.fillRect(0,148,320,22),e.fillStyle=F.grass,e.fillRect(0,170,320,30),rt(e,36,170),rt(e,286,170),t<3.25){let n=t/3.25,r=-36+n*250,i=18+n*n*68;ht(e,r,i+(t>2.15?Math.sin(t*42)*2:0)),t>2.15&&(e.fillStyle=`#d8dee6`,e.fillRect(r-10,i+6,7,4),e.fillRect(r-18,i+10,6,3),qe(e,`Engine out`,8,F.dark))}else{let n=t-3.25;e.fillStyle=F.cream,e.fillRect(188,112,36,3),e.fillRect(180,116,16,2),n<1.5&&(e.fillStyle=`#d8dee6`,e.fillRect(208,100-n*10,10,6),e.fillRect(198,92-n*14,6,4)),e.fillStyle=F.dirtDark,e.fillRect(214,108,20,6),e.fillRect(228,92,4,18),e.fillStyle=F.cream,e.fillRect(226,94,8,5),e.fillStyle=`#8a9aa3`,e.fillRect(248,156,30,4),e.fillRect(252,152,8,4)}if(t>4.3){let n=Math.min(1,(t-4.3)/1.5);gt(e,206-n*90,164-n*6)}Ke(e,`Castaway`,8,4,F.dark),t>=5.8&&qe(e,`You are stranded.`,150,F.dark)}function ft(e,t){e.fillStyle=F.skyLight,e.fillRect(0,0,320,56),e.fillStyle=F.sky,e.fillRect(0,40,320,22),e.fillStyle=F.cream,e.fillRect(36,20,22,4),e.fillRect(150,18,28,4),e.fillStyle=F.water,e.fillRect(0,62,320,16),e.fillStyle=F.waterDeep,e.fillRect(0,72+Math.sin(t*2)*.5,320,8),e.fillStyle=`#d8bc86`,e.fillRect(0,80,320,12),Ke(e,`Castaway`,8,4,F.dark),rt(e,16,92),e.fillStyle=F.wood,e.fillRect(58,70,40,5),e.fillRect(60,66,36,4),e.fillStyle=F.dirtDark,e.fillRect(74,58,2,12),e.fillStyle=F.cream,e.fillRect(76,58,10,7),gt(e,64,74),Xe(e,`Raft`,68,82,F.dark),e.fillStyle=F.wood,e.fillRect(214,84,18,4);let n=4+Math.round(Math.sin(t*9)*2);e.fillStyle=`#e09030`,e.fillRect(218,84-n,10,n),e.fillStyle=`#fff1c0`,e.fillRect(221,82-n,4,3);let r=t*8%14;e.fillStyle=`#d8dee6`,e.fillRect(222,64-r,4,3),e.fillRect(226,56-r*.5,3,3),ht(e,200+Math.sin(t)*4,14),Xe(e,`Plane`,204,28,F.dark),ct(e,92),qe(e,`How you win`,98,F.dark),qe(e,`Sail on a calm morning.`,112,F.dark),qe(e,`Or fit the radio, then rest.`,124,F.dark),[`Walk over wood, stone, and vine. Palms drop fronds.`,`Only an axe fells a palm. A knife cuts wire.`,`Raft needs logs, a frond sail, and a flat sea.`,`Radio needs a handset, a battery, and wire.`,`Drink, dry meat, and rest. Shelter sheds storms.`].forEach((t,n)=>{Xe(e,t,16,138+n*7,F.dirtDark)})}function pt(e,t){e.fillStyle=F.skyLight,e.fillRect(0,0,320,70),e.fillStyle=F.sky,e.fillRect(0,48,320,28),e.fillStyle=F.water,e.fillRect(0,76,320,28),e.fillStyle=F.waterDeep,e.fillRect(0,96+Math.sin(t*2),320,10),e.fillStyle=`#d8bc86`,e.fillRect(0,106,320,40),e.fillStyle=F.grassDark,e.fillRect(0,146,320,54),rt(e,48,146),e.fillStyle=F.dirtDark,e.fillRect(176,128,14,10),e.fillRect(186,122,16,12),e.fillRect(168,134,12,8),e.fillStyle=F.grass,e.fillRect(236,118,3,28),e.fillRect(232,112,18,3),e.fillRect(248,120,12,3),e.fillStyle=F.wood,e.fillRect(108,124,3,22),e.fillStyle=`#6b8f3a`,e.fillRect(104,118,10,8),e.fillStyle=F.cream,e.fillRect(100,16,22,6)}function mt(e,t,n,r){e.fillStyle=F.skyLight,e.fillRect(0,0,320,52),e.fillStyle=F.sky,e.fillRect(0,40,320,22);let i=Math.sin(n*2)*2;if(e.fillStyle=F.water,e.fillRect(0,62+i,320,40),e.fillStyle=F.waterDeep,e.fillRect(0,86,320,20),e.fillStyle=`#d8bc86`,e.fillRect(0,106,320,40),e.fillStyle=F.dirtDark,e.fillRect(150,96,36,8),e.fillRect(176,78,6,22),e.fillStyle=F.cream,e.fillRect(174,80,12,6),e.fillStyle=`#8a9aa3`,e.fillRect(70,112,34,5),e.fillRect(78,108,10,4),e.fillStyle=`#2f6a58`,e.fillRect(210,100,6,12),e.fillStyle=`#e2c792`,e.fillRect(211,96,4,4),r){let n=Math.min(1,t/6);ht(e,40+n*70,18-n*6)}else e.fillStyle=F.cream,e.fillRect(36,16,18,5)}function ht(e,t,n){e.fillStyle=F.cream,e.fillRect(t,n,28,6),e.fillStyle=F.dirtDark,e.fillRect(t+6,n-3,14,3),e.fillRect(t+22,n-5,3,10),e.fillStyle=F.sky,e.fillRect(t+4,n+2,3,2),e.fillRect(t+9,n+2,3,2),e.fillRect(t+14,n+2,3,2)}function gt(e,t,n){e.fillStyle=F.dark,e.fillRect(t+2,n-16,2,8),e.fillRect(t+6,n-16,2,8),e.fillStyle=`#2f6a58`,e.fillRect(t+1,n-26,8,10),e.fillStyle=`#e2c792`,e.fillRect(t+3,n-30,4,4),e.fillStyle=F.dark,e.fillRect(t+2,n-33,6,3)}function _t(e,t,n,r){e.fillStyle=F.dark,e.fillRect(t+2,n-16,2,6),e.fillRect(t+6,n-16,2,6),e.fillStyle=r,e.fillRect(t+1,n-24,8,8),e.fillStyle=`#e2c792`,e.fillRect(t+3,n-28,4,4),e.fillStyle=F.dark,e.fillRect(t+2,n-31,6,3)}var vt={x:0,z:0,r:22},yt=64,bt=[`jungle`,`volcano`,`reef`,`fossil`,`frost`,`dune`,`bloom`],xt={x0:-16,z0:64,x1:16,z1:94},St=[{id:`start-jungle`,x:-48,z:-36,r:16.4,theme:`jungle`,seed:101},{id:`start-volcano`,x:58,z:18,r:15.6,theme:`volcano`,seed:102},{id:`start-reef`,x:52,z:72,r:16.2,theme:`reef`,seed:103},{id:`start-fossil`,x:-46,z:78,r:17.2,theme:`fossil`,seed:104},{id:`start-frost`,x:-72,z:16,r:16,theme:`frost`,seed:105},{id:`start-dune`,x:20,z:-64,r:15.8,theme:`dune`,seed:106},{id:`start-bloom`,x:-78,z:-58,r:16.2,theme:`bloom`,seed:107}];function Ct(e,t){let n=Math.imul(e,374761393)^Math.imul(t,668265263);return n=Math.imul(n^n>>>13,1274126177),(n^n>>>16)>>>0}function wt(e,t,n){if(Math.hypot(e-vt.x,t-vt.z)<vt.r+n+8)return!0;let r=Math.max(xt.x0,Math.min(e,xt.x1)),i=Math.max(xt.z0,Math.min(t,xt.z1));if(Math.hypot(e-r,t-i)<n+8)return!0;for(let r of St)if(Math.hypot(e-r.x,t-r.z)<r.r+n+6)return!0;return!1}function Tt(e,t){if(e===0&&t===0)return null;let n=Ct(e,t);if(n%100>=76)return null;let r=bt[n%bt.length]??`jungle`,i=(n>>>8)%21-10,a=(n>>>17)%21-10,o=11.4+(n>>>4)%5*.85,s=e*yt+i,c=t*yt+a;return wt(s,c,o)?null:{id:`${e},${t}`,x:s,z:c,r:o,theme:r,seed:n}}function Et(e,t,n){let r=[];for(let i of St)Math.hypot(i.x-e,i.z-t)<=n+i.r&&r.push(i);let i=n+24,a=Math.floor((e-i)/yt),o=Math.floor((e+i)/yt),s=Math.floor((t-i)/yt),c=Math.floor((t+i)/yt);for(let i=a;i<=o;i+=1)for(let a=s;a<=c;a+=1){let o=Tt(i,a);o&&Math.hypot(o.x-e,o.z-t)<=n+o.r&&r.push(o)}return r}function Dt(e,t){if(Math.hypot(e-vt.x,t-vt.z)<=vt.r)return null;let n=null,r=1/0;for(let i of Et(e,t,14)){let a=Math.hypot(e-i.x,t-i.z);a<=i.r&&a<r&&(n=i,r=a)}return n}function Ot(e,t){return Math.hypot(e-vt.x,t-vt.z)<=vt.r||Dt(e,t)!==null}var kt=[`Nia: The tail is still in the shallows.`,`Ren: A knife sticks a boar up close.`,`Sol: Boar take one spear. Serpents take two.`,`Pim: Cook the meat. Raw meat turns the stomach.`,`Nia: Smoke on the beach, and a plane might see us.`,`Sol: The raft needs a knife to lash it.`],At=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`q`,`e`,`r`,`f`];function jt(e,t,n=!1){let r=t===` `?`SPC`:t===`escape`?`ESC`:t.toUpperCase(),i=e.label?`${r} ${e.label}`:r,a=n?Ye(i):i.length*6,o=n?4:6;return{...e,key:t,label:i,w:Math.max(e.w,a+o)}}function Mt(e,t){if(e.length<=1)return Nt(e,t);if(e.length===2){let n=e[0],r=e[1];return!n||!r?Nt(e,t):[{...n,x:12,y:t},{...r,x:308-r.w,y:t}]}let n=e[0],r=e[1],i=e[2];return!n||!r||!i?Nt(e,t):[{...n,x:8,y:t},{...r,x:Math.round((320-r.w)/2),y:t},{...i,x:312-i.w,y:t}]}function Nt(e,t,n=4){let r=e.reduce((e,t)=>e+t.w,0)+n*Math.max(0,e.length-1),i=Math.max(2,Math.round((320-r)/2));return e.map(e=>{let r={...e,x:i,y:t};return i+=e.w+n,r})}function Pt(e,t,n,r=2){let i=n;return e.map(e=>{let n={...e,x:t-e.w,y:i};return i+=e.h+r,n})}function Ft(e,t,n=2){let r=318,i=[];for(let a=e.length-1;a>=0;--a){let o=e[a];o&&(r-=o.w,i.push({...o,x:r,y:t}),r-=n)}return i.reverse()}function I(e,t,n=!0){return{id:e,label:t,x:0,y:0,w:0,h:16,enabled:n}}function It(){return Nt([jt(I(`howback`,`Back`),`h`)],176)}function Lt(){return Nt([jt(I(`resume`,`Resume`),`escape`)],108)}function Rt(e,t=!1){if(e.phase===`crash`){if(e.crash<5.8){let e=jt(I(`skip`,`Skip`),` `);return[{...e,x:318-e.w,y:8}]}return[]}if(e.phase===`brief`){let e=[jt(I(`wake`,`Get up`),`g`)];return t&&e.push(jt(I(`load`,`Load`),`l`)),Mt(e,176)}if(e.phase===`win`||e.phase===`lose`)return Mt([jt(I(`again`,`Again`),`n`)],170);if(e.phase===`beach`){let t=jt({...I(`eat`,`Eat`,e.meals>0),h:14},`m`);return[{...t,x:318-t.w,y:164},...Nt([jt(I(`forage`,`Gather`),`g`),jt(I(`craft`,`Craft`),`c`),jt(I(`hunt`,`Hunt`,e.bullets>0),`j`),jt(I(`fire`,`Camp`),`f`),jt(I(`wreck`,`Wreck`),`v`)],182)]}if(e.phase===`forage`){let t=jt(I(`back`,`Back`),`escape`);return[jt({...I(`palm`,e.nodes.palm?`Cut`:`Palm`,!e.nodes.palm),x:24,y:100},`1`),jt({...I(`rocks`,e.nodes.rocks?`Mined`:`Rock`,!e.nodes.rocks),x:160,y:118},`2`),jt({...I(`vines`,e.nodes.vines?`Cut`:`Vine`,!e.nodes.vines),x:230,y:100},`3`),jt({...I(`nuts`,e.nodes.nuts?`Taken`:`Nut`,!e.nodes.nuts),x:90,y:128},`4`),{...t,x:318-t.w,y:176}]}if(e.phase===`craft`){let t=o(e).map((t,n)=>{let r=jt({...I(`make-${t.id}`,zt(e,t.id)?`Have`:`Make`,Se(e,t.id)),h:10},At[n]??`x`);return{...r,x:318-r.w,y:Wt+n*Gt}});if(e.hasRaft){let e=jt(I(`sail`,`Sail`),`l`);t.push({...e,x:8,y:164})}let n=jt(I(`save`,`Save`),`b`);t.push({...n,x:8,y:e.hasRaft?148:164});let r=jt(I(`back`,`Back`),`c`);return t.push({...r,x:318-r.w,y:176}),t}if(e.phase===`fire`)return Nt([jt(I(`next`,`Talk`),`t`),jt(I(`cook`,`Cook`,e.hasFire&&e.raw>=10),`k`),jt(I(`eat`,`Eat`,e.meals>0),`m`),jt(I(`rest`,`Rest`),`r`),jt(I(`back`,`Back`),`escape`)],182);if(e.phase===`wreck`)return Nt([jt(I(`ask`,`Salvage`,e.wreckDay!==e.day),`v`),jt(I(`back`,`Back`),`escape`)],180,8);let n=jt({...I(`fore`,`Fore`),y:136,h:14},`w`),r=jt({...I(`backwalk`,`Back`),y:136,h:14},`s`);n.x=8,r.x=n.x+n.w+4;let i=jt({...I(`leave`,`Leave`),y:180},`x`),a=jt({...I(`shoot`,`Shoot`),y:180},` `);return i.x=318-i.w,a.x=i.x-a.w-6,[n,r,a,i]}function zt(e,t){return t===`knife`?e.hasKnife:t===`axe`?e.hasAxe:t===`fire`?e.hasFire:t===`shelter`?e.hasShelter:t===`signal`?e.hasSignal:t===`raft`?e.hasRaft:t===`catcher`?e.hasCatcher:t===`rack`?e.hasRack:t===`sail`?e.hasSail:t===`woodminion`?e.hasWoodMinion:t===`rockminion`?e.hasRockMinion:t===`vineminion`?e.hasVineMinion:t===`charm`&&e.hasCharm}var Bt=14,Vt=5,Ht=123,Ut=185,Wt=18,Gt=10;function Kt(e,t,n,r=!0){return jt({id:e,label:t,x:0,y:0,w:0,h:12,enabled:r},n,!0)}function qt(e,t,n=null,r=!1){let i=[];for(let e=0;e<Vt;e+=1)i.push({id:`slot-${e}`,label:``,key:String(e+1),x:Ht+e*15,y:Ut,w:Bt,h:Bt,enabled:!0});let a=Kt(`fore`,`Fore`,`w`),o=Kt(`backwalk`,`Back`,`s`),s=Kt(`craft`,`Craft`,`c`);a.x=2,a.y=186,o.x=a.x+a.w+2,o.y=186,s.x=318-s.w,s.y=186,i.push(a,o,s);let c=Kt(`how`,`How`,`h`);c.x=38,c.y=22,i.push(c);let l=Kt(`pause`,`Pause`,`escape`);l.x=316-l.w,l.y=16,i.push(l);let u=Kt(`save`,`Save`,`b`);u.x=4,u.y=54,i.push(u);let d=Kt(`chart`,`Map`,`0`);d.x=40,d.y=38,i.push(d);let f=[];if(t===`stall`||t===`buyer`||t===`exit`){let e=Kt(`leave`,`Exit`,`x`);e.x=4,e.y=40,i.push(e)}if(t===`stall`&&n===`stall`){let t=[[`buy-raft`,`Raft 20`,`q`,20,!e.hasRaft],[`buy-catcher`,`Catcher 8`,`u`,8,!e.hasCatcher],[`buy-rack`,`Rack 6`,`g`,6,!e.hasRack],[`buy-sail`,`Sail 12`,`l`,12,!e.hasSail],[`buy-woodminion`,`Wood 18`,`i`,18,!e.hasWoodMinion],[`buy-rockminion`,`Rock 18`,`o`,18,!e.hasRockMinion],[`buy-vineminion`,`Vine 16`,`p`,16,!e.hasVineMinion]],n=T(e);n===`keel`&&t.push([`buy-keel`,`Keel 24`,`n`,24,e.shells>=24]),n===`lungs`&&t.push([`buy-lungs`,`Lungs 28`,`n`,28,e.shells>=28]),n===`quiver`&&t.push([`buy-quiver`,`Spear 16`,`n`,16,e.shells>=16]),i.push(...Pt(t.map(([t,n,r,i,a])=>Kt(t,n,r,a&&e.shells>=i)),316,36))}if(t===`buyer`&&n===`buyer`){if(e.bounty!==`none`){let t=x[e.bounty];i.push(...Pt([Kt(`turnin`,`${t.short} ${t.pay}`,`j`,e[t.goods]>=1)],316,36))}let t=[[`sell-wood`,`+1 Wood`,`f`,e.wood>=1],[`sell-stone`,`+1 Stone`,`k`,e.stone>=1],[`sell-fiber`,`+1 Vine`,`r`,e.fiber>=1],[`sell-sap`,`+3 Sap`,`y`,e.sap>=1],[`sell-cinder`,`+5 Cinder`,`m`,e.cinder>=1],[`sell-pearl`,`+8 Pearl`,`t`,e.pearl>=1]],n=oe(e.orders);i.push(...Pt([Kt(`order`,`Slip ${n.total}`,`a`,ue(e))],316,e.bounty===`none`?36:52)),i.push(...Pt(t.map(([e,t,n,r])=>Kt(e,t,n,r)),4,70).map(e=>({...e,x:4})))}return t===`fire`?(e.hasFire&&!e.hasSignal&&e.hasHandset&&e.hasBattery&&e.hasWire&&f.push(Kt(`fit`,`Fit`,`f`)),f.push(Kt(`cook`,`Cook`,`k`,e.hasFire&&e.raw>=10),Kt(`rest`,`Rest`,`r`))):t===`rack`?e.hasRack&&f.push(Kt(`smoke`,`Smoke`,`m`,e.raw>=10)):t===`catcher`&&e.hasCatcher?e.salted?f.push(Kt(`rinse`,`Rinse`,`u`)):f.push(Kt(`drink`,`Drink`,`g`,e.catcher>0)):t===`wreck`?f.push(Kt(`ask`,`Salvage`,`v`,e.wreckDay!==e.day)):t===`raft`||t===`boat`?f.push(Kt(`embark`,t===`boat`?`Land`:`Board`,`q`),Kt(`sail`,`Sail`,`l`)):t===`mount`?f.push(Kt(`embark`,r?`Off`:`Ride`,`q`)):t===`beast`?f.push(Kt(`feed`,`Feed`,`e`,e.baits>0)):t===`field`?f.push(Kt(`sow-wheat`,`Wheat`,`g`),Kt(`sow-berry`,`Berry`,`y`),Kt(`reap`,`Pick`,`p`,e.plots.some(e=>e.crop!==`none`&&e.left<=0))):t===`town`?f.push(Kt(`raise`,`Raise`,`n`)):t===`oven`?f.push(Kt(`bake`,`Bake`,`k`,e.bakery&&e.wheat>=2&&e.bakeLeft<=0&&!e.bakeDone),Kt(`loaf`,`Loaf`,`p`,e.bakeDone)):(t===`stall`||t===`buyer`)&&n!==t?f.push(Kt(`trade`,`Talk`,`e`)):(t===`stall`||t===`buyer`)&&n===t&&f.push(Kt(`vend`,`Close`,`z`)),i.push(...Ft(f,162)),i}function Jt(){return Mt([jt(I(`chart`,`Close`),`0`),jt(I(`chartesc`,`Close`),`escape`)],180)}function Yt(e,t,n,r){if(e.clearRect(0,0,320,200),n.chart){un(e,n.px,n.pz,n.heading,t.visited,r);return}cn(e,n.sky,performance.now()/1e3,n.inside),fn(e,n.px,n.pz,n.heading,t.hasRaft,t.visited),Xe(e,`Day ${t.day}`,40,4,F.cream);let i=`Shells ${t.shells}`,a=316-Ye(i);Xe(e,i,a,t.speedrun?14:4,F.cream);let o=t.bounty===`none`?``:`  Want ${x[t.bounty].short}`,s=`Isles ${t.visited.length}  Hunts ${t.kills}${o}`;Xe(e,s,(t.speedrun?316-Ye(d(t.speedMs)):a)-4-Ye(s),4,F.cream),t.speedrun&&Qt(e,t.speedMs),n.banner&&(Xe(e,n.banner,41,12,F.dark),Xe(e,n.banner,40,11,F.cream)),vn(e,n.aimX,n.aimY);let c=n.showHelp?`Esc pauses the shore. 0 Map shows every shore. Home is Start, and You marks where you stand.`:t.lines[0]&&t.lines[0]!==n.prompt?t.lines[0]:n.prompt||t.lines[0]||``;c&&(Ze(e,c,157,F.dark),Ze(e,c,156,F.cream));let l=t.rawAge>0?`Raw ${t.raw} old`:`Raw ${t.raw}`;if(Xe(e,l,5,168,F.dark),Xe(e,l,4,167,F.cream),e.fillStyle=`rgba(8, 14, 16, 0.55)`,e.fillRect(122,174,62,8),e.fillRect(185,174,52,8),e.fillRect(239,174,36,8),tn(e,Ht,176,t.health),nn(e,187,176,t.hunger),rn(e,241,176,t.thirst),on(e,t,n.slot),n.paused){e.fillStyle=`rgba(8, 14, 16, 0.62)`,e.fillRect(0,0,320,200),e.fillStyle=F.dark,e.fillRect(78,68,164,64),e.fillStyle=F.cream,e.fillRect(80,70,160,60),qe(e,`Paused`,78,F.dark),Ze(e,`The shore holds still.`,96,F.dirtDark);for(let t of Lt())Qe(e,t,t.id===r)}else{for(let i of qt(t,n.near,n.vendor,n.riding))i.id.startsWith(`slot-`)||$t(e,i,i.id===r);n.purchase&&Zt(e,n.purchase.title,n.purchase.label,n.purchase.age)}}var Xt=[`#f3e2bc`,`#ffc04a`,`#e23b4a`,`#3ec8c4`,`#f06098`,`#ffe08a`];function Zt(e,t,n,r){let i=r<.12?r/.12:r>.78?Math.max(0,(1.05-r)/.27):1,a=r<.18?Math.round((1-r/.18)*7):0;e.save(),e.globalAlpha=i;for(let t=0;t<16;t+=1){let n=t/16*Math.PI*2+.35,i=14+r*52+t%3*5,a=Math.round(160+Math.cos(n)*i),o=Math.round(86+Math.sin(n)*i*.62-r*10);e.fillStyle=Xt[t%Xt.length]??`#f3e2bc`,e.fillRect(a,o,t%2==0?3:2,2)}let o=64+a;e.fillStyle=F.dark,e.fillRect(78,o-2,164,42),e.fillStyle=F.cream,e.fillRect(80,o,160,38),qe(e,t,o+6,F.dark),Ze(e,n,o+22,F.dirtDark),e.restore()}function Qt(e,t){let n=d(t),r=316-Ye(n);Xe(e,n,r+1,5,F.dark),Xe(e,n,r,4,F.cream)}function $t(e,t,n){e.fillStyle=F.dark,e.fillRect(t.x,t.y,t.w,t.h),e.fillStyle=t.enabled?n?F.creamDark:F.cream:F.dirt,e.fillRect(t.x+1,t.y+1,t.w-2,t.h-2);let r=Ye(t.label);Xe(e,t.label,t.x+Math.round((t.w-r)/2),t.y+Math.round((t.h-5)/2),t.enabled?F.dark:F.dirtDark)}function en(e,t){let n=e/10;return n>=t+1?2:+(n>=t+.5)}function tn(e,t,n,r){for(let i=0;i<10;i+=1){let a=en(r,i),o=t+i*6;e.fillStyle=a===0?`#5a4030`:`#c23b2e`,e.fillRect(o,n,2,1),e.fillRect(o+3,n,2,1),e.fillRect(o,n+1,5,2),e.fillRect(o+1,n+3,3,1),a===1&&(e.fillStyle=`#5a4030`,e.fillRect(o+3,n,2,3),e.fillRect(o+3,n+3,1,1))}}function nn(e,t,n,r){for(let i=0;i<10;i+=1){let a=en(r,i),o=t+i*5;e.fillStyle=a===0?`#5a4030`:`#c45a2a`,e.fillRect(o+1,n,3,2),e.fillRect(o,n+2,2,2),a===1&&(e.fillStyle=`#5a4030`,e.fillRect(o+3,n,1,2))}}function rn(e,t,n,r){for(let i=0;i<8;i+=1){let a=en(Math.round(r/100*80),i),o=t+i*4;e.fillStyle=a===0?`#5a4030`:`#3d7ea6`,e.fillRect(o+1,n,2,2),e.fillRect(o,n+2,2,2),a===1&&(e.fillStyle=`#5a4030`,e.fillRect(o+2,n,1,2))}}function an(e,t){return t===1?+!!e.hasKnife:t===2?+!!e.hasAxe:t===3?e.bullets:t===4?e.meals:+(t===0)}function on(e,t,n){for(let r=0;r<Vt;r+=1){let i=Ht+r*15,a=an(t,r)>0;r===n&&(e.fillStyle=`#fff6dc`,e.fillRect(i-1,184,16,16)),e.fillStyle=`#2a2118`,e.fillRect(i,Ut,Bt,Bt),e.fillStyle=r===n?`#6b5138`:`#3a2c20`,e.fillRect(i+1,186,12,12),sn(e,r,i+3,188,a);let o=an(t,r);if(r>0&&o>0){let t=String(o);Xe(e,t,i+Bt-2-Ye(t),193,F.cream)}let s=String(r+1);e.fillStyle=`#1a120c`,e.fillRect(i,Ut,Ye(s)+1,6),Xe(e,s,i+1,186,F.cream)}}function sn(e,t,n,r,i){let a=i?`#f4f7fb`:`#6a5a48`,o=i?`#6b3f1f`:`#4a3424`,s=i?`#c5ccd2`:`#6a6560`;e.fillStyle=t===0?i?`#e2c792`:`#6a5a48`:t===4?i?`#e07a32`:`#6a5340`:a,t===0?(e.fillRect(n+2,r,4,3),e.fillRect(n+1,r+3,6,3)):t===1?(e.fillStyle=o,e.fillRect(n,r+3,3,2),e.fillStyle=s,e.fillRect(n+3,r+1,5,3)):t===2?(e.fillStyle=o,e.fillRect(n,r+3,6,2),e.fillStyle=s,e.fillRect(n+5,r,3,5)):t===3?(e.fillStyle=o,e.fillRect(n+1,r+1,6,1),e.fillStyle=s,e.fillRect(n+6,r,2,3)):e.fillRect(n+2,r+1,4,4)}function cn(e,t,n,r){if(!r){if(t===`rain`||t===`hurricane`){e.fillStyle=t===`hurricane`?`rgba(16, 24, 32, 0.28)`:`rgba(70, 110, 140, 0.14)`,e.fillRect(0,0,320,156),e.fillStyle=t===`hurricane`?`#d5e2ea`:`#f4fbff`;let r=t===`hurricane`?28:16;for(let i=0;i<r;i+=1){let r=Math.round((i*47+n*(t===`hurricane`?90:50))%340-12),a=Math.round((i*29+n*120)%150);e.fillRect(r,a,1,t===`hurricane`?9:5)}}else if(t===`tsunami`){let t=Math.min(1,n%8/3),r=Math.round(150-t*64);e.fillStyle=`rgba(23, 134, 180, 0.45)`,e.fillRect(0,r,320,156-r)}}}var ln={jungle:`#2f9a4a`,volcano:`#c45a22`,reef:`#3ec8c4`,fossil:`#c4a15a`,frost:`#d7e7f2`,dune:`#e0b15a`,bloom:`#e06aa0`};function un(e,t,n,r,i,a){e.fillStyle=F.waterDeep,e.fillRect(0,0,320,200),Xe(e,`Chart`,8,6,F.cream),Xe(e,`Start is home`,48,6,F.cream),Xe(e,`You marks you`,312-Ye(`You marks you`),6,F.cream);let o=new Map;for(let e of[...Et(0,0,160),...Et(t,n,90)])o.set(e.id,e);let s=Math.min(vt.x-vt.r,t-12),c=Math.max(vt.x+vt.r,t+12),l=Math.min(vt.z-vt.r,n-12),u=Math.max(vt.z+vt.r,n+12);for(let e of o.values())s=Math.min(s,e.x-e.r),c=Math.max(c,e.x+e.r),l=Math.min(l,e.z-e.r),u=Math.max(u,e.z+e.r);s-=20,c+=20,l-=20,u+=20;let d={x:10,y:18,w:300,h:154},f=Math.min(d.w/(c-s),d.h/(u-l)),p=(s+c)/2,m=(l+u)/2,h=(e,t)=>({x:d.x+d.w/2+(e-p)*f,y:d.y+d.h/2+(t-m)*f}),g=h(vt.x,vt.z),_=Math.max(4,vt.r*f);e.fillStyle=F.grass,e.beginPath(),e.arc(g.x,g.y,_,0,Math.PI*2),e.fill(),e.strokeStyle=F.cream,e.lineWidth=1,e.beginPath(),e.arc(g.x,g.y,_+2,0,Math.PI*2),e.stroke(),Xe(e,`Start`,Math.round(g.x)-10,Math.round(g.y-_-7),F.cream);for(let t of o.values()){let n=h(t.x,t.z);e.fillStyle=ln[t.theme],e.beginPath(),e.arc(n.x,n.y,Math.max(2,t.r*f),0,Math.PI*2),e.fill(),i.includes(t.id)&&(e.fillStyle=F.cream,e.fillRect(Math.round(n.x)-1,Math.round(n.y)-1,2,2))}for(let t of Jt())Qe(e,t,t.id===a);dn(e,h(t,n),r)}function dn(e,t,n){let r=Math.round(t.x),i=Math.round(t.y),a=Math.sin(n),o=Math.cos(n);for(let t=3;t<=9;t+=2){let n=Math.round(r+a*t),s=Math.round(i+o*t);e.fillStyle=F.dark,e.fillRect(n-1,s-1,3,3),e.fillStyle=F.cream,e.fillRect(n,s,1,1)}let s=Math.floor(performance.now()/280)%2==0?4:3;e.fillStyle=F.dark,e.fillRect(r-s-1,i-s-1,s*2+3,s*2+3),e.fillStyle=F.cream,e.fillRect(r-s,i-s,s*2+1,s*2+1),e.fillStyle=F.dark,e.fillRect(r-1,i-1,3,3);let c=Math.round(r+a*11),l=Math.round(i+o*11);e.fillStyle=F.dark,e.fillRect(c-2,l-2,5,5),e.fillStyle=F.cream,e.fillRect(c-1,l-1,3,3);let u=r+7,d=i-8;u+Ye(`You`)>312&&(u=r-7-Ye(`You`)),d<16&&(d=i+7),d>168&&(d=i-8),Xe(e,`You`,u+1,d+1,F.dark),Xe(e,`You`,u,d,F.cream)}function fn(e,t,n,r,i,a){let o=16/62,s=(e,r)=>({x:19+(e-t)*o,y:19+(r-n)*o});e.save(),e.beginPath(),e.rect(2,2,34,34),e.clip(),e.fillStyle=F.waterDeep,e.fillRect(2,2,34,34);let c={jungle:`#2f9a4a`,volcano:`#c45a22`,reef:`#3ec8c4`,fossil:`#c4a15a`,frost:`#d7e7f2`,dune:`#e0b15a`,bloom:`#e06aa0`},l=(t,n,r,i)=>{let a=s(t,n);e.fillStyle=i,e.beginPath(),e.arc(a.x,a.y,Math.max(1.5,r*o),0,Math.PI*2),e.fill()};l(vt.x,vt.z,vt.r,F.grass);for(let r of Et(t,n,78)){if(l(r.x,r.z,r.r,c[r.theme]),!a.includes(r.id))continue;let t=s(r.x,r.z);t.x<4||t.y<4||t.x>34||t.y>34||(e.fillStyle=F.cream,e.fillRect(Math.round(t.x)-1,Math.round(t.y)-1,2,2))}let u=(t,n,r)=>{let i=s(t,n);i.x<3||i.y<3||i.x>35||i.y>35||(e.fillStyle=r,e.fillRect(i.x,i.y,2,2))};u(-8,1,`#e09030`),u(11,6,`#8a9aa3`),u(0,-13,`#1a1612`),i&&u(0,16,`#8a5a32`),e.fillStyle=F.cream,e.fillRect(18,18,2,2),e.fillStyle=F.dark,e.fillRect(19+Math.sin(r)*3,19+Math.cos(r)*3,1,1),e.restore()}function pn(e,t,n,r=0,i=!1){if(e.clearRect(0,0,320,200),t.phase===`crash`)dt(e,t.crash);else if(t.phase===`brief`){gn(e,t,n,r,Rt(t,i));return}else if(t.phase===`beach`)et(e,104),ct(e,104),Ke(e,t.lines[0]??`The island waits.`,8,108,F.dark),Ke(e,`Day ${t.day}`,8,120,F.dark),Ke(e,`Hunger`,8,132,F.dark),lt(e,56,133,70,t.hunger,`#c45a2a`),Ke(e,`Health`,140,132,F.dark),lt(e,188,133,70,t.health,F.grass),Ke(e,`Wood ${t.wood}  Stone ${t.stone}  Vine ${t.fiber}`,8,144,F.dark),Ke(e,`Spears ${t.bullets}  Raw ${t.raw}  Meals ${t.meals}`,8,156,F.dark),Ke(e,mn(t),8,168,F.dark);else if(t.phase===`forage`)pt(e,r),ct(e,168),Ke(e,t.lines[0]??`Take what the treeline gives.`,8,174,F.dark);else if(t.phase===`craft`)e.fillStyle=F.sky,e.fillRect(0,0,320,18),Ke(e,`Craft`,8,5,F.dark),t.speedrun&&Qt(e,t.speedMs),Ke(e,`W ${t.wood}  S ${t.stone}  V ${t.fiber}  F ${t.fronds}  Sh ${t.shells}`,72,5,F.dark),e.fillStyle=F.cream,e.fillRect(0,18,320,182),o(t).forEach((t,n)=>{let r=Wt+n*Gt;Ke(e,t.name,8,r+2,F.dark),Ke(e,t.cost,108,r+2,F.dirtDark)}),t.hasRaft||Xe(e,t.lines[0]??`A find from another isle adds a recipe here.`,8,164,F.dark);else if(t.phase===`fire`){ut(e,r,t.hasFire),ct(e,132);let n=kt[t.chatter%kt.length]??kt[0];Ke(e,t.lines[0]??n,8,140,F.dark),Ke(e,t.hasFire?`Cook raw meat, eat, or rest out the night.`:`No fire yet. Resting here will be cold.`,8,156,F.dark)}else t.phase===`wreck`?(mt(e,t.day,r,t.hasSignal),ct(e,140),Ke(e,t.lines[0]??`Ren picks through the tail.`,8,148,F.dark),Ke(e,t.wreckDay===t.day?`The shallows are picked clean today.`:`Salvage once today.`,8,160,F.dark),Ke(e,t.hasSignal?`A search plane is in the sky.`:`Light a signal and they may come.`,8,172,F.dark)):_n(e,96,t.endTitle,hn(t));for(let r of Rt(t,i))Qe(e,r,r.id===n)}function mn(e){let t=[];return e.hasKnife&&t.push(`knife`),e.hasAxe&&t.push(`axe`),e.hasFire&&t.push(`fire`),e.hasShelter&&t.push(`shelter`),e.hasSignal&&t.push(`signal`),e.hasRaft&&t.push(`raft`),t.length>0?t.join(`  `):`No tools yet. Craft a knife.`}function hn(e){let t=e.lines.slice(0,3);return e.phase===`win`?[...t,`Day ${e.day}. You are ${h(e.health).toLowerCase()}.`]:t}function gn(e,t,n,r,i=Rt(t)){if(ft(e,r),t.bestMs>0){let n=`Best ${d(t.bestMs)}`;Xe(e,n,316-Ye(n),6,F.dark)}for(let t of i)Qe(e,t,t.id===n)}function _n(e,t,n,r){et(e,t),ct(e,t),qe(e,n,t+8,F.dark,2),r.forEach((n,r)=>{qe(e,n,t+28+r*10,F.dark)})}function vn(e,t,n){e.fillStyle=F.cream,e.fillRect(t-4,n,9,1),e.fillRect(t,n-4,1,9),e.fillStyle=F.dark,e.fillRect(t-3,n,3,1),e.fillRect(t+1,n,3,1),e.fillRect(t,n-3,1,3),e.fillRect(t,n+1,1,3)}var yn=1e3,bn=1001,xn=1002,Sn=1003,Cn=1004,wn=1005,Tn=1006,En=1007,Dn=1008,On=1009,L=1010,kn=1011,An=1012,jn=1013,Mn=1014,Nn=1015,Pn=1016,Fn=1017,In=1018,Ln=1020,Rn=35902,zn=35899,Bn=1021,Vn=1022,Hn=1023,Un=1026,Wn=1027,Gn=1028,Kn=1029,qn=1030,Jn=1031,Yn=1033,Xn=33776,Zn=33777,Qn=33778,$n=33779,er=35840,tr=35841,nr=35842,rr=35843,ir=36196,ar=37492,or=37496,sr=37488,cr=37489,lr=37490,ur=37491,dr=37808,fr=37809,pr=37810,mr=37811,hr=37812,gr=37813,_r=37814,vr=37815,yr=37816,br=37817,xr=37818,Sr=37819,Cr=37820,wr=37821,Tr=36492,Er=36494,Dr=36495,Or=36283,kr=36284,Ar=36285,jr=36286,Mr=2300,Nr=2301,Pr=2302,Fr=2303,Ir=2400,Lr=2401,Rr=2402,zr=3200,Br=`srgb`,Vr=`srgb-linear`,Hr=`linear`,Ur=`srgb`,Wr=7680,Gr=35044,Kr=2e3;function qr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Jr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Yr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xr(){let e=Yr(`canvas`);return e.style.display=`block`,e}var Zr={};function Qr(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $r(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=$r(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=$r(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ei(...e){let t=e.join(` `);t in Zr||(Zr[t]=!0,R(...e))}function ti(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ni={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},B=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ii=Math.PI/180,ai=180/Math.PI;function oi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(B[e&255]+B[e>>8&255]+B[e>>16&255]+B[e>>24&255]+`-`+B[t&255]+B[t>>8&255]+`-`+B[t>>16&15|64]+B[t>>24&255]+`-`+B[n&63|128]+B[n>>8&255]+`-`+B[n>>16&255]+B[n>>24&255]+B[r&255]+B[r>>8&255]+B[r>>16&255]+B[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function si(e,t){return(e%t+t)%t}function ci(e,t,n){return(1-n)*e+n*t}function li(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ui(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function di(e,t){if(t.constructor===Float32Array)return e;let n=ui(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function fi(e,t){if(t.constructor===Float32Array)return e;let n=ui(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var pi=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gi.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gi.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hi.copy(this).projectOnVector(e),this.sub(hi)}reflect(e){return this.sub(hi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hi=new H,gi=new mi,U=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ei(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(_i.makeScale(e,t)),this}rotate(e){return ei(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(_i.makeRotation(-e)),this}translate(e,t){return ei(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(_i.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_i=new U,vi=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yi=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bi(){let e={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=xi(e.r),e.g=xi(e.g),e.b=xi(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Si(e.r),e.g=Si(e.g),e.b=Si(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Hr:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Vr]:{primaries:t,whitePoint:r,transfer:Hr,toXYZ:vi,fromXYZ:yi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Br},outputColorSpaceConfig:{drawingBufferColorSpace:Br}},[Br]:{primaries:t,whitePoint:r,transfer:Ur,toXYZ:vi,fromXYZ:yi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Br}}}),e}var W=bi();function xi(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Si(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ci,wi=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=Yr(`canvas`)),Ci.width=e.width,Ci.height=e.height;let t=Ci.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Yr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=xi(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(xi(t[e]/255)*255):t[e]=xi(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ti=0,Ei=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ti++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Di(r[t].image)):e.push(Di(r[t]))}else e=Di(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Di(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?wi.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Oi=0,ki=new H,Ai=class e extends ri{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=bn,i=bn,a=Tn,o=Dn,s=Hn,c=On,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oi++}),this.uuid=oi(),this.name=``,this.source=new Ei(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new pi(0,0),this.repeat=new pi(1,1),this.center=new pi(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ki).x}get height(){return this.source.getSize(ki).y}get depth(){return this.source.getSize(ki).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yn:e.x-=Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case xn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case yn:e.y-=Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case xn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ai.DEFAULT_IMAGE=null,Ai.DEFAULT_MAPPING=300,Ai.DEFAULT_ANISOTROPY=1;var ji=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mi=class extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ji(0,0,e,t),this.scissorTest=!1,this.viewport=new ji(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Ai({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ei(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ni=class extends Mi{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pi=class extends Ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Fi=class extends Ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ii=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),i=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zi,e,Bi)}lookAt(e,t,n){let r=this.elements;return Ui.subVectors(e,t),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),Vi.crossVectors(n,Ui),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),Vi.crossVectors(n,Ui)),Vi.normalize(),Hi.crossVectors(Ui,Vi),r[0]=Vi.x,r[4]=Hi.x,r[8]=Ui.x,r[1]=Vi.y,r[5]=Hi.y,r[9]=Ui.y,r[2]=Vi.z,r[6]=Hi.z,r[10]=Ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*ee+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*re,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*ee+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*re,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*ee+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*re,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*ee+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*re,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Li.set(r[0],r[1],r[2]).length(),o=Li.set(r[4],r[5],r[6]).length(),s=Li.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ri.copy(this);let c=1/a,l=1/o,u=1/s;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=l,Ri.elements[5]*=l,Ri.elements[6]*=l,Ri.elements[8]*=u,Ri.elements[9]*=u,Ri.elements[10]*=u,t.setFromRotationMatrix(Ri),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Kr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Kr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Li=new H,Ri=new Ii,zi=new H(0,0,0),Bi=new H(1,1,1),Vi=new H,Hi=new H,Ui=new H,Wi=new Ii,Gi=new mi,Ki=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gi.setFromEuler(this),this.setFromQuaternion(Gi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER=`XYZ`;var qi=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ji=0,Yi=new H,Xi=new mi,Zi=new Ii,Qi=new H,$i=new H,ea=new H,ta=new mi,na=new H(1,0,0),ra=new H(0,1,0),ia=new H(0,0,1),G={type:`added`},aa={type:`removed`},oa={type:`childadded`,child:null},sa={type:`childremoved`,child:null},ca=class e extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ji++}),this.uuid=oi(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Ki,r=new mi,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ii},normalMatrix:{value:new U}}),this.matrix=new Ii,this.matrixWorld=new Ii,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(na,e)}rotateY(e){return this.rotateOnAxis(ra,e)}rotateZ(e){return this.rotateOnAxis(ia,e)}translateOnAxis(e,t){return Yi.copy(e).applyQuaternion(this.quaternion),this.position.add(Yi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(na,e)}translateY(e){return this.translateOnAxis(ra,e)}translateZ(e){return this.translateOnAxis(ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qi.copy(e):Qi.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt($i,Qi,this.up):Zi.lookAt(Qi,$i,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Zi),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G),oa.child=e,this.dispatchEvent(oa),oa.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aa),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,ea),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,ta,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ca.DEFAULT_UP=new H(0,1,0),ca.DEFAULT_MATRIX_AUTO_UPDATE=!0,ca.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var K=class extends ca{constructor(){super(),this.isGroup=!0,this.type=`Group`}},la={type:`move`},ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new K,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new K,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new K,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(la)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new K;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},da={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fa={h:0,s:0,l:0},pa={h:0,s:0,l:0};function ma(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ha=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Br){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=si(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ma(i,r,e+1/3),this.g=ma(i,r,e),this.b=ma(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=Br){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Br){let n=da[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Br){return W.workingToColorSpace(ga.copy(this),e),Math.round(V(ga.r*255,0,255))*65536+Math.round(V(ga.g*255,0,255))*256+Math.round(V(ga.b*255,0,255))}getHexString(e=Br){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(ga.copy(this),t);let n=ga.r,r=ga.g,i=ga.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(ga.copy(this),t),e.r=ga.r,e.g=ga.g,e.b=ga.b,e}getStyle(e=Br){W.workingToColorSpace(ga.copy(this),e);let t=ga.r,n=ga.g,r=ga.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(fa),this.setHSL(fa.h+e,fa.s+t,fa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fa),e.getHSL(pa);let n=ci(fa.h,pa.h,t),r=ci(fa.s,pa.s,t),i=ci(fa.l,pa.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ga=new ha;ha.NAMES=da;var _a=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new ha(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},va=class extends ca{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ya=new H,ba=new H,xa=new H,Sa=new H,Ca=new H,wa=new H,Ta=new H,Ea=new H,Da=new H,Oa=new H,ka=new ji,Aa=new ji,ja=new ji,Ma=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ya.subVectors(e,t),r.cross(ya);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ya.subVectors(r,t),ba.subVectors(n,t),xa.subVectors(e,t);let a=ya.dot(ya),o=ya.dot(ba),s=ya.dot(xa),c=ba.dot(ba),l=ba.dot(xa),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sa)!==null&&Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Sa)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Sa.x),s.addScaledVector(a,Sa.y),s.addScaledVector(o,Sa.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ka.setScalar(0),Aa.setScalar(0),ja.setScalar(0),ka.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ka,i.x),a.addScaledVector(Aa,i.y),a.addScaledVector(ja,i.z),a}static isFrontFacing(e,t,n,r){return ya.subVectors(n,t),ba.subVectors(e,t),ya.cross(ba).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ya.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),ya.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ca.subVectors(r,n),wa.subVectors(i,n),Ea.subVectors(e,n);let s=Ca.dot(Ea),c=wa.dot(Ea);if(s<=0&&c<=0)return t.copy(n);Da.subVectors(e,r);let l=Ca.dot(Da),u=wa.dot(Da);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Ca,a);Oa.subVectors(e,i);let f=Ca.dot(Oa),p=wa.dot(Oa);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(wa,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ta.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ta,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ca,a).addScaledVector(wa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Na=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fa.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fa.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fa.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Fa):Fa.fromBufferAttribute(r,t),Fa.applyMatrix4(e.matrixWorld),this.expandByPoint(Fa);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fa),Fa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Wa.subVectors(this.max,Ua),La.subVectors(e.a,Ua),Ra.subVectors(e.b,Ua),za.subVectors(e.c,Ua),Ba.subVectors(Ra,La),Va.subVectors(za,Ra),Ha.subVectors(La,za);let t=[0,-Ba.z,Ba.y,0,-Va.z,Va.y,0,-Ha.z,Ha.y,Ba.z,0,-Ba.x,Va.z,0,-Va.x,Ha.z,0,-Ha.x,-Ba.y,Ba.x,0,-Va.y,Va.x,0,-Ha.y,Ha.x,0];return!qa(t,La,Ra,za,Wa)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,La,Ra,za,Wa))?!1:(Ga.crossVectors(Ba,Va),t=[Ga.x,Ga.y,Ga.z],qa(t,La,Ra,za,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pa)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pa=[new H,new H,new H,new H,new H,new H,new H,new H],Fa=new H,Ia=new Na,La=new H,Ra=new H,za=new H,Ba=new H,Va=new H,Ha=new H,Ua=new H,Wa=new H,Ga=new H,Ka=new H;function qa(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ka.fromArray(e,a);let o=i.x*Math.abs(Ka.x)+i.y*Math.abs(Ka.y)+i.z*Math.abs(Ka.z),s=t.dot(Ka),c=n.dot(Ka),l=r.dot(Ka);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ja=new H,Ya=new pi,Xa=0,Za=class extends ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xa++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Gr,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=e===void 0?void 0:ui(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXYZ(t,Ja.x,Ja.y,Ja.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix4(e),this.setXYZ(t,Ja.x,Ja.y,Ja.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyNormalMatrix(e),this.setXYZ(t,Ja.x,Ja.y,Ja.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.transformDirection(e),this.setXYZ(t,Ja.x,Ja.y,Ja.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?di(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?fi(e,this.array):Math.round(e*t)}},Qa=class extends Za{constructor(e,t,n){super(new Uint16Array(e),t,n)}},$a=class extends Za{constructor(e,t,n){super(new Uint32Array(e),t,n)}},eo=class extends Za{constructor(e,t,n){super(new Float32Array(e),t,n)}},to=new Na,no=new H,ro=new H,io=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?to.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(no,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(ro)),this.expandByPoint(no.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ao=0,oo=new Ii,so=new ca,co=new H,lo=new Na,uo=new Na,fo=new H,po=class e extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ao++}),this.uuid=oi(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qr(e)?$a:Qa)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oo.makeRotationFromQuaternion(e),this.applyMatrix4(oo),this}rotateX(e){return oo.makeRotationX(e),this.applyMatrix4(oo),this}rotateY(e){return oo.makeRotationY(e),this.applyMatrix4(oo),this}rotateZ(e){return oo.makeRotationZ(e),this.applyMatrix4(oo),this}translate(e,t,n){return oo.makeTranslation(e,t,n),this.applyMatrix4(oo),this}scale(e,t,n){return oo.makeScale(e,t,n),this.applyMatrix4(oo),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new eo(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];lo.setFromBufferAttribute(n),this.morphTargetsRelative?(fo.addVectors(this.boundingBox.min,lo.min),this.boundingBox.expandByPoint(fo),fo.addVectors(this.boundingBox.max,lo.max),this.boundingBox.expandByPoint(fo)):(this.boundingBox.expandByPoint(lo.min),this.boundingBox.expandByPoint(lo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(lo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];uo.setFromBufferAttribute(n),this.morphTargetsRelative?(fo.addVectors(lo.min,uo.min),lo.expandByPoint(fo),fo.addVectors(lo.max,uo.max),lo.expandByPoint(fo)):(lo.expandByPoint(uo.min),lo.expandByPoint(uo.max))}lo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)fo.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(fo));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)fo.fromBufferAttribute(a,t),o&&(co.fromBufferAttribute(e,t),fo.add(co)),r=Math.max(r,n.distanceToSquared(fo))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Za(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new pi,p=new pi,m=new pi,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Za(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fo.fromBufferAttribute(e,t),fo.normalize(),e.setXYZ(t,fo.x,fo.y,fo.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Za(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},mo=new H,ho=new H,go=new U,_o=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=mo.subVectors(n,t).cross(ho.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(mo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||go.getNormalMatrix(e),r=this.coplanarPoint(mo).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vo=0,yo=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vo++}),this.uuid=oi(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ha(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ha().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new _o().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new pi().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pi().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},bo=new H,xo=new H,So=new H,Co=new H,wo=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bo)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bo.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bo.copy(this.origin).addScaledVector(this.direction,t),bo.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xo.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),Co.copy(this.origin).sub(xo);let i=e.distanceTo(t)*.5,a=-this.direction.dot(So),o=Co.dot(this.direction),s=-Co.dot(So),c=Co.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(xo).addScaledVector(So,d),f}intersectSphere(e,t){if(e.radius<0)return null;bo.subVectors(e.center,this.origin);let n=bo.dot(this.direction),r=bo.dot(bo)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bo)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,A,te,j;if(y>=b&&y>=x?(w=s,D=u,k=p,j=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,A=_,te=v):(S=l,C=c,T=f,E=d,O=h,ee=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,j=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,A=v,te=g):(S=s,C=l,T=u,E=f,O=p,ee=h,A=g,te=v)):(w=l,D=f,k=h,j=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,A=g,te=_):(S=c,C=s,T=d,E=u,O=m,ee=p,A=_,te=g)),w===0)return null;let ne=S/w,re=C/w,ie=1/w,ae=T-ne*D,oe=E-re*D,se=O-ne*k,ce=ee-re*k,le=A-ne*j,ue=te-re*j,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=ie*(de*D+fe*k+pe*j);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},To=class extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new ha(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Eo=new Ii,Do=new wo,Oo=new io,ko=new H,Ao=new H,jo=new H,Mo=new H,No=new H,Po=new H,Fo=new H,Io=new H,q=class extends ca{constructor(e=new po,t=new To){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Po.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(No.fromBufferAttribute(s,e),a?Po.addScaledVector(No,r):Po.addScaledVector(No.sub(t),r))}t.add(Po)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(i),Do.copy(e.ray).recast(e.near),Oo.containsPoint(Do.origin)===!1&&(Do.intersectSphere(Oo,ko)===null||Do.origin.distanceToSquared(ko)>(e.far-e.near)**2)||(Eo.copy(i).invert(),Do.copy(e.ray).applyMatrix4(Eo),(n.boundingBox===null||Do.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Do)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ro(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ro(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ro(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ro(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Lo(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Io.copy(s),Io.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Io);return l<n.near||l>n.far?null:{distance:l,point:Io.clone(),object:e}}function Ro(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ao),e.getVertexPosition(c,jo),e.getVertexPosition(l,Mo);let u=Lo(e,t,n,r,Ao,jo,Mo,Fo);if(u){let e=new H;Ma.getBarycoord(Fo,Ao,jo,Mo,e),i&&(u.uv=Ma.getInterpolatedAttribute(i,s,c,l,e,new pi)),a&&(u.uv1=Ma.getInterpolatedAttribute(a,s,c,l,e,new pi)),o&&(u.normal=Ma.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Ma.getNormal(Ao,jo,Mo,t.normal),u.face=t,u.barycoord=e}return u}var zo=class extends Ai{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Sn,l=Sn,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bo=new io,Vo=new pi(.5,.5),Ho=new H,Uo=class{constructor(e=new _o,t=new _o,n=new _o,r=new _o,i=new _o,a=new _o){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bo)}intersectsSprite(e){return Bo.center.set(0,0,0),Bo.radius=.7071067811865476+Vo.distanceTo(e.center),Bo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wo=new Ii,Go=class e{constructor(){this.coordinateSystem=Kr,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Wo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Uo),n[e].setFromProjectionMatrix(Wo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Uo),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Ko=class extends Ai{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qo=class extends Ai{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jo=class extends Ai{constructor(e,t,n=Mn,r,i,a,o=Sn,s=Sn,c,l=Un,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ei(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yo=class extends Jo{constructor(e,t=Mn,n=301,r,i,a=Sn,o=Sn,s,c=Un){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xo=class extends Ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},J=class e extends po{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new eo(c,3)),this.setAttribute(`normal`,new eo(l,3)),this.setAttribute(`uv`,new eo(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Zo=class e extends po{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new pi;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new eo(a,3)),this.setAttribute(`normal`,new eo(o,3)),this.setAttribute(`uv`,new eo(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qo=class e extends po{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new eo(p,3)),this.setAttribute(`normal`,new eo(m,3)),this.setAttribute(`uv`,new eo(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function $o(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ts(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ts(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function es(e){let t={};for(let n=0;n<e.length;n++){let r=$o(e[n]);for(let e in r)t[e]=r[e]}return t}function ts(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ns(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function rs(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var is={clone:$o,merge:es},as=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,os=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ss=class extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=as,this.fragmentShader=os,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=ns(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new ha().setHex(r.value);break;case`v2`:this.uniforms[n].value=new pi().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ji().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ii().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},cs=class extends ss{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Y=class extends yo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new ha(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ha(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pi(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ls=class extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=zr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},us=class extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ds(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function fs(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ps=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ms=class extends ps{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ir,endingEnd:Ir}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lr:i=e,o=2*t-n;break;case Rr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Lr:a=e,s=2*n-t;break;case Rr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},hs=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},gs=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_s=class extends ps{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=bs(n,t,g,y,r);i[p]=vs(x,o,_,b,m)}return i}};function vs(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ys(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function bs(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=vs(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ys(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var xs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),fs(e.settings)&&(n.settings={inTangents:ds(e.settings.inTangents,Array),outTangents:ds(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ms(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _s(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case Pr:t=this.InterpolantFactoryMethodSmooth;break;case Fr:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Pr;case this.InterpolantFactoryMethodBezier:return Fr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;fs(this.settings)&&(Ss(this.settings.inTangents,e),Ss(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;fs(this.settings)&&(Cs(this.settings.inTangents,e),Cs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Jr(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,fs(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ss(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Cs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}xs.prototype.ValueTypeName=``,xs.prototype.TimeBufferType=Float32Array,xs.prototype.ValueBufferType=Float32Array,xs.prototype.DefaultInterpolation=Nr;var ws=class extends xs{constructor(e,t,n){super(e,t,n)}};ws.prototype.ValueTypeName=`bool`,ws.prototype.ValueBufferType=Array,ws.prototype.DefaultInterpolation=Mr,ws.prototype.InterpolantFactoryMethodLinear=void 0,ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}};Ts.prototype.ValueTypeName=`color`;var Es=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}};Es.prototype.ValueTypeName=`number`;var Ds=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)mi.slerpFlat(i,0,a,c-o,a,c,s);return i}},Os=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ds(this.times,this.values,this.getValueSize(),e)}};Os.prototype.ValueTypeName=`quaternion`,Os.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends xs{constructor(e,t,n){super(e,t,n)}};ks.prototype.ValueTypeName=`string`,ks.prototype.ValueBufferType=Array,ks.prototype.DefaultInterpolation=Mr,ks.prototype.InterpolantFactoryMethodLinear=void 0,ks.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends xs{constructor(e,t,n,r){super(e,t,n,r)}};As.prototype.ValueTypeName=`vector`;var js=class extends ca{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new ha(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ms=class extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ca.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ha(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ns=new Ii,Ps=new H,Fs=new H,Is=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pi(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Ii,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new pi(1,1),this._viewportCount=1,this._viewports=[new ji(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ps.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ps),Fs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ns.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ns,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ls=new H,Rs=new mi,zs=new H,Bs=class extends ca{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ii,this.projectionMatrix=new Ii,this.projectionMatrixInverse=new Ii,this.coordinateSystem=Kr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ls,Rs,zs),zs.x===1&&zs.y===1&&zs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ls,Rs,zs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ls,Rs,zs),zs.x===1&&zs.y===1&&zs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ls,Rs,zs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vs=new H,Hs=new pi,Us=new pi,Ws=class extends Bs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ai*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ai*2*Math.atan(Math.tan(ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z)}getViewSize(e,t){return this.getViewBounds(e,Hs,Us),t.subVectors(Us,Hs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ii*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=class extends Bs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ks=class extends Is{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ca.DEFAULT_UP),this.updateMatrix(),this.target=new ca,this.shadow=new Ks}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Js=-90,Ys=1,Xs=class extends ca{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ws(Js,Ys,e,t);r.layers=this.layers,this.add(r);let i=new Ws(Js,Ys,e,t);i.layers=this.layers,this.add(i);let a=new Ws(Js,Ys,e,t);a.layers=this.layers,this.add(a);let o=new Ws(Js,Ys,e,t);o.layers=this.layers,this.add(o);let s=new Ws(Js,Ys,e,t);s.layers=this.layers,this.add(s);let c=new Ws(Js,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Zs=class extends Ws{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Qs=`\\[\\]\\.:\\/`,$s=RegExp(`[\\[\\]\\.:\\/]`,`g`),ec=`[^\\[\\]\\.:\\/]`,tc=`[^`+Qs.replace(`\\.`,``)+`]`,nc=`((?:WC+[\\/:])*)`.replace(`WC`,ec),rc=`(WCOD+)?`.replace(`WCOD`,tc),ic=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ec),ac=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ec),oc=RegExp(`^`+nc+rc+ic+ac+`$`),sc=[`material`,`materials`,`bones`,`map`],cc=class{constructor(e,t,n){let r=n||lc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace($s,``)}static parseTrackName(e){let t=oc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);sc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lc.Composite=cc,lc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},lc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},lc.prototype.GetterByBindingType=[lc.prototype._getValue_direct,lc.prototype._getValue_array,lc.prototype._getValue_arrayElement,lc.prototype._getValue_toArray],lc.prototype.SetterByBindingTypeAndVersioning=[[lc.prototype._setValue_direct,lc.prototype._setValue_direct_setNeedsUpdate,lc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lc.prototype._setValue_array,lc.prototype._setValue_array_setNeedsUpdate,lc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lc.prototype._setValue_arrayElement,lc.prototype._setValue_arrayElement_setNeedsUpdate,lc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lc.prototype._setValue_fromArray,lc.prototype._setValue_fromArray_setNeedsUpdate,lc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uc=new Ii,dc=class{constructor(e,t,n=0,r=1/0){this.ray=new wo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(e,t=!0,n=[]){return pc(e,this,n,t),n.sort(fc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)pc(e[r],this,n,t);return n.sort(fc),n}};function fc(e,t){return e.distance-t.distance}function pc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)pc(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function mc(e,t,n,r){let i=hc(r);switch(n){case Bn:return e*t;case Gn:return e*t/i.components*i.byteLength;case Kn:return e*t/i.components*i.byteLength;case qn:return e*t*2/i.components*i.byteLength;case Jn:return e*t*2/i.components*i.byteLength;case Vn:return e*t*3/i.components*i.byteLength;case Hn:return e*t*4/i.components*i.byteLength;case Yn:return e*t*4/i.components*i.byteLength;case Xn:case Zn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Qn:case $n:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case tr:case rr:return Math.max(e,16)*Math.max(t,8)/4;case er:case nr:return Math.max(e,8)*Math.max(t,8)/2;case ir:case ar:case sr:case cr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case or:case lr:case ur:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fr:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pr:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case mr:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case hr:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case gr:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _r:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case vr:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case yr:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case br:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xr:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Sr:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Cr:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case wr:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Tr:case Er:case Dr:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Or:case kr:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ar:case jr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function hc(e){switch(e){case On:case L:return{byteLength:1,components:1};case An:case kn:case Pn:return{byteLength:2,components:1};case Fn:case In:return{byteLength:2,components:4};case Mn:case jn:case Nn:return{byteLength:4,components:1};case Rn:case zn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function gc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _c(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var vc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new ha(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new pi(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ha(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ha(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new ha(16777215)},opacity:{value:1},center:{value:new pi(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},yc={basic:{uniforms:es([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:vc.meshbasic_vert,fragmentShader:vc.meshbasic_frag},lambert:{uniforms:es([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new ha(0)},envMapIntensity:{value:1}}]),vertexShader:vc.meshlambert_vert,fragmentShader:vc.meshlambert_frag},phong:{uniforms:es([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new ha(0)},specular:{value:new ha(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vc.meshphong_vert,fragmentShader:vc.meshphong_frag},standard:{uniforms:es([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new ha(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vc.meshphysical_vert,fragmentShader:vc.meshphysical_frag},toon:{uniforms:es([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new ha(0)}}]),vertexShader:vc.meshtoon_vert,fragmentShader:vc.meshtoon_frag},matcap:{uniforms:es([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:vc.meshmatcap_vert,fragmentShader:vc.meshmatcap_frag},points:{uniforms:es([X.points,X.fog]),vertexShader:vc.points_vert,fragmentShader:vc.points_frag},dashed:{uniforms:es([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vc.linedashed_vert,fragmentShader:vc.linedashed_frag},depth:{uniforms:es([X.common,X.displacementmap]),vertexShader:vc.depth_vert,fragmentShader:vc.depth_frag},normal:{uniforms:es([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:vc.meshnormal_vert,fragmentShader:vc.meshnormal_frag},sprite:{uniforms:es([X.sprite,X.fog]),vertexShader:vc.sprite_vert,fragmentShader:vc.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vc.background_vert,fragmentShader:vc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:vc.backgroundCube_vert,fragmentShader:vc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vc.cube_vert,fragmentShader:vc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vc.equirect_vert,fragmentShader:vc.equirect_frag},distance:{uniforms:es([X.common,X.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vc.distance_vert,fragmentShader:vc.distance_frag},shadow:{uniforms:es([X.lights,X.fog,{color:{value:new ha(0)},opacity:{value:1}}]),vertexShader:vc.shadow_vert,fragmentShader:vc.shadow_frag}};yc.physical={uniforms:es([yc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new pi(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new ha(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new pi},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new ha(0)},specularColor:{value:new ha(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new pi},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:vc.meshphysical_vert,fragmentShader:vc.meshphysical_frag};var bc={r:0,b:0,g:0},xc=new Ii,Sc=new U;Sc.set(-1,0,0,0,1,0,0,0,1);function Cc(e,t,n,r,i,a){let o=new ha(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new q(new J(1,1,1),new ss({name:`BackgroundCubeMaterial`,uniforms:$o(yc.backgroundCube.uniforms),vertexShader:yc.backgroundCube.vertexShader,fragmentShader:yc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sc),l.material.toneMapped=W.getTransfer(i.colorSpace)!==Ur,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new Qo(2,2),new ss({name:`BackgroundMaterial`,uniforms:$o(yc.background.uniforms),vertexShader:yc.background.vertexShader,fragmentShader:yc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=W.getTransfer(i.colorSpace)!==Ur,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(bc,rs(e)),n.buffers.color.setClear(bc.r,bc.g,bc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function wc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Tc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ec(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Dc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new _o,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Oc=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ko(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new J(5,5,5),i=new ss({name:`CubemapFromEquirect`,uniforms:$o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Tn),new Xs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},kc=256,Ac=3,jc=20,Mc=256,Nc=16,Pc=3,Fc=new H,Ic=new ha,Lc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xs(1,10,null),this._boxMesh=new q(new J(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Fc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Ic));let h=new Xs(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(kc,li(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?kc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Rc(e,!1,!1),n=Math.log2(e)-Ac;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Rc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Uc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Bc(),this._integrationMaterial=Vc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Nc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Pc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Mc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Hc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Rc(e,t,n){return new Oc(e,{minFilter:Dn,generateMipmaps:t,type:Pn,colorSpace:Vr,depthBuffer:n})}function zc(e,t,n){return new ss({name:e,uniforms:t,vertexShader:vc.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Bc(){return zc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vc(){return zc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Hc(){return zc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Uc(){return zc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wc(){return zc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Oc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Lc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Lc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Kc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ei(`WebGLRenderer: `+e+` extension not supported.`),t}}}function qc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?$a:Qa)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Jc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Yc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Xc(e,t,n){let r=new WeakMap,i=new ji;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Pi(h,p,m,u);g.type=Nn,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new pi(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Zc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Qc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function $c(e,t,n,r,i,a){let o=new Ni(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new po;u.setAttribute(`position`,new eo([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new eo([0,2,0,0,2,0],2));let d=new cs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new q(u,d),p=new Gs(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Ni(t,n,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),c=new Ni(t,n,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Jo(t,n),a===!0&&(l.format=Wn,l.type=Ln)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},W.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Qc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var el=new Ai,tl=new Jo(1,1),nl=new Yo(1),rl=new Pi,il=new Fi,al=new Ko,ol=[],sl=[],cl=new Float32Array(16),ll=new Float32Array(9),ul=new Float32Array(4);function dl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ol[i];if(a===void 0&&(a=new Float32Array(i),ol[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function fl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function pl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ml(e,t){let n=sl[t];n===void 0&&(n=new Int32Array(t),sl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function hl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function gl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fl(n,t))return;e.uniform2fv(this.addr,t),pl(n,t)}}function _l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fl(n,t))return;e.uniform3fv(this.addr,t),pl(n,t)}}function vl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fl(n,t))return;e.uniform4fv(this.addr,t),pl(n,t)}}function yl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pl(n,t)}else{if(fl(n,r))return;ul.set(r),e.uniformMatrix2fv(this.addr,!1,ul),pl(n,r)}}function bl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pl(n,t)}else{if(fl(n,r))return;ll.set(r),e.uniformMatrix3fv(this.addr,!1,ll),pl(n,r)}}function xl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pl(n,t)}else{if(fl(n,r))return;cl.set(r),e.uniformMatrix4fv(this.addr,!1,cl),pl(n,r)}}function Sl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fl(n,t))return;e.uniform2iv(this.addr,t),pl(n,t)}}function wl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fl(n,t))return;e.uniform3iv(this.addr,t),pl(n,t)}}function Tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fl(n,t))return;e.uniform4iv(this.addr,t),pl(n,t)}}function El(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fl(n,t))return;e.uniform2uiv(this.addr,t),pl(n,t)}}function Ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fl(n,t))return;e.uniform3uiv(this.addr,t),pl(n,t)}}function kl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fl(n,t))return;e.uniform4uiv(this.addr,t),pl(n,t)}}function Al(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function jl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Al(tl):el,n.setTexture2D(t||a,i)}function Ml(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||il,i)}function Nl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Al(nl):al,n.setTextureCube(t||a,i)}function Pl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||rl,i)}function Fl(e){switch(e){case 5126:return hl;case 35664:return gl;case 35665:return _l;case 35666:return vl;case 35674:return yl;case 35675:return bl;case 35676:return xl;case 5124:case 35670:return Sl;case 35667:case 35671:return Cl;case 35668:case 35672:return wl;case 35669:case 35673:return Tl;case 5125:return El;case 36294:return Dl;case 36295:return Ol;case 36296:return kl;case 35678:case 36198:case 36298:case 36306:case 35682:return jl;case 35679:case 36299:case 36307:return Ml;case 35680:case 36300:case 36308:case 36293:return Nl;case 36289:case 36303:case 36311:case 36292:return Pl}}function Il(e,t){e.uniform1fv(this.addr,t)}function Ll(e,t){let n=dl(t,this.size,2);e.uniform2fv(this.addr,n)}function Rl(e,t){let n=dl(t,this.size,3);e.uniform3fv(this.addr,n)}function zl(e,t){let n=dl(t,this.size,4);e.uniform4fv(this.addr,n)}function Bl(e,t){let n=dl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Vl(e,t){let n=dl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Hl(e,t){let n=dl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ul(e,t){e.uniform1iv(this.addr,t)}function Wl(e,t){e.uniform2iv(this.addr,t)}function Gl(e,t){e.uniform3iv(this.addr,t)}function Kl(e,t){e.uniform4iv(this.addr,t)}function ql(e,t){e.uniform1uiv(this.addr,t)}function Jl(e,t){e.uniform2uiv(this.addr,t)}function Yl(e,t){e.uniform3uiv(this.addr,t)}function Xl(e,t){e.uniform4uiv(this.addr,t)}function Zl(e,t,n){let r=this.cache,i=t.length,a=ml(n,i);fl(r,a)||(e.uniform1iv(this.addr,a),pl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Al(tl):el;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ql(e,t,n){let r=this.cache,i=t.length,a=ml(n,i);fl(r,a)||(e.uniform1iv(this.addr,a),pl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||il,a[e])}function $l(e,t,n){let r=this.cache,i=t.length,a=ml(n,i);fl(r,a)||(e.uniform1iv(this.addr,a),pl(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Al(nl):al;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function eu(e,t,n){let r=this.cache,i=t.length,a=ml(n,i);fl(r,a)||(e.uniform1iv(this.addr,a),pl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||rl,a[e])}function tu(e){switch(e){case 5126:return Il;case 35664:return Ll;case 35665:return Rl;case 35666:return zl;case 35674:return Bl;case 35675:return Vl;case 35676:return Hl;case 5124:case 35670:return Ul;case 35667:case 35671:return Wl;case 35668:case 35672:return Gl;case 35669:case 35673:return Kl;case 5125:return ql;case 36294:return Jl;case 36295:return Yl;case 36296:return Xl;case 35678:case 36198:case 36298:case 36306:case 35682:return Zl;case 35679:case 36299:case 36307:return Ql;case 35680:case 36300:case 36308:case 36293:return $l;case 36289:case 36303:case 36311:case 36292:return eu}}var nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fl(t.type)}},ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tu(t.type)}},iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},au=/(\w+)(\])?(\[|\.)?/g;function ou(e,t){e.seq.push(t),e.map[t.id]=t}function su(e,t,n){let r=e.name,i=r.length;for(au.lastIndex=0;;){let a=au.exec(r),o=au.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ou(n,l===void 0?new nu(s,e,t):new ru(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new iu(s),ou(n,e)),n=e}}}var cu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);su(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function lu(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var uu=37297,du=0;function fu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var pu=new U;function mu(e){W._getMatrix(pu,W.workingColorSpace,e);let t=`mat3( ${pu.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case Hr:return[t,`LinearTransferOETF`];case Ur:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function hu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+fu(e.getShaderSource(t),r)}return i}function gu(e,t){let n=mu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var _u={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function vu(e,t){let n=_u[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var yu=new H;function bu(){return W.getLuminanceCoefficients(yu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${yu.x.toFixed(4)}, ${yu.y.toFixed(4)}, ${yu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function xu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(wu).join(`
`)}function Su(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Cu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function wu(e){return e!==``}function Tu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Eu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Du=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(e){return e.replace(Du,ku)}function ku(e,t){let n=vc[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Ou(n)}var Au=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(e){return e.replace(Au,Mu)}function Mu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Nu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Pu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Fu(e){return Pu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Iu={302:`ENVMAP_MODE_REFRACTION`};function Lu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Iu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ru={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function zu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ru[e.combine]||`ENVMAP_BLENDING_NONE`}function Bu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Fu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Lu(n),d=zu(n),f=xu(n),p=Su(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(wu).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(wu).join(`
`),g.length>0&&(g+=`
`)):(h=[Nu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(wu).join(`
`),g=[Nu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:vc.tonemapping_pars_fragment,n.toneMapping===0?``:vu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,vc.colorspace_pars_fragment,gu(`linearToOutputTexel`,n.outputColorSpace),bu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(wu).join(`
`)),o=Ou(o),o=Tu(o,n),o=Eu(o,n),s=Ou(s),s=Tu(s,n),s=Eu(s,n),o=ju(o),s=ju(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=lu(i,i.VERTEX_SHADER,v),x=lu(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=hu(i,b,`vertex`),n=hu(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new cu(i,m),w=Cu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,uu)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=du++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Vu=0,Hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uu(e),t.set(e,n)),n}},Uu=class{constructor(e){this.id=Vu++,this.code=e,this.usedTimes=0}};function Wu(e){return e===1030||e===37490||e===36285}function Gu(e,t,n,r,i,a){let o=new qi,s=new Hu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,ee;if(x){let e=yc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,ee=t.id}let k=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,j=m.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!b,ae=ie&&b.isPMREMTexture===!0,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.diffuseRoughness>0,_e=i.dispersion>0,ve=i.retroreflectivity>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=me&&!!i.anisotropyMap,Ce=he&&!!i.clearcoatMap,we=he&&!!i.clearcoatNormalMap,Te=he&&!!i.clearcoatRoughnessMap,Ee=ge&&!!i.diffuseRoughnessMap,M=ye&&!!i.iridescenceMap,De=ye&&!!i.iridescenceThicknessMap,Oe=be&&!!i.sheenColorMap,ke=be&&!!i.sheenRoughnessMap,N=!!i.specularMap,Ae=!!i.specularColorMap,P=!!i.specularIntensityMap,je=xe&&!!i.transmissionMap,Me=xe&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze=ae?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Be={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:j,batchingColor:j&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:W.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&b.mapping,envMapPMREM:ae,envMapMaxLod:ae?ze.length-1:null,envMapSize:ae?ze[0].width:null,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Wu(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:Se,clearcoat:he,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,diffuseRoughness:ge,diffuseRoughnessMap:Ee,dispersion:_e,retroreflection:ve,iridescence:ye,iridescenceMap:M,iridescenceThicknessMap:De,sheen:be,sheenColorMap:Oe,sheenRoughnessMap:ke,specularMap:N,specularColorMap:Ae,specularIntensityMap:P,transmission:xe,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:i.combine,mapUv:ne&&p(i.map.channel),aoMapUv:oe&&p(i.aoMap.channel),lightMapUv:se&&p(i.lightMap.channel),bumpMapUv:ce&&p(i.bumpMap.channel),normalMapUv:le&&p(i.normalMap.channel),displacementMapUv:ue&&p(i.displacementMap.channel),emissiveMapUv:de&&p(i.emissiveMap.channel),metalnessMapUv:fe&&p(i.metalnessMap.channel),roughnessMapUv:pe&&p(i.roughnessMap.channel),anisotropyMapUv:Se&&p(i.anisotropyMap.channel),clearcoatMapUv:Ce&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:M&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:ke&&p(i.sheenRoughnessMap.channel),specularMapUv:N&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:P&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(le||me),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ne||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&W.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&W.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=yc[t];n=is.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Bu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Ku(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function qu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ju(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||qu),r.length>1&&r.sort(t||Ju),i.length>1&&i.sort(t||Ju)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Xu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Yu,e.set(t,[i])):n>=r.length?(i=new Yu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new ha};break;case`SpotLight`:n={position:new H,direction:new H,color:new ha,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new ha,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new ha,groundColor:new ha};break;case`RectAreaLight`:n={color:new ha,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Qu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pi};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pi};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pi,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var $u=0;function ed(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function td(e){let t=new Zu,n=Qu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new Ii,o=new Ii;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ed);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=$u++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function nd(e){let t=new td(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function rd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new nd(e),t.set(n,[a])):r>=i.length?(a=new nd(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var id=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ad=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,od=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],sd=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],cd=new Ii,ld=new H,ud=new H;function dd(e,t,n){let r=new Uo,i=new pi,a=new pi,o=new ji,s=new ls,c=new us,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pi},radius:{value:4}},vertexShader:id,fragmentShader:ad}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new po;m.setAttribute(`position`,new Za(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new q(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Ni(i.x,i.y,{format:qn,type:Pn,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Jo(i.x,i.y,Nn),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Un,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Sn,d.map.depthTexture.magFilter=Sn}else l.isPointLight?(d.map=new Oc(i.x),d.map.depthTexture=new Yo(i.x,Mn)):(d.map=new Ni(i.x,i.y),d.map.depthTexture=new Jo(i.x,i.y,Mn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Un,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Tn,d.map.depthTexture.magFilter=Tn):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Sn,d.map.depthTexture.magFilter=Sn);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ld.setFromMatrixPosition(l.matrixWorld),e.position.copy(ld),ud.copy(e.position),ud.add(od[t]),e.up.copy(sd[t]),e.lookAt(ud),e.updateMatrixWorld(),n.makeTranslation(-ld.x,-ld.y,-ld.z),cd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(cd,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Ni(i.x,i.y,{format:qn,type:Pn}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function fd(e,t){function n(){let t=!1,n=new ji,r=null,i=new ji(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ni[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new ha(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new ji().fromArray(oe),le=new ji().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(pe(e.BLEND),g=!1);else if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==ee&&(j&&e.lineWidth(t),ee=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function M(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function N(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function P(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Ve(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new ha(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:M,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:Pe,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:N,texSubImage3D:Ae,compressedTexSubImage2D:P,compressedTexSubImage3D:je,scissor:Re,viewport:ze,reset:He}}function pd(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pi,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Yr(`canvas`)}function v(e,t,n){let r=1,i=Me(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Hr:W.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){ee(e.target)}function O(e){k(e.target)}function ee(e){e.removeEventListener(`dispose`,D),E(e),te(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function k(e){e.removeEventListener(`dispose`,O),E(e),ne(e)}function A(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?k(t):ee(t))}m.clear(),d.clear()}function te(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&j(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function j(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ne(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ee(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),re+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function de(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let pe={[yn]:e.REPEAT,[bn]:e.CLAMP_TO_EDGE,[xn]:e.MIRRORED_REPEAT},me={[Sn]:e.NEAREST,[Cn]:e.NEAREST_MIPMAP_NEAREST,[wn]:e.NEAREST_MIPMAP_LINEAR,[Tn]:e.LINEAR,[En]:e.LINEAR_MIPMAP_NEAREST,[Dn]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ce(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=je(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ge(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Wn,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ye(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=mc(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=mc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Me(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Me(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=je(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);ge(e.TEXTURE_CUBE_MAP,o);let ee;if(o.isDepthTexture){if(x=C(o.format===Wn,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){ee=m[t].mipmaps;for(let r=0;r<ee.length;r++){let i=ee[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(ee=o.mipmaps,T&&E){ee.length>0&&O++;let t=Me(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<ee.length;r++){let i=ee[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<ee.length;r++){let i=ee[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ae(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,N(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ae(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,N(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,N(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);Ae(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,N(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,N(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?fe(i.depthTexture,0):le(i.depthTexture,0);let u=c.__webglTexture,d=N(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ae(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ae(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function M(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ae(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=N(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Te(t)}function De(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Oe=[];function ke(t){if(t.samples>0){if(Ae(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Oe.length=0,Oe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Oe.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function N(e){return Math.min(i.maxSamples,e.samples)}function Ae(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function je(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Me(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=M,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ae,this.dispose=A}function md(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var hd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ss({vertexShader:hd,fragmentShader:gd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new Qo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vd=class extends ri{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new _d,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new pi,C=null,w=null,T=new Ws;T.viewport=new ji;let E=new Ws;E.viewport=new ji;let D=[T,E],O=new Zs,ee=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ua,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ua,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ua,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,j);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,k=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,j),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Wn:Un,a=_.stencil?Ln:Mn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ni(d.textureWidth,d.textureHeight,{format:Hn,type:On,depthTexture:new Jo(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ni(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function j(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,k=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ne(O,i);for(let e=0;e<a.length;e++)ne(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),re(e,O,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ai*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ie=null;function ae(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Ws,o.layers.enable(n),o.viewport=new ji,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Xo,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ie&&ie(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let oe=new gc;oe.setAnimationLoop(ae),this.setAnimationLoop=function(e){ie=e},this.dispose=function(){}}},yd=new Ii,bd=new U;bd.set(-1,0,0,0,1,0,0,0,1);function xd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,rs(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(yd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(bd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Sd(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Cd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wd=null;function Td(){return wd===null&&(wd=new zo(Cd,16,16,qn,Pn),wd.name=`DFG_LUT`,wd.minFilter=Tn,wd.magFilter=Tn,wd.wrapS=bn,wd.wrapT=bn,wd.generateMipmaps=!1,wd.needsUpdate=!0),wd}var Ed=class{constructor(e={}){let{canvas:t=Xr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Yn,Jn,Kn]),g=new Set([On,Mn,An,Ln,Fn,In]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,k=null;this._outputColorSpace=Br;let A=0,te=0,j=null,ne=-1,re=null,ie=new ji,ae=new ji,oe=null,se=new ha(0),ce=0,le=t.width,ue=t.height,de=1,fe=null,pe=null,me=new ji(0,0,le,ue),he=new ji(0,0,le,ue),ge=!1,_e=new Uo,ve=new Go,ye=!1,be=!1,xe=new Ii,Se=new H,Ce=new ji,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Ee(){return j===null?de:1}let M=n;function De(e,n){return t.getContext(e,n)}let Oe,ke,N,Ae,P,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,F,Ue,We,Ge,Ke,qe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Xe,!1),t.addEventListener(`webglcontextrestored`,Ze,!1),t.addEventListener(`webglcontextcreationerror`,Qe,!1),M===null){let t=`webgl2`;if(M=De(t,e),M===null)throw De(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Je()}catch(e){throw t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,Qe,!1),z(`WebGLRenderer: `+e.message),e}function Je(){Oe=new Kc(M),Oe.init(),Ge=new md(M,Oe),ke=new Ec(M,Oe,e,Ge),N=new fd(M,Oe),ke.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),O=M.createFramebuffer(),ee=M.createFramebuffer(),k=M.createFramebuffer(),Ae=new Yc(M),P=new Ku,je=new pd(M,Oe,N,P,ke,Ge,Ae),Me=new Gc(T),Ne=new _c(M),Ke=new wc(M,Ne),Pe=new qc(M,Ne,Ae,Ke),Fe=new Zc(M,Pe,Ne,Ke,Ae),F=new Xc(M,ke,je),Be=new Dc(P),Ie=new Gu(T,Me,Oe,ke,Ke,Be),Le=new xd(T,P),Re=new Xu,ze=new rd(Oe),He=new Cc(T,Me,N,Fe,p,s),Ve=new dd(T,Fe,ke),qe=new Sd(M,Ae,ke,N),Ue=new Tc(M,Oe,Ae),We=new Jc(M,Oe,Ae),Ae.programs=Ie.programs,T.capabilities=ke,T.extensions=Oe,T.properties=P,T.renderLists=Re,T.shadowMap=Ve,T.state=N,T.info=Ae}m!==1009&&(w=new $c(m,t.width,t.height,o,r,i));let Ye=new vd(T,M);this.xr=Ye,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(le,ue,!1))},this.getSize=function(e){return e.set(le,ue)},this.setSize=function(e,n,r=!0){Ye.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(le=e,ue=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(le*de,ue*de).floor()},this.setDrawingBufferSize=function(e,n,r){le=e,ue=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ie)},this.getViewport=function(e){return e.copy(me)},this.setViewport=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),N.viewport(ie.copy(me).multiplyScalar(Ee()).round())},this.getScissor=function(e){return e.copy(he)},this.setScissor=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),N.scissor(ae.copy(he).multiplyScalar(Ee()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(e){N.setScissorTest(ge=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){pe=e},this.getClearColor=function(e){return e.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=He.getClearColor(),r=He.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,M.clearBufferiv(M.COLOR,0,v))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,Qe,!1),He.dispose(),Re.dispose(),ze.dispose(),je.dispose(),P.dispose(),Me.dispose(),Fe.dispose(),Pe.dispose(),Ke.dispose(),qe.dispose(),Ie.dispose(),Ye.dispose(),Ye.removeEventListener(`sessionstart`,at),Ye.removeEventListener(`sessionend`,ot),st.stop()};function Xe(e){e.preventDefault(),Qr(`WebGLRenderer: Context Lost.`),E=!0}function Ze(){Qr(`WebGLRenderer: Context Restored.`),E=!1;let e=Ae.autoReset,t=Ve.enabled,n=Ve.autoUpdate,r=Ve.needsUpdate,i=Ve.type;Je(),Ae.autoReset=e,Ve.enabled=t,Ve.autoUpdate=n,Ve.needsUpdate=r,Ve.type=i}function Qe(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function $e(e){let t=e.target;t.removeEventListener(`dispose`,$e),et(t)}function et(e){tt(e),P.remove(e)}function tt(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=we);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=vt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ke.setup(i,r,s,n,c);let h,g=Ue;if(c!==null&&(h=Ne.get(c),g=We,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Ee()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Ee()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(Oe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function nt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ye===!0&&Be.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,mt(e,t,r),e.side=0,e.needsUpdate=!0,mt(e,t,r),e.side=2):mt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=ze.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),be=this.localClippingEnabled,ye=Be.init(this.clippingPlanes,be),ye===!0&&Be.setGlobalState(this.clippingPlanes,t),D!==null&&Ve.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];nt(o,n,t,e),r.add(o)}else nt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=P.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Oe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let rt=null;function it(e){rt&&rt(e)}function at(){st.stop()}function ot(){st.start()}let st=new gc;st.setAnimationLoop(it),typeof self<`u`&&st.setContext(self),this.setAnimationLoop=function(e){rt=e,Ye.setAnimationLoop(e),e===null?st.stop():st.start()},Ye.addEventListener(`sessionstart`,at),Ye.addEventListener(`sessionend`,ot),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ye.enabled===!0&&Ye.isPresenting===!0,r=w!==null&&(j===null||n)&&w.begin(T,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(t),t=Ye.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,j),x=ze.get(e,C.length),x.init(t),x.state.textureUnits=je.getTextureUnits(),C.push(x),xe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ve.setFromArrayCamera(t):_e.setFromProjectionMatrix(xe,Kr,t.reversedDepth),be=this.localClippingEnabled,ye=Be.init(this.clippingPlanes,be),b=Re.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Ye.enabled===!0&&Ye.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ct(e,t,-1/0,T.sortObjects)}ct(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(fe,pe),Te=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Te&&He.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),ye===!0&&Be.beginShadows();let i=x.state.shadowsArray;if(Ve.render(i,e,t),ye===!0&&Be.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ut(n,r,e,a)}Te&&He.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];lt(b,e,n,n.viewport)}}else r.length>0&&ut(n,r,e,t),Te&&He.render(e),lt(b,e,t)}j!==null&&te===0&&(je.updateMultisampleRenderTarget(j),je.updateRenderTargetMipmap(j)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ke.resetDefaultState(),ne=-1,re=null,C.pop(),C.length>0?(x=C[C.length-1],je.setTextureUnits(x.state.textureUnits),ye===!0&&Be.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ve:_e;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ce.setFromMatrixPosition(e.matrixWorld).applyMatrix4(xe);let i=Fe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Ce.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ve:_e;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Fe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ce.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ce.copy(e.boundingSphere.center)),Ce.applyMatrix4(e.matrixWorld).applyMatrix4(xe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Ce.z,s,t)}}else a.visible&&b.push(e,i,a,n,Ce.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ct(i[e],t,n,r)}function lt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ye===!0&&Be.setGlobalState(T.clippingPlanes,n),r&&N.viewport(ie.copy(r)),i.length>0&&dt(i,t,n),a.length>0&&dt(a,t,n),o.length>0&&dt(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function ut(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Oe.has(`EXT_color_buffer_half_float`)||Oe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Ni(1,1,{generateMipmaps:!0,type:e?Pn:On,minFilter:Dn,samples:Math.max(4,ke.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:W.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ie;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(se),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),Te&&He.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ye===!0&&Be.setGlobalState(T.clippingPlanes,r),dt(e,n,r),je.updateMultisampleRenderTarget(a),je.updateRenderTargetMipmap(a),Oe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ft(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(je.updateMultisampleRenderTarget(a),je.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(se,ce),d!==void 0&&(r.viewport=d),T.toneMapping=u}function dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ft(o,t,n,s,l,c)}}function ft(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function pt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function mt(e,t,n){t.isScene!==!0&&(t=we);let r=P.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ie.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ie.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,$e),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return _t(e,s),d}else s.uniforms=Ie.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ie.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Be.uniform),_t(e,s),r.needsLights=bt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=pt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function ht(e,t,n,r,i){let a=P.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=mt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function gt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=cu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function _t(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function vt(e,t,n,r,i){t.isScene!==!0&&(t=we),je.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:W.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),b=x.state.lights;if(ye===!0&&(be===!0||e!==re)){let t=e===re&&r.id===ne;Be.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Be.numPlanes||v.numIntersection!==Be.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===pt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?ht(r,t,i,s,h):mt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,ee=!1,k=w.getUniforms(),A=v.uniforms;if(N.useProgram(w.program)&&(E=!0,O=!0,ee=!0),r.id!==ne&&(ne=r.id,O=!0),E||re!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(M,`projectionMatrix`,e.projectionMatrix),k.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(M,Se.setFromMatrixPosition(e.matrixWorld)),ke.logarithmicDepthBuffer&&k.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),re!==e&&(re=e,O=!0,ee=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&k.setValue(M,`sunShadowMap`,b.state.sunShadowMap,je),b.state.directionalShadowMap.length>0&&k.setValue(M,`directionalShadowMap`,b.state.directionalShadowMap,je),b.state.spotShadowMap.length>0&&k.setValue(M,`spotShadowMap`,b.state.spotShadowMap,je),b.state.pointShadowMap.length>0&&k.setValue(M,`pointShadowMap`,b.state.pointShadowMap,je)),i.isSkinnedMesh){k.setOptional(M,i,`bindMatrix`),k.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(M,`boneTexture`,e.boneTexture,je))}i.isBatchedMesh&&(k.setOptional(M,i,`batchingTexture`),k.setValue(M,`batchingTexture`,i._matricesTexture,je),k.setOptional(M,i,`batchingIdTexture`),k.setValue(M,`batchingIdTexture`,i._indirectTexture,je),k.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(M,`batchingColorTexture`,i._colorsTexture,je));let te=n.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&F.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=Td()),O){if(k.setValue(M,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&yt(A,ee),a&&r.fog===!0&&Le.refreshFogUniforms(A,a),Le.refreshMaterialUniforms(A,r,de,ue,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;A.probesSH.value=e.textures,A.probesMin.value=e.min,A.probesMax.value=e.max,A.probesResolution.value=e.resolution}cu.upload(M,gt(v),A,je)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(cu.upload(M,gt(v),A,je),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(M,`center`,i.center),k.setValue(M,`modelViewMatrix`,i.modelViewMatrix),k.setValue(M,`normalMatrix`,i.normalMatrix),k.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];qe.update(n,w),qe.bind(n,w)}}return w}function yt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function bt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,A=t,te=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),ie.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest,N.viewport(ie),N.scissor(ae),N.setScissorTest(oe),ne=-1;return}if(o.__webglFramebuffer===void 0)je.setupRenderTarget(e);else if(o.__hasExternalTextures)je.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);je.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&je.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ie.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest}else ie.copy(me).multiplyScalar(de).floor(),ae.copy(he).multiplyScalar(de).floor(),oe=ge;if(n!==0&&(r=O),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(ie),N.scissor(ae),N.setScissorTest(oe),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}ne=-1};function xt(e){let t=P.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ke.textureFormatReadable(e.format),t.__typeReadable=ke.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=xt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,Ge.convert(c),Ge.convert(l),a)}finally{let e=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=xt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,Ge.convert(l),Ge.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await ti(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;je.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ge.convert(t.format),_=Ge.convert(t.type),v;t.isData3DTexture?(je.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(je.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(je.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,ee),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,k);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&je.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?je.setTextureCube(e,0):e.isData3DTexture?je.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?je.setTexture2DArray(e,0):je.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){A=0,te=0,j=null,N.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}},Dd={gull:{hp:1,meat:20,speed:3.3,hop:!0,temper:`shy`,damage:0,aggro:0,reach:0,cool:0},boar:{hp:1,meat:80,speed:2.2,hop:!1,temper:`fight`,damage:5,aggro:4.6,reach:1.35,cool:1.25},serpent:{hp:2,meat:200,speed:1.35,hop:!1,temper:`fight`,damage:8,aggro:3.8,reach:1.55,cool:1.45}},Od={gull:5,boar:3,serpent:2};function kd(){let e=[],t=[],n=[];return jd.gull=0,jd.boar=0,jd.serpent=0,Object.keys(Od).forEach(r=>{for(let i=Od[r];i>0;--i){let i=Pd(r,t);Md(i),e.push(i),n.push(...i.materials)}}),{animals:e,geometries:t,materials:n}}var Ad={boar:[[-3,-4],[5,-1],[0,5]],serpent:[[7,2],[-7,3]],gull:[[-2,7],[4,6],[1,-6],[-6,-1],[6,-4]]},jd={gull:0,boar:0,serpent:0};function Md(e){let t=Ad[e.species][jd[e.species]++]??[0,-8],n=t[0],r=t[1];e.group.position.set(n,0,r),e.homeX=n,e.homeZ=r,e.heading=Math.atan2(-n,-r),e.group.rotation.y=e.heading,e.mode=`graze`,e.modeTime=2.6+jd[e.species]*.35}function Nd(e,t){let n=new Y({color:e,flatShading:!0});return t.push(n),n}function Pd(e,t){let n=Dd[e],r=new K,i=[],a=[];e===`gull`?Ld(r,i,a,t):e===`boar`?Rd(r,i,a,t):zd(r,i,a,t);let o={species:e,hp:n.hp,maxHp:n.hp,meat:n.meat,hop:n.hop,speed:n.speed,group:r,legs:i,materials:a,phase:Math.random()*Math.PI*2,heading:0,mode:`wander`,modeTime:2,baseY:0,claimed:!1,flash:0,tilt:0,homeX:0,homeZ:-8,deadFor:0,temper:n.temper,damage:n.damage,aggro:n.aggro,reach:n.reach,cool:n.cool,bite:0};return r.traverse(e=>{let t=e;t.isMesh&&(t.userData.animal=o)}),o}function Fd(e,t,n,r,i,a,o,s,c){let l=new J(r,i,a);t.push(l);let u=new q(l,n);return u.position.set(o,s,c),e.add(u),u}function Id(e,t,n,r,i,a,o,s){let c=new K;c.position.set(i,o,a);let l=new J(s,o,s);n.push(l);let u=new q(l,r);u.position.y=-o/2,c.add(u),e.add(c),t.push(c)}function Ld(e,t,n,r){let i=Nd(16055295,n),a=Nd(14214378,n),o=Nd(14716976,n);Fd(e,r,i,.28,.22,.48,0,.42,0),Fd(e,r,i,.16,.14,.18,0,.52,.28),Fd(e,r,o,.08,.06,.14,0,.5,.4),Fd(e,r,a,.55,.06,.22,-.32,.46,0),Fd(e,r,a,.55,.06,.22,.32,.46,0),Id(e,t,r,o,-.06,.04,.16,.04),Id(e,t,r,o,.06,.04,.16,.04)}function Rd(e,t,n,r){let i=Nd(9067058,n),a=Nd(5911584,n),o=Nd(15983292,n);Fd(e,r,i,.46,.38,.95,0,.52,0),Fd(e,r,a,.28,.22,.28,0,.58,.52),Fd(e,r,o,.04,.08,.1,-.08,.48,.66),Fd(e,r,o,.04,.08,.1,.08,.48,.66),Id(e,t,r,a,-.14,.28,.32,.08),Id(e,t,r,a,.14,.28,.32,.08),Id(e,t,r,a,-.14,-.28,.32,.08),Id(e,t,r,a,.14,-.28,.32,.08)}function zd(e,t,n,r){let i=Nd(3107416,n),a=Nd(1985088,n),o=Nd(13232234,n);Fd(e,r,i,.42,.32,1.7,0,.36,0),Fd(e,r,a,.28,.22,.36,0,.42,.86),Fd(e,r,o,.16,.08,1.1,0,.22,-.1),Fd(e,r,a,.5,.08,.2,0,.46,-.7),Id(e,t,r,a,-.12,.4,.16,.06),Id(e,t,r,a,.12,.4,.16,.06),Id(e,t,r,a,-.12,-.5,.16,.06),Id(e,t,r,a,.12,-.5,.16,.06)}function Bd(e,t,n){let r=[];for(let i of e){i.flash>0&&(i.flash=Math.max(0,i.flash-t));let e=i.flash>0?15983283:0;for(let t of i.materials)t.emissive.setHex(e);if(i.mode===`dead`){i.deadFor+=t,i.tilt=Math.min(1,i.tilt+t*2.2),i.group.rotation.z=i.tilt*1.15,i.group.position.y=i.baseY-i.tilt*.25,i.deadFor>4&&(i.mode=`graze`,i.modeTime=1.6,i.hp=i.maxHp,i.claimed=!1,i.tilt=0,i.deadFor=0,i.group.rotation.z=0,i.group.position.set(i.homeX,i.baseY,i.homeZ));continue}if(i.temper===`fight`&&n){let e=n.x-i.group.position.x,a=n.z-i.group.position.z,o=Math.hypot(e,a);i.bite=Math.max(0,i.bite-t),o<i.aggro&&(i.mode=`charge`,i.modeTime=.7,o>.15&&(i.heading=Math.atan2(e,a)),o<i.reach&&i.bite<=0&&(i.bite=i.cool,r.push({name:i.species,damage:i.damage})))}i.modeTime-=t,i.mode===`graze`&&i.modeTime<=0?(i.mode=`wander`,i.heading+=(Math.random()-.5)*2.4,i.modeTime=1.6+Math.random()*2.4):(i.mode===`flee`||i.mode===`charge`)&&i.modeTime<=0?(i.mode=`wander`,i.modeTime=1.4):i.mode===`wander`&&i.modeTime<=0&&(i.mode=`graze`,i.modeTime=1.1+Math.random()*1.8);let a=i.mode===`graze`?0:i.mode===`charge`?i.speed*1.35:i.mode===`flee`?i.speed*1.75:i.speed;a>0&&(i.group.position.x+=Math.sin(i.heading)*a*t,i.group.position.z+=Math.cos(i.heading)*a*t);let o=i.homeX-i.group.position.x,s=i.homeZ-i.group.position.z,c=Math.hypot(o,s);(c>(i.mode===`charge`?11:6.5)||i.mode===`flee`&&c>8)&&(i.heading=Math.atan2(o,s),(i.mode===`flee`||i.mode===`charge`)&&(i.mode=`wander`,i.modeTime=1.2)),i.group.rotation.y=i.heading,i.phase+=t*(a>0?8:1.5);let l=a>0?Math.sin(i.phase)*.55:0;i.legs.forEach((e,t)=>{let n=t===0||t===3;e.rotation.x=n?l:-l}),i.hop&&a>0?i.group.position.y=Math.abs(Math.sin(i.phase))*.22:i.group.position.y=i.baseY}return r}function Vd(e,t,n){for(let r of e){if(r.mode===`dead`)continue;if(r.temper===`fight`){r.mode=`charge`,r.modeTime=2.2,r.heading=Math.atan2(t-r.group.position.x,n-r.group.position.z);continue}let e=r.group.position.x-t,i=r.group.position.z-n;e*e+i*i>20||(r.mode=`flee`,r.modeTime=1.5,r.heading=Math.atan2(e,i))}}function Hd(e){return e.userData.animal??null}var Ud=`saltwake-world`;function Wd(){try{return!!localStorage.getItem(Ud)}catch{return!1}}function Gd(e,t,n=[]){return{version:1,state:{...e,speedrun:!1,help:!1},pose:t,claimed:n.slice(0,500)}}function Kd(e){if(!e||typeof e!=`object`)return null;let t=e;if(t.version!==1||!t.state||typeof t.state!=`object`)return null;let n=t.state;if(typeof n.phase!=`string`||typeof n.health!=`number`)return null;let r=Xd(t.pose);if(!r)return null;let i={...u(),...n,speedrun:!1,help:!1};return(i.phase===`crash`||i.phase===`brief`)&&(i.phase=`world`),{version:1,state:i,pose:r,claimed:qd(t)}}function qd(e){return Array.isArray(e.claimed)?e.claimed.filter(e=>typeof e==`string`&&e.length>0&&e.length<40).slice(0,500):[]}function Jd(){try{let e=localStorage.getItem(Ud);return e?Kd(JSON.parse(e)):null}catch{return null}}function Yd(e){try{return localStorage.setItem(Ud,JSON.stringify(e)),!0}catch{return!1}}function Xd(e){if(!e||typeof e!=`object`)return null;let t=e;return!Number.isFinite(t.x)||!Number.isFinite(t.z)||!Number.isFinite(t.heading)?null:{x:t.x??0,z:t.z??13,heading:t.heading??Math.PI,pitch:Number.isFinite(t.pitch)?t.pitch:.22,aboard:!!t.aboard,boatX:Number.isFinite(t.boatX)?t.boatX:1.7,boatZ:Number.isFinite(t.boatZ)?t.boatZ:17.8,boatHeading:Number.isFinite(t.boatHeading)?t.boatHeading:0,inside:!!t.inside}}function Z(e,t,n,r,i,a,o){return{w:e,h:t,d:n,x:r,y:i,z:a,color:o}}var Zd={howler:{speed:.62,parts:[Z(.42,.36,.34,0,.4,0,6961698),Z(.28,.26,.26,0,.68,.1,2759186),Z(.22,.16,.12,0,.78,.16,12886122),Z(.1,.32,.1,-.22,.22,.06,4860438)]},toucan:{speed:.7,parts:[Z(.28,.26,.32,0,.42,0,1842204),Z(.16,.14,.14,0,.58,.16,15782474),Z(.1,.1,.42,0,.52,.38,16738842),Z(.34,.06,.2,0,.5,-.08,2371624)]},tapir:{speed:.5,parts:[Z(.7,.42,.4,0,.36,0,4866104),Z(.22,.18,.28,0,.4,.32,14207152),Z(.1,.22,.1,-.22,.16,.1,3813932),Z(.1,.22,.1,.22,.16,.1,3813932),Z(.08,.08,.16,0,.4,-.28,2761758)]},sloth:{speed:.28,parts:[Z(.4,.28,.32,0,.34,0,12887412),Z(.2,.18,.18,0,.5,.16,9071168),Z(.08,.34,.08,-.22,.2,.08,11044952),Z(.08,.34,.08,.22,.2,.08,11044952)]},capybara:{speed:.46,parts:[Z(.72,.36,.4,0,.28,0,9069112),Z(.28,.2,.22,0,.4,.24,6965804),Z(.08,.1,.06,-.1,.52,.28,4862492),Z(.08,.1,.06,.1,.52,.28,4862492)]},jaguar:{speed:.85,parts:[Z(.85,.32,.36,0,.36,0,14196800),Z(.12,.12,.12,-.16,.46,.08,2759184),Z(.12,.12,.12,.18,.46,-.06,2759184),Z(.22,.2,.22,0,.46,.32,12881976),Z(.1,.28,.1,-.22,.16,.08,12093488),Z(.1,.28,.1,.22,.16,.08,12093488),Z(.12,.1,.28,0,.4,-.36,14196800)]},salamander:{speed:.55,parts:[Z(.22,.12,.7,0,.12,0,16734744),Z(.16,.08,.4,0,.16,.04,15777856),Z(.1,.08,.1,0,.16,.32,1708560),Z(.08,.06,.22,0,.1,-.4,14698512)]},"soot goat":{speed:.5,parts:[Z(.48,.4,.32,0,.42,0,6972512),Z(.22,.2,.2,0,.68,.16,9077888),Z(.06,.22,.06,-.08,.86,.18,15129800),Z(.06,.22,.06,.08,.86,.18,15129800),Z(.16,.12,.1,0,.58,.24,14208964),Z(.1,.28,.1,-.14,.18,.06,1841688),Z(.1,.28,.1,.14,.18,.06,1841688)]},iguana:{speed:.42,parts:[Z(.55,.16,.22,0,.2,0,4024882),Z(.08,.14,.08,0,.32,.02,8955976),Z(.08,.14,.08,0,.32,-.14,8955976),Z(.16,.12,.18,0,.24,.32,4880954),Z(.08,.06,.4,0,.16,-.4,3101736)]},"ember bug":{speed:.36,parts:[Z(.28,.14,.36,0,.12,0,1708560),Z(.18,.1,.22,0,.22,0,16738848),Z(.06,.08,.06,-.1,.08,.14,3811874),Z(.06,.08,.06,.1,.08,.14,3811874)]},manta:{speed:.7,parts:[Z(1.15,.08,.55,0,.2,0,2767432),Z(.4,.1,.28,0,.16,.08,14212580),Z(.16,.08,.4,0,.18,.4,3820120),Z(.08,.04,.5,0,.16,-.4,1976884)]},seahorse:{speed:.32,parts:[Z(.12,.36,.12,0,.32,0,15778378),Z(.1,.12,.14,0,.52,.06,14721056),Z(.08,.14,.08,0,.16,-.08,13668376),Z(.14,.1,.04,0,.4,-.08,15778378)]},octopus:{speed:.35,parts:[Z(.36,.28,.36,0,.28,0,12868216),Z(.08,.16,.08,-.16,.1,.12,11028584),Z(.08,.16,.08,.16,.1,.12,11028584),Z(.08,.16,.08,-.1,.1,-.12,11028584),Z(.08,.16,.08,.1,.1,-.12,11028584),Z(.06,.06,.06,-.08,.36,.16,1708568),Z(.06,.06,.06,.08,.36,.16,1708568)]},"sea turtle":{speed:.32,parts:[Z(.55,.18,.42,0,.2,0,6965810),Z(.22,.1,.18,0,.16,.28,3832408),Z(.22,.04,.14,-.28,.14,.04,3107402),Z(.22,.04,.14,.28,.14,.04,3107402)]},shrimp:{speed:.8,parts:[Z(.16,.1,.32,0,.12,0,16747130),Z(.1,.08,.1,0,.16,.18,16761008),Z(.12,.04,.08,0,.14,-.18,14708840)]},trike:{speed:.4,parts:[Z(1.05,.5,.62,0,.5,0,6978112),Z(.7,.4,.12,0,.85,.36,12891274),Z(.08,.08,.28,0,.72,.58,15128496),Z(.08,.16,.08,-.16,.95,.4,15128496),Z(.08,.16,.08,.16,.95,.4,15128496),Z(.14,.32,.14,-.28,.2,.12,5925428),Z(.14,.32,.14,.28,.2,.12,5925428)]},ankylo:{speed:.28,parts:[Z(.95,.32,.55,0,.28,0,5924928),Z(.2,.16,.2,-.22,.48,.08,6969920),Z(.2,.16,.2,.22,.48,-.06,6969920),Z(.16,.12,.4,0,.22,-.48,4872244),Z(.22,.18,.22,0,.28,-.72,6969920)]},compy:{speed:1.25,parts:[Z(.22,.16,.28,0,.28,0,9083464),Z(.12,.1,.14,0,.4,.16,7637048),Z(.06,.16,.06,-.06,.1,.04,6978098),Z(.06,.16,.06,.06,.1,.04,6978098),Z(.06,.06,.22,0,.3,-.22,10136152)]},penguin:{speed:.45,parts:[Z(.28,.42,.24,0,.28,0,1710618),Z(.16,.28,.08,0,.26,.12,16053492),Z(.1,.08,.12,0,.48,.14,16747056),Z(.16,.06,.12,-.16,.32,0,1118481),Z(.1,.06,.12,0,.06,.04,16747056)]},seal:{speed:.4,parts:[Z(.7,.28,.36,0,.2,0,9082016),Z(.22,.16,.2,0,.28,.32,10134704),Z(.2,.06,.16,-.28,.1,.06,8029328),Z(.2,.06,.16,.28,.1,.06,8029328)]},walrus:{speed:.3,parts:[Z(.95,.42,.55,0,.32,0,9071192),Z(.32,.24,.28,0,.42,.36,10123364),Z(.06,.06,.28,-.08,.36,.52,15787728),Z(.06,.06,.28,.08,.36,.52,15787728),Z(.22,.08,.16,-.4,.12,.08,8019020),Z(.22,.08,.16,.4,.12,.08,8019020)]},"snow fox":{speed:.9,parts:[Z(.48,.26,.28,0,.28,0,16052714),Z(.2,.16,.18,0,.42,.18,16775924),Z(.08,.12,.06,-.08,.54,.16,2763306),Z(.08,.12,.06,.08,.54,.16,2763306),Z(.16,.12,.28,0,.32,-.24,15262424)]},hare:{speed:1.1,parts:[Z(.32,.28,.4,0,.28,0,16250094),Z(.06,.28,.06,-.06,.52,.1,15773880),Z(.06,.28,.06,.06,.52,.1,15773880),Z(.08,.16,.08,-.1,.12,-.08,15262940),Z(.08,.16,.08,.1,.12,-.08,15262940)]},fennec:{speed:.85,parts:[Z(.4,.26,.28,0,.28,0,14726506),Z(.18,.14,.16,0,.4,.16,15782048),Z(.16,.22,.06,-.12,.58,.08,15782048),Z(.16,.22,.06,.12,.58,.08,15782048),Z(.14,.1,.22,0,.32,-.22,13673562)]},jerboa:{speed:1.2,parts:[Z(.18,.16,.22,0,.28,0,12886122),Z(.1,.1,.1,0,.4,.1,14203016),Z(.06,.22,.06,-.06,.14,-.04,12095576),Z(.06,.22,.06,.06,.14,-.04,12095576),Z(.04,.04,.28,0,.3,-.22,12886122)]},scorpion:{speed:.4,parts:[Z(.32,.12,.4,0,.14,0,12868136),Z(.12,.1,.12,-.18,.16,.22,14708784),Z(.12,.1,.12,.18,.16,.22,14708784),Z(.08,.08,.22,0,.28,-.28,9058840),Z(.1,.1,.1,0,.36,-.36,6957584)]},ostrich:{speed:.72,parts:[Z(.46,.36,.4,0,.7,0,2763306),Z(.12,.48,.12,0,1.05,.16,15259848),Z(.14,.12,.18,0,1.28,.22,15259848),Z(.08,.5,.08,-.1,.28,.04,14731432),Z(.08,.5,.08,.1,.28,.04,14731432)]},beetle:{speed:.35,parts:[Z(.32,.18,.4,0,.16,0,1844272),Z(.24,.12,.26,0,.28,-.02,2779720),Z(.08,.1,.08,-.12,.08,.12,1185824),Z(.08,.1,.08,.12,.08,.12,1185824)]},rabbit:{speed:.9,parts:[Z(.28,.24,.36,0,.24,0,12880482),Z(.06,.24,.06,-.06,.46,.08,15777968),Z(.06,.24,.06,.06,.46,.08,15777968),Z(.1,.08,.1,0,.28,-.18,16052458)]},peacock:{speed:.4,parts:[Z(.28,.32,.36,0,.4,0,1723016),Z(.1,.16,.16,0,.58,.2,1456234),Z(.5,.55,.08,0,.55,-.28,1739336),Z(.12,.12,.06,0,.62,-.3,15777856),Z(.06,.22,.06,-.08,.14,.04,15259808),Z(.06,.22,.06,.08,.14,.04,15259808)]},goat:{speed:.52,parts:[Z(.46,.36,.3,0,.4,0,16052456),Z(.2,.18,.18,0,.64,.14,16775924),Z(.06,.16,.06,-.08,.8,.16,6969928),Z(.06,.16,.06,.08,.8,.16,6969928),Z(.1,.24,.1,-.12,.16,.04,15261908),Z(.1,.24,.1,.12,.16,.04,15261908)]},deer:{speed:.75,parts:[Z(.55,.36,.28,0,.62,0,11040840),Z(.12,.28,.12,0,.92,.16,12619872),Z(.16,.14,.16,0,1.1,.22,12093528),Z(.16,.04,.04,-.12,1.2,.2,12888184),Z(.16,.04,.04,.12,1.2,.2,12888184),Z(.08,.4,.08,-.14,.24,.06,9069624),Z(.08,.4,.08,.14,.24,.06,9069624)]},tortoise:{speed:.22,parts:[Z(.5,.28,.4,0,.24,0,9071160),Z(.16,.1,.16,0,.16,.26,6982216),Z(.1,.08,.1,-.16,.08,.12,5929530),Z(.1,.08,.1,.16,.08,.12,5929530)]},pheasant:{speed:.55,parts:[Z(.3,.22,.4,0,.32,0,9056304),Z(.12,.1,.16,0,.44,.2,14725184),Z(.08,.04,.36,0,.36,-.28,12868136),Z(.06,.18,.06,-.08,.12,.04,15259808),Z(.06,.18,.06,.08,.12,.04,15259808)]},cassowary:{speed:2.7,fight:{hp:2,damage:6},parts:[Z(.42,.48,.38,0,.78,0,1711138),Z(.14,.42,.14,0,1.15,.12,2779802),Z(.16,.14,.18,0,1.38,.2,1711138),Z(.08,.14,.1,0,1.52,.16,6965800),Z(.1,.55,.1,-.1,.32,.04,12886122),Z(.1,.55,.1,.1,.32,.04,12886122)]},"lava drake":{speed:1.8,fight:{hp:3,damage:8},parts:[Z(.9,.28,.42,0,.36,0,12859416),Z(.28,.2,.26,0,.48,.36,16738848),Z(.5,.06,.28,-.4,.5,0,9052176),Z(.5,.06,.28,.4,.5,0,9052176),Z(.16,.1,.4,0,.32,-.42,14700568),Z(.08,.16,.08,0,.62,.42,15777856)]},shark:{speed:2.5,fight:{hp:3,damage:8},parts:[Z(1.15,.28,.32,0,.32,0,9082788),Z(.22,.28,.08,0,.55,0,6977668),Z(.28,.16,.22,.48,.3,0,14212838),Z(.16,.1,.22,-.55,.34,0,5924980),Z(.06,.06,.08,.58,.24,.08,16054267)]},"polar bear":{speed:1.7,fight:{hp:4,damage:10},parts:[Z(1.05,.5,.58,0,.5,0,16054267),Z(.36,.28,.32,0,.62,.4,16775924),Z(.1,.08,.08,0,.58,.56,1710618),Z(.16,.28,.16,-.28,.2,.16,15002354),Z(.16,.28,.16,.28,.2,.16,15002354),Z(.14,.12,.16,0,.46,-.36,16054267)]},"sand viper":{speed:2.2,fight:{hp:2,damage:7},parts:[Z(.22,.14,1.05,0,.16,0,13938794),Z(.16,.12,.28,0,.28,.48,12868136),Z(.08,.08,.12,0,.32,.62,1708560),Z(.1,.08,.2,0,.2,-.4,15123066)]},hornet:{speed:3.1,fight:{hp:1,damage:4},parts:[Z(.22,.16,.32,0,.28,0,15777856),Z(.16,.1,.12,0,.3,.04,1710618),Z(.28,.04,.14,-.16,.36,0,15265524),Z(.28,.04,.14,.16,.36,0,15265524),Z(.06,.06,.14,0,.24,-.2,1710618)]}},Qd={x:-8,z:1},$d={x:Qd.x+1.8,z:Qd.z-1.4},ef={x:Qd.x+2.2,z:Qd.z+1.3},tf={x:11,z:6},nf={x:-3.4,z:8},rf=[{id:`houseA`,x:-6.5,z:-4.5},{id:`houseB`,x:-3.2,z:-4.5},{id:`market`,x:-6.5,z:-7.2},{id:`bakery`,x:-3.2,z:-7.2}],af={x:0,z:19.6},of={x:1.7,z:24.2},sf={x:5,z:12},cf={x:0,z:-13},lf=-70,uf={x:.2,z:80.2},df={x:2.55,z:77.45},ff={x:-2.8,z:79.4},pf=[`Nia: The handset was in the tail.`,`Ren: A knife cuts wire out of vine.`,`Sol: A boar before dark, and I can pay.`,`Pim: Raw meat turns after two nights.`],mf=5;function hf(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}var gf={jungle:`A packed jungle. A cassowary charges. Trunks hold glow sap.`,volcano:`Black rock. A lava drake hunts. Vents hold cinder.`,reef:`Coral shallows. A shark hunts. Clams hold pearls.`,fossil:`Fern and bone. A raptor, a rex, and a crocodile bite.`,frost:`Ice and meltwater. A polar bear hunts.`,dune:`Hot sand. A sand viper hunts.`,bloom:`A flower cliff. Hornets hunt.`};function _f(e,t,n,r,i){let a;try{a=new Ed({antialias:!1,alpha:!1})}catch{return vf()}if(!a.getContext())return a.dispose(),vf();a.setSize(320,200,!1),a.setPixelRatio(1),a.outputColorSpace=Br;let o=a.domElement;o.style.width=`320px`,o.style.height=`200px`,o.style.imageRendering=`pixelated`,e.appendChild(o);let s=new va,c=new ha(F.sky);s.background=c;let l=new _a(F.sky,28,96);s.fog=l;let u=new Ws(55,320/200,.08,220);u.rotation.order=`YXZ`,s.add(u);let d=new Ms(F.skyLight,F.grassDark,.95);s.add(d);let h=new qs(F.cream,.85);h.position.set(-8,14,6),s.add(h);let g=[],_=[],v=new Map;function y(e){let t=v.get(e);if(t)return t;let n=new Y({color:e,flatShading:!0});return v.set(e,n),g.push(n),n}let b=yf(),x=new Y({map:b,transparent:!0,alphaTest:.5}),S=new Y({color:F.water});g.push(x,S);let C=new Zo(150,40),w=new Qo(vt.r*2,vt.r*2),T=new q(C,S),E=new q(w,x);T.rotation.x=-Math.PI/2,E.rotation.x=-Math.PI/2,T.position.y=-.28,E.position.y=.02,s.add(T,E),_.push(E);let D=new q(new Zo(18,28),S);D.rotation.x=-Math.PI/2,D.position.y=.2,D.visible=!1,s.add(D);let ee=new Y({color:14019317,flatShading:!0});g.push(ee);let k=[];for(let e=0;e<36;e+=1){let e=new q(new J(.04,.45,.04),ee);e.visible=!1,s.add(e),k.push(e)}let A=new Y({color:F.wood,flatShading:!0}),te=new Y({color:F.leaf,flatShading:!0}),ne=new Y({color:F.grass,flatShading:!0}),re=new Y({color:9083555,flatShading:!0}),ie=new Y({color:4160048,flatShading:!0}),ae=new Y({color:10697515,flatShading:!0}),oe=new Y({color:7049018,flatShading:!0}),ce=new Y({color:14862226,flatShading:!0}),le=new Y({color:3107416,flatShading:!0}),ue=new Y({color:9067058,flatShading:!0}),de=new Y({color:14716976,flatShading:!0}),pe=new Y({color:14212838,flatShading:!0}),me=new Y({color:3810324,flatShading:!0}),he=new Y({color:13038170,emissive:8962096,emissiveIntensity:.45,flatShading:!0}),ge=new Y({color:16734754,emissive:16723984,emissiveIntensity:.6,flatShading:!0}),_e=new Y({color:16250111,emissive:14213375,emissiveIntensity:.35,flatShading:!0}),ve=new Y({color:15245344,emissive:12875792,emissiveIntensity:.35,flatShading:!0});g.push(A,te,ne,re,ie,ae,oe,ce,le,ue,de,pe,me,he,ge,_e,ve);let xe=new J(.18,1.7,.18),Se=new J(1.15,.08,.28),Ce=new J(.32,2.6,.32),we=new J(1.7,.85,1.7),Te=new J(.16,2.1,.16),Ee=new J(.95,1.2,.95),M=new J(.2,1.35,.2),De=new J(.16,.45,.16),Oe=new J(.62,.38,.62),ke=new J(.1,.75,.38),N=new J(1.35,.22,.24),je=new J(.22,1.15,.22),Me=new J(.12,.95,.12),Ne=new J(.85,.08,.55),Pe=new Set([xe.uuid,Se.uuid,Ce.uuid,we.uuid,Te.uuid,Ee.uuid,M.uuid,De.uuid,Oe.uuid,ke.uuid,N.uuid,je.uuid,Me.uuid,Ne.uuid]),Fe=[],Ie=[],Re={wood:A,stone:re,fiber:ie,meal:oe,raw:ae,sap:he,cinder:ge,pearl:_e,amber:ve};function Be(e,t,n,r,i){let a=new q(new J(.28,.22,.28),Re[e]);a.position.set(n,.28,r),s.add(a);let o={kind:e,amount:t,mesh:a,respawn:i,wait:0};return Fe.push(o),o}for(let[e,t,n]of[[`wood`,2,10],[`wood`,-3,8],[`wood`,4,-2],[`wood`,-6,-6],[`stone`,6,6],[`stone`,-2,-4],[`stone`,8,-3],[`fiber`,-4,4],[`fiber`,1,-8],[`fiber`,7,2],[`meal`,3,11],[`meal`,-7,7],[`meal`,5,-7]])Be(e,1,t,n,18);function Ve(e,t,n,r=s,i=e,a=t){let o=new K,c=new q(xe,A);c.position.y=.85,o.add(c),n&&_.push(c);for(let e=0;e<5;e+=1){let t=new q(Se,e%2==0?te:ne);t.position.y=1.7,t.rotation.y=e/5*Math.PI,t.rotation.z=.5,o.add(t)}return o.position.set(e,0,t),r.add(o),n&&Ie.push({kind:`palm`,label:`palm`,group:o,x:i,z:a,wait:0,fall:-1,fallX:0,fallZ:0}),o}for(let[e,t]of[[-5,-2],[2,-6],[8,1],[-10,5],[0,3],[-2,9],[12,-4],[-12,-6]])Ve(e,t,!0);Ve(-14,8,!1),Ve(14,9,!1);for(let[e,t]of Wt(16,2.6))Ve(e,t,!0);for(let[e,t]of Wt(10,2.4))Xt(e,t,3111476);function He(e,t,n=s,r=e,i=t){let a=new K,o=new q(new J(.7,.4,.6),re),c=new q(new J(.4,.28,.4),re);o.position.y=.2,c.position.set(.35,.16,.2),a.add(o,c),a.position.set(e,0,t),n.add(a),_.push(o),Ie.push({kind:`rocks`,label:`rock`,group:a,x:r,z:i,wait:0,fall:-1,fallX:0,fallZ:0})}He(5,-5),He(-8,-4),He(10,5),He(-1,8);function Ue(e,t,n=s,r=e,i=t){let a=new K,o=new q(new J(.08,.9,.08),ie),c=new q(new J(.7,.08,.08),ie);o.position.y=.45,c.position.set(.2,.8,0),a.add(o,c),a.position.set(e,0,t),n.add(a),Ie.push({kind:`vines`,label:`vine`,group:a,x:r,z:i,wait:0,fall:-1,fallX:0,fallZ:0})}Ue(-6,8),Ue(3,5),Ue(9,-2);let We=new Y({color:16738840,emissive:16730640,emissiveIntensity:.95,flatShading:!0}),Ge=new Y({color:2893862,flatShading:!0}),Ke=new Y({color:16734858,flatShading:!0}),qe=new Y({color:16742962,flatShading:!0}),Je=new Y({color:11815636,flatShading:!0}),Ye=new Y({color:3854552,flatShading:!0}),Xe=new Y({color:15269878,emissive:10154239,emissiveIntensity:.85,flatShading:!0}),Ze=new Y({color:10151679,emissive:6738175,emissiveIntensity:.7,flatShading:!0}),Qe=new Y({color:16751320,emissive:16740544,emissiveIntensity:.7,flatShading:!0}),$e=new Y({color:16769162,emissive:16760896,emissiveIntensity:.6,flatShading:!0}),et=new Y({color:9071176,flatShading:!0}),tt=new Y({color:6047282,flatShading:!0}),nt=new Y({color:4102754,flatShading:!0}),rt=new Y({color:2779200,flatShading:!0}),it=new Y({color:3842272,flatShading:!0}),at=new Y({color:16762954,flatShading:!0}),ot=new Y({color:4114628,flatShading:!0}),st=new Y({color:15267583,flatShading:!0}),ct=new Y({color:3111480,flatShading:!0}),lt=new Y({color:7236204,flatShading:!0}),ut=new Y({color:15753368,flatShading:!0}),dt=new Y({color:16760906,flatShading:!0}),ft=new Y({color:15983292,flatShading:!0}),pt=new Y({color:3811880,flatShading:!0}),mt=new Y({color:16738848,flatShading:!0}),ht=new Y({color:14826314,flatShading:!0}),gt=new Y({color:15757376,flatShading:!0}),_t=new Y({color:6982194,flatShading:!0}),yt=new Y({color:4084768,flatShading:!0}),bt=new Y({color:4876840,flatShading:!0}),xt=new Y({color:12891274,flatShading:!0}),Ct=new Y({color:15128496,flatShading:!0}),wt=new Y({color:3111476,flatShading:!0}),Tt=new Y({color:1841174,flatShading:!0}),kt=new Y({color:9070664,flatShading:!0}),At=new Y({color:4020786,flatShading:!0}),jt=new Y({color:12868152,flatShading:!0}),Mt={jungle:new Y({map:yf(`jungle`),transparent:!0,alphaTest:.5}),volcano:new Y({map:yf(`volcano`),transparent:!0,alphaTest:.5}),reef:new Y({map:yf(`reef`),transparent:!0,alphaTest:.5}),fossil:new Y({map:yf(`fossil`),transparent:!0,alphaTest:.5}),frost:new Y({map:yf(`frost`),transparent:!0,alphaTest:.5}),dune:new Y({map:yf(`dune`),transparent:!0,alphaTest:.5}),bloom:new Y({map:yf(`bloom`),transparent:!0,alphaTest:.5})};g.push(We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,yt,bt,xt,Ct,wt,Tt,ve,kt,At,jt,Mt.jungle,Mt.volcano,Mt.reef,Mt.fossil,Mt.frost,Mt.dune,Mt.bloom);let Nt=[],Pt=new Map,Ft=new Set(i??[]);function I(e,t,n,r,i,a,o,s){let c=new q(new J(t,n,r),s);return c.position.set(i,a,o),e.add(c),c}function It(e,t,n,r,i,a){let o=new K;e===`sap`?(I(o,.2,.7,.2,0,.35,0,ct),I(o,.3,.22,.3,0,.78,0,he)):e===`vent`?(I(o,.55,.26,.45,0,.14,0,Ge),I(o,.22,.16,.22,.04,.32,0,ge)):e===`clam`?(I(o,.4,.14,.28,0,.1,0,_e),I(o,.16,.1,.12,.04,.18,.02,ft)):(I(o,.34,.28,.34,0,.16,0,A),I(o,.22,.22,.22,.04,.4,.04,ve)),o.position.set(t,0,n),r.add(o),Ie.push({kind:e,label:e,group:o,x:i,z:a,wait:0,fall:-1,fallX:0,fallZ:0})}function Lt(e,t,n,r){let i=new K,a=`monkey`,o=`sap`,s;e.theme===`jungle`?(s=I(i,.52,.4,.4,0,.38,0,et),I(i,.34,.3,.3,0,.72,.12,tt),I(i,.12,.36,.12,.28,.5,0,tt),I(i,.1,.28,.1,-.22,.22,.08,tt)):e.theme===`volcano`?(s=I(i,.9,.22,.28,0,.2,0,pt),I(i,.28,.1,.16,.28,.28,0,mt),I(i,.22,.16,.18,.48,.24,0,pt),I(i,.24,.12,.16,-.42,.22,0,pt),a=`lizard`,o=`cinder`):(s=I(i,.58,.22,.46,0,.18,0,ht),I(i,.22,.14,.18,.36,.22,.18,gt),I(i,.22,.14,.18,.36,.22,-.18,gt),a=`crab`,o=`pearl`);let c={name:a,drop:o,group:i,body:s,isle:e,lx:n,lz:r,heading:n,hp:1,maxHp:1,alive:!0,wait:0,hostile:!1,tamed:!1,world:!1,bite:0,ride:!1,speed:.55,damage:0};s.userData.critter=c,_.push(s),i.position.set(n,0,r),t.add(i),Nt.push(c)}function Rt(e){return e.world?{x:e.lx,z:e.lz}:{x:e.isle.x+e.lx,z:e.isle.z+e.lz}}function zt(e,t,n,r,i){let a=new K,o,s=`raw`,c=1,l=!1,u=!1,d=.8,f=0;e===`raptor`?(o=I(a,.72,.36,.42,0,.72,0,_t),I(a,.18,.14,.7,0,.68,-.5,yt),I(a,.18,.28,.2,0,.92,.26,_t),I(a,.26,.2,.34,0,1.02,.46,yt),I(a,.14,.06,.16,0,.92,.62,Ct),I(a,.12,.46,.12,-.16,.28,.04,yt),I(a,.12,.46,.12,.16,.28,.04,yt),c=3,l=!0,u=!0,d=3.4,f=6,s=`amber`):e===`rex`?(o=I(a,1.15,.7,.72,0,1.15,0,bt),I(a,.34,.26,1.1,0,1.02,-.82,bt),I(a,.4,.4,.34,0,1.55,.4,bt),I(a,.52,.38,.58,0,1.7,.76,xt),I(a,.26,.08,.2,0,1.5,1.02,Ct),I(a,.16,.72,.16,-.28,.4,0,bt),I(a,.16,.72,.16,.28,.4,0,bt),I(a,.1,.22,.1,-.46,1.15,.18,xt),I(a,.1,.22,.1,.46,1.15,.18,xt),c=5,l=!0,u=!0,d=2.35,f=12,s=`raw`):e===`croc`?(o=I(a,.42,.16,1.35,0,.16,0,At),I(a,.26,.12,.38,0,.2,.72,At),I(a,.48,.06,.2,0,.26,-.1,Ct),I(a,.1,.08,.16,-.22,.08,.35,At),I(a,.1,.08,.16,.22,.08,.35,At),c=3,l=!0,d=1.5,f=8):(o=I(a,.28,.14,.36,0,.14,0,kt),I(a,.14,.1,.14,0,.2,.16,kt),I(a,.06,.05,.16,0,.16,-.22,kt),d=1.15);let p={name:e,drop:s,group:a,body:o,isle:t,lx:r,lz:i,heading:r,hp:c,maxHp:c,alive:!0,wait:0,hostile:l,tamed:!1,world:!1,bite:0,ride:u,speed:d,damage:f};return o.userData.critter=p,_.push(o),a.position.set(r,0,i),n.add(a),Nt.push(p),p}function Bt(e,t,n,r,i){let a=Zd[e],o=new K,s=null;for(let e of a.parts){let t=I(o,e.w,e.h,e.d,e.x,e.y,e.z,y(e.color));s||=t}if(!s)return;let c=`fight`in a?a.fight:void 0,l={name:e,drop:`raw`,group:o,body:s,isle:t,lx:r,lz:i,heading:r,hp:c?.hp??1,maxHp:c?.hp??1,alive:!0,wait:0,hostile:!!c,tamed:!1,world:!1,bite:0,ride:!1,speed:a.speed,damage:c?.damage??0};s.userData.critter=l,_.push(s),o.position.set(r,0,i),n.add(o),Nt.push(l)}function Vt(e,t,n,r){r.forEach((i,a)=>{let o=a/r.length*Math.PI*2+n()*.55,s=e.r*(.2+n()*.28);Bt(i,e,t,Math.sin(o)*s,Math.cos(o)*s)})}function Ht(e,t,n,r,i,a,o,s){let c=new K;I(c,.22,.1,.16,0,0,0,y(a)),I(c,.28,.04,.12,-.2,.02,0,y(o)),I(c,.28,.04,.12,.2,.02,0,y(o)),c.position.set(n,i,r),e.add(c),t.motes.push({mesh:c,kind:`fairy`,phase:s,radius:i,ox:n})}function Ut(e,t){return Math.hypot(e,t)<8||Math.hypot(e,t)>vt.r-2.4?!1:[[Qd.x,Qd.z,5.2],[nf.x,nf.z,4.4],[-4.8,-5.8,4.8],[tf.x,tf.z,3.6],[0,-13,4.6],[0,13,3.6],[0,18,5.2]].every(([n,r,i])=>Math.hypot(e-n,t-r)>i)}function Wt(e,t){let n=hf(11+e),r=[],i=0;for(;r.length<e&&i<e*40;){i+=1;let e=n()*Math.PI*2,a=8+n()*(vt.r-10.6),o=Math.cos(e)*a,s=Math.sin(e)*a;Ut(o,s)&&(r.some(([e,n])=>(e-o)**2+(n-s)**2<t*t)||r.push([o,s]))}return r}function Gt(e,t,n,r,i=2.15){let a=[],o=0;for(;a.length<n&&o<n*24;){o+=1;let n=t()*Math.PI*2,s=Math.sqrt(t())*e.r*.88,c=Math.cos(n)*s,l=Math.sin(n)*s;r.some(([e,t])=>(e-c)**2+(t-l)**2<i*i)||(r.push([c,l]),a.push([c,l]))}return a}function Kt(e,t,n,r,i,a,o){let s=new K,c=o(s);s.position.set(n,0,r),t.add(s),c&&_.push(c),Ie.push({kind:i,label:a,group:s,x:e.x+n,z:e.z+r,wait:0,fall:-1,fallX:0,fallZ:0})}function qt(e,t,n,r,i){Kt(e,t,n,r,`tree`,`canopy`,e=>{let t=new q(Ce,A);t.position.y=1.3;let n=new q(we,i()>.45?te:y(1862194));return n.position.y=2.75,e.add(t,n),t})}function Jt(e,t,n,r){Kt(e,t,n,r,`tree`,`pine`,e=>{let t=new q(Te,y(6965810));t.position.y=1.05;let n=new q(Ee,y(3107416));n.position.y=2.15;let r=new q(Ee,y(16055295));return r.position.y=2.75,r.scale.set(.62,.5,.62),e.add(t,n,r),t})}function Yt(e,t,n,r){Kt(e,t,n,r,`plant`,`cactus`,e=>{let t=new q(M,y(4033092));t.position.y=.68;let n=new q(De,y(4033092));return n.position.set(.24,.9,0),e.add(t,n),t})}function Xt(e,t,n,r=s){let i=new q(Oe,y(n));i.position.set(e,.2,t),r.add(i)}function Zt(e,t,n,r,i){Kt(e,t,n,r,`plant`,`fern`,e=>{let t=new q(ke,wt);return t.position.y=.38,t.rotation.y=i()*Math.PI,e.add(t),t})}function Qt(e,t,n,r,i){Kt(e,t,n,r,`log`,`log`,e=>{let t=new q(N,me);return t.position.y=.14,t.rotation.y=i()*Math.PI,e.add(t),t})}function $t(e,t,n,r){Kt(e,t,n,r,`tree`,`dead tree`,e=>{let t=new q(je,y(2761762));return t.position.y=.55,e.add(t),t})}function en(e,t,n,r){Kt(e,t,n,r,`plant`,`kelp`,e=>{let t=new q(Me,y(3115594));return t.position.y=.48,e.add(t),t})}function tn(e,t,n){let r=new q(Ne,We);r.position.set(t,.06,n),e.add(r)}function nn(e,t,n,r){Kt(e,t,n,r,`tree`,`giant tree`,e=>{let t=I(e,.9,4.6,.9,0,2.3,0,A);return I(e,.5,1.3,1.5,-.85,.7,0,A),I(e,.5,1.3,1.5,.85,.7,0,A),I(e,3.6,1.1,3.6,0,4.8,0,y(1332776)),I(e,2.2,.7,2.2,0,5.45,0,y(3115580)),I(e,.08,1.5,.08,-.9,3.3,.4,ie),I(e,.08,1.7,.08,.7,3.2,-.35,ie),t})}function rn(e,t,n,r,i){Kt(e,t,n,r,`tree`,`flowering tree`,e=>{let t=new q(Te,A);t.position.y=1.05;let n=new q(we,y(i));return n.position.y=2.15,n.scale.set(.55,.45,.55),e.add(t,n),t})}function an(e){let t=new K;t.position.set(e.x,0,e.z);let n=new q(new Qo(e.r*2,e.r*2),Mt[e.theme]);n.rotation.x=-Math.PI/2,n.position.y=.04,t.add(n),s.add(t);let r={isle:e,root:t,drops:[],nodes:[],shells:null,motes:[]},i=Ie.length,a=hf(e.seed),o=(n,r)=>Ve(n,r,!0,t,e.x+n,e.z+r),c=(n,r)=>He(n,r,t,e.x+n,e.z+r),l=(n,r)=>Ue(n,r,t,e.x+n,e.z+r);return e.theme===`jungle`?on(e,t,r,a,o,l):e.theme===`volcano`?sn(e,t,r,a,c):e.theme===`fossil`?ln(e,t,r,a):e.theme===`frost`?un(e,t,r,a):e.theme===`dune`?dn(e,t,r,a):e.theme===`bloom`?fn(e,t,r,a):cn(e,t,r,a,l,o),r.nodes=Ie.slice(i),r}function on(e,t,n,r,i,a){I(t,.7,.08,e.r*1.3,.4,.08,.2,ot),I(t,1.3,1.1,1.1,-1.6,.55,-2.2,ct),I(t,.8,.8,.8,-1.5,1.4,-2.1,ct),I(t,.35,1.5,.12,-1.15,1.15,-1.5,ot),I(t,.5,.08,.5,-1.15,.12,-1.2,st);for(let e=0;e<3;e+=1){let r=I(t,.08,.28,.08,-1.15,1.2,-1.5,st);n.motes.push({mesh:r,kind:`fall`,phase:e*.33,radius:1.2,ox:-1.15})}i(-2.4,1.6),i(2.2,-.6),i(.4,2.4),i(-.8,-2.6),a(2.6,1.8);let o=(e,n,r)=>{let i=new K;I(i,.46*r,.32*r,.36*r,0,.28*r,0,et),I(i,.28*r,.26*r,.26*r,0,.54*r,.12*r,tt),I(i,.12*r,.22*r,.12*r,-.16*r,.12*r,.1,tt),i.position.set(e,0,n),t.add(i)};o(-3.1,.4,1),o(-2.5,.9,.72);let s=new K;I(s,.46,.16,.34,0,.16,0,rt),I(s,.16,.1,.16,0,.14,.24,nt),s.position.set(1.8,0,1.5),t.add(s);let c=[Ze,Qe,$e];for(let e=0;e<3;e+=1){let i=new K;I(i,.1,.16,.08,0,0,0,Xe),I(i,.22,.08,.04,-.12,.04,0,c[e]??Ze),I(i,.22,.08,.04,.12,.04,0,c[(e+1)%3]??Qe);let a=-1+r()*3.2,o=-1.2+r()*2.4;i.position.set(a,1.7,o),t.add(i),n.motes.push({mesh:i,kind:`fairy`,phase:e*1.7,radius:1.7,ox:a})}let l=[ut,dt,Je,qe];for(let n=0;n<7;n+=1){let i=l[n%l.length]??ut;I(t,.16,.16,.16,(r()-.5)*e.r*1.2,.12,(r()-.5)*e.r*1.2,i)}I(t,.22,.16,.22,2.4,.14,-1.6,Ke),I(t,.12,.08,.12,2.4,.24,-1.6,st),n.drops.push(Be(`meal`,1,e.x+1.2,e.z+2.1,26)),n.drops.push(Be(`fiber`,1,e.x-2.2,e.z+.4,26)),It(`sap`,1.6,-2.2,t,e.x+1.6,e.z-2.2),Lt(e,t,-1.4,1.8),Vt(e,t,r,[`howler`,`toucan`,`toucan`,`tapir`,`capybara`,`capybara`,`sloth`,`jaguar`]),Bt(`cassowary`,e,t,e.r*.28,-e.r*.16),Ht(t,n,-2.2,1.4,2.1,12859954,3836480,.4),Ht(t,n,1.6,-1.8,2.4,15782474,1731208,1.7);let u=[[-1.6,-2.2],[-2.4,1.6],[2.2,-.6],[.4,2.4],[-.8,-2.6]],d=e.r*.38,f=-e.r*.32;u.push([d,f]),nn(e,t,d,f);for(let[t,n]of Gt(e,r,18,u,2.3))i(t,n);for(let[n,i]of Gt(e,r,14,u,2.5))qt(e,t,n,i,r);for(let[n,i]of Gt(e,r,12,u,1.8))Zt(e,t,n,i,r);for(let[n,i]of Gt(e,r,8,u,1.8))Xt(n,i,2058804,t);for(let[t,n]of Gt(e,r,6,u,2.2))a(t,n);for(let[n,i]of Gt(e,r,5,u,2.4))Qt(e,t,n,i,r)}function sn(e,t,n,r,i){I(t,3.4,.7,3.4,0,.35,0,Ge),I(t,2.3,.7,2.3,0,1.05,0,Ge),I(t,1.3,.65,1.3,0,1.7,0,Ge),I(t,.7,.28,.7,0,2.15,0,We),I(t,.42,.1,3.6,1.15,.16,1.2,We),I(t,3.2,.1,.36,-.4,.16,-1.5,We),i(2.4,-1.6),i(-2.6,1.4);for(let e=0;e<3;e+=1){let i=I(t,.28,.28,.28,(r()-.5)*.4,2.5,(r()-.5)*.4,lt);n.motes.push({mesh:i,kind:`smoke`,phase:e*.37,radius:0,ox:i.position.x})}if(n.drops.push(Be(`stone`,1,e.x+2.2,e.z+2.2,24)),!Ft.has(e.id)){let e=new K;for(let[t,n]of[[-.12,0],[.14,.06],[0,.16]]){let r=new q(new J(.16,.08,.2),ft);r.position.set(t,.08,n),e.add(r)}e.position.set(-1.8,.05,1.4),t.add(e),n.shells=e}It(`vent`,2.8,2.1,t,e.x+2.8,e.z+2.1),Lt(e,t,-2.4,2.2),Vt(e,t,r,[`salamander`,`salamander`,`soot goat`,`soot goat`,`iguana`,`iguana`,`ember bug`,`ember bug`,`ember bug`]),Bt(`lava drake`,e,t,-e.r*.22,-e.r*.24),Ht(t,n,1.2,-2.4,2.8,16734754,16760906,.8),Ht(t,n,-1.8,.6,3.1,16723984,14716976,2.1);let a=[[0,0],[2.4,-1.6],[-2.6,1.4]];for(let[t,n]of Gt(e,r,8,a,2.6))i(t,n);for(let[n,i]of Gt(e,r,12,a,2.2))$t(e,t,n,i);for(let[n,i]of Gt(e,r,8,a,2.4))tn(t,n,i);for(let[n,i]of Gt(e,r,6,a,2))Xt(n,i,3813934,t)}function cn(e,t,n,r,i,a){let o=[Ke,qe,Je,Ye];for(let n=0;n<5;n+=1){let i=o[n%o.length]??Ke,a=(r()-.5)*e.r*1.15,s=(r()-.5)*e.r*1.15,c=new K;I(c,.16,.7+r()*.5,.16,0,.45,0,i),I(c,.55,.4,.08,0,.85,0,i),I(c,.08,.4,.4,.2,.7,0,i),c.position.set(a,0,s),c.rotation.y=r()*Math.PI,t.add(c)}I(t,.7,.45,.7,.2,.28,-.4,Je),I(t,.4,.28,.4,.35,.58,-.25,Ke),i(2.2,1.6);for(let r=0;r<3;r+=1){let i=new K;I(i,.28,.1,.12,0,0,0,r===2?qe:it),I(i,.1,.1,.08,-.16,.02,0,at),i.position.set(e.r*.45,.22,0),t.add(i),n.motes.push({mesh:i,kind:`fish`,phase:r*2.1,radius:e.r*(.35+r*.12),ox:0})}n.drops.push(Be(`meal`,1,e.x-1.4,e.z+1.2,26)),It(`clam`,-1.8,-1.4,t,e.x-1.8,e.z-1.4),Lt(e,t,1.2,1.6),Vt(e,t,r,[`manta`,`seahorse`,`seahorse`,`octopus`,`sea turtle`,`sea turtle`,`shrimp`,`shrimp`,`shrimp`]),Bt(`shark`,e,t,e.r*.2,-e.r*.22);let s=new K;I(s,.7,.16,.22,0,0,0,y(10135732)),I(s,.16,.2,.1,-.28,.12,0,y(14212838)),s.position.set(e.r*.4,.22,0),t.add(s),n.motes.push({mesh:s,kind:`fish`,phase:.6,radius:e.r*.42,ox:0});let c=[[.2,-.4],[2.2,1.6]];for(let[n,i]of Gt(e,r,12,c,2.2)){let e=o[Math.floor(r()*o.length)]??Ke,a=new K;I(a,.16,.7+r()*.45,.16,0,.45,0,e),I(a,.55,.38,.08,0,.85,0,e),a.position.set(n,0,i),a.rotation.y=r()*Math.PI,t.add(a)}for(let[t,n]of Gt(e,r,6,c,2.6))a(t,n);for(let[n,i]of Gt(e,r,8,c,1.8))en(e,t,n,i);for(let[n,i]of Gt(e,r,5,c,2.4))Xt(n,i,9083555,t)}function ln(e,t,n,r){I(t,3.6,.06,2.3,.8,.05,.6,Tt),I(t,.18,1.15,.18,-2.4,.58,-1.6,Ct),I(t,.95,.14,.14,-1.85,1.12,-1.6,Ct),I(t,.16,.85,.16,-1.3,.85,-1.2,Ct);for(let n=0;n<7;n+=1)I(t,.12,.65+r()*.7,.32,(r()-.5)*e.r*1.25,.4,(r()-.5)*e.r*1.25,wt);let i=new K;I(i,.9,.06,.22,0,0,0,jt),I(i,.16,.12,.28,.34,.02,.08,jt),i.position.set(1.2,2.6,-.4),t.add(i),n.motes.push({mesh:i,kind:`fairy`,phase:1.2,radius:2.6,ox:1.2});let a=e.r*.32,o=-e.r*.26;It(`amber`,a,o,t,e.x+a,e.z+o),zt(`shrew`,e,t,-e.r*.38,e.r*.22),zt(`croc`,e,t,e.r*.18,e.r*.32),zt(`raptor`,e,t,-e.r*.22,-e.r*.18),zt(`rex`,e,t,e.r*.42,-e.r*.12),Vt(e,t,r,[`trike`,`ankylo`,`compy`,`compy`,`compy`]),Ht(t,n,2.4,1.2,1.8,6982194,12902512,.3),Ht(t,n,-1.2,2.2,2.2,3828360,14215408,1.4),n.drops.push(Be(`fiber`,1,e.x-2.4,e.z+1.6,26));let s=[[.8,.6],[-2.4,-1.6]];for(let[n,i]of Gt(e,r,14,s,1.8))Zt(e,t,n,i,r);for(let[n,i]of Gt(e,r,6,s,2.6))$t(e,t,n,i);for(let[n,i]of Gt(e,r,5,s,2.4))Qt(e,t,n,i,r);for(let[n,i]of Gt(e,r,6,s,2.2))I(t,.12,.9,.12,n,.45,i,Ct),I(t,.7,.1,.12,n,.9,i,Ct)}function un(e,t,n,r){let i=y(15267071),a=y(12047598);I(t,2.4,.45,1.6,-1.6,.22,-1.2,i),I(t,1.4,.7,1.1,-1.4,.55,-1.1,a),I(t,1.8,.35,1.2,2.2,.18,1.4,i),I(t,e.r*.7,.06,.55,.2,.05,-.4,ot);for(let n=0;n<5;n+=1)I(t,.35,.2+r()*.25,.35,(r()-.5)*e.r,.12,(r()-.5)*e.r,r()>.5?i:a);Vt(e,t,r,[`penguin`,`penguin`,`penguin`,`penguin`,`seal`,`seal`,`walrus`,`snow fox`,`hare`,`hare`]),Bt(`polar bear`,e,t,e.r*.18,e.r*.2),Ht(t,n,1.4,-2.2,2.3,1710618,16053492,.5),Ht(t,n,-2.6,.8,2.6,1710618,16747056,1.8);let o=[[-1.6,-1.2],[2.2,1.4]];for(let[n,i]of Gt(e,r,12,o,2.4))Jt(e,t,n,i);for(let[n,i]of Gt(e,r,8,o,2))Xt(n,i,15267071,t)}function dn(e,t,n,r){let i=y(15123066),a=y(6978098);I(t,3.2,.35,1.4,.4,.16,.8,i),I(t,2.1,.55,1.1,-1.8,.26,-1.4,y(13936730)),I(t,.22,1.3,.22,2.4,.65,-.6,A),I(t,.7,.08,.16,2.15,1.15,-.55,A);for(let n=0;n<4;n+=1)I(t,.4,.22,.4,(r()-.5)*e.r*.9,.12,(r()-.5)*e.r*.9,a);Vt(e,t,r,[`fennec`,`fennec`,`jerboa`,`jerboa`,`jerboa`,`scorpion`,`scorpion`,`ostrich`,`beetle`,`beetle`]),Bt(`sand viper`,e,t,-e.r*.16,e.r*.22),Ht(t,n,.2,1.6,3.2,2761756,4866104,.9);let o=[[.4,.8],[-1.8,-1.4],[2.4,-.6]];for(let[n,i]of Gt(e,r,10,o,2.3))Yt(e,t,n,i);for(let[n,i]of Gt(e,r,8,o,2))Xt(n,i,6978098,t);for(let[n,i]of Gt(e,r,4,o,2.6))$t(e,t,n,i)}function fn(e,t,n,r){let i=y(4164164);I(t,e.r*.8,.28,.35,0,.16,-1.4,i),I(t,.7,.55,.7,2.2,.28,1.6,re);let a=[ut,dt,Je,qe];for(let n=0;n<14;n+=1){let i=a[n%a.length]??ut;I(t,.18,.22,.18,(r()-.5)*e.r*1.15,.14,(r()-.5)*e.r*1.15,i)}Vt(e,t,r,[`rabbit`,`rabbit`,`rabbit`,`peacock`,`goat`,`goat`,`deer`,`deer`,`tortoise`,`pheasant`]),Bt(`hornet`,e,t,-e.r*.18,-e.r*.12),Bt(`hornet`,e,t,e.r*.16,e.r*.14),Ht(t,n,-1.2,.4,1.5,4114628,15753368,.2),Ht(t,n,.8,-1.6,1.7,16760906,15753368,1.1),Ht(t,n,2.4,.2,1.4,14826314,16760906,2.2);let o=[[0,-1.4],[2.2,1.6]],s=[15753368,16760906,12868304,16747104];for(let[n,i]of Gt(e,r,16,o,1.7))Xt(n,i,s[Math.floor(r()*s.length)]??15753368,t);for(let[n,i]of Gt(e,r,10,o,2.5))rn(e,t,n,i,s[Math.floor(r()*s.length)]??15753368)}function pn(e){s.remove(e.root),e.root.traverse(e=>{let t=e;t.isMesh&&!Pe.has(t.geometry.uuid)&&t.geometry.dispose()});for(let t of e.drops){s.remove(t.mesh),t.mesh.geometry.dispose();let e=Fe.indexOf(t);e>=0&&Fe.splice(e,1)}for(let t of e.nodes){let e=Ie.indexOf(t);e>=0&&Ie.splice(e,1);let n=t.group.children.find(e=>e instanceof q&&_.includes(e));if(n){let e=_.indexOf(n);e>=0&&_.splice(e,1)}}for(let t=Nt.length-1;t>=0;--t){let n=Nt[t];if(!n||n.tamed||n.isle.id!==e.isle.id)continue;let r=_.indexOf(n.body);r>=0&&_.splice(r,1),Nt.splice(t,1)}}function mn(){let e=R.position.x,t=R.position.z,n=Et(e,t,110),r=new Set(n.map(e=>e.id));for(let e of n)Pt.has(e.id)||Pt.set(e.id,an(e));for(let[n,i]of Pt)r.has(n)||Math.hypot(i.isle.x-e,i.isle.z-t)>168&&(pn(i),Pt.delete(n))}let hn=new Y({color:6968132,flatShading:!0}),gn=new Y({color:12882530,flatShading:!0}),_n=new Y({color:8019010,flatShading:!0}),vn=new Y({color:12886122,flatShading:!0}),yn=new Y({color:16769162,emissive:16756784,emissiveIntensity:1,flatShading:!0}),bn=new Y({color:3811352,flatShading:!0}),xn=new Y({color:8015400,flatShading:!0}),Sn=new Y({color:14729344,flatShading:!0}),Cn=new Y({color:6964264,flatShading:!0}),wn=new Y({color:3832376,flatShading:!0}),Tn=new Y({color:4863012,flatShading:!0}),En=new Y({color:10516552,flatShading:!0}),Dn=new Y({color:2900024,flatShading:!0});g.push(hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn);let On=new K;On.position.y=lf,s.add(On);let L=(e,t,n,r,i,a,o,s=On)=>{let c=new q(new J(e,t,n),o);return c.position.set(r,i,a),s.add(c),c},kn=(e,t,n,r,i,a,o)=>L(e,t,n,r,i,a,o,s);kn(.28,2.05,.28,cf.x-.82,1.02,cf.z,A),kn(.28,2.05,.28,cf.x+.82,1.02,cf.z,A),kn(.22,1.7,.22,cf.x-.68,.85,cf.z-.72,A),kn(.22,1.7,.22,cf.x+.68,.85,cf.z-.72,A),kn(2.05,.22,.32,cf.x,2.08,cf.z,A),kn(1.65,.16,.22,cf.x,1.7,cf.z-.72,A),kn(2.2,.16,.5,cf.x,2.24,cf.z-.15,hn),kn(1.15,1.35,.75,cf.x,.72,cf.z-.42,me);for(let e=0;e<4;e+=1)kn(1.45,.08,.12,cf.x,.06,cf.z+.42+e*.26,A);kn(.1,.1,1.15,cf.x-.68,.1,cf.z+.75,A),kn(.1,.1,1.15,cf.x+.68,.1,cf.z+.75,A),L(16,.28,16,0,-.08,78.5,_n),L(16,3.8,.55,0,1.8,71.2,hn),L(16,3.8,.55,0,1.8,85.6,hn),L(.55,3.8,15,-7.7,1.8,78.4,hn),L(.55,3.8,15,7.7,1.8,78.4,hn),L(7,.4,7,-4,3.7,75,hn),L(7,.4,7,4,3.7,82,hn),L(6,.4,5,2.5,3.7,76.5,hn),L(.42,3.2,.42,1.8,1.6,79.4,hn);let An=(e,t,n)=>{for(let r=0;r<5;r+=1){let i=.42+r%2*.16;L(i,n/5,i,e+(r%2?.08:-.05),(r+.5)*(n/5),t,r%2?gn:hn)}};An(-6.2,74.5,3.2),An(-6.4,77.2,3.6),An(-6.1,82.4,3.3),An(6.2,74.8,3.4),An(6.4,78.6,3.7),An(6.1,82.8,3.2),An(-2.4,84.2,3.5),An(3.2,84.4,3.4);let jn=(e,t,n)=>{L(.05,3.55-t,.05,e,(3.55+t)/2,n,bn),L(.32,.06,.32,e,t+.18,n,bn),L(.22,.26,.22,e,t,n,yn),L(.32,.06,.32,e,t-.16,n,bn)};jn(-2.2,2.35,76.4),jn(2.4,2.5,77.2),jn(.2,2.7,81.6),jn(-4.6,2.15,79.6),jn(5.2,2.2,80.8),jn(1.4,1.55,80.15);for(let[e,t]of[[-1.4,75.2],[1.6,74.8],[3.4,76.6],[-3.2,75.6],[4.6,81.2]])L(.42,.08,.42,e,3.45,t,gn);let Mn=(e,t)=>{L(.72,.9,.72,e,.48,t,xn),L(.78,.08,.78,e,.28,t,Sn),L(.78,.08,.78,e,.7,t,Sn)};Mn(3.4,80.2),Mn(4.3,80.8),Mn(3.8,81.5),L(.55,.45,.55,-1.6,.28,80.4,Cn),L(.4,.35,.4,-1.35,.65,80.55,Cn),L(.7,.4,.45,2.2,.85,80.7,Cn),L(1.5,.12,.9,1.6,1.15,81.2,Dn);let Nn=(e,t)=>{L(.32,.08,.1,e,.22,t,wn),L(.1,.32,.08,e,.32,t,wn),L(.22,.06,.14,e+.1,.4,t,wn)};Nn(-5.6,75.2),Nn(5.6,75.4),Nn(5.4,81.6),Nn(-1.8,83.2);let Pn=(e,t)=>{L(.46,.2,.46,e,.14,t,Tn),L(.52,.06,.52,e,.26,t,En)};Pn(-2.6,76.8),Pn(-1.2,77.6),Pn(1.4,76.4),Pn(2.6,77.8),Pn(.4,75.4);for(let e=0;e<5;e+=1)L(.7,.06,.7,-.8-e*.7,.08,80.4,vn);L(2.6,.62,.7,.5,.4,80.55,A),L(.08,.04,.22,-.7,.78,80.55,yn),L(.06,.16,.06,-.95,.82,80.5,ie),L(.16,.1,.12,1.15,.78,80.55,oe),L(1.1,.16,.7,2.45,.55,77.7,A);let Fn=new Y({color:15249552,flatShading:!0}),In=new Y({color:12868146,flatShading:!0}),Ln=new Y({color:5212732,flatShading:!0}),Rn=new Y({color:3827756,flatShading:!0}),zn=new Y({color:13934666,flatShading:!0}),Bn=new Y({color:4168264,flatShading:!0}),Vn=new Y({color:7030320,flatShading:!0}),Hn=new Y({color:4861984,flatShading:!0}),Un=new Y({color:13812900,flatShading:!0}),Wn=new Y({color:4007960,flatShading:!0}),Gn=new Y({color:13154458,flatShading:!0}),Kn=new Y({color:6045744,flatShading:!0}),qn=new Y({color:15131348,flatShading:!0}),Jn=new Y({color:6964264,flatShading:!0}),Yn=new Y({color:2759702,flatShading:!0});g.push(Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn);let Xn=[],Zn=(e,t,n)=>{let r=new K,i=(e,t,n,i,a,o,s)=>{let c=new q(new J(e,t,n),s);c.position.set(i,a,o),r.add(c)};i(.16,.18,.24,-.1,.09,.03,Wn),i(.16,.18,.24,.1,.09,.03,Wn),i(.1,.08,.04,-.1,.16,.14,Gn),i(.1,.08,.04,.1,.16,.14,Gn),i(.16,.34,.16,-.1,.34,0,Un),i(.16,.34,.16,.1,.34,0,Un),i(.32,.4,.18,0,.74,.04,Bn),i(.1,.7,.28,-.22,.7,-.02,Vn),i(.1,.7,.28,.22,.7,-.02,Vn),i(.46,.7,.08,0,.7,-.12,Vn),i(.16,.28,.24,-.26,.4,.02,Vn),i(.16,.28,.24,.26,.4,.02,Vn),i(.08,.16,.06,0,.96,.1,Hn);for(let e=0;e<4;e+=1)i(.08,.08,.04,.13,.92-e*.14,.14,zn);i(.1,.08,.1,0,1.04,.02,Fn),i(.22,.22,.2,0,1.2,.02,Fn),i(.06,.06,.04,-.13,1.18,.02,Fn),i(.06,.06,.04,.13,1.18,.02,Fn),i(.04,.05,.03,0,1.16,.13,Fn),i(.24,.1,.16,0,1.28,-.02,In),i(.2,.12,.1,0,1.18,-.08,In),i(.08,.32,.08,-.14,1.08,0,In),i(.08,.32,.08,.14,1.08,0,In),i(.04,.04,.02,-.05,1.22,.13,Yn),i(.04,.04,.02,.05,1.22,.13,Yn),i(.07,.02,.02,0,1.13,.13,In),i(.26,.1,.24,0,1.36,0,Ln),i(.18,.06,.16,0,1.43,-.01,Ln),i(.18,.04,.1,0,1.3,.13,Rn),i(.08,.08,.04,.12,1.36,.1,zn),i(.1,.32,.1,-.32,.78,.04,Vn),i(.08,.16,.08,-.32,.52,.08,Fn),i(.08,.08,.08,-.32,.42,.1,Fn),i(.1,.28,.1,.32,.84,.02,Vn),i(.08,.14,.08,.32,.62,.06,Fn);let a=new K;a.position.set(-.34,.48,.12),a.rotation.z=.12;let o=new q(new J(.05,1.2,.05),Jn);o.position.y=.12,a.add(o),r.add(a),i(.3,.4,.16,0,.84,-.24,Kn),i(.24,.12,.2,0,1.08,-.22,qn),i(.05,.34,.04,-.1,.88,-.14,Hn),i(.05,.34,.04,.1,.88,-.14,Hn),r.position.set(e,0,t),r.rotation.y=n,On.add(r),Xn.push(r)};Zn(.4,81.5,Math.PI),Zn(2.55,78.5,Math.PI),L(.28,2.05,.22,-2.55,1.05,78.7,A),L(.28,2.05,.22,-2.55,1.05,80.1,A),L(.22,1.85,.22,-3.45,.95,78.75,A),L(.22,1.85,.22,-3.45,.95,80.05,A),L(1.15,.18,.22,-3,2.05,78.7,A),L(1.15,.18,.22,-3,2.05,80.1,A),L(.22,.18,1.55,-2.55,2.05,79.4,A),L(.9,1.45,.35,-3.05,.85,79.4,me);for(let e=0;e<3;e+=1)L(.7,.06,.1,-2.2,.08,79.15+e*.22,A);jn(-2.05,1.65,78.15);let Qn=new J(.28,.32,.16),$n=new J(.18,.16,.16),er=new J(.08,.22,.08),tr=new J(.06,.28,.06);function nr(e,t,n,r){let i=new K,a=new q(Qn,t);a.position.y=.42;let o=new q($n,ce);o.position.y=.68;let c=new q(er,me),l=new q(er,me);c.position.set(-.07,.12,0),l.position.set(.07,.12,0);let u=new K;u.position.set(.18,.5,0);let d=new q(er,t);d.position.y=-.08;let f=new q(tr,e===`rock`?re:e===`vine`?ie:A);return f.position.y=-.24,u.add(d,f),i.add(a,o,c,l,u),i.position.set(n,0,r),i.visible=!1,s.add(i),{group:i,arm:u,kind:e,node:null,t:0}}let rr=[nr(`wood`,le,Qd.x+1.2,Qd.z+.4),nr(`rock`,ue,Qd.x-1.1,Qd.z+.8),nr(`vine`,te,Qd.x+.2,Qd.z-1.1)];function ir(e){let n=[{hand:rr[0],on:t.hasWoodMinion,nodeKind:`palm`,note:`The wood collector drops 1 wood.`,give:()=>{t.wood+=1}},{hand:rr[1],on:t.hasRockMinion,nodeKind:`rocks`,note:`The rock collector drops 1 stone.`,give:()=>{t.stone+=1}},{hand:rr[2],on:t.hasVineMinion,nodeKind:`vines`,note:`The vine collector drops 1 vine.`,give:()=>{t.fiber+=1}}];for(let r of n){let n=r.hand;if(n.group.visible=r.on,!r.on)continue;(!n.node||!n.node.group.visible||n.node.fall>=0||n.node.kind!==r.nodeKind)&&(n.node=Ie.find(e=>e.kind===r.nodeKind&&e.group.visible&&e.fall<0)??null);let i=n.node;if(!i){n.arm.rotation.x=Math.sin(Fi*2)*.15;continue}let a=i.x-n.group.position.x,o=i.z-n.group.position.z,s=Math.hypot(a,o);if(n.group.rotation.y=Math.atan2(a,o),s>1.15){let t=Math.min(s,1.7*e);n.group.position.x+=a/s*t,n.group.position.z+=o/s*t,n.arm.rotation.x=Math.sin(Fi*8)*.35;continue}if(n.t+=e,n.arm.rotation.x=Math.sin(n.t*8)*1.1-.2,n.t<20)continue;n.t=0,n.node=null,r.give();let c=t.lines[0]??``;(c===``||c.startsWith(`The wood collector`)||c.startsWith(`The rock collector`)||c.startsWith(`The vine collector`))&&(t.lines=[r.note])}}let ar=kd();g.push(...ar.materials);for(let e of ar.animals)s.add(e.group),e.group.traverse(e=>{e.isMesh&&_.push(e)});let or=[];[le,ue,ce,le].forEach((e,t)=>{let n=new K,r=new q(new J(.28,.42,.2),e),i=new q(new J(.18,.18,.18),ce),a=new q(new J(.08,.28,.08),A),o=new q(new J(.08,.28,.08),A);r.position.y=.55,i.position.y=.86,a.position.set(-.08,.16,0),o.position.set(.08,.16,0),n.add(r,i,a,o);let c=t/4*Math.PI*2;n.position.set(Qd.x+Math.sin(c)*1.3,0,Qd.z+Math.cos(c)*1.3),n.lookAt(Qd.x,.4,Qd.z),s.add(n),or.push(n)});let sr=new q(new J(.8,.16,.8),A);sr.position.set(Qd.x,.08,Qd.z);let cr=new q(new J(.28,.45,.28),de);cr.position.set(Qd.x,.4,Qd.z),cr.visible=!1,s.add(sr,cr);let lr=new K,ur=new q(new J(.12,1.1,.12),A),dr=new q(new J(.12,1.1,.12),A),fr=new q(new J(1.6,.1,1.2),te);ur.position.set(-.6,.55,0),dr.position.set(.6,.55,0),fr.position.y=1.1,lr.add(ur,dr,fr),lr.position.set(Qd.x-2.4,0,Qd.z+1.6),lr.visible=!1,s.add(lr);let pr=y(6965800),mr=y(14205514),hr=y(12859992),gr=[],_r=[-4.2,-2.6,-4.2,-2.6],vr=[7.2,7.2,8.8,8.8];_r.forEach((e,t)=>{let n=new q(new J(1.15,.08,1.15),pr);n.position.set(e,.05,vr[t]??8);let r=new q(new J(.7,.45,.7),mr);r.position.set(e,.28,vr[t]??8),r.visible=!1,s.add(n,r),gr.push(r)});let yr=new K;I(yr,1.3,.7,1.1,0,.35,0,A),I(yr,1.5,.16,1.3,0,.78,0,ue),yr.position.set(-5.6,0,6.2),s.add(yr);let br=[],xr=[];for(let e of rf){let t=new q(new J(1.5,.06,1.5),re);t.position.set(e.x,.04,e.z),s.add(t);let n=new K;e.id===`market`?(I(n,.12,.9,.12,-.5,.45,-.4,A),I(n,.12,.9,.12,.5,.45,-.4,A),I(n,1.4,.08,1.1,0,.95,-.15,le),I(n,1.1,.5,.7,0,.3,.1,A)):e.id===`bakery`?(I(n,1.2,.7,1,0,.35,0,re),I(n,1.3,.12,1.15,0,.76,0,ue),I(n,.22,.45,.22,.35,1.05,-.2,re),I(n,.16,.2,.16,.35,1.3,-.2,de)):(I(n,1.15,.8,1,0,.4,0,A),I(n,1.3,.14,1.2,0,.88,0,te),I(n,.28,.4,.08,0,.24,.5,me)),n.position.set(e.x,0,e.z),n.visible=!1,s.add(n),e.id===`houseA`||e.id===`houseB`?br.push(n):xr.push(n)}let Sr=[],Cr=[le,ue,ce,te,le,de];[{x:-7.4,z:-3.4,show:()=>t.houseA},{x:-5.6,z:-3.2,show:()=>t.houseA},{x:-4.4,z:-3.2,show:()=>t.houseB},{x:-2.2,z:-3.4,show:()=>t.houseB},{x:-7.4,z:-6.2,show:()=>t.market},{x:-2,z:-6.2,show:()=>t.bakery}].forEach((e,t)=>{let n=new K,r=Cr[t]??le,i=new q(new J(.28,.42,.2),r),a=new q(new J(.18,.18,.18),ce);i.position.y=.55,a.position.y=.86,n.add(i,a),n.position.set(e.x,0,e.z),n.visible=!1,s.add(n),Sr.push({group:n,hx:e.x,hz:e.z,heading:t,show:e.show})});let wr=new K,Tr=new q(new J(.08,.7,.08),A),Er=new q(new J(.08,.7,.08),A),Dr=new q(new J(.7,.06,.06),A);Tr.position.set(-.28,.35,0),Er.position.set(.28,.35,0),Dr.position.y=.62,wr.add(Tr,Er,Dr),wr.position.set($d.x,0,$d.z),wr.visible=!1,s.add(wr);let Or=new q(new J(.55,.16,.4),re);Or.position.set(ef.x,.16,ef.z),Or.visible=!1,s.add(Or);let kr=new q(new J(.2,.12,.14),ue);kr.position.set(sf.x,.2,sf.z),kr.visible=!1,s.add(kr);let Ar=new q(new J(.3,.5,.3),pe);Ar.position.set(Qd.x,1.2,Qd.z),Ar.visible=!1,s.add(Ar);let jr=new Y({color:9067058,flatShading:!0}),Mr=new Y({color:4861976,flatShading:!0});g.push(jr,Mr);let Nr=new K;for(let e=0;e<5;e+=1){let t=new q(new J(.85,.08,.7),jr);t.position.set(0,.22,e*.78),Nr.add(t)}for(let e of[.2,1.6,3.1]){let t=new q(new J(.1,1.05,.1),Mr),n=new q(new J(.1,1.05,.1),Mr);t.position.set(-.48,.15,e),n.position.set(.48,.15,e),Nr.add(t,n)}Nr.position.set(af.x,0,af.z),Nr.visible=!1,s.add(Nr);let Pr=new K,Fr=new q(new J(1.2,.28,2.2),A);Fr.position.y=.16;let Ir=new q(new J(.72,.2,.5),A);Ir.position.set(0,.2,1.22);let Lr=new q(new J(.72,.08,.42),Mr);Lr.position.set(0,.34,-.1);let Rr=new q(new J(.08,.18,1.9),jr),zr=new q(new J(.08,.18,1.9),jr);Rr.position.set(-.6,.3,0),zr.position.set(.6,.3,0);let Vr=new q(new J(.08,.9,.08),Mr);Vr.position.set(0,.7,-.15);let Hr=new q(new J(.08,.7,.55),te);Hr.position.set(.2,.85,-.15),Hr.visible=!1;let Ur=new K,Wr=new K,Gr=(e,t)=>{let n=new q(new J(.06,.06,.72),Mr);n.position.z=.22;let r=new q(new J(.2,.04,.24),jr);r.position.z=.58,e.add(n,r),e.position.set(t*.66,.34,.2),Pr.add(e)};Gr(Ur,-1),Gr(Wr,1);let Kr=[0,1,2,3].map(e=>{let t=new q(new J(.24,.04,.16),st);return t.position.set(e%2==0?-.28:.28,.08,-.9-e*.28),t.visible=!1,Pr.add(t),t});Pr.add(Fr,Ir,Lr,Rr,zr,Vr,Hr),Pr.rotation.order=`YXZ`,Pr.position.set(r?.boatX??of.x,-.02,r?.boatZ??of.z),Pr.rotation.y=r?.boatHeading??0,Pr.visible=!1,s.add(Pr);let qr=new K,Jr=new q(new J(1.6,.4,.55),re),Yr=new q(new J(.12,.7,.4),A),Xr=new q(new J(.9,.08,.28),re);Jr.position.y=.3,Yr.position.set(.55,.7,0),Xr.position.set(-1.3,.08,.4),qr.add(Jr,Yr,Xr),qr.position.set(tf.x,0,tf.z),s.add(qr);let Zr=new Y({color:F.dirt,flatShading:!0});g.push(Zr);let Qr=new J(.18,.12,.18),$r=[],R=new K;R.position.set(r?.x??0,0,r?.z??13);let z=[],ei=11037509,ti=16250094,ni=1708558,ri=6044196,B=(e,t,n,r,i,a,o,s)=>{let c=new Y({color:s,flatShading:!0});g.push(c);let l=new q(new J(t,n,r),c);return l.position.set(i,a,o),l.userData.player=!0,e.add(l),l},ii=e=>{let t=new K;t.position.set(e,.52,0),B(t,.16,.18,.16,0,-.06,0,9350089),B(t,.1,.16,.1,0,-.22,0,ei),B(t,.11,.08,.11,0,-.33,0,ti),B(t,.15,.05,.22,0,-.42,.04,ri),B(t,.12,.04,.04,0,-.37,.08,ri),R.add(t),z.push(t)};ii(-.12),ii(.12),B(R,.52,.4,.28,0,.86,0,ti),B(R,.1,.08,.1,0,1.06,0,ei),B(R,.22,.22,.2,0,1.2,0,ei),B(R,.3,.14,.26,0,1.34,-.02,ni),B(R,.16,.12,.18,-.12,1.26,-.02,ni),B(R,.16,.12,.18,.12,1.26,-.02,ni),B(R,.24,.16,.12,0,1.22,-.1,ni),B(R,.08,.05,.03,-.055,1.22,.11,ni),B(R,.08,.05,.03,.055,1.22,.11,ni),B(R,.04,.02,.03,0,1.23,.11,ni),B(R,.03,.03,.02,-.055,1.22,.1,1708558),B(R,.03,.03,.02,.055,1.22,.1,1708558),B(R,.04,.03,.04,0,1.16,.12,ei),B(R,.05,.08,.05,-.13,1.2,0,ei),B(R,.05,.08,.05,.13,1.2,0,ei),B(R,.14,.1,.14,-.28,.98,0,ti),B(R,.14,.1,.14,.28,.98,0,ti);let ai=new K;ai.position.set(-.26,1.02,0),B(ai,.1,.22,.1,0,-.12,0,ti),B(ai,.09,.2,.09,0,-.32,0,ei),B(ai,.11,.08,.11,0,-.46,.02,ei),R.add(ai);let oi=new K;oi.position.set(.26,1.04,0),B(oi,.11,.22,.11,0,-.12,0,ti);let V=new K;V.position.set(0,-.24,0),B(V,.1,.2,.1,0,-.1,0,ei);let si=new K;si.position.set(0,-.24,.02),B(si,.11,.08,.11,0,0,0,ei),V.add(si),oi.add(V),R.add(oi);let ci=new K;ci.rotation.x=Math.PI/2,ci.position.set(-.07,0,.02),B(ci,.04,.04,.12,0,0,.04,7028511),B(ci,.03,.07,.26,0,0,.22,16054267),si.add(ci);let li=new K;li.rotation.x=Math.PI/2,li.position.set(.1,0,0),B(li,.05,.05,.36,0,0,.14,7028511),B(li,.2,.09,.09,0,0,.34,14147043),si.add(li);let ui=new K;ui.rotation.x=Math.PI/2,B(ui,.06,.06,.74,0,0,.32,7028511),B(ui,.11,.11,.18,0,0,.74,16054267),si.add(ui);let di=new K;if(di.position.set(-.18,.7,.1),di.rotation.z=.5,B(di,.04,.04,.16,0,0,.06,7028511),B(di,.035,.09,.22,0,.02,.22,12963026),R.add(di),R.rotation.order=`YXZ`,s.add(R),t.tame===`raptor`||t.tame===`rex`){let e=St.find(e=>e.theme===`fossil`)??St[0];if(e){let n=zt(t.tame,e,s,R.position.x+1.5,R.position.z+.4);n.world=!0,n.tamed=!0,n.hostile=!1,n.group.position.set(n.lx,0,n.lz)}}let fi=new Y({color:F.cream,flatShading:!0});g.push(fi);let mi=new q(new J(.1,.1,.16),fi);mi.position.set(0,-.04,0),mi.visible=!1,si.add(mi);let hi=new Y({color:16249832,flatShading:!0});g.push(hi);let gi=new J(.18,.55,.1),U=[0,1,2].map(()=>{let e=new q(gi,hi);return e.visible=!1,s.add(e),e}),_i=new H,vi=new dc,yi=new pi,bi=r?.heading??Math.PI,W=!!r?.inside,xi=!!r?.aboard&&t.hasRaft&&!r?.inside,Si=null,Ci=``,wi=0,Ti=!1,Ei=0,Di=!1;xi&&(R.position.y=.22),W&&(R.position.y=lf);let Oi=!1,ki=!1,Ai=!1,ji=!1,Mi=0,Ni=0,Pi=0,Fi=0,Ii=!1,Li=!1,Ri=null,zi=null,Bi=null,Vi=`clear`,Hi=40,Ui=0,Wi=0,Gi=`rain`,Ki=[`Hands`,`Knife`,`Axe`,`Spear`,`Meal`],qi=r?.pitch??.22,Ji=0,Yi=0,Xi=()=>{G.aimX=160,G.aimY=86,yi.set(0,0)},Zi=()=>{let e=Math.sin(bi),t=Math.cos(bi),n=Math.max(2.4,6.3*Math.cos(qi)),r=3.15+Math.sin(qi)*4.4;W?(n=5.1,r=2.75):Di&&(n=4.4,r=1.55);let i=W?R.position.y:Si?Math.max(0,R.position.y-.4):0;u.position.set(R.position.x-e*n,i+r+Mi,R.position.z-t*n);let a=i+(Di?.2:.95-Math.sin(qi)*2.4);u.lookAt(R.position.x+e*4,a,R.position.z+t*4)};function Qi(e){let t=null,n=e;for(let e of Nt){if(!e.alive||!e.ride)continue;let r=Rt(e),i=Math.hypot(r.x-R.position.x,r.z-R.position.z);i<n&&(t=e,n=i)}return t}function $i(){if(!Si)return;let e=Si;Si=null;let n=Math.sin(bi),r=Math.cos(bi);R.position.x-=n*1.15,R.position.z-=r*1.15,R.position.y=0,e.lx=R.position.x+n*1.35,e.lz=R.position.z+r*1.35,e.group.position.set(e.lx,0,e.lz),t.lines=[`You slide off the ${e.name}.`]}function ea(e){let n=Rt(e);Si=e,xi=!1,R.position.x=n.x,R.position.z=n.z,t.lines=[`You climb the ${e.name}. It carries you.`]}function ta(e){if(!e.world)return;e.group.removeFromParent();let t=Pt.get(e.isle.id);if(t)e.world=!1,e.lx-=e.isle.x,e.lz-=e.isle.z,t.root.add(e.group),e.group.position.set(e.lx,0,e.lz);else{let t=_.indexOf(e.body);t>=0&&_.splice(t,1);let n=Nt.indexOf(e);n>=0&&Nt.splice(n,1)}}function na(e){e.tamed&&(t.tame=`none`),Si===e&&(Si=null),e.tamed=!1,e.hostile=e.ride,ta(e)}function ra(e){if(e.name!==`raptor`&&e.name!==`rex`)return;if(t.baits<1){t.lines=[`Craft amber bait from amber and vine.`];return}for(let t=Nt.length-1;t>=0;--t){let n=Nt[t];n&&n!==e&&n.tamed&&(n.tamed=!1,n.hostile=n.ride,Si===n&&(Si=null),ta(n))}let r=Rt(e);e.world||(e.group.removeFromParent(),s.add(e.group),e.world=!0,e.lx=r.x,e.lz=r.z),e.tamed=!0,e.hostile=!1,e.group.position.set(e.lx,0,e.lz),ia(m(t,e.name)),n.hit()}let ia=e=>{Object.assign(t,e),(t.phase===`win`||t.phase===`lose`)&&(G.over=!0)},G={over:!1,failed:!1,showHelp:!0,aimX:160,aimY:78,prompt:``,near:null,vendor:null,px:0,pz:13,heading:bi,sky:`clear`,banner:``,slot:0,inside:!1,riding:!1,lot:null,update(e){if(Li||G.over)return;Fi+=e,fe(t,e),Ni=Math.max(0,Ni-e),Mi=Math.max(0,Mi-e*.45),Pi=Math.max(0,Pi-e),mi.visible=Pi>0;let r=Math.sin(bi),i=Math.cos(bi),o=0,c=0;Oi&&(o+=r,c+=i),ki&&(o-=r,c-=i),Ai&&(o+=i,c-=r),ji&&(o-=i,c+=r);let l=Math.hypot(o,c);l>0&&(o/=l,c/=l);let d=G.sky===`hurricane`?.62:G.sky===`rain`?.82:1,m=W||xi||!!Si||Ot(R.position.x,R.position.z);Di=!W&&!xi&&!Si&&!Ot(R.position.x,R.position.z);let h=!!Si&&!W&&!Ot(R.position.x,R.position.z),g=Si?.name===`rex`?7.2:9.4,_=(xi?t.hasKeel?18:13:Si?h?3.3:g:m?4.5:1.35)*d,v=1-Math.exp(-(l>0?16:12)*e);if(Ji+=(o*_-Ji)*v,Yi+=(c*_-Yi)*v,l===0&&Math.hypot(Ji,Yi)<.08&&(Ji=0,Yi=0),R.position.x+=Ji*e,R.position.z+=Yi*e,G.sky===`hurricane`&&(R.position.x+=2.1*e,R.position.z+=.55*e),W?(R.position.x=Math.max(-4.6,Math.min(4.4,R.position.x)),R.position.z=Math.max(77.6,Math.min(81.3,R.position.z)),R.position.y=lf,R.rotation.x=0,T.visible=!1,Math.hypot(R.position.x-ff.x,R.position.z-ff.z)<1.15&&ua()):Si?(T.visible=!0,R.position.y=Si.name===`rex`?1.55:.98,R.rotation.x=0):Di?(T.visible=!0,R.position.y=-.48,R.rotation.x=.9):(T.visible=!0,R.position.y=0,R.rotation.x=0),W||(T.position.x=R.position.x,T.position.z=R.position.z),mn(),xi&&!W){let e=[{x:vt.x,z:vt.z,r:vt.r},...Et(R.position.x,R.position.z,24)];for(let t of e){let e=R.position.x-t.x,n=R.position.z-t.z,r=Math.hypot(e,n);if(r<t.r-.35&&r>.05){let i=(t.r-.15)/r;R.position.x=t.x+e*i,R.position.z=t.z+n*i}}R.position.y=.22,R.rotation.x=0,Pr.position.set(R.position.x,-.02,R.position.z),Pr.rotation.y=bi}if(Di){let n=wi<=0;wi+=e,n&&(t.lines=[`You push off and swim.`]);let r=t.hasLungs?20:12;if(wi>=r*.55&&!Ti&&(Ti=!0,t.lines=[`You are tiring. The water will take you.`]),wi>=r){Ei+=e*(t.hasCharm?4:8);let n=Math.floor(Ei);n>0&&(Ei-=n,ia(f(t,n)))}}else wi=Math.max(0,wi-e*2),wi<=0&&(Ti=!1,Ei=0);if(t.hasRaft||(xi=!1,Pr.position.set(of.x,-.02,of.z),Pr.rotation.y=0),!W){for(let e of Pt.values()){let n=e.shells;if(n&&!Ft.has(e.isle.id)){let r=e.isle.x+n.position.x-R.position.x,i=e.isle.z+n.position.z-R.position.z;r*r+i*i<1.6&&(Ft.add(e.isle.id),n.visible=!1,e.shells=null,ia(O(t,3)),t.lines=[`Three shells in the rock. The buyer pays more for rarer finds.`])}for(let t of e.motes)if(t.kind===`fairy`)t.mesh.position.y=t.radius+Math.sin(Fi*2.2+t.phase)*.28,t.mesh.rotation.y=Fi*.8+t.phase;else if(t.kind===`fish`){let e=Fi*.7+t.phase;t.mesh.position.set(Math.cos(e)*t.radius,.22+Math.sin(Fi*3+t.phase)*.05,Math.sin(e)*t.radius*.72),t.mesh.rotation.y=-e+Math.PI/2}else if(t.kind===`smoke`){let e=(Fi*.35+t.phase)%1;t.mesh.position.y=2.5+e*2.2,t.mesh.position.x=t.ox+Math.sin(Fi+t.phase)*.2,t.mesh.scale.setScalar(.55+e*.8)}else{let e=(Fi*1.5+t.phase)%1;t.mesh.position.y=1.55-e*1.3}}for(let r of Nt){if(!r.alive){r.wait-=e,r.wait<=0&&(r.alive=!0,r.hp=r.maxHp,r.group.visible=!0);continue}let i=Rt(r);if(Si===r)r.lx=R.position.x+Math.sin(bi)*.45,r.lz=R.position.z+Math.cos(bi)*.45,r.heading=bi;else if(r.tamed&&!xi){let t=R.position.x-i.x,n=R.position.z-i.z,a=Math.hypot(t,n);if(a>2.5&&a<24){let i=Math.min(a-2.3,2.8*e);r.lx+=t/a*i,r.lz+=n/a*i,r.heading=Math.atan2(t,n)}}else if(r.hostile&&!xi){let a=R.position.x-i.x,o=R.position.z-i.z,s=Math.hypot(a,o);if(Math.hypot(R.position.x-r.isle.x,R.position.z-r.isle.z)<r.isle.r+1.4&&s<8){if(s>1.45){let t=Math.min(s-1.3,r.speed*e);r.lx+=a/s*t,r.lz+=o/s*t,r.heading=Math.atan2(a,o)}r.bite-=e,s<1.85&&r.bite<=0&&r.damage>0&&(r.bite=1.4,ia(p(t,r.damage,r.name)),n.hit())}else{r.heading+=Math.sin(Fi*.7+r.lx)*e*.8,r.lx+=Math.sin(r.heading)*r.speed*.25*e,r.lz+=Math.cos(r.heading)*r.speed*.25*e;let t=r.isle.r*.62;r.lx*r.lx+r.lz*r.lz>t*t&&(r.heading=Math.atan2(-r.lx,-r.lz))}}else if(!r.world){r.heading+=Math.sin(Fi*.7+r.lx)*e*1.4,r.lx+=Math.sin(r.heading)*r.speed*e,r.lz+=Math.cos(r.heading)*r.speed*e;let t=r.isle.r*.55;r.lx*r.lx+r.lz*r.lz>t*t&&(r.heading=Math.atan2(-r.lx,-r.lz))}r.group.position.set(r.lx,0,r.lz),r.group.rotation.y=r.heading}let r=Dt(R.position.x,R.position.z),i=r?.id??(Math.hypot(R.position.x,R.position.z)<=vt.r?`home`:``);r&&!xi&&!t.visited.includes(r.id)&&t.visited.push(r.id),r&&i!==Ci&&!xi&&(t.lines=[gf[r.theme]]),xi||(Ci=i)}G.px=R.position.x,G.pz=R.position.z,G.heading=bi,Zi(),Xi(),vi.setFromCamera(yi,u),R.rotation.y=bi;let y=Math.hypot(Ji,Yi)>.35;z.forEach((e,t)=>{if(Di){let n=Math.sin(Fi*(y?9:3)+t*Math.PI);e.rotation.x=.85+n*.75}else e.rotation.x=y?Math.sin(Fi*10+t*Math.PI)*.55:0}),ba(e,y),Zi();for(let r of Fe){if(!r.mesh.visible){r.respawn>0&&(r.wait-=e,r.wait<=0&&(r.mesh.visible=!0));continue}r.mesh.position.y=.28+Math.sin(Fi*3+r.mesh.position.x)*.07,r.mesh.rotation.y+=e;let i=r.mesh.position.x-R.position.x,a=r.mesh.position.z-R.position.z;i*i+a*a<1.35&&(ia(ye(t,r.kind,r.amount)),r.mesh.visible=!1,r.wait=r.respawn,n.hit())}Ri=null;let b=2.15;for(let t of Ie){if(!t.group.visible){t.wait-=e,t.wait<=0&&(t.group.visible=!0,t.group.quaternion.identity(),t.fall=-1);continue}if(t.fall>=0){t.fall+=e,_i.set(t.fallZ,0,-t.fallX),_i.lengthSq()<1e-4?_i.set(0,0,1):_i.normalize(),t.group.quaternion.setFromAxisAngle(_i,Math.min(1.3,t.fall*3.6)),t.fall>=.42&&(t.group.visible=!1,t.group.quaternion.identity(),t.wait=14,t.fall=-1);continue}t.kind===`palm`&&(t.group.rotation.z=Math.sin(Fi*1.4+t.x)*.04);let n=t.x-R.position.x,r=t.z-R.position.z,i=Math.hypot(n,r);i<b&&(b=i,Ri=t)}if(ir(e),G.inside=W,G.riding=!!Si,G.lot=null,G.near=null,G.prompt=``,W){let e=Math.hypot(R.position.x-uf.x,R.position.z-uf.z),n=Math.hypot(R.position.x-df.x,R.position.z-df.z);Math.hypot(R.position.x-ff.x,R.position.z-ff.z)<1.7?(G.near=`exit`,G.prompt=`X climbs the timber shaft.`):n<e?(G.near=`buyer`,G.prompt=G.vendor===`buyer`?se(t):`E talks to the buyer.`):(G.near=`stall`,G.prompt=G.vendor===`stall`?`Z closes the merchant.`:`E talks to the merchant.`),G.vendor&&G.near!==G.vendor&&(G.vendor=null)}else G.vendor&&=null;let x=(e,t)=>Math.hypot(e-R.position.x,t-R.position.z);!W&&x(cf.x,cf.z)<1.15?(Si&&$i(),W=!0,xi=!1,R.position.set(0,lf,78.2),bi=0,T.visible=!1,t.lines=[`A timbered shaft. The market is cut into the rock.`],G.inside=!0,G.vendor=null,G.near=`stall`,G.prompt=`E talks to the merchant. The buyer stands to the right.`):!W&&x(cf.x,cf.z)<2.5&&(G.near=`mouth`,G.prompt=`E enters the mine. The shaft is the only way in.`);let S=x(Qd.x,Qd.z),C=x($d.x,$d.z),w=x(ef.x,ef.z),E=x(tf.x,tf.z),D=x(Pr.position.x,Pr.position.z),ee=x(nf.x,nf.z),k=null,A=2.4;for(let e of rf){let t=x(e.x,e.z);t<A&&(k=e,A=t)}if(!(W||G.near===`mouth`)){if(xi)G.near=`boat`,G.prompt=`Q steps ashore. The boat reaches the other islands.`;else if(S<1.55)G.near=`fire`,t.hasFire?!t.hasSignal&&t.hasHandset&&t.hasBattery&&t.hasWire?G.prompt=`F fits the radio. R rests.`:t.raw>=10?G.prompt=`K cooks ${t.raw} lb. R rests and tells the sea.`:G.prompt=aa():G.prompt=`No fire yet. R rests through the night.`;else if(C<1.2)G.near=`rack`,G.prompt=t.hasRack?t.raw>=10?`M smokes 10 lb so the meal keeps.`:`The rack needs 10 lb. Raw ${t.raw}.`:`The mine sells a drying rack.`;else if(w<1.2)G.near=`catcher`,G.prompt=t.hasCatcher?t.salted?`The catcher is salted. U rinses it.`:t.catcher>0?`G drinks. The catcher holds ${t.catcher}.`:`The catcher is dry. Rain fills it.`:`The mine sells a rain catcher.`;else if(E<3.1)G.near=`wreck`,G.prompt=t.errand===`canteen`?`V finds Nia's canteen.`:t.wreckDay===t.day?`The tail is picked clean today.`:t.hasHandset?`V salvages the tail.`:`V pulls a handset from the tail.`;else if(t.hasRaft&&D<2.6&&!Si)G.near=`raft`,G.prompt=t.hasSail&&t.sea===`flat`?`Q boards the boat. L sails for open water.`:`Q boards the boat. It crosses to the other islands.`;else if(Qi(Si?3.2:2.5)){let e=Qi(Si?3.2:2.5);e?.tamed?(G.near=`mount`,G.prompt=Si?`Q steps off the dinosaur.`:`Q rides the ${e.name}.`):e&&(G.near=`beast`,G.prompt=t.baits>0?`E feeds the ${e.name}.`:`It bites. Craft amber bait from amber and vine.`)}else if(ee<3.2){let e=t.plots.filter(e=>e.crop!==`none`&&e.left<=0).length,n=t.plots.filter(e=>e.crop!==`none`&&e.left>0).length;G.near=`field`,G.prompt=e>0?`P picks ${e}. Barn ${t.wheat+t.berry+t.loaf} of 16.`:n>0?`The field is sown. Wheat and berries need a short while.`:`G plants wheat. Y plants berries. The barn holds the crop.`}else if(k){if(G.lot=k.id,!t[k.id]){let e=j[k.id],t=[`${e.shells} shells`];e.wood>0&&t.push(`${e.wood} wood`),e.stone>0&&t.push(`${e.stone} stone`),G.near=`town`,G.prompt=`N raises the ${e.name}. It wants ${t.join(` and `)}.`}else if(k.id===`bakery`)G.near=`oven`,G.prompt=t.bakeDone?`P takes the loaf.`:t.bakeLeft>0?`The oven is working.`:`K bakes a loaf from 2 wheat.`;else{G.near=`plaza`;let e=(t.houseA?2:0)+(t.houseB?2:0)+ +!!t.market+ +!!t.bakery;G.prompt=e>0?`${e} people keep the square.`:`The square is quiet.`}}else S<3.4&&(G.near=`camp`,G.prompt=oa())}if(Ri&&!W&&!xi&&G.near!==`beast`&&G.near!==`mount`&&G.near!==`field`&&G.near!==`town`&&G.near!==`oven`&&G.near!==`plaza`)G.near=null,G.prompt=Ri.kind===`palm`?t.hasAxe?`E chops wood with the axe.`:`Only an axe can chop this palm.`:Ri.kind===`tree`?t.hasAxe?`E chops the ${Ri.label}.`:`Only an axe can chop the ${Ri.label}.`:Ri.kind===`plant`?`E pulls the ${Ri.label}.`:Ri.kind===`log`?`E lifts the log. 2 wood.`:Ri.kind===`rocks`?`E mines the rock.`:Ri.kind===`vines`?`E pulls the vine.`:Ri.kind===`sap`?`E gathers glow sap.`:Ri.kind===`vent`?`E chips cinder.`:Ri.kind===`amber`?`E chips amber.`:`E opens the clam.`;else if(G.near!==`beast`&&G.near!==`mount`&&G.slot===1&&(Ea()||Ta()))G.prompt=`Click. The knife reaches it.`;else if(Di&&!G.prompt){let e=t.hasLungs?20:12;G.prompt=wi>=e?`You are drowning. Reach sand or the boat.`:`Swimming is slow. Stay out too long and you drown.`}gr.forEach((e,n)=>{let r=t.plots[n];if(!r||r.crop===`none`){e.visible=!1;return}e.visible=!0,e.material=r.crop===`berry`?hr:mr;let i=r.full>0?1-r.left/r.full:1,a=.16+Math.max(.08,i)*.55;e.scale.set(1,a/.45,1),e.position.y=.08+a*.5});let te=[t.houseA,t.houseB,t.market,t.bakery];if(rf.forEach((e,t)=>{let n=e.id===`houseA`||e.id===`houseB`?br[e.id===`houseA`?0:1]:xr[e.id===`market`?0:1];n&&(n.visible=te[t]===!0)}),Sr.forEach((t,n)=>{if(t.group.visible=t.show(),!t.group.visible)return;t.heading+=Math.sin(Fi*.7+n)*e*.8,t.group.position.x+=Math.sin(t.heading)*.45*e,t.group.position.z+=Math.cos(t.heading)*.45*e;let r=t.group.position.x-t.hx,i=t.group.position.z-t.hz;r*r+i*i>2.2&&(t.heading=Math.atan2(-r,-i)),t.group.rotation.y=t.heading,t.group.position.y=Math.sin(Fi*2+n)*.02}),or.forEach((e,t)=>{e.position.y=Math.sin(Fi*2+t)*.03}),Xn.forEach((e,t)=>{e.position.y=Math.sin(Fi*1.6+t)*.02}),cr.visible=t.hasFire,t.hasFire){let e=.85+Math.sin(Fi*9)*.2;cr.scale.set(1,e,1),cr.position.y=.28+e*.25}if(lr.visible=t.hasShelter,wr.visible=t.hasRack,Or.visible=t.hasCatcher,Hr.visible=t.hasSail&&t.hasRaft,Nr.visible=t.hasRaft,Pr.visible=t.hasRaft,Pr.visible){let e=xi&&Math.hypot(Ji,Yi)>.45,t=Math.sin(Fi*(e?7.5:1.7))*(e?.08:.03);Pr.position.y=-.02+t,xi&&(R.position.y=.22+t),Pr.rotation.x=e?Math.sin(Fi*6.2)*.07:Math.sin(Fi*1.4)*.02,Pr.rotation.z=e?Math.sin(Fi*3.1)*.06:Math.sin(Fi*1.1)*.015;let n=e?Math.sin(Fi*8):0;Ur.rotation.x=e?-.35+n*.95:-.25,Wr.rotation.x=e?-.35-n*.95:-.25,Kr.forEach((t,n)=>{t.visible=e;let r=(Fi*1.7+n*.23)%1;t.position.z=-.65-r*1.7,t.position.x=(n%2==0?-1:1)*(.2+r*.4),t.scale.setScalar(Math.max(.2,1-r*.7))}),Hr.visible&&(Hr.rotation.z=Math.sin(Fi*(e?6:2))*(e?.2:.06))}if(kr.visible=t.tsunamiSeen&&!t.hasBattery,kr.visible){kr.position.y=.22+Math.sin(Fi*3)*.05;let e=sf.x-R.position.x,r=sf.z-R.position.z;e*e+r*r<1.35&&(t.hasBattery=!0,t.lines=[`The tide left a battery in the sand.`],kr.visible=!1,n.hit())}Ar.visible=t.hasSignal,t.hasSignal&&(Ar.position.y=1+Fi*.8%1.6,Ar.position.x=Qd.x+Math.sin(Fi)*.15),T.position.y=-.28+Math.sin(Fi*1.4)*.04,sa(e),t.phase===`world`&&(t.hunger=Math.max(0,t.hunger-e*.22),t.thirst=Math.max(0,t.thirst-e*.15),t.hunger===0&&(t.health=Math.max(0,t.health-e*3)),t.thirst===0&&(t.health=Math.max(0,t.health-e*2.2)),t.health<=0&&(t.phase=`lose`,t.endTitle=t.thirst<=0&&t.hunger>0?`You dry out`:`You starve`,t.lines=[`The island outlasts you.`],G.over=!0));let ne=Bd(ar.animals,e,!xi&&!W?{x:R.position.x,z:R.position.z}:void 0);for(let e of ne)ia(p(t,e.damage,e.name)),n.hit();for(let t=$r.length-1;t>=0;--t){let n=$r[t];n&&(n.life-=e,n.mesh.scale.setScalar(1+(.25-n.life)*6),n.life<=0&&(s.remove(n.mesh),$r.splice(t,1)))}G.showHelp=!Ii&&Fi<5,a.render(s,u)},aim(){Ii=!0},look(e,t){G.over||e===0&&t===0||(bi-=e*.0026,qi=Math.max(-.42,Math.min(.95,qi+t*.002)),Ii=!0)},setMove(e){Oi=e.fore,ki=e.back,Ai=e.left,ji=e.right},interact(){if(!(G.over||fa())){if(G.near===`beast`){let e=Qi(2.6);e&&!e.tamed&&ra(e)}else if(Ri&&Ri.group.visible&&Ri.fall<0){let e=Ri;if(e.kind===`sap`||e.kind===`vent`||e.kind===`clam`||e.kind===`amber`){let r=e.kind===`sap`?`sap`:e.kind===`vent`?`cinder`:e.kind===`amber`?`amber`:`pearl`;ia(ye(t,r,1)),e.group.visible=!1,e.wait=22,n.hit();return}if((e.kind===`palm`||e.kind===`tree`)&&!t.hasAxe){t.lines=[e.kind===`palm`?`Only an axe can chop wood.`:`Only an axe can chop the ${e.label}.`],n.dry();return}ya(e.kind===`palm`||e.kind===`tree`?`axe`:e.kind===`rocks`?`mine`:`vine`,{node:e})}else G.near===`mouth`?(Si&&$i(),W=!0,xi=!1,R.position.set(0,lf,78.2),bi=0,T.visible=!1,t.lines=[`A timbered shaft. The market is cut into the rock.`]):G.near===`exit`?ua():G.near===`stall`||G.near===`buyer`?(G.vendor===G.near?G.vendor=null:G.vendor=G.near,t.lines=G.vendor===`stall`?[`The merchant sells what camp cannot make.`]:G.vendor===`buyer`?[se(t)]:[`You step back from the counter.`]):(G.near===`fire`||G.near===`camp`)&&(t.chatter=(t.chatter+1)%pf.length,t.lines=[pf[t.chatter]??pf[0]])}},leave(){ua()},trade(){(G.near===`stall`||G.near===`buyer`)&&(G.vendor===G.near?G.vendor=null:G.vendor=G.near,t.lines=G.vendor===`stall`?[`The merchant sells what camp cannot make.`]:G.vendor===`buyer`?[se(t)]:[`You step back from the counter.`])},closeVendor(){G.vendor=null,t.lines=[`You step back from the counter.`]},board(){if(G.near===`mount`){if(Si)$i();else{let e=Qi(3.2);e?.tamed&&ea(e)}}else Si&&$i(),ca()},feed(){let e=Qi(2.6);e&&!e.tamed&&ra(e)},shoot(){wa(0)},use(){wa(2)},select(e){G.slot=(e%mf+mf)%mf,t.lines=[Ki[G.slot]??`Hands`]},quiet(){Ii=!0,G.showHelp=!1},claimed(){return[...Ft]},capture(){return{x:R.position.x,z:R.position.z,heading:bi,pitch:qi,aboard:xi,boatX:Pr.position.x,boatZ:Pr.position.z,boatHeading:Pr.rotation.y,inside:W}},cycle(e){G.select(G.slot+e)},dispose(){if(!Li){Li=!0,o.remove(),b.dispose(),s.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()});for(let e of g)e.dispose();a.dispose()}}};function aa(){if(t.hasSignal)return`The radio is fitted. R rests for a plane.`;let e=[];return t.hasHandset||e.push(`handset`),t.hasBattery||e.push(`battery`),t.hasWire||e.push(`wire`),e.length===0?`F fits the radio.`:`Radio still needs ${e.join(`, `)}.`}function oa(){return t.errand===`canteen`?`Nia lost a canteen by the tail.`:t.errand===`boar`?`Sol wants a boar before dark.`:t.errand===`rack`?`Pim will not sleep until the rack is built.`:`The camp is quiet.`}function sa(e){if(t.phase!==`world`)return;if(Hi-=e,Vi===`clear`){G.sky=`clear`,G.banner=Hi<8?`Weather is building.`:``,da(`clear`),D.visible=!1;for(let e of k)e.visible=!1;if(Hi<=0){Gi=Le(Math.random(),Ui),Vi=`warn`,Hi=5;let e=W?`Weather outside. The cave holds.`:Gi===`rain`?`Rain is coming. Shelter sheds it.`:Gi===`hurricane`?`Hurricane building. Reach shelter.`:`The sea pulls back. Get inland.`;G.banner=e,t.lines=[e]}return}if(Vi===`warn`){if(G.sky=`clear`,G.banner=t.lines[0]||`Weather is coming.`,da(`clear`),D.visible=Gi===`tsunami`&&!W,Hi<=0){let e=Math.hypot(R.position.x,R.position.z),r=!W&&e<=vt.r&&e>10,i=r||!W&&!Ot(R.position.x,R.position.z);if(ia(ze(t,Gi,i,W)),Gi===`tsunami`&&(Wi=0),r&&Gi===`tsunami`&&!t.hasShelter){let t=e||1;R.position.x*=8/t,R.position.z*=8/t}Gi!==`rain`&&n.boom(),G.banner=t.lines[0]??Gi,Vi=Gi,Hi=Gi===`tsunami`?8:Gi===`hurricane`?14:18,Ui+=1}return}G.sky=Vi,da(Vi),D.visible=Vi===`tsunami`,Vi===`tsunami`&&D.scale.setScalar(.35+Math.max(0,Hi/8)*.85);let r=Vi===`rain`||Vi===`hurricane`;Vi===`rain`&&t.hasCatcher&&!t.salted&&(Wi+=e,Wi>=8&&t.catcher<3&&(Wi-=8,t.catcher+=1,t.lines=[`Rain fills the catcher. It holds ${t.catcher}.`])),k.forEach((e,t)=>{if(e.visible=r,!r)return;let n=(Fi*(Vi===`hurricane`?10:6)+t*.37)%1;e.position.set(R.position.x+t*1.7%10-5,6-n*6,R.position.z+t*2.3%10-5)}),Hi<=0&&(Vi=`clear`,Hi=36+Math.random()*22,D.visible=!1,G.banner=`The sky clears.`,t.lines=[`The sky clears.`])}function ca(){if(!t.hasRaft||W)return;if(xi){let e=la(R.position.x,R.position.z),n=e?R.position.x-e.x:0,r=e?R.position.z-e.z:0,i=Math.hypot(n,r);if(!e||i>e.r+2.4){t.lines=[`Beach the boat at a shore, then Q steps off.`];return}let a=i||1,o=n/a,s=r/a;R.position.x=e.x+o*(e.r-1.7),R.position.z=e.z+s*(e.r-1.7),Pr.position.set(e.x+o*(e.r+.9),-.02,e.z+s*(e.r+.9)),xi=!1,R.position.y=0,t.lines=[e.theme===`jungle`?`You step into the green. The boat waits in the shallows.`:e.theme===`volcano`?`You step onto the black rock. The boat waits in the shallows.`:e.theme===`reef`?`You step into the shallows. The boat waits beside the coral.`:e.theme===`fossil`?`Fern and bone. The dinosaurs have seen you.`:e.theme===`frost`?`You step onto the ice. The boat waits in the melt.`:e.theme===`dune`?`Hot sand. The boat waits off the beach.`:e.theme===`bloom`?`Flowers underfoot. The boat waits in the shallows.`:`You step onto the sand. The boat waits in the shallows.`];return}let e=Pr.position.x-R.position.x,n=Pr.position.z-R.position.z;e*e+n*n>7?t.lines=[`The boat is moored at the south dock.`]:(xi=!0,R.position.x=Pr.position.x,R.position.z=Pr.position.z,R.position.y=.22,t.lines=[`You take the boat. Steer for another island.`])}function la(e,t){let n=null,r=5,i=[{x:vt.x,z:vt.z,r:vt.r,theme:`home`},...Et(e,t,20)];for(let a of i){let i=Math.abs(Math.hypot(e-a.x,t-a.z)-a.r);i<r&&(n=a,r=i)}return n}function ua(){W&&(W=!1,G.vendor=null,R.position.set(cf.x,0,cf.z+3.6),bi=0,Ji=0,Yi=0,T.visible=!0,t.lines=[`You climb the shaft back onto the sand.`],da(G.sky===`clear`?`clear`:G.sky))}function da(e){W?(c.set(`#c4a06a`),l.color.set(`#b89068`),l.near=12,l.far=36,h.color.set(`#ffe0b0`),h.intensity=1.15,d.color.set(`#ffe8c4`),d.groundColor.set(`#8a6844`),d.intensity=1.25):(h.color.set(F.cream),d.color.set(F.skyLight),d.groundColor.set(F.grassDark),e===`hurricane`?(c.set(`#3e5564`),l.color.set(`#3e5564`),l.near=4,l.far=14,h.intensity=.25,d.intensity=.4):e===`rain`?(c.set(`#6a8ea0`),l.color.set(`#6a8ea0`),l.near=8,l.far=22,h.intensity=.45,d.intensity=.6):e===`tsunami`?(c.set(`#4a90a8`),l.color.set(`#4a90a8`),l.near=10,l.far=26,h.intensity=.5,d.intensity=.7):(c.set(F.sky),l.color.set(F.sky),l.near=22,l.far=96,h.intensity=.85,d.intensity=.95))}function fa(){return Ni>0||zi!==null||Bi!==null}function pa(){let e=zi?.kind,n=e===`knife`||e===`vine`||e===`mine`&&!t.hasAxe||!e&&G.slot===1;ci.visible=t.hasKnife&&n,li.visible=t.hasAxe&&(e===`axe`||e===`mine`||!e&&G.slot===2),ui.visible=t.bullets>0&&!Bi&&(e===`throw`||!e&&G.slot===3),di.visible=t.hasKnife&&!ci.visible}function ma(e,t,n){let r=Math.max(0,Math.min(1,n));return e+(t-e)*r}function ga(e){let t=Math.sin(bi),n=Math.cos(bi);U.forEach((r,i)=>{if(r.visible=e>.08,!r.visible)return;let a=.55+e*1.15,o=(i-1)*(.25+e*.55);r.position.set(R.position.x+t*a+n*o,.85+e*.25-i*.08,R.position.z+n*a-t*o),r.rotation.y=bi,r.scale.set(1,.7+e,1)})}function ya(e,t={}){let n=e===`throw`?.5:e===`axe`?.52:e===`vine`?.48:.42;zi={kind:e,t:0,dur:n,struck:!1,...t},Ni=n}function ba(e,n){let r=n?Math.sin(Fi*10):0,i=-1.05;if(Di&&!zi){let t=Math.sin(Fi*(n?7:2.4));oi.rotation.x=-.35+t*1.15,oi.rotation.y=0,oi.rotation.z=-.55,V.rotation.x=-.9,V.rotation.y=0,V.rotation.z=0,ai.rotation.x=-.35-t*1.15,ai.rotation.y=0,ai.rotation.z=.55,ga(0),pa(),xa(e);return}if(zi){zi.t+=e;let t=Math.min(1,zi.t/zi.dur),n=i,r=-.15,a=.3;if(zi.kind===`axe`||zi.kind===`mine`){let e=zi.kind===`mine`?.28:.34,o=zi.kind===`mine`?.5:.56,s=zi.kind===`mine`?1.7:2.45;t<e?(n=ma(i,s,t/e),r=ma(-.15,-.85,t/e)):t<o?(n=ma(s,-.7,(t-e)/(o-e)),r=ma(-.85,-.05,(t-e)/(o-e))):(n=ma(-.7,i,(t-o)/(1-o)),r=ma(-.05,-.15,(t-o)/(1-o))),a=.5}else zi.kind===`knife`?t<.22?(n=ma(-.35,1.15,t/.22),r=ma(0,-.55,t/.22)):t<.5?(n=ma(1.15,-1.55,(t-.22)/.28),r=ma(-.55,.1,(t-.22)/.28)):(n=ma(-1.55,i,(t-.5)/.5),r=ma(.1,-.15,(t-.5)/.5)):zi.kind===`vine`?(n=t<.34?ma(-.3,-1.45,t/.34):t<.62?ma(-1.45,.75,(t-.34)/.28):ma(.75,-.2,(t-.62)/.38),r=t<.62?-.3:-.1,a=n):t<.42?(n=ma(i,1.9,t/.42),r=ma(-.15,-.95,t/.42)):t<.62?(n=ma(1.9,-1.4,(t-.42)/.2),r=ma(-.95,.05,(t-.42)/.2)):(n=ma(-1.4,i,(t-.62)/.38),r=ma(.05,-.15,(t-.62)/.38));oi.rotation.x=n,oi.rotation.y=0,oi.rotation.z=zi.kind===`knife`?-.12:-.22,V.rotation.x=r,V.rotation.y=0,V.rotation.z=0,ai.rotation.x=a,ai.rotation.y=0,ai.rotation.z=.2;let o=zi.kind===`throw`||zi.kind===`vine`?.62:zi.kind===`axe`?.56:.5;!zi.struck&&t>=o&&(zi.struck=!0,Sa()),zi&&zi.t>=zi.dur&&(zi=null)}else{let e=t.hasAxe||t.bullets>0||t.hasKnife;oi.rotation.x=e?i+r*.05:-r*.5,oi.rotation.y=0,oi.rotation.z=e?-.28:-.18,V.rotation.x=e?-.15:0,V.rotation.y=0,V.rotation.z=0,ai.rotation.x=r*.5,ai.rotation.y=0,ai.rotation.z=.22}let a=zi?.kind===`knife`?Math.min(1,zi.t/zi.dur):0;ga(a<.22?0:a<.5?(a-.22)/.28:Math.max(0,1-(a-.5)/.22)),pa(),xa(e)}function xa(e){if(!Bi)return;if(Bi.fresh){Bi.fresh=!1,Bi.mesh.position.copy(Bi.from),Bi.to.distanceToSquared(Bi.from)>.04&&Bi.mesh.lookAt(Bi.to);return}Bi.t+=e;let t=Math.min(1,Bi.t/Bi.dur);if(Bi.mesh.position.lerpVectors(Bi.from,Bi.to,t),t<1&&Bi.to.distanceToSquared(Bi.mesh.position)>1e-4&&Bi.mesh.lookAt(Bi.to),t<1||Bi.done)return;Bi.done=!0;let n=Bi;Bi=null,n.apply(),s.remove(n.mesh),n.mesh.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()})}function Sa(){if(!zi)return;if(zi.kind===`throw`){Ca();return}if(zi.kind===`knife`){let e=Math.sin(bi),r=Math.cos(bi);Da(R.position.x+e*.9,.85,R.position.z+r*.9);let i=zi.critter;if(i){if(!i.alive){n.dry(),t.lines=[`The knife cuts the air.`];return}--i.hp;let e=Rt(i),r=e.x,a=e.z;Da(r,.45,a),n.hit(),i.hp<=0?(na(i),i.alive=!1,i.wait=24,i.group.visible=!1,t.kills+=1,Be(i.drop,1,r,a,22),Be(`raw`,i.name===`crab`?8:14,r+.35,a,0),t.lines=[`The knife drops the ${i.name}.`]):t.lines=[`The knife cuts the ${i.name}.`];return}let a=zi.animal;if(!a||a.mode===`dead`){n.dry(),t.lines=[`The knife cuts the air.`];return}let o=a.species,s=a.hp<=1;Oa(a),Da(a.group.position.x,.55,a.group.position.z),Vd(ar.animals,a.group.position.x,a.group.position.z),t.lines=[s?`The knife drops the ${o}.`:`The knife cuts the ${o}.`];return}let e=zi.node;!e||!e.group.visible||e.fall>=0?zi.kind===`axe`&&(t.lines=[`The axe cuts the air.`]):(e.kind===`palm`||e.kind===`tree`||e.kind===`rocks`||e.kind===`vines`||e.kind===`plant`||e.kind===`log`)&&(ia(be(t,e.kind,e.label)),(e.kind!==`palm`&&e.kind!==`tree`||t.hasAxe)&&(n.hit(),Da(e.x,e.kind===`palm`||e.kind===`tree`?1.05:.4,e.z),e.kind===`palm`||e.kind===`tree`?(e.fallX=e.x-R.position.x,e.fallZ=e.z-R.position.z,e.fall=0):(e.group.visible=!1,e.wait=14)))}function Ca(){if(t.bullets<=0){n.dry();return}--t.bullets,n.shot(),Mi=.12,Pi=.06,mi.visible=!0,Xi(),Zi(),vi.setFromCamera(yi,u),R.updateMatrixWorld(!0);let e=new H;si.getWorldPosition(e);let r=vi.ray.direction.clone(),i=e.clone().add(r.multiplyScalar(11)),a=`none`,o=null,c=null,l=vi.intersectObjects(_,!1);for(let e of l){if(e.object.userData.player)continue;i=e.point.clone();let t=e.object.userData.critter;if(t?.alive){c=t;break}let n=Hd(e.object);n?n.mode===`dead`?a=`dead`:(a=`animal`,o=n):a=`ground`;break}let d=i.clone(),f=a,p=o,m=new K,h=new q(new J(.06,.06,.7),A);h.position.z=-.32,h.userData.player=!0;let g=new q(new J(.11,.11,.16),re);g.position.z=.12,g.userData.player=!0,m.add(h,g),m.position.copy(e),d.distanceToSquared(e)>.04&&m.lookAt(d),s.add(m);let v=Math.max(.45,e.distanceTo(d)),y=Math.min(.48,Math.max(.2,v/14));Ni=Math.max(Ni,y),Bi={mesh:m,from:e.clone(),to:d,t:0,dur:y,done:!1,fresh:!0,apply:()=>{if(c?.alive){--c.hp;let e=Rt(c),n=e.x,r=e.z;Da(n,.4,r),c.hp<=0&&(na(c),c.alive=!1,c.wait=24,c.group.visible=!1,t.kills+=1,Be(c.drop,1,n,r,22),Be(`raw`,c.name===`crab`?8:14,n+.35,r,0)),t.lines=[`The spear hits the ${c.name}.`]}else f===`animal`&&p?(Oa(p),Vd(ar.animals,d.x,d.z),t.lines=[`The spear hits the ${p.species}.`]):f===`dead`?Da(d.x,d.y,d.z):f===`ground`&&(Da(d.x,d.y,d.z),Vd(ar.animals,d.x,d.z))}}}function wa(e){if(G.over||t.phase!==`world`||fa())return;Ii=!0;let r=G.slot;if(r===4)ia(P(t));else if(r===1){if(!t.hasKnife){n.dry(),t.lines=[`Craft a knife first.`];return}let e=Ea(),r=e?null:Ta();ya(`knife`,e?{animal:e}:r?{critter:r}:{})}else if(r===2){if(!t.hasAxe){n.dry(),t.lines=[`Craft an axe first.`];return}let e=Ri&&(Ri.kind===`palm`||Ri.kind===`tree`)&&Ri.group.visible&&Ri.fall<0?Ri:void 0;ya(`axe`,e?{node:e}:{})}else if(r===3){if(t.bullets<=0){n.dry(),t.lines=[`No spear. Craft one.`];return}ya(`throw`)}else e!==2&&(n.dry(),t.lines=[`Empty hands.`])}function Ta(){let e=null,t=2.1;for(let n of Nt){if(!n.alive||n.tamed)continue;let r=Rt(n),i=r.x-R.position.x,a=r.z-R.position.z,o=Math.hypot(i,a);o<t&&(e=n,t=o)}return e}function Ea(){if(!t.hasKnife)return null;Xi(),Zi(),vi.setFromCamera(yi,u);let e=vi.ray.origin,n=vi.ray.direction,r=null,i=99;for(let t of ar.animals){if(t.mode===`dead`)continue;let a=t.group.position.x-R.position.x,o=t.group.position.z-R.position.z;if(a*a+o*o>10.24)continue;let s=t.group.position.x-e.x,c=t.group.position.y+.45-e.y,l=t.group.position.z-e.z,u=s*n.x+c*n.y+l*n.z;if(u<0)continue;let d=s-n.x*u,f=c-n.y*u,p=l-n.z*u;d*d+f*f+p*p>1.69||u<i&&(r=t,i=u)}return r}function Da(e,t,n){let r=new q(Qr,Zr);r.position.set(e,t+.05,n),s.add(r),$r.push({mesh:r,life:.22})}function Oa(e){--e.hp,e.flash=.14,n.hit(),e.hp>0?e.temper===`fight`?(e.mode=`charge`,e.modeTime=2.4):(e.mode=`flee`,e.modeTime=1.8):e.claimed||(e.claimed=!0,e.mode=`dead`,t.kills+=1,Be(`raw`,e.meat,e.group.position.x,e.group.position.z,0),e.species===`boar`&&t.errand===`boar`&&ia(Ae(t)))}return W&&(da(`clear`),T.visible=!1,R.position.y=lf),T.position.x=R.position.x,T.position.z=R.position.z,mn(),G}function vf(){return{over:!0,failed:!0,showHelp:!1,aimX:160,aimY:78,prompt:``,near:null,vendor:null,lot:null,px:0,pz:0,heading:0,sky:`clear`,banner:``,slot:0,inside:!1,update(){},aim(){},look(){},setMove(){},interact(){},leave(){},trade(){},closeVendor(){},board(){},riding:!1,capture:()=>({x:0,z:13,heading:Math.PI,pitch:.22,aboard:!1,boatX:of.x,boatZ:of.z,boatHeading:0,inside:!1}),feed(){},claimed:()=>[],quiet(){},shoot(){},use(){},select(){},cycle(){},dispose(){}}}function yf(e=`home`){let t=document.createElement(`canvas`);t.width=128,t.height=128;let n=t.getContext(`2d`);if(n){let t=n.createImageData(128,128);for(let n=0;n<128;n+=1)for(let r=0;r<128;r+=1){let i=r+.5-64,a=n+.5-64,o=Math.hypot(i,a)/64,s=(n*128+r)*4;if(o>1)continue;let c=(Math.imul(r,196613)+Math.imul(n,83492791)>>>0)%11,l=e===`jungle`?Math.abs(r-64+(n-64)*.2)<6&&o<.9?c%2==0?[46,176,180]:[28,140,150]:c===0&&o<.78?[232,90,146]:c===1&&o<.74?[255,176,64]:o>.8?[214,176,96]:c<6?[32,124,54]:[22,90,40]:e===`volcano`?(Math.abs((r*3+n*2)%19)<2||Math.abs((n*3-r)%23)<2)&&o<.86?c%2==0?[255,118,28]:[210,58,14]:o>.74?[62,54,50]:c<5?[40,36,36]:[26,24,26]:e===`fossil`?o>.82?c<4?[214,186,120]:[168,132,72]:c===0?[214,168,48]:c<3?[214,198,150]:c<8?[42,108,38]:[28,78,32]:e===`reef`?c===0?[255,90,138]:c===1?[255,138,60]:c===2?[58,208,214]:c<5?[255,214,176]:o>.82?[96,198,200]:[40,164,174]:e===`frost`?o>.8?c<5?[232,242,248]:[186,214,230]:c<3?[214,236,246]:c<8?[244,250,255]:[150,196,220]:e===`dune`?Math.abs((r+n*2)%17)<2?[196,154,78]:o>.78?[214,176,96]:c<2?[106,122,50]:c<7?[230,194,122]:[196,150,72]:e===`bloom`?c===0?[240,96,152]:c===1?[255,192,74]:c===2?[196,90,210]:o>.8?[214,176,96]:c<7?[63,154,72]:[47,122,48]:o>.66?c<4?[237,214,168]:[216,188,134]:c<4?[226,199,146]:c<7?[63,122,48]:[47,106,36];t.data[s]=l[0]??0,t.data[s+1]=l[1]??0,t.data[s+2]=l[2]??0,t.data[s+3]=255}n.putImageData(t,0,0)}let r=new qo(t);return r.colorSpace=Br,r.magFilter=Sn,r.minFilter=Sn,r.wrapS=yn,r.wrapT=yn,r}var bf=document.querySelector(`#frame`),xf=document.querySelector(`#world`),Sf=document.querySelector(`#hud`);if(!bf||!xf||!Sf)throw Error(`Castaway is missing its screen.`);var Cf=Sf.getContext(`2d`);if(!Cf)throw Error(`Castaway cannot draw.`);var wf=`saltwake-race-best`,Tf=`castaway-race-best`,Ef=e(),Df=He(),Q=u(),$=null,Of=null,kf=null,Af=!1,jf=!1,Mf=!Wd(),Nf=0,Pf=new Set,Ff=performance.now();function If(){let e=Math.min(window.innerWidth/320,window.innerHeight/200);bf.style.transform=`scale(${e})`;let t=320*e,n=200*e;bf.style.left=`${Math.floor((window.innerWidth-t)/2)}px`,bf.style.top=`${Math.floor((window.innerHeight-n)/2)}px`}function Lf(e){let t=bf.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*320,y:(e.clientY-t.top)/t.height*200}}var Rf=!1,zf=!1,Bf=null,Vf={raft:`Boat`,catcher:`Rain catcher`,rack:`Drying rack`,sail:`Sail`,woodminion:`Wood collector`,rockminion:`Rock collector`,vineminion:`Vine collector`,keel:`Quicker boat`,lungs:`Longer breath`,quiver:`Spare spear`};function Hf(){return Q.help?It():zf&&Q.phase===`world`&&$?Jt():Rf&&Q.phase===`world`&&$?Lt():Q.phase===`world`&&$?qt(Q,$.near,$.vendor,$.riding):Rt(Q,Wd())}function Uf(e){Rf=e,e&&(Pf.clear(),kf=null,ep=!1,$?.setMove({fore:!1,back:!1,left:!1,right:!1}),document.pointerLockElement&&document.exitPointerLock())}function Wf(e){Object.assign(Q,e),$&&(Q.phase===`win`||Q.phase===`lose`)&&($.over=!0)}function Gf(e,t=[]){$?.dispose(),Rf=!1,$=_f(xf,Q,Ef,e,t),$.failed&&($.dispose(),$=null,Q.phase=`lose`,Q.endTitle=`The shore will not draw`,Q.lines=[`This browser could not show the island.`])}function Kf(){$&&($.dispose(),$=null,kf=null)}function qf(){try{let e=localStorage.getItem(wf)??localStorage.getItem(Tf),t=e?Number(e):NaN;return Number.isFinite(t)&&t>0?t:null}catch{return null}}function Jf(e){try{localStorage.setItem(wf,String(Math.floor(e)))}catch{}}function Yf(){if(!Q.speedrun||jf||Q.phase!==`win`&&Q.phase!==`lose`)return;jf=!0;let e=d(Q.speedMs);if(Q.phase===`lose`){Q.lines=[Q.lines[0]??`The race ends.`,`Clock ${e}.`];return}Df.offer({ms:Q.speedMs,route:Q.endTitle===`The search plane`?`plane`:`raft`});let t=qf();t===null||Q.speedMs<t?(Jf(Q.speedMs),Q.bestMs=Q.speedMs,Q.lines=[Q.lines[0]??`Off the island.`,`${e}. New best.`]):(Q.bestMs=t,Q.lines=[Q.lines[0]??`Off the island.`,`${e}. Best ${d(t)}.`])}function Xf(e){$&&(Q.phase===`world`||Q.phase===`craft`)&&(e||Mf)&&(Yd(Gd(Q,$.capture(),$.claimed()))?(Mf=!0,Nf=0,e&&($.quiet(),Q.lines=[`The shore is written down.`])):e&&(Q.lines=[`This browser will not keep the shore.`]))}function Zf(){let e=Jd();e?(Df.close(),Df.clearFinish(),Kf(),Q=e.state,Mf=!0,Af=!0,jf=!1,Gf(e.pose,e.claimed)):Q.lines=[`Nothing is written down.`]}function Qf(e){if(e===`skip`)Q.crash=6;else if(e===`board`)Df.open();else if(e===`how`)Df.close(),Q.help=!0;else if(e===`howback`)Q.help=!1;else if(e===`chart`||e===`chartesc`)zf=!zf,zf&&(Pf.clear(),kf=null,ep=!1,$?.setMove({fore:!1,back:!1,left:!1,right:!1}),document.pointerLockElement&&document.exitPointerLock());else if(e===`pause`)Uf(!0);else if(e===`resume`)Uf(!1);else if(e===`trade`)$?.trade();else if(e===`vend`)$?.closeVendor();else if(e===`wake`)Df.close(),Df.clearFinish(),Kf(),Wf(v(Q,!1)),Mf=!Wd(),Nf=0,Gf();else if(e===`load`)Zf();else if(e===`save`)Xf(!0);else if(e===`again`)Df.close(),Df.clearFinish(),Kf(),Q=u(),Af=!1,jf=!1,Mf=!Wd(),Nf=0;else if(e===`craft`)Q.phase=`craft`;else if(e===`back`)Q.phase=`world`;else if(e.startsWith(`make-`))Wf(Ce(Q,e.slice(5)));else if(e.startsWith(`buy-`)){let t=e.slice(4),n=Q.shells;Wf(ve(Q,t)),Q.shells<n&&(Bf={title:`Bought`,label:Vf[t],at:performance.now()},Ef.cheer())}else if(e===`turnin`){let e=Q.shells;Wf(C(Q)),Q.shells>e&&(Bf={title:`Paid`,label:`${Q.shells-e} shells`,at:performance.now()},Ef.cheer())}else if(e===`order`){let e=Q.shells;Wf(de(Q)),Q.shells>e&&(Bf={title:`Paid`,label:`${Q.shells-e} shells`,at:performance.now()},Ef.cheer())}else e===`sow-wheat`?Wf(pe(Q,`wheat`)):e===`sow-berry`?Wf(pe(Q,`berry`)):e===`reap`?Wf(me(Q)):e===`raise`?$?.lot&&Wf(he(Q,$.lot)):e===`bake`?Wf(ge(Q)):e===`loaf`?Wf(_e(Q)):e.startsWith(`sell-`)?Wf(ee(Q,e.slice(5))):e===`leave`?$?.leave():e===`embark`?$?.board():e===`feed`?$?.feed():e===`sail`?Wf(je(Q)):e===`cook`?Wf(Ee(Q)):e===`smoke`?Wf(M(Q)):e===`drink`?Wf(De(Q)):e===`rinse`?Wf(Oe(Q)):e===`fit`?Wf(ke(Q)):e===`rack`||e===`catcher`?Wf(Ce(Q,e)):e===`eat`?Wf(P(Q)):e===`rest`?Wf(Pe(Q,Q.hasFire?`Slept by the fire.`:`Slept on open sand.`)):e===`ask`?Wf(Q.errand===`canteen`?N(Q):Te(Q)):e===`forage`?Wf(xe(Q)):e===`palm`||e===`rocks`||e===`vines`||e===`nuts`?Wf(we(Q,e)):e===`fire`?Q.phase=`fire`:e===`wreck`?Q.phase=`wreck`:e===`hunt`?Q.phase=`hunt`:e===`next`?(Q.chatter+=1,Q.lines=[]):e===`shoot`?$?.shoot():e===`leave`?Q.phase=`beach`:e.startsWith(`slot-`)&&$?.select(Number(e.slice(5)))}function $f(){return Df.isOpen()?{fore:!1,back:!1,left:!1,right:!1}:{fore:kf===`fore`||Pf.has(`w`)||Pf.has(`arrowup`),back:kf===`backwalk`||Pf.has(`s`)||Pf.has(`arrowdown`),left:Pf.has(`a`)||Pf.has(`arrowleft`),right:Pf.has(`d`)||Pf.has(`arrowright`)}}var ep=!1;function tp(){return window.matchMedia(`(pointer: fine)`).matches}Sf.addEventListener(`pointerdown`,e=>{Ef.unlock();let t=Lf(e),n=Ge(Hf(),t.x,t.y);if(n?.id===`fore`||n?.id===`backwalk`)kf=n.id;else if(n)Qf(n.id);else if(!(Q.help||Rf||zf)&&Q.phase===`world`&&$&&t.y<182){if(ep=!0,document.pointerLockElement!==Sf&&tp()){let t=Sf.requestPointerLock();Promise.resolve(t).catch(()=>{!$||Q.phase!==`world`||Q.help||Rf||zf||(e.button===2?$.use():$.shoot())});return}e.button===2?$.use():e.button===0&&$.shoot()}}),Sf.addEventListener(`contextmenu`,e=>{e.preventDefault()}),Sf.addEventListener(`wheel`,e=>{!$||Q.phase!==`world`||Q.help||Rf||zf||(e.preventDefault(),$.cycle(e.deltaY>0?1:-1))},{passive:!1}),Sf.addEventListener(`pointermove`,e=>{let t=Lf(e);Of=Ge(Hf(),t.x,t.y)?.id??null;let n=!Q.help&&!Rf&&!zf&&Q.phase===`world`;Sf.style.cursor=Of?`pointer`:n?`none`:`default`;let r=document.pointerLockElement===Sf;$&&n&&(r||ep)&&$.look(e.movementX,e.movementY)}),Sf.addEventListener(`pointerup`,()=>{kf=null,ep=!1}),Sf.addEventListener(`pointercancel`,()=>{kf=null,ep=!1}),document.addEventListener(`keydown`,e=>{let t=e.key.toLowerCase();if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement){e.key===`Escape`&&Df.close();return}if(Df.isOpen()){if((e.key===`Escape`||!e.repeat&&t===`b`)&&Df.close(),!e.repeat&&e.key===`Enter`){let e=document.querySelector(`#board-form`);e&&!e.hidden&&e.requestSubmit()}return}if(e.metaKey||e.ctrlKey||e.altKey)return;(e.code===`Space`||e.key.startsWith(`Arrow`))&&e.preventDefault();let n=zf,r=!1;if(!e.repeat){let e=Hf().find(e=>e.key===t);e&&e.id!==`fore`&&e.id!==`backwalk`&&(Qf(e.id),r=!0)}Q.help?!r&&e.key===`Escape`&&(Q.help=!1):n||Rf||(Pf.add(t),!r&&Q.phase===`world`&&e.code===`Space`&&$?.shoot(),e.repeat||(r||t!==`b`||Q.phase!==`world`&&Q.phase!==`craft`||Xf(!0),r||t!==`h`||Q.phase!==`world`&&Q.phase!==`craft`||(Q.help=!0),!r&&e.key===`Escape`&&Q.phase===`craft`&&(Q.phase=`world`),!r&&t===`e`&&Q.phase===`world`&&$?.interact()))}),document.addEventListener(`keyup`,e=>{Pf.delete(e.key.toLowerCase())}),window.addEventListener(`resize`,If),window.addEventListener(`pagehide`,()=>Xf(!1)),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Xf(!1)}),If();function np(e){let t=Math.min(.05,(e-Ff)/1e3);if(Ff=e,Q.phase===`crash`){let e=Q.crash;Q.crash+=t,!Af&&e<3.25&&Q.crash>=3.25&&(Af=!0,Ef.boom()),Q.crash>=5.8&&(Q.phase=`brief`)}!$||Rf||Q.help||zf||Q.phase!==`world`&&Q.phase!==`craft`||(Nf+=t,Nf>=15&&Xf(!1)),(Rf||Q.help||zf||Q.phase!==`world`||Df.isOpen())&&(ep=!1,document.pointerLockElement&&document.exitPointerLock()),$&&!Q.help&&!Rf&&!zf&&($.setMove(Q.phase===`world`?$f():{fore:!1,back:!1,left:!1,right:!1}),$.update(t),$?.over&&Kf()),Yf(),Bf&&e-Bf.at>1100&&(Bf=null);let n=Bf?{title:Bf.title,label:Bf.label,age:(e-Bf.at)/1e3}:null;Q.help?gn(Cf,Q,Of,e/1e3,It()):Q.phase===`world`&&$?Yt(Cf,Q,{aimX:$.aimX,aimY:$.aimY,prompt:$.prompt,showHelp:$.showHelp,near:$.near,px:$.px,pz:$.pz,heading:$.heading,sky:$.sky,banner:$.banner,slot:$.slot,inside:$.inside,riding:$.riding,chart:zf,paused:Rf,vendor:$.vendor,purchase:n},Of):pn(Cf,Q,Of,e/1e3,Wd()),requestAnimationFrame(np)}requestAnimationFrame(np);