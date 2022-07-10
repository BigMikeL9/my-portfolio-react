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
const device = {
  mobile_S: `max-width:${"23.75em"}`, // 375px
  mobile_L: `max-width:${"37.5em"}`, // 600px
  tablet_Port: `max-width:${"56.25em"}`, // 900px
  tablet_Land: `max-width:${"75em"}`, // 1200px
  desktop_L: `min-width:${"112.5em"}`, // 1800px
};

export default device;
