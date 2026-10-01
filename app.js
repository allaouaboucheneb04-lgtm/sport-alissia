
const PROGRAM = [
  {
    day:1,
    meals:{
      breakfast:{title:"Petit-déjeuner",time:"07h00–10h00",items:["2 œufs entiers","25 g de pain complet ou pain d’orge","1 petite pomme verte","Tisane de menthe ou de fenouil sans sucre"]},
      lunch:{title:"Déjeuner",time:"12h00–13h30",items:["100 g de blanc de poulet grillé","60 g de riz basmati cuit","200 g de courgettes sautées avec ail"]},
      snack:{title:"Collation",time:"16h00–17h00",items:["10 amandes sans sel","1 petite pomme verte","Tisane de menthe"]},
      dinner:{title:"Dîner",time:"19h30–20h30",items:["130 g de poisson au choix","200 g de soupe de légumes sans pomme de terre"]}
    }
  },
  {
    day:2,
    meals:{
      breakfast:{title:"Petit-déjeuner",time:"07h00–10h00",items:["Pancake d’avoine","1 c. à café de beurre de cacahuète naturel","1 c. à café de miel","Café noir ou tisane sans sucre"]},
      lunch:{title:"Déjeuner",time:"12h00–13h30",items:["90 g de steak de bœuf maigre ou steak haché maigre","60 g de pâtes complètes cuites","150 g de sauce tomate maison"]},
      snack:{title:"Collation",time:"16h00–17h00",items:["1 œuf dur","1 petite pomme verte","Tisane de fenouil ou menthe"]},
      dinner:{title:"Dîner",time:"19h30–20h30",items:["140 g de blanc de dinde ou poulet","200 g de salade : concombre + tomate + laitue + citron","100 g de courgettes ou champignons sautés","1 c. à café d’huile d’olive"]}
    }
  },
  {
    day:3,
    meals:{
      breakfast:{title:"Petit-déjeuner",time:"07h00–10h00",items:["Omelette : 2 œufs entiers","25 g de pain complet","1 c. à soupe de graines de chia trempées dans l’eau","3 fraises","Tisane de menthe"]},
      lunch:{title:"Déjeuner",time:"12h00–13h30",items:["120 g de poisson au choix","120 g de pommes de terre vapeur ou au four"]},
      snack:{title:"Collation",time:"16h00–17h00",items:["8 cacahuètes sans sel","Tisane au choix","3 fraises"]},
      dinner:{title:"Dîner",time:"19h30–20h30",items:["120 g de thon nature ou crevettes","200 g de soupe de légumes sans pomme de terre","Citron + épices au choix"]}
    }
  },
  {
    day:4,
    meals:{
      breakfast:{title:"Petit-déjeuner",time:"07h00–10h00",items:["2 œufs entiers + 1 blanc d’œuf","1 biscotte complète","1 petite pomme verte","Tisane ou café noir sans sucre"]},
      lunch:{title:"Déjeuner",time:"12h00–13h30",items:["Wrap healthy : 1 mini tortilla complète de 50 g","100 g de blanc de poulet","Laitue + tomate + concombre","Sauce maison : citron + ail + coriandre + 1 c. à café d’huile d’olive"]},
      snack:{title:"Collation",time:"16h00–17h00",items:["4 amandes sans sel","Tisane de menthe"]},
      dinner:{title:"Dîner",time:"19h30–20h30",items:["100 g de foie de poulet ou foie de bœuf","200 g de légumes sautés","Citron obligatoire sur le repas"]}
    }
  },
  {
    day:5,
    meals:{
      breakfast:{title:"Petit-déjeuner",time:"07h00–10h00",items:["40 g de flocons d’avoine cuits avec de l’eau","1 œuf entier + 3 blancs d’œuf","1 c. à café de beurre de cacahuète naturel","1/2 petite banane","Café noir ou tisane"]},
      lunch:{title:"Déjeuner",time:"12h00–13h30",items:["100 g de blanc de poulet ou de dinde","60 g de couscous complet cuit","200 g de légumes au choix avec coriandre et ail"]},
      snack:{title:"Collation",time:"16h00–17h00",items:["1 petite pomme verte","8 cacahuètes sans sel","Tisane de fenouil"]},
      dinner:{title:"Dîner",time:"19h30–20h30",items:["150 g de poisson au choix ou sardines grillées","Salade concombre + citron"]}
    }
  },
  {
    day:6,
    meals:{
      breakfast:{title:"Petit-déjeuner",time:"07h00–10h00",items:["2 œufs entiers","25 g de pain complet","1 c. à soupe de graines de chia trempées dans l’eau","Tisane de menthe ou fenouil"]},
      lunch:{title:"Déjeuner",time:"12h00–13h30",items:["Pizza healthy maison : 1 mini tortilla complète de 50 g","100 g de poulet émincé","Sauce tomate maison","Champignons + poivrons + oignon en petite quantité","10 g d’olives","Sans fromage"]},
      snack:{title:"Collation",time:"16h00–17h00",items:["1 œuf dur","1 petite pomme verte","Tisane au choix"]},
      dinner:{title:"Dîner",time:"19h30–20h30",items:["90 g de steak de bœuf maigre","200 g de courgettes ou aubergines grillées"]}
    }
  },
  {
    day:7,
    meals:{
      breakfast:{title:"Petit-déjeuner",time:"07h00–10h00",items:["1 pancake d’avoine de 30 g avec 1 c. à café de beurre de cacahuète","3 fraises","Café noir ou tisane"]},
      lunch:{title:"Déjeuner",time:"12h00–13h30",items:["120 g de crevettes ou poisson au choix","200 g de salade : laitue, tomate, concombre"]},
      snack:{title:"Collation",time:"16h00–17h00",items:["Pas de collation"]},
      dinner:{title:"Dîner",time:"19h30–20h30",items:["90 g de blanc de poulet grillé","200 g de soupe de légumes sans pomme de terre","100 g d’aubergine ou courgettes grillées","Citron + épices"]}
    }
  }
];

