# SectionBreaks

The section break type.

## Type

String

## Properties

- "nextPage" - page section breaks (the default if type is not specified), which begin the new section on the following page.
- "oddPage" - page section breaks, which begin the new section on the next odd-numbered page.
- "evenpage" - page section breaks, which begin the new section on the next even-numbered page.
- "continuous" - section breaks, which begin the new section on the following paragraph. This means that continuous section breaks might not specify certain page-level section properties, since they shall be inherited from the following section. These breaks, however, can specify other section properties, such as line numbering and footnote/endnote settings.
- "nextColumn" - section breaks, which begin the new section on the next column on the page.

## Example

This example sets section break type "continuous".

```javascript
oSection.SetType("continuous");
```