// Shift a role to a lower position in the fill order in a document.

// How do I change the order of roles to place one later in the sequence in a document?

// Reposition a role downward in the list and display the updated order in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
roles.Add("Seller");

// Make the selected role the last one to fill
while (roles.MoveDown("Customer"));

let paragraph = doc.GetElement(0);
let orderIndex = 1;
roles.GetAllRoles().forEach(role => {
    paragraph.AddText(orderIndex + ": ");
    paragraph.AddText(role);
    paragraph.AddLineBreak();
    orderIndex++;
});