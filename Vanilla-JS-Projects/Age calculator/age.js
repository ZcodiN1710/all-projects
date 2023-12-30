const btnEl = document.querySelector("button");
const yourAge = document.querySelector(".yourAge span");
const inputEl = document.getElementById("dateInput");



const calculateAge = () => {
    
  const dateOfBirthValue = inputEl.value;
  if(inputEl.value  == ""){
    alert ("Enter your birthdate")
  } else{
  const birthDate = new Date(dateOfBirthValue)
  const birthFullYear = birthDate.getFullYear()
  console.log("birth year:", birthFullYear);

  const dateNow = new Date();
  const currentFullYear = dateNow.getFullYear();
  console.log("current year:",currentFullYear);

  const currentAge = currentFullYear - birthFullYear
  console.log(currentAge);

  yourAge.innerHTML= `Your age is ${currentAge} years old`

}
 
};



btnEl.addEventListener("click", calculateAge);
