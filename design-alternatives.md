# Design Alternatives

Current design uses **Cormorant Garamond** and **Pastel Marigold** colors.
These are backup options we liked.

## Current Design

**Font:** Cormorant Garamond (light, airy, slightly romantic serif)
**Layout:** Sidebar + main content (single-page design)
**Colors:**
- Primary accent: `#E8B563` (pastel marigold)
- Secondary accent: `#D4941E` (deeper marigold)
- Card background: `#fffbf5` (warm off-white)

## Font Alternatives

### Option 4: DM Serif Display
```css
font-family: 'DM Serif Display', serif;
```
**Feel:** Bold, confident, display serif. Strong presence without being aggressive.

**To apply:**
1. Update Google Fonts import in `src/styles/global.css` to include `DM+Serif+Display`
2. Change `--font-display` to `'DM Serif Display', serif`

### Option 7: Outfit
```css
font-family: 'Outfit', sans-serif;
```
**Feel:** Clean, modern sans. Rounded edges. Friendly and open without being casual.

**To apply:**
1. Update Google Fonts import in `src/styles/global.css` to include `Outfit:wght@500;600`
2. Change `--font-display` to `'Outfit', sans-serif`

## Color Alternatives

### Soft Coral & Sage
- Primary accent: `#E8A598` (soft coral)
- Secondary accent: `#9CAF88` (sage)

**To apply:** Update `--accent` to `#E8A598` and `--accent-secondary` to `#9CAF88`

### Terracotta & Clay
- Primary accent: `#C9704A` (terracotta)
- Secondary accent: `#C9976B` (clay)

**To apply:** Update `--accent` to `#C9704A` and `--accent-secondary` to `#C9976B`

### Dusty Rose & Plum
- Primary accent: `#D4A5A5`
- Secondary accent: `#9B7B8E`

**To apply:** Update `--accent` to `#D4A5A5` and `--accent-secondary` to `#9B7B8E`

### Soft Lavender & Periwinkle
- Primary accent: `#A8B5D9`
- Secondary accent: `#B8A8C9`

**To apply:** Update `--accent` to `#A8B5D9` and `--accent-secondary` to `#B8A8C9`

## Quick Swap Instructions

To change the font:
1. Open `src/styles/global.css`
2. Update the Google Fonts `@import` line
3. Change `--font-display` variable in `:root`

To change colors:
1. Open `src/styles/global.css`
2. Update `--accent` and `--accent-secondary` variables in `:root`
3. Update hero gradient colors in `src/pages/index.astro` (search for rgba values)
