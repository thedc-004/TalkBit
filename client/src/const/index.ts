import personIcon from "../assets/icons/user.svg";
import addIcon from "../assets/icons/add.svg";
import notificationIcon from "../assets/icons/notification.svg";
import homeIcon from "../assets/icons/home.svg";
import exploreIcon from "../assets/icons/explore.svg";
import globeIcon from "../assets/icons/globe.svg";
import popularIcon from "../assets/icons/people.svg";

export const menuItems = [
  { img: notificationIcon, title: "Notification" },
  { img: addIcon, title: "Create" },
  { img: personIcon, title: "Profile" },
];

export const sidebarItems = [
  { img: homeIcon, title: "Home", url: "/" },
  { img: popularIcon, title: "Popular", url: "/popular" },
  { img: exploreIcon, title: "Explore", url: "/explore" },
  { img: globeIcon, title: "All", url: "/all" },
];
