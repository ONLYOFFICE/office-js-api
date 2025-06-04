// This example gets a type of ApiBullet class and inserts it into the document.

// How to get a ApiBullet class type name.

// Create a bullet and then display its class type.

let doc = Api.GetDocument();
let bullet = Api.CreateBullet("- ");
let type = bullet.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("The ApiBullet class type: " + type);