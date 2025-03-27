// This example checks if the content control is a form.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let isForm = inlineLvlSdt.IsForm();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first content control from this document is a form: " + isForm);
doc.Push(paragraph);