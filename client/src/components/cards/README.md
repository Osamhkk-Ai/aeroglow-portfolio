# cards/

Reusable card components used inside sections.
Cards are presentational — they receive props and render, with no data imports.

## Planned contents

| File | Source | Used by |
|------|--------|---------|
| `ProjectCard.tsx` | `../ProjectCard.tsx` | `ProjectsSection`, `AchievementsSection`, `ExperienceSection` |
| `LiveProjectCard.tsx` | *(new file — Step 6)* | `LiveProjectsSection` |

## Rules for this folder
- Cards are **pure presentational components** — props in, UI out.
- No direct imports from `@/data/` or `@/config/` inside cards.
- Data is always passed down from the parent section.
