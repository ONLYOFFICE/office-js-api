# ReplaceTextSmart

Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

## Syntax

expression.ReplaceTextSmart(arrString, sParaTab, sParaNewLine);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrString | Required | Array |  | An array of replacement strings. |
| sParaTab | Optional | string | " " | A character which is used to specify the tab in the source text. |
| sParaNewLine | Optional | string | " " | A character which is used to specify the line break character in the source text. |

## Returns

boolean