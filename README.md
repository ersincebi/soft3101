
# SETUP and USAGE

The steps below will take you through cloning your own fork, installing dependencies and building:

1. Fork and/or clone our repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork repo](https://help.github.com/articles/fork-a-repo/) articles.

```bash
git clone https://github.com/ersincebi/soft3101.git
```

2. Open your copied repo folder in terminal and install necessary modules with command, make sure that you have installed [npm](https://www.npmjs.com/get-npm):

```bash
npm install
```

3. Install [angular-cli](https://cli.angular.io/) globally to use its commands in the terminal:

```bash
npm install --global @angular/cli
```

4. Now you are able to run or build the project:

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
