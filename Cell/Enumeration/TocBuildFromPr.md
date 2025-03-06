# TocBuildFromPr

Table of contents properties which specify whether to generate the table of contents from the outline levels or the specified styles.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| OutlineLvls | number | Maximum number of levels in the table of contents. |
| StylesLvls | [TocStyleLvl](../Enumeration/TocStyleLvl.md)[] | Style levels (for example, [&#123;Name: "Heading 1", Lvl: 2&#125;, &#123;Name: "Heading 2", Lvl: 3&#125;]).\n💡 If StylesLvls.length &gt; 0, then the OutlineLvls property will be ignored. |


## Example

This example adds a table of contents which is generated from 9 outline levels to the document.

```javascript editor-xlsx
let tocBuildFromPr = {"OutlineLvls": 9};
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": tocBuildFromPr, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr);
```
