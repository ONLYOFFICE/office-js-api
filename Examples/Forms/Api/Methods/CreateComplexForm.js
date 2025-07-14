// This example creates a complex form with the common complex form properties.

// How to create a complex form and add it to the paragraph.

// Add a complex form with the state options to the ApiDocument object.

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
