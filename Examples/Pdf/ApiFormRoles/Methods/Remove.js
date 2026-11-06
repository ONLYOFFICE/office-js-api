// Delete a role from a PDF.

// How do I remove a role that is no longer needed in a PDF?

// Remove a role, delegate its fields to another role and show the remaining roles in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);
textField.SetRole("Seller");

roles.Remove("Seller", "Customer");
textField.SetValue("Field role: " + textField.GetRole() + "; roles: " + roles.GetAllRoles().join(", "));