// Identify the object type of a form roles collection in a PDF.

// Useful for determining what kind of object this is in a PDF.

// Retrieve the classification name of the roles collection in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let roles = doc.GetFormRoles();

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(roles.GetClassType());