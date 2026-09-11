/* ============================================================
   CONFIG — single source of truth
   ============================================================ */
const SITE = {
  name:"TECHNOVA 2K26",
  subtitle:"National Level Inter College Symposium",
  college:"CSI College of Engineering",
  place:"Ketti, Ooty, The Nilgiris — 643215",
  chapter:"ISTE Student Chapter",
  dates:"24th & 25th September 2026",
  collegeUrl:"https://csice.edu.in",
  /* Leave empty until the official form link is published. */
  REGISTRATION_URL:"https://docs.google.com/forms/d/e/1FAIpQLSdj0KoOJWOVO6MuGa-TXYmreHUowhrDUUs6nXCSN6u1mPgggQ/viewform",
  countdownTarget:"2026-09-24T09:00:00+05:30"
};

const TBA = "Detailed event guidelines will be announced soon.";

const EVENTS = [
  {slug:"cad", no:"01", track:"technical", name:"CAD",
   blurb:"Model it, dimension it, defend it — a design sprint on the drafting screen.",
   overview:"A computer-aided design challenge for students who think in orthographic views. Bring your drafting instincts; the brief arrives on the day."},
  {slug:"circuit-x", no:"02", track:"technical", name:"Circuit X",
   blurb:"Read the board, trace the fault, close the loop before the clock does.",
   overview:"A hands-on electronics round built around reading circuits and finding what is wrong with them under time pressure."},
  {slug:"ad-battle", no:"03", track:"technical", name:"Ad Battle",
   blurb:"Pitch a product to a room that is difficult to convince.",
   overview:"Teams build and perform a campaign for a product handed to them on the spot. Idea, script and delivery all count."},
  {slug:"thinktech", no:"04", track:"technical", name:"ThinkTech", sub:"Paper Presentation",
   blurb:"Present your work to a panel, then defend it.",
   overview:"A paper presentation round: teams present their work to a panel and take questions on it. Topic scope, submission format and presentation time come from the organisers."},
  {slug:"lyrical-battle", no:"01", track:"nontechnical", name:"Lyrical Battle",
   blurb:"Words, rhythm and nerve — live, on stage, with the mic open.",
   overview:"A stage event for lyricists and performers. Bring your voice; the format and rounds are announced by the organisers."},
  {slug:"lego", no:"02", track:"nontechnical", name:"Lego",
   blurb:"Build the brief out of bricks, against the clock.",
   overview:"A construction challenge judged on imagination, structure and how closely the build answers the brief."},
  {slug:"photographic-memory", no:"03", track:"nontechnical", name:"Photographic Memory",
   blurb:"See it once. Remember everything that mattered.",
   overview:"An observation and recall event. You get one look at the material, then the questions begin."},
  {slug:"tale-trigger", no:"04", track:"nontechnical", name:"Tale Trigger",
   blurb:"One prompt, one story, one shot at holding the room.",
   overview:"A storytelling round that starts from a trigger given on stage and ends when the story lands."}
];


/* ---------------------------------------------------------------
   EVENT RULES — transcribed from the ISTE symposium rules document
   --------------------------------------------------------------- */
const GENERAL_RULES = [
  "Participants must carry their valid college ID card.",
  "Participants must report to the respective venue at least 15 minutes before the event.",
  "Participants must complete registration before the specified deadline.",
  "Participants must follow the instructions given by event coordinators.",
  "Participants must maintain discipline and proper decorum throughout the symposium.",
  "Use of unfair means, malpractice or unauthorized assistance will lead to disqualification.",
  "Participants are responsible for their personal belongings.",
  "Any damage to college property or event equipment may result in appropriate action.",
  "Participants must not disturb or interfere with other participants.",
  "The organizers reserve the right to modify the event rules, timing or venue if necessary.",
  "Event-specific rules will take precedence wherever applicable.",
  "The decision of the judges/event coordinators will be final and binding."
];

