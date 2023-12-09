


    function getID() {
        let inputText = document.getElementById('textSimulator').value
        const resultText = document.getElementById('result')
    
        if (inputText < 1000) {
           inputText *=   1.5
        } else {
            inputText *=   4
        }

        inputText = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(inputText)

        return (
            resultText.innerHTML = `<p class="result-text"> O retorno do seu investimento será de R$${inputText} </p>`
            )
    }


    // MANEIRA 1:
    // window.addEventListener('input', function(){
    //     let textSimulator = this.document.getElementById('textSimulator').value
    //     let button = this.document.getElementById('button')
    //     let result = this.document.getElementById('result')
    //     console.log(textSimulator.length)
    //     if (textSimulator.length > 0){
    //         button.innerHTML = `
    //             <button type="button" onclick="getID()"></button>
    //             <div id="result"></div>
    //         `
    //     }
    //     else{
    //         button.innerHTML = '' 
    //         result.innerHTML = ''
    //     }
    // })

    // MANEIRA 2:
     window.addEventListener('input', function(){
        let textSimulator = this.document.getElementById('textSimulator').value
        let button = this.document.getElementById('button-result')

        if (textSimulator.length == 0){
            button.setAttribute('disabled', 'disabled')
        } else{
            button.removeAttribute('disabled')
        }
     })
