# Paybin Electron App

[![GitHub Release](https://img.shields.io/github/v/release/paybin/portfolio-desktop)](https://github.com/paybin/portfolio-desktop/releases)
[![Build and Release](https://github.com/paybin/portfolio-desktop/actions/workflows/build.yml/badge.svg)](https://github.com/paybin/portfolio-desktop/actions/workflows/build.yml)

A macOS Electron application that wraps the Paybin Portfolio website (https://portfolio.paybin.io).

## Features

- Standalone application for Paybin Portfolio.
- Custom application icon.
- Minimalist interface (no menu bar).

## Prerequisites

- Node.js (v18 or later recommended)
- npm

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

## Development

To run the application locally:

```bash
npm start
```

## Build

To build the macOS application (DMG):

```bash
npm run build
```

The output DMG file will be located in the `dist` directory.

## Icon Generation

The application icon is generated from `icon.svg`. To regenerate the icon (e.g., after modifying the SVG):

```bash
node convert-icon.js
```
