# react-native-stuff 
Some personal and useful react native components, services and much more, costantly updated.
## This is not a library
I hate libs that collects just a bunch of useful stuff that you can then import, especially when the amount of code is small or when the resources I want to expose are of various kind and not just, for example, components.
<br>
Probably github wasn't the right place to share this resources, but I don't know any other services that fits my needs.
## What's in here
- An handy tiny fetch wrapper (services/api.js) that implements **abortion** (it's **also polyfilled** where AbortController isn't supported), **token injection** and handy other futures in few js lines.
- A small and simple **continuous deployment configuration** (uses bash) to **produce builds in a blazingly fast way** (needs minimal configuration)
- A navigation service used in conjuction with react-navigation (supported in v3) to navigate outside of components' scope (such redux action creators or others tools)

## Example
In the example folder you can find an app that shows all the stuff through expo.<br>
Here the snack, so that you can try directly on your browser.
If there will ever be the need to include native stuff, I'll decide how to handle it because expo is really really handy for prototyping.
<br>
## Contribute
Open an issue and tell me what you'd like to see in here.
