# CreateHyperlink

Creates a new hyperlink text block to be inserted to the current paragraph or table.

## Syntax

```javascript
expression.CreateHyperlink(link, display, screenTipText);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| link | Required | string |  | The hyperlink address. |
| display | Required | string |  | The text to display the hyperlink. |
| screenTipText | Required | string |  | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## Example

This example creates hyperlink and pastes it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
paragraph.AddElement(hyperlink, 0);
paragraph.AddLineBreak();
paragraph.AddText("Class type of the created object: " + hyperlink.GetClassType());
```
