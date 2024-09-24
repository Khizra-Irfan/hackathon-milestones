// Get references to the form and display area
//display area and form ko link kraingy import krky

const form = document.getElementById("resume-form") as HTMLFormElement
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

// Handle form submission
//event listener: wait krta hai button pr click krny ka
form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); //prevent page reload

    // input values jo user dega usay collect krky variable mai store kraingy
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // generate the resume content dynamically
    //means jo user nay content diya hai wo isky through display hojayega
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // display the generated resume , is condition kay through genenrate hoga user ka resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is is missing');
        
    }
});