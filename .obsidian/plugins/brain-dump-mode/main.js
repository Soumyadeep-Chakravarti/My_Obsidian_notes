/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => BrainDumpMode
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/constants.ts
var SECOND_IN_MS = 1e3;
var MINUTE_IN_MS = 60 * SECOND_IN_MS;

// src/speed-meter.ts
var SpeedMeter = class {
  constructor(window2 = SECOND_IN_MS) {
    this.wordTimestamps = [];
    this.window = window2;
  }
  collectTypeEvt() {
    const currentTime = Date.now();
    this.wordTimestamps.push(currentTime);
  }
  getTpm() {
    const multipleForMinute = MINUTE_IN_MS / this.window;
    const diff = Date.now() - this.window;
    this.wordTimestamps = this.wordTimestamps.filter(
      (timestamp) => timestamp > diff
    );
    const wordsInLastSeconds = this.wordTimestamps.length;
    return wordsInLastSeconds * multipleForMinute;
  }
  setWindow(window2) {
    this.window = window2;
  }
};

// src/status-bar-manager.ts
var StatusBarManager = class {
  constructor(el, targetSpeed = 500) {
    this.el = el;
    this.targetSpeed = targetSpeed;
  }
  resetView() {
    this.updateStatusBar(`\u{1F3CA}~~~~~~~~~~|\u{1F988}: 0 types/min`);
  }
  updateView(speed) {
    this.updateStatusBar(
      `${this.renderSharkChasingSwimmer(
        this.targetSpeed,
        speed
      )}: ${speed} types/min`
    );
  }
  renderSharkChasingSwimmer(targetSpeed, speed) {
    const shark = "\u{1F988}";
    const aliveSwimmer = "\u{1F3CA}\u200D\u2642\uFE0F";
    const deadSwimmer = "\u{1FA78}";
    const wave = "~";
    const totalDistance = 10;
    const speedPercentage = speed / targetSpeed * 100;
    const distance = speedPercentage > 100 ? totalDistance : Math.round(speedPercentage / totalDistance);
    const swimmer = distance === 0 ? deadSwimmer : aliveSwimmer;
    return `${swimmer}${wave.repeat(distance)}${shark}${wave.repeat(
      totalDistance - distance
    )}`;
  }
  setTargetSpeed(speed) {
    this.targetSpeed = speed;
  }
  updateStatusBar(text) {
    var _a;
    (_a = this.el) == null ? void 0 : _a.setText(text);
  }
};

// src/setting-tab.ts
var import_obsidian = require("obsidian");
var BrainDumpSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Enable brain dump mode").setDesc("If turned on, delete key will be disabled").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.noBackspaceMode.enabled).onChange(async (value) => {
        this.plugin.setBackspaceDisabled(value);
      })
    );
    new import_obsidian.Setting(containerEl).setName("Enable shark mode").setDesc("Escape from the shark by typing fast \u{1F988}").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.sharkMode.enabled).onChange(async (value) => {
        this.plugin.setSharkModeEnabled(value);
      })
    );
    new import_obsidian.Setting(containerEl).setName("Your speed goal (minute)").setDesc("How fast can you type?").addSlider(
      (slider) => slider.setLimits(0, 2e3, 50).setValue(this.plugin.settings.sharkMode.speedGoal).setDynamicTooltip().onChange(async (value) => {
        this.plugin.setTargetSpeed(value);
      })
    );
    new import_obsidian.Setting(containerEl).setName("Speed measure window (milliseconds)").setDesc("Lower, the harder.").addSlider(
      (slider) => slider.setLimits(500, 1500, 500).setValue(this.plugin.settings.sharkMode.tpmWindow).setDynamicTooltip().onChange(async (value) => {
        this.plugin.setWindow(value);
      })
    );
  }
};

