# NextJS Portal Template
A Scalable NextJS Skeleton

## 👶 Getting Started
Here you will find all the available npm commands.

### 👨‍💻 Develop
Use this command to develop local.

```
npm run dev
```

### 🏗 Build
This will create an optimized production build.

```
npm run build
```

### 🏃Run
Use this command to run your Application on the Server.

```
npm run start
```

### 🔎 Well structured code
You can run one of the following commands to lint your code.

```
npm run lint // JS & CSS
npm run lint:scss
npm run lint:js
```

### 🥷 Typescript
To verify your static typing run the following command.

```
npm run type:check
```

## Project Structure

Here's the overall structure of the application

```
app/
├── api/
├── features/
├── components/
├── constants/
├── styles/
├── types/
├── utils/
└── hooks.ts -- Setup App Hooks
└── store.ts -- Setup Redux Store
pages
public
```

### app
The app directory is where our application actually lives. I like the approach of having the application files, which are not dedicated to the framework bundled in a specific directory.

#### api
This folder contains all code we need to access the APIs of our application.

#### components
The components directory contains all your elements, modules, templates, and layouts. I will explain each of these under a separate title.

##### elements
This directory contains all the basic building blocks for your app. For example a button or a headline component.

###### modules
Create all your components here which are more than a basic building block. This could be a header or a footer component. Most likely those modules are built out of multiple elements.

##### templates
In the templates directory, you should place all your page templates which are then called from your Next.js specific pages. You can find an example of this pattern in the Repository.

##### layouts
Layouts are used to wrap your Templates and provide them with the components which will be displayed by default in a specific layout. For example, you would include the Footer and the Header in a default layout.

#### constants
Put all your global constants here. 

#### features
Separated folder for each Redux feature module 

#### styles
The styles directory is an addition to the scss files you have in each component directory.

#### types
Put all of your types that do not belong to a component into this folder

### pages
All the routes of your Next.js application will be placed in this directory. For each route, you will have a separate file, which is named as the route.

### public 
Next.js uses this directory to statically serve files like the robots.txt or the favicon.ico.


## 🧱 Tech Stack
[NextJS](https://nextjs.org/)
[ReactJS](https://reactjs.org/)
[Reactstrap](https://reactstrap.github.io/)
[Redux Toolkit](https://redux-toolkit.js.org/)


