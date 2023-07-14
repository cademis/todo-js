// events - a super-basic Javascript (publish subscribe) pattern

export let events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function (eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        fn(data);
      });
    }
  },
};

// an alternate pub sub function

// export function subscribe(eventClass, handler) {
//   let sugar = function (event) {
//     handler(...event.detail);
//   };
//   document.addEventListener(eventClass.name, sugar, { passive: true });
//   return {
//     unsubscribe: function unsubscribe() {
//       document.removeEventListener(eventClass.name, sugar);
//     },
//   };
// }

// export function publish(event) {
//   let nativeEvent = new CustomEvent(event.constructor.name, {
//     detail: event.args,
//   });
//   document.dispatchEvent(nativeEvent);
// }
