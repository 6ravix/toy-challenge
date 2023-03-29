function calculateDemeritPoints(speed) {
    if (speed <= 70) {
      console.log("Ok");
      return;
    }
  
    let excessSpeed = speed - 70;
    let points = Math.floor(excessSpeed / 5);
  
    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", points);
    }
  }
  