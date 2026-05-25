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
 │  ├─ Alert.tsx
 │  ├─ Map.tsx
 │  ├─ Navbar.tsx
 │  ├─ OpenStatus.tsx
 │  └─ Schedule.tsx
 ├─ pages/              // Pages for the application
 │  ├─ Home.tsx
 │  └─ Wiki.tsx
 └─ assets/
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
The ultimate goal is to have a fully deployed application ready for usage, the current roadmap (as of 24-05-2026) is to
- Do a full rewrite of the old static website, see [this](https://github.com/Elvebakken-IM/MakerSpace/issues/3) tracker for more information
- Deploy wiki with [Docosaurus](https://docusaurus.io)
- Rework the schedule and status components to instead fetch data and style it properly
- Implement an admin dashboard for employees
