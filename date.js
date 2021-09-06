today = new Date();

xmas = new Date("December 25, 2021");
msPerDay = 24 * 60 * 60 * 1000 ;
timeLeft = (xmas.getTime() - today.getTime());

document.write("<p>" + timeLeft + "</p>");

e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft)*24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);

document.write("There are only<br> <h4>" + daysLeft + " days " + hrsLeft +" hours and " + minsLeft + " minutes left </h4> Until December 25, 2021<P>");