const RULES = {
  "cad":[
    "The event is open to participants from any engineering discipline.",
    "Participants must carry their college ID card.",
    "The required CAD software and version will be announced by the organizers.",
    "Participants must use only the systems/software provided or permitted by the organizers.",
    "The given design/problem must be completed within the allotted time.",
    "Participants must save their work in the specified file format and submit it before the deadline.",
    "Internet usage and external reference materials are not permitted unless specifically allowed.",
    "Participants must not copy designs or use pre-designed templates.",
    "Any form of malpractice or unfair assistance will result in disqualification.",
    "The judges' decision will be final and binding."
  ],
  "ad-battle":[
    "Participants must bring their own laptop and charger.",
    "The required software, libraries, tools and resources must be installed and tested before the event.",
    "No additional time will be provided during the competition for installing required software or libraries.",
    "Participants must ensure that their laptop is fully charged and ready for use before the event begins.",
    "The advertising theme, product or topic will be provided by the organizers at the venue.",
    "Participants must create an advertisement based on the given topic within the allotted time.",
    "The advertisement must be created during the event; pre-made advertisements are not permitted.",
    "Participants may use only the software and resources permitted by the organizers.",
    "Internet access may be provided, but participants should not depend on it for downloading or installing software/resources.",
    "Participants must not use pre-designed templates or previously prepared content unless specifically permitted.",
    "The advertisement must not contain vulgar, offensive, discriminatory or inappropriate content.",
    "Participants must submit or present their final advertisement before the allotted time expires.",
    "Judging will be based on creativity, originality, relevance to the topic, visual appeal, communication and overall presentation.",
    "Any plagiarism, malpractice or unauthorized assistance will result in disqualification.",
    "The judges' decision will be final and binding."
  ],
  "circuit-x":[
    "A circuit diagram will be displayed to the participants/audience for a limited time.",
    "Participants must carefully observe the circuit and identify the incorrect connection, component or value.",
    "Participants must indicate the exact location of the mistake.",
    "Participants may be asked to explain what is wrong and suggest the correct connection or component.",
    "Participants must submit their answer within the given time.",
    "Participants must not use mobile phones, internet or external assistance.",
    "Participants must not discuss the answer with other participants during the activity.",
    "Points will be awarded for correct identification and explanation of the error.",
    "In case of a tie, a tie-breaker circuit may be displayed.",
    "The participant/team with the highest score will be declared the winner.",
    "Any form of malpractice will result in disqualification.",
    "The judges' decision will be final and binding."
  ],
  "lyrical-battle":[
    "Participants will compete individually or in teams as specified by the organizers.",
    "Participants must follow the given theme/topic.",
    "Lyrics must be original and should not be copied from existing songs.",
    "Participants may perform their lyrics in any language permitted by the organizers.",
    "Vulgar, offensive, discriminatory or inappropriate lyrics are not allowed.",
    "Participants must complete their performance within the allotted time.",
    "Musical instruments or background tracks may be used only if permitted.",
    "Participants must maintain proper decorum throughout the event.",
    "Judging will consider lyrics, creativity, relevance, delivery and overall performance.",
    "Any form of plagiarism or malpractice will lead to disqualification.",
    "The judges' decision will be final."
  ],
  "lego":[
    "The event may be conducted individually or in teams as specified by the organizers.",
    "Participants will be provided with LEGO blocks/materials by the organizers.",
    "Participants must construct the given concept/design within the allotted time.",
    "Only the materials provided or approved by the organizers may be used.",
    "Participants must not bring pre-assembled LEGO structures.",
    "The completed structure must be presented to the judges when time expires.",
    "The structure should demonstrate creativity, stability and relevance to the given task.",
    "Participants must not interfere with other teams' materials or structures.",
    "Any intentional damage to another team's work will result in disqualification.",
    "Judging will be based on creativity, design, functionality, stability and presentation.",
    "The judges' decision will be final."
  ],
  "photographic-memory":[
    "Participants will be shown an image containing multiple objects/details for a limited period.",
    "Participants must carefully observe and remember the displayed information.",
    "The image will not be available for viewing after the allotted observation time.",
    "Participants must answer questions based only on what they observed.",
    "Mobile phones, cameras, notes or external assistance are not permitted.",
    "Participants must not communicate with other participants during the activity.",
    "Each correct answer will carry the specified score.",
    "In case of a tie, a tie-breaker question/activity may be conducted.",
    "Any form of cheating or external assistance will result in disqualification.",
    "The participant with the highest score will be declared the winner.",
    "The organizers' decision will be final."
  ],
  "tale-trigger":[
    "Participants will be given a starting line, phrase or prompt.",
    "Each participant/team must contribute to developing the story according to the instructions given by the organizers.",
    "The story must be original and created during the event.",
    "Participants must follow the given theme/prompt.",
    "The story should maintain logical continuity while allowing creativity.",
    "Offensive, discriminatory or inappropriate content is strictly prohibited.",
    "Participants must complete the activity within the allotted time.",
    "Participants may not use AI tools, internet sources or pre-written content unless permitted by the organizers.",
    "Judging will be based on creativity, imagination, continuity, originality and overall storytelling.",
    "Plagiarism or external assistance will result in disqualification.",
    "The judges' decision will be final."
  ]
};

