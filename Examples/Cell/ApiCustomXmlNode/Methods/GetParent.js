// Get the parent of a custom XML node in a spreadsheet.

// How to get the parent for a custom XML node in a spreadsheet?

// Get the parent and display the result in a spreadsheet.

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