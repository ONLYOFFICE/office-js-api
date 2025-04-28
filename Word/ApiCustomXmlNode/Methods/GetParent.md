# GetParent

Returns the parent of the current custom XML node.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCustomXmlNode](../ApiCustomXmlNode.md) \| null 

## Example

This example shows how to get the parent of a custom XML node and display its value.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo>
    <animal species="Lion" id="101">
        <name>Leo</name>
        <age>5</age>
        <habitat>Savanna</habitat>
        <diet>Carnivore</diet>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let animalNode = xml.GetNodes('/zoo/animal')[0];
let rootNode = animalNode.GetParent();
let nullNode = rootNode.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText(`Root node name: ${rootNode.baseName}; parent of root node: ${nullNode}`);
doc.Push(paragraph);
```

