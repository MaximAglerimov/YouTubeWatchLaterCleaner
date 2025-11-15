import { delayMs } from "helpers";
import { DomMenu, IMenu } from "models";

export interface IVideoPane {
  element: Element;
  getTitle(): string | null;
  getMenu(): Promise<IMenu | null>;
}

export class DomVideoPane implements IVideoPane {
  constructor(public element: Element) {}

  getTitle(): string | null {
    const titleElement = this.element.querySelector("a#video-title");
    if (titleElement == null) {
      return null;
    }

    return (titleElement as HTMLElement).innerText;
  }

  async getMenu(): Promise<IMenu | null> {
    const menuButtonElement = this.element.querySelector("yt-icon-button");
    if (menuButtonElement == null) {
      return null;
    }

    (menuButtonElement as HTMLButtonElement).click();
    await delayMs(30);

    const menuElement = document.querySelector("tp-yt-paper-listbox#items");
    if (menuElement == null) {
      return null;
    }

    return new DomMenu(menuElement);
  }
}
