# Project Requirements: Arcane-Styled Thank You Card (Jinx Color Palette)
## Visual Design:

Implement Jinx-inspired chaotic aesthetic with electric blue (#00BFFF) and hot pink (#FF69B4) as primary colors
Use neon purple (#9400D3) and bright cyan (#00FFFF) as accent colors for highlights and effects
Apply multi-layered neon glow effects using CSS box-shadow with color variants (light/dark shades)
Include animated particle effects with rotating colors between all four main palette colors
Add film grain texture overlay on dark backgrounds (#1a1a1a, #0d0d0d) for gritty authenticity

## Typography:

"Thank You" header in bold, angular font with electric blue glow (--text-primary)
Message body in clean sans-serif using muted text color (#cccccc) for readability
Accent decorative elements using hot pink (--text-secondary) with slight distortion effects
Ensure high contrast ratios against dark backgrounds using light text (#ffffff) where needed

## Layout & Structure:

Asymmetrical, chaotic-inspired design using CSS Grid with intentional visual imbalance
Hexagonal and angular design elements using neon purple (--accent) for frames and borders
Layered depth effect with CSS transforms, using bright cyan (--highlight) for top-layer elements
Responsive design maintaining visual impact on all screen sizes

## Interactive Elements:

Hover effects transitioning between color variants (light/dark versions of each color)
Card opening animation with explosive energy effect using all four primary colors
Color-cycling animations for decorative elements (rotating through electric blue → hot pink → neon purple → bright cyan)
Smooth CSS transitions using semantic color applications (--primary, --secondary, --accent, --highlight)

## Technical Implementation:

HTML/CSS/JavaScript using provided CSS custom properties for consistent theming
Color transitions using CSS variables for smooth animations between variants
SVG graphics with dynamic color fills using CSS custom properties
Optimized animations targeting transform and opacity only for 60fps performance
Cross-browser compatibility with CSS custom property fallbacks

## Content Structure:

Customizable thank you message with electric blue accent styling
Optional recipient name field using hot pink highlighting
Sender signature area with neon purple glow effect
Date stamp using bright cyan for temporal emphasis

## Color Usage Strategy:

Primary actions: Electric blue (--primary) and variants
Secondary elements: Hot pink (--secondary) and variants
Accent decorations: Neon purple (--accent) and variants
Highlights/focus: Bright cyan (--highlight) and variants
Backgrounds: Dark neutrals (--dark-bg, --darker-bg)
Text hierarchy: Light colors (#ffffff, #cccccc) with colored accents