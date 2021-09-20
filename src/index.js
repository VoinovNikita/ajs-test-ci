import './css/style.css';

import './js/app';

export default function hero() {
    let character = {
      name: 'Маг', 
      health: 90
  }
  
    if (character.health >= 50) {
     return "healthy"
   }
    if (character.health >= 15) {
     return "wounded"
   }
     if (character.health <= 14) {
      return "critical"
   }
  }
  
  
  
 
