---
title: SoloCUPS
summary: Printer manager for Linux, a front end for CUPS.
tags: [Python, PyQt6, CUPS, Linux]
order: 4
repo: https://github.com/Obscuratea/SoloCUPS
image: /projects/solocups/screenshot.png
imageAlt: SoloCUPS My Printers tab showing a ready network printer
---

A PyQt6 front end for CUPS that covers everyday printer tasks without a terminal. It calls CUPS's own command-line tools, and admin actions go through polkit.

## Features

- My Printers: status, test page, print a file, options, default printer and removal.
- Print Queue: view and cancel jobs.
- Add Printer: finds network and USB printers automatically, or accepts an address such as `ipp://192.168.1.50/ipp/print`.
- A CUPS on/off switch and a shortcut to the CUPS web interface.
- A dark theme that follows the desktop accent colour.

Packaged with a PKGBUILD for Arch, plus a per-user install script for other distributions. MIT licensed.
