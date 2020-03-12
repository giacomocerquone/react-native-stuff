# react-native-stuff

Some personal and useful react native components, services and much more, costantly updated.

## This is not a library

I hate libs that collects just a bunch of useful stuff that you can then import, especially when the amount of code is small or when the resources I want to expose are of various kind and not just, for example, components.
<br>
Probably github wasn't the right place to share this resources, but I don't know any other services that fits my needs.

## What's in here

- A babel.config file which uses `babel-plugin-module-resolver` to be able to import a js file through an absolute path
- An handy tiny fetch wrapper (services/api.js) that implements **abortion** (it's **also polyfilled** where AbortController isn't supported), **token injection** and handy other futures in few js lines. I recommend you to **[read the blog](https://giacomocerquone.com/blog/fetch-wrapper)** post about it to see what it is and what you can do with it, but you also have the example folder.
- A small and simple **fastlane config** to build your ios and android app
- A navigation service used in conjuction with react-navigation (needs update to work with v5) to navigate outside of components' scope (such redux action creators or other points of your code).
- A react-native.config example file that lets you add a font to your RN 0.61 App

## Contribute

Open an issue and tell me what you'd like to see in here.
