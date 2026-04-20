# CLAUDE.md

## Project

ONLYOFFICE JavaScript API documentation and examples. Includes JSDoc definitions, code examples for Word/Cell/Slide/Pdf/Form APIs, and Chinese (zh-CN) translations.

## Example files rules

Each JS file in `Examples/` must have exactly **3 comment lines** separated by blank lines (lines 1, 3, 5), then a blank line before code starts at line 7:

```
// Comment 1: what the example does or the result.
<blank line>
// Comment 2: context, purpose, or related detail.
<blank line>
// Comment 3: specific action or expected outcome.
<blank line>
code here;
```

### Comment style

- Use **imperative or descriptive** form. Never use "How to...", "This example...", "In this example...", "Show how...", or similar phrasing.
- Each file's first comment serves as a **translation key** in `Translations/` zh-CN.json files (`Translations/Office/zh-CN.json`, `Translations/Plugins/Events/zh-CN.json`, `Translations/Plugins/Methods/zh-CN.json`). Changing it requires updating the key (and value if needed) in the corresponding translation file.
- First comments must be **unique** across all example files to avoid duplicate translation keys.

### Code style

- Do not include builder boilerplate (`builder.CreateFile`, `builder.SaveFile`, `builder.CloseFile`).
- Do not duplicate variable declarations (e.g. `var chart` declared twice).
- Do not add inline comments within the code section.
