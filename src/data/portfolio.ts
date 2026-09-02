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
  title: "게임의 프레임 하나까지 책임지는 프로그래머",
  desc: "클라이언트·그래픽스·로우레벨 성능에 집중합니다. Vulkan/DXVK 번역 스택과 프레임 타임 분석, C++ 엔진 실험을 블로그와 GitHub에 기록하고 있습니다.",
  cta: { label: "GitHub에서 활동 보기", href: "https://github.com/Saususge" },
};

export const SKILLS = [
  { label: "C / C++", note: "엔진·그래픽스" },
  { label: "Vulkan · WebGPU · OpenGL", note: "렌더링 백엔드" },
  { label: "ThorVG · SVG/Lottie", note: "벡터 그래픽스 엔진" },
  { label: "Ray Tracing", note: "CPU 레이 트레이서" },
  { label: "PresentMon · Profiling", note: "프레임 타임·스타터 분석" },
  { label: "DXVK · Driver Stack", note: "번역 레이어 실험" },
];

export const PROJECTS: PortfolioProject[] = [
  {
    title: "ThorVG — Vector Graphics Engine",
    badge: "Open Source 기여",
    summary:
      "프러덕션용 C++ 벡터 그래픽스 엔진(ThorVG, SVG/Lottie). WebGPU 등 고성능 렌더링 백엔드를 지원합니다. 업스트림 thorvg/thorvg 포크에서 기여한 최적화 브랜치를 소개합니다.",
    role: "Contributor · 렌더링 최적화",
    tech: ["C++", "OpenGL", "WebGPU", "ThorVG"],
    highlights: [
      "브랜치 saususge/opt/blur-gaussian-const — Gaussian blur 가중치 계산 최적화",
      "GL 백엔드 셰이더/연산 경로에서 불필요한 재계산 제거, 프레임 비용 개선",
      "업스트림 구조를 유지하며 최소 침습 패치로 성능/가독성 동시 개선",
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
      "C로 작성한 CPU 레이트레이서. 레이-구 교차, 재질·라이팅, 이미지 출력까지 최소 의존성으로 구현하며 렌더링 파이프라인 기초를 다졌습니다.",
    role: "Solo · 렌더링 R&D",
    tech: ["C", "Ray Tracing", "Math"],
    highlights: [
      "벡터/레이/구 교차 등 핵심 기하 연산 직접 구현",
      "확장 가능한 재질·카메라 구조로 씬 구성 실험",
      "C 기반 로우레벨 구현으로 메모리/성능 감각 강화",
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
      "C++ 기반 2D 미니 엔진. 게임 루프·렌더링·입력의 최소 코어를 직접 설계하며 엔진 아키텍처 감각을 쌓는 프로젝트입니다.",
    role: "Solo · 엔진 프로그래밍",
    tech: ["C++", "2D Engine", "Game Loop"],
    highlights: [
      "코어 루프와 모듈 분리를 통한 확장 가능한 엔진 구조",
      "2D 렌더링 파이프라인 직접 구성 및 실험",
      "포크 1개 · 지속 업데이트로 설계 반복",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Saususge/TinyEngine42D" },
    ],
  },
];
