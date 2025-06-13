console.log("JS Loading!")

const studentName = 'Vaishnavi Rallapalli';
const studentNumber = '1235114'

const result = `Vaishnavi Rallapalli - ${studentNumber}`;
const headingPrimaryContent = document.querySelector('h1');
headingPrimaryContent.innerHTML = result;
headingPrimaryContent.classList.add('headingPrimary');