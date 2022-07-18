const editButtons = document.querySelectorAll(".edit-btn");
const newUserButton = document.querySelector(".new-user");
const div = document.createElement("div");

div.id = "hide-div"

for (let button of editButtons) {
    button.addEventListener("click", (e) => {
        console.log(e)
    });
}

newUserButton.addEventListener("click", () => {
    document.body.appendChild(div);
    document.body.classList.add('hide-overflow');
});

newUserButton.addEventListener("click", () => {

});

div.addEventListener("click", () => {
    div.remove();
    document.body.classList.remove('hide-overflow');
});

// axios.post('http://iacenter.victortalamantes.com/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'

// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// axios.get('http://iacenter.victortalamantes.com/users')
//     .then(function (response) {
//         // handle success
//         console.log(response.data[0].firstName);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });


// axios.post('http://iacenter.victortalamantes.com/user', {
//     firstName: 'Cristiano',
//     lastName: 'Ronaldo',
//     location: 'Manchester',
//     phone: '1234',
//     gender: 'm'
// }).then((res) => {
//     console.log('Jalo')
//     console.log(res);
// })
//     .catch((e) => {
//         console.log('No jalo')
//         console.log(e);
//     })


const inputs = [
    { id: "user-name", max: 45 },
    { id: "user-lastname", max: 45 },
    { id: "user-location", max: 90 },
    { id: "user-phone", max: 10 }
];

const acceptBtn = document.querySelector(".accept-btn");


for (let input of inputs) {
    const inputElement = document.querySelector(`#${input.id}`);
    const errorMessage = document.createElement("p");

    inputElement.addEventListener("input", () => {
        if (inputElement.value.length > input.max) {
            errorMessage.innerText = `El texto debe de ser menor a ${input.max}`;
            errorMessage.classList.add('error-message');
            inputElement.classList.add('border-error');
            inputElement.insertAdjacentElement('beforebegin', errorMessage);
        }
        else {
            errorMessage.remove();
            inputElement.classList.remove('border-error');
        }
    });
}

const genderChecked;

try {
    genderChecked = document.querySelector('input[name="gender"]:checked').value;
} catch (error) {
    genderChecked = undefined;
}


