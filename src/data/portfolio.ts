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
  desc: "그래픽스와 로우레벨을 좋아하는 프로그래머입니다.",
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
      "C++ 벡터 그래픽스 엔진 ThorVG. 이슈 #4426의 blur 셰이더 최적화 제안을 구현해 PR #4697로 기여했습니다. (리뷰 중, 미머지)",
    role: "Contributor · GL 렌더러",
    tech: ["C++", "OpenGL", "GLSL", "ThorVG"],
    highlights: [
      "이슈 #4426: 매 픽셀마다 반복되던 sqrt/div 연산이 비효율적이라는 지적에서 출발",
      "PR #4697: Gaussian 지수 계수를 CPU에서 미리 계산해 셰이더로 전달, 샘플마다 재계산 제거 — 정규화 계수는 가중치 정규화에서 상쇄되므로 생략",
      "검증: GL 유닛 테스트 + 1024×1024 before/after 비교, 1,048,576픽셀 중 2픽셀만 1채널 차이. 속도·바이너리 크기 모두 유의미한 차이 없었으며, GLSL 컴파일러가 이미 최적화를 처리한 것으로 보임",
    ],
    links: [
      { label: "PR #4697", href: "https://github.com/thorvg/thorvg/pull/4697" },
      { label: "이슈 #4426", href: "https://github.com/thorvg/thorvg/issues/4426" },
      { label: "Fork", href: "https://github.com/Saususge/thorvg-work" },
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
