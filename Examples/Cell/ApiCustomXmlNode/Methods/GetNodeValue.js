// Read the stored value of a specific XML node in a spreadsheet.

// How do I retrieve what value is saved inside an XML node in a spreadsheet?

// Extract a node's raw value to inspect embedded data in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<zoo>
	<animal species='Lion'>
		<name>Leo</name>
		<age>5</age>
	</animal>
</zoo>`;
const xml = xmlManager.Add(xmlString);

const animalNode = xml.GetNodes('/zoo/animal')[0];
const nodeValue = animalNode.GetNodeValue();
worksheet.GetRange('A1').SetValue('Node value: ' + nodeValue);