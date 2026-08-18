// Add Unicode code points with exact character widths to a document content object in a document.

// How do I append characters preserving their exact widths to a document content object in a document?

// Append the "Widths" word to the last paragraph so that every character keeps the width specified in millimeters.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("First sentence: ");
content.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
