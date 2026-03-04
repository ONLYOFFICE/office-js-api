// This example shows how to set the value of a custom XML node.

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
bookNode.SetNodeValue('<book>Updated content</book>');
worksheet.GetRange('A1').SetValue('XML after update:');
worksheet.GetRange('B1').SetValue(xml.GetXml());
