# GetRange

Returns a Range object that represents the document part contained in the specified range.

## Syntax

```javascript
expression.GetRange(Start, End);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | Optional | Number | 0 | Start position index in the current range. |
| End | Optional | Number | -1 | End position index in the current range (if &lt;= 0, then the range is taken to the end). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get a Range object that represents the document part contained in the specified range.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 24);
range1.SetBold(true);
let range2 = range1.GetRange(0, 9);
range2.SetItalic(true);
```
