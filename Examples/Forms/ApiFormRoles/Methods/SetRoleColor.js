// Assign a color to a role in a document.

// How do I apply a specific color to identify a role in a document?

// Change the color value for a role to customize its appearance in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.SetRoleColor("Customer", Api.RGB(198, 224, 179));
doc.InsertTextForm({
	key: "Name",
	role: "Customer",
	placeholder: "Enter your name"
});