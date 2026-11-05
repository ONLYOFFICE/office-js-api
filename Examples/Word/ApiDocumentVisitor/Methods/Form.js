// List the keys and types of the forms in a document with a document visitor.

// The Form hook is called once for each form, and the traversal does not go inside forms.

// Add a text form and a check box form, then write their keys and types into a new paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const nameForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your name", "placeholder": "Your name"});
paragraph.AddElement(nameForm);
const agreementForm = Api.CreateCheckBoxForm({"key": "Agreement", "tip": "Accept the terms"});
paragraph.AddElement(agreementForm);

const forms = [];
const visitor = doc.GetDocumentVisitor();
visitor.Form = function (form) {
	forms.push(form.GetFormKey() + " (" + form.GetFormType() + ")");
};
visitor.Traverse();

const result = Api.CreateParagraph();
result.AddText("Forms: " + forms.join(", "));
doc.Push(result);