const CONTACTS = {
  staff:[
    {name:"Prof. Ram Karthik", phone:"9789627321"},
    {name:"Prof. Kowsalya",    phone:"9443284045"},
    {name:"Prof. Nijesh",      phone:"9751428774"},
    {name:"Prof. Jayalakshmi", phone:"9489580355"}
  ],
  student:[
    {name:"Suhail",         phone:"7904248930"},
    {name:"Jenifer",        phone:"8072426668"},
    {name:"Dhivya",         phone:"9514314014"},
    {name:"Abdul Rahaman",  phone:"9363118007"}
  ]
};

const LEADERSHIP = [
  {name:"Rt. Rev. S. Prince Calvin", role:"Bishop & Chairman"},
  {name:"Dr. P.D. Arumairaj", role:"Director"},
  {name:"Dr. R. Mercy Shanthi", role:"Principal"},
  {name:"Dr. J. Joshua Gnanasekaran", role:"Vice Principal & ISTE Co-ordinator"}
];

const TICKER = [
  "TECHNOVA 2K26 — National Level Inter College Symposium",
  "24th & 25th September 2026 — Thursday & Friday",
  "CSI College of Engineering, Ketti — Ooty",
  "Explore technical and non-technical events",
  "Registrations open"
];

/* ---------------------------------------------------------------
   PHOTOGRAPHS
   Every picture below is a live URL. Swap any one of them for your
   own image and nothing else needs to change. If a URL ever stops
   working, the card falls back to its built-in artwork instead of
   showing a broken image.
   --------------------------------------------------------------- */
const CDN = "https://csice.edu.in/wp-content/uploads/";

/* Campus location — change these numbers and every map link follows. */
const GEO = { lat: 11.374755840921754, lng: 76.72625676609759, zoom: 16 };
const MAPS_PLACE = `https://www.google.com/maps/search/?api=1&query=${GEO.lat},${GEO.lng}`;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${GEO.lat},${GEO.lng}`;
const MAP_TILES = `https://maps.wikimedia.org/img/osm-intl,${GEO.zoom},${GEO.lat},${GEO.lng},900x680.png`;

const PHOTOS = {
  campus:[
    {url: CDN+"2025/10/CSI-COLLEGE-OF-ENGINEERING-KETTI-1024x683.jpg", caption:"CSI College of Engineering"},
    {url: CDN+"2024/01/slider18-1.jpg", caption:"On campus"},
    {url: CDN+"2024/01/slider19-1.jpg", caption:"Ketti · The Nilgiris"},
    {url: CDN+"2024/01/slider23-1.jpg", caption:"The college"},
    {url: CDN+"2026/07/WhatsApp-Image-2026-07-16-at-11.03.33-PM-1024x754.jpeg", caption:"Campus life"},
    {url: CDN+"2026/04/WhatsApp-Image-2026-04-14-at-10.26.57-AM-1024x768.jpeg", caption:"Above Ooty"}
  ],
  events:{
    /* supplied for the technical track — stored inside this file */
    "cad":                 "assets/events/cad.jpg",
    "circuit-x":           "assets/events/circuit-x.jpg",
    "ad-battle":           "assets/events/ad-battle.jpg",
    "thinktech":           "assets/events/thinktech.jpg",
    /* supplied for the non-technical track — stored inside this file */
    "lyrical-battle":      "assets/events/lyrical-battle.jpg",
    "lego":                "assets/events/lego.jpg",
    "photographic-memory": "assets/events/photographic-memory.jpg",
    "tale-trigger":        "assets/events/tale-trigger.jpg"
  }
};

