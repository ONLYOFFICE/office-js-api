// This example shows how to replace the XML content of a custom XML node.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book>
		<title>The Odyssey</title>
		<author>Homer</author>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);

const bookNode = xml.GetNodes('/bookstore/book')[0];
bookNode.SetXml('<book><title>New Book</title></book>');
worksheet.GetRange('A1').SetValue('XML after replacement:');
worksheet.GetRange('A2').SetValue(xml.GetXml());
