// Find out the class type of a bullet object in a document.

// How can I get the class type of a bullet in a document?

// Get the class type of a bullet and display it in the document.

let doc = Api.GetDocument();
let bullet = Api.CreateBullet("- ");
let type = bullet.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("The ApiBullet class type: " + type);