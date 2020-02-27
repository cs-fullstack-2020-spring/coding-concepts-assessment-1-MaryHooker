// - Prompt for a contact message 
// - The user should not be able to leave any of the 3 prompts blank and your program should continue to ask for the inputs until a value has been provided for all of them
// - Each of the 3 inputs should be stored into an array
// - After all 3 inputs have been provided, display the entered items in a confirm dialog asking them to confirm they want to contact you
//   - If the user selects to confirm submisson, display an alert box `thanking them` for contacting you and print the collected contact data from the array in the console
//   - If the user cancels the submisson display an alert box that says `Maybe Next Time`

//Declare an empty variable for user name
let userName = '';
//Declare an empty variable for user email
let userEmail = '';
//Declare an empty variable for user message
let userMessage = '';
//Create an empty array
let userInfoArray = [];
//Create a while loop that will continue to prompt the user if they leave any of the fields blank
while (userName == '' || userEmail == '' || userMessage == '') {
    //Prompt user for name and save it under variable
    userName = prompt("Enter your name:");
    //Prompt user for email and save it under variable
    userEmail = prompt("Enter your email:");
    //Prompt user for message and save it under variable
    userMessage = prompt("Enter a message:");
    //Make an if statement with the condition that if any of the fields are blank continue with the while loop 
    if (userName != '' && userEmail != '' && userMessage != '') {
        //push each entry into empty array
        userInfoArray.push(userName)
        userInfoArray.push(userEmail)
        userInfoArray.push(userMessage)


    }

}
//Create a variable to save the users confirmation
let userInformation = confirm(`Do you want me to contact you?\nName: ${userName}\nEmail: ${userEmail}\nMessage: ${userMessage}`)
//Create an if statement where if the user click okay send them a thank you message by name
if(userInformation==true){
    alert(`Thank you ${userName}`);
    //also if they click ok print the current array in the console
    console.log(userInfoArray);
    //if they click cancel send them a message saying "Maybe Next Time!"
} else{
    alert("Maybe Next Time!")
}
//Created a for loop to be able to list all of my elements inside of my array seperately
for(let i=0;i<userInfoArray.length;i++){
    console.log(userInfoArray[i]);
}
