# sections/

Full-width page sections that form the main content of the portfolio page.
Each file maps to one `<section id="...">` block in `Portfolio.tsx`.

## Planned contents

| File | Source | Section ID |
|------|--------|-----------|
| `HomeHero.tsx` | `../HomeHero.tsx` | `#hero` |
| `AboutSection.tsx` | `../AboutSection.tsx` | `#about` |
| `ExperienceSection.tsx` | `../ExperienceSection.tsx` | `#experience` |
| `ProjectsSection.tsx` | `../ProjectsSection.tsx` | `#projects` |
| `LiveProjectsSection.tsx` | *(new file — Step 6)* | `#live-projects` |
| `AchievementsSection.tsx` | `../AchievementsSection.tsx` | `#achievements` |
| `CertificationsSection.tsx` | `../CertificationsSection.tsx` | `#certificates` |
| `SkillsSection.tsx` | `../SkillsSection.tsx` | `#skills` |
| `ContactSection.tsx` | `../ContactSection.tsx` | `#contact` |

## Rules for this folder
- Each component represents exactly one page section.
- Sections import data from `@/data/` and constants from `@/config/portfolio`.
- No styling decisions made here that belong in `cards/` or `layout/`.
