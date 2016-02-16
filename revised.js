spreadsheetURL = "https://docs.google.com/spreadsheets/d/1eU5MVxA01hggvID2eX0Oa1SVTNUZo4AhDEKrjiSMDoA/edit#gid=0"

spreadsheetURL_jsonp = "https://spreadsheets.google.com/feeds/list/1eU5MVxA01hggvID2eX0Oa1SVTNUZo4AhDEKrjiSMDoA/od6/public/values?alt=json-in-script&callback=x"





Object.keys(json.feed.entry[0])
["id", "updated", "category", "title", "content", "link", "gsx$element", "gsx$percent"]
Object.keys(json.feed.entry[0]).length
8
Object.keys(json.feed.entry[0])[7]
"gsx$percent"
Object.keys(json.feed.entry[0])[7].slice(4)
"percent"