//videos
import d3d from './img/d3d.mp4'
import music from "./img/mhkmusic.mp4"
import elena from "./img/elena.mp4"

export const MovieState = () => {
  return [
    {
      title: "D3D International",
      mainImg: d3d,
      url: "/capture-Portfolio/work/d3dinternational",
      awards: [
        {
          title: "Project Overview",
          description:
            "“Developed a responsive and user-friendly website for D3D International to connect job seekers and employers.”",
        },
        {
          title: "Features and Functionality",
          description:
            "“Integrated job listings, candidate registration, employer dashboards, and optimized performance across devices.”",
        },
        {
          title: "Impact and Outcome",
          description:
            "“Enhanced recruitment efficiency, improved online presence, and simplified job matching for both candidates and employers.”",
        },
      ],
    },
    {
      title: "Mhk Music Player",
      mainImg: music,
      url: "/capture-Portfolio/work/mhkmusicplayer",
      awards: [
        {
          title: "Project Overview",
          description:
            "“MHK Music is a web-based music player built using React, offering users a seamless experience to browse and play music with an intuitive interface and smooth transitions.”",
        },
        {
          title: "Features and Functionality",
          description:
            "“The app includes features like music playback controls, real-time search, and a responsive design. Built with React, it ensures fast rendering and a dynamic user experience.”",
        },
        {
          title: "Impact and Outcome",
          description:
            "“MHK Music provides an engaging, user-friendly platform for music lovers, with fast performance and efficient handling of user interactions across different devices.”",
        },
      ],
    },
    {
      title: "Elena Joy",
      mainImg: elena,
      url: "/capture-Portfolio/work/elenajoy",
      awards: [
        {
          title: "Project Overview",
          description:
            "“Developed a visually appealing and interactive website for Elena Joy using HTML, CSS, and JavaScript, designed to showcase her personal brand and professional portfolio.”",
        },
        {
          title: "Features and Functionality",
          description:
            "“The website includes smooth navigation, responsive layouts, interactive elements, and visually engaging sections that highlight Elena Joy’s achievements and portfolio.”",
        },
        {
          title: "Impact and Outcome",
          description:
            "“The Elena Joy website enhances her online presence, providing a professional platform to showcase her work while ensuring a seamless and engaging user experience across devices.”",
        },
      ],
    },
  ];
};