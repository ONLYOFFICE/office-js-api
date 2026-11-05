// List the tags of the block content controls in a document with a document visitor.

// The BlockLevelSdt hook receives each block content control, and returning true skips its content.

// Add two tagged content controls and write their tags into a new paragraph.

const doc = Api.GetDocument();
const address = Api.CreateBlockLvlSdt();
address.SetTag("address");
address.GetContent().GetElement(0).AddText("Company address");
doc.Push(address);
const phone = Api.CreateBlockLvlSdt();
phone.SetTag("phone");
phone.GetContent().GetElement(0).AddText("Phone number");
doc.Push(phone);

const tags = [];
const visitor = doc.GetDocumentVisitor();
visitor.BlockLevelSdt = function (contentControl) {
	tags.push(contentControl.GetTag());
	return true;
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText("Content control tags: " + tags.join(", "));
doc.Push(result);