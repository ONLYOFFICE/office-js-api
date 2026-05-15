// Access the currently highlighted cells and write a value into them in a spreadsheet.

// How do I work with whatever cells the user has selected at the moment in a spreadsheet?

// Fill the active selection with text without specifying a fixed address in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");