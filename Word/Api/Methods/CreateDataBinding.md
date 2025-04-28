# CreateDataBinding

Creates a new ApiDataBinding that can be used to link content controls to specific nodes within custom XML parts.

## Syntax

```javascript
expression.CreateDataBinding(prefixMappings, storeItemId, xPath);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
prefixMappings | Required | string |  | A space-separated string of namespace declarations needed for XPath resolution. |
storeItemId | Required | string |  | The ID of the specific custom XML part. |
xPath | Required | string |  | The XPath to the XML node that should be bound. |

## Returns

[ApiDataBinding](../../ApiDataBinding/ApiDataBinding.md)

## Example

This example demonstrates how to create a data binding for a block-level content control.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlParts = doc.GetCustomXmlParts();
let xml = xmlParts.Add('<root xmlns="http://example.com"><data>Value</data></root>');
let dataBinding = Api.CreateDataBinding(
    'xmlns:ns="http://example.com"',
    xml.GetId(),
    "/ns:root/ns:data"
);
let paragraph = Api.CreateParagraph();
let sdt = Api.CreateBlockLvlSdt(paragraph);
sdt.SetDataBinding(dataBinding);
doc.AddElement(0, sdt);
```
