var config_data = `
{
	"title": "Scouting PASS 2023",
	"page_title": "Charged Up",
	"checkboxAs": "10",
	"prematch": [{
			"name": "Scouter Initials",
			"code": "s",
			"type": "scouter",
			"size": 5,
			"maxSize": 5,
			"required": "true"
		},
		{
			"name": "Varsity or JV",
			"code": "vjv",
			"type": "radio",
			"choices": {
				"0": "Junior Varsity<br>",
				"1": "Varsity<br>"
			},
			"defaultValue": "0"
		},
		{
			"name": "Event",
			"code": "e",
			"type": "event",
			"defaultValue": "2023inwla",
			"required": "true",
			"disabled": "true"
		},
		{
			"name": "Match Level",
			"code": "l",
			"type": "level",
			"choices": {
				"qm": "Quals<br>",
				"de": "Double Elimination<br>",
				"f": "Finals"
			},
			"defaultValue": "qm",
			"required": "true"
		},
		{
			"name": "Match #",
			"code": "m",
			"type": "match",
			"min": 1,
			"max": 100,
			"required": "true"
		},
		{
			"name": "Robot",
			"code": "r",
			"type": "robot",
			"choices": {
				"r1": "Red-1",
				"b1": "Blue-1<br>",
				"r2": "Red-2",
				"b2": "Blue-2<br>",
				"r3": "Red-3",
				"b3": "Blue-3"
			},
			"required": "true"
		},
		{
			"name": "Team #",
			"code": "t",
			"type": "team",
			"min": 1,
			"max": 99999
		},
		{
			"name": "Auto Start Position",
			"code": "as",
			"type": "clickable_image",
			"filename": "2023/field_image.png",
			"clickRestriction": "one",
			"shape": "circle 5 black red true"
		}
	],
	"auton": [{
			"name": "Auto Scoring",
			"code": "asg",
			"type": "clickable_image",
			"filename": "2023/grid_image.png",
			"dimensions": "9 4",
			"clickRestriction": "onePerBox",
			"toggleClick": "true",
			"showFlip": "false",
			"showUndo": "false",
			"shape": "circle 12 black red true"
		},
		{
			"name": "Attempted to place<br>Cube/Cone but missed",
			"code": "afl",
			"type": "counter"
		},
		{
			"name": "Exited Community?",
			"code": "am",
			"type": "bool"
		},
		{
			"name": "Charge Station",
			"code": "ad",
			"type": "radio",
			"choices": {
				"1": "Docked (not Engaged)(Not Balanced)<br>",
				"2": "Engaged (Balanced)<br>",
				"-1": "Attempted but failed (Fell off at end)<br>",
				"0": "Not attempted<br>"
			},
			"defaultValue": "0"
		}
	],
	"teleop": [{
			"name": "Grid Scoring",
			"code": "tsg",
			"type": "clickable_image",
			"filename": "2023/grid_image.png",
			"dimensions": "9 4",
			"clickRestriction": "onePerBox",
			"toggleClick": "true",
			"showFlip": "false",
			"showUndo": "false",
			"shape": "circle 12 black red true"
		},
		{
			"name": "Attempted to place<br>Cube/Cone but missed",
			"code": "tfl",
			"type": "counter"
		},
		{
			"name": "Dropped Cones (>2)<br>(when crossing field)",
			"code": "dc",
			"type": "bool"
		},
		{
			"name": "Shuttled Game Pieces<br>(Fed another bot)",
			"code": "tfc",
			"type": "counter"
		},
		{
			"name": "Was Fed<br>Game Pieces",
			"code": "wf",
			"type": "bool"
		},
		{
			"name": "Smart Placement<br>(creates Links)",
			"code": "lnk",
			"type": "bool"
		},
		{
			"name": "Floor Pickup",
			"code": "fpu",
			"type": "radio",
			"choices": {
				"2": "Cones<br>",
				"1": "Cubes<br>",
				"3": "Both<br>",
				"0": "Not Attempted<br>"
			},
			"defaultValue": "0"
		},
		{
			"name": "Single Substation Pickup",
			"code": "spu",
			"type": "radio",
			"choices": {
				"2": "Cones<br>",
				"1": "Cubes<br>",
				"3": "Both<br>",
				"0": "Not Attempted<br>"
			},
			"defaultValue": "0"
		},
		{
			"name": "Double Substation Pickup",
			"code": "dpu",
			"type": "radio",
			"choices": {
				"2": "Cones<br>",
				"1": "Cubes<br>",
				"3": "Both<br>",
				"0": "Not Attempted<br>"
			},
			"defaultValue": "0"
		},
		{
			"name": "Crosses Charge Station<br>to Enter/Exit Community?<br>",
			"code": "tcs",
			"type": "bool"
		},
		{
			"name": "Caused Traffic Jam<br>(Got in the way<br>of Alliance partner)",
			"code": "ttj",
			"type": "counter"
		},
		{
			"name": "Died/Immobilized",
			"code": "die",
			"type": "bool"
		},
		{
			"name": "More than 2 fouls?",
			"code": "ttf",
			"type": "bool"
		},
		{
			"name": "Yellow Card?",
			"code": "yc",
			"type": "bool"
		},
		{
			"name": "Red Card?",
			"code": "rc",
			"type": "bool"
		}
	],
	"endgame": [{
			"name": "Charge Station",
			"code": "fs",
			"type": "radio",
			"choices": {
				"1": "Docked (not Engaged)(Not Balanced)<br>",
				"2": "Engaged (Balanced)<br>",
				"-1": "Attempted but failed (Fell off at end)<br>",
				"0": "Not attempted<br>"
			},
			"defaultValue": "0"
		},
		{
			"name": "Total # of alliance<br>robots docked/engaged",
			"code": "dn",
			"type": "counter"
		}
	],
	"postmatch": [{
			"name": "Was Defended",
			"code": "wd",
			"type": "bool"
		},
		{
			"name": "Who Defended this bot",
			"code": "who",
			"type": "text"
		},
		{
			"name": "Driver Skill",
			"code": "ds",
			"type": "radio",
			"choices": {
				"0": "Not Effective<br>",
				"1": "Average<br>",
				"2": "Very Effective<br>"
			},
			"defaultValue": "-1"
		},
		{
			"name": "Comment on Driver skill",
			"code": "dsc",
			"type": "text",
			"size": 15,
			"maxSize": 25
		},
		{
			"name": "Defense Rating",
			"code": "dr",
			"type": "radio",
			"choices": {
				"1": "Below Average<br>",
				"2": "Average<br>",
				"3": "Good<br>",
				"4": "Excellent<br>",
				"0": "Did not play defense<br>"
			},
			"defaultValue": "0"
		},
		{
			"name": "Speed Rating",
			"code": "sr",
			"type": "radio",
			"choices": {
				"1": "Slow<br>",
				"2": "Average<br>",
				"3": "Fast<br>"
			},
			"defaultValue": "3"
		},
		{
			"name": "Was Driver Reckless:",
			"code": "drc",
			"type": "bool"
		},
		{
			"name": "Tippy<br>(almost tipped over)",
			"code": "tip",
			"type": "bool"
		},
		{
			"name": "Tipped over",
			"code": "tpd",
			"type": "bool"
		},
		{
			"name": "Comments",
			"code": "co",
			"type": "text",
			"size": 15,
			"maxSize": 50
		}
	]
}`;