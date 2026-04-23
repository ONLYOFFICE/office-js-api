// Remove a child element from stored XML data in a spreadsheet.

// How do I cut out an unwanted XML node from custom data saved in a spreadsheet?

// Prune a specific branch of an XML structure to keep only the relevant content in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<content>
	<text>example_text</text>
	<extra>remove me</extra>
</content>`;
const xml = xmlManager.Add(xmlString);

xml.DeleteElement('/content/extra');
worksheet.GetRange('A1').SetValue('XML after deletion: ' + xml.GetXml());