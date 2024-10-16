//select all trigger elements
const triggers = document.querySelector('.trigger');

//add event listeners to each trigger element
triggers.forEach(trigger => {
    const infoBox = trigger.querySelector('.info-box');

    trigger.addEventListener('mouseover', () => {
        inforBox.style.display = 'block';
    })

    trigger.addEventListener('mouseout', () =>{
        infoBox.style.display = 'none' ;
    });
});