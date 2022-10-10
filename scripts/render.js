function createNewValue (element){
    let firstDiv = document.createElement('div')
    let p = document.createElement('p')
    let secondDiv = document.createElement('div')
    let small = document.createElement('small')
    let button = document.createElement('button')

    firstDiv.classList = 'item-wrapper display space-beet align';
    p.classList = 'paragraph';
    secondDiv.classList = 'display align gap';
    small.classList = 'registered-category display align justify-center';
    button.classList = 'button-delete-item';

    firstDiv.dataset.id = element.id

    p.innerText = element.value;
    small.innerText = 'Entrada';

    if(element.categoryID == 1){
        small.innerText = 'Entrada';
    } else {
        small.innerText = 'Saída';
    }
    
    button.addEventListener('click', (event) => {
        let fatherDiv = event.path[2]
        let indexDiv = Number(fatherDiv.dataset.id)

        let foundIndexData = insertedValues.findIndex((value) => {
            return value.id === indexDiv
        })
        insertedValues.splice(foundIndexData, 1)
        fatherDiv.remove()
        renderizedItens()
    
    })
    
    firstDiv.append(p, secondDiv)
    secondDiv.append(small, button)

    return firstDiv
}


function render (array){
    let main = document.getElementById('new-entry')
    main.innerHTML = ''
    array.forEach((value) => {
        const newThing = createNewValue(value)
        
        main.appendChild(newThing)
        
    })
    renderizedItens()
}

render(insertedValues)



function renderizedItens(){
    let main = document.getElementById('new-entry')
    let content = [...main.children]
    
    if(content.length === 0){
        main.insertAdjacentHTML('beforeend', `<section
        class="section-value-register display flex-column justify-center align" data-modal-control="open-register"
      >
        <h2 class="title-value-register">Nenhum valor cadastrado</h2>
        <p class="paragraph">Registrar novo valor</p>
      </section>`)
      
    }
}

renderizedItens()