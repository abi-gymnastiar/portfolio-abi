// src/types/Project.ts
export interface Project {
    id: number;
    title: string;
    projectType: string;
    projectStatus: string;
    projectTeam: string;
    description: string;
    pageContent: string;
    img: string;
    bannerImg: string;
    screenShots: string[];
    link: string;
}