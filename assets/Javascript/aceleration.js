const form = document.querySelector("#form").addEventListener("submit", (event)=>{

    event.preventDefault(event)

    const dTfinal = document.querySelector("#time").value
    const v1 = document.querySelector("#initial-speed").value
    const vF = document.querySelector("#final-speed").value
    const result = document.querySelector("#result")

    const a = (vF - v1) / dTfinal

    result.parentElement.classList.remove("invisible")
    result.parentElement.classList.add("visible")
    result.innerText = a + " m/s²"
})