# GetAttribute

Retrieves the value of an attribute from the custom XML part based on the given XPath.

## Syntax

```javascript
expression.GetAttribute(xPath, attributeName);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
xPath | Required | string |  | The XPath of the XML node from which to delete the attribute.
attributeName | Required | string |  | The name of the attribute to retrieve.

## Returns

string \| null

## Example

This example retrieves the value of the version attribute from the custom XML part.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example" version="1.0"></content>');
let version = xml.GetAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);
```
