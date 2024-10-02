import { Stack, Typography } from "@mui/material";
import "./Home.css";
import profilePicture from "../../assets/ProfilePicture.jpg";

function Home() {
  return (
    <Stack className="homePage">
      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        variant="h3"
        sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
      >
        <b>Junior Software Engineer</b>
      </Typography>
      <img
        src={profilePicture}
        alt="Anton Rezin Junior Software Developer Portfolio Website."
        className="profilePic"
      />
      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        textAlign={"center"}
        variant="h6"
      >
        Hi, I'm Anton Rezin!
      </Typography>
      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        textAlign={"center"}
        variant="h6"
      >
        I’m a Junior Full Stack Developer from the Helsinki Metropolitan Area
        with a passion for creating seamless digital experiences. Whether it’s
        building intuitive user interfaces or developing robust backend systems,
        I enjoy bringing ideas to life through clean, efficient code. My
        expertise spans both backend and frontend development, allowing me to
        create well-rounded applications that deliver exceptional user
        experiences. Currently finishing my degree in Full Stack Development,
        I’m eager to apply my skills in real-world projects and collaborate with
        teams that value innovation and quality.
      </Typography>
      <Typography
        fontFamily={"monospace"}
        className="homeDesc"
        textAlign={"center"}
        variant="h6"
      >
        {" "}
        Let’s create something extraordinary together!
      </Typography>
    </Stack>
  );
}

export default Home;
