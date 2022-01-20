class GeneralUtils {

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

        if(re.test(email)){
            return true;
        }
        return false;
    };

    generatePassword(length = 10){
        const passwordPossibilities = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz0123456789!@#*";
        let password = "";
        for (let i = 0;i <= length; i++){
            let letterAt = Math.floor(Math.random()*(passwordPossibilities.length+1));
            password += passwordPossibilities.charAt(letterAt); 
        }
        return password;
    }

    generateResetCode(length = 5){
        const codePossibilities = "abcdefghijklmnopqrstuwxyz0123456789";
        let code = "";
        for(let i =0;i<=length;i++){
            let letterAt = Math.floor(Math.random()*(codePossibilities.length*1));
            code += codePossibilities.charAt(letterAt);
        }
        return code;
    }


}

var generalUtils = new GeneralUtils();
export default generalUtils;