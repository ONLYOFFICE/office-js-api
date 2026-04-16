// Get the color of role in a form document.

// How do I get the role color in a form document?

// Get the role color using a form roles object.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let color = roles.GetRoleColor("Customer");
let paragraph = doc.GetElement(0);
paragraph.AddText("Role color: rgb(" + color.r + ", " + color.g + ", " + color.b + ")");