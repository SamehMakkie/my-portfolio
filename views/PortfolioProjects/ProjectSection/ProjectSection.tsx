import React from "react";
import PortfolioProjectImage from "../../../components/PortfolioProjectImage/PortfolioProjectImage";
import ProjectDetailsCard from "../../../components/Cards/ProjectDetailsCard/ProjectDetailsCard";

interface IProjectProps {
  title: string;
  titleSpan: string;
  imgSrc: string;
  altImgText: string;
  maxW?: string;
  isImgRounded?: boolean;
  description: string;
  githubLink: string;
  liveLink: string;
}

const ProjectSection: React.FC<IProjectProps> = ({
  title,
  titleSpan,
  imgSrc,
  altImgText,
  maxW = "",
  isImgRounded = true,
  description,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="w-full flex flex-col gap-14 lg:gap-44">
      <div className="w-full flex">
        <PortfolioProjectImage
          imgSrc={imgSrc}
          altText={altImgText}
          maxW={maxW}
          isRounded={isImgRounded}
        />
      </div>
      <div className="w-full flex lg:justify-end">
        <ProjectDetailsCard
          title={title}
          titleSpan={titleSpan}
          description={description}
          githubLink={githubLink}
          liveLink={liveLink}
        />
      </div>
    </div>
  );
};

export default ProjectSection;