/* Built-in artwork, embedded in this file — the safety net under every photo. */
const CAMPUS_ART = ["assets/campus/campus-valley.jpg","assets/campus/campus-facade.jpg","assets/campus/campus-quad.jpg"];
const EVENT_IMG = {
  "cad":"assets/events/art/cad.jpg",
  "circuit-x":"assets/events/art/circuit-x.jpg",
  "ad-battle":"assets/events/art/ad-battle.jpg",
  "thinktech":"assets/events/art/thinktech.jpg",
  "lyrical-battle":"assets/events/art/lyrical-battle.jpg",
  "lego":"assets/events/art/lego.jpg",
  "photographic-memory":"assets/events/art/photographic-memory.jpg",
  "tale-trigger":"assets/events/art/tale-trigger.jpg"
};

const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* shared images are stored once and reused, keeping the file small */
(function hydrateImages(){
  const CREST = document.getElementById("srcCsi").src;      /* embedded fallback */
  const SRC = {
    csi:    CREST,
    iste:   document.getElementById("srcIste").src,
    poster: document.getElementById("srcPoster").src
  };
  const BANNER = {
    "banner:tech": document.getElementById("srcBannerTech").src,
    "banner:non":  document.getElementById("srcBannerNon").src
  };
  document.querySelectorAll("img[data-img]").forEach(img=>{
    const k = img.dataset.img;
    img.src = k.startsWith("ev:") ? EVENT_IMG[k.slice(3)] : (BANNER[k] || SRC[k]);
  });
  /* registration form behind the QR code */
  const qr = document.getElementById("qrLink");
  if(qr) qr.href = SITE.REGISTRATION_URL || "#register";
})();

/* ============================================================
   TICKER
   ============================================================ */
(function ticker(){
  const track = $("#tickTrack");
  const set = () => TICKER.map(t=>`<span class="tick-item">${t}</span>`).join("");
  track.innerHTML = set() + set();   /* duplicated for a seamless loop */
})();

/* ============================================================
   WORDMARK IGNITION
   ============================================================ */
function ignite(el){
  if(!el) return;
  if(REDUCED){ el.classList.add("lit"); return; }
  el.classList.remove("lit","scan");
  void el.offsetWidth;
  el.classList.add("scan");
  setTimeout(()=>el.classList.add("lit"), 900);
}

/* ============================================================
   LOADER
   ============================================================ */
(function loader(){
  const bar=$("#lbFill"), pct=$("#lbPct"), box=$("#loader"), word=$("#loaderWord");
  let p=0;
  setTimeout(()=>ignite(word), 260);
  const dur = REDUCED ? 500 : 2100;
  const t0 = performance.now();
  function step(now){
    const k = Math.min(1,(now-t0)/dur);
    p = Math.round(100*(1-Math.pow(1-k,2.1)));
    bar.style.width = p+"%"; pct.textContent = p+"%";
    if(k<1){ requestAnimationFrame(step); }
    else { finish(); }
  }
  function finish(){
    if(!REDUCED){
      const fl = $("#flash");
      fl.classList.add("go");
      setTimeout(()=>fl.remove(), 1200);        /* never leave a white layer behind */
    } else { $("#flash").remove(); }
    setTimeout(()=>{
      box.classList.add("done");
      document.body.classList.remove("locked");
      ignite($("#heroWord"));
      router(true);
      /* replays only when someone taps the title — never on a timer */
      const hw = $("#heroWord");
      if(hw && !REDUCED){
        hw.style.cursor = "pointer";
        hw.addEventListener("click", ()=>ignite(hw));
      }
    }, REDUCED?0:260);
  }
  requestAnimationFrame(step);
})();

