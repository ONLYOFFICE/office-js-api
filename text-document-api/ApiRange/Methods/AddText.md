# AddText

Adds a text to the specified position.

## Syntax

```javascript
expression.AddText(sText, sPosition);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | String |  | The text that will be added. |
| sPosition | Optional | string | "after" | The position where the text will be added ("before" or "after" the range specified). |

## Returns

boolean

## Example

This example adds a text to the specified position.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document");
let range = doc.GetRange(0, 7);
range.AddText("ONLYOFFICE ", "before");
range.AddText(" Builder", "after");
```
