// This example gets a type of ApiBullet class and inserts it into the document.
let doc = Api.GetDocument();
let bullet = Api.CreateBullet("- ");
let type = bullet.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("The ApiBullet class type: " + type);