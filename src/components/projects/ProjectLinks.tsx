import Button from "@/components/ui/Button";
import { GitHubIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { site } from "@/data/site"; // For fallback if needed
import { Project } from "@/types";

export default function ProjectLinks({ project }: { project: Project }) {
  const isGithubPlaceholder = project.githubUrl === "[ADD GITHUB URL]";
  const isLivePlaceholder = project.liveUrl === "[ADD LIVE DEMO URL]";

  return (
    <div className="flex flex-wrap gap-4">
      {!isGithubPlaceholder && (
        <Button
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <GitHubIcon className="mr-2 h-4 w-4" /> View Code
        </Button>
      )}
      {!isLivePlaceholder && (
        <Button
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
