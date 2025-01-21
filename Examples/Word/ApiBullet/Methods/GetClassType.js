// This example gets a type of ApiBullet class and inserts it into the document.
let document = Api.GetDocument();
let bullet = Api.CreateBullet("- ");
let type = bullet.GetClassType();
let paragraph = document.GetElement(0);
paragraph.AddText("The ApiBullet class type: " + type);