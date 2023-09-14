/** @jsx jsx */
import { jsx } from "theme-ui";

type ProjectCardProps = {
  link: string;
  title: string;
  children: React.ReactNode;
  bg: string;
  cover: string;
};

const ProjectCard = ({
  link,
  title,
  children,
  bg,
  cover,
}: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: 4,
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <img
      sx={{
        position: `absolute`,
        top: `0`,
        left: `0`,
        borderTopRightRadius: `lg`,
        borderTopLeftRadius: `lg`,
        width: `100%`,
        height: `50%`,
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    />
    <div
      sx={{
        opacity: 0.85,
        textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
        p: {
          fontSize: [1, 2],
          color: `white`,
          margin: 0,
          marginTop: `14rem`,
          lineHeight: 1.25,
        },
      }}
    >
      {children}
    </div>
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [3, 4, 5],
        fontWeight: `medium`,
        lineHeight: 1.125,
      }}
    >
      {title}
    </div>
  </a>
);

export default ProjectCard;
