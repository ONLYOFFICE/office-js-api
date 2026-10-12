// Find text in a table by a string and by a regular expression, then bold the matches.

// Combine a keyword lookup across cells with a RegExp that matches every cell number.

// Bold the first keyword match, then bold each number found by the /\d+/g expression.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
table.GetCell(0, 2).GetContent().GetElement(0).AddText("Cell 3");
doc.Push(table);

let byKeyword = table.Search("Cell");
byKeyword[0].SetBold(true);

let byRegExp = table.Search(/\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
