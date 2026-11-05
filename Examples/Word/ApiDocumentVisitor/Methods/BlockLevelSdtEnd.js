// Count the paragraphs inside and outside block content controls with a document visitor.

// The BlockLevelSdt and BlockLevelSdtEnd hooks enclose the content of a content control.

// Add a plain paragraph and a content control with two paragraphs, then write both counts into a new paragraph.

const doc = Api.GetDocument();
doc.GetElement(0).AddText("A plain paragraph.");
const contentControl = Api.CreateBlockLvlSdt();
contentControl.GetContent().GetElement(0).AddText("The first paragraph in the content control.");
const second = Api.CreateParagraph();
second.AddText("The second paragraph in the content control.");
contentControl.GetContent().Push(second);
doc.Push(contentControl);

let depth = 0;
let inside = 0;
let outside = 0;
const visitor = doc.GetDocumentVisitor();
visitor.BlockLevelSdt = function () {
	depth += 1;
	return false;
};
visitor.BlockLevelSdtEnd = function () {
	depth -= 1;
};
visitor.Paragraph = function () {
	if (depth > 0)
		inside += 1;
	else
		outside += 1;
	return true;
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText("Paragraphs inside content controls: " + inside + ", outside: " + outside);
doc.Push(result);