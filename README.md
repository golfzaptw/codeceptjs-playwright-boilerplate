<div align="center">
<h1><b>CodeceptJS</b> with boilerplate generator</h1>
</div>

this project created with [yeoman](http://yeoman.io/).

## Usage

You need [yeoman](http://yeoman.io/) for scaffolding.

```
yarn global add yo
or
npm install -g yo
```

create folder for your project and change working directory to the folder.

```
mkdir my-project
cd my-project
```

install this project generator.

```
yarn global add generator-codeceptjs-playwright-boilerplate
or
npm install -g generator-codeceptjs-playwright-boilerplate
```

That's all you need to install. When you want to use codeceptjs in new project,
just run

```
yo codeceptjs-playwright-boilerplate
mv .npmignore .gitignore
```

you will get our codeceptjs with other format soon, just wait a sec with your ☕

## Update this boilerplate

first, run yo command

```
yo
```

select option _Update your generators_

## Stack of codeceptjs

- CodeceptJs v3.x
- Playwright
- Eslint
- Prettier
- Danger
- Continuous Integration (Github Action)
