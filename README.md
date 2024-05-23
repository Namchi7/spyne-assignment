# SPYNE Assignment by Aman Kumar

### How to run

- Clone this repository
- Go to cloned project
- Run command
  `npm install`
  to install dependencies
- Start server using command:
  `npm run dev`
- Run the CLI tool to scan template files for tailwind CSS classes and build CSS.
  `npx tailwindcss -i ./src/index.css -o ./src/output.css --watch`

### While Building Project

- It was hard to implement how to embed the subtitles from text. So, a lot of research went into how to get the text and use it as a Subtitle file.
- The subtitles use WEBVTT format so, the user has to take reference for how to write a WEBVTT subtitle from the resource provided, which is very easy to understand. The resource is available [here](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).
- The UI is kept fairly simple to avoid any confusions on the project's functionality.
- **Trade-Off** - While the project requires the user to write a WEBVTT format subtitle, given more time I would have taken a few user inputs for time and text in more user-friendly way to improve UX.
- **What would I build next** - I would add a functionality for wherever the user pauses the video, the user can directly pick up the time at which the video is paused instead of just manually providing timestamps to further improve the user experience.

### Live Deployed Link

Click to open deployed project: [https://spyne.netlify.app](https://spyne.netlify.app).
