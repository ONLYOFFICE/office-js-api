# SetColor

Sets the text color to the current text run in the RGB format.

## Syntax

```javascript
expression.SetColor(r, g, b, isAuto);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |
| isAuto | Optional | boolean | false | If this parameter is set to "true", then r,g,b parameters will be ignored. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text color for the current text run in the RGB format.

```javascript editor-docx
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetColor(255, 111, 61, false);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the color set to orange using the text properties.");
```
