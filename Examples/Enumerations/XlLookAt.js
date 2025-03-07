// This example specify that the whole text match will be searched in the range.

// How to indicate how the text should be searched.

// Search a whole text from a range.

let searchRange = range.Find( { What: "200", After: oWorksheet.GetRange("B1"), LookIn: "xlValues", LookAt: "xlWhole",	SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true } );