export default function createBtn(buttonName, className){
    const button = document.createElement("button")
    button.textContent = buttonName
    button.classList.add(className)
    return button
}

