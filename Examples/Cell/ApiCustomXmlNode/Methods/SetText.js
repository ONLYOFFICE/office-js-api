// This example shows how to set the text content of a custom XML node.

// How to update text content in custom XML node elements.

// Set text for message node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message></message>");
let messageNode = xml.GetNodes('/message')[0];
messageNode.SetText("Updated message from CustomXml!");
let updatedText = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Updated message: " + updatedText);