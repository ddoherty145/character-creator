document.addEventListener('DOMContentLoaded', () => {
    // select all trigger elements (for ancestries)
    const triggers = document.querySelectorAll('.trigger');

    // add event listeners to each trigger element
    triggers.forEach(trigger => {
        const infoBox = trigger.querySelector('.info-box'); // Select the info-box within the trigger
        const button = trigger.querySelector('button');

        // show the info box when hovering over the trigger
        button.addEventListener('mouseover', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            
            infoBox.style.left = `${mouseX + 50}px`; 
            infoBox.style.top = `${mouseY - 300}px`;
            infoBox.style.display = 'block';
        });

        // hide the info box when the mouse leaves the trigger
        button.addEventListener('mouseout', () => {
            infoBox.style.display = 'none';
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

        // toggle hidden content for Human arcanist class
    const revealHumanArcanistButton = document.getElementById('arcanistButton');
    const hiddenContentHumanArcanist = document.getElementById('human-arcanist-wrapper');

    if (revealHumanArcanistButton && hiddenContentHumanArcanist) {
        revealHumanArcanistButton.addEventListener('click', () => {
            if (hiddenContentHumanArcanist.style.display === 'none' || hiddenContentHumanArcanist.style.display === ''){
                hiddenContentHumanArcanist.style.display = 'block'
            } else {
                hiddenContentHumanArcanist.style.display = 'none'
            }
            
        });
    }

    // toggle hidden content for Human paladin class
    const revealHumanPaladinButton = document.getElementById('paladinButton');
    const hiddenContentHumanPaladin = document.getElementById('human-paladin-wrapper');

    if (revealHumanPaladinButton && hiddenContentHumanPaladin) {
        revealHumanPaladinButton.addEventListener('click', () => {
            if (hiddenContentHumanPaladin.style.display === 'none' || hiddenContentHumanPaladin.style.display === ''){
                hiddenContentHumanPaladin.style.display = 'block'
            } else {
                hiddenContentHumanPaladin.style.display = 'none'
            }
            
        });
    }

      // toggle hidden content for Human gunslinger class
      const revealHumanGunButton = document.getElementById('gunslingerButton');
      const hiddenContentHumanGun = document.getElementById('human-paladin-wrapper');
  
      if (revealHumanGunButton && hiddenContentHumanGun) {
        revealHumanGunButton.addEventListener('click', () => {
              if (hiddenContentHumanGun.style.display === 'none' || hiddenContentHumanGun.style.display === ''){
                  hiddenContentHumanGun.style.display = 'block'
              } else {
                hiddenContentHumanGun.style.display = 'none'
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

       // toggle hidden content for Earkin avatar class
      const revealEarkinAvatarButton = document.getElementById('avatarButton');
      const hiddenContentEarkinAvatar = document.getElementById('earkin-avatar-wrapper');
  
      if (revealEarkinAvatarButton && hiddenContentEarkinAvatar) {
        revealEarkinAvatarButton.addEventListener('click', () => {
              if (hiddenContentEarkinAvatar.style.display === 'none' || hiddenContentEarkinAvatar.style.display === ''){
                hiddenContentEarkinAvatar.style.display = 'block'
              } else {
                hiddenContentEarkinAvatar.style.display = 'none'
              }
              
          });
      }

        // toggle hidden content for Earkin geomancer class
        const revealEarkinGeoButton = document.getElementById('geomancerButton');
        const hiddenContentEarkinGeo = document.getElementById('earkin-geomancer-wrapper');
    
        if (revealEarkinGeoButton && hiddenContentEarkinGeo) {
            revealEarkinGeoButton.addEventListener('click', () => {
                if (hiddenContentEarkinGeo.style.display === 'none' || hiddenContentEarkinGeo.style.display === ''){
                    hiddenContentEarkinGeo.style.display = 'block'
                } else {
                  hiddenContentEarkinGeo.style.display = 'none'
                }
                
            });
        }

        // toggle hidden content for Earkin geomancer class
        const revealEarkinBoltButton = document.getElementById('boltThrowerButton');
        const hiddenContentEarkinBolt = document.getElementById('earkin-bolt-wrapper');
    
        if (revealEarkinBoltButton && hiddenContentEarkinBolt) {
            revealEarkinBoltButton.addEventListener('click', () => {
                if (hiddenContentEarkinBolt.style.display === 'none' || hiddenContentEarkinBolt.style.display === ''){
                    hiddenContentEarkinBolt.style.display = 'block'
                } else {
                    hiddenContentEarkinBolt.style.display = 'none'
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

       // toggle hidden content for Gnome technomancer class
      const revealGnomeTechButton = document.getElementById('technomancerButton');
      const hiddenContentGnomeTech = document.getElementById('gnome-tech-wrapper');
  
      if (revealGnomeTechButton && hiddenContentGnomeTech) {
        revealGnomeTechButton.addEventListener('click', () => {
              if (hiddenContentGnomeTech.style.display === 'none' || hiddenContentGnomeTech.style.display === ''){
                hiddenContentGnomeTech.style.display = 'block'
              } else {
                hiddenContentGnomeTech.style.display = 'none'
              }
              
          });
      }

        // toggle hidden content for gnome wizbang class
        const revealGnomeWizbangButton = document.getElementById('wizbangButton');
        const hiddenContentGnomeWizbang = document.getElementById('gnome-wizbang-wrapper');
    
        if (revealGnomeWizbangButton && hiddenContentGnomeWizbang) {
            revealGnomeWizbangButton.addEventListener('click', () => {
                if (hiddenContentGnomeWizbang.style.display === 'none' || hiddenContentGnomeWizbang.style.display === ''){
                    hiddenContentGnomeWizbang.style.display = 'block'
                } else {
                    hiddenContentGnomeWizbang.style.display = 'none'
                }
                
            });
        }

        // toggle hidden content for gnome spelljammer class
        const revealGnomeJammerButton = document.getElementById('spelljammerButton');
        const hiddenContentGnomeJammer = document.getElementById('gnome-jammer-wrapper');
    
        if (revealGnomeJammerButton && hiddenContentGnomeJammer) {
            revealGnomeJammerButton.addEventListener('click', () => {
                if (hiddenContentGnomeJammer.style.display === 'none' || hiddenContentGnomeJammer.style.display === ''){
                    hiddenContentGnomeJammer.style.display = 'block'
                } else {
                    hiddenContentGnomeJammer.style.display = 'none'
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

       // toggle hidden content for Drek berserker class
      const revealDrekBerserkerButton = document.getElementById('berserkerButton');
      const hiddenContentDrekBerserker = document.getElementById('drek-berserker-wrapper');
  
      if (revealDrekBerserkerButton && hiddenContentDrekBerserker) {
        revealDrekBerserkerButton.addEventListener('click', () => {
              if (hiddenContentDrekBerserker.style.display === 'none' || hiddenContentDrekBerserker.style.display === ''){
                hiddenContentDrekBerserker.style.display = 'block'
              } else {
                hiddenContentDrekBerserker.style.display = 'none'
              }
              
          });
      }

        // toggle hidden content for Drek scholar class
        const revealDrekScholarButton = document.getElementById('scholarButton');
        const hiddenContentDrekScholar = document.getElementById('drek-scholar-wrapper');
    
        if (revealDrekScholarButton && hiddenContentDrekScholar) {
            revealDrekScholarButton.addEventListener('click', () => {
                if (hiddenContentDrekScholar.style.display === 'none' || hiddenContentDrekScholar.style.display === ''){
                    hiddenContentDrekScholar.style.display = 'block'
                } else {
                    hiddenContentDrekScholar.style.display = 'none'
                }
                
            });
        }

        // toggle hidden content for Drek Artillerists class
        const revealDrekArtilleristsButton = document.getElementById('artilleristsButton');
        const hiddenContentDrekArtillerists = document.getElementById('drek-artillerist-wrapper');
    
        if (revealDrekArtilleristsButton && hiddenContentDrekArtillerists) {
            revealDrekArtilleristsButton.addEventListener('click', () => {
                if (hiddenContentDrekArtillerists.style.display === 'none' || hiddenContentDrekArtillerists.style.display === ''){
                    hiddenContentDrekArtillerists.style.display = 'block'
                } else {
                    hiddenContentDrekArtillerists.style.display = 'none'
                }
                
            });
        }
       
});
