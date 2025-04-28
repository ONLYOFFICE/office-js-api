# LoadFromDataBinding

Loads the value from the data binding of the inline content control.

## Syntax

```javascript
expression.LoadFromDataBinding();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example demonstrates how to load data from Custom XML into an inline content control using data binding.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let xml = xmlManager.Add(xmlText);
let blockLvl = Api.CreateBlockLvlSdt();
doc.InsertContent([blockLvl]);
let dataBinding = Api.CreateDataBinding('xmlns:pic="http://example.com/picture"', xml.id, '/pic:documentData/pic:text');
blockLvl.SetDataBinding(dataBinding);
let nodes = xml.GetNodes('/pic:documentData/pic:text');
let node = nodes[0];
node.SetText('987');
blockLvl.LoadFromDataBinding();
```