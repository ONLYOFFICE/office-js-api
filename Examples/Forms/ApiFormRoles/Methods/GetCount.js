// Count how many user roles are set up for your form in a document.

// How do I find out how many roles exist in a document?

// Check the total number of roles that have been created in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(role);
    paragraph.AddLineBreak();
});
let numRoles = roles.GetCount();
paragraph.AddText("Number of roles: " + numRoles);