# Contributing to Paybin Portfolio Desktop

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Paybin Portfolio Desktop. These are mostly guidelines, not rules. Use your best judgment and feel free to propose changes to this document in a pull request.

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone git@github.com:paybin/portfolio-desktop.git
    cd portfolio-desktop
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

To start the application in development mode:

```bash
npm start
```

### Building

To build the application for macOS (DMG):

```bash
npm run build
```

## Development Workflow

1.  **Fork the repository** (if you don't have write access)
2.  **Create a branch** for your feature or fix:
    ```bash
    git checkout -b feature/amazing-feature
    # or
    git checkout -b fix/annoying-bug
    ```
3.  **Make your changes**.
4.  **Commit your changes** using descriptive commit messages. We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
    ```bash
    git commit -m "feat: add new navigation bar"
    ```
5.  **Push to the branch**:
    ```bash
    git push origin feature/amazing-feature
    ```
6.  **Open a Pull Request**.

## Code Style

- Keep code clean and readable.
- Follow the existing project structure.
- Ensure no sensitive information is committed.

## Reporting Bugs

This section guides you through submitting a bug report.

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps to reproduce the problem** in as many details as possible.
- **Describe the behavior you observed** after following the steps and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots** if possible.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
