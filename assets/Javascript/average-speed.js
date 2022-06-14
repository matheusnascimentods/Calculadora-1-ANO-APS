const f = document.querySelector("#form")

f.addEventListener("submit", (event)=>{

    event.preventDefault(event)
    document.querySelector("#error").classList.remove("error")
    document.querySelector("#error").classList.add("invisible")

    const dS = document.querySelector("#distance").value
    const dT = document.querySelector("#time").value
    const uS = document.querySelector("#distance-measurement-unit").value
    const uT = document.querySelector("#time-measurement-unit").value

    if (uS != "escolha" &&  uT != "escolha") {
        
        let vM = dS / dT
    
        const result = document.querySelector("#result")
            result.parentElement.classList.remove("invisible")
            result.parentElement.classList.add("visible")
            result.innerText = vM + ` ${uS}/${uT}`

    } else {
        
        result.parentElement.classList.remove("visible")
        result.parentElement.classList.add("invisible")

        document.querySelector("#error").classList.remove("invisible")
        document.querySelector("#error").classList.add("error")

        if (uS == "escolha" &&  uT == "escolha") {

            document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida nos dois campos"
            throw new RangeError('Nenhuma unidade de medida foi escolhida nos dois campos', 'average-speed')

        } else {

            if (uS == "escolha") {

                document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida no primeiro campo"
                throw new RangeError('Nenhuma unidade de medida foi escolhida no primeiro campo', 'average-speed')

            }

            if (uT == "escolha") {

                document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida no segundo campo"
                throw new RangeError('Nenhuma unidade de medida foi escolhida no segundo campo', 'average-speed')
                
            }

        }

    }

})
