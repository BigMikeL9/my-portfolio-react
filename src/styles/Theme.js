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
};

/* 
Desktop-First approach 👇
0- 375px            --> Mobile - small                    [max-width: 23.5em]
0 - 600px           --> Mobile                            [max-width: 37.5em]
600px - 900px       --> Tablet-Portrait                   [max-width: 56.25em]
900px - 1200px      --> Tablet-Landscape                  [max-width: 75em]
[1200px - 1800px]   --> Where our NORMAL STYLES APPLY
1800px ++           --> Big Desktop                       [min-width: 112.5em]


👇 $breakpoint argument choices 👇
--> mobile-small                 [375px]
--> mobile                       [600px]
--> tablet-portrait             [900px]
--> tablet-landscape            [1200px]
--> big-desktop                 [1800px]


1em = 16px (default root font-size)
*/

// device size for media query
export const device = {
  mobile_S: `(max-width:${"23.5em"})`, // 375px
  mobile_M: `(max-width:${"26.56em"})`, // 425px
  mobile_L: `(max-width:${"37.5em"})`, // 600px
  tablet_Port: `(max-width:${"50.25em"})`, // 900px
  tablet_Land: `(max-width:${"75em"})`, // 1200px
  Laptop: `(max-width:${"75em"})`, // 1200px
  laptopS: `(max-width:${"968px"})`, //
  laptop: `(max-width:${"1024px"})`,
};
