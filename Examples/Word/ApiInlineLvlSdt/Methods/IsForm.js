// Determine whether an inline content control belongs to a form in a document.

// How do I find out whether an inline content control is part of a form in a document?

// Separate form-bound controls from standalone controls to apply different processing rules in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let isForm = inlineLvlSdt.IsForm();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first content control from this document is a form: " + isForm);
doc.Push(paragraph);