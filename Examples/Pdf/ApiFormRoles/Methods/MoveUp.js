// Shift a role to a higher position in the fill order in a PDF.

// How do I change the order of roles to place one earlier in the sequence in a PDF?

// Make a role the first one to fill and display the updated order in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

while (roles.MoveUp("Seller"));

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);
textField.SetValue("Fill order: " + roles.GetAllRoles().join(", "));