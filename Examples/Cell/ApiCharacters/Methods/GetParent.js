// This example shows how to get the parent object of the specified characters.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let parent = characters.GetParent();
parent.SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));