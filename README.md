# Border Generator
![Node.js Version](https://img.shields.io/badge/node-20.15.1-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue)
![npm Version](https://img.shields.io/badge/npm-10.7.0-red)

<h3>Border generator for choosing the appropriate style in your design.</h3>

## Content
- [Download](#download)
- [Using](#using)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Gratitude](#gratitude)

## Download

1. Clone this repo in your work directory: </br>
   `git clone https://github.com/kostyabet/border_gen.git`
2. Go to the project directory: </br>
   `cd border_gen`
3. Install dependencies: </br>
   `npm install`

## Using
After this you should start project:
- Start project in development mode: `npm run dev`
- Start project in production mode: `npm run build`

## Scripts
Basic npm scripts `npm`:
- `next link` -  Tool for developing and testing npm packages iteratively without having to continually rebuild.
- `npm run dev` - Start project in development mode.
- `npm run build` - Start project in production mode.
- `npm run start` - Start build project.

## Deployment
This project is automatically published on github pages using GitHub actions.
The github actions file is located on the path `.github\workflows\publish.yml`.
Publish.yml contains 2 blocks:
- Build block with cache optimization;
- Github pages deploy part.

## Project structure
```plaintext
├── .github                  
│   └── workflows           
│       └── publish.yml         # *.yml which deploy project on Github pages
├── fonts                       # DIN Pro fonts used in the project
├── pages      
│   ├── BorderGenerator.tsx     # Main Shadow Generator *.tsx
│   ├── _app.tsx                # File for include reset.css
│   └── index.tsx               # Main *.tsx project file
├── styles                  
│   ├── index.module.css        # Main CSS file
│   └── reset.css               # File which reset all styles
├── package.json                # The main Node configuration file.js of the project
├── package-lock.json           # Captures the exact versions of all installed packages and their dependencies
├── next-env.d.ts               # Typing of global variables and modules and automatic generation
├── next.config.mjs             # Adjusts the behavior of the application Next.js
└── tsconfig.json               # TypeScript Configuration
```

## Gratitude
<h3>If you liked this project, please put a star on this repository!!!</br></br>
Inspired by <a href="https://github.com/adamgiebl/neumorphism">neumorphism</a>.</h3>