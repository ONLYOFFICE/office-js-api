# InsertAttribute

Inserts an attribute to the XML node at the specified XPath.

## Syntax

```javascript
expression.InsertAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
xPath | Required | string |  | The XPath of the node where the new attribute will be inserted.
attributeName | Required | string |  | The name of the attribute to insert.
value | Required | string |  | The value of the attribute to insert.

## Returns

boolean

## Example

This example shows how to insert an attribute into a custom XML node.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example"></content>');
let insertionSuccess = xml.InsertAttribute('/content', 'version', '1.0');
let version = xml.GetAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);
```
