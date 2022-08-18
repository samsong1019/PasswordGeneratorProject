https://github.com/samsong1019/PasswordGenerator


So at first this was very difficult for me, and I was making changes to the HTML to get the alert prompt and found out how to do it through javascript. so First thing I knew I needed was an array of symbols numbers upper and lower cased elements so I made var for all four of them and listed them out. 

 I need to make a function to get the combination of character types and had to make sure the user answers prompts correctly. using if statments to ensure user properly answers questions I made one giving an alert for below 8 characters and above 128 characters. also if a user for some reason responded with anything other than a number, they were also alerted with the problem and solution. 
 I need to store whether or not they chose a character type so I used boolean values to include or not include character types. I did this by giving a set of questions asking whether they want that type of character. 
I made sure a customer chooses atleast one and if all values were false then they will get a prompt telling them they need atleast one character type. 
stored boolean values to combine all of them. and return password choices
to choose a random element from an array i used math.floor(math.random( * arr.length)) arr[randindex] to return a random element
made a function to generate password options would get the password combo and i 