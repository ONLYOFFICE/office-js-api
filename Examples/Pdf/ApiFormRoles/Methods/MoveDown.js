// Shift a role to a lower position in the fill order in a PDF.

// How do I change the order of roles to place one later in the sequence in a PDF?

// Make a role the last one to fill and display the updated order in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

while (roles.MoveDown("Customer"));

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);
textField.SetValue("Fill order: " + roles.GetAllRoles().join(", "));