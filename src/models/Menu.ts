import { DomButton, IButton } from "./Button";

export interface IMenu {
  element: Element;
  getDeleteButton(): IButton | null;
}

export class DomMenu implements IMenu {
  constructor(public element: Element) {}

  getDeleteButton(): IButton | null {
    const allElements = this.element.querySelectorAll("tp-yt-paper-item");

    const buttonElement = Array.from(allElements).filter(
      (el) => (el as HTMLElement).innerText === "Remove from Watch later"
    )[0];
    if (buttonElement == null) {
      return null;
    }

    return new DomButton(buttonElement);
  }
}
