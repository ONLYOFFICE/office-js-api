# SetEndPos

Sets the end position of the current range object.

## Syntax

```javascript
expression.SetEndPos(nPos);
```

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
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetEndPos(12);
range.SetBold(true);
```
