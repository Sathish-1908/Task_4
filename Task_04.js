// Define resume data
const resumeData = {
  name: "Sathish Kumar",
  contact: {
    email: "your.email@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, City, State, 12345",
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Example",
      year: 2020,
    },
  ],
  experience: [
    {
      position: "Software Developer",
      company: "Tech Company",
      location: "City, State",
      startDate: "January 2021",
      endDate: "Present",
      responsibilities: [
        "Developing and maintaining web applications.",
        "Collaborating with cross-functional teams.",
      ],
    },
  ],
  skills: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
};

// Convert resume data to JSON
const resumeJson = JSON.stringify(resumeData);

// Log the JSON data
console.log(resumeJson);
