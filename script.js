/* side nav bar */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

console.clear();

var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector(textPath.getAttribute('href') );

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(pathLength);

function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset( scrollPercent * 2 * pathLength );
  });
}

window.addEventListener('scroll',onScroll);

function json(){
  const dfd = require("danfojs-node")
  json_data = [
    {
      "School": "Appalachian State University",
      "Tuition (In-state)": "$7,409.00",
      "Location": "Boone, NC",
      "Average SAT": "1100-1270",
      "Average ACT": "22-28",
      "Common App?": "TRUE",
      "Application Fee": "$65",
      "Campus Size": "Large",
      "Financial Aid Need Met %": "65.00%",
      "Admissions Rate": "69%",
      "Application Deadline": "February 1",
      "ED/EA": "EA",
      "ED/EA Deadline": "November 1",
      "Top Major": "Business/Marketing",
      "": ""
    },
    {
      "School": "East Carolina University",
      "Tuition (In-state)": "$7,238.00",
      "Location": "Greenville, NC",
      "Average SAT": "1040-1190",
      "Average ACT": "20-24",
      "Common App?": "TRUE",
      "Application Fee": "$75",
      "Campus Size": "Large",
      "Financial Aid Need Met %": "56.00%",
      "Admissions Rate": "79%",
      "Application Deadline": "March 1",
      "ED/EA": "-",
      "ED/EA Deadline": "-",
      "Top Major": "Health Professions",
      "": ""
    },
    {
      "School": "Elizabeth City State University",
      "Tuition (In-state)": "$3,260.00",
      "Location": "Elizabeth City, NC",
      "Average SAT": "880-1050",
      "Average ACT": "17-21",
      "Common App?": "FALSE",
      "Application Fee": "$30",
      "Campus Size": "Small",
      "Financial Aid Need Met %": "--%",
      "Admissions Rate": "66%",
      "Application Deadline": "March 15",
      "ED/EA": "-",
      "ED/EA Deadline": "-",
      "Top Major": "Business/Marketing",
      "": ""
    },
    {
      "School": "Fayetteville State University",
      "Tuition (In-state)": "$5,274.00",
      "Location": "Fayetteville, NC",
      "Average SAT": "870-1010",
      "Average ACT": "17-21",
      "Common App?": "FALSE",
      "Application Fee": "$50",
      "Campus Size": "Medium",
      "Financial Aid Need Met %": "--%",
      "Admissions Rate": "69%",
      "Application Deadline": "June 30",
      "ED/EA": "-",
      "ED/EA Deadline": "-",
      "Top Major": "Health Professions",
      "": ""
    },
    {
      "School": "NC A&T University",
      "Tuition (In-state)": "$6,657.00",
      "Location": "Greensboro, NC",
      "Average SAT": "970 - 1150",
      "Average ACT": "17-22",
      "Common App?": "TRUE",
      "Application Fee": "$60",
      "Campus Size": "Medium",
      "Financial Aid Need Met %": "61.00%",
      "Admissions Rate": "100%",
      "Application Deadline": "June 1",
      "ED/EA": "-",
      "ED/EA Deadline": "-",
      "Top Major": "Physical Sciences",
      "": ""
    },
    {
      "School": "NC Central University",
      "Tuition (In-state)": "$6,534.00",
      "Location": "Durham, NC",
      "Average SAT": "890-1050",
      "Average ACT": "17-19",
      "Common App?": "FALSE",
      "Application Fee": "$50",
      "Campus Size": "Medium",
      "Financial Aid Need Met %": "54.00%",
      "Admissions Rate": "68%",
      "Application Deadline": "August 1",
      "ED/EA": "-",
      "ED/EA Deadline": "-",
      "Top Major": "Security and Protective Services",
      "": ""
    },
    {
      "School": "NC State University",
      "Tuition (In-state)": "$9,101.00",
      "Location": "Raleigh, NC",
      "Average SAT": "1250-1420",
      "Average ACT": "27-32",
      "Common App?": "TRUE",
      "Application Fee": "$85",
      "Campus Size": "Large",
      "Financial Aid Need Met %": "--%",
      "Admissions Rate": "45%",
      "Application Deadline": "January 15",
      "ED/EA": "EA",
      "ED/EA Deadline": "November 1",
      "Top Major": "Engineering",
      "": ""
    },
    {
      "School": "UNC Asheville",
      "Tuition (In-state)": "$7,231.00",
      "Location": "Asheville, NC",
      "Average SAT": "1090-1270",
      "Average ACT": "22-27",
      "Common App?": "TRUE",
      "Application Fee": "$75",
      "Campus Size": "Medium",
      "Financial Aid Need Met %": "76.00%",
      "Admissions Rate": "84%",
      "Application Deadline": "August 1",
      "ED/EA": "ED",
      "ED/EA Deadline": "November 1",
      "Top Major": "Visual and Performing Arts",
      "": ""
    },
    {
      "School": "UNC Chapel Hill",
      "Tuition (In-state)": "$8,980.00",
      "Location": "Chapel Hill, NC",
      "Average SAT": "1310-1500",
      "Average ACT": "27-33",
      "Common App?": "TRUE",
      "Application Fee": "$85",
      "Campus Size": "Large",
      "Financial Aid Need Met %": "100.00%",
      "Admissions Rate": "23%",
      "Application Deadline": "January 15",
      "ED/EA": "EA",
      "ED/EA Deadline": "October 15",
      "Top Major": "Social Sciences",
      "": ""
    },
    {
      "School": "UNC Charlotte",
      "Tuition (In-state)": "$6,905.00",
      "Location": "Charlotte, NC",
      "Average SAT": "1120-1290",
      "Average ACT": "22-26",
      "Common App?": "TRUE",
      "Application Fee": "$75",
      "Campus Size": "Large",
      "Financial Aid Need Met %": "59.00%",
      "Admissions Rate": "65%",
      "Application Deadline": "June 1",
      "ED/EA": "EA",
      "ED/EA Deadline": "November 1",
      "Top Major": "Business/Marketing",
      "": ""
    },
    {
      "School": "UNC Greensboro",
      "Tuition (In-state)": "$7,403.00",
      "Location": "Greensboro, NC",
      "Average SAT": "1000-1160",
      "Average ACT": "19-24",
      "Common App?": "TRUE",
      "Application Fee": "$65",
      "Campus Size": "Large",
      "Financial Aid Need Met %": "66.00%",
      "Admissions Rate": "82%",
      "Application Deadline": "March 1",
      "ED/EA": "EA",
      "ED/EA Deadline": "December 1/January 15",
      "Top Major": "Business/Marketing",
      "": ""
    },
    {
      "School": "UNC Pembroke",
      "Tuition (In-state)": "$3,490.00",
      "Location": "Pembroke, NC",
      "Average SAT": "930-1080",
      "Average ACT": "17-21",
      "Common App?": "FALSE",
      "Application Fee": "$55",
      "Campus Size": "Medium",
      "Financial Aid Need Met %": "62.00%",
      "Admissions Rate": "85%",
      "Application Deadline": "May 1",
      "ED/EA": "-",
      "ED/EA Deadline": "-",
      "Top Major": "Business/Marketing",
      "": ""
    },
    {
      "School": "UNC School of the Arts",
      "Tuition (In-state)": "$9,358.00",
      "Location": "Winston Salem, NC",
      "Average SAT": "1090-1290",
      "Average ACT": "21-29",
      "Common App?": "FALSE",
      "Application Fee": "$95",
      "Campus Size": "Small",
      "Financial Aid Need Met %": "66.00%",
      "Admissions Rate": "29%",
      "Application Deadline": "March 15",
      "ED/EA": "-",
      "ED/EA Deadline": "-",
      "Top Major": "Visual and Performing Arts",
      "": ""
    },
    {
      "School": "UNC Wilmington",
      "Tuition (In-state)": "$7,181.00",
      "Location": "Wilmington, NC",
      "Average SAT": "1170-1320",
      "Average ACT": "22-27",
      "Common App?": "TRUE",
      "Application Fee": "$80",
      "Campus Size": "Medium",
      "Financial Aid Need Met %": "41.00%",
      "Admissions Rate": "65%",
      "Application Deadline": "February 1",
      "ED/EA": "EA",
      "ED/EA Deadline": "November 1",
      "Top Major": "Health Professions",
      "": ""
    },
    {
      "School": "Western Carolina University",
      "Tuition (In-state)": "$4,277.00",
      "Location": "Cullowhee, NC",
      "Average SAT": "1020-1180",
      "Average ACT": "20-25",
      "Common App?": "FALSE",
      "Application Fee": "$65",
      "Campus Size": "Medium",
      "Financial Aid Need Met %": "64.00%",
      "Admissions Rate": "43%",
      "Application Deadline": "March 1",
      "ED/EA": "EA",
      "ED/EA Deadline": "November 15",
      "Top Major": "Business/Marketing",
      "": ""
    },
    {
      "School": "Winston-Salem State University",
      "Tuition (In-state)": "$5,491.00",
      "Location": "Winston Salem, NC",
      "Average SAT": "890-1030",
      "Average ACT": "16-19",
      "Common App?": "FALSE",
      "Application Fee": "$50",
      "Campus Size": "Medium",
      "Financial Aid Need Met %": "--%",
      "Admissions Rate": "68%",
      "Application Deadline": "June 1",
      "ED/EA": "EA",
      "ED/EA Deadline": "December 1",
      "Top Major": "Health Professions",
      "": ""
    }
  ]
  df = new dfd.DataFrame(json_data)
  df.print()
}
