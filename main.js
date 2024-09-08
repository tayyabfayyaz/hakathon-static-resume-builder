"use strict";
let toggleBtn = document.getElementById('toggle-btn');
let skills = document.getElementById('skills');
let menuToggle = document.getElementById('menu-toggle');
let personalDetail = document.getElementById('personal-detail');
toggleBtn.addEventListener('click', () => {
    skills.classList.toggle('active');
});
menuToggle.addEventListener('click', () => {
    personalDetail.classList.toggle('active');
});
