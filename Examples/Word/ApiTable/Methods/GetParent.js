// Access the document content that contains a table.

// The parent is the document content that holds the table.

// Navigate from a table up to its parent and add a caption paragraph next to it.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let parent = table.GetParent();
let caption = Api.CreateParagraph();
caption.AddText("The parent holds " + parent.GetElementsCount() + " elements.");
doc.Push(caption);
