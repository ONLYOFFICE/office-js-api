// Get the text content of a custom XML node in a spreadsheet.

// How to retrieve text content from custom XML node elements in a spreadsheet.

// Get text from message node in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Message: " + text);