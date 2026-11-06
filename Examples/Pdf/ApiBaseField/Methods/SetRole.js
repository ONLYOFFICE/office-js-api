// Assign a role to a form field to control who fills it in a PDF.

// How do I associate a form field with a specific role in a PDF?

// Restrict which participants are responsible for a given field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();
roles.Add("Manager", {"color": Api.RGB(255, 239, 191)});

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);

textField.SetRole("Manager");
textField.SetValue("Field role: " + textField.GetRole());