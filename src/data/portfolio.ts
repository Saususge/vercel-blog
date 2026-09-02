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
    badge: "팀 프로젝트",
    summary:
      "C로 작성한 CPU 레이트레이서. 팀 과제로 진행했으며, 그래픽스 파이프라인 설계와 함께 구·타원·콘 렌더링을 맡아 구현/개선했습니다.",
    role: "그래픽스 파이프라인 설계 · 구/타원/콘 렌더링",
    tech: ["C", "Ray Tracing", "Graphics Pipeline"],
    highlights: [
      "구·타원·콘 교차 및 셰이딩 구현과 개선",
      "그래픽스 파이프라인 구조 설계 참여",
      "팀 협업 기반 렌더링 파이프라인 구축",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Saususge/RayTricing-In-C",
      },
    ],
  },
  {
    title: "TaskFlow — 협업 워크스페이스 (가칭)",
    badge: "팀 프로젝트",
    summary:
      "Trello 스타일 협업 프로토타입. 칸반 보드·캘린더·초대·채팅·실시간 동기화를 Docker Compose 하나로 묶은 42 과제 기반 프로젝트입니다.",
    role: "Full-stack · Workspace/Auth/Realtime",
    tech: ["TypeScript", "Vue", "Express", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Workspace CRUD·권한(OWNER/ADMIN/MEMBER/VIEWER)과 초대 메일 플로우, 역할 변경/제거 가드 구현",
      "메일 시스템: Nodemailer + Redis 큐·rate limiter, STARTTLS(587) 배선과 graceful shutdown 처리",
      "Auth: IP 기반 signup rate limit, ToS에 IP 수집 고지, public workspace VIEWER/로그아웃 버그 수정",
      "Realtime/UX: comment 편집·삭제 연결, a11y 키보드 보드/카드 이동, DB 트랜잭션·인덱스 보강",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/42worktool/TaskFlow" },
    ],
  },
];
