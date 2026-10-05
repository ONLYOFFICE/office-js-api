// Replace the content of a range with an equation.

// The equation source text can be given explicitly, or, if omitted, the range's own text is used instead.

// Replace a placeholder text range with an equation, then replace another range with an equation built from its own text.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("PLACEHOLDER");
doc.Push(paragraph);
let math = doc.GetMaths().ReplaceRange(paragraph.GetRange(0, "PLACEHOLDER".length), "y^2", "unicode");

paragraph = Api.CreateParagraph();
paragraph.AddText("a+b");
doc.Push(paragraph);
let mathFromRangeText = doc.GetMaths().ReplaceRange(paragraph.GetRange(0, "a+b".length));
