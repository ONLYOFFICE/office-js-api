// Get the worksheet that a page setup belongs to in a spreadsheet.

// How do I get back to the worksheet from its page setup object in a spreadsheet?

// Access the parent worksheet of a page setup to read or change other sheet settings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
let parent = pageSetup.GetParent();
parent.GetRange("A1").SetValue("Parent sheet: " + parent.GetName());
