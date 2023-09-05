# XlNumberFormat

This format specifies whether a number in the cell should be treated like number, currency, date, time, etc. or just like text. All category have some different formats.

## Type

String

## Properties

- "General" - General
- "0.00" - Number
- "$#,##0.00" - Currency
- "_($* #,##0.00_)" - Accounting
- "m/d/yyyy" - DateShort
- "[$-F800]dddd, mmmm dd, yyyy" - DateLong
- "[$-F400]h:mm:ss AM/PM" - Time
- "0.00%" - Percentage
- "0%" - Percent
- "# ?/?" - Fraction
- "0.00E+00" - Scientific
- "@" - Text/Custom

## Example

This example sets "General" number format for the range.

```javascript
oWorksheet.GetRange("A2").SetNumberFormat("General");
```