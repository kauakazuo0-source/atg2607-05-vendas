---
name: Lumina Tech OS
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#adc7ff'
  primary: '#adc7ff'
  on-primary: '#002e68'
  primary-container: '#4a8eff'
  on-primary-container: '#00285b'
  inverse-primary: '#005bc0'
  secondary: '#ddfcff'
  on-secondary: '#00363a'
  secondary-container: '#00f1fe'
  on-secondary-container: '#006a70'
  tertiary: '#ffb3b5'
  on-tertiary: '#680019'
  tertiary-container: '#ff5167'
  on-tertiary-container: '#5b0015'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#74f5ff'
  secondary-fixed-dim: '#00dbe7'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#ffb3b5'
  on-tertiary-fixed: '#40000c'
  on-tertiary-fixed-variant: '#920027'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-time:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 18px
  label-data:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  edge_margin: 12px
  stack_gap: 8px
  item_padding: 16px
  touch_target_min: 44px
---

## Brand & Style

The brand personality is **Elite, Performance-Driven, and Analytical**. It targets high-achieving professionals and tech-enthusiasts who demand precision and aesthetic sophistication from their wearable technology. The UI evokes a sense of "Quiet Power"—where complex data is distilled into a calm, highly readable, and premium visual experience.

The design style is a blend of **Minimalism** and **Glassmorphism**. By utilizing a deep, obsidian base with translucent, frosted layers, the interface achieves a sense of physical depth within the circular constraints of the hardware. Vibrant, neon-inflected accents (Electric Blue, Pulse Green, and Bio-Violet) provide the necessary high-contrast "pop" for health metrics against the dark background, ensuring functionality during high-intensity sports or low-light conditions.

## Colors

This design system uses a **True Black (#000000)** foundation to conserve battery life and create a seamless transition between the screen and the physical bezel.

- **Primary (Electric Blue):** Used for primary actions, connectivity indicators, and progress tracks.
- **Secondary (Cyan/Data):** Used for secondary metrics like distance or atmospheric pressure.
- **Tertiary (Health/Alert):** Used for heart rate zones and critical system notifications.
- **Surface Neutrals:** Shades of gray from `#121212` to `#2C2C2E` are used to define container depth and visual grouping.
- **Semantic Accents:** Vibrant Green for "Goal Achieved" and Purple for "Deep Sleep" states.

## Typography

The typography strategy prioritizes **high-glanceability**. 

1. **Sora** (Headlines/Time): Chosen for its geometric, futuristic character and excellent legibility at large scales.
2. **Hanken Grotesk** (Body): A clean, contemporary sans-serif used for notifications and settings lists.
3. **JetBrains Mono** (Labels/Technical Data): Used for sensor readings (BPM, GPS coordinates, Steps) to give the interface a precise, "instrument-panel" aesthetic.

On the circular display, text should be center-aligned or conform to the arc of the bezel to maximize the use of space.

## Layout & Spacing

The layout follows a **Circular/Contextual Model**. Because the screen is round, content is concentrated in the center "Safe Zone" to avoid clipping.

- **Safe Zones:** All critical interactions must reside within the central 80% of the display.
- **Rhythm:** A 4px/8px incremental grid is used for all internal component spacing.
- **Margins:** A mandatory 12px margin is maintained from the bezel edge for any text or interactive elements.
- **Reflow:** On the companion mobile app, these widgets expand into a fluid 4-column grid. On the watch, they stack vertically with a fixed 8px gap.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering and Backdrop Blurs**.

- **Level 0 (Background):** Pure #000000.
- **Level 1 (Cards/Lists):** #121212 with a subtle 1px border (#2C2C2E) to define edges.
- **Level 2 (Modals/Overlays):** Semi-transparent surfaces (60% opacity) with a 20px backdrop blur (Glassmorphism). This allows the user to maintain context of the background activity while focusing on the foreground alert.
- **Glow Effects:** Critical health metrics use a soft, 8px outer glow in their respective brand color to simulate an "emissive" light source, suggesting the data is "live."

## Shapes

The shape language is strictly **Organic and Full-Circle**. 

- **Primary Buttons:** Pill-shaped (fully rounded) to match the circular nature of the device.
- **Metric Chips:** Use a `rounded-xl` (1.5rem) radius to create a soft, friendly feel for data points.
- **Progress Indicators:** Always use circular tracks (donuts) or rounded-cap bars. Avoid sharp corners entirely to prevent visual friction with the round physical bezel.

## Components

- **Buttons:** Primary buttons are pill-shaped with a solid Electric Blue fill. Secondary buttons use a "Ghost" style with a 1px border.
- **Thin-Line Icons:** Icons must be 1.5pt stroke weight, using the Electric Blue or Secondary Cyan. They should be "unfilled" by default, filling only when an activity is active.
- **Data Chips:** Small, horizontally-oriented containers for quick stats (e.g., "456 Kcal"). These use a background of #1C1C1E.
- **Health Rings:** Multi-layered circular progress bars for daily goals (Activity, Exercise, Stand).
- **Cards:** For notifications or workout summaries, use a full-width container with a `rounded-xl` radius and a subtle vertical gradient from #1C1C1E to #121212.
- **List Items:** High-density rows with 56px height to ensure a comfortable touch target for scrolling via the digital crown or finger swipe.