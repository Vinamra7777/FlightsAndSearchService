function compareTime(timeString1, timeString2){
    let dateTime1=new Date(timeString1);
    let dateTime2=new Date(timeString2);

    return (dateTime1.getFullYear() >= dateTime2.getFullYear() && dateTime1.getMonth() >= dateTime2.getMonth() && dateTime1.getDate() >= dateTime2.getDate() && dateTime1.getTime() > dateTime2.getTime());
}

module.exports={
    compareTime,
}; 