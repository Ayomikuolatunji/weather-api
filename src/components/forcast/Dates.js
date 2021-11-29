
export default function Dates(newday) {
    let date;
    if(newday>3 && newday<32){
        date=`${newday}th`
     }else if(newday===1){
        date=`${newday}st`
     }else if(newday===2){
        date=`${newday}2nd`
     }else if(newday===3){
        date=`${newday}rd`
     }
    return date
}
