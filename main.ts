let toggleBtn = document.getElementById('toggle-btn') as HTMLElement;
let skills = document.getElementById('skills') as HTMLElement;
let menuToggle = document.getElementById('menu-toggle') as HTMLElement;
let personalDetail = document.getElementById('personal-detail') as HTMLElement;

toggleBtn.addEventListener('click', () => {
    skills.classList.toggle('active')
});

menuToggle.addEventListener('click', () => {
    personalDetail.classList.toggle('active');
});
