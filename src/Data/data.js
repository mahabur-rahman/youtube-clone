// sidebar icon
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  SlowMotionVideo,
  WatchLater,
  ThumbUp,
} from "@mui/icons-material";

export const sidebarData = [
  {
    title: "Home",
    icon: <Home />,
    path: "/",
    cName: "icon_style",
    active: "menu_active",
  },
  {
    title: "Trending",
    icon: <Whatshot />,
    path: "/trending",
    cName: "icon_style",
  },
  {
    title: "Subscription",
    icon: <Subscriptions />,
    path: "/subscription",
    cName: "icon_style",
  },
  {
    title: "Libraries",
    icon: <VideoLibrary />,
    path: "/libraries",
    cName: "icon_style",
  },
  {
    title: "History",
    icon: <History />,
    path: "/history",
    cName: "icon_style",
  },
  {
    title: "Your Videos",
    icon: <SlowMotionVideo />,
    path: "/own-videos",
    cName: "icon_style",
  },
  {
    title: "Watch Later",
    icon: <WatchLater />,
    path: "/watch",
    cName: "icon_style",
  },
  {
    title: "Liked Videos",
    icon: <ThumbUp />,
    path: "/liked-videos",
    cName: "icon_style",
  },
];
