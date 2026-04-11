# Saususge — 기술 블로그

[AstroPaper](https://github.com/satnaing/astro-paper) 테마를 기반으로 한 정적 블로그입니다. 게임·엔진·하드웨어 최적화 관련 글을 올립니다.

- **사이트 설정:** [`src/config.ts`](src/config.ts) (`SITE.website`, 제목, OG, 타임존 등)
- **글:** [`src/data/blog/`](src/data/blog/) — Markdown(`.md`) 또는 MDX(`.mdx`)
- **PresentMon CSV 등 데이터:** [`src/data/`](src/data/) — 예: DXVK 벤치마크용 `wdxvk.csv`, `wodxvk.csv` ([`src/components/DxvkChart.astro`](src/components/DxvkChart.astro)에서 빌드 시 읽음)

방문자용 소개는 블로그의 [About](src/pages/about.md) 페이지를 수정하면 됩니다.

## 요구 사항

- [Node.js](https://nodejs.org/) (LTS 권장)
- [pnpm](https://pnpm.io/)

## 로컬에서 실행

```bash
pnpm install
pnpm dev
```

개발 서버: <http://localhost:4321>

## 빌드·미리보기

```bash
pnpm run build
pnpm run preview
```

`package.json`의 `build` 스크립트 마지막에 Unix `cp`가 포함되어 있습니다. **Windows PowerShell/CMD**에서는 해당 단계에서 실패할 수 있습니다. 그 경우는 Git Bash·WSL에서 빌드하거나, `pagefind` 실행 후 `dist/pagefind`를 `public/pagefind`로 수동 복사하면 됩니다.

## 자주 쓰는 명령

| 명령 | 설명 |
| :--- | :--- |
| `pnpm install` | 의존성 설치 |
| `pnpm run dev` | 개발 서버 |
| `pnpm run build` | 타입 검사 + 프로덕션 빌드 + Pagefind 인덱스 |
| `pnpm run preview` | 빌드 결과 미리보기 |
| `pnpm run lint` | ESLint |
| `pnpm run format` / `format:check` | Prettier |

## 테마·Astro 문서

- AstroPaper: <https://github.com/satnaing/astro-paper>
- Astro: <https://docs.astro.build/>

## 라이선스

원본 테마(AstroPaper)는 [MIT License](https://github.com/satnaing/astro-paper/blob/main/LICENSE)입니다. 이 저장소에서 추가·수정한 부분은 동일하게 MIT 하에 두는 것을 권장합니다.
