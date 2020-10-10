// product page

function search_products() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('product-box-box');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "flex";
        }
    }
}


// contact us page

// document.querySelector(".cform").addEventListener("submit",
//     submitForm);

// function submitForm(e) {
//     e.preventDefault();

//     let name = document.querySelector(".name").value;
//     let email = document.querySelector(".email").value;
//     let message = document.querySelector(".message").value;
//     console.log(name, email, message);

//     saveContactInfo(name, email, message);
// }