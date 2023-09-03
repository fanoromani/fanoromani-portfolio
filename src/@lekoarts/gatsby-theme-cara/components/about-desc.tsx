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

    <p>
      The English language can not fully capture the depth and complexity of my
      thoughts. So I'm incorporating Emoji into my speech to better express
      myself. Winky face.
    </p>
  </div>
);

export default AboutDesc;
