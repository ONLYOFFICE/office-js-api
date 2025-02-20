# ReplaceTextSmart

Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

## Syntax

```javascript
expression.ReplaceTextSmart(textStrings, tab, newLine);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textStrings | Required | Array |  | An array of replacement strings. |
| tab | Optional | string | "\t" | A character which is used to specify the tab in the source text. |
| newLine | Optional | string | "\r\n" | A character which is used to specify the line break character in the source text. |

## Returns

This method doesn't return any data.

## Example

This example replaces text while preserving formatting and other things.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the normal text. ");
paragraph.AddText("The is bold text. ").SetBold(true);
paragraph.AddText("This is italic text.").SetItalic(true);

paragraph.GetRange().Select();
Api.ReplaceTextSmart(["This is the normal text. This bold text was smart replaced. This is italic text."]);
```
