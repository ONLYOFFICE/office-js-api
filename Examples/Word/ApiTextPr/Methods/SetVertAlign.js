// This example specifies the alignment which will be applied to the contents of the current run in relation to the default appearance of the text run.

// How to set vertical alignment of a text object.

// Create a text run object, specify its vertical alignment as "baseline", "subscript" or "superscript".

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
let myNewRunStyle1 = doc.CreateStyle("My New Run Style 1", "run");
let textPr1 = myNewRunStyle1.GetTextPr();
textPr1.SetVertAlign("subscript");
run = Api.CreateRun();
run.SetStyle(myNewRunStyle1);
run.AddText("This is a text run with the text aligned below the baseline vertically. ");
paragraph.AddElement(run);
let myNewRunStyle2 = doc.CreateStyle("My New Run Style 2", "run");
let textPr2 = myNewRunStyle2.GetTextPr();
textPr2.SetVertAlign("baseline");
run = Api.CreateRun();
run.SetStyle(myNewRunStyle2);
run.AddText("This is a text run with the text aligned by the baseline vertically. ");
paragraph.AddElement(run);
let myNewRunStyle3 = doc.CreateStyle("My New Run Style 3", "run");
let textPr3 = myNewRunStyle3.GetTextPr();
textPr3.SetVertAlign("superscript");
run = Api.CreateRun();
run.SetStyle(myNewRunStyle3);
run.AddText("This is a text run with the text aligned above the baseline vertically.");
paragraph.AddElement(run);