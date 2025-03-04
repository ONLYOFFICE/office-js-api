# SetUnderline

Specifies that the contents of the current Range are displayed along with a line appearing directly below the character(less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies if the contents of the current Range are displayed underlined or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example specifies that the contents of the current Range are displayed along with a line appearing directly below the character.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetUnderline(true);
```
