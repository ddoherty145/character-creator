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
       // toggle hidden content for Earkin ancestry
       const revealEarkinButton = document.getElementById('revealEarkinButton');
       const hiddenContentEarkin = document.getElementById('earkin-ancestry-wrapper');
   
       if (revealEarkinButton && hiddenContentEarkin) {
           revealEarkinButton.addEventListener('click', () => {
               if (hiddenContentEarkin.style.display === 'none' || hiddenContentEarkin.style.display === ''){
                   hiddenContentEarkin.style.display = 'block'
               } else {
                   hiddenContentEarkin.style.display = 'none'
               }
               
           });
       }

       //toggle hidden content for Gnome ancestry
       const revealGnomeButton = document.getElementById('revealGnomeButton');
       const hiddenContentGnome = document.getElementById('gnome-ancestry-wrapper');
   
       if (revealGnomeButton && hiddenContentGnome) {
           revealGnomeButton.addEventListener('click', () => {
               if (hiddenContentGnome.style.display === 'none' || hiddenContentGnome.style.display === ''){
                   hiddenContentGnome.style.display = 'block'
               } else {
                   hiddenContentGnome.style.display = 'none'
               }
               
           });
       }

       //toggle hidden content for Drek ancestry
       const revealDrekButton = document.getElementById('revealDrekButton');
       const hiddenContentDrek = document.getElementById('drek-ancestry-wrapper');
   
       if (revealDrekButton && hiddenContentDrek) {
           revealDrekButton.addEventListener('click', () => {
               if (hiddenContentDrek.style.display === 'none' || hiddenContentDrek.style.display === ''){
                   hiddenContentDrek.style.display = 'block'
               } else {
                   hiddenContentDrek.style.display = 'none'
               }
               
           });
       }

        //toggle hidden content for Dryan ancestry
       const revealDryanButton = document.getElementById('revealDryanButton');
       const hiddenContentDryan = document.getElementById('dryan-ancestry-wrapper');
   
       if (revealDryanButton && hiddenContentDryan) {
           revealDryanButton.addEventListener('click', () => {
               if (hiddenContentDryan.style.display === 'none' || hiddenContentDryan.style.display === ''){
                   hiddenContentDryan.style.display = 'block'
               } else {
                   hiddenContentDryan.style.display = 'none'
               }
               
           });
       }

        //toggle hidden content for Raskin ancestry
        const revealRaskinButton = document.getElementById('revealRaskinButton');
        const hiddenContentRaskin = document.getElementById('raskin-ancestry-wrapper');
    
        if (revealRaskinButton && hiddenContentRaskin) {
            revealRaskinButton.addEventListener('click', () => {
                if (hiddenContentRaskin.style.display === 'none' || hiddenContentRaskin.style.display === ''){
                    hiddenContentRaskin.style.display = 'block'
                } else {
                    hiddenContentRaskin.style.display = 'none'
                }
                
            });
        }

         //toggle hidden content for Robbit ancestry
        const revealRobbitButton = document.getElementById('revealRobbitButton');
        const hiddenContentRobbit = document.getElementById('robbit-ancestry-wrapper');
            
        if (revealRobbitButton && hiddenContentRobbit) {
            revealRobbitButton.addEventListener('click', () => {
                if (hiddenContentRobbit.style.display === 'none' || hiddenContentRobbit.style.display === ''){
                    hiddenContentRobbit.style.display = 'block'
                } else {
                hiddenContentRobbit.style.display = 'none'
                }
                        
            });
    }
       
});
