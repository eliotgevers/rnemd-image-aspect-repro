# react-native-enriched-markdown Image Aspect Ratio Repro

Minimal Expo SDK 55 repro for block image rendering in `react-native-enriched-markdown`.

## Setup

```bash
bun install
```

## Run

The package contains native code, so run with a development build (not Expo Go):

```bash
bunx expo run:ios
# or
bunx expo run:android
```

## Repro Screen

Open the default home screen. It renders `EnrichedMarkdownText` directly with default setup:

- `markdown={...}`
- `onLinkPress={({ url }) => Linking.openURL(url)}`

It includes markdown images from `placehold.co` with:

- Portrait: `600x900`
- Portrait: `720x1200`
- Square: `800x800`
- Landscape: `1280x720`

## Files

- `src/app/index.tsx`
- `src/app/_layout.tsx`
