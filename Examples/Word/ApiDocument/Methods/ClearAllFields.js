// This example clears all forms in the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
paragraph.AddLineBreak();
paragraph.AddElement(textForm);
document.ClearAllFields();
paragraph = Api.CreateParagraph();
paragraph.AddText("All fields from this document were just cleared.");
document.Push(paragraph);