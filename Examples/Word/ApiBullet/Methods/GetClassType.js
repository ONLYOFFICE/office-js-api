// Identify the class type of a bullet object used in a document.

// How do I find out what kind of object a bullet is in a document?

// Verify that a bullet belongs to the expected object category before processing it in a document.

let doc = Api.GetDocument();
let bullet = Api.CreateBullet("- ");
let type = bullet.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("The ApiBullet class type: " + type);