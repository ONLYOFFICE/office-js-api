// Retrieve the color assigned to a role in a document.

// How do I find out what color a role uses in a document?

// Check the color value for a specific role in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let color = roles.GetRoleColor("Customer");
let paragraph = doc.GetElement(0);
paragraph.AddText("Role color: rgb(" + color.r + ", " + color.g + ", " + color.b + ")");