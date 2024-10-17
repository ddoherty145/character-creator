document.addEventListener('DOMContentLoaded', () => {
    // select all trigger elements (for ancestries)
    const triggers = document.querySelectorAll('.trigger');

    // add event listeners to each trigger element
    triggers.forEach(trigger => {
        const infoBox = trigger.querySelector('.info-box'); // Select the info-box within the trigger

        // show the info box when hovering over the trigger
        trigger.addEventListener('mouseover', () => {
            infoBox.style.display = 'block';
        });

        // hide the info box when the mouse leaves the trigger
        trigger.addEventListener('mouseout', () => {
            infoBox.style.display = 'none';
        });

        
        trigger.addEventListener('mousemove', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            
            infoBox.style.left = `${mouseX + 15}px`; 
            infoBox.style.top = `${mouseY + 15}px`;
        });
    });

    // toggle hidden content for Human ancestry
    const revealHumanButton = document.getElementById('revealHumanButton');
    const hiddenContent = document.getElementById('human-ancestry-wrapper');

    if (revealHumanButton && hiddenContent) {
        revealHumanButton.addEventListener('click', () => {
            if (hiddenContent.style.display === 'none' || hiddenContent.style.display === ''){
                hiddenContent.style.display = 'block'
            } else {
                hiddenContent.style.display = 'none'
            }
            
        });
    }
});
