class GeneralUtils {

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

        if(re.test(email)){
            return true;
        }
        return false;
    };

    date_DBformat(dateToday){
        var newDateToday = new Date();
        newDateToday = dateToday.getFullYear() + "-" + ("0" + (dateToday.getMonth() + 1)).slice(-2) + "-" + ("0" + dateToday.getDate()).slice(-2);
        return newDateToday;
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
}

var generalUtils = new GeneralUtils();
export default generalUtils;