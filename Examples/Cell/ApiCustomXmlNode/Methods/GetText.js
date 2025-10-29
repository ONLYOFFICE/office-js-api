// This example shows how to get the text content of a custom XML node.

// How to retrieve text content from custom XML node elements.

// Get text from message node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Message: " + text);