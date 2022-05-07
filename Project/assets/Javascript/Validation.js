export class Validacao {

    static Validar_Dois_Select(primeiroCampo, segundoCampo, arquivo) {

        if (primeiroCampo == "escolha" &&  segundoCampo == "escolha") {

            document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida nos dois campos"
            throw new RangeError('Nenhuma unidade de medida foi escolhida nos dois campos', arquivo)

        } else {

            if (primeiroCampo == "escolha") {

                document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida no primeiro campo"
                throw new RangeError('Nenhuma unidade de medida foi escolhida no primeiro campo', arquivo)

            }

            if (segundoCampo == "escolha") {

                document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida no segundo campo"
                throw new RangeError('Nenhuma unidade de medida foi escolhida no segundo campo', arquivo)
                
            }

        }

    }

    static Validar_Um_Select(primeiroCampo, arquivo) {

        if (primeiroCampo == "escolha") {

            document.querySelector("#error-message").innerHTML = "Nenhuma unidade de medida foi escolhida"
            throw new RangeError('Nenhuma unidade de medida foi escolhida', arquivo)

        } 

    }
 
}