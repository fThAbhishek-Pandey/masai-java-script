const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const fullName = document.querySelector("#fullName");
console.log(firstName.innerHTML);
console.log(lastName.innerHTML);
console.log(fullName.innerHTML);
firstName.addEventListener('click',function showFirstName() {
    // Complete to show an alert with your first name 
    const name = firstName.innerHTML;
    alert(`your first Name is ${name}`);
});
lastName.addEventListener('click',function showLastName() {
    // Complete to show an alert with your last name
    const name = lastName.innerHTML;
    alert(`your last Name is ${name}`);             
});
fullName.addEventListener('click',function showFullName() {
    // Complete to show an alert with your full name (firstname lastname)
    const name = fullName.innerHTML;
    alert(`your full Name is ${name}`);
})

