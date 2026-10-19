import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Network,
  ScanFace,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Users,
} from "lucide-react";

export const company = {
  name: "深圳市风响树科技有限公司",
  shortName: "风响树科技",
  nameEn: "FXS TECH",
  tagline: "以技术立业 · 用科技守护",
  founded: 2014,
  email: "eddy.guo@fxs-tech.com.cn",
  phone: "0755-8350 9090",
  phoneHref: "tel:+8675583509090",
  address: "深圳市福田区",
  addressEn: "Futian District, Shenzhen, China",
  intro:
    "深圳市风响树科技有限公司自 2014 年成立以来，始终专注于为客户提供软件定制开发、系统集成与技术服务外包的一体化解决方案。核心团队由经验丰富的行业专家与技术精英组成，以“技术领先、服务卓越”为发展理念，已成功服务于金融、医疗、教育、零售等多个行业。",
  introShort:
    "2014 年成立于深圳，专注软件开发、系统集成与技术服务外包的一体化交付。",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "关于风响树", href: "#about" },
  { label: "解决方案", href: "#solutions" },
  { label: "核心能力", href: "#capabilities" },
  { label: "服务行业", href: "#industries" },
  { label: "联系咨询", href: "#contact" },
];

export type Metric = { value: string; label: string; hint?: string };

export const metrics: Metric[] = [
  { value: "10+", label: "年行业深耕", hint: `成立于 ${company.founded} 年` },
  { value: "3", label: "大业务方向", hint: "开发 · 集成 · 外包" },
  { value: "6", label: "大解决方案落地", hint: "覆盖安防与数字化" },
  { value: "4+", label: "重点服务行业", hint: "金融 · 医疗 · 教育 · 零售" },
];

export type Solution = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
};

export const solutions: Solution[] = [
  {
    id: "city",
    title: "平安城市",
    subtitle: "CITY SAFETY",
    description:
      "面向公安与城市治理场景，构建从前端感知到云端研判的全链路视频与物联体系，让城市安全看得见、管得住。",
    image: "/images/sol-city.jpg",
    icon: ShieldCheck,
    highlights: ["全域视频联网", "智能分析告警", "指挥调度一张图"],
  },
  {
    id: "community",
    title: "小区安防",
    subtitle: "COMMUNITY",
    description:
      "覆盖门禁、监控、周界与停车全场景，为住宅小区提供稳定、易维护的一体化安防体系，降低运营成本。",
    image: "/images/sol-community.jpg",
    icon: Building2,
    highlights: ["智能门禁管控", "周界入侵报警", "统一运维管理"],
  },
  {
    id: "hotel",
    title: "酒店安防",
    subtitle: "HOSPITALITY",
    description:
      "客房、公共区与后台动线全程防护，兼顾安全与体验，帮助酒店在细节处建立品牌信任。",
    image: "/images/sol-hotel.jpg",
    icon: Hotel,
    highlights: ["客控隐私保护", "大堂周界覆盖", "门锁联动报警"],
  },
  {
    id: "face",
    title: "人脸识别",
    subtitle: "FACE AI",
    description:
      "依托海康威视视觉算法，提供高准确率的人脸识别门禁、考勤与核查能力，快速、准确、合规落地。",
    image: "/images/sol-face.jpg",
    icon: ScanFace,
    highlights: ["毫秒级比对", "活体检测", "多场景通行"],
  },
  {
    id: "weighbridge",
    title: "无人值守地磅",
    subtitle: "UNMANNED WEIGHING",
    description:
      "车牌识别 + 无人值守称重 + 视频留痕，把传统地磅升级为可远程监管的智慧场站，大幅压缩人力成本。",
    image: "/images/sol-weighbridge.jpg",
    icon: Scale,
    highlights: ["车牌自动识别", "防作弊无人值守", "数据实时回传"],
  },
  {
    id: "miniprogram",
    title: "公众号小程序开发",
    subtitle: "MINI PROGRAM",
    description:
      "面向品牌与零售场景，提供公众号、小程序从策划设计到开发上线的全流程定制，把流量沉淀为复购。",
    image: "/images/sol-miniprogram.jpg",
    icon: Smartphone,
    highlights: ["定制化开发", "会员与营销", "多端数据打通"],
  },
];

export type Capability = {
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
};

export const capabilities: Capability[] = [
  {
    title: "软件项目解决方案",
    text: "从需求梳理、架构设计到开发交付的一站式软件项目服务，用专业赢得客户的信任。",
    icon: Cpu,
    image: "/images/cap-software.png",
  },
  {
    title: "IT 系统集成",
    text: "打通软硬件边界的系统集成能力，让项目承诺的卓越软件方案真正落地、高效运转。",
    icon: Network,
    image: "/images/cap-integration.png",
  },
  {
    title: "AI 创新中心",
    text: "以前沿算法能力服务每一个项目，把先进技术与贴心服务结合，确保专业与可靠。",
    icon: Bot,
    image: "/images/cap-ai.png",
  },
];

export type Industry = { name: string; icon: LucideIcon; note: string };

export const industries: Industry[] = [
  { name: "金融", icon: Landmark, note: "营业场所与办公区安防" },
  { name: "医疗", icon: HeartPulse, note: "院区安全与通道管理" },
  { name: "教育", icon: GraduationCap, note: "校园安防与智慧考勤" },
  { name: "零售", icon: ShoppingBag, note: "门店智能管理与会员运营" },
  { name: "物业", icon: Users, note: "社区与楼宇整体方案" },
  { name: "工业物流", icon: Factory, note: "园区安防与智慧地磅" },
];

export const processSteps = [
  { step: "01", title: "需求洞察", text: "深入现场，理解业务场景与真实痛点。" },
  { step: "02", title: "方案设计", text: "输出可落地的技术与实施整体方案。" },
  { step: "03", title: "敏捷交付", text: "软硬件一体实施，进度与质量双可控。" },
  { step: "04", title: "持续运维", text: "长期陪伴式服务，响应每一次业务增长。" },
];

export const partners = ["海康威视", "微信生态", "阿里云", "华为云", "腾讯云"];

export const advantages = [
  "自主研发软件产品与专利技术",
  "海康威视战略合作伙伴资质",
  "深圳本地化快速响应团队",
  "从硬件到软件的全链路交付能力",
];
