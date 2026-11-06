// Retrieve the color assigned to a role in a PDF.

// How do I find out what color a role uses in a PDF?

// Check the color value for a specific role in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer", {"color": Api.RGB(198, 224, 179)});
let color = roles.GetRoleColor("Customer");

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);
textField.SetValue("Role color: #" + color.GetHex());