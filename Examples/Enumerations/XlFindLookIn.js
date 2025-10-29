// This example specify that the whole text match will be searched in the range.

// How to indicate from where the text should be searched.

// Search inside a range specifying which values to look in.

let searchRange = range.Find({
	What: "200",
	After: oWorksheet.GetRange("B1"),
	LookIn: "xlValues",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true
});
