// This example shows how to get a range object by the selection.
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