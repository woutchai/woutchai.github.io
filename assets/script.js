// Minimal progressive enhancement
(function(){
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
})();