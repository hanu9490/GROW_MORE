import IconCloud from "../../../magicui/IconsCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const SoftwareIconsCloud = () => {
  return (
    <div className="relative flex h-full w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background px-6 pb-8 pt-8 md:px-20 md:pb-20">
      <h2
        className="text-xl font-bold mb-4 text-center"
        style={{ color: "#3056d3", fontFamily: "Poppins-semi-bold" }}
      >
        Master Software Skills with Growmore
      </h2>
      <p className="text-center text-base mb-4">
        In today's ever-evolving tech landscape, staying ahead in software
        development is crucial. Courses in programming, cloud computing, and AI
        help individuals and businesses remain competitive by building essential
        skills for the future.
      </p>
      <p className="text-center text-base mb-6">
        At Growmore, we pride ourselves on delivering high-quality, hands-on
        training in software development. Our expert instructors ensure each
        student not only understands the theory but also gains practical
        experience with the latest tools and technologies. Join us, and see how
        we make learning an engaging and enriching journey.
      </p>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};
