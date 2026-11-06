// Retrieve the collection of form roles in a PDF.

// How do I manage the roles that fill form fields in a PDF?

// Add roles to the collection and list their names in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);
textField.SetValue("Roles: " + roles.GetAllRoles().join(", "));