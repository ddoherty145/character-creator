document.addEventListener('DOMContentLoaded', () => {
    // select all trigger elements (for ancestries)
    // const triggers = document.querySelectorAll('.trigger');

    // // // add event listeners to each trigger element
    // // triggers.forEach(trigger => {
    // //     const infoBox = trigger.querySelector('.info-box'); // Select the info-box within the trigger

    // //     // show the info box when hovering over the trigger
    // //     trigger.addEventListener('mouseover', () => {
    // //         infoBox.style.display = 'block';
    // //     });

    // //     // hide the info box when the mouse leaves the trigger
    // //     trigger.addEventListener('mouseout', () => {
    // //         infoBox.style.display = 'none';
    // //     });

        
    // //     trigger.addEventListener('mousemove', (event) => {
    // //         const mouseX = event.clientX;
    // //         const mouseY = event.clientY;

            
    // //         infoBox.style.left = `${mouseX + 15}px`; 
    // //         infoBox.style.top = `${mouseY + 15}px`;
    // //     });
    // // });

   
    // Function to toggle visibility of hidden content
function toggleVisibility(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    if (button && content) {
        button.addEventListener('click', () => {
            content.style.display = (content.style.display === 'none' || content.style.display === '') 
                ? 'block' : 'none';
        });
    }
}

// Toggle visibility for various sections
toggleVisibility('revealHumanButton', 'human-ancestry-wrapper');
toggleVisibility('arcanistButton', 'human-arcanist-wrapper');
toggleVisibility('paladinButton', 'human-paladin-wrapper');
toggleVisibility('gunslingerButton', 'human-gunslinger-wrapper');
toggleVisibility('revealEarkinButton','earkin-ancestry-wrapper');
toggleVisibility('avatarButton', 'earkin-avatar-wrapper');
toggleVisibility('geomancerButton', 'earkin-geonmancer-wrapper');
toggleVisibility('boltThrowerButton', 'earkin-bolt-wrapper');
toggleVisibility('revealGnomeButton', 'gnome-ancestry-wrapper');
toggleVisibility('technomancerButton', 'gnome-tech-wrapper');
toggleVisibility('wizbangButton', 'gnome-wizbang-wrapper');
toggleVisibility('spelljammerButton', 'gnome-jammer-wrapper');
toggleVisibility('revealDrekButton', 'drek-ancestry-wrapper');
toggleVisibility('scholarButton', 'drek-scholar-wrapper');
toggleVisibility('berserkerButton', 'drek-berserker-wrapper');
toggleVisibility('artilleristsButton', 'drek-artillerist-wrapper');
toggleVisibility('beacon-paladin', 'beacon-image');
toggleVisibility('altos-paladin','altos-image');
toggleVisibility('voltaria-arcanist', 'voltaria-arcanist-image');
toggleVisibility('sahee-arcanist','sahee-arcanist-image');
toggleVisibility('chimermond-gunslinger', 'chimermond-gunslinger-image')
toggleVisibility('newlobec-gunslinger', 'newlobec-gunslinger-image')

       
});
