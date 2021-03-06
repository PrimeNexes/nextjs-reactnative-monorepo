This is a [Next.js](https://nextjs.org/) project with [React Native](https://reactnative.dev/). Repo based on [tyhopp solution](https://tyhopp.com/notes/monorepos-next-js-react-native)


## Usage

You can create a clone of this using `degit` or `gitscaff` 

```sh
npx degit PrimeNexes/nextjs-reactnative-monorepo example
#or if you have (gitscaff)(https://github.com/barelyhuman/gitscaff) 
gitscaff github:PrimeNexes/nextjs-reactnative-monorepo example
```

## Setup 

Both stacks Next and React Native are 2 folders with their own package.json, so both need to be setup like anyother node project

```sh
npm i
# or
yarn install 
## move to the `mobile` folder
cd mobile 
npm i
# or
yarn install 
```


Run the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

Run the react native app (`cd mobile`):

```bash
#For iOS
npm run ios
# or
yarn ios

#For Android
npm run android
# or
yarn android
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Sharing Logic / Philosophy

The monorepo aims at not being multi-package single repo solution and instead is a very simple way of letting a react native app pick up already written business logic

This is achieved by allowing `metro` (the react native bundler) to read directories above it's root level. This can be extended to even node_modules being on top level but brings it's own problems and so we have a separate `package.json` for it.

Currently the metro config only reads the `lib` folder that you see at the root of the entire repo. To be able to add more such folders, please modify the `metro.config.js`.

**Recommended** : It's easier to just create a `shared` folder and put all shared logic in there to not have to deal with having to modify `metro.config.js` again and again.