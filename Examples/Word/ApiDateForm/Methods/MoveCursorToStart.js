// Move the cursor to the start of a date form in a document.

// The cursor is placed inside the date form. Use the MoveCursorOutside method to place it before or after the form.

// Place the cursor before the first character of the date.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetDate(new Date());
dateForm.MoveCursorToStart();
