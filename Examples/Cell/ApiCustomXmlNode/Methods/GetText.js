// Read the plain text stored inside an XML element in a spreadsheet.

// How do I extract readable text from an XML node in a spreadsheet?

// Pull out the human-readable content of an XML entry in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Message: " + text);