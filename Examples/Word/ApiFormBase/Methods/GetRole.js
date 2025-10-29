// This example show how to get the role of a form element.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const roles = doc.GetFormRoles();
const rolePr = { "color": "#ffefbf" };
roles.Add("MY_ROLE", rolePr);

const textForm = Api.CreateTextForm({
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
});
paragraph.AddElement(textForm);

textForm.SetRole("MY_ROLE");
const role = textForm.GetRole();

paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
