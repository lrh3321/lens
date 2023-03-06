/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { onLoadOfApplicationInjectionToken } from "@k8slens/application";
import startTrayInjectable from "../electron-tray/start-tray.injectable";
import reactiveTrayMenuIconInjectable from "./reactive.injectable";

const startReactiveTrayMenuIconInjectable = getInjectable({
  id: "start-reactive-tray-menu-icon",

  instantiate: (di) => {
    const reactiveTrayMenuIcon = di.inject(reactiveTrayMenuIconInjectable);

    return {
      id: "start-reactive-tray-menu-icon",
      run: () => {
        reactiveTrayMenuIcon.start();
      },

      runAfter: di.inject(startTrayInjectable),
    };
  },

  injectionToken: onLoadOfApplicationInjectionToken,
});

export default startReactiveTrayMenuIconInjectable;
