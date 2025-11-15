import { delayMs } from "helpers";
import { VideoPaneParser } from "parsers";

export async function main() {
  console.log("Starting cleanup...");

  var videoPaneParser = new VideoPaneParser();

  try {
    var panes = videoPaneParser.parseFromDocument();

    for (const pane of panes) {
      const videoTitle = pane.getTitle();
      console.log("Removing video:", videoTitle);

      const menu = await pane.getMenu();
      const deleteButton = menu?.getDeleteButton();
      deleteButton?.click();

      await delayMs(100);
    }
  } catch (error) {
    console.error("Error in main:", error);
  }

  console.log("Cleanup finished.");
}
