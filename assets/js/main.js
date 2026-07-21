/* ===========================================================
   Peptiva USA — shared components + catalog
   =========================================================== */
const CATEGORIES = [
  {slug:"metabolic", name:"Metabolic & Weight", desc:"GLP-1 class formats your patients ask for", img:"cat-metabolic.jpg"},
  {slug:"recovery",  name:"Recovery & Repair",  desc:"Soft-tissue, tendon & post-training protocols", img:"cat-recovery.jpg"},
  {slug:"longevity", name:"Longevity & Cellular",desc:"Mitochondrial energy & healthy-aging pathways", img:"cat-longevity.jpg"},
  {slug:"aesthetic", name:"Aesthetic & Skin",   desc:"Collagen, regeneration & glow-forward stacks", img:"cat-aesthetic.jpg"}
];

const PRODUCTS = [
  {id:"sema-glp-1", name:"Sema GLP-1 1.5mg", cat:"metabolic", price:189, best:true, accent:"blue",
   tag:"GLP-1 receptor agonist",
   desc:"The category-defining metabolic peptide, delivered in a pre-filled, ready-to-administer pen — no reconstitution, no syringe math.",
   research:"A glucagon-like peptide-1 (GLP-1) receptor agonist widely studied in the context of insulin sensitivity, gastric emptying and appetite regulation. It remains the most-requested compound in metabolic and weight-management protocols.",
   contains:"1.5 mg GLP-1 per unit"},
  {id:"tirz-glp-2", name:"Tirz GLP-2 10mg", cat:"metabolic", price:329, best:true, accent:"blue",
   tag:"Dual GIP + GLP-1 agonist",
   desc:"Dual-incretin format for the stronger metabolic response your patients walk in requesting.",
   research:"A dual GIP and GLP-1 receptor agonist. Its combined incretin activity is studied for a broader metabolic and weight response than GLP-1 agonism alone.",
   contains:"10 mg GLP-2 per unit"},
  {id:"reta-glp-3", name:"Reta GLP-3 20mg", cat:"metabolic", price:279, best:true, accent:"crimson",
   tag:"Triple GIP/GLP-1/glucagon agonist",
   desc:"The next-generation triple-agonist format — advanced metabolic and weight support in one pre-filled pen.",
   research:"A triple agonist of the GIP, GLP-1 and glucagon receptors, studied for advanced metabolic optimization, energy expenditure and weight response.",
   contains:"20 mg GLP-3 per unit"},
  {id:"tesamorelin", name:"Tesamorelin 30mg", cat:"recovery", price:219, best:false, accent:"crimson",
   tag:"GHRH analog",
   desc:"A growth-hormone-releasing hormone analog studied for body composition and recovery pathways.",
   research:"Tesamorelin is a synthetic analog of growth-hormone-releasing hormone (GHRH), studied for its role in stimulating endogenous growth hormone secretion and its effects on body composition.",
   contains:"30 mg Tesamorelin per unit"},
  {id:"mots-c", name:"MOTS-C 20mg", cat:"longevity", price:179, best:true, accent:"crimson",
   tag:"Mitochondrial-derived peptide",
   desc:"A mitochondrial-derived peptide studied for metabolic regulation, energy and endurance.",
   research:"MOTS-C is a mitochondrial-derived peptide investigated for its role in metabolic homeostasis, insulin sensitivity, fat metabolism and exercise capacity — a staple of longevity-clinic protocols.",
   contains:"20 mg MOTS-C per unit"},
  {id:"glow", name:"GLOW 10/10/50mg", cat:"aesthetic", price:199, best:true, accent:"crimson",
   tag:"GHK-Cu + BPC-157 + TB-500",
   desc:"The aesthetic stack — collagen, skin regeneration and tissue recovery in one pre-filled pen.",
   research:"GLOW combines GHK-Cu (a copper peptide studied for collagen production and skin regeneration) with the regenerative peptides BPC-157 and TB-500. It is positioned as an aesthetic and anti-inflammation stack.",
   contains:"GHK-Cu + BPC-157 + TB-500 blend · 10/10/50 mg per unit"},
  {id:"wolverine", name:"Wolverine 10/10mg", cat:"recovery", price:189, best:true, accent:"crimson",
   tag:"BPC-157 + TB-500",
   desc:"The dual-peptide recovery stack — an athletic-patient favorite for tissue repair protocols.",
   research:"Wolverine pairs BPC-157 and TB-500, two peptides studied for tissue repair, angiogenesis and inflammation modulation. It is one of the most-requested recovery protocols among athletic patient populations.",
   contains:"BPC-157 + TB-500 blend · 10/10 mg per unit"}
];

