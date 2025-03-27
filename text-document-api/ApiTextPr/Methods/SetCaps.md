# SetCaps

Specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

## Syntax

```javascript
expression.SetCaps(isCaps);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | boolean |  | Specifies that the contents of the current run are displayed capitalized. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.

```javascript editor-docx
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text set to capital letters using the text properties.");
```
