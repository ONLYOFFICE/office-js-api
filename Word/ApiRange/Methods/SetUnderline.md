# SetUnderline

Specifies that the contents of the current Range are displayed along with a line appearing directly below the character(less than all the spacing above and below the characters on the line).

## Syntax

expression.SetUnderline(isUnderline);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies if the contents of the current Range are displayed underlined or not. |

## Returns

ApiRange, null

## Example

This example specifies that the contents of the current Range are displayed along with a line appearing directly below the character.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
oRange.SetUnderline(true);
```
