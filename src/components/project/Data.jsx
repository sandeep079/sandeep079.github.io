import api from "../../assets/api.png";
import chess from "../../assets/project2.png";
import dhungedhara from "../../assets/project3.png";
import clhp from "../../assets/clhp.png";
import liquid from "../../assets/liquid.png";
import dash from "../../assets/dash.png";
import field from "../../assets/field.png";
import ekf from "../../assets/ekf.png";
import drl from "../../assets/drl.png";
import majorproject from "../../assets/majorproject.png";
import niti from "../../assets/niti.png";

export const Data = [
  //{
  //  image: majorproject,
  //  title: "Extractive Nepali Question Answering System",
  //  category: "",
  //  link: "https://github.com/Yunika-Bajracharya/Extractive-Nepali-QA",
  //  demo: "",
  //  paper: "https://doi.org/10.3126/kjse.v9i1.78368",
  //  description:
  //    "Developed web app and browser extension for Extractive Nepali Question Answering, finetuning muril-base-cased model using SQuAD dataset. We employed different translation methods to create dataset of Indo Aryan languages, annotated 500 Nepali QA pairs, evaluated on XQuAD dataset and obtained an exact match of 60.5 and F1 Score of 76.89.",
  //  stack: ["Pytorch", "React", "TypeScript", "FastAPI"],
  //},
  //{
  //  image: niti,
  //  title: "Niti - Legal Chatbot",
  //  category: "",
  //  link: "https://github.com/Robotics-Club-Pulchowk/EKF_Test_25",
  //  demo: "https://youtu.be/hqYp7NOrMAI?feature=shared",
  //  description: (
  //    <p>
  //      Lawyers, law, CA students spend a lot of time searching multiple legal
  //      documents every day to find a specific answer. Our aim is to help them
  //      search through legal information quickly so they have more time for
  //      legal analysis, strategy development, and decision making. This will
  //      also be helpful for general public to get easier access to legal
  //      information. <br />
  //      <br />
  //      One can ask legal queries, our system will search for your answers
  //      through the legal documents, extract the answer as it is, and reply back
  //      to the user, also providing the link to the document where the law
  //      resides.
  //    </p>
  //  ),
//
  //  stack: ["Pytorch", "ReactJS", "TypeScript", "FastAPI", "Redis"],
  //},
  {
    image: drl,
    title: " Deep-Reinforcement-Learning Robot Navigation",
    category: "",
    link: "https://github.com/fuseai-fellowship/DRL-for-Mobile-Robot-Navigation",
    demo: "",
    description:
      "Autonomous TurtleBot3 navigation trained end-to-end with deep reinforcement learning inside Gazebo.",
    stack: [
      "ROS 2 ",
      "Gazebo",
      "Python",
      "Stable-Baselines3",
      "PyTorch",
    ],
  },
  {
    image: ekf,
    title: "Sensor Fusion for Robot Localization",
    category: "",
    link: "https://github.com/Robotics-Club-Pulchowk/EKF_Test_25",
    demo: "",
    description:
      "ROS 2-based EKF sensor-fusion node that fuses wheel odometry, IMU and sick sensor distance range data to localize a ground robot within 5 cm RMSE indoors without cameras or GPS.",
    stack: [
      "ROS 2",
      "robot_localization",
      "EKF",
      "IMU",
      "wheel encoders",
      "Distance sensors",
       "C++",
      "Python",
      "RViz",
      "MATLAB",
    ],
  },
  {
    image: field,
    title: "Robocon Gamefield",
    category: "",
    link: "https://github.com/sandeep079/gamefield/tree/master",
    demo: "",
    description:
      "ROS 2 + Gazebo simulation of the official ABU Robocon 2025 basketball field",
    stack: [
      "Gazebo",
      "ROS 2",
      "URDF / xacro",
      "Python ",
    ],
  },
  {
    image: dash,
    title: "Robocon Dashboard",
    category: "",
    link: "https://github.com/sandeep079/robocon_dashboard/tree/master",
    demo: "",
    description:
      " A responsive canvas based dashboard for visualizing robot position, orientation, and uncertainity on a 15m x 8m field.Supports real-time ROS odometry data with kalman filter covarience visualization.",
    stack: ["HTML", "CSS", "React.js", "ROS"],
  },
  {
    image: api,
    title: "Kalman filter API",
    category: "",
    link: "https://github.com/sandeep079/kalman-filter-api",
    demo: "https://drive.google.com/file/d/1B7kzs3CkSalY6WUoi17d0xbXvIP9UK9t/view",
    description:
      "This project implements a FastAPI-based Sensor Fusion Microservice that fuses data from an IMU and wheel odometry using a Kalman Filter. It is designed to support real-time pose estimation for robotics applications. The system accepts structured sensor inputs or CSV files and returns fused pose estimates (x, y, θ). It includes support for REST endpoints, CSV-based batch filtering, and Jupyter visualization.",
    stack: ["Python + FastAPI", "Pytest", "Kalman Filter", "MkDocs + Swagger UI"],
  },
  //{
  //  image: chess,
  //  title: "Chess",
  //  category: "",
  //  link: "https://github.com/Yunika-Bajracharya/Chess",
  //  demo: "",
  //  description:
  //    "A chess game with features such as timer, single/multi-player mode, scoreboard, and resign options, created using C++ and SDL2 for GUI.",
  //  stack: ["C++", "SDL2", "CMAKE"],
  //},
  //{
  //  image: clhp,
  //  title: "Code Like Her Fellowship Projects",
  //  category: "",
  //  link: "https://github.com/Coderushnepal/YunikaBajracharya",
  //  demo: "",
  //  description:
  //    "Here is the list of projects and assignments I did during the fellowship.",
  //  stack: ["HTML", "CSS", "JavaScript", "Express"],
  //},
 // {
 //   image: dhungedhara,
 //   title: "Dhungedhara",
 //   category: "",
 //   link: "https://github.com/Yunika-Bajracharya/Dhungedhara",
 //   demo: "",
 //   description:
 //     "This is a simulation of a traditional stone drinking water fountain called Lho Hiti. The 3D model also includes the surrounding, flowers, stairs and water jar called 'gagri' in Nepali with the day time as well as night time views.",
 //   stack: ["C++", "OpenGL", "GLSL", "Blender"],
 // },
  {
    image: liquid,
    title: "NASA Space Apps Challenge 2023 Project ",
    category: "",
    link: "https://github.com/sandeep079/Nasa_space_hack",
    demo: "",
    description: (
      <ul>
        <li>
         Welcome to Liquid Logic! In this project, we have collected 
         data from various sources and have made them visually appealing 
         for students. This project mainly focuses students who are still
          in school (K12).We help students understand freshwater availability,
           importance, and scarcity. Find solutions for global, local and 
           personal levels.  
        </li>
        <br />
  
      </ul>
    ),
    stack: ["HTML", "CSS", "JavaScript"],
  },
];