const RULES = [
  "Boire minimum 2 litres d’eau par jour, progressivement. Si elle ne boit presque pas habituellement : commencer par 1 litre/jour pendant 3 jours puis augmenter progressivement jusqu’à 2 litres.",
  "Les viandes et poissons se pèsent crus avant cuisson.",
  "Les féculents et légumes se pèsent après cuisson.",
  "Maximum 2 cuillères à café d’huile d’olive par jour.",
  "Thé, café et tisanes sans sucre ou avec stévia 0 calorie.",
  "Épices autorisées selon le goût : curcuma, cumin, paprika, cannelle, gingembre, ail, coriandre.",
  "Les féculents du déjeuner se prennent uniquement les jours de sport. Les jours sans sport : pas de féculents (riz, pain complet, pâtes, pomme de terre, etc.).",
  "Éviter les longues périodes sans manger suivies de grignotage.",
  "Éviter les produits laitiers pendant cette phase.",
  "Éviter sucre, gâteaux, jus, pizzas classiques, pain blanc, fritures et sauces industrielles.",
  "Faire 30 à 40 minutes de marche rapide les jours sans entraînement."
];

const DRINKS = ["Eau","Tisane de menthe","Tisane de fenouil","Tisane de gingembre léger","Café noir sans sucre","Eau citronnée sans sucre"];
const MEAL_KEYS = ["breakfast","lunch","snack","dinner"];

const state = {
  view:"today",
  selectedDay: currentProgramDay(),
  data: loadData(),
  calendarOffset: 0
};

function currentProgramDay(){
  const n = new Date().getDay(); // 0 Sun ... 6 Sat
  return n === 0 ? 7 : n;
}
function isoDate(d=new Date()){
  const z = new Date(d.getTime() - d.getTimezoneOffset()*60000);
  return z.toISOString().slice(0,10);
}
function defaultData(){
  return {
    startDate: isoDate(),
    daily:{},
    weights:[],
    measurements:[],
    photos:[],
    settings:{name:"Alissia",waterGoal:2}
  };
}
function loadData(){
  try{
    const raw=localStorage.getItem("suivi-alissia-v1");
    return raw ? {...defaultData(),...JSON.parse(raw)} : defaultData();
  }catch(e){return defaultData();}
}
function saveData(){
  localStorage.setItem("suivi-alissia-v1",JSON.stringify(state.data));
}
function dayData(date=isoDate()){
  if(!state.data.daily[date]){
    state.data.daily[date]={meals:{},water:0,adherence:"",activity:"",activityMinutes:"",hungry:"",difficulty:"",sportDay:false,note:""};
  }
  return state.data.daily[date];
}
function mealDoneCount(d){ return MEAL_KEYS.filter(k => d.meals?.[k]).length; }
function calcAdherence(d){
  const meals = mealDoneCount(d);
  let score = (meals/4)*70;
  score += Math.min((Number(d.water)||0)/(Number(state.data.settings.waterGoal)||2),1)*20;
  if((Number(d.activityMinutes)||0)>0) score += 10;
  return Math.round(score);
}
function toast(msg){
  const t=document.createElement("div"); t.className="toast"; t.textContent=msg; document.body.appendChild(t);
  setTimeout(()=>t.remove(),1800);
}
function nav(view){
  state.view=view;
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>nav(b.dataset.view)));
document.getElementById("todayBtn").addEventListener("click",()=>nav("today"));

function render(){
  const app=document.getElementById("app");
  if(state.view==="today") app.innerHTML=renderToday();
  if(state.view==="program") app.innerHTML=renderProgram();
  if(state.view==="tracking") app.innerHTML=renderTracking();
  if(state.view==="progress") app.innerHTML=renderProgress();
  if(state.view==="settings") app.innerHTML=renderSettings();
  bind();
}

