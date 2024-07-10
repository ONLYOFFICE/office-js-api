

# PasteSpecialOperation

The paste operation applied to the special paste operation.

## Type

String

## Properties

- "xlPasteSpecialOperationAdd"
- "xlPasteSpecialOperationDivide"  
- "xlPasteSpecialOperationMultiply"
- "xlPasteSpecialOperationNone"
- "xlPasteSpecialOperationSubtract" 



## Example

This example paste data with paste all option and add operation.

```javascript
oApiRange.PasteSpecial("xlPasteAll", "xlPasteSpecialOperationAdd");
```