// main.ts
var DEFAULT_SETTINGS = {
  noBackspaceMode: {
    enabled: false
  },
  sharkMode: {
    enabled: false,
    speedGoal: 1e3,
    tpmWindow: SECOND_IN_MS
  }
};
var BrainDumpMode = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.lastSnapshot = void 0;
    this.isBrainDumpModeOn = false;
  }
  async onload() {
    this.settings = await { ...DEFAULT_SETTINGS, ...await this.loadData() };
    this.speedMeter = new SpeedMeter(this.settings.sharkMode.tpmWindow);
    this.statusBarManager = new StatusBarManager(this.addStatusBarItem());
    this.addRibbonIcon(
      "train-front",
      // https://lucide.dev/icons/
      "Activate Brain Dump Mode",
      (evt) => {
        this.toggleBrainDumpMode();
      }
    );
    this.addCommand({
      id: "toggle-brain-dump-mode",
      name: "Activate",
      callback: () => {
        this.toggleBrainDumpMode();
      }
    });
    this.addSettingTab(new BrainDumpSettingTab(this.app, this));
    this.registerDomEvent(document, "keydown", (evt) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (this.settings.sharkMode.enabled) {
        this.speedMeter.collectTypeEvt();
      }
      if (this.settings.noBackspaceMode.enabled) {
        if (evt.key === "ArrowLeft" || evt.key === "ArrowUp") {
          (_b = (_a = this.app.workspace.activeEditor) == null ? void 0 : _a.editor) == null ? void 0 : _b.setCursor(
            Number.MAX_SAFE_INTEGER
          );
          this.noticeBrainDumpModeIsOn();
          return;
        }
        if (evt.key === "Backspace" || evt.key === "Delete") {
          (_d = (_c = this.app.workspace.activeEditor) == null ? void 0 : _c.editor) == null ? void 0 : _d.setValue(
            `${this.lastSnapshot}`
          );
          (_f = (_e = this.app.workspace.activeEditor) == null ? void 0 : _e.editor) == null ? void 0 : _f.setCursor(
            Number.MAX_SAFE_INTEGER
          );
          this.noticeBrainDumpModeIsOn();
          return;
        }
        const lastWord = evt.key === "Enter" ? "" : evt.key;
        this.lastSnapshot = `${(_h = (_g = this.app.workspace.activeEditor) == null ? void 0 : _g.editor) == null ? void 0 : _h.getValue()}${lastWord}`;
      }
    });
    this.registerInterval(
      window.setInterval(() => {
        if (this.settings.sharkMode.enabled) {
          const tpm = this.speedMeter.getTpm();
          this.statusBarManager.updateView(tpm);
        }
      }, 100)
    );
  }
  noticeBrainDumpModeIsOn() {
    new import_obsidian2.Notice(`Brain Dump Mode \u{1F525} Backspace DISABLED`);
  }
  toggleBrainDumpMode() {
    this.isBrainDumpModeOn = !this.isBrainDumpModeOn;
    this.setBackspaceDisabled(this.isBrainDumpModeOn);
    this.setSharkModeEnabled(this.isBrainDumpModeOn);
    this.saveSettings();
    this.showNoticeTurnedOn();
  }
  setBackspaceDisabled(newValue) {
    this.settings.noBackspaceMode.enabled = newValue;
    this.saveSettings();
  }
  setSharkModeEnabled(newValue) {
    this.settings.sharkMode.enabled = newValue;
    if (newValue == false) {
      this.statusBarManager.resetView();
    }
    this.saveSettings();
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  showNoticeTurnedOn() {
    new import_obsidian2.Notice(
      `Brain Dump Mode ${this.settings.noBackspaceMode.enabled ? "\u2705" : "\u274C"}`
    );
  }
  setTargetSpeed(speed) {
    this.settings.sharkMode.speedGoal = speed;
    this.statusBarManager.setTargetSpeed(speed);
  }
  setWindow(window2) {
    this.settings.sharkMode.tpmWindow = window2;
    this.speedMeter.setWindow(window2);
  }
};

/* nosourcemap */