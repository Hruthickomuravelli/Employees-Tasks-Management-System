const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile sales data for Q1",
        taskDate: "2025-06-10",
        taskCategory: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2025-06-11",
        taskCategory: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review code submitted by interns",
        taskDate: "2025-06-12",
        taskCategory: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Design Mockups",
        taskDescription: "Create UI designs for new dashboard",
        taskDate: "2025-06-09",
        taskCategory: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Sync",
        taskDescription: "Daily stand-up with frontend team",
        taskDate: "2025-06-08",
        taskCategory: "Scrum",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login issue on mobile",
        taskDate: "2025-06-07",
        taskCategory: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Add test cases for user service",
        taskDate: "2025-06-10",
        taskCategory: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Prepare Onboarding Docs",
        taskDescription: "Write onboarding material for new hires",
        taskDate: "2025-06-06",
        taskCategory: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Survey Analysis",
        taskDescription: "Analyze employee feedback survey",
        taskDate: "2025-06-04",
        taskCategory: "Analytics",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update LinkedIn Page",
        taskDescription: "Post job openings and company updates",
        taskDate: "2025-06-05",
        taskCategory: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Organize Training Session",
        taskDescription: "Plan a JavaScript workshop for interns",
        taskDate: "2025-06-09",
        taskCategory: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Security Audit",
        taskDescription: "Conduct audit for internal systems",
        taskDate: "2025-06-08",
        taskCategory: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Survey Analysis",
        taskDescription: "Analyze employee feedback survey",
        taskDate: "2025-06-04",
        taskCategory: "Analytics",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      
    ]
  },
  {
    id: 4,
    firstName: "Saanvi",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Deploy API",
        taskDescription: "Deploy user authentication service",
        taskDate: "2025-06-10",
        taskCategory: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Documentation",
        taskDescription: "Document REST endpoints",
        taskDate: "2025-06-11",
        taskCategory: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Dockerize App",
        taskDescription: "Create Dockerfile for new service",
        taskDate: "2025-06-12",
        taskCategory: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Riya",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Set Up Analytics",
        taskDescription: "Integrate Google Analytics on site",
        taskDate: "2025-06-07",
        taskCategory: "Analytics",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "SEO Audit",
        taskDescription: "Review and fix SEO issues",
        taskDate: "2025-06-09",
        taskCategory: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Campaign Setup",
        taskDescription: "Launch email campaign for June",
        taskDate: "2025-06-06",
        taskCategory: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Competitor Research",
        taskDescription: "Analyze competitor social media",
        taskDate: "2025-06-10",
        taskCategory: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Kabir",
    email: "admin1@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  return { employees, admin }
}