async function load(){
  const res = await fetch('/api/data');
  const data = await res.json();
  document.getElementById('title').innerText = data.site_overview.name;
  document.getElementById('desc').innerText = data.site_overview.description;
  const grid = document.getElementById('solutions');
  data.solutions_catalog.forEach(cat=>{
    cat.services.forEach(s=>{
      const el = document.createElement('div');
      el.className='card';
      el.innerHTML = `<h3>${s.title}</h3><p>${s.short_description}</p>`;
      grid.appendChild(el);
    });
  });
}
load();
