function passwordVal(value) {
    let good = true;
    let test = true

    lenghtChecker(value)
    charCheck(value)
    lengthCheck(value)

    function lenghtChecker(value) {
        value.length >= 6 && value.length <= 10 ? test = true : (console.log("Password must be between 6 and 10 characters"), good = false);
    }

    function charCheck(value) {
        let format = `"/^[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]*$/;`
        for (ch of value){
            if (format.includes(ch)){
                console.log("Password must consist only of letters and digits")
                good = false;
                break;
            }
        }
    }

    function lengthCheck(value) {
        count = 0
        let regExp = /[0-9]/;
        for (ch of value){
            if(regExp.test(ch)){
                count++;
              }
            }
            count >=2 ? test = true : (console.log("Password must have at least 2 digits"), good = false);
    }

    if (good){
        console.log("Password is valid")}
}

passwordVal('logIn')
passwordVal('MyPass123')
passwordVal('Pa$s$s')
