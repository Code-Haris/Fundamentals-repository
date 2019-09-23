function workingDaysBetweenDates(startDate, endDate) {
    var millisecondsPerDay = 86400 * 1000; 
    startDate.setHours(0,0,0,1);  
    endDate.setHours(23,59,59,999);  
    var diff = endDate - startDate;     
    var days = Math.ceil(diff / millisecondsPerDay);
    
    // Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days = days - (weeks * 2);

    // Handle special cases
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();
    
    // Remove weekend not previously removed.   
    if (startDay - endDay > 1)         
        days = days - 2;      
    
    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay === 0 && endDay != 6)
        days = days - 1 ; 
            
    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay === 6 && startDay !== 0)
        days = days - 1  ;
    
    return days;
}

var a = new Date(2019, 09, 16); 
var b = new Date(2019, 10, 26);
var t = workingDaysBetweenDates(a,b);
swal(t + " Days to Holiday and Holiday is : National Day! ");

