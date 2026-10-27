# Makerspace
## Structure
This project is initialized using Vite's React template for 'Typescript + React Compiler'. As well as using Tailwind CSS for basic styling, specifically the Vite version. Structuraly the code is organized as follows:
```
src/
 ├─ App.css
 ├─ App.tsx             // Handles routing and UI entrypoint
 ├─ index.css           // Styles elements and imports Tailwind CSS
 ├─ main.tsx            // Initializes application
 ├─ components/         // Reusable components
 │  └─ ...
 ├─ pages/              // Pages for the application
 │  └─ ...
 └─ assets/             // Static asset files
    └─ ...
```
## Local deployment
To deploy the website locally you need to have *node* and *npm* installed, see [npm Docs](https://docs.npmjs.com/cli/configuring-npm/install) and [Download Node.js®](https://nodejs.org/en/download/) for more information. Preferably some familiarity with the command line as well  to use necessary tools.

### 1. Clone and enter the repository locally
```
git clone https://github.com/Elvebakken-IM/MakerSpace.git
cd MakerSpace
```
or, through SSH if that is properly configured:
```
git clone git@github.com:Elvebakken-IM/MakerSpace.git
cd Makerspace
```
### 2. Install dependencies
In case of Nix you may want to create a custom shell using `nix-shell`, as the unstable branch currently have mishaps resort to stable:
```
nix-shell -I nixpkgs=channel:nixos-26.05 -p vitejs nodejs
```
In any case do:
```
npm install
```
### 3. Run server
```
npm run dev
```
### 4. Enter through web browser
Go to [localhost:5173](http://localhost:5173) to see the deployed application! The port may be different depending on your configuration.
## Roadmap
The ultimate goal is to have a fully deployed application ready for usage, the current roadmap (as of 27-10-2026) is to:
- Do a full rewrite of the old static website with React and `.tsx`
- Deploy the wiki with [Docosaurus](https://docusaurus.io) at [sister repository](https://github.com/Elvebakken-IM/MakerspaceWiki)
