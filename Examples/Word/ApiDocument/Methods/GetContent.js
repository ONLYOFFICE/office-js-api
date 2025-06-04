// This example shows how to get an array of document elements from the document.

// Retrieve each document element.

// Update properties of document elements knowing their order position.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This paragraph is the first document element.");
doc.AddElement(0, paragraph);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.AddElement(1, table);
paragraph = Api.CreateParagraph();
paragraph.AddText("This table is the second document element.");
let cell = table.GetCell(0,0);
table.AddElement(cell, 0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This block text content control is the third document element.");
doc.AddElement(2, blockLvlSdt);
let docElements = doc.GetContent(false);
docElements[0].SetBold(true);
docElements[1].SetBackgroundColor(255, 111, 61, false);
docElements[2].Search("block text content control")[0].SetBold(true);