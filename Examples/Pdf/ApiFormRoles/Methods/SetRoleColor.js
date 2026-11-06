// Assign a color to a role in a PDF.

// How do I apply a specific color to identify a role in a PDF?

// Change the role color to highlight the fields of this role in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.SetRoleColor("Customer", Api.RGB(198, 224, 179));

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetRole("Customer");
textField.SetValue("Customer field");