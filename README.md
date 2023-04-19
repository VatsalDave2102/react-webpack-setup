# react-webpack-setup

This is a react setup using webpack and babel from scratch.

Tools used:
  - Package Manager: npm
  - Bundler: webpack
  - Compiler: babel
 
 ## npm
npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. 

## Webpack
Webpack is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.

## babel
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language.

## Dependencies in this setup
- **react**: The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.
- **react-dom**: This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

## Dev Dependencies in this setup
- **@babel/core**: The core module that wraps everything in transform api (used for integrations)
- **@babel/plugin-tansfor-runtime**: A plugin that enables the re-use of Babel's injected helper code to save on codesize.
- **@babel/preset-env**: A smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
- **@babel/preset-react**: Babel will transpile the code to react. 
- **@babel/runtime**: A library that contains Babel modular runtime helpers.
- **@pmmmwh/react-refresh-webpack-plugin**: An **EXPERIMENTAL** Webpack plugin to enable "Fast Refresh" (also previously known as _Hot Reloading_) for React components.
- **babel-loader**: This package allows transpiling JavaScript files using Babel and webpack.
- **css-loader**: This allows loading css files
- **html-webpack-plugin**: Simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
- **react-refresh**: This package implements the wiring necessary to integrate Fast Refresh into bundlers. 
- **style-loader**: Takes CSS you've imported in your JavaScript files, and injects them as <style></style> tags into the DOM. It's particularly useful for inlining Critical CSS into the <head> of your page.
- **webpack**: Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
- **webpack-cli**: Webpack CLI provides a flexible set of commands for developers to increase speed when setting up a custom webpack project. 
- **webpack-dev-server**: To use webpack with a development server that provides live reloading. This should be used for development only.
- **webpack-merge**: webpack-merge provides a merge function that concatenates arrays and merges objects creating a new object. If functions are encountered, it will execute them, run the results through the algorithm, and then wrap the returned values within a function again.
  
 ## To run development server
  ```
  npm run start
  ```
  
  ## To produce a build
  ```
  npm run build
  ```
  Make sure to install all dependencies using:
  ```
  npm install
  ```
  
