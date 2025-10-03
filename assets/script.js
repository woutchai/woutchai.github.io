(function(){
const el = document.getElementById('js-status');
if (el) {
el.textContent = 'JS loaded at ' + new Date().toLocaleString();
}
const btn = document.getElementById('btn');
if (btn) {
btn.addEventListener('click', () => {
alert('Button works! JS is running.');
});
}
})();