/* ============================================================
   RENDER — event cards
   ============================================================ */
function cardHTML(e){
  const red = e.track==="nontechnical" ? " red" : "";
  return `<a class="ev${red} rv" href="#/events/${e.slug}" aria-label="${e.name}${e.sub ? ` (${e.sub})` : ""} — event details">
    <div class="ev-img">
      <span class="ev-no">${e.no}</span>
      <img class="art" src="${EVENT_IMG[e.slug]}" alt="" aria-hidden="true" />
      ${PHOTOS.events[e.slug] ? `<img class="photo" src="${PHOTOS.events[e.slug]}" alt="${e.name}" loading="lazy" decoding="async" onerror="this.remove()" />` : ""}
    </div>
    <div class="ev-body">
      <h4>${e.name}${e.sub ? ` <span class="ev-sub">(${e.sub})</span>` : ""}</h4>
      <p>${e.blurb}</p>
      <span class="ev-go">Explore event <span class="ar" aria-hidden="true">&#8594;</span></span>
    </div>
  </a>`;
}
$("#gridTech").innerHTML = EVENTS.filter(e=>e.track==="technical").map(cardHTML).join("");
$("#gridNon").innerHTML  = EVENTS.filter(e=>e.track==="nontechnical").map(cardHTML).join("");

/* contacts */
function people(list,cls){
  return `<div class="cbox ${cls} rv">
    <h3>${cls==="red"?"Student":"Staff"} co-ordinators</h3>
    <ul>${list.map(p=>`<li><a class="person" href="tel:+91${p.phone}">
      <span class="nm">${p.name}</span>
      <span class="ph"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>
      +91 ${p.phone}</span></a></li>`).join("")}</ul>
  </div>`;
}
$("#contactGrid").innerHTML = people(CONTACTS.staff,"") + people(CONTACTS.student,"red");

/* campus pictures, each backed by built-in artwork */
$("#campusStrip").innerHTML = PHOTOS.campus.map((c,i)=>`
  <figure>
    <img class="art" src="${CAMPUS_ART[i % CAMPUS_ART.length]}" alt="" aria-hidden="true" />
    <img class="photo" src="${c.url}" alt="${c.caption} — CSI College of Engineering, Ketti" loading="lazy" onerror="this.remove()" />
    <figcaption>${c.caption}</figcaption>
  </figure>`).join("");
$$('.cat-bg .photo[data-photo]').forEach(img => { img.src = PHOTOS.events[img.dataset.photo]; });

/* map: real tiles when we can reach them, the drawn panel when we cannot */
(function map(){
  $$('a[data-map="place"], #mapCard').forEach(a => a.href = MAPS_PLACE);
  $$('a[data-map="dir"]').forEach(a => a.href = MAPS_DIRECTIONS);
  const tiles = $("#mapTiles");
  if(tiles && navigator.onLine !== false){
    tiles.addEventListener("load", ()=>tiles.classList.add("on"));
    tiles.addEventListener("error", ()=>tiles.remove());
    tiles.src = MAP_TILES;
  }
})();
$("#leadGrid").innerHTML = LEADERSHIP.map(l=>`<div class="ldr"><b>${l.name}</b><span>${l.role}</span></div>`).join("");

/* ============================================================
   ROUTER — home + /events/:slug
   ============================================================ */
const SECTIONS = ["home","about","events","technical","nontechnical","college","poster","register","contact"];
const TRACKS = ["technical","nontechnical"];

/* Event grids stay closed until a track is opened from the arena. */
function openTrack(id){
  if(!TRACKS.includes(id)) return;
  const sec = document.getElementById(id);
  if(!sec) return;
  sec.classList.add("open");
  const cat = document.querySelector('.cat[data-goto="'+id+'"]');
  if(cat && !cat.classList.contains("opened")){
    cat.classList.add("opened");
    const go = cat.querySelector(".go");
    if(go) go.innerHTML = 'Events unlocked <i></i>';
  }
  const hint = document.getElementById("catsHint");
  if(hint) hint.textContent = TRACKS.every(t => document.getElementById(t)?.classList.contains("open"))
    ? "Both tracks are open — scroll on"
    : "One track open · choose the other whenever you like";
  observeReveals();
}