const IMG = "assets/img/";
function productImg(p){ return IMG + "products/" + (p && p.id ? p.id : "semaglutide") + ".png"; }
function fmt(n){ return "$" + n.toFixed(0); }
function catName(slug){ var c = CATEGORIES.find(function(x){return x.slug===slug;}); return c ? c.name : slug; }

const ICON = {
  menu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  ig:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  x:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5-6.6L4.4 22H1.4l8-9.2L2 2h6.9l4.5 6 5.6-6Zm-2.4 18h1.9L8.1 4H6.1l9.5 16Z"/></svg>',
  li:'<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9z"/></svg>',
  yt:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.4A3 3 0 0 0 1.4 7.3 33 33 0 0 0 1 12a33 33 0 0 0 .4 4.7 3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a3 3 0 0 0 2.1-2.1C23 15.2 23 12 23 12Zm-13 3V9l5.2 3Z"/></svg>'
};

function buildHeader(){
  var dropItems = CATEGORIES.map(function(c){
    return '<a href="shop.html?cat=' + c.slug + '"><strong>' + c.name + '</strong><span>' + c.desc + '</span></a>';
  }).join("");
  return ''
  + '<header class="site-header" id="hdr"><div class="container nav">'
  +   '<a class="nav__logo" href="index.html" aria-label="Peptiva USA home">' + LOGO_SVG + '</a>'
  +   '<ul class="nav__links">'
  +     '<li class="has-drop"><a href="shop.html">Products</a><div class="drop">' + dropItems
  +       '<div class="drop__all"><a href="shop.html">All products &rarr;</a></div></div></li>'
  +     '<li><a href="refillable.html">Refillable Pens</a></li>'
  +     '<li><a href="how-it-works.html">Lab Testing</a></li>'
  +     '<li><a href="about.html">About</a></li>'
  +     '<li><a href="faq.html">FAQ</a></li>'
  +     '<li><a href="contact.html">Contact</a></li>'
  +   '</ul>'
  +   '<div class="nav__actions">'
  +     '<a class="btn btn--primary btn--sm nav-extra" href="contact.html">Request Wholesale Access</a>'
  +     '<button class="menu-toggle" aria-label="Menu" onclick="document.getElementById(\'hdr\').classList.toggle(\'mobile-open\')">' + ICON.menu + '</button>'
  +   '</div>'
  + '</div></header>';
}

