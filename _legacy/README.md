# _legacy/

This folder contains dead code archived from the original Replit "Nexus" SaaS template that was used to scaffold this project.

**These files are NOT used anywhere in the live portfolio.**

They are kept here temporarily for reference only, and should be permanently deleted once the refactoring is complete and confirmed stable.

## Archived files

### `components/` — Dead SaaS template components
| File | Why it's dead |
|---|---|
| `HeroSection.tsx` | Replit SaaS hero — replaced by `sections/HomeHero.tsx` |
| `FeaturesSection.tsx` | SaaS features block — never used in portfolio |
| `SpotlightSection.tsx` | SaaS spotlight block — never used in portfolio |
| `PricingSection.tsx` | SaaS pricing block ("Starter $29/month") — never used |
| `CTASection.tsx` | SaaS call-to-action — never used in portfolio |
| `Footer.tsx` | SaaS footer — replaced by inline footer in `Portfolio.tsx` |
| `FeatureCard.tsx` | Used only by `FeaturesSection` (also dead) |
| `GlassNav.tsx` | Template nav stub — replaced by `layout/Nav.tsx` |

### `pages/` — Dead template page
| File | Why it's dead |
|---|---|
| `Home.tsx` | Replit SaaS landing page — never registered in the router. The live page is `Portfolio.tsx`. |

## When to delete permanently

Delete this entire folder after:
1. The refactoring is fully complete and deployed
2. The production site is confirmed stable for ≥ 2 weeks
3. A git tag has been created as a snapshot before deletion
