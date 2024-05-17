// Define your resume data in JSON format
var resume = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  address: "123 Main Street, City, State, Zip",
  summary:
    "Experienced software engineer with expertise in JavaScript, Node.js, and React.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      dates: "January 2018 - Present",
      description:
        "Lead development of web applications using modern technologies.",
    },
    {
      title: "Software Engineer",
      company: "Startup",
      dates: "June 2015 - December 2017",
      description:
        "Contributed to the development of a scalable backend system.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      university: "University Name",
      dates: "2011 - 2015",
    },
  ],
  skills: ["JavaScript", "Node.js", "React", "HTML", "CSS", "SQL"],
};
// Convert the JSON data to a string
var resumeJSON = JSON.stringify(resume, null, 2);

// Print the JSON string
//console.log(resumeJSON);

// Iterating over the 'experience' array using for loop
for (var i = 0; i < resume.experience.length; i++) {
  var experience = resume.experience[i];
  console.log("Title:", experience.title);
  console.log("Company:", experience.company);
  console.log("Dates:", experience.dates);
  console.log("Description:", experience.description);
  console.log("-------------------------------------");
}
console.log("//For In Loop");
console.log("-------------------------------------");
// Iterate over the resume using For in loop

for (let key in resume) {
  console.log(key);
}
console.log("-------------------------------------");
console.log("//For Of Loop");
console.log("-------------------------------------");

//Iterate over the resume.skills using For in loop

for (let val of resume.skills) {
  console.log(val);
}

console.log("-------------------------------------");
console.log("//ForEach Loop");
console.log("-------------------------------------");

//Iterate over the resume.skills using ForEach loop

resume.skills.forEach((num) => {
  console.log(num);
});