function eventPageHTML(e){
  const isTech = e.track==="technical";
  const c = isTech ? "var(--blue)" : "var(--red)";
  const trackName = isTech ? "Technical event" : "Non-technical event";
  const backTo = isTech ? "technical" : "nontechnical";
  return `
  <article class="ev-hero">
    <img class="bgi" src="${EVENT_IMG[e.slug]}" alt="" aria-hidden="true" />
    ${PHOTOS.events[e.slug] ? `<img class="bgi photo" src="${PHOTOS.events[e.slug]}" alt="" aria-hidden="true" onerror="this.remove()" />` : ""}
    <div class="wrap">
      <span class="badge" style="color:${c};border-color:${c}">${trackName} · ${e.no}</span>
      <h1>${e.name}${e.sub ? `<span class="h1-sub">(${e.sub})</span>` : ""}</h1>
      <p class="lead" style="color:#cfd7e3;max-width:52ch">${e.blurb}</p>
    </div>
  </article>
  <div class="wrap pg-grid" style="--rc:${c}">
    <div class="pg-body">
      <h2>Overview</h2>
      <p>${e.overview}</p>
      <h2 style="margin-top:2.4rem">Event rules</h2>
      ${(RULES[e.slug]||[]).length
        ? `<ol class="rules">${RULES[e.slug].map(r=>`<li>${r}</li>`).join("")}</ol>`
        : `<p class="notice">Rules for this event will be announced soon. The general rules below apply in the meantime.</p>`}

      <h2 style="margin-top:2.4rem">General rules <span class="thin">— all events</span></h2>
      <ol class="rules">${GENERAL_RULES.map(r=>`<li>${r}</li>`).join("")}</ol>
      <p class="notice">Event-specific rules take precedence wherever applicable. The organizers may modify rules, timing or venue if necessary.</p>
      <div class="poster-actions">
        <button class="btn ${isTech?"":"red"}" data-register>Register now</button>
        <button class="btn ghost" data-goto="contact">Ask a co-ordinator</button>
      </div>
    </div>
    <aside class="side-card">
      <ul class="detail-list">
        <li><span class="k">Event</span><span class="v">${e.name}${e.sub ? ` (${e.sub})` : ""}</span></li>
        <li><span class="k">Track</span><span class="v">${trackName}</span></li>
        <li><span class="k">Team size</span><span class="v">2 to 5 members</span></li>
        <li><span class="k">Date</span><span class="v">24<sup>th</sup> &amp; 25<sup>th</sup> Sep 2026</span></li>
        <li><span class="k">Time</span><span class="v">Event timing will be announced in the venue</span></li>
        <li><span class="k">Venue</span><span class="v">CSI College of Engineering, Ketti</span></li>
        <li><span class="k">Symposium</span><span class="v">TECHNOVA 2K26</span></li>
      </ul>
    </aside>
  </div>
  <div class="wrap pg-nav">
    <button class="btn ghost" data-back>&#8592; Back</button>
    <button class="btn ghost" data-goto="${backTo}">All ${isTech?"technical":"non-technical"} events</button>
    <button class="btn ghost" data-goto="home">Home</button>
  </div>`;
}

