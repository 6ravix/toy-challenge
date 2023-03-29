function getGrade() {
    while (true) {
      let marks = parseInt(prompt("Enter the student's marks (between 0 and 100):"));
      if (isNaN(marks)) {
        alert("Invalid input. Please enter a number between 0 and 100.");
      } else if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100.");
      } else {
        if (marks >= 80) {
          return 'A';
        } else if (marks >= 60) {
          return 'B';
        } else if (marks >= 50) {
          return 'C';
        } else if (marks >= 40) {
          return 'D';
        } else {
          return 'E';
        }
      }
    }
  }
  