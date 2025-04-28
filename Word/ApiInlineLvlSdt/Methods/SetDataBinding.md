# SetDataBinding

Sets the data binding for the inline content control.

## Syntax

```javascript
expression.SetDataBinding(oApiDataBinding);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiDataBinding  | Required | [ApiDataBinding](../../ApiDataBinding/ApiDataBinding.md) |  | The data binding object to associate with the content control. |

## Returns

boolean

## Example

This example shows how to set data binding for an inline content control.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let id = xmlManager.Add(xmlText).id;
let blockLvl = Api.CreateBlockLvlSdt();
doc.InsertContent([blockLvl]);
let dataBinding = Api.CreateDataBinding('xmlns:pic="http://example.com/picture"', id, '/pic:documentData/pic:text');
blockLvl.SetDataBinding(dataBinding);
```