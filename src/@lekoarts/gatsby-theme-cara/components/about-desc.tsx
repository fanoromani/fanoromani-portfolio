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
      You know the way you feel when you see a picture of two otters holding
      hands? That's how you're gonna feel every day. My mother cried the day I
      was born because she knew she'd never be prettier than me. You should make
      me your campaign manager. I was born for politics. I have great hair and I
      love lying. Captain? The kids want to know where Paulie the Pigeon is. I
      told them he got sucked up into an airplane engine, is that all right?
    </p>
  </div>
);

export default AboutDesc;
