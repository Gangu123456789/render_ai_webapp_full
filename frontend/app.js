async function load(){
 const r=await fetch('/api/data');const d=await r.json();
 document.getElementById('title').innerText=d.site_overview.name;
 document.getElementById('subtitle').innerText=d.site_overview.subtitle;
 const box=document.getElementById('solutions');box.innerHTML='';
 d.solutions.forEach(g=>{const s=document.createElement('div');s.className='category';s.innerHTML=`<h2>${g.category}</h2><div class='cards'></div>`;const c=s.querySelector('.cards');g.services.forEach(x=>{const el=document.createElement('div');el.className='card';el.innerHTML=`<h3>${x.title}</h3><p>${x.summary}</p>`;c.appendChild(el)});box.appendChild(s)});
}load();