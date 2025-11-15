import { DomVideoPane, IVideoPane } from "models";

export interface IVideoPaneParser {
  parseFromDocument(): IVideoPane[];
}

export class VideoPaneParser implements IVideoPaneParser {
  parseFromDocument(): IVideoPane[] {
    return this.extractPanes(document);
  }

  private extractPanes(doc: Document): IVideoPane[] {
    const paneElements = doc.querySelectorAll(
      "#contents ytd-playlist-video-renderer"
    );

    return Array.from(paneElements).map((el) => new DomVideoPane(el));
  }
}
