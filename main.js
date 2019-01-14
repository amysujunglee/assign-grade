function assignGrade () {
    var yourScore = document.getElementById('score').value;
    if (yourScore >= 90 && yourScore <= 100) {
        document.getElementById('finalGrade').innerHTML = 'Your grade is ' + 'A.';
    } else if (yourScore >= 80 && yourScore < 90) {
        document.getElementById('finalGrade').innerHTML = 'Your grade is ' + 'B.';
    } else if (yourScore >= 70 && yourScore < 80) {
        document.getElementById('finalGrade').innerHTML = 'Your grade is ' + 'C.';
    } else if (yourScore >= 60 && yourScore < 70) {
        document.getElementById('finalGrade').innerHTML = 'Your grade is ' + 'D.';
    } else if (yourScore >= 1 && yourScore < 60) {
        document.getElementById('finalGrade').innerHTML = 'Your grade is ' + 'F.';
    } else {
        document.getElementById('finalGrade').innerHTML = "You put wrong score. Please try again."
    }
}