// Retrieve the list of user roles assigned to form fields in a document.

// How do I see what roles have access to form fields in a document?

// Access the role management system to view form permissions in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});