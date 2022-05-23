// Sidebar imports
import {
  UilEstate,
  UilCloudShowersAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilSetting,
  UilPlay,
} from "@iconscout/react-unicons";



// Analytics Cards imports
import { UilRainbow, UilRaindrops  } from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
 
  {
    icon: UilChart,
    heading: 'Analytics'
  },
    
  {
    icon: UilSetting,
    heading: 'Setting'
  },
  // {
  //   icon: UilPlay,
  //   heading: 'Start',
  //   onclick:'http://127.0.0.1:5000/dataset'
  // },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Vibration",
    color: {
      backGround: "linear-gradient(180deg, #822eff 0%, #b13dff 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 30,
    value: "",
    png: UilRainbow ,
    series: [
      {
        name: "Vibration",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Moisture",
    color: {
      backGround: "linear-gradient(180deg, #822eff 0%, #b13dff 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 20,
    value: "",
    png: UilRaindrops ,
    series: [
      {
        name: "Moisture",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Rainfall",
    color: {
      backGround:
        "linear-gradient(180deg, #822eff 0%, #b13dff 100%",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "",
    png: UilCloudShowersAlt,
    series: [
      {
        name: "Rainfall",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
