// Count how many user roles are set up for the form in a PDF.

// How do I find out how many roles exist in a PDF?

// Check the total number of roles that have been created in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue("Number of roles: " + roles.GetCount());