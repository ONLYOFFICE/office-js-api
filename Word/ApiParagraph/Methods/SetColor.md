# SetColor

Sets the text color to the current paragraph in the RGB format.

## Syntax

```javascript
expression.SetColor(r, g, b, isAuto);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |
| isAuto | Optional | boolean | false | If this parameter is set to "true", then r,g,b parameters will be ignored. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example sets the text color to the current paragraph in the RGB format.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font color set to orange.");
paragraph.SetColor(255, 111, 61);
```
