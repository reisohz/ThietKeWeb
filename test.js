
var myDate = new Date();
myDate.setFullYear(2024,2,3);
myDate.setDate(myDate.getDate()+5);
//myDate.setFullYear(2024,3,3)
var today = new Date();
if (myDate > today)
alert("Hôm nay chưa đến ngày 03/03/2024");
else
alert("Hôm nay đã qua ngày 03/03/2024");
