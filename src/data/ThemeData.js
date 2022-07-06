import moon from "../assets/img/moon.webp";
import moonLights from "../assets/img/moon_lights.webp";
import moonStars from "../assets/img/moon_stars.webp";
import moonFog1 from "../assets/img/moon_fog1.webp";
import moonFog2 from "../assets/img/moon_fog2.webp";
import moonFog3 from "../assets/img/moon_fog3.webp";
import moonFog1_b from "../assets/img/moon_b_fog1.webp";
import moonFog2_b from "../assets/img/moon_b_fog2.webp";

export const darkTheme = {
  colors: {
    primary: "#fff",
    secondary: "#ff4d5a",
    tertiary: "rgba(255,255,255,.5)",

    primary_Hover: "#828c96",
    secondary_Hover: "#de424d",
    tertiary_Hover: "rgba(255,255,255,.75)",
  },

  backgrounds: {
    body: "#061f3d",
    hero: "linear-gradient(#061f3d, #040e1b);",
    webDev: "linear-gradient(#040e1b, #061f3c);",
    gameDev: "linear-gradient(#061f3c, #061f3c);",
    aboutMe: "linear-gradient(#061f3c, #061f3d);",
    contactMe: "linear-gradient(#061e3b, #040e1b);",
  },

  heroImages: {
    main: moon,
    lights: moonLights,
    stars: moonStars,
    fog1: moonFog1,
    fog2: moonFog2,
    fog3: moonFog3,
    fog1_b: moonFog1_b,
    fog2_b: moonFog2_b,
  },
};
