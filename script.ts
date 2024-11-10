interface ResumeData {
    name: string;
    email: string;
    phone: string;
    school: string;
    degree: string;
    year: string;
    skills: string[];
}

function generateResume(data: ResumeData): void {
    const personalInfo = document.getElementById("personalInfo")!;
    const educationInfo = document.getElementById("educationInfo")!;
    const skillsInfo = document.getElementById("skillsInfo")!;

    // Clear any previous content
    personalInfo.innerHTML = "";
    educationInfo.innerHTML = "";
    skillsInfo.innerHTML = "";

    // Personal Information Section
    personalInfo.innerHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
    `;

    // Education Information Section
    educationInfo.innerHTML = `
        <h3>Education</h3>
        <p><strong>School:</strong> ${data.school}</p>
        <p><strong>Degree:</strong> ${data.degree}</p>
        <p><strong>Year:</strong> ${data.year}</p>
    `;

    // Skills Section
    skillsInfo.innerHTML = `
        <h3>Skills</h3>
        <p>${data.skills.join(", ")}</p>
    `;

    // Show the resume preview
    document.getElementById("resumePreview")!.style.display = "block";
}

// Add event listener to form submission
document.getElementById("resumeForm")!.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting and reloading the page

    // Collect data from form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const school = (document.getElementById("school") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");

    // Create ResumeData object with form data
    const resumeData: ResumeData = { name, email, phone, school, degree, year, skills };

    // Call generateResume with collected data
    generateResume(resumeData);
});
