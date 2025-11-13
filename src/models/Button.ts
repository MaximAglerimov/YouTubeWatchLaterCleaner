export interface IButton {
  element: Element;
  click(): void;
}

export class DomButton implements IButton {
  constructor(public element: Element) {}

  click(): void {
    (this.element as HTMLButtonElement).click();
  }
}
