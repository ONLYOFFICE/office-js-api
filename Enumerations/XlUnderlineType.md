# XlUnderlineType

Specifies the type of the line displayed under the characters.

## Type

String

## Properties

- "none" - for no underlining;
- "single" - for a single line underlining the cell contents;
- "singleAccounting" - for a single line underlining the cell contents but not protruding beyond the cell borders;
- "double" - for a double line underlining the cell contents;
- "doubleAccounting" - for a double line underlining the cell contents but not protruding beyond the cell borders.

## Example

This example sets underline "single" for the range.

```javascript
oWorksheet.GetRange("A2").SetUnderline("single");
```