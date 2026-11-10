---
title: Vox Obscurus
summary: Audio mixer and router for Linux, built on PipeWire.
tags: [Rust, QML, PipeWire, Linux]
order: 1
repo: https://github.com/Obscuratea/vox-obscurus
image: /projects/vox-obscurus/default.png
imageAlt: Vox Obscurus mixer window in the default theme
gallery:
  - { src: /projects/vox-obscurus/default-voice.png, alt: Voice tools on the back of a microphone strip, caption: Voice tools }
  - { src: /projects/vox-obscurus/default-settings.png, alt: Settings and theme picker, caption: Settings and themes }
  - { src: /projects/vox-obscurus/background.png, alt: Mixer with a picture as the window background, caption: Picture background }
  - { src: /projects/vox-obscurus/lavender.png, alt: Lavender theme, caption: Lavender theme }
  - { src: /projects/vox-obscurus/pureblack.png, alt: Pure Black theme for OLED screens, caption: Pure Black theme }
---

A compact audio mixer and router for Linux, modeled on the essentials of Voicemeeter Banana. The audio engine is written in Rust on PipeWire, and the interface is Qt Quick. Not affiliated with VB-Audio.

## Features

- Two hardware inputs plus Apps and Media strips. Apps and Media are virtual output devices that programs play into.
- Three hardware outputs (A1 to A3) and two virtual microphones (B1, B2) for Discord, OBS and similar programs.
- Noise gate, bass, brightness and pitch on each microphone strip, with ducking of Apps and Media while speaking.
- Solo, per-program mute, drag-to-route and saved scenes.
- Push-to-talk and mute-microphones shortcuts through KDE global shortcuts, plus a tray icon.
- Themes including Lavender, Crystal, Mint and Pure Black for OLED, a follow-system mode, and any picture as the window background.
