# SetEndPos

Sets the end position of the current range object.

## Syntax

expression.SetEndPos(nPos);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number |  | End position. |

## Returns

boolean

## Example

This example sets the end position of a given range object.

```javascript
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
let oRange = oParagraph.GetRange();
oRange.SetEndPos(12);
oRange.SetBold(true);
```
