# Paybin Portfolio Desktop

[![GitHub Release](https://img.shields.io/github/v/release/paybin/portfolio-desktop)](https://github.com/paybin/portfolio-desktop/releases)
[![Build and Release](https://github.com/paybin/portfolio-desktop/actions/workflows/build.yml/badge.svg)](https://github.com/paybin/portfolio-desktop/actions/workflows/build.yml)

A desktop application for Paybin Portfolio (https://portfolio.paybin.io) available for macOS and Windows.

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

To build the application:

```bash
npm run build
```

The output files will be located in the `dist` directory.

## Icon Generation

The application icon is generated from `icon.svg`. To regenerate the icon (e.g., after modifying the SVG):

```bash
node convert-icon.js
```
