# SetStartPos

Sets the start position of the current range object.

## Syntax

```javascript
expression.SetStartPos(nPos);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number |  | Start position. |

## Returns

boolean

## Example

This example sets the start position of a given range object.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetStartPos(12);
range.SetBold(true);
```
