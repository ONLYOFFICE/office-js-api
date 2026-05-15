// Delete a role from a document.

// How do I remove a role that is no longer needed in a document?

// Eliminate a specific role and show the remaining roles in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
roles.Remove("Anyone");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});