// Check the class type returned by a section in a document.

// How do I check what type a section object is in a document?

// Retrieve and output the class type string for a section in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let classType = section.GetClassType();
paragraph.AddText("Class Type = " + classType);