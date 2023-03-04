function printGrade(grade) {
    gradeInfo = gradeCalc(grade);
    if (gradeInfo === 'Fail') {
        console.log('Fail (2)')
    }else {console.log(`${gradeInfo} (${grade.toFixed(2)})`)}
    
    function gradeCalc(grade) {
        if (grade >= 5.50){
            return 'Excellent'
        } else if (grade >= 4.50){
            return 'Very good'
        } else if (grade >= 3.50){
            return 'Good'
        } else if (grade >= 3){
            return 'Poor'
        } else {
            return 'Fail'
        }
    }
}   

// ternary operator


printGrade(3.33)
printGrade(4.50)
printGrade(2.99)