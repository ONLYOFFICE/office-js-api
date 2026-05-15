// Duplicate an existing date form and insert the copy into a document.

// How do I create an identical copy of a date form in a document?

// Reuse the same date field settings without reconfiguring them by copying the form in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
dateForm.SetTime(new Date().getTime());
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let copyDateForm = dateForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyDateForm);