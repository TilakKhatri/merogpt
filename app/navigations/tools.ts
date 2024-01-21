import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

export const tools = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "conversation",
    label: "Conversation",
    icon: MessageSquare,
    path: "/conversation",
  },
  {
    id: "image-generation",
    label: "Image Generation",
    icon: ImageIcon,
    path: "/image",
  },
  {
    id: "video-generation",
    label: "Video Generation",
    icon: VideoIcon,
    path: "/video",
  },
  {
    id: "music-generation",
    label: "Music Generation",
    icon: Music,
    path: "/music",
  },
  {
    id: "code-generation",
    label: "Code Generation",
    icon: Code,
    path: "/code",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
