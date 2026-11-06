// Create a new user role for form access control in a PDF.

// How do I add a new role that can fill form fields in a PDF?

// Define role names and colors that control who fills form fields in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller", {"color": Api.RGB(198, 224, 179)});

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);
textField.SetValue("Roles: " + roles.GetAllRoles().join(", "));