function renderToday(){
  const d=dayData(), pct=calcAdherence(d), p=PROGRAM[state.selectedDay-1];
  const ws=weekStats(0), prev=weekStats(-1);
  const delta=ws.adherence-prev.adherence;
  return `
    <section class="hero premium-hero">
      <div class="hero-row">
        <div>
          <div class="eyebrow">AUJOURD’HUI</div>
          <div class="small">${new Date().toLocaleDateString("fr-CA",{weekday:"long",day:"numeric",month:"long"})}</div>
          <h2>${state.data.settings.name} · Jour ${state.selectedDay}</h2>
          <div class="small">Programme alimentaire + suivi quotidien</div>
        </div>
        <div class="ring" style="--p:${pct}%"><span>${pct}%</span></div>
      </div>
      <div class="hero-mini-stats">
        <div><b>${ws.adherence}%</b><small>semaine</small></div>
        <div><b>${ws.water.toFixed(1)} L</b><small>eau moy./j</small></div>
        <div><b>${ws.activity} min</b><small>activité</small></div>
      </div>
      <div class="trend ${delta>=0?'up':'down'}">${delta===0?'→':delta>0?'↗':'↘'} ${delta>0?'+':''}${delta}% vs semaine précédente</div>
    </section>

    <div class="grid2">
      <div class="stat"><span class="small">Eau</span><b>${(Number(d.water)||0).toFixed(2)} L</b><span class="small">objectif ${state.data.settings.waterGoal} L</span></div>
      <div class="stat"><span class="small">Repas validés</span><b>${mealDoneCount(d)}/4</b><span class="small">aujourd’hui</span></div>
    </div>

    <section class="card">
      <div class="section-title"><h3>💧 Hydratation</h3><span class="badge">${Math.min(Math.round((d.water/state.data.settings.waterGoal)*100)||0,100)}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.min((d.water/state.data.settings.waterGoal)*100,100)}%"></div></div>
      <div class="water-controls" style="margin-top:10px">
        <button class="water-btn" data-water="-0.25">−</button>
        <span><b>${(Number(d.water)||0).toFixed(2)} L</b></span>
        <button class="water-btn" data-water="0.25">＋</button>
        <button class="chip" data-water="0.5">+ 500 ml</button>
      </div>
    </section>

    <section class="card">
      <div class="section-title"><h3>🍽️ Repas du jour</h3><span class="badge">Jour ${state.selectedDay}</span></div>
      ${MEAL_KEYS.map(k=>mealCard(p.meals[k],k,d)).join("")}
    </section>

    <section class="card">
      <h3>🏃 Activité</h3>
      <label class="quick-row" style="align-items:center"><input id="sportDay" type="checkbox" style="width:auto" ${d.sportDay?"checked":""}> Jour de sport</label>
      <div class="form-row">
        <div><label>Activité</label><input id="activity" value="${esc(d.activity)}" placeholder="Marche, gym, vélo…"></div>
        <div><label>Durée (min)</label><input id="activityMinutes" type="number" min="0" value="${esc(d.activityMinutes)}" placeholder="30"></div>
      </div>
      <div class="callout" style="margin-top:10px">${d.sportDay ? "Jour de sport : les féculents du déjeuner sont prévus selon le plan." : "Jour sans sport : le plan indique de retirer les féculents du déjeuner et de faire 30–40 min de marche rapide."}</div>
    </section>

    <section class="card">
      <h3>📝 Ressenti rapide</h3>
      <label>As-tu eu faim ?</label>
      <select id="hungry"><option value="">Choisir</option><option ${d.hungry==="Non"?"selected":""}>Non</option><option ${d.hungry==="Un peu"?"selected":""}>Un peu</option><option ${d.hungry==="Oui"?"selected":""}>Oui</option></select>
      <label>Où as-tu trouvé une difficulté ?</label>
      <textarea id="difficulty" placeholder="Ex. faim en fin d’après-midi, repas difficile à préparer…">${esc(d.difficulty)}</textarea>
    </section>
  `;
}

function mealCard(m,key,d){
  const done=!!d.meals?.[key];
  return `<div class="meal">
    <div class="meal-head">
      <div><div class="meal-title">${m.title}</div><div class="meal-time">${m.time}</div></div>
      <button class="meal-check ${done?"done":""}" data-meal="${key}">${done?"✓ Fait":"Valider"}</button>
    </div>
    <ul>${m.items.map(i=>`<li>${i}</li>`).join("")}</ul>
  </div>`;
}

function renderProgram(){
  const p=PROGRAM[state.selectedDay-1];
  return `
    <div class="section-title"><div><div class="eyebrow">PLAN ALIMENTAIRE</div><h2>Programme 7 jours</h2></div></div>
    <div class="day-tabs">${PROGRAM.map(x=>`<button class="day-tab ${x.day===state.selectedDay?"active":""}" data-day="${x.day}">Jour ${x.day}</button>`).join("")}</div>
    <section class="card">
      ${MEAL_KEYS.map(k=>mealCard(p.meals[k],k,dayData())).join("")}
    </section>
    <section class="card">
      <h3>🕐 Horaires</h3>
      <div class="grid2">
        <div class="stat"><span class="small">Petit-déjeuner</span><b style="font-size:16px">07h00–10h00</b></div>
        <div class="stat"><span class="small">Déjeuner</span><b style="font-size:16px">12h00–13h30</b></div>
        <div class="stat"><span class="small">Collation</span><b style="font-size:16px">16h00–17h00</b></div>
        <div class="stat"><span class="small">Dîner</span><b style="font-size:16px">19h30–20h30</b></div>
      </div>
    </section>
    <section class="card">
      <h3>🥤 Boissons autorisées</h3>
      <ul class="note-list">${DRINKS.map(x=>`<li>${x}</li>`).join("")}<li>Pas de jus, même naturel</li><li>Pas de détox sucré</li><li>Pas de boissons industrielles</li></ul>
    </section>
    <section class="card">
      <h3>📌 Notes importantes</h3>
      <ul class="note-list">${RULES.map(x=>`<li>${x}</li>`).join("")}</ul>
    </section>
  `;
}

