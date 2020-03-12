// ATTENTION: WORKS FOR V4 AND BELOW
// NEEDS UPDATES FOR V5 (changes should be just a few)

import { NavigationActions, StackActions } from 'react-navigation';

let navigator;

function setNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function reset(routeName, params) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params })],
    }),
  );
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function push(routeName, params) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

function resetDeep(actions) {
  navigator.dispatch(
    StackActions.reset({
      index: actions.length - 1,
      actions: actions.map(action =>
        NavigationActions.navigate({
          routeName: action.routeName || action,
          params: action.params,
        }),
      ),
    }),
  );
}

function navigateDeep(actions) {
  navigator.dispatch(
    actions.reduce(
      (prevAction, action) =>
        NavigationActions.navigate({
          routeName: action.routeName || action,
          params: action.params,
          action: prevAction,
        }),
      undefined,
    ),
  );
}

function getCurrentRoute() {
  if (!navigator || !navigator.state.nav) {
    return null;
  }

  return navigator.state.nav.routes[navigator.state.nav.index] || null;
}

export default {
  setNavigator,
  navigateDeep,
  navigate,
  push,
  resetDeep,
  reset,
  getCurrentRoute,
};
