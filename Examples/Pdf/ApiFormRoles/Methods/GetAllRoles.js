// View all user roles defined for the form in a PDF.

// How do I see every role that can fill form fields in a PDF?

// List all the role names in their filling order in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

let textField = Api.CreateTextField([10, 10, 300, 32]);
page.AddObject(textField);
textField.SetValue(roles.GetAllRoles().map(function(role, index) {
    return (index + 1) + ": " + role;
}).join(", "));