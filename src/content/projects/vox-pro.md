---
title: Vox Pro
summary: Eight-strip PipeWire mixer with EQ, compressors, limiters and recording.
tags: [Rust, QML, PipeWire, Linux]
order: 2
repo: https://github.com/Obscuratea/vox-pro
link: https://github.com/Obscuratea/vox-pro/releases
linkLabel: Releases
image: /projects/vox-pro/main.png
imageAlt: Vox Pro mixer window with eight strips
gallery:
  - { src: /projects/vox-pro/tools.png, alt: Voice, EQ and dynamics controls on a strip, caption: Voice, EQ and dynamics }
  - { src: /projects/vox-pro/matrix.png, alt: Routing matrix connecting strips to outputs, caption: Routing matrix }
  - { src: /projects/vox-pro/settings.png, alt: Settings window, caption: Settings }
---

The larger sibling of Vox: a PipeWire mixer and router for Linux with eight inputs and eight outputs, aimed at streaming and podcasting. The audio engine is Rust on PipeWire, and the interface is Qt Quick.

## Features

- Eight strips: three hardware inputs and five virtual ones (Apps, Media, Game, Chat, Browser), each appearing as its own output device.
- Eight outputs: A1 to A5 on hardware, B1 to B3 as virtual microphones.
- A routing matrix that connects every strip to every output.
- A three-band EQ and a soft-knee compressor on every strip.
- Noise gate, bass, brightness, pitch and auto-duck on microphone strips.
- A limiter with an adjustable ceiling on each output.
- Per-output recording to FLAC, WAV or Opus.
- Scenes, solo, push-to-talk, tray icon and a built-in updater.

Releases are published as an Arch package.
