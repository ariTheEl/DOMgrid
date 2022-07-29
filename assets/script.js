
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
                let R=Math.floor(Math.random()*255);
                let G=Math.floor(Math.random()*255);
                let B=Math.floor(Math.random()*255);
                rows.style.background=`rgb(${R}, ${G}, ${B})`
            })
            column.append(rows)
        containerDiv.append(column);
    }
    
}})



 


