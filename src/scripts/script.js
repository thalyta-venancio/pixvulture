


    function getID() {
        let inputText = document.getElementById('textSimulator').value
        const resultText = document.getElementById('result')
    
        if (inputText < 1000) {
           inputText *=   1.5
        } else {
            inputText *=   4
        }

        return (
            resultText.innerHTML = `O retorno do seu investimento será de R$${inputText}`
            )
    }