function renderTracking(){
  const dates = [...Array(14)].map((_,i)=>{const d=new Date(); d.setDate(d.getDate()-i); return isoDate(d);});
  const ws=weekStats(0), prev=weekStats(-1);
  return `
    <div class="section-title"><div><div class="eyebrow">JOURNAL</div><h2>Suivi quotidien</h2></div></div>
    <section class="card compare-card">
      <div class="section-title"><h3>Comparaison des semaines</h3><span class="badge">Lun → Dim</span></div>
      <div class="compare-grid">
        ${compareMetric("Respect du plan",ws.adherence,prev.adherence,"%")}
        ${compareMetric("Eau moyenne",ws.water,prev.water," L")}
        ${compareMetric("Activité",ws.activity,prev.activity," min")}
        ${compareMetric("Repas validés",ws.meals,prev.meals,"")}
      </div>
    </section>
    <section class="card">
      <div class="section-title"><h3>📅 Calendrier mensuel</h3><div class="actions"><button class="chip" id="calPrev">‹</button><button class="chip" id="calToday">Aujourd’hui</button><button class="chip" id="calNext">›</button></div></div>
      ${renderCalendar()}
      <div class="calendar-legend"><span><i class="dot good"></i> 80–100%</span><span><i class="dot medium"></i> 50–79%</span><span><i class="dot low"></i> &lt;50%</span></div>
    </section>
    <section class="card">
      <h3>Ajouter / modifier une journée</h3>
      <label>Date</label><input id="trackDate" type="date" value="${isoDate()}">
      <div id="trackEditor">${trackingEditor(isoDate())}</div>
    </section>
    <section class="card">
      <h3>14 derniers jours</h3>
      <div class="table-scroll">
      <table><thead><tr><th>Date</th><th>Adhérence</th><th>Eau</th><th>Activité</th><th>Faim</th><th>Difficulté</th></tr></thead>
      <tbody>${dates.map(date=>{const d=state.data.daily[date]||{}; const adh=d.adherence || (Object.keys(d).length?calcAdherence(d):0); return `<tr><td>${date}</td><td><span class="score-pill score-${scoreClass(adh)}">${adh}%</span></td><td>${Number(d.water||0).toFixed(2)} L</td><td>${esc(d.activity||"—")} ${d.activityMinutes?`(${d.activityMinutes} min)`:""}</td><td>${esc(d.hungry||"—")}</td><td>${esc(d.difficulty||"—")}</td></tr>`}).join("")}</tbody>
      </table></div>
    </section>
    <section class="card report-card">
      <div class="section-title"><div><h3>📄 Rapport du dimanche</h3><div class="small">Bilan hebdomadaire prêt à envoyer au coach</div></div><span class="badge">PDF</span></div>
      <p class="small">Le rapport reprend le respect du programme, l’eau, l’activité, la faim/difficultés, le dernier poids et les dernières mensurations.</p>
      <div class="actions">
        <button class="primary" id="weeklyReportBtn">Voir le résumé</button>
        <button class="secondary" id="pdfReportBtn">Créer / imprimer le PDF</button>
      </div>
      <textarea id="weeklyReport" class="hidden" readonly style="margin-top:10px"></textarea>
    </section>
  `;
}

function trackingEditor(date){
  const d=dayData(date);
  return `
    <div class="form-row">
      <div><label>% respect du plan</label><input id="tAdherence" type="number" min="0" max="100" value="${esc(d.adherence)}" placeholder="${calcAdherence(d)}"></div>
      <div><label>Eau (L)</label><input id="tWater" type="number" step="0.25" min="0" value="${esc(d.water)}"></div>
    </div>
    <div class="form-row">
      <div><label>Activité</label><input id="tActivity" value="${esc(d.activity)}"></div>
      <div><label>Durée (min)</label><input id="tActivityMinutes" type="number" min="0" value="${esc(d.activityMinutes)}"></div>
    </div>
    <label>As-tu eu faim ?</label><select id="tHungry"><option value=""></option><option ${d.hungry==="Non"?"selected":""}>Non</option><option ${d.hungry==="Un peu"?"selected":""}>Un peu</option><option ${d.hungry==="Oui"?"selected":""}>Oui</option></select>
    <label>Où as-tu trouvé une difficulté ?</label><textarea id="tDifficulty">${esc(d.difficulty)}</textarea>
    <button class="primary" id="saveTracking" style="margin-top:10px">Enregistrer</button>`;
}


