// Read the type label assigned to a section in a document.

// How do I find out what kind of object a section is in a document?

// Confirm the category of a section by checking its type identifier in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let classType = section.GetClassType();
paragraph.AddText("Class Type = " + classType);