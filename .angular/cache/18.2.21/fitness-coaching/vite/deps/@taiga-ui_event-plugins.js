import {
  EVENT_MANAGER_PLUGINS,
  EventManagerPlugin
} from "./chunk-NJGT5AFO.js";
import {
  DOCUMENT
} from "./chunk-2WDSK4Z4.js";
import {
  Injectable,
  InjectionToken,
  __objRest,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-PR7BJRWE.js";

// node_modules/@taiga-ui/event-plugins/fesm2022/taiga-ui-event-plugins.mjs
var LongtapEvent = class extends CustomEvent {
  constructor(type, _a) {
    var _b = _a, {
      clientX,
      clientY
    } = _b, eventInitDict = __objRest(_b, [
      "clientX",
      "clientY"
    ]);
    super(type, __spreadProps(__spreadValues({}, eventInitDict), {
      detail: {
        clientX,
        clientY
      }
    }));
  }
};
var isIos = ({
  userAgent,
  maxTouchPoints
}) => /ipad|iphone|ipod/i.test(userAgent) || /^((?!chrome|android).)*safari/i.test(userAgent) && maxTouchPoints > 1;
var TAP_DELAY = 700;
var SAFE_NAVIGATOR = typeof navigator === "undefined" ? null : navigator;
var MOVE_THRESHOLD = 15;
var LongtapEventPlugin = class extends EventManagerPlugin {
  constructor() {
    super(...arguments);
    this.isIOS = !!SAFE_NAVIGATOR && isIos(SAFE_NAVIGATOR);
  }
  addEventListener(element, _event, handler) {
    const removeLongtapEventPolyfill = this.isIOS ? this.listenTouchEvents(element) : this.listenContextmenuEvent(element);
    element.addEventListener("longtap", handler);
    return () => {
      removeLongtapEventPolyfill();
      element.removeEventListener("longtap", handler);
    };
  }
  supports(event) {
    return event === "longtap";
  }
  listenContextmenuEvent(element) {
    return this.manager.addEventListener(element, "contextmenu.prevent.stop", ({
      clientX,
      clientY
    }) => {
      this.dispatchLongtapEvent(element, clientX, clientY);
    });
  }
  listenTouchEvents(element) {
    let longTapTimeout = null;
    let touchStartCoords = null;
    const reset = () => {
      clearTimeout(longTapTimeout);
      touchStartCoords = null;
      longTapTimeout = null;
    };
    const removeTouchstartListener = this.manager.addEventListener(element, "touchstart.zoneless.passive", ({
      touches
    }) => {
      const touch = touches[0];
      if (!touch) {
        return;
      }
      const {
        clientX,
        clientY
      } = touch;
      touchStartCoords = {
        clientX,
        clientY
      };
      longTapTimeout = setTimeout(() => {
        this.dispatchLongtapEvent(element, clientX, clientY);
        reset();
      }, TAP_DELAY);
    });
    const removeTouchmoveListener = this.manager.addEventListener(element, "touchmove.zoneless.passive", ({
      touches
    }) => {
      const touch = touches[0];
      if (!touch || !touchStartCoords) {
        return;
      }
      const {
        clientX,
        clientY
      } = touch;
      if (Math.hypot(clientX - touchStartCoords.clientX, clientY - touchStartCoords.clientY) <= MOVE_THRESHOLD) {
        return;
      }
      reset();
    });
    const removeTouchcancelListener = this.manager.addEventListener(element, "touchcancel.zoneless.passive", reset);
    const removeTouchendListener = this.manager.addEventListener(element, "touchend.zoneless.passive", reset);
    return () => {
      removeTouchstartListener();
      removeTouchmoveListener();
      removeTouchcancelListener();
      removeTouchendListener();
    };
  }
  dispatchLongtapEvent(element, clientX, clientY) {
    element.dispatchEvent(new LongtapEvent("longtap", {
      clientX,
      clientY,
      bubbles: false,
      cancelable: false,
      composed: false
    }));
  }
};
var TimedEventPlugin = class extends EventManagerPlugin {
  supports(event) {
    return this.regExp.test(event);
  }
  getDelay(event) {
    const match = this.regExp.exec(event);
    if (!match?.groups) {
      throw new Error(`Invalid event: ${event}`);
    }
    const {
      time,
      units
    } = match.groups;
    switch (units) {
      case "ms":
        return Number(time);
      case "s":
        return Number(time) * 1e3;
      default:
        throw new Error(`Invalid event: ${event}`);
    }
  }
  unwrap(event) {
    return event.replace(this.regExp, "");
  }
};
var DebounceEventPlugin = class extends TimedEventPlugin {
  constructor() {
    super(...arguments);
    this.regExp = /\.debounce~(?<time>\d+)(?<units>ms|s)/;
  }
  addEventListener(element, eventName, handler) {
    let timeout;
    const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handler(event);
      }, this.getDelay(eventName));
    });
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }
};
var AbstractEventPlugin = class _AbstractEventPlugin extends EventManagerPlugin {
  constructor() {
    super(inject(DOCUMENT));
  }
  supports(event) {
    return event.includes(this.modifier);
  }
  unwrap(event) {
    return event.split(".").filter((v) => !this.modifier.includes(v)).join(".");
  }
  static {
    this.ɵfac = function AbstractEventPlugin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractEventPlugin)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbstractEventPlugin,
      factory: _AbstractEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractEventPlugin, [{
    type: Injectable
  }], () => [], null);
})();
var GLOBAL_HANDLER = new InjectionToken(ngDevMode ? "[GLOBAL_HANDLER]: Global event target handler" : "", {
  factory: () => {
    const document = inject(DOCUMENT);
    return (name) => name.split(".").reduce((obj, prop) => obj?.[prop], document.defaultView);
  }
});
var GlobalEventPlugin = class _GlobalEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.handler = inject(GLOBAL_HANDLER);
    this.modifier = ">";
  }
  addEventListener(_, event, handler) {
    return this.manager.addEventListener(this.handler(event.split(">")[0]), event.split(">")?.[1] ?? "", handler);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵGlobalEventPlugin_BaseFactory;
      return function GlobalEventPlugin_Factory(__ngFactoryType__) {
        return (ɵGlobalEventPlugin_BaseFactory || (ɵGlobalEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_GlobalEventPlugin)))(__ngFactoryType__ || _GlobalEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _GlobalEventPlugin,
      factory: _GlobalEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var OptionsEventPlugin = class _OptionsEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "capture.once.passive";
  }
  supports(event) {
    return event.includes(".") && !this.unwrap(event).includes(".");
  }
  addEventListener(element, event, handler) {
    const unwrap = this.unwrap(event);
    const capture = event.includes(".capture");
    element.addEventListener(unwrap, handler, {
      capture,
      once: event.includes(".once"),
      passive: event.includes(".passive")
    });
    return () => element.removeEventListener(unwrap, handler, {
      capture
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOptionsEventPlugin_BaseFactory;
      return function OptionsEventPlugin_Factory(__ngFactoryType__) {
        return (ɵOptionsEventPlugin_BaseFactory || (ɵOptionsEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_OptionsEventPlugin)))(__ngFactoryType__ || _OptionsEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OptionsEventPlugin,
      factory: _OptionsEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionsEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var PreventEventPlugin = class _PreventEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".prevent";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.preventDefault();
      handler(event2);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPreventEventPlugin_BaseFactory;
      return function PreventEventPlugin_Factory(__ngFactoryType__) {
        return (ɵPreventEventPlugin_BaseFactory || (ɵPreventEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_PreventEventPlugin)))(__ngFactoryType__ || _PreventEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PreventEventPlugin,
      factory: _PreventEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var ResizePlugin = class _ResizePlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "resize";
  }
  supports(event) {
    return event === "resize";
  }
  addEventListener(element, event, handler) {
    if (typeof ResizeObserver === "undefined" || !(element instanceof Element)) {
      element.addEventListener(event, handler);
      return () => element.removeEventListener(event, handler);
    }
    const observer = new ResizeObserver(handler);
    observer.observe(element);
    return () => observer.disconnect();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵResizePlugin_BaseFactory;
      return function ResizePlugin_Factory(__ngFactoryType__) {
        return (ɵResizePlugin_BaseFactory || (ɵResizePlugin_BaseFactory = ɵɵgetInheritedFactory(_ResizePlugin)))(__ngFactoryType__ || _ResizePlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ResizePlugin,
      factory: _ResizePlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizePlugin, [{
    type: Injectable
  }], null, null);
})();
var SelfEventPlugin = class _SelfEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".self";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      if (event2.target === event2.currentTarget) {
        handler(event2);
      }
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSelfEventPlugin_BaseFactory;
      return function SelfEventPlugin_Factory(__ngFactoryType__) {
        return (ɵSelfEventPlugin_BaseFactory || (ɵSelfEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_SelfEventPlugin)))(__ngFactoryType__ || _SelfEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SelfEventPlugin,
      factory: _SelfEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelfEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var StopEventPlugin = class _StopEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".stop";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.stopPropagation();
      handler(event2);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵStopEventPlugin_BaseFactory;
      return function StopEventPlugin_Factory(__ngFactoryType__) {
        return (ɵStopEventPlugin_BaseFactory || (ɵStopEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_StopEventPlugin)))(__ngFactoryType__ || _StopEventPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StopEventPlugin,
      factory: _StopEventPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StopEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var ThrottleEventPlugin = class extends TimedEventPlugin {
  constructor() {
    super(...arguments);
    this.regExp = /\.throttle~(?<time>\d+)(?<units>ms|s)/;
  }
  addEventListener(element, eventName, handler) {
    let timeout;
    const unsubscribe = this.manager.addEventListener(element, this.unwrap(eventName), (event) => {
      if (timeout !== void 0) {
        return;
      }
      handler(event);
      timeout = setTimeout(() => {
        timeout = void 0;
      }, this.getDelay(eventName));
    });
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }
};
var ZonelessPlugin = class _ZonelessPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".zoneless";
  }
  addEventListener(element, event, handler) {
    _ZonelessPlugin.ngZone = this.manager.getZone();
    return _ZonelessPlugin.ngZone?.runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵZonelessPlugin_BaseFactory;
      return function ZonelessPlugin_Factory(__ngFactoryType__) {
        return (ɵZonelessPlugin_BaseFactory || (ɵZonelessPlugin_BaseFactory = ɵɵgetInheritedFactory(_ZonelessPlugin)))(__ngFactoryType__ || _ZonelessPlugin);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ZonelessPlugin,
      factory: _ZonelessPlugin.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonelessPlugin, [{
    type: Injectable
  }], null, null);
})();
var PLUGINS = [ZonelessPlugin, SelfEventPlugin, GlobalEventPlugin, OptionsEventPlugin, PreventEventPlugin, ResizePlugin, StopEventPlugin, LongtapEventPlugin, DebounceEventPlugin, ThrottleEventPlugin];
var NG_EVENT_PLUGINS = PLUGINS.map((useClass) => ({
  provide: EVENT_MANAGER_PLUGINS,
  multi: true,
  useClass
}));
function provideEventPlugins() {
  return NG_EVENT_PLUGINS;
}
function shouldCall(predicate) {
  return (original, _context, desc) => {
    const value = desc?.value || original;
    const result = function(...args) {
      if (!predicate.apply(this, args)) {
        return;
      }
      if (ZonelessPlugin.ngZone) {
        ZonelessPlugin.ngZone.run(() => value.apply(this, args));
      } else {
        value.apply(this, args);
      }
    };
    if (!desc) {
      return result;
    }
    desc.value = result;
  };
}
function asCallable(a) {
  return a;
}
export {
  AbstractEventPlugin,
  DebounceEventPlugin,
  GLOBAL_HANDLER,
  GlobalEventPlugin,
  LongtapEvent,
  NG_EVENT_PLUGINS,
  OptionsEventPlugin,
  PreventEventPlugin,
  ResizePlugin,
  SelfEventPlugin,
  StopEventPlugin,
  ThrottleEventPlugin,
  TimedEventPlugin,
  ZonelessPlugin,
  asCallable,
  provideEventPlugins,
  shouldCall
};
//# sourceMappingURL=@taiga-ui_event-plugins.js.map