function router(first){
  const h = location.hash;
  const m = h.match(/^#\/events\/([a-z0-9-]+)$/i);
  if(m){
    const e = EVENTS.find(x=>x.slug===m[1].toLowerCase());
    if(e){
      $("#page").innerHTML = eventPageHTML(e);
      unseal();                                   /* the footer travels with you */
      document.body.classList.add("on-page");
      document.title = `${e.name}${e.sub ? ` (${e.sub})` : ""} — TECHNOVA 2K26`;
      window.scrollTo(0,0);
      observeReveals();
      return;
    }
  }
  document.body.classList.remove("on-page");
  document.title = "TECHNOVA 2K26 — National Level Inter College Symposium";
  if(h && h.length>1 && h !== "#home") unseal();
  if(h && h.length>1 && SECTIONS.includes(h.slice(1))){
    openTrack(h.slice(1));
    const el = document.getElementById(h.slice(1));
    if(el) setTimeout(()=>el.scrollIntoView({behavior: first?"auto":"smooth", block:"start"}), first?60:0);
  } else if(!first){
    window.scrollTo({top:0,behavior:"smooth"});
  }
}
window.addEventListener("hashchange", ()=>router(false));

/* The page below the hero opens the first time a visitor asks for it. */
function unseal(){
  const rest = document.getElementById("rest"), foot = document.getElementById("siteFoot");
  if(rest && !rest.classList.contains("open")){
    rest.classList.add("open");
    if(foot) foot.classList.add("open");
    document.body.classList.add("unsealed");
    observeReveals();
  }
}

function goTo(id){
  closeMenu();
  unseal();
  openTrack(id);
  if(document.body.classList.contains("on-page")){
    location.hash = "#"+id;                    /* hashchange handles the scroll */
  } else {
    const el = document.getElementById(id);
    if(el){
      el.scrollIntoView({behavior:REDUCED?"auto":"smooth", block:"start"});
      try{ history.replaceState(null,"","#"+id); }catch(_){}
    }
  }
}

document.addEventListener("click",(ev)=>{
  const cm = ev.target.closest("[data-close-modal]");
  if(cm){ closeModal(); }
  const goer = ev.target.closest("[data-goto]");
  if(goer){ ev.preventDefault(); goTo(goer.dataset.goto); }
  const back = ev.target.closest("[data-back]");
  if(back){ ev.preventDefault(); history.length>1 ? history.back() : goTo("events"); }
  const reg = ev.target.closest("[data-register]");
  if(reg){ ev.preventDefault(); register(); }
  const nl = ev.target.closest('#navLinks a, #menu a.m-link, .f-links a');
  if(nl && nl.getAttribute("href")?.startsWith("#") && !nl.getAttribute("href").startsWith("#/")){
    ev.preventDefault(); goTo(nl.getAttribute("href").slice(1));
  }
});

/* ============================================================
   REGISTRATION
   ============================================================ */
function register(){
  if(SITE.REGISTRATION_URL && SITE.REGISTRATION_URL.trim()){
    window.open(SITE.REGISTRATION_URL,"_blank","noopener");
  } else {
    openModal();
  }
}
function openModal(){
  $("#modal").classList.add("open");
  document.body.classList.add("locked");
  $("#modal .btn").focus();
}
function closeModal(){
  $("#modal").classList.remove("open");
  if(!$("#menu").classList.contains("open")) document.body.classList.remove("locked");
}
$("#modal").addEventListener("click",e=>{ if(e.target.id==="modal") closeModal(); });

/* ============================================================
   NAV / MENU
   ============================================================ */
const nav=$("#nav"), burger=$("#burger"), menu=$("#menu");
function openMenu(){
  menu.classList.add("open"); menu.setAttribute("aria-hidden","false");
  burger.classList.add("open"); burger.setAttribute("aria-expanded","true");
  burger.setAttribute("aria-label","Close menu");
  document.body.classList.add("locked");
  $$("#menu a.m-link").forEach((a,i)=>a.style.animationDelay = (0.06*i+0.08)+"s");
}
function closeMenu(){
  menu.classList.remove("open"); menu.setAttribute("aria-hidden","true");
  burger.classList.remove("open"); burger.setAttribute("aria-expanded","false");
  burger.setAttribute("aria-label","Open menu");
  if(!$("#modal").classList.contains("open") && !$("#lightbox").classList.contains("open"))
    document.body.classList.remove("locked");
}
burger.addEventListener("click",()=> menu.classList.contains("open") ? closeMenu() : openMenu());

addEventListener("scroll",()=>{ nav.classList.toggle("solid", window.scrollY>40); },{passive:true});

/* scrollspy */
const spy = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      $$("#navLinks a").forEach(a=>a.classList.toggle("active", a.dataset.sec===en.target.id));
    }
  });
},{rootMargin:"-45% 0px -50% 0px"});
SECTIONS.forEach(id=>{ const el=document.getElementById(id); if(el) spy.observe(el); });

