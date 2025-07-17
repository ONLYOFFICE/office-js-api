// This example shows how to get the picture position inside the current form.

// How to get a picture position.

// Get the image position in the picture form and display it in the document.

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