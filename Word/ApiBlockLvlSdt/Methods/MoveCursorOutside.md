# MoveCursorOutside

Places a cursor before/after the current content control.

## Syntax

expression.MoveCursorOutside(isAfter);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | Optional | boolean | true | Specifies whether a cursor will be placed before (false) or after (true) the current content control. |

## Returns

This method doesn't return any data.

## Example



```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("The cursor will be placed after the current content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.MoveCursorOutside(true);
```
