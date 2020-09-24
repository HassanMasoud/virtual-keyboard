const keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    onInput: null,
    onClose: null,
  },

  properties: {
    value: "",
    capsLock: false,
  },

  init() {
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    this.elements.main.classList.add("keyboard", "1keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboad__keys");

    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  _createKeys() {},

  _triggerEvent(handlerName) {
    console.log(`Event Triggered! Event Name: ${handlerName}`);
  },

  _toggleCapsLock() {
    console.log("Caps Lock Toggled");
  },

  open(initialValue, onInput, onClose) {},

  close() {},
};

window.addEventListener("DOMContentLoaded", () => keyboard.init());
