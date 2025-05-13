import Projects from "@/components/projects/project-comp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | DevsPro",
  description: "Created by devsloka.in ",
};

const ProjectsPage = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default ProjectsPage;
