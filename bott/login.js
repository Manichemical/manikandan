const form=document.querySelector('#form')
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()

    if (usernameVal === ' '){
        setError(username, `usename is requering`)
    }
    else
        setSuccess(username)

        //email vaildate

        if(emailVal ===' '){
            setError(email,`Email is requring`)
        }
        else if(!validateEmail(emailVal))
        setError(email)

        //password validate
         if(passwordVal ===' '){
            setError(password,1`passwors is required`)
         }
         else if(passwordVal.length<8){
            setError(password,`passwprd atleast 8 charecter`)
         }
         else{
            setSuccess(password)
         }

         //cpassword validate
         if (cpassword===''){
            setError(cpassword,`confirm password is required`)
         }
         else if(cpasswordVal==passwordVal){
            setError(cpasswordm,`password does not match`)
         }
         else{
            setSuccess(cpassword)
         }
         
    // check the one element
}

//element  pass, meg -ps=ass is red
function setError(element, message){
 const inputGroup= element.preventElement;
 const errorElement=inputGroup.querySelector('.error')
  errorElement.innerText= " ";

  inputGroup.classList.add('error')
  inputGroup.classList.remove('success')
}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        // corrce emailformat check the formation funtion
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};