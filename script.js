//DOM ELM
const emailList = document.getElementById('email');
const generateEmails = document.getElementById('gen');

//FUNCTION
function generateEmail() {

    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (response) {
            console.log(response.data.response);
        emailList.innerHTML += `<li>${response.data.response}</li>`
        })
    }

}

generateEmail()

//EVENTS
generateEmails.addEventListener('click', generateEmail)
