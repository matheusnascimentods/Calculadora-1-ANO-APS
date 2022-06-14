document.querySelector("#form").addEventListener("submit", (event)=>{
    
    event.preventDefault(event);

    document.querySelector("#error").classList.remove("error")
    document.querySelector("#error").classList.add("invisible")

    const dS0 = document.querySelector("#starting-point").value
    const dS1 = document.querySelector("#end-point").value
    const uS = document.querySelector("#distance-measurement-unit").value
    let d = dS1 - dS0

    if (uS != "escolha") {
        
        const result = document.querySelector("#result")
            result.parentElement.classList.remove("invisible")
            result.parentElement.classList.add("visible")
            result.innerText = parseFloat(`${d} ${uS}`)+ ` ${uS}`

    } else {

        result.parentElement.classList.remove("visible")
        result.parentElement.classList.add("invisible")

        document.querySelector("#error").classList.remove("invisible")
        document.querySelector("#error").classList.add("error")

        document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida"
        throw new RangeError('Nenhuma unidade de medida foi escolhida', 'average-speed')
             
    }

})