function startOfWeek(base=new Date(),offsetWeeks=0){
  const d=new Date(base); const day=d.getDay()||7; d.setHours(0,0,0,0); d.setDate(d.getDate()-day+1+(offsetWeeks*7)); return d;
}
function weekStats(offset=0){
  const start=startOfWeek(new Date(),offset); let adh=0, water=0, activity=0, meals=0, days=0;
  for(let i=0;i<7;i++){
    const x=new Date(start); x.setDate(x.getDate()+i); const key=isoDate(x); const d=state.data.daily[key];
    if(d){
      const a=Number(d.adherence || calcAdherence(d) || 0); adh+=a; water+=Number(d.water||0); activity+=Number(d.activityMinutes||0); meals+=mealDoneCount(d); days++;
    }
  }
  return {adherence:days?Math.round(adh/days):0,water:days?water/days:0,activity,meals,days,start:isoDate(start)};
}
function compareMetric(label,current,previous,suffix){
  const c=Number(current)||0,p=Number(previous)||0,d=c-p;
  const fmt=v=>Number.isInteger(v)?v:v.toFixed(1);
  return `<div class="compare-item"><span>${label}</span><b>${fmt(c)}${suffix}</b><small class="${d>0?'positive':d<0?'negative':''}">${d===0?'→':d>0?'↗':'↘'} ${d>0?'+':''}${fmt(d)}${suffix}</small></div>`;
}
function scoreClass(v){v=Number(v)||0; return v>=80?'good':v>=50?'medium':'low';}
function renderCalendar(){
  const base=new Date(); base.setDate(1); base.setMonth(base.getMonth()+state.calendarOffset);
  const y=base.getFullYear(),m=base.getMonth(); const first=new Date(y,m,1); const last=new Date(y,m+1,0);
  const blanks=(first.getDay()+6)%7; const cells=[];
  for(let i=0;i<blanks;i++) cells.push('<div class="cal-cell blank"></div>');
  for(let day=1;day<=last.getDate();day++){
    const d=new Date(y,m,day),key=isoDate(d),data=state.data.daily[key]; const adh=data?Number(data.adherence||calcAdherence(data)||0):null;
    const cls=adh===null?'none':scoreClass(adh); const today=key===isoDate()?' today':'';
    cells.push(`<button class="cal-cell ${cls}${today}" data-cal-date="${key}"><span>${day}</span>${adh!==null?`<small>${adh}%</small>`:''}</button>`);
  }
  return `<div class="calendar-title">${base.toLocaleDateString('fr-CA',{month:'long',year:'numeric'})}</div><div class="calendar-weekdays">${['L','M','M','J','V','S','D'].map(x=>`<b>${x}</b>`).join('')}</div><div class="calendar-grid">${cells.join('')}</div>`;
}
function weightRows(){
  const a=state.data.weights;
  return a.slice().reverse().map((w,ri)=>{const idx=a.length-1-ri; const prev=idx>0?a[idx-1]:null; const diff=prev?(w.value-prev.value):null; return `<tr><td>${w.date}</td><td>${w.value} kg</td><td>${diff===null?'—':(diff>0?'+':'')+diff.toFixed(1)+' kg'}</td></tr>`}).join('');
}
function measurementComparison(latest,prev){
  if(!latest) return '<div class="empty-state">Aucune mensuration enregistrée.</div>';
  const labels=['Poitrine','Bras','Taille','Bas-ventre','Hanches','Cuisse','Mollet'];
  return `<div class="measure-strip">${labels.map((l,i)=>{const v=latest.values?.[i],p=prev?.values?.[i],d=(v!=null&&p!=null)?v-p:null;return `<div><span>${l}</span><b>${v??'—'}${v!=null?' cm':''}</b><small>${d===null?'':(d>0?'+':'')+d.toFixed(1)+' cm'}</small></div>`}).join('')}</div>`;
}
function renderPhotoGallery(){
  if(!state.data.photos.length) return '<div class="empty-state" style="margin-top:12px">Aucune photo enregistrée.</div>';
  return `<div class="photo-grid">${state.data.photos.slice().reverse().map((p,i)=>`<figure><img src="${p.data}" alt="Photo de suivi"><figcaption>${p.date}</figcaption><button class="photo-delete" data-photo-index="${state.data.photos.length-1-i}">×</button></figure>`).join('')}</div>`;
}
function drawWeightChart(){
  const c=document.getElementById('weightChart'); if(!c||state.data.weights.length<2)return;
  const rect=c.getBoundingClientRect(); const ratio=window.devicePixelRatio||1; const w=Math.max(320,rect.width),h=270; c.width=w*ratio;c.height=h*ratio;
  const ctx=c.getContext('2d'); ctx.scale(ratio,ratio); ctx.clearRect(0,0,w,h);
  const pts=state.data.weights.slice(-12), vals=pts.map(x=>Number(x.value)); const min=Math.min(...vals)-0.5,max=Math.max(...vals)+0.5;
  const pad={l:42,r:15,t:20,b:38}; const cw=w-pad.l-pad.r,ch=h-pad.t-pad.b;
  ctx.strokeStyle='#e6e6ee';ctx.lineWidth=1;ctx.fillStyle='#74747f';ctx.font='12px -apple-system, sans-serif';
  for(let i=0;i<5;i++){const y=pad.t+(ch*i/4);ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(w-pad.r,y);ctx.stroke();const val=max-(max-min)*i/4;ctx.fillText(val.toFixed(1),4,y+4)}
  const xy=pts.map((p,i)=>({x:pad.l+(cw*(pts.length===1?0:i/(pts.length-1))),y:pad.t+ch*(1-(p.value-min)/(max-min)),p}));
  ctx.strokeStyle='#e91e63';ctx.lineWidth=3;ctx.beginPath();xy.forEach((o,i)=>i?ctx.lineTo(o.x,o.y):ctx.moveTo(o.x,o.y));ctx.stroke();
  xy.forEach((o,i)=>{ctx.fillStyle='#e91e63';ctx.beginPath();ctx.arc(o.x,o.y,4,0,Math.PI*2);ctx.fill();if(i===0||i===xy.length-1){ctx.fillStyle='#333';ctx.fillText(Number(o.p.value).toFixed(1)+' kg',Math.max(4,Math.min(o.x-18,w-60)),o.y-10)}});
  const labels=[0,Math.floor((pts.length-1)/2),pts.length-1].filter((v,i,a)=>a.indexOf(v)===i);ctx.fillStyle='#74747f';labels.forEach(i=>ctx.fillText(pts[i].date.slice(5),xy[i].x-18,h-12));
}
function openPdfReport(){
  const start=startOfWeek(); const rows=[];
  for(let i=0;i<7;i++){const x=new Date(start);x.setDate(x.getDate()+i);const k=isoDate(x),d=state.data.daily[k]||{};const adh=d.adherence||(Object.keys(d).length?calcAdherence(d):0);rows.push(`<tr><td>${x.toLocaleDateString('fr-CA',{weekday:'short',day:'numeric'})}</td><td>${adh}%</td><td>${Number(d.water||0).toFixed(2)} L</td><td>${mealDoneCount(d)}/4</td><td>${esc(d.activity||'—')} ${d.activityMinutes?d.activityMinutes+' min':''}</td><td>${esc(d.hungry||'—')}</td><td>${esc(d.difficulty||'—')}</td></tr>`)}
  const w=state.data.weights.at(-1),m=state.data.measurements.at(-1),ws=weekStats(0);
  const labels=['Poitrine','Bras','Taille','Bas-ventre','Hanches','Cuisse','Mollet'];
  const html=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Rapport hebdomadaire</title><style>body{font-family:-apple-system,Arial,sans-serif;color:#222;margin:30px}h1{color:#d81b60}.top{display:flex;justify-content:space-between;border-bottom:3px solid #e91e63;padding-bottom:12px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}.stat{border:1px solid #ddd;border-radius:12px;padding:12px}.stat b{display:block;font-size:22px}table{width:100%;border-collapse:collapse;font-size:12px}th,td{border:1px solid #ddd;padding:7px;text-align:left}th{background:#fff0f6}.foot{margin-top:18px;font-size:11px;color:#666}@media print{body{margin:12mm}.no-print{display:none}}</style></head><body><div class="top"><div><div>ANOUAR FITNESS COACH</div><h1>Bilan hebdomadaire – ${esc(state.data.settings.name)}</h1><div>Semaine du ${start.toLocaleDateString('fr-CA')}</div></div><button class="no-print" onclick="window.print()">Imprimer / Enregistrer en PDF</button></div><div class="stats"><div class="stat">Respect moyen<b>${ws.adherence}%</b></div><div class="stat">Eau moyenne<b>${ws.water.toFixed(1)} L/j</b></div><div class="stat">Activité<b>${ws.activity} min</b></div></div><h2>Suivi quotidien</h2><table><thead><tr><th>Jour</th><th>Plan</th><th>Eau</th><th>Repas</th><th>Activité</th><th>Faim</th><th>Difficulté</th></tr></thead><tbody>${rows.join('')}</tbody></table><h2>Évolution</h2><p><b>Dernier poids :</b> ${w?w.value+' kg ('+w.date+')':'non renseigné'}</p><p><b>Dernières mensurations :</b> ${m?m.date+' — '+labels.map((l,i)=>`${l}: ${m.values?.[i]??'—'} cm`).join(' · '):'non renseignées'}</p><p class="foot">Rapport généré depuis l’application Suivi Alissia. Vérifier les informations avant l’envoi au coach.</p></body></html>`;
  const win=window.open('','_blank'); if(!win){toast('Autorise les fenêtres pour créer le PDF');return;} win.document.open();win.document.write(html);win.document.close();setTimeout(()=>win.print(),500);
}
function renderProgress(){
  const latestWeight=state.data.weights.at(-1);
  const firstWeight=state.data.weights[0];
  const weightDelta=(latestWeight&&firstWeight&&state.data.weights.length>1)?latestWeight.value-firstWeight.value:null;
  const latestM=state.data.measurements.at(-1), prevM=state.data.measurements.at(-2);
  return `
    <div class="section-title"><div><div class="eyebrow">ÉVOLUTION</div><h2>Poids & mensurations</h2></div></div>
    <div class="grid2">
      <div class="stat"><span class="small">Dernier poids</span><b>${latestWeight?latestWeight.value+" kg":"—"}</b><span class="small">${latestWeight?.date||"Aucune mesure"}</span></div>
      <div class="stat"><span class="small">Évolution totale</span><b>${weightDelta===null?"—":(weightDelta>0?"+":"")+weightDelta.toFixed(1)+" kg"}</b><span class="small">depuis la 1re mesure</span></div>
    </div>
    <section class="card chart-card">
      <div class="section-title"><h3>📈 Courbe du poids</h3><span class="badge">${state.data.weights.length} mesure(s)</span></div>
      ${state.data.weights.length>=2?'<canvas id="weightChart" width="700" height="270" aria-label="Courbe du poids"></canvas>':'<div class="empty-state">Ajoute au moins 2 pesées pour afficher la courbe.</div>'}
    </section>
    <section class="card">
      <h3>⚖️ Ajouter le poids</h3>
      <div class="form-row"><div><label>Date</label><input id="weightDate" type="date" value="${isoDate()}"></div><div><label>Poids (kg)</label><input id="weightValue" type="number" step="0.1" min="0"></div></div>
      <button class="primary" id="addWeight" style="margin-top:10px">Ajouter</button>
      ${state.data.weights.length?`<div class="table-scroll" style="margin-top:12px"><table style="min-width:0"><thead><tr><th>Date</th><th>Poids</th><th>Écart précédent</th></tr></thead><tbody>${weightRows()}</tbody></table></div>`:""}
    </section>
    <section class="card">
      <div class="section-title"><h3>📏 Mensurations</h3><span class="badge">hebdomadaire</span></div>
      ${measurementComparison(latestM,prevM)}
      <label>Date</label><input id="mDate" type="date" value="${isoDate()}">
      <div class="form-row">
        ${["Poitrine","Bras","Taille (point le plus étroit)","Bas-ventre","Hanches","Cuisse (point le plus large)","Mollet (milieu)"].map((n,i)=>`<div><label>${n}</label><input data-measure="${i}" type="number" step="0.1" min="0"></div>`).join("")}
      </div>
      <button class="primary" id="addMeasurements" style="margin-top:10px">Ajouter les mensurations</button>
    </section>
    <section class="card">
      <div class="section-title"><h3>📷 Photos hebdomadaires</h3><span class="badge">${state.data.photos.length}/8</span></div>
      <p class="small">Même vêtements, même angle et idéalement la même heure, de préférence le matin à jeun.</p>
      <input id="photoInput" type="file" accept="image/*" capture="environment">
      ${renderPhotoGallery()}
    </section>
  `;
}

function renderSettings(){
  return `
    <div class="section-title"><div><div class="eyebrow">PARAMÈTRES</div><h2>Réglages</h2></div></div>
    <section class="card">
      <label>Nom</label><input id="nameSetting" value="${esc(state.data.settings.name)}">
      <label>Objectif d’eau (L/jour)</label><input id="waterGoal" type="number" step="0.25" value="${state.data.settings.waterGoal}">
      <button class="primary" id="saveSettings" style="margin-top:10px">Enregistrer</button>
    </section>
    <section class="card">
      <h3>💾 Sauvegarde</h3>
      <p class="small">Les données sont enregistrées sur cet iPhone dans le navigateur. Exportez une sauvegarde JSON de temps en temps pour éviter de perdre l’historique si Safari est réinitialisé.</p>
      <div class="actions">
        <button class="secondary" id="exportBtn">Exporter les données</button>
        <label class="secondary" style="margin:0">Importer<input id="importBtn" type="file" accept=".json,application/json" class="hidden"></label>
      </div>
    </section>
    <section class="card">
      <h3>📱 Installation iPhone</h3>
      <ol class="note-list">
        <li>Ouvrir le site avec <b>Safari</b>.</li>
        <li>Appuyer sur <b>Partager</b>.</li>
        <li>Choisir <b>Sur l’écran d’accueil</b>.</li>
        <li>Appuyer sur <b>Ajouter</b>.</li>
      </ol>
      <div class="callout">Pour que l’installation fonctionne comme une vraie PWA, le projet doit être publié sur un site HTTPS (GitHub Pages, Netlify, etc.).</div>
    </section>
    <section class="card">
      <h3>⚠️ Réinitialisation</h3>
      <button class="danger" id="resetBtn">Effacer toutes les données</button>
    </section>
  `;
}

function bind(){
  document.querySelectorAll("[data-day]").forEach(b=>b.onclick=()=>{state.selectedDay=Number(b.dataset.day);render();});
  document.querySelectorAll("[data-meal]").forEach(b=>b.onclick=()=>{const d=dayData();d.meals[b.dataset.meal]=!d.meals[b.dataset.meal];saveData();render();});
  document.querySelectorAll("[data-water]").forEach(b=>b.onclick=()=>{const d=dayData();d.water=Math.max(0,+(Number(d.water||0)+Number(b.dataset.water)).toFixed(2));saveData();render();});
  const sportDay=document.getElementById("sportDay"); if(sportDay) sportDay.onchange=()=>{dayData().sportDay=sportDay.checked;saveData();render();};
  const activity=document.getElementById("activity"); if(activity) activity.onchange=()=>{dayData().activity=activity.value;saveData();};
  const am=document.getElementById("activityMinutes"); if(am) am.onchange=()=>{dayData().activityMinutes=am.value;saveData();render();};
  const hungry=document.getElementById("hungry"); if(hungry) hungry.onchange=()=>{dayData().hungry=hungry.value;saveData();};
  const diff=document.getElementById("difficulty"); if(diff) diff.onchange=()=>{dayData().difficulty=diff.value;saveData();};

  const trackDate=document.getElementById("trackDate");
  if(trackDate) trackDate.onchange=()=>{document.getElementById("trackEditor").innerHTML=trackingEditor(trackDate.value);bindTrackingEditor();};
  bindTrackingEditor();
  document.querySelectorAll('[data-cal-date]').forEach(b=>b.onclick=()=>{const t=document.getElementById('trackDate');if(t){t.value=b.dataset.calDate;document.getElementById('trackEditor').innerHTML=trackingEditor(b.dataset.calDate);bindTrackingEditor();t.scrollIntoView({behavior:'smooth',block:'center'});}});
  const cp=document.getElementById('calPrev');if(cp)cp.onclick=()=>{state.calendarOffset--;render();};
  const cn=document.getElementById('calNext');if(cn)cn.onclick=()=>{state.calendarOffset++;render();};
  const ct=document.getElementById('calToday');if(ct)ct.onclick=()=>{state.calendarOffset=0;render();};

  const wr=document.getElementById("weeklyReportBtn");
  if(wr) wr.onclick=()=>{const out=document.getElementById("weeklyReport");out.classList.remove("hidden");out.value=makeWeeklyReport();out.style.height="280px";out.select();try{navigator.clipboard.writeText(out.value);toast("Résumé copié");}catch(e){}};
  const pdf=document.getElementById('pdfReportBtn');if(pdf)pdf.onclick=openPdfReport;

  const aw=document.getElementById("addWeight"); if(aw) aw.onclick=()=>{const v=Number(document.getElementById("weightValue").value);if(!v)return toast("Entre le poids");state.data.weights.push({date:document.getElementById("weightDate").value,value:v});state.data.weights.sort((a,b)=>a.date.localeCompare(b.date));saveData();render();toast("Poids ajouté");};
  const ams=document.getElementById("addMeasurements"); if(ams) ams.onclick=()=>{const vals=[...document.querySelectorAll("[data-measure]")].map(x=>x.value?Number(x.value):null);if(vals.every(v=>v===null))return toast("Entre au moins une mesure");state.data.measurements.push({date:document.getElementById("mDate").value,values:vals});state.data.measurements.sort((a,b)=>a.date.localeCompare(b.date));saveData();render();toast("Mensurations ajoutées");};
  const photo=document.getElementById("photoInput"); if(photo) photo.onchange=()=>handlePhoto(photo.files?.[0]);
  document.querySelectorAll('.photo-delete').forEach(b=>b.onclick=()=>{if(confirm('Supprimer cette photo ?')){state.data.photos.splice(Number(b.dataset.photoIndex),1);saveData();render();}});

  const saveSettings=document.getElementById("saveSettings"); if(saveSettings) saveSettings.onclick=()=>{state.data.settings.name=document.getElementById("nameSetting").value||"Alissia";state.data.settings.waterGoal=Number(document.getElementById("waterGoal").value)||2;saveData();toast("Réglages enregistrés");};
  const ex=document.getElementById("exportBtn"); if(ex) ex.onclick=exportData;
  const imp=document.getElementById("importBtn"); if(imp) imp.onchange=()=>importData(imp.files?.[0]);
  const reset=document.getElementById("resetBtn"); if(reset) reset.onclick=()=>{if(confirm("Effacer toutes les données enregistrées sur cet appareil ?")){localStorage.removeItem("suivi-alissia-v1");state.data=defaultData();render();}};
  requestAnimationFrame(drawWeightChart);
}

function bindTrackingEditor(){
  const btn=document.getElementById("saveTracking"); if(!btn)return;
  btn.onclick=()=>{
    const date=document.getElementById("trackDate").value, d=dayData(date);
    d.adherence=document.getElementById("tAdherence").value;
    d.water=Number(document.getElementById("tWater").value)||0;
    d.activity=document.getElementById("tActivity").value;
    d.activityMinutes=document.getElementById("tActivityMinutes").value;
    d.hungry=document.getElementById("tHungry").value;
    d.difficulty=document.getElementById("tDifficulty").value;
    saveData(); toast("Journée enregistrée"); render();
  };
}
function makeWeeklyReport(){
  const start=startOfWeek(); const arr=[]; let total=0,count=0;
  for(let i=0;i<7;i++){
    const dt=new Date(start);dt.setDate(dt.getDate()+i);const date=isoDate(dt),d=state.data.daily[date]||{};
    const adh=d.adherence||(Object.keys(d).length?calcAdherence(d):0); total+=Number(adh)||0;count++;
    arr.push(`${dt.toLocaleDateString('fr-CA',{weekday:'long',day:'numeric',month:'short'})} — respect ${adh}% | eau ${Number(d.water||0).toFixed(2)} L | repas ${mealDoneCount(d)}/4 | activité ${d.activity||"—"} ${d.activityMinutes?d.activityMinutes+" min":""} | faim ${d.hungry||"—"} | difficulté ${d.difficulty||"—"}`);
  }
  const w=state.data.weights.at(-1),m=state.data.measurements.at(-1),ws=weekStats(0);
  return `BILAN HEBDOMADAIRE – ${state.data.settings.name}\nSemaine du ${start.toLocaleDateString('fr-CA')}\nAdhérence moyenne : ${ws.adherence}%\nEau moyenne : ${ws.water.toFixed(1)} L/jour\nActivité totale : ${ws.activity} min\nDernier poids : ${w?w.value+" kg ("+w.date+")":"non renseigné"}\nDernières mensurations : ${m?m.date:"non renseignées"}\n\n${arr.join("\n")}`;
}

function handlePhoto(file){
  if(!file) return;
  if(file.size>1_500_000) return toast("Photo trop lourde. Choisis une image de moins de 1,5 Mo.");
  const r=new FileReader();
  r.onload=()=>{state.data.photos.push({date:isoDate(),data:r.result}); if(state.data.photos.length>8) state.data.photos.shift(); saveData(); render(); toast("Photo enregistrée localement");};
  r.readAsDataURL(file);
}
function exportData(){
  const blob=new Blob([JSON.stringify(state.data,null,2)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=`suivi-alissia-${isoDate()}.json`; a.click(); URL.revokeObjectURL(a.href);
}
function importData(file){
  if(!file)return; const r=new FileReader();
  r.onload=()=>{try{const o=JSON.parse(r.result);state.data={...defaultData(),...o};saveData();render();toast("Sauvegarde importée");}catch(e){toast("Fichier invalide");}};
  r.readAsText(file);
}
function esc(v=""){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}

if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
render();
