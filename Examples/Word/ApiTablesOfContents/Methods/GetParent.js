// Get the document that owns the tables of contents collection.

// Obtain the tables of contents collection from the current document.

// Return the parent document that the collection belongs to.

let doc = Api.GetDocument();
let tablesOfContents = doc.GetTablesOfContents();
let parent = tablesOfContents.GetParent();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Parent class type: " + parent.GetClassType());
doc.Push(resultParagraph);
