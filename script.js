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
    const newElementSection = item.childNodes[7];
    const newElement = newElementSection.childNodes[1];
    newElement.innerText = area;
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
    if(cartTitle.innerText === "Triangle"){
        const area = 0.5 * firstInputValue * secondInputValue;
        setArea(cartBodyElement, area);

    }
    // console.log(cartTitle.innerText)
}