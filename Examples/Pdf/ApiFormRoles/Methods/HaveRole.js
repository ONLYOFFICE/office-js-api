// Check if a role exists in a PDF.

// How do I verify whether a specific role is available in a PDF?

// Test for the presence of a role and display the result in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);
textField.SetValue("Customer: " + roles.HaveRole("Customer") + ", CEO: " + roles.HaveRole("CEO"));