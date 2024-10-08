const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

let courses = [
  {
    id: 1,
    title: "Introduction to Programming",
    description: "Learn the basics of programming.",
    duration: "2 weeks",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Build modern web applications.",
    duration: "8 weeks",
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    description: "Master essential data structures and algorithms.",
    duration: "8 weeks",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Develop mobile applications for Android and iOS.",
    duration: "10 weeks",
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "Get started with machine learning techniques and algorithms.",
    duration: "12 weeks",
  },
  {
    id: 6,
    title: "Cloud Computing",
    description: "Learn the fundamentals of cloud architecture and services.",
    duration: "10 weeks",
  },
  {
    id: 7,
    title: "Cybersecurity",
    description:
      "Understand the basics of cybersecurity and how to secure systems.",
    duration: "8 weeks",
  },
  {
    id: 8,
    title: "Blockchain Technology",
    description: "Explore blockchain technology and its applications.",
    duration: "6 weeks",
  },
  {
    id: 9,
    title: "DevOps Essentials",
    description: "Learn the practices and tools involved in DevOps.",
    duration: "9 weeks",
  },
  {
    id: 10,
    title: "Artificial Intelligence",
    description:
      "Dive into the world of artificial intelligence and neural networks.",
    duration: "14 weeks",
  },
  {
    id: 11,
    title: "Big Data Analytics",
    description: "Understand big data concepts and analytical techniques.",
    duration: "12 weeks",
  },
  {
    id: 12,
    title: "Game Development",
    description:
      "Create games using popular game engines like Unity and Unreal.",
    duration: "10 weeks",
  },
  {
    id: 13,
    title: "Internet of Things (IoT)",
    description:
      "Learn how IoT is transforming industries and build IoT solutions.",
    duration: "8 weeks",
  },
  {
    id: 14,
    title: "UX/UI Design",
    description:
      "Master the principles of user experience and interface design.",
    duration: "7 weeks",
  },
  {
    id: 15,
    title: "Digital Marketing",
    description:
      "Learn the strategies and tools for successful digital marketing.",
    duration: "6 weeks",
  },
];

// Get all courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// Add a new course
app.post("/courses", (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Update a course by ID
app.put("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);
  if (!course) return res.status(404).send("Course not found.");

  course.title = req.body.title;
  course.description = req.body.description;
  course.duration = req.body.duration;
  res.json(course);
});

// Delete a course by ID
app.delete("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const courseIndex = courses.findIndex((c) => c.id === id);
  if (courseIndex === -1) return res.status(404).send("Course not found.");

  const deletedCourse = courses.splice(courseIndex, 1);
  res.json(deletedCourse);
});

// Start the server
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
