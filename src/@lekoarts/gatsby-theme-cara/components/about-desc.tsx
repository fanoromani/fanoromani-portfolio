/** @jsx jsx */
import { jsx } from "theme-ui";

const AboutDesc = () => (
  <div
    id="about"
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

    <blockquote sx={{ fontSize: "1.875rem" }}>
      Hey there! I'm a frontend developer currently living in Brasília, Brazil.
    </blockquote>
  </div>
);

export default AboutDesc;
