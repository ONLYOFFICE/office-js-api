// Obtain a range object from the current text selection in a document.

// How do I work with the currently selected text as a range in a document?

// Programmatically select a run and apply bold formatting through the resulting range in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("ONLYOFFICE Document Builder.");
paragraph.AddElement(run1);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers.");
paragraph.AddElement(run2);
run1.Select();
let range = doc.GetRangeBySelect();
range.SetBold(true);