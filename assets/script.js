// let gridSelect=Number(prompt('How many squares do you want per side?'));
// colorMe()
// for (let x=0; x<gridSelect;x++) {
//     const column=document.createElement('div');
//     column.classList.add("columnDiv");
//     for (let y=0;y<gridSelect;y++) {
//         const rows=document.createElement('div');
//         rows.classList.add("rowDiv");
//         column.append(rows)
//     }
//     containerDiv.append(column);
// }

// function colorMe() {
//     // let rowDiv=document.querySelector('.rowDiv')
//     // const btnDiv=document.querySelector('.btnDiv');
//     colorBtn.textContent='Color Picker';
//     colorBtn.addEventListener('click', () => {
//         rows.forEach( row => row.addEventListener("mouseover", () => {
//             let R=Math.floor(Math.random()*255);
//             let G=Math.floor(Math.random()*255);
//             let B=Math.floor(Math.random()*255);
//             row.style.background= `rgb(${R}, ${G}, ${B})`
//         })   
//         );
//     })
//     btnDiv.append(colorBtn); 
// }


const body=document.querySelector('body');
const containerDiv=document.querySelector('.container')
document.querySelector("button").addEventListener("click", () => {
    let gridSelect=Number(prompt('How many squares do you want per side?'));
    containerDiv.innerHTML='';
    for (let x=0; x<gridSelect;x++) {
        const column=document.createElement('div');
        column.classList.add("columnDiv");
        for (let y=0;y<gridSelect;y++) {
            const rows=document.createElement('div');
            rows.classList.add("rowDiv");
            rows.addEventListener("mouseover", () => {
                rows.style.backgroundColor="#00abee"
            })
            column.append(rows)
        containerDiv.append(column);
    }
    
}})





