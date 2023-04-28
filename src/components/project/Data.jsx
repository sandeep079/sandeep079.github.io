import hhh from "../../assets/project1.png";
import chess from "../../assets/project2.png";
import dhungedhara from "../../assets/project3.png";
import clhp from "../../assets/clhp.png";
import sathi from "../../assets/sathi.png";
import maitrika from "../../assets/maitrika.png";
import sahayatri from "../../assets/sahayatri.png";
import newsly from "../../assets/newsly.png";
import falldetection from "../../assets/falldetection.png";

export const Data = [
  {
    image: falldetection,
    title: "Fall Detection Device For Elderly",
    category: "",
    link: "https://github.com/suban244/FallDetection",
    demo: "",
    description:
      "A real-time fall detection wearable for elderly that alerts emergency contacts if a fall is detected or help is needed. We use an IMU sensor to sense the motion, LSTM and CNN model to classsify fall and GSM module to send emergency message to provided contacts.",
    stack: [
      "MPU 6050",
      "Raspberry Pi Pico",
      "Sim 900A",
      "Micropython",
      "Tensorflow",
    ],
  },
  {
    image: newsly,
    title: "Newsly",
    category: "",
    link: "https://github.com/Yunika-Bajracharya/Newsly_frontend",
    demo: "",
    description:
      "Newsly provides summarized news stories and the day's top news that can be read or listened in either English or Nepali. It also has an offline mode and offers a daily newsletter tailored to the user's preferences through email and real-time news update in Discord and Telegram.",
    stack: [
      "Flutter",
      "Django",
      "IBM Watson",
      "OpenAI",
      "Google Text-to-Speech",
    ],
  },
  {
    image: sahayatri,
    title: "SahaYatri",
    category: "",
    link: "https://github.com/YAARS-2022",
    demo: "https://www.youtube.com/watch?v=Xf5o13Zutak",
    description:
      "Real-time school bus tracking system using a low-powered GPS tracking device, with a web app for schools to monitor their school buses, and mobile app for parents to know their child’s location.",
    stack: [
      "React",
      "Flutter",
      "Firebase",
      "Open Street Map",
      "Lora",
      "Arduino, NodeMCU",
    ],
  },
  {
    image: maitrika,
    title: "Maitrika",
    category: "",
    link: "https://github.com/dhakalmahima188/Maitrika",
    demo: "",
    description:
      " Application that connects health workers with doctors, tracks events, and generates reports based on data taken by health workers to aid in checkups.",
    stack: ["MERN stack", "WebRTC", "i18next", "chart.js"],
  },
  {
    image: hhh,
    title: "Hungry Hackee Hunts",
    category: "",
    link: "https://github.com/Yunika-Bajracharya/Hungry-Hackee-Hunts",
    demo: "https://www.yunikabajracharya.com.np/Hungry-Hackee-Hunts/",
    description:
      "A game in which you help Hackee, the squirrel, in her walnut heist while visualizing different sorting algorithms and a maze generator created using recursive depth first search. There are two levels.",
    stack: ["JavaScript", "HTML", "CSS", "Canva"],
  },
  {
    image: chess,
    title: "Chess",
    category: "",
    link: "https://github.com/Yunika-Bajracharya/Chess",
    demo: "",
    description:
      "A chess game with features such as timer, single/multi-player mode, scoreboard, and resign options, created using C++ and SDL2 for GUI.",
    stack: ["C++", "SDL2", "CMAKE"],
  },
  {
    image: clhp,
    title: "Code Like Her Fellowship Projects",
    category: "",
    link: "https://github.com/Coderushnepal/YunikaBajracharya",
    demo: "",
    description:
      "Here is the list of projects and assignments I did during the fellowship.",
    stack: ["HTML", "CSS", "JavaScript", "Express"],
  },
  {
    image: dhungedhara,
    title: "Dhungedhara",
    category: "",
    link: "https://github.com/Yunika-Bajracharya/Dhungedhara",
    demo: "",
    description:
      "This is a simulation of a traditional stone drinking water fountain called Lho Hiti. The 3D model also includes the surrounding, flowers, stairs and water jar called 'gagri' in Nepali with the day time as well as night time views.",
    stack: ["C++", "OpenGL", "GLSL", "Blender"],
  },
  {
    image: sathi,
    title: "Sathi",
    category: "",
    link: "",
    demo: "https://sathi-app.github.io/",
    description: (
      <ul>
        <li>
          Sathi is a friendly app for Type I Diabetic Patients to make their
          life easier. It sends notification to the patient regarding timely
          blood sugar checkup and medication, to the trusted person if the
          patient misses the notification, and to the doctor if the patient's
          blood sugar level goes extremely high.
        </li>
        <br />
        <li>
          {" "}
          Project Details:
          <a
            href="https://www.youtube.com/watch?v=mxnGCWSWLTY&list=PLfEevmzbs5mMKyBsHwh8c73v6xC60i4eX&index=4"
            target="_blank"
          >
            {" "}
            Intro Video{" "}
          </a>
          &#x2B29;
          <a
            href="https://www.youtube.com/watch?v=ij6_imqs3Nc&list=PLfEevmzbs5mMKyBsHwh8c73v6xC60i4eX&index=4"
            target="_blank"
          >
            {" "}
            Demo Video
          </a>
        </li>
      </ul>
    ),
    stack: ["Seeds For the Future 2021 Project"],
  },
];
