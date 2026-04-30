# layout/

Structural shell components that wrap the entire page or persist across all sections.

## Planned contents

| File | Source | Description |
|------|--------|-------------|
| `Nav.tsx` | `../ui/navigation-menu.tsx` | The portfolio navigation bar (rename + move) |
| `PageBackground.tsx` | *(new file)* | Optional: wraps StarField + FloatingCharacter + MouseGlow into one component |

## Rules for this folder
- Components here render **once per page**, not inside sections.
- No content or data logic — layout only.
- Import from `@/config/portfolio` or `@/data/` as needed.
