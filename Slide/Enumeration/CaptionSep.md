# CaptionSep

Possible values for the caption separator.**"hyphen"** - the "-" punctuation mark.**"period"** - the "." punctuation mark.**"colon"** - the ":" punctuation mark.**"longDash"** - the "—" punctuation mark.**"dash"** - the "-" punctuation mark.

## Type

Enumeration

## Values

- "hyphen"
- "period"
- "colon"
- "longDash"
- "dash"


## Example

This example add a caption with a hyphen as a numbering separator to the paragraph.

```javascript editor-pptx
paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
```
