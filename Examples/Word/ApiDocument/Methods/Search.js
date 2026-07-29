// Search a document by a string and by a regular expression, then bold the matched ranges.

// Combine a plain keyword search with a RegExp search that matches every numbered label.

// Bold the second keyword match, then bold each label found by the /№\d+/g expression.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is paragraph №2.");
doc.Push(paragraph);

let byKeyword = doc.Search("paragraph");
byKeyword[1].SetBold(true);

let byRegExp = doc.Search(/№\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
