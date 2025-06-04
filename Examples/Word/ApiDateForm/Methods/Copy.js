// This example copies the form.

// How to create the same date form.

// Create two same date forms to the document separated by a line break.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
dateForm.SetTime(new Date().getTime());
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let copyDateForm = dateForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyDateForm);