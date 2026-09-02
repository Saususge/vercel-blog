export type PortfolioProject = {
  title: string;
  badge: string;
  summary: string;
  role: string;
  tech: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const HERO = {
  eyebrow: "Game Programmer · Graphics / Engine",
  title: "Portfolio",
  desc: "클라이언트·그래픽스·엔진 쪽 작업 모음입니다. Vulkan/DXVK 스택과 프레임 타임 분석, C++ 엔진 실험을 주로 합니다.",
  cta: { label: "GitHub", href: "https://github.com/Saususge" },
};

export const SKILLS = [
  { label: "C / C++", note: "엔진·그래픽스" },
  { label: "Vulkan · WebGPU · OpenGL", note: "렌더링" },
  { label: "ThorVG · SVG/Lottie", note: "벡터 그래픽스" },
  { label: "Ray Tracing", note: "CPU 레이트레이서" },
  { label: "PresentMon · Profiling", note: "프레임 타임 분석" },
  { label: "DXVK · Driver Stack", note: "번역 레이어" },
];

export const PROJECTS: PortfolioProject[] = [
  {
    title: "ThorVG — Vector Graphics Engine",
    badge: "Open Source 기여",
    summary:
      "C++ 벡터 그래픽스 엔진 ThorVG(SVG/Lottie, WebGPU 등). 업스트림 thorvg/thorvg 포크에서 진행한 최적화 브랜치입니다.",
    role: "Contributor · 렌더링 최적화",
    tech: ["C++", "OpenGL", "WebGPU", "ThorVG"],
    highlights: [
      "saususge/opt/blur-gaussian-const — Gaussian blur 가중치 계산 최적화",
      "GL 백엔드에서 불필요한 재계산 제거",
      "업스트림 구조 유지, 최소 변경으로 정리",
    ],
    links: [
      {
        label: "기여 브랜치 보기",
        href: "https://github.com/Saususge/thorvg-work/tree/saususge/opt/blur-gaussian-const",
      },
      { label: "Fork 저장소", href: "https://github.com/Saususge/thorvg-work" },
      { label: "업스트림 ThorVG", href: "https://github.com/thorvg/thorvg" },
    ],
    featured: true,
  },
  {
    title: "RayTricing-In-C",
    badge: "개인 프로젝트",
    summary:
      "C로 작성한 CPU 레이트레이서. 레이-구 교차, 재질·라이팅, 이미지 출력까지 최소 의존성으로 구현했습니다.",
    role: "Solo · 렌더링",
    tech: ["C", "Ray Tracing", "Math"],
    highlights: [
      "벡터/레이/구 교차 등 기하 연산 직접 구현",
      "재질·카메라 구조로 씬 구성 실험",
      "로우레벨 메모리/성능 관점에서 구현",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Saususge/RayTricing-In-C",
      },
    ],
  },
  {
    title: "TinyEngine42D",
    badge: "개인 프로젝트",
    summary:
      "C++ 기반 2D 미니 엔진. 게임 루프·렌더링·입력의 최소 코어를 직접 설계한 프로젝트입니다.",
    role: "Solo · 엔진",
    tech: ["C++", "2D Engine", "Game Loop"],
    highlights: [
      "코어 루프와 모듈 분리로 확장 가능한 구조",
      "2D 렌더링 파이프라인 직접 구성",
      "지속 업데이트로 설계 반복",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Saususge/TinyEngine42D" },
    ],
  },
];
