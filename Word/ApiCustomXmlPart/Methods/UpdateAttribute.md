# UpdateAttribute

Updates the value of an existing attribute in the XML node at the specified XPath.

## Syntax

```javascript
expression.UpdateAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
xPath | Required | string |  | The XPath of the node containing the attribute to update.
attributeName | Required | string |  | The name of the attribute to update.
value | Required | string |  | The new value to assign to the attribute.

## Returns

boolean

## Example

This example shows how to update the value of an attribute in a custom XML node.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example" version="1.0"></content>');
xml.UpdateAttribute('/content', 'version', '2.0');
let version = xml.GetAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);
```
