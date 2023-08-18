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

// add to calculation list
function calculationList( title, area){
    const calculationList = document.getElementById("calculationListId");
    const count = calculationList.childElementCount;
    const div = document.createElement('div');
    const h3Element = count + " " + title.innerText + " " + area ;
    // h3.innerText = h3Element;
    // h3.style.fontWeight = "bold";
    // calculationList.appendChild(h3);
    // const h3Element = `${count + 1} ${title} ${area} cm<sup>2</sup>`;
    div.innerHTML = `<h3 class="text-xl font-bold my-1 flex justify-between items-center">
        <span class="w-1/12">${count}</span> 
        <span class="w-1/2 text-center mx-2">${title.innerText}</span>
        <span class=w-1/3 text-center mx-2">${area.toFixed(2)}</span>
        <span class="w-1/4 text-center mx-2">cm<sup>2</sup></span> 
        <button class="btn bnt-info bg-orange-300 btn-small">convert</button>
        </h3>`;
    calculationList.appendChild(div);
    
}

// area calculation
function calculateArea(target){
    // find the cart body
    const cartBodyElement  = target.parentNode.parentNode;
    // find input div
    const inputElements = cartBodyElement.childNodes[5];
    // find input field
    const firstInputValue = getInputValue(inputElements , 1);
    const secondInputValue = getInputValue(inputElements , 5);
    let area = 1;
    // find cart title  
    const cartTitle  = cartBodyElement.childNodes[1];
    if(cartTitle.innerText === "Triangle" || cartTitle.innerText === "Pentagon"){
        area = 0.5 * firstInputValue * secondInputValue;
        setArea(cartBodyElement, area);

    }
    if(cartTitle.innerText === "Rectangle" || cartTitle.innerText === "Parallelogram" || cartTitle.innerText === "Rhombus"){
        area = 0.5 * firstInputValue * secondInputValue;
        setArea(cartBodyElement, area);

    }
    if(cartTitle.innerText === "Ellipse"){
        area = Math.PI * firstInputValue * secondInputValue;
        setArea(cartBodyElement, area);
    }

    calculationList( cartTitle, area);
}