/* ============================================================
   COUNTDOWN
   ============================================================ */
(function countdown(){
  const target = new Date(SITE.countdownTarget).getTime();
  const out = {d:$("#cd-d"),h:$("#cd-h"),m:$("#cd-m"),s:$("#cd-s")};
  const prev = {};
  function pad(n){ return String(n).padStart(2,"0"); }
  function tick(){
    const diff = target - Date.now();
    if(diff<=0){
      Object.values(out).forEach(el=>el.textContent="00");
      $("#countState").textContent = "The arena is open";
      clearInterval(iv); return;
    }
    const v = {
      d: Math.floor(diff/86400000),
      h: Math.floor(diff/3600000)%24,
      m: Math.floor(diff/60000)%60,
      s: Math.floor(diff/1000)%60
    };
    for(const k in v){
      const t = k==="d" ? String(v[k]).padStart(3,"0") : pad(v[k]);
      if(prev[k]!==t){
        out[k].textContent = t;
        if(!REDUCED){ out[k].classList.remove("tick"); void out[k].offsetWidth; out[k].classList.add("tick"); }
        prev[k]=t;
      }
    }
  }
  tick(); const iv=setInterval(tick,1000);
})();

/* ============================================================
   POSTER LIGHTBOX
   ============================================================ */
const lb=$("#lightbox"), lbImg=$("#lbImg");
let zoom=1;
function applyZoom(){
  lbImg.style.width = (96*zoom).toFixed(1)+"vw";
  lbImg.style.maxWidth = Math.round(760*zoom)+"px";
  $("#zoomOut").disabled = zoom<=1;
}
function openLB(){
  lb.classList.add("open"); document.body.classList.add("locked");
  zoom=1; applyZoom(); $("#lbClose").focus();
}
function closeLB(){
  lb.classList.remove("open");
  if(!$("#menu").classList.contains("open")) document.body.classList.remove("locked");
}
$("#posterFrame").addEventListener("click", openLB);
$("#posterFrame").addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); openLB(); }});
$("#viewPoster").addEventListener("click", openLB);
$("#lbClose").addEventListener("click", closeLB);
$("#zoomIn").addEventListener("click", ()=>{ zoom=Math.min(4,zoom*1.35); applyZoom(); });
$("#zoomOut").addEventListener("click", ()=>{ zoom=Math.max(1,zoom/1.35); applyZoom(); });
lbImg.addEventListener("dblclick", ()=>{ zoom = zoom>1 ? 1 : 2.2; applyZoom(); });
$("#fsPoster").addEventListener("click", ()=>{ openLB(); requestFS(); });
$("#lbFull").addEventListener("click", requestFS);
function requestFS(){
  const el = lb;
  if(document.fullscreenElement){ document.exitFullscreen?.(); return; }
  (el.requestFullscreen || el.webkitRequestFullscreen || (()=>{})).call(el);
}
addEventListener("keydown", e=>{
  if(e.key==="Escape"){
    if(lb.classList.contains("open")) closeLB();
    else if($("#modal").classList.contains("open")) closeModal();
    else if(menu.classList.contains("open")) closeMenu();
  }
});

/* ============================================================
   REVEALS
   ============================================================ */
let revealObs;
function observeReveals(){
  if(!revealObs){
    revealObs = new IntersectionObserver((es,o)=>{
      es.forEach((en,i)=>{
        if(en.isIntersecting){
          const d = Math.min(4, Array.from(en.target.parentElement.children).indexOf(en.target)) * 90;
          setTimeout(()=>en.target.classList.add("in"), REDUCED?0:d);
          o.unobserve(en.target);
        }
      });
    },{rootMargin:"0px 0px -12% 0px",threshold:.12});
  }
  $$(".rv:not(.in)").forEach(el=>revealObs.observe(el));
}
observeReveals();
