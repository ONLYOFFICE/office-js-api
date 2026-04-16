// Check the class type returned by a bullet in a document.

// How do I check what type a bullet object is in a document?

// Retrieve and output the class type string for a bullet in a document.

let doc = Api.GetDocument();
let bullet = Api.CreateBullet("- ");
let type = bullet.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("The ApiBullet class type: " + type);