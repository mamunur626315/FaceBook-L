//popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

// gender select
if(window.location.pathname === "/"){
const radioBtn1 = document.querySelector("#flexRadioDefault1");
const radioBtn2 = document.querySelector("#flexRadioDefault2");
const radioBtn3 = document.querySelector("#flexRadioDefault3");
const genderelect = document.querySelector("#genderSelect");

radioBtn1.addEventListener("change", () => {
    genderelect.classList.add("d-none");
});

radioBtn2.addEventListener("change", () => {
    genderelect.classList.add("d-none");
});

radioBtn3.addEventListener("change", () => {
    genderelect.classList.remove("d-none");
});
}




