// Collect the text of each inline content control with a document visitor.

// The InlineLevelSdtEnd hook is called after all the text inside an inline content control has been visited.

// Add two inline content controls and write the tag and text of each one into a new paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText("Invoice for ");
const customer = Api.CreateInlineLvlSdt();
customer.SetTag("customer");
customer.AddText("ONLYOFFICE");
paragraph.AddInlineLvlSdt(customer);
paragraph.AddText(", total ");
const total = Api.CreateInlineLvlSdt();
total.SetTag("total");
total.AddText("$250");
paragraph.AddInlineLvlSdt(total);

const entries = [];
let text = "";
const visitor = doc.GetDocumentVisitor();
visitor.InlineLevelSdt = function () {
	text = "";
	return false;
};
visitor.Text = function (piece) {
	text += piece;
};
visitor.InlineLevelSdtEnd = function (contentControl) {
	entries.push(contentControl.GetTag() + " = " + text);
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText(entries.join("; "));
doc.Push(result);