// This example shows how to add new roles.
let doc = editor.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");
let paragraph = doc.GetElement(0);
["Customer", "CEO"].forEach(roleName => {
    if (roles.HaveRole(roleName)) {
        paragraph.AddText(roleName + " role is present in the form");
    } else {
        paragraph.AddText(roleName + " role is not present in the form");
    }
    paragraph.AddLineBreak();
});
