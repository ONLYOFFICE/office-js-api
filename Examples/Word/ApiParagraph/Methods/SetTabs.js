// Define custom tab stop positions for a paragraph in a document.

// How do I set specific horizontal positions where tab characters jump to in a paragraph in a document?

// Align text at precise column positions by placing tab stops in a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
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