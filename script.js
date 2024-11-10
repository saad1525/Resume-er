function generateResume(data) {
    var personalInfo = document.getElementById("personalInfo");
    var educationInfo = document.getElementById("educationInfo");
    var skillsInfo = document.getElementById("skillsInfo");
    // Clear any previous content
    personalInfo.innerHTML = "";
    educationInfo.innerHTML = "";
    skillsInfo.innerHTML = "";
    // Personal Information Section
    personalInfo.innerHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n    ");
    // Education Information Section
    educationInfo.innerHTML = "\n        <h3>Education</h3>\n        <p><strong>School:</strong> ".concat(data.school, "</p>\n        <p><strong>Degree:</strong> ").concat(data.degree, "</p>\n        <p><strong>Year:</strong> ").concat(data.year, "</p>\n    ");
    // Skills Section
    skillsInfo.innerHTML = "\n        <h3>Skills</h3>\n        <p>".concat(data.skills.join(", "), "</p>\n    ");
    // Show the resume preview
    document.getElementById("resumePreview").style.display = "block";
}
// Add event listener to form submission
document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting and reloading the page
    // Collect data from form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var year = document.getElementById("year").value;
    var skills = document.getElementById("skills").value.split(",");
    // Create ResumeData object with form data
    var resumeData = { name: name, email: email, phone: phone, school: school, degree: degree, year: year, skills: skills };
    // Call generateResume with collected data
    generateResume(resumeData);
});
