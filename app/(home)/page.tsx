import React from "react";
import Navbar from "../ui/navbar";
import Card from "../ui/card";
import Details from "../ui/details";
import MobileApp from "../ui/mobileapp";
import Contact from "../ui/contact";
import Hero from "../ui/hero";

export default function page() {


  const firstProject = {
    title: "School Works Pro",
    summary: "Learning, Digital, School",
    description: 'SchoolWorksPro offers a suite of features designed to enhance the educational experience and streamline administrative tasks. Its Learning Management System (LMS) revolutionizes online education by enabling educators to create, manage, and deliver courses effectively while monitoring student progress. The School Management System (SMS) simplifies administrative duties by providing a centralized platform for managing student records, attendance, timetables, and finances. An advanced Anti-Plagiarism system ensures academic integrity by detecting plagiarism in student submissions. Additionally, the Accounting Management System offers comprehensive financial management tools for tracking budgets, expenses, and revenues, promoting transparent and efficient financial operations in educational institutions. As a frontend developer, I played a key role in its enhancement, leveraging a diverse tech stack including React, TailwindCSS, Axios, Bootstrap, and a solid JavaScript foundation. My work focused on creating a dynamic, responsive UI, ensuring efficient data flow with Axios, and utilizing React hooks like `useMemo` for performance optimization, useEffect for side effects management, and useRef for direct DOM interactions. Employing an Agile methodology, I fostered teamwork and iterative development, contributing significantly to features like the Learning Management and School Management Systems. Integrating an authentication flow with useContext allowed for secure user experiences. This experience underscored the importance of collaboration and a flexible tech stack in developing impactful educational technologies.',
    imageUrl:"/schoolworkspro.png",
    url:"/"
  }
  const secondProject = {
    title: "Digi Medical Sewa",
    summary: "Hospital at School, Corporate & Home",
    description: 'DigimedicalSewa revolutionizes access to healthcare by offering comprehensive services directly at schools, corporate environments, and the comfort of your home. They understand the need for convenient, timely, and efficient medical care, which is this platform provides one-stop solution caters to all healthcare necessities. Whether it is delivering personalized healthcare in educational settings, ensuring corporate employees have immediate medical attention, or providing home-based care, DigimedicalSewa is committed to making health services accessible. Additionally, The Online Medical Consultation platform further extends the reach, enabling patients to connect with healthcare professionals through a simple click. With DigimedicalSewa, quality healthcare is never beyond reach, embodying  dedication to the health and wellbeing.To fulfill the requirement acted as DBA at the initial stage project and after completion of task acted As a frontend developer and I designed the frontend in figma and integrated a sleek, responsive UI using React.js and Tailwind CSS, empowered by React Hooks for efficient state management. Axios was pivotal for frontend-backend integration, ensuring smooth data interactions. My database design ensured scalability and robustness, crucial for handling complex functionalities like patient management. Agile methodologies guided the development, resulting in a user-centric platform that elevates the digital healthcare experience. My role was instrumental in deploying a seamless, data-driven website that caters to the dynamic demands of the healthcare industry.',
    imageUrl:"/digimedical.png",
    url:'/'
  }
  const thirdProject = {
    title: "Digi School Global",
    summary: "Join Courses and Stat Learing",
    description: 'DigischoolGlobal redefines online learning with a diverse course selection catering to all levels and interests. The platform offers seamless navigation, enriched with engaging multimedia content and interactive assignments. Upon completion, students receive globally recognized certifications, enhancing their career prospects. As a frontend developer to deisgn and deploy product by implementing reactjs, tailwind css, axios and bootstrap.  ',
    imageUrl: "/Digischoolglobal.png",
    url:'/'
  }
  return (
    <>
      <Hero />
      <div className="flex flex-col space-y-5 relative">
      {/* title,short description, description, image url */}
        <Card topGap = {14} projectDetails = {firstProject}/>
        <Card topGap = {24} projectDetails = {secondProject}/>
        <Card topGap = {32} projectDetails = {thirdProject}/>
      </div>
      <Details />
      <MobileApp />
      <Contact />
    </>
  );
}
