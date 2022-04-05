
function superbowlWin(record){
    function didWin(year){
        if (year.result === "W"){
            return true;
        }
        else {return false;}
    }
const winningYear = record.find(didWin);
if (winningYear){
    return winningYear.year;
}
}   


