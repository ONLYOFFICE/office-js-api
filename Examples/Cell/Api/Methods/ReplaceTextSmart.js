// This example replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

// Replace string values of the selected range with a new values.

// Replace cell string values with a new ones.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:A2");
range.Select();
Api.ReplaceTextSmart(["Cell 1", "Cell 2"]);