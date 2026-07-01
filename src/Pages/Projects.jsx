import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    useEffect(() => {
        const handlePointerDown = (event) => {
            const target = event.target;
            if (!(target instanceof Element)) return;

            const clickedProjectBox = target.closest(".project-box");
            if (!clickedProjectBox) {
                setActiveProject(null);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, []);

    const projects = [
        {
            image: "./FilmVault.png",
            title: "Film-Vault",
            description:
                "A React movie discovery app that integrates the TMDB API to browse trending films, search titles, and view detailed movie information, with Firebase supporting backend functionality and a responsive user interface.",
            github: "https://github.com/Ize-Aman/Film-Vault",
            deployment: "https://movie-app-self-nu.vercel.app/"
        },

        {
            image: "./DevEvents.png",
            title: "Dev-Events",
            description:
                "A full-stack event management platform built with Next.js and TypeScript that enables users to browse and register for developer-focused events, with MongoDB Atlas-powered data management, an admin dashboard, image uploads, analytics integration, and a responsive interface.",
            github: "https://github.com/Ize-Aman/dev-events",
            deployment: "https://aman-dev-events.vercel.app/"
        },

        {
            image: "./Checkers.png",
            title: "Checkers",
            description:
                "A classic checkers game built in C++ using the Raylib graphics library, featuring interactive piece movement, rule-based gameplay mechanics, and a simple graphical interface designed to recreate the traditional board game experience.",
            github: "https://github.com/Ize-Aman/Checkers",
            deployment: ""
        },

        {
            image: "./Delivery.png",
            title: "Food Delivery",
            description:
                "A full-stack food delivery management desktop application built with C# and a structured relational database. The system includes separate user and admin dashboards, enabling efficient management of restaurants, orders, and deliveries through a clean and organized interface.",
            github: "https://github.com/Ize-Aman/FoodDelivery",
            deployment: ""
        },
    ];

    return (
        <div className="wrapper pt-25 lg:pt-42.5">
            <section
                id="my-projects"
                className="px-10 lg:px-35 min-h-screen not-lg:pt-15"
            >
                <h2>
                    My <span className="text-purple">Projects</span>
                </h2>

                <div className="project-wrapper">
                    <ProjectCard
                        projects={projects[0]}
                        isActive={activeProject === 0}
                        onActivate={() => setActiveProject(0)}
                    />
                    <ProjectCard
                        projects={projects[1]}
                        isActive={activeProject === 1}
                        onActivate={() => setActiveProject(1)}
                    />
                    <ProjectCard
                        projects={projects[2]}
                        isActive={activeProject === 2}
                        onActivate={() => setActiveProject(2)}
                    />
                    <ProjectCard
                        projects={projects[3]}
                        isActive={activeProject === 0}
                        onActivate={() => setActiveProject(0)}
                    />
                </div>
            </section>
        </div>
    );
};

export default Projects;
