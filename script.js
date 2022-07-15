// function promptFunction(){
//     let numberOfSquares=prompt("Enter the number of squares. ")
// }

// const gridNumber=document.querySelector('#userEntry')
// let rows=gridNumber.addEventListener('click', promptFunction)


let rows=document.querySelector('#userEntry')
let rowsNum=rows.getAttribute('value')
let rowNum= Number(rowsNum)


const container=document.querySelector("#container");
function gridMaker(rowsNum) {
    for(i=0; i<rowsNum, i++;){
        const gridRow=document.createElement('div')
        container.appendChild(gridRow)
        container.style.display='flex';
        for (j=0; j<rowsNum.length; j++){
            let column=document.createElement('span')
            gridRow.appendChild(column)
    }
    }
    
}

gridMaker(rows)