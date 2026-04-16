// Get the custom tab stops of the current paragraph in a document.

// Get the tab stops of the paragraph and display their positions in the document.

// How to get the tab stops of the paragraph properties object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Left tab (1 inch)");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Center tab (3 inches)");
let tabs = paraPr.GetTabs();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Tab count: " + tabs.length + ", first tab: " + tabs[0].Pos + " twips (" + tabs[0].Val + ")");
doc.Push(paragraph2);