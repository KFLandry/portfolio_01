let toggleDE  =  document.querySelector("#btnDE")
let toggleTG  =  document.querySelector("#btnTG")
let toggleTS  =  document.querySelector("#btnTS")
let popupDetails=document.querySelector("#popupDetails")
// popupDetails.popover = 'auto'

// toggleDE.popoverTargetElement = popupDetails
// toggleTG.popoverTargetElement = popupDetails
// toggleTS.popoverTargetElement = popupDetails

// toggleDE.popoverTargetAction = "toggle"
// toggleTG.popoverTargetAction = "toggle"
// toggleTS.popoverTargetAction = "toggle"

toggleDE.addEventListener("click", () => {
    popupDetails.classList.toggle("flex")
    popupDetails.classList.toggle("hidden")
    document.querySelector("#imgDE").classList.toggle("hidden", false)
    document.querySelector("#imgTS").classList.toggle("hidden", true)
    document.querySelector("#imgTG").classList.toggle("hidden", true)
})
toggleTG.addEventListener("click", () => {
    popupDetails.classList.toggle("flex")
    popupDetails.classList.toggle("hidden")
    document.querySelector("#imgTG").classList.toggle("hidden", false)
    document.querySelector("#imgDE").classList.toggle("hidden", true)
    document.querySelector("#imgTS").classList.toggle("hidden", true)
})
toggleTS.addEventListener("click", () => {
    popupDetails.classList.toggle("flex")
    popupDetails.classList.toggle("hidden")
    document.querySelector("#imgTS").classList.toggle("hidden", false)
    document.querySelector("#imgDE").classList.toggle("hidden", true)
    document.querySelector("#imgTG").classList.toggle("hidden", true)
})