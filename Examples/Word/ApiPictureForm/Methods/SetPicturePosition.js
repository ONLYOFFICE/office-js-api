// This example sets the picture position inside the form.

// How to move the picture inside the form.

// Specify the picture position of the form.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
pictureForm.SetPicturePosition(70, 70);
let position = pictureForm.GetPicturePosition();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture position: ");
paragraph.AddLineBreak();
for (let i = 0; i < position.length; i++ ){
	let shift = position[i];
	paragraph.AddText("" + shift);
	paragraph.AddLineBreak();
}
doc.Push(paragraph);