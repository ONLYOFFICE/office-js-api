// This example gets a class type and inserts it into the document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let classType = section.GetClassType();
paragraph.AddText("Class Type = " + classType);