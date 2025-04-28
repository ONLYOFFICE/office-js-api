# UpdateElement

Updates an existing XML element in the custom XML part based on the provided XPath.

## Syntax

```javascript
expression.(sXPath, sNewXml);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
sXPath | Required | string |  | The XPath expression used to identify the XML element to update.
sNewXml | Required | string |  | The new XML content that will replace the existing element at the specified XPath.

## Returns

boolean

## Example

This example shows how to update an XML element in a custom XML part.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example"><text>example_text</text></content>');
xml.UpdateElement('/content', '<newContent>text</newContent>');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);
```