function buildFooter(){
  var shop = CATEGORIES.map(function(c){
    return '<li><a href="shop.html?cat=' + c.slug + '">' + c.name + '</a></li>';
  }).join("");
  var disclaimer = 'All products supplied by Peptiva USA are intended for licensed clinical practices and research use only. '
    + 'Statements on this site have not been evaluated by the FDA. Products are not for human consumption outside a licensed clinical setting '
    + 'and are not intended to diagnose, treat, cure or prevent any disease. Wholesale availability is subject to verification of practice credentials. '
    + 'Prescribing and administration decisions remain at the discretion of the licensed clinician.';
  return ''
  + '<footer class="footer"><div class="container">'
  +   '<div class="footer__top">'
  +     '<div class="footer__brand">' + LOGO_FOOTER
  +       '<p>Pharmaceutical-grade, pre-filled peptide pens for licensed clinical practices and research. Standardized formats, COA on every batch.</p>'
  +       '<div class="footer__badges"><span>cGMP Manufactured</span><span>3rd-Party Tested</span><span>COA Per Batch</span></div>'
  +       '<div class="footer__socials">'
  +         '<a href="#" aria-label="Instagram">' + ICON.ig + '</a>'
  +         '<a href="#" aria-label="LinkedIn">' + ICON.li + '</a>'
  +         '<a href="#" aria-label="X">' + ICON.x + '</a>'
  +         '<a href="#" aria-label="YouTube">' + ICON.yt + '</a>'
  +       '</div></div>'
  +     '<div><h4>Products</h4><ul>' + shop + '<li><a href="shop.html">All products</a></li></ul></div>'
  +     '<div><h4>Company</h4><ul>'
  +       '<li><a href="how-it-works.html">Lab Testing</a></li>'
  +       '<li><a href="about.html">About</a></li>'
  +       '<li><a href="faq.html">Research & FAQ</a></li>'
  +       '<li><a href="contact.html">Become a Partner</a></li></ul></div>'
  +     '<div><h4>Practices</h4><ul>'
  +       '<li><a href="contact.html">Wholesale Access</a></li>'
  +       '<li><a href="contact.html">Request Pricing</a></li>'
  +       '<li><a href="mailto:info@peptivausa.com">info@peptivausa.com</a></li>'
  +       '<li><a href="shipping-refunds.html">Shipping & Returns</a></li></ul></div>'
  +   '</div>'
  +   '<div class="footer__disc"><strong style="color:#B9C2D2">For licensed clinical practices and research use only:</strong> '
  +     disclaimer + ' See our <a href="research-use.html" style="color:#E11D38">Research Use Disclaimer</a>.</div>'
  +   '<div class="footer__bottom">'
  +     '<div class="footer__legal">'
  +       '<a href="terms.html">Terms of Service</a>'
  +       '<a href="privacy.html">Privacy Policy</a>'
  +       '<a href="research-use.html">Research Use Disclaimer</a>'
  +       '<a href="shipping-refunds.html">Shipping & Returns</a></div>'
  +     '<div class="footer__copy">&copy; ' + (new Date().getFullYear()) + ' Peptiva USA. All rights reserved.</div>'
  +   '</div>'
  + '</div></footer>';
}

function productCard(p){
  return ''
  + '<a class="card pcard reveal" href="product.html?id=' + p.id + '">'
  +   '<div class="pcard__media"><img src="' + productImg(p) + '" alt="' + p.name + ' peptide pen" loading="lazy">'
  +     '<span class="pcard__tag">' + catName(p.cat) + '</span>'
  +     (p.best ? '<span class="pcard__best">Best Seller</span>' : '') + '</div>'
  +   '<div class="pcard__body"><h3>' + p.name + '</h3>'
  +     '<p class="pcard__desc">' + p.desc + '</p>'
  +     '<div class="pcard__foot"><span class="pcard__price" style="font-size:15px;font-family:var(--font);font-weight:700;color:var(--crimson)">Request pricing</span>'
  +       '<span class="rx">Clinical / RUO</span></div>'
  +   '</div></a>';
}
function renderGrid(el, list){ el.innerHTML = list.map(productCard).join(""); revealInit(); }

function initShop(){
  var grid = document.getElementById("shop-grid");
  if(!grid) return;
  var params = new URLSearchParams(location.search);
  var active = params.get("cat") || "all";
  var countEl = document.getElementById("shop-count");
  function draw(){
    var list = active === "all" ? PRODUCTS : PRODUCTS.filter(function(p){return p.cat===active;});
    renderGrid(grid, list);
    if(countEl) countEl.textContent = list.length + " products";
    document.querySelectorAll(".filter-btn").forEach(function(b){ b.classList.toggle("active", b.dataset.cat===active); });
  }
  document.querySelectorAll(".filter-btn").forEach(function(b){
    b.addEventListener("click", function(){
      active = b.dataset.cat; draw();
      history.replaceState(null, "", active==="all" ? "shop.html" : "shop.html?cat=" + active);
    });
  });
  draw();
}

