// Check what type of object represents a custom XML node in a spreadsheet.

// How do I confirm the category of an XML node object before processing it in a spreadsheet?

// Verify the identity of an XML node to ensure it is the expected kind before using it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo>
    <animal species="Lion" id="101">
        <name>Leo</name>
        <age>5</age>
        <habitat>Savanna</habitat>
        <diet>Carnivore</diet>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo/animal')[0];
let classType = node.GetClassType();
worksheet.GetRange("A1").SetValue("Class type of the node: " + classType);