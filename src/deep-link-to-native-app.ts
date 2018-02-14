import { AppLauncherFactory } from './lib/AppLauncherFactory';

export class NativeAppLauncher {

  private Settings: any;
  constructor() {
    // Element.prototype.matches =
    //   Element.prototype.matches ||
    //   Element.prototype.matchesSelector ||
    //   Element.prototype.mozMatchesSelector ||
    //   Element.prototype.msMatchesSelector ||
    //   Element.prototype.oMatchesSelector ||
    //   Element.prototype.webkitMatchesSelector ||
    //   function (s) {
    //     var matches = (this.document || this.ownerDocument).querySelectorAll(s),
    //       i = matches.length;
    //     while (--i >= 0 && matches.item(i) !== this) { }
    //     return i > -1;
    //   };
  }
  init(settings: any) {
    this.Settings = settings;
    // Let all the page render finish.
    setTimeout(() => {
      return new AppLauncherFactory(this.Settings);
    }, 1000);
  }
  public browserChecker() {

  }
  public util() {

  }
  public androidParameters() {

  }
  public iOSParameters() {

  }
}
