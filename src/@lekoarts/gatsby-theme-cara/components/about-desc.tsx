/** @jsx jsx */
import { jsx } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui";

const AboutDesc = () => (
  <div>
    <div
      sx={{
        display: "flex",
        "@media screen and (max-width: 40em)": {
          flexDirection: "column",
        },
        alignItems: "center",
        gap: "2rem",
        fontWeight: "bold",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <img src="/avatar.png" alt="avatar" style={{ borderRadius: "100%" }} />

      <blockquote
        sx={{
          fontSize: "1.875rem",
          "@media screen and (max-width: 40em)": {
            textAlign: "center",
            fontSize: "1.5rem",
          },
        }}
      >
        Hey there! I'm a frontend developer currently living in Brasília,
        Brazil.
      </blockquote>
    </div>
    <p
      sx={{
        fontSize: "1.25rem",
        "@media screen and (max-width: 40em)": {
          textAlign: "justify",
          fontSize: "1rem",
        },
      }}
    >
      I'm deeply committed to crafting exceptional web experiences that marry
      world-class design with flawless functionality. I'm passionate about
      staying up-to-date with the latest frontend trends and technologies. I
      thrive on technical challenges and am always on the lookout for new
      opportunities to learn and grow. Let's connect and collaborate on amazing
      projects!
    </p>
  </div>
);

export default AboutDesc;
