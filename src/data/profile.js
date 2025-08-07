import { BsTwitterX, BsLinkedin, BsGithub } from "react-icons/bs";
import Quickformx from "../assets/images/quickformx.webp";
import AiResumeBuilder from "../assets/images/airesume.webp";
// icons
import Meet from "../assets/icons/meet.svg?react";
import Page from "../assets/icons/page.svg?react";
import Gmail from "../assets/icons/gmail.svg?react";
import React from "../assets/icons/react.svg?react";
import Express from "../assets/icons/express.svg?react";
import Nodejs from "../assets/icons/nodejs.svg?react";
import Redux from "../assets/icons/redux.svg?react";
import Firebase from "../assets/icons/firebase.svg?react";
import Github from "../assets/icons/github.svg?react";
import Mongodb from "../assets/icons/mongodb.svg?react";
import Vscode from "../assets/icons/vscode.svg?react";
import Ubuntu from "../assets/icons/ubuntu.svg?react";
import Postman from "../assets/icons/postman.svg?react";
import Notion from "../assets/icons/notion.svg?react";
import Javascript from "../assets/icons/javascript.svg?react";
import Gemini from "../assets/icons/ai.svg?react";

export const socialLinks = [
  {
    icon: BsTwitterX,
    name: "twitter",
    link: "https://x.com/dhirajarya01",
  },
  {
    icon: BsLinkedin,
    name: "linkedin",
    link: "https://linkedin.com/in/dhirajarya01",
  },
  {
    icon: BsGithub,
    name: "github",
    link: "https://github.com/dhirajaryaa",
  },
];

export const hireMeLinks = [
  {
    icon: Meet,
    name: "meet",
    link: "https://meet.com",
  },
  {
    icon: Page,
    name: "resume",
    link: "https://drive.com",
  },
  {
    icon: Gmail,
    name: "gmail",
    link: "https://gmail.com",
  },
];

export const skills = [
  { icon: Javascript, name: "javascript" },
  { icon: React, name: "react" },
  { icon: Express, name: "express" },
  { icon: Mongodb, name: "mongodb" },
  { icon: Nodejs, name: "nodejs" },
  { icon: Github, name: "git/github" },
  { icon: Redux, name: "redux" },
  { icon: Ubuntu, name: "ubuntu" },
  { icon: Postman, name: "postman" },
  { icon: Notion, name: "notion" },
  { icon: Firebase, name: "firebase" },
  { icon: Vscode, name: "vscode" },
  { icon: Gemini, name: "AI/gemini" },
];

export const featuredProjects = [
  {
    name: "Quickformx",
    date: "may-2025",
    image: Quickformx,
    status: "completed",
    description:
      "A fast and flexible form builder that lets you create, customize, and manage forms in minutes. With drag-and-drop simplicity, smart validation, and seamless API integration, it’s perfect for quick, responsive, and reusable form solutions.",
    tags: ["MERN", "tailwind css", "gemini", "react-DND"],
    liveLink: "https://quickformx.dhirajarya.xyz/login",
    repoLink: "https://github.com/dhirajaryaa/quickFormx",
  },
  {
    name: "AI Resume Builder",
    date: "march 2025",
    image: AiResumeBuilder,
    status: "completed",
    description:
      "AI-powered resume builder that helps you create a professional, standout resume in minutes. Leverage AI-driven suggestions, customizable templates, AI-assisted content suggestions and real-time feedback to land your dream job.",
    tags: ["react.js", "Tailwind CSS", "firebase", "Gemini"],
    liveLink: "https://ai-resume-builder-dhirajaryaa.vercel.app/",
    repoLink: "https://github.com/dhirajaryaa/AI-Resume-Builder",
  },
];
