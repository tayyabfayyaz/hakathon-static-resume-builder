let toggleBtn = document.getElementById("toggle-btn") as HTMLElement;
let skills = document.getElementById("skills") as HTMLElement;
let menuToggle = document.getElementById("menu-toggle") as HTMLElement;
let personalDetail = document.getElementById("personal-detail") as HTMLElement;

toggleBtn.addEventListener("click", () => {
  skills.classList.toggle("active");
});

menuToggle.addEventListener("click", () => {
  personalDetail.classList.toggle("active");
});

window.onload = () => {

  let form = document.getElementById("form-content") as HTMLFormElement;
  let userName = document.getElementById("user-name") as HTMLElement;
  let uFather = document.getElementById("u-father") as HTMLElement;
  let dOB = document.getElementById("u-dob") as HTMLElement;
  let usermaritalStatus = document.getElementById("u-status") as HTMLElement;
  let userCNIC = document.getElementById("u-cnic") as HTMLElement;
  let userHomeAddress = document.getElementById("u-address") as HTMLElement;
  let userEmail = document.getElementById("u-email") as HTMLElement;
  let userNumber = document.getElementById("u-number") as HTMLElement;
  let skillsInfo = document.getElementById("skills-info") as HTMLElement;
  let eduInfo = document.getElementById("edu-info") as HTMLElement;
  let experienceInfo = document.getElementById("exper-info") as HTMLElement;

  form.onsubmit = (event) => {
    event.preventDefault();

    let fulName = (document.getElementById("ful-name") as HTMLInputElement)
      .value;
    let fatherName = (
      document.getElementById("father-name") as HTMLInputElement
    ).value;
    let dateofbirth = (document.getElementById("dob") as HTMLInputElement)
      .value;
    let maritalStatus = (
      document.getElementById("marital-status") as HTMLInputElement
    ).value;
    let address = (document.getElementById("address") as HTMLInputElement)
      .value;
    let email = (document.getElementById("e-mail") as HTMLInputElement).value;
    let phoneNo = (document.getElementById("phone-no.") as HTMLInputElement)
      .value;
    let educationDetail = (
      document.getElementById("education") as HTMLInputElement
    ).value;
    let skillsDetail = (document.getElementById("skills") as HTMLInputElement)
      .value;
    let experiencedetail = (
      document.getElementById("experience") as HTMLInputElement
    ).value;
    let CNIC = (document.getElementById("cnic") as HTMLInputElement).value;

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
    

    document.getElementById("resume-container")!.style.display = "block";
  };
};
