# Add

Creates a child node for the current XML node.

## Syntax

```javascript
expression.Add(nodeName);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
nodeName | Required | string |  | The name of the new child node to be created.

## Returns

[ApiCustomXmlNode](../ApiCustomXmlNode.md)

## Example

This example shows how to create a new child node and insert it as a child of the current XML node.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example"><text>example_text</text></content>');
let rootNode = xml.GetNodes('/content')[0];
let textNode = rootNode.Add('text');
let classType = textNode.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);
```

