// Frontend logic (simple, wired to the server endpoints shipped with this bundle)
const BOT_USERNAME = "@MiniWorldUIDBot"; // shown, not used by frontend directly
document.getElementById('botlink').href = "https://t.me/MiniWorldUIDBot";
document.getElementById('botlink').textContent = BOT_USERNAME;

async function postJson(url, data){
  const res = await fetch(url, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  return res.json();
}

const statusEl = document.getElementById('status');
document.getElementById('signin').onclick = async (e)=>{
  e.preventDefault();
  const uid = document.getElementById('uid').value.trim();
  const pwd = document.getElementById('password').value;
  if(!/^\d{10}$/.test(uid)){ statusEl.textContent = 'UID must be 10 digits.'; return; }
  try{
    statusEl.textContent = 'Signing in...';
    const j = await postJson('/api/signin',{uid,pwd});
    if(j.ok){ window.location.href = '/dashboard.html'; }
    else statusEl.textContent = j.error || 'Invalid UID or password.';
  }catch(err){ statusEl.textContent = 'Network error.'; }
}

document.getElementById('getuid').onclick = ()=>{
  window.open('https://t.me/Fflikesbot108', '_blank');
}

// small dashboard routing
if(location.pathname.endsWith('/dashboard.html')){
  const content = document.getElementById('content');
  document.getElementById('btnUsers').onclick = async ()=>{
    const res = await fetch('/api/users'); const j = await res.json();
    content.innerHTML = '<h3>Users</h3><pre>'+JSON.stringify(j, null,2)+'</pre>';
  }
  document.getElementById('btnManage').onclick = ()=> content.innerHTML = '<h3>Manage</h3><p>Placeholder manage tools.</p>';
  document.getElementById('btnSettings').onclick = ()=> content.innerHTML = '<h3>Settings</h3><p>App settings placeholder.</p>';
  document.getElementById('logout').onclick = ()=> location.href = '/';
}
