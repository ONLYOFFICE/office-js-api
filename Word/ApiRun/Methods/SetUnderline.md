# SetUnderline

Specifies that the contents of the run are displayed along with a line appearing directly below the character
(less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies that the contents of the current run are displayed underlined. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies that the contents of the current run are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

```javascript
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetUnderline(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text underlined with a single line.");
```
