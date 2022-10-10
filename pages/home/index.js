const buttonsValueType = document.querySelector(".div-button-value");
buttonsValueType.addEventListener("click", (event) => {
       
    if (event.target.tagName === "BUTTON") {
        const buttons = [...buttonsValueType.children]
        buttons.forEach((button)=> {
            button.removeAttribute('selected')
        });
        event.target.setAttribute('selected', '')
        
    }
    });


const insertValue = document.querySelector('#insert-value')
insertValue.addEventListener('click', (event) => {
    const type = document.querySelector('[selected]')
    const newValue = {}
    newValue.categoryID = Number(type.dataset.valueType)
    newValue.id = insertedValues.length+1

    const input = document.querySelector('input')
    const valueInput = Number(input.value)
    newValue.value = valueInput
    insertedValues.push(newValue)
    
    render(insertedValues)
    
})










