https://github.com/samsong1019/PasswordGenerator


So at first this was very difficult for me, and I was making changes to the HTML to get the alert prompt and found out how to do it through javascript. so First thing I knew I needed was an array of symbols numbers upper and lower cased elements so I made var for all four of them and listed them out. 

 I need to make a function to get the combination of character types and had to make sure the user answers prompts correctly. using if statments to ensure user properly answers questions I made one giving an alert for below 8 characters and above 128 characters. also if a user for some reason responded with anything other than a number, they were also alerted with the problem and solution. 
 I need to store whether or not they chose a character type so I used boolean values to include or not include character types. I did this by giving a set of questions asking whether they want that type of character. 
I made sure a customer chooses atleast one and if all values were false then they will get a prompt telling them they need atleast one character type. 
stored boolean values to combine all of them. and return password choices
to choose a random element from an array i used math.floor(math.random( * arr.length)) arr[randindex] to return a random element
made a function to generate password options that would store results charater types and included characters in an array, then made an if statment that has if it has syymbols, number, lowercase, and upper case it would get random elements for each.
made a for loop to make get random characters repetivily by itterating through an array. this way it does not repeat itself *(DRY principle) 
the add event listener for click happens when someone clicks the generate password button and it runs the function write passsword .