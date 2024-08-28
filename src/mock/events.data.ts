import avatar1 from "@/assets/Avatar.png";
import avatar2 from "@/assets/Avatar (1).png";
import avatar3 from "@/assets/Avatar (2).png";
import { IEvent } from "@/interfaces/interfaces";

export const eventsStaticData: IEvent[] = [
  {
    id: crypto.randomUUID(),
    created_at: new Date().getTime(),
    name: "Tourist",
    description: "The Viper Room",
    image: avatar1,
    video: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    start_time: 1724765549930,
    end_time: 1724781623008,
    time_zone: "Eastern",
  },
  {
    id: crypto.randomUUID(),
    created_at: new Date().getTime(),
    name: "Jason Isbell",
    description: "The Wiltern",
    image: avatar2,
    video: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    start_time: 1724765549930,
    end_time: 1724781623008,
    time_zone: "Eastern",
  },
  {
    id: crypto.randomUUID(),
    created_at: new Date().getTime(),
    name: "Brenn!",
    description: "The Troubadour",
    image: avatar3,
    video: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    start_time: 1724765549930,
    end_time: 1724781623008,
    time_zone: "Eastern",
  },
];