function initProduct(){
  var wrap = document.getElementById("pdp");
  if(!wrap) return;
  var id = new URLSearchParams(location.search).get("id") || PRODUCTS[0].id;
  var p = PRODUCTS.find(function(x){return x.id===id;}) || PRODUCTS[0];
  document.title = p.name + " — Peptiva USA";
  function set(sel, val){ var e = document.querySelector(sel); if(e) e.textContent = val; }
  set("[data-cat]", p.tag);
  set("[data-name]", p.name);
  set("[data-price]", "Wholesale pricing on request");
  set("[data-desc]", p.desc);
  set("[data-research]", p.research);
  set("[data-contains]", p.contains);
  document.querySelectorAll("[data-img]").forEach(function(i){ i.src = productImg(p); });
  var crumb = document.querySelector("[data-crumb]"); if(crumb) crumb.textContent = p.name;
  var rel = document.getElementById("related-grid");
  if(rel){
    var r = PRODUCTS.filter(function(x){return x.cat===p.cat && x.id!==p.id;});
    if(r.length < 3){
      var extra = PRODUCTS.filter(function(x){return x.id!==p.id && r.indexOf(x)===-1;}).slice(0, 3-r.length);
      r = r.concat(extra);
    }
    renderGrid(rel, r.slice(0,3));
  }
}

function initFeatured(){
  var f = document.getElementById("featured-grid");
  if(f){
    var featured = PRODUCTS.filter(function(p){return p.best;}).slice(0,3);
    renderGrid(f, featured);
  }
  var c = document.getElementById("cat-grid");
  if(c){
    c.innerHTML = CATEGORIES.map(function(cat){
      return '<a class="cat-tile reveal" href="shop.html?cat=' + cat.slug + '">'
        + '<img src="' + IMG + cat.img + '" alt="' + cat.name + '" loading="lazy">'
        + '<div class="cat-tile__c"><h3>' + cat.name + '</h3><span>' + cat.desc + '</span>'
        + '<span class="tile-cta">Explore <b>&rarr;</b></span></div></a>';
    }).join("");
    revealInit();
  }
}

function initAccordion(){
  document.querySelectorAll(".acc__q").forEach(function(q){
    q.addEventListener("click", function(){
      var item = q.closest(".acc__item");
      var a = item.querySelector(".acc__a");
      var open = item.classList.toggle("open");
      a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
    });
  });
}

function initForms(){
  document.querySelectorAll("form[data-news]").forEach(function(form){
    form.addEventListener("submit", function(e){ e.preventDefault();
      form.innerHTML = '<p class="hl" style="font-weight:700">Thanks — you are on the list.</p>'; });
  });
  document.querySelectorAll("form[data-apply]").forEach(function(form){
    form.addEventListener("submit", function(e){ e.preventDefault();
      var btn = form.querySelector("button[type=submit], button:not([type])");
      if(btn){ btn.disabled = true; btn.textContent = "Sending…"; }
      var url = (form.getAttribute("action")||"").replace("formsubmit.co/","formsubmit.co/ajax/");
      var done = function(){ form.innerHTML = '<div style="text-align:center;padding:24px"><div style="width:52px;height:52px;border-radius:999px;background:var(--crimson);color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:24px">&#10003;</div><h3>Application received</h3><p style="margin-top:8px">Thank you — our team will follow up within one business day with pricing and next steps.</p></div>'; };
      fetch(url, {method:"POST", body:new FormData(form), headers:{"Accept":"application/json"}}).then(done).catch(done);
    });
  });
}

