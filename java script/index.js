/* function testSize(num){
    if (num<5){
        return "tiny"
    }
    else if (num<19){
        return "small"
    }
    else if (num<15){
        return "medium"
    }
    else if (num<20){
        return "large"
    }
    else {
        return "huge"
    }

}
console.log(testSize(30));
 */
/* function caseInSwitch(val){
    var answer="";
    switch(val){
        case 1:
            answer="alpha";
            break; 
        case 2:
            answer = "beta";
            break;
            case 3:
                answer = "gamma";
                break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff"

    }
    return answer; 
}
console.log(caseInSwitch(6)); */
    
/* function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
        case 10:
        case 11:
        case 12:
            answer = "optimal";
            break;

    }
}
console.log(sequentialSizes(12));  */

function isLess(a, b){
    return a < b;
}
console.log(isLess(20,15));