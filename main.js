let currentUser = null;
let appeals = [...mockData.appeals];

document.addEventListener('DOMContentLoaded', () => {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) return location.href = 'index.html';

  document.getElementById('user-info').textContent = currentUser.name;
  init();
});

function init() {
  populateSources();
  populateFilters();
  renderDashboard();
  setupEvents();
}

function setupEvents() {
  document.getElementById('new-appeal').onclick = () => openAppealForm();
  document.getElementById('logout').onclick = () => {
    localStorage.removeItem('currentUser');
    location.href = 'index.html';
  };
  document.querySelectorAll('.icon').forEach(el => {
    el.onclick = () => switchView(el.dataset.view);
  });
}

// Murojaat yaratish formasi
function openAppealForm() {
  const form = prompt(`Murojaat matni kiriting:`);
  if (!form) return;

  const type = classifyAppeal(form);
  const newAppeal = {
    id: appeals.length + 1,
    appealNumber: `MR-${new Date().getFullYear()}-${String(appeals.length + 1).padStart(3, '0')}`,
    title: form.substring(0, 50),
    content: form,
    appealType: type,
    priority: type === 'Shikoyat' ? 'Shoshilinch' : 'Standart',
    status: 'Qabul qilindi',
    source: 'Veb-portal',
    region: currentUser.role === 'Fuqaro' ? 'Тошкент шаҳри' : prompt('Hudud:'),
    organization: 'Ижтимоий ҳимоя миллий агентлиги',
    createdAt: new Date().toISOString(),
    citizen: currentUser,
    responsiblePerson: null,
    history: [{ action: 'Qabul qilindi', createdAt: new Date().toISOString() }]
  };

  appeals.push(newAppeal);
  alert(`Murojaat qabul qilindi! Raqami: ${newAppeal.appealNumber}`);
  renderAppeals();
}