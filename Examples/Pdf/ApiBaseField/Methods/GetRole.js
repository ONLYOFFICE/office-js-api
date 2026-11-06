// Get the role of a form field in a PDF.

// Fields that are not attached to any role belong to the default role in a PDF.

// Display the role of a field before and after assigning it in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);

let defaultRole = textField.GetRole();
textField.SetRole("Customer");
textField.SetValue("Role: " + defaultRole + " -> " + textField.GetRole());