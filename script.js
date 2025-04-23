const toggleBtn = document.getElementById('toggleSideNav');

const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('open');
});
