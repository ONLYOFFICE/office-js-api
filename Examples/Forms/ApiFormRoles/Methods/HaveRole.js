// Add new roles in a form document.

// How to have role for a form roles?

// Have role and display the result in a form document.

let doc = Api.GetDocument();
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