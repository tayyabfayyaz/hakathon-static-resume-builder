"use strict";
let toggleBtn = document.getElementById("toggle-btn");
let skills = document.getElementById("skills");
let menuToggle = document.getElementById("menu-toggle");
let personalDetail = document.getElementById("personal-detail");
toggleBtn.addEventListener("click", () => {
    skills.classList.toggle("active");
});
menuToggle.addEventListener("click", () => {
    personalDetail.classList.toggle("active");
});
window.onload = () => {
    let form = document.getElementById("form-content");
    let userName = document.getElementById("user-name");
    let uFather = document.getElementById("u-father");
    let dOB = document.getElementById("u-dob");
    let usermaritalStatus = document.getElementById("u-status");
    let userCNIC = document.getElementById("u-cnic");
    let userHomeAddress = document.getElementById("u-address");
    let userEmail = document.getElementById("u-email");
    let userNumber = document.getElementById("u-number");
    let skillsInfo = document.getElementById("skills-info");
    let eduInfo = document.getElementById("edu-info");
    let experienceInfo = document.getElementById("exper-info");
    form.onsubmit = (event) => {
        event.preventDefault();
        let fulName = document.getElementById("ful-name")
            .value;
        let fatherName = document.getElementById("father-name").value;
        let dateofbirth = document.getElementById("dob")
            .value;
        let maritalStatus = document.getElementById("marital-status").value;
        let address = document.getElementById("address")
            .value;
        let email = document.getElementById("e-mail").value;
        let phoneNo = document.getElementById("phone-no.")
            .value;
        let educationDetail = document.getElementById("education").value;
        let skillsDetail = document.getElementById("skills")
            .value;
        let experiencedetail = document.getElementById("experience").value;
        let CNIC = document.getElementById("cnic").value;
        userName.textContent = fulName;
        uFather.textContent = fatherName;
        dOB.textContent = dateofbirth;
        usermaritalStatus.textContent = maritalStatus;
        userCNIC.textContent = CNIC;
        userHomeAddress.textContent = address;
        userEmail.textContent = email;
        userNumber.textContent = phoneNo;
        skillsInfo.textContent = skillsDetail;
        eduInfo.textContent = educationDetail;
        experienceInfo.textContent = experiencedetail;
        document.getElementById("resume-container").style.display = "block";
    };
};
