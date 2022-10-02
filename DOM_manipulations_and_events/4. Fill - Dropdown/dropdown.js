function addItem() {

    let newText = document.getElementById('newItemText')
    let newValue = document.getElementById('newItemValue')
    let menu = document.getElementById('menu')
    let optionTag = document.createElement('option')

    optionTag.textContent = newText.value
    optionTag.value = newValue.value
    menu.appendChild(optionTag)

    newText.value = ""
    newValue.value = ""

}