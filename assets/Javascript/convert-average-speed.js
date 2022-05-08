document.querySelector("#form").addEventListener('submit', function (event) {

    event.preventDefault()

    document.querySelector("#error").classList.remove("error")
    document.querySelector("#error").classList.add("invisible")

    let converter_de = document.querySelector("#unit-of-measure-to-be-converted").value
    let converter_para = document.querySelector("#convert-to").value

    try {
        
        const operacoes = {

            'km/s para km/h': function (value) { return value * 3600 },
            'km/s para km/min': function (value) { return value * 60 },

            'km/h para km/s': function (value) { return value / 3600 },
            'km/h para km/min': function (value) { return value / 60 },

            'km/min para km/h': function (value) { return value * 60 },
            'km/min para km/s': function (value) { return value / 60 },

            'km/s para m/s': function (value) { return value * 1000 },
            'km/s para m/h': function (value) { return value * 1000 * 3600 },
            'km/s para m/min': function (value) { return value * 1000 * 60 },

            'km/h para m/s': function (value) { return value * 1000 / 3600 },
            'km/h para m/h': function (value) { return value * 1000 },
            'km/h para m/min': function (value) { return value * 1000 / 60 },

            'km/min para m/s': function (value) { return value * 1000 / 60 },
            'km/min para m/h': function (value) { return value * 1000 * 60 },
            'km/min para m/min': function (value) { return value * 1000 },

            'm/s para m/h': function (value) { return value * 3600 },
            'm/s para m/min': function (value) { return value * 60 },

            'm/h para m/s': function (value) { return value / 3600 },
            'm/h para m/min': function (value) { return value / 60 },

            'm/min para m/s': function (value) { return value / 60 },
            'm/min para m/h': function (value) { return value * 60 },

            'm/s para km/s': function (value) { return value / 1000 },
            'm/s para km/h': function (value) { return value / 1000 * 3600 },
            'm/s para km/min': function (value) { return value * 60 / 1000  },

            'm/h para km/s': function (value) { return value / 1000 / 3600 },
            'm/h para km/h': function (value) { return value / 1000 },
            'm/h para km/min': function (value) { return value / 1000 / 60 },

            'm/min para km/s': function (value) { return value / 1000 / 60 },
            'm/min para km/h': function (value) { return value / 1000 * 60 },
            'm/min para km/min': function (value) { return value / 1000 },
        }

        let value = document.querySelector("#value-to-be-converted").value
        let result = document.querySelector("#result")
            result.parentElement.classList.remove("invisible")
            result.parentElement.classList.add("visible")
            result.innerText = (operacoes[`${converter_de} para ${converter_para}`](value)) + `${converter_para}`

    } catch (error) {

        result.parentElement.classList.remove("visible")
        result.parentElement.classList.add("invisible")

        document.querySelector("#error").classList.remove("invisible")
        document.querySelector("#error").classList.add("error")

        if (converter_de == "escolha" &&  converter_para == "escolha") {

            document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida nos dois campos"
            throw new RangeError('Nenhuma unidade de medida foi escolhida nos dois campos', 'convert-average-speed')


        } else {

            if (converter_de == "escolha") {

                document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida no primeiro campo"
                throw new RangeError('Nenhuma unidade de medida foi escolhida no primeiro campo', 'convert-average-speed')

            }

            if (converter_para == "escolha") {

                document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida no segundo campo"
                throw new RangeError('Nenhuma unidade de medida foi escolhida no segundo campo', 'convert-average-speed')

            }

            if (converter_de == converter_para && converter_de && converter_para != "escolha") {

                document.querySelector("#error-message").innerHTML = "A unidade de medida dos dois campos é a mesma"
                throw new RangeError('A unidade de medida dos dois campos é a mesma', 'convert-average-speed')

            }

        }
        
    }

})
