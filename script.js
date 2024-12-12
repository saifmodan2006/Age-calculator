let theButton = document.getElementById("btn");
let input = document.getElementById("date");
let result = document.getElementById("result");

input.value = '2024-06-11';
input.setAttribute('placeholder', 'MM/DD/YYYY');

theButton.addEventListener("click", CalculateAge);

function CalculateAge() {
    if (input.value === "") {
        alert("Please! Enter Your Date of Birth");
    } else {
        let dateOfBirth = new Date(input.value);
        let todaysTime = new Date();
        
        let age = todaysTime.getFullYear() - dateOfBirth.getFullYear();
        let monthDiff = todaysTime.getMonth() - dateOfBirth.getMonth();
        let dayDiff = todaysTime.getDate() - dateOfBirth.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        function displayAge() {
            result.innerHTML = `Your Age is ${age}`;
            setTimeout(() => {
                result.innerHTML = " ";
            }, 6000);
        }

        setTimeout(displayAge, 1000);
    }
}