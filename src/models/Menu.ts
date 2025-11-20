import { DomButton, IButton } from "models";

export interface IMenu {
  element: Element;
  getDeleteButton(): IButton | null;
}

export class DomMenu implements IMenu {
  constructor(public element: Element) {}

  getDeleteButton(): IButton | null {
    let buttonElement = this.getByText(this.element);
    buttonElement ??= this.getByIcon(this.element);

    if (buttonElement == null) {
      return null;
    }

    return new DomButton(buttonElement);
  }

  private getByText(menuElement: Element): Element | null {
    const allElements = menuElement.querySelectorAll("tp-yt-paper-item");

    return Array.from(allElements).filter(
      (el) => (el as HTMLElement).innerText === "Remove from Watch later"
    )[0];
  }

  private getByIcon(menuElement: Element): Element | null {
    const allElements = menuElement.querySelectorAll(
      "tp-yt-paper-listbox#items > ytd-menu-service-item-renderer:nth-child(3)"
    );

    return allElements[0];
  }
}
