// Combine multiple input fields into a single complex form field in a document.

// How do I create a form field that contains multiple parts in a document?

// Build a composite field that allows users to enter different types of data together in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({
	"key": "Email",
	"tip": "Email",
	"placeholder": "Start to fill complex form"
});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);