# Vang

A base template for creating Angular projects integrated with ViteJS for efficient development and production builds.

## Features

- **Angular Integration**: Provides a basic Angular project structure with essential dependencies.
- **ViteJS Integration**: Utilizes ViteJS for fast and optimized development server and production builds.
- **Makefile**: Includes a Makefile with convenient commands for development, building, cleaning, and publishing the project.
- **Enhanced Development Experience**: Leverages ViteJS's features like hot module replacement (HMR) and fast cold server start for an enhanced development experience.

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/sivaosorg/vang.git
   ```
2. Navigate into the project directory:
   ```bash
    cd vang
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Run the development server:

```bash
make dev
```

This command starts the development server with hot module replacement (HMR) enabled.

### Production Build

Build the project for production:

```bash
make build
```

This command generates a production-ready build of the project in the `dist` directory.

### Cleaning

Remove the dist directory:

```bash
make clean
```

### Publishing

Generate a production build and optimize for production:

```bash
make publish
```

## Structures

```sh
vang
├── Makefile
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   └── app.service.ts
│   ├── assets
│   ├── environments
│   │   └── environment.ts
│   └── main.ts
├── tsconfig.json
└── vite.config.ts
```

## Dependencies

- `Angular`: Angular framework for building single-page web applications.
- `ViteJS`: Fast build tool for modern web development.
- `@nitedani/vite-plugin-angular`: Vite plugin for Angular support.
- `sass`: CSS preprocessor for styling.
- `typescript`: Programming language for large-scale JavaScript application development.
- `vite-tsconfig-paths`: Vite plugin for TypeScript paths resolution.
