// Assign a role to a date form in a document.

// How do I assign a role to a date form in a document?

// Restrict form access by linking it to a named role in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
roles.Add("Customer");
dateForm.SetRole("Customer");
let role = dateForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);