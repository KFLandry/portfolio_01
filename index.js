let toggleDE  =  document.querySelector("#btnDE")
let toggleTG  =  document.querySelector("#btnTG")
let toggleTS  =  document.querySelector("#btnTS")
let popupDetails=document.querySelector("#popupDetails")
let btnClose = document.querySelector("#close")

popupDetails.popover = "auto"
toggleDE.popoverTargetAction = "toggle"
toggleTG.popoverTargetAction = "toggle"
toggleTS.popoverTargetAction = "toggle"
btnClose.popoverTargetAction = "toggle"
toggleDE.popoverTargetElement = popupDetails
toggleTG.popoverTargetElement = popupDetails
toggleTS.popoverTargetElement = popupDetails
btnClose.popoverTargetElement= popupDetails 

toggleDE.addEventListener("click", () => {
    popupDetails.classList.toggle("flex")
    document.querySelector("#imgDE").classList.toggle("hidden", false)
    document.querySelector("#imgTS").classList.toggle("hidden", true)
    document.querySelector("#imgTG").classList.toggle("hidden", true)
})
toggleTG.addEventListener("click", () => {
    popupDetails.classList.toggle("flex")
    document.querySelector("#imgTG").classList.toggle("hidden", false)
    document.querySelector("#imgDE").classList.toggle("hidden", true)
    document.querySelector("#imgTS").classList.toggle("hidden", true)
})
toggleTS.addEventListener("click", () => {
    popupDetails.classList.toggle("flex")
    document.querySelector("#imgTS").classList.toggle("hidden", false)
    document.querySelector("#imgDE").classList.toggle("hidden", true)
    document.querySelector("#imgTG").classList.toggle("hidden", true)
})
btnClose.addEventListener('click', () => {
    popupDetails.classList.toggle("flex")
})