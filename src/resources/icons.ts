import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiTypescript,
  SiLeaflet,
  SiShadcnui,
  SiAutodesk,
  SiKicad,
  SiArduino,
  SiVercel,
} from "react-icons/si";

import { 
  FaDiscord, 
  FaGithub, 
  FaReact,
  FaLinkedin, 
  FaX, 
  FaThreads, 
  FaInstagram, 
  FaXTwitter, 
  FaFacebook, 
  FaPinterest, 
  FaWhatsapp, 
  FaReddit, 
  FaTelegram, 
  FaMicrochip,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa6";

import { MdSensors } from "react-icons/md";
import { TbApiApp } from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
import { BiRfid } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  nodejs: FaNodeJs,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  typescript: SiTypescript,
  leaflet: SiLeaflet,
  shadcnui: SiShadcnui,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  kicad: SiKicad,
  autodesk: SiAutodesk,
  arduino:SiArduino,
  vercel: SiVercel,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  microchip: FaMicrochip,
  react: FaReact,
  php: FaPhp,
  git: FaGitAlt,
  sensors: MdSensors,
  api: TbApiApp,
  postgresql: DiPostgresql,
  rfid: BiRfid,
  sql: BsFiletypeSql,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
