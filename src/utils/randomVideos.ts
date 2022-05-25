const bmw = require("../assets/PF0007947_264.mp4");
const amg = require("../assets/mb-160317-amg-e43-trailer-en-mp4.mp4");

interface Item {
  video: string;
  title: string;
  description: string;
}

interface Video {
  bmw: Item;
  amg: Item;
}

export const randomVideos = (): Video => {
  return {
    bmw: {
      video: bmw,
      title: "BMW M4",
      description: "BMW M4 is waiting for you",
    },
    amg: {
      video: amg,
      title: "AMG E63",
      description: "AMG E63 is waiting for you",
    },
  };
};
