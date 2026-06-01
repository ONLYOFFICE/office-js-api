// Navigate upward to the containing node of an XML element in a spreadsheet.

// How do I find the parent node of an XML element in a spreadsheet?

// Traverse the XML hierarchy to identify where a node belongs in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<zoo>
	<animal species='Lion'>
		<name>Leo</name>
	</animal>
</zoo>`;
const xml = xmlManager.Add(xmlString);

const animalNode = xml.GetNodes('/zoo/animal')[0];
const parentNode = animalNode.GetParent();
const grandParent = parentNode.GetParent();

worksheet.GetRange('A1').SetValue('Parent node name: ' + parentNode.GetNodeName());
worksheet.GetRange('A2').SetValue('Grand parent: ' + grandParent);