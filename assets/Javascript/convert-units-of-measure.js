document.querySelector("#form").addEventListener('submit', function (event) {

    event.preventDefault()

    document.querySelector("#error").classList.remove("error")
    document.querySelector("#error").classList.add("invisible")

    let converter_de = document.querySelector("#unit-of-measure-to-be-converted").value
    let converter_para = document.querySelector("#convert-to").value

    try {
        
        const operacoes = {

            'cm para m': function (value) { return (value / 100).toFixed(2) },
            'cm para km': function (value) { return (value / 100000).toFixed(2) },
            'm para cm': function (value) { return  (value * 100).toFixed(2) },
            'm para km': function (value) { return (value / 1000).toFixed(2) },
            'km para m': function (value) { return (value * 1000).toFixed(2) },
            'km para cm': function (value) { return (value * 100000).toFixed(2) }

        }

        let value = document.querySelector("#value-to-be-converted").value
        let result = document.querySelector("#result")
            result.parentElement.classList.remove("invisible")
            result.parentElement.classList.add("visible")
            result.innerText = (operacoes[`${converter_de} para ${converter_para}`](value)) + ` ${converter_para}`

    } catch (error) {
    
        result.parentElement.classList.remove("visible")
        result.parentElement.classList.add("invisible")

        document.querySelector("#error").classList.remove("invisible")
        document.querySelector("#error").classList.add("error")

        if (converter_de == "escolha" &&  converter_para == "escolha") {

            document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida nos dois campos"
            throw new RangeError('Nenhuma unidade de medida foi escolhida nos dois campos', 'convert-units-of-measure')


        } else {

            if (converter_de == "escolha") {

                document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida no primeiro campo"
                throw new RangeError('Nenhuma unidade de medida foi escolhida no primeiro campo', 'convert-units-of-measure')

            }

            if (converter_para == "escolha") {

                document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida no segundo campo"
                throw new RangeError('Nenhuma unidade de medida foi escolhida no segundo campo', 'convert-units-of-measure')

            }

            if (converter_de == converter_para && converter_de && converter_para != "escolha") {

                document.querySelector("#error-message").innerHTML = "A unidade de medida dos dois campos é a mesma"
                throw new RangeError('A unidade de medida dos dois campos é a mesma', 'convert-units-of-measure')

            }

        }

    }

})
