// This example sets a sequence of custom tab stops which will be used for any tab characters in the paragraph.

// Add tabs to the paragraph.

// Create a text in a paragraph and add tab stops to it.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 5 inches right");