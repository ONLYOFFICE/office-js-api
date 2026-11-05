// List the tags of the inline content controls in a document with a document visitor.

// The InlineLevelSdt hook receives each inline content control inside a paragraph.

// Add two tagged inline content controls to a paragraph and write their tags into a new paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText("Dear ");
const name = Api.CreateInlineLvlSdt();
name.SetTag("name");
name.AddText("John Smith");
paragraph.AddInlineLvlSdt(name);
paragraph.AddText(", your order ");
const order = Api.CreateInlineLvlSdt();
order.SetTag("order");
order.AddText("No. 1024");
paragraph.AddInlineLvlSdt(order);
paragraph.AddText(" has been shipped.");

const tags = [];
const visitor = doc.GetDocumentVisitor();
visitor.InlineLevelSdt = function (contentControl) {
	tags.push(contentControl.GetTag());
	return true;
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText("Inline content control tags: " + tags.join(", "));
doc.Push(result);