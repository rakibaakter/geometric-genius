// get input value
function getInputValue(item, index){
    // console.log(inputElements.childNodes)
    const inputFeild = item.childNodes[index];
    const inputStringValue = inputFeild.value;
    const inputValue = parseFloat(inputStringValue);
    // console.log(typeof inputValue);
    return inputValue;
}
// set Area 
function setArea(item, area){
    const fixArea = area.toFixed(2);
    const newElementSection = item.childNodes[7];
    const newElement = newElementSection.childNodes[1];
    newElement.innerText = fixArea;
    newElementSection.style.display = 'block';
    
}
function calculateArea(target){
    // find the cart body
    const cartBodyElement  = target.parentNode.parentNode;
    // find input div
    const inputElements = cartBodyElement.childNodes[5];
    // find input field
    const firstInputValue = getInputValue(inputElements , 1);
    const secondInputValue = getInputValue(inputElements , 5);
    // find cart title  
    const cartTitle  = cartBodyElement.childNodes[1];
    if(cartTitle.innerText === "Triangle" || cartTitle.innerText === "Pentagon"){
        const area = 0.5 * firstInputValue * secondInputValue;
        setArea(cartBodyElement, area);

    }
    if(cartTitle.innerText === "Rectangle" || cartTitle.innerText === "Parallelogram" || cartTitle.innerText === "Rhombus"){
        const area = 0.5 * firstInputValue * secondInputValue;
        setArea(cartBodyElement, area);

    }
    if(cartTitle.innerText === "Ellipse"){
        const area = Math.PI * firstInputValue * secondInputValue;
        setArea(cartBodyElement, area);

    }
    // console.log(cartTitle.innerText)
}