function revealInit(){
  var els = document.querySelectorAll(".reveal:not(.in)");
  if(!("IntersectionObserver" in window)){ els.forEach(function(e){e.classList.add("in");}); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
  }, {threshold:.12});
  els.forEach(function(e){ io.observe(e); });
}

function initGate(){
  try { if (localStorage.getItem("peptiva_verified") === "yes") return; } catch(e){}
  var o = document.createElement("div");
  o.className = "agegate";
  o.innerHTML = '<div class="agegate__card"><div class="agegate__logo">' + LOGO_SVG + '</div>'
    + '<h2>Professional Access</h2>'
    + '<p>Peptiva USA supplies licensed clinical practices and qualified researchers only. Are you a licensed or qualified professional?</p>'
    + '<div class="agegate__btns"><button class="btn btn--primary btn--lg" id="ag-yes">Yes, continue</button>'
    + '<button class="btn btn--ghost btn--lg" id="ag-no">No</button></div></div>';
  document.body.appendChild(o);
  document.documentElement.style.overflow = "hidden";
  document.getElementById("ag-yes").addEventListener("click", function(){
    try { localStorage.setItem("peptiva_verified", "yes"); } catch(e){}
    o.remove(); document.documentElement.style.overflow = "";
  });
  document.getElementById("ag-no").addEventListener("click", function(){
    o.querySelector(".agegate__card").innerHTML = '<div class="agegate__logo">' + LOGO_SVG + '</div>'
      + '<h2>Access Restricted</h2><p>This site is intended for licensed clinical practices and qualified researchers only.</p>';
  });
}

const REFILLABLE = [
  {id:"sema-glp-1", name:"Sema GLP-1", accent:"blue", tag:"GLP-1 receptor agonist"},
  {id:"tirz-glp-2", name:"Tirz GLP-2", accent:"blue", tag:"Dual GIP + GLP-1 agonist"},
  {id:"reta-glp-3", name:"Reta GLP-3", accent:"crimson", tag:"Triple GIP/GLP-1/glucagon agonist"},
  {id:"tesamorelin", name:"Tesamorelin", accent:"crimson", tag:"GHRH analog"},
  {id:"mots-c", name:"MOTS-C", accent:"crimson", tag:"Mitochondrial-derived peptide"},
  {id:"glow", name:"GLOW", accent:"crimson", tag:"GHK-Cu + BPC-157 + TB-500"},
  {id:"wolverine", name:"Wolverine", accent:"crimson", tag:"BPC-157 + TB-500"}
];
function initRefill(){
  var g = document.getElementById("refill-grid");
  if(!g) return;
  g.innerHTML = REFILLABLE.map(function(p){
    return '<div class="card pcard reveal">'
      + '<div class="pcard__media" style="background:radial-gradient(circle at 50% 34%,#FFFFFF,#EEF3F9)">'
      +   '<img src="assets/img/refillable/' + p.id + '.png" alt="' + p.name + ' refillable pen" loading="lazy">'
      +   '<span class="pcard__tag">Refillable</span></div>'
      + '<div class="pcard__body"><h3>' + p.name + '</h3>'
      +   '<p class="pcard__desc">' + p.tag + ' — reusable multi-dose device.</p>'
      +   '<div class="pcard__foot"><span class="pcard__price" style="font-size:15px;font-family:var(--font);font-weight:700;color:var(--crimson)">Request pricing</span>'
      +   '<span class="rx">Clinical / RUO</span></div></div></div>';
  }).join("");
  revealInit();
}

document.addEventListener("DOMContentLoaded", function(){
  initGate();
  var h = document.getElementById("site-header"); if(h) h.innerHTML = buildHeader();
  var f = document.getElementById("site-footer"); if(f) f.innerHTML = buildFooter();
  initFeatured(); initShop(); initProduct(); initRefill(); initAccordion(); initForms(); revealInit();
});
