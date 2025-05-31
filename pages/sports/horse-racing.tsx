"use client";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const horseRaces = [
 {
  track: "Cheltenham",
  countryCode: "gb",
  raceTime: "13:30",
  raceName: "Novices' Hurdle",
  runners: [
    { number: 1, name: "Galloping Glory", jockey: "R. Johnson", trainer: "P. Nicholls", form: "112", odds: "3/1" },
    { number: 2, name: "Midnight Storm", jockey: "B. Frost", trainer: "D. Skelton", form: "134", odds: "9/2" },
    { number: 3, name: "River Dancer", jockey: "A. Coleman", trainer: "N. Henderson", form: "221", odds: "7/2" },
    { number: 4, name: "Celtic Charge", jockey: "T. Scudamore", trainer: "J. O'Brien", form: "413", odds: "11/2" },
    { number: 5, name: "Thunder Rock", jockey: "H. Cobden", trainer: "F. Murphy", form: "3F1", odds: "13/2" },
    { number: 6, name: "Sunset Flyer", jockey: "S. Bowen", trainer: "O. Murphy", form: "P21", odds: "15/2" },
  ],
},
{
  track: "Cheltenham",
  countryCode: "gb",
  raceTime: "14:05",
  raceName: "Mares' Handicap Hurdle",
  runners: [
    { number: 1, name: "Elegant Grace", jockey: "L. Morgan", trainer: "A. King", form: "312", odds: "4/1" },
    { number: 2, name: "Crimson Touch", jockey: "G. Sheehan", trainer: "W. Greatrex", form: "411", odds: "7/2" },
    { number: 3, name: "Magic Flame", jockey: "T. Bellamy", trainer: "E. Lavelle", form: "534", odds: "6/1" },
    { number: 4, name: "Velvet Rain", jockey: "J. Moore", trainer: "G. Moore", form: "122", odds: "9/2" },
    { number: 5, name: "Sky Breeze", jockey: "D. Bass", trainer: "K. Bailey", form: "341", odds: "11/2" },
  ],
},
{
  track: "Cheltenham",
  countryCode: "gb",
  raceTime: "14:40",
  raceName: "Cross Country Chase",
  runners: [
    { number: 1, name: "Iron Duke", jockey: "S. Quinlan", trainer: "N. Twiston-Davies", form: "212", odds: "5/1" },
    { number: 2, name: "Green Giant", jockey: "R. Patrick", trainer: "O. Sherwood", form: "323", odds: "6/1" },
    { number: 3, name: "Hunter's Spirit", jockey: "B. Hughes", trainer: "M. Hammond", form: "133", odds: "4/1" },
    { number: 4, name: "Brave Soul", jockey: "H. Bannister", trainer: "A. Honeyball", form: "241", odds: "9/2" },
    { number: 5, name: "Storm Voyage", jockey: "F. Gillard", trainer: "D. Pipe", form: "522", odds: "11/2" },
    { number: 6, name: "Dark Whisper", jockey: "T. Cannon", trainer: "L. Morgan", form: "31F", odds: "13/2" },
  ],
},
{
  track: "Cheltenham",
  countryCode: "gb",
  raceTime: "15:15",
  raceName: "Supreme Novices' Chase",
  runners: [
    { number: 1, name: "Quickfire Jet", jockey: "T. Scudamore", trainer: "B. Pauling", form: "1P2", odds: "7/2" },
    { number: 2, name: "Steel Horizon", jockey: "J. Burke", trainer: "G. Elliott", form: "232", odds: "4/1" },
    { number: 3, name: "Golden Tracker", jockey: "A. Coleman", trainer: "J. Snowden", form: "113", odds: "3/1" },
    { number: 4, name: "Westward Gale", jockey: "K. Woods", trainer: "L. Wadham", form: "125", odds: "11/2" },
    { number: 5, name: "Noble Flame", jockey: "R. Mania", trainer: "S. Crawford", form: "344", odds: "13/2" },
  ],
},
{
  track: "Cheltenham",
  countryCode: "gb",
  raceTime: "15:50",
  raceName: "Stayers' Hurdle Trial",
  runners: [
    { number: 1, name: "Endless Echo", jockey: "P. Brennan", trainer: "F. O'Brien", form: "145", odds: "5/1" },
    { number: 2, name: "Rogue Leader", jockey: "S. Wadge", trainer: "L. Russell", form: "3P1", odds: "4/1" },
    { number: 3, name: "Silent Thunder", jockey: "D. Noonan", trainer: "A. Carroll", form: "F12", odds: "7/2" },
    { number: 4, name: "Mystic Ember", jockey: "C. Gethings", trainer: "T. R George", form: "422", odds: "6/1" },
    { number: 5, name: "Blue Mirage", jockey: "G. Sheehan", trainer: "N. Gifford", form: "223", odds: "11/2" },
  ],
},
{
  track: "Aintree",
  countryCode: "gb",
  raceTime: "14:10",
  raceName: "Steeple Chase Challenge",
  runners: [
    { number: 1, name: "Bold Runner", jockey: "D. Jacob", trainer: "W. Mullins", form: "115", odds: "5/1" },
    { number: 2, name: "Fast Horizon", jockey: "H. Cobden", trainer: "G. Elliott", form: "142", odds: "4/1" },
    { number: 3, name: "Nightfall", jockey: "N. de Boinville", trainer: "T. George", form: "123", odds: "6/1" },
    { number: 4, name: "Iron Wind", jockey: "B. Hughes", trainer: "J. Ferguson", form: "11P", odds: "9/2" },
    { number: 5, name: "Stonebreaker", jockey: "A. Lynch", trainer: "N. Meade", form: "232", odds: "11/2" },
  ],
},
{
  track: "Aintree",
  countryCode: "gb",
  raceTime: "14:45",
  raceName: "Novices’ Hurdle",
  runners: [
    { number: 1, name: "Golden Streak", jockey: "T. Cannon", trainer: "A. King", form: "221", odds: "3/1" },
    { number: 2, name: "Shadow Flight", jockey: "D. Bass", trainer: "K. Bailey", form: "314", odds: "9/2" },
    { number: 3, name: "Crimson Tide", jockey: "S. Bowen", trainer: "O. Murphy", form: "144", odds: "5/1" },
    { number: 4, name: "Ocean Echo", jockey: "J. Burke", trainer: "D. Skelton", form: "153", odds: "11/2" },
    { number: 5, name: "Rapid Rush", jockey: "B. Hughes", trainer: "N. Twiston-Davies", form: "262", odds: "13/2" },
  ],
},
{
  track: "Aintree",
  countryCode: "gb",
  raceTime: "15:20",
  raceName: "2m Handicap Chase",
  runners: [
    { number: 1, name: "Thunder Blast", jockey: "H. Cobden", trainer: "P. Nicholls", form: "11F", odds: "5/2" },
    { number: 2, name: "Midnight Ember", jockey: "J. Moore", trainer: "G. Moore", form: "134", odds: "4/1" },
    { number: 3, name: "Valley Pride", jockey: "D. Jacob", trainer: "E. Lavelle", form: "231", odds: "3/1" },
    { number: 4, name: "Strike Gold", jockey: "T. Scudamore", trainer: "N. Richards", form: "FP3", odds: "7/1" },
    { number: 5, name: "Arctic Raider", jockey: "J. Bowen", trainer: "B. Pauling", form: "362", odds: "8/1" },
  ],
},
{
  track: "Aintree",
  countryCode: "gb",
  raceTime: "15:55",
  raceName: "Veterans Handicap Chase",
  runners: [
    { number: 1, name: "Master Shadow", jockey: "B. Hughes", trainer: "S. Smith", form: "132", odds: "10/3" },
    { number: 2, name: "Old Rebel", jockey: "S. Quinlan", trainer: "L. Morgan", form: "244", odds: "9/2" },
    { number: 3, name: "Grey Gamble", jockey: "H. Bannister", trainer: "C. Longsdon", form: "21P", odds: "5/1" },
    { number: 4, name: "River Blaze", jockey: "D. McMenamin", trainer: "B. Haslam", form: "F32", odds: "11/2" },
    { number: 5, name: "Whispering Wind", jockey: "R. Mania", trainer: "S. Crawford", form: "132", odds: "6/1" },
    { number: 6, name: "Knight Raider", jockey: "J. Quinlan", trainer: "T. Vaughan", form: "752", odds: "15/2" },
  ],
},
{
  track: "Aintree",
  countryCode: "gb",
  raceTime: "16:30",
  raceName: "3m Novices' Hurdle",
  runners: [
    { number: 1, name: "Fire Warrior", jockey: "J. Andrews", trainer: "N. King", form: "211", odds: "7/2" },
    { number: 2, name: "Heavy Stride", jockey: "G. Sheehan", trainer: "R. Phillips", form: "1F2", odds: "4/1" },
    { number: 3, name: "Rolling Thunder", jockey: "A. Coleman", trainer: "M. Harris", form: "123", odds: "6/1" },
    { number: 4, name: "Dust Devil", jockey: "F. Gillard", trainer: "D. Pipe", form: "331", odds: "9/2" },
    { number: 5, name: "Final Bullet", jockey: "T. Bellamy", trainer: "R. Fahey", form: "P12", odds: "11/2" },
  ],
},
 {
  track: "Punchestown",
  countryCode: "ie",
  raceTime: "15:20",
  raceName: "Grand Hurdle Final",
  runners: [
    { number: 1, name: "Emerald King", jockey: "R. Power", trainer: "H. de Bromhead", form: "321", odds: "3/1" },
    { number: 2, name: "Lucky Charm", jockey: "J. Townend", trainer: "W. Mullins", form: "122", odds: "9/4" },
    { number: 3, name: "Sky Dancer", jockey: "D. Russell", trainer: "G. Cromwell", form: "245", odds: "11/2" },
    { number: 4, name: "Ocean Flame", jockey: "M. Walsh", trainer: "E. McNamara", form: "P12", odds: "8/1" },
    { number: 5, name: "Tornado Edge", jockey: "S. Flanagan", trainer: "M. Halford", form: "F31", odds: "13/2" },
    { number: 6, name: "Ballymore Lad", jockey: "K. Brouder", trainer: "J. O'Brien", form: "16P", odds: "10/1" },
  ],
},
{
  track: "Punchestown",
  countryCode: "ie",
  raceTime: "15:55",
  raceName: "Novice Chase",
  runners: [
    { number: 1, name: "River Legend", jockey: "P. Townend", trainer: "W. Mullins", form: "113", odds: "5/2" },
    { number: 2, name: "Bold Venture", jockey: "D. Jacob", trainer: "G. Elliott", form: "132", odds: "3/1" },
    { number: 3, name: "Midnight Flash", jockey: "S. Flanagan", trainer: "N. Meade", form: "621", odds: "11/2" },
    { number: 4, name: "Echo Storm", jockey: "J. O’Keeffe", trainer: "J. Motherway", form: "P34", odds: "8/1" },
    { number: 5, name: "Whiskey Rebel", jockey: "B. Cooper", trainer: "M. Brassil", form: "153", odds: "6/1" },
    { number: 6, name: "Frostline", jockey: "J. Moore", trainer: "H. de Bromhead", form: "F42", odds: "9/1" },
  ],
},
{
  track: "Punchestown",
  countryCode: "ie",
  raceTime: "16:30",
  raceName: "2m Handicap Hurdle",
  runners: [
    { number: 1, name: "Storm Flyer", jockey: "K. Brouder", trainer: "C. Byrnes", form: "231", odds: "4/1" },
    { number: 2, name: "Quick Answer", jockey: "R. Power", trainer: "J. Nash", form: "453", odds: "11/2" },
    { number: 3, name: "Green Flash", jockey: "P. Townend", trainer: "W. Mullins", form: "1F1", odds: "9/4" },
    { number: 4, name: "Silent Mirage", jockey: "D. Russell", trainer: "G. Cromwell", form: "42P", odds: "7/1" },
    { number: 5, name: "Copper Tide", jockey: "L. Dempsey", trainer: "D. Hughes", form: "624", odds: "6/1" },
    { number: 6, name: "Rebel Ruler", jockey: "B. Hayes", trainer: "P. Nolan", form: "753", odds: "8/1" },
  ],
},
{
  track: "Punchestown",
  countryCode: "ie",
  raceTime: "17:05",
  raceName: "Maiden Hurdle (4yo+)",
  runners: [
    { number: 1, name: "Magic Steel", jockey: "M. Walsh", trainer: "J. O'Brien", form: "233", odds: "7/2" },
    { number: 2, name: "Celtic Fire", jockey: "K. Brouder", trainer: "H. de Bromhead", form: "312", odds: "4/1" },
    { number: 3, name: "Brave Dash", jockey: "R. Power", trainer: "W. Mullins", form: "451", odds: "9/2" },
    { number: 4, name: "Neon Spirit", jockey: "D. Russell", trainer: "G. Cromwell", form: "F43", odds: "11/2" },
    { number: 5, name: "Hidden Surge", jockey: "S. Flanagan", trainer: "G. Elliott", form: "P12", odds: "5/1" },
    { number: 6, name: "Top Valley", jockey: "B. Cooper", trainer: "M. Halford", form: "624", odds: "13/2" },
  ],
},
{
  track: "Punchestown",
  countryCode: "ie",
  raceTime: "17:40",
  raceName: "3m Handicap Chase",
  runners: [
    { number: 1, name: "Golden Crown", jockey: "P. Townend", trainer: "W. Mullins", form: "114", odds: "7/2" },
    { number: 2, name: "Bold Crusader", jockey: "D. Jacob", trainer: "G. Elliott", form: "F12", odds: "9/2" },
    { number: 3, name: "Misty River", jockey: "R. Power", trainer: "H. de Bromhead", form: "4P1", odds: "5/1" },
    { number: 4, name: "Steel Nation", jockey: "S. Flanagan", trainer: "N. Meade", form: "623", odds: "6/1" },
    { number: 5, name: "Longshot Lad", jockey: "K. Brouder", trainer: "J. Motherway", form: "P52", odds: "8/1" },
    { number: 6, name: "Valiant Strike", jockey: "D. Russell", trainer: "P. Nolan", form: "751", odds: "10/1" },
  ],
},
 {
  track: "Curragh",
  countryCode: "ie",
  raceTime: "16:05",
  raceName: "Flat Maiden Stakes",
  runners: [
    { number: 1, name: "Rising Star", jockey: "S. Foley", trainer: "J. Bolger", form: "321", odds: "4/1" },
    { number: 2, name: "True Valor", jockey: "C. Keane", trainer: "D. Weld", form: "145", odds: "5/1" },
    { number: 3, name: "Battle Cry", jockey: "W. Lee", trainer: "J. Oxx", form: "213", odds: "9/2" },
    { number: 4, name: "Kingdom Rise", jockey: "L. Roche", trainer: "D. Kearney", form: "622", odds: "6/1" },
    { number: 5, name: "Mystic Wind", jockey: "G. Carroll", trainer: "M. Halford", form: "44F", odds: "13/2" },
    { number: 6, name: "Storm Gate", jockey: "R. Whelan", trainer: "J. Harrington", form: "3P3", odds: "7/1" },
  ],
},
{
  track: "Curragh",
  countryCode: "ie",
  raceTime: "16:40",
  raceName: "3yo Fillies Handicap",
  runners: [
    { number: 1, name: "Silver Glory", jockey: "W. Lordan", trainer: "A. O'Brien", form: "142", odds: "9/2" },
    { number: 2, name: "Velvet Queen", jockey: "C. Keane", trainer: "G. Lyons", form: "1P1", odds: "4/1" },
    { number: 3, name: "Twilight Echo", jockey: "B. Coen", trainer: "A. McGuinness", form: "2F3", odds: "6/1" },
    { number: 4, name: "Crystal Light", jockey: "S. Foley", trainer: "J. Harrington", form: "624", odds: "11/2" },
    { number: 5, name: "Midnight Rain", jockey: "R. Whelan", trainer: "D. Weld", form: "345", odds: "13/2" },
  ],
},
{
  track: "Curragh",
  countryCode: "ie",
  raceTime: "17:15",
  raceName: "1m 2f Conditions Stakes",
  runners: [
    { number: 1, name: "Ocean Spirit", jockey: "G. Carroll", trainer: "M. Halford", form: "112", odds: "3/1" },
    { number: 2, name: "Golden Empress", jockey: "K. Manning", trainer: "J. Bolger", form: "1P2", odds: "9/2" },
    { number: 3, name: "King’s Court", jockey: "W. Lee", trainer: "P. Twomey", form: "145", odds: "5/1" },
    { number: 4, name: "Bold Adventure", jockey: "C. Hayes", trainer: "D. Kearney", form: "233", odds: "6/1" },
    { number: 5, name: "Nova Light", jockey: "B. Coen", trainer: "A. McGuinness", form: "7F1", odds: "13/2" },
  ],
},
{
  track: "Curragh",
  countryCode: "ie",
  raceTime: "17:50",
  raceName: "6f Sprint Handicap",
  runners: [
    { number: 1, name: "Blazing Soul", jockey: "S. Foley", trainer: "J. Harrington", form: "1P1", odds: "4/1" },
    { number: 2, name: "Rapid Assault", jockey: "C. Keane", trainer: "G. Lyons", form: "422", odds: "5/1" },
    { number: 3, name: "Grey Storm", jockey: "R. Whelan", trainer: "D. Weld", form: "453", odds: "11/2" },
    { number: 4, name: "Lucky Punch", jockey: "G. Carroll", trainer: "M. Halford", form: "314", odds: "9/2" },
    { number: 5, name: "Shadow Fire", jockey: "W. Lee", trainer: "P. Twomey", form: "541", odds: "6/1" },
  ],
},
{
  track: "Curragh",
  countryCode: "ie",
  raceTime: "18:25",
  raceName: "7f Rated Race",
  runners: [
    { number: 1, name: "Royal Crest", jockey: "C. Hayes", trainer: "G. Lyons", form: "123", odds: "7/2" },
    { number: 2, name: "Emerald Knight", jockey: "K. Manning", trainer: "J. Bolger", form: "44P", odds: "5/1" },
    { number: 3, name: "Frosty Ridge", jockey: "S. Foley", trainer: "J. Harrington", form: "1P2", odds: "4/1" },
    { number: 4, name: "Lunar Echo", jockey: "W. Lordan", trainer: "A. O'Brien", form: "513", odds: "11/2" },
    { number: 5, name: "Dream Mission", jockey: "R. Whelan", trainer: "D. Weld", form: "432", odds: "6/1" },
  ],
},

{
  track: "Leopardstown",
  countryCode: "ie",
  raceTime: "16:45",
  raceName: "1m Handicap",
  runners: [
    { number: 1, name: "Steel Curtain", jockey: "C. Hayes", trainer: "G. Lyons", form: "312", odds: "7/2" },
    { number: 2, name: "Golden Mist", jockey: "K. Manning", trainer: "J. Bolger", form: "4P1", odds: "9/2" },
    { number: 3, name: "Black River", jockey: "S. Foley", trainer: "H. Rogers", form: "228", odds: "6/1" },
    { number: 4, name: "Echo Flame", jockey: "B. Coen", trainer: "A. McGuinness", form: "131", odds: "5/1" },
    { number: 5, name: "Silent Runner", jockey: "D. McMonagle", trainer: "J. O'Brien", form: "F43", odds: "11/2" },
  ],
},
{
  track: "Leopardstown",
  countryCode: "ie",
  raceTime: "17:15",
  raceName: "7f Maiden Stakes",
  runners: [
    { number: 1, name: "Electric Dream", jockey: "C. Keane", trainer: "D. Weld", form: "451", odds: "4/1" },
    { number: 2, name: "Moonlit Way", jockey: "S. Foley", trainer: "J. Harrington", form: "2P2", odds: "5/1" },
    { number: 3, name: "Starlight Runner", jockey: "W. Lee", trainer: "P. Twomey", form: "534", odds: "13/2" },
    { number: 4, name: "Dream Architect", jockey: "G. Carroll", trainer: "M. Halford", form: "7P1", odds: "7/1" },
    { number: 5, name: "Ocean Banner", jockey: "L. Roche", trainer: "J. Bolger", form: "923", odds: "6/1" },
  ],
},
{
  track: "Leopardstown",
  countryCode: "ie",
  raceTime: "17:45",
  raceName: "1m 2f Handicap",
  runners: [
    { number: 1, name: "Crimson River", jockey: "R. Whelan", trainer: "J. Oxx", form: "331", odds: "9/2" },
    { number: 2, name: "Glory Tide", jockey: "D. McMonagle", trainer: "J. O'Brien", form: "154", odds: "5/1" },
    { number: 3, name: "Sharp Shot", jockey: "K. Brouder", trainer: "D. Kearney", form: "1P2", odds: "6/1" },
    { number: 4, name: "Irish Dawn", jockey: "C. Hayes", trainer: "G. Lyons", form: "22P", odds: "7/2" },
    { number: 5, name: "Night Arrow", jockey: "B. Coen", trainer: "A. McGuinness", form: "342", odds: "11/2" },
  ],
},
{
  track: "Leopardstown",
  countryCode: "ie",
  raceTime: "18:15",
  raceName: "6f Sprint",
  runners: [
    { number: 1, name: "Quick Reflex", jockey: "S. Foley", trainer: "J. Harrington", form: "213", odds: "4/1" },
    { number: 2, name: "Red Dragon", jockey: "W. Lee", trainer: "J. Oxx", form: "325", odds: "9/2" },
    { number: 3, name: "Sharp Eyes", jockey: "C. Keane", trainer: "G. Lyons", form: "6P1", odds: "5/1" },
    { number: 4, name: "Blazing Comet", jockey: "D. McMonagle", trainer: "D. Weld", form: "2F2", odds: "6/1" },
    { number: 5, name: "Thunder Soul", jockey: "K. Manning", trainer: "J. Bolger", form: "435", odds: "11/2" },
  ],
},
{
  track: "Leopardstown",
  countryCode: "ie",
  raceTime: "18:45",
  raceName: "2yo Fillies' Conditions Race",
  runners: [
    { number: 1, name: "Golden Pearl", jockey: "G. Carroll", trainer: "M. Halford", form: "1", odds: "3/1" },
    { number: 2, name: "Summer Snow", jockey: "S. Foley", trainer: "J. Harrington", form: "12", odds: "5/2" },
    { number: 3, name: "Blue Whisper", jockey: "R. Whelan", trainer: "D. Weld", form: "3", odds: "4/1" },
    { number: 4, name: "Irish Rose", jockey: "B. Coen", trainer: "A. McGuinness", form: "27", odds: "6/1" },
    { number: 5, name: "Daisy Breeze", jockey: "K. Manning", trainer: "J. Bolger", form: "44", odds: "7/1" },
  ],
},

  {
    track: "Oaklawn Park",
    countryCode: "us",
    raceTime: "12:30",
    raceName: "Sunset Derby",
    runners: [
      { number: 1, name: "Horse B", jockey: "I. Ortiz Jr.", trainer: "M. Maker", form: "222", odds: "5/1" },
      { number: 2, name: "Horse C", jockey: "F. Prat", trainer: "C. Brown", form: "444", odds: "3/1" },
      { number: 3, name: "Horse D", jockey: "J. Rosario", trainer: "T. Pletcher", form: "232", odds: "2/1" },
      { number: 4, name: "Horse E", jockey: "M. Smith", trainer: "B. Baffert", form: "121", odds: "4/1" },
      { number: 5, name: "Horse F", jockey: "T. Gaffalione", trainer: "S. Asmussen", form: "341", odds: "6/1" },
      { number: 6, name: "Horse G", jockey: "F. Prat", trainer: "D. Lukas", form: "132", odds: "9/2" },
    ],
  },
  {
    track: "Belmont Park",
    countryCode: "us",
    raceTime: "13:10",
    raceName: "American Sprint",
    runners: [
      { number: 1, name: "Horse B", jockey: "J. Velazquez", trainer: "T. Pletcher", form: "311", odds: "3/1" },
      { number: 2, name: "Horse C", jockey: "M. Smith", trainer: "S. Asmussen", form: "444", odds: "5/1" },
      { number: 3, name: "Horse D", jockey: "I. Ortiz Jr.", trainer: "D. Lukas", form: "132", odds: "4/1" },
      { number: 4, name: "Horse E", jockey: "F. Prat", trainer: "C. Brown", form: "121", odds: "6/1" },
      { number: 5, name: "Horse F", jockey: "J. Rosario", trainer: "B. Baffert", form: "222", odds: "9/2" },
      { number: 6, name: "Horse G", jockey: "T. Gaffalione", trainer: "M. Maker", form: "232", odds: "3/1" },
    ],
  },
  {
    track: "Belmont Park",
    countryCode: "us",
    raceTime: "14:30",
    raceName: "Stars and Stripes Handicap",
    runners: [
      { number: 1, name: "Horse B", jockey: "T. Gaffalione", trainer: "B. Baffert", form: "311", odds: "4/1" },
      { number: 2, name: "Horse C", jockey: "M. Smith", trainer: "D. Lukas", form: "121", odds: "2/1" },
      { number: 3, name: "Horse D", jockey: "F. Prat", trainer: "M. Maker", form: "132", odds: "6/1" },
      { number: 4, name: "Horse E", jockey: "I. Ortiz Jr.", trainer: "T. Pletcher", form: "444", odds: "5/1" },
      { number: 5, name: "Horse F", jockey: "J. Velazquez", trainer: "C. Brown", form: "341", odds: "3/1" },
      { number: 6, name: "Horse G", jockey: "J. Rosario", trainer: "S. Asmussen", form: "232", odds: "9/2" },
    ],
  },
];

const popularHorseBets = [
  { race: "Cheltenham 13:30", bet: "Thunder Rock to Win", odds: "13/2" },
  { race: "Punchestown 15:20", bet: "Lucky Charm Each Way", odds: "9/4" },
  { race: "Leopardstown 16:45", bet: "Echo Flame Tricast", odds: "5/1" },
];


const carouselSettings = {
  dots: false,  // disables dots
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: flase,
  autoplaySpeed: 3000
};


export default function HorseRacingPage() {
  const groupedRaces = horseRaces.reduce((acc: Record<string, typeof horseRaces>, race) => {
    if (!acc[race.track]) acc[race.track] = [];
    acc[race.track].push(race);
    return acc;
  }, {});

  return (
    <>
      <Head>
        <title>Horse Racing – OhMySportsbetting</title>
      </Head>
      <div className="min-h-screen bg-[#0a1024] text-white font-sans">
        <Header />
        <div className="mx-4 mt-4 mb-6 p-4 rounded-lg bg-[#0a1024] border border-white shadow text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">Race Courses From Around The World</h1>
          <p className="text-sm sm:text-base mt-2 max-w-xl mx-auto">Explore the top races, Best Horses & Pi-powered action — all in one spot.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {["gb", "ie", "us"].map((code) => (
              <Image key={code} src={`https://flagcdn.com/w40/${code}.png`} alt={`${code} flag`} width={40} height={30} className="rounded shadow-md" />
            ))}
          </div>
        </div>

        {/* Popular Horse Bets */}
        <div className="max-w-5xl mx-auto px-4 pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">Popular Horse Bets</h2>
          <Slider {...carouselSettings}>
            {popularHorseBets.map(({ race, bet, odds }, idx) => (
              <div key={idx} className="p-2">
                <div className="border border-white rounded-lg bg-[#0a1024] p-4 shadow text-center">
                  <div className="font-semibold mb-1">{bet}</div>
                  <div className="text-sm text-blue-400 mb-3">{race}</div>
                  <div className="font-bold text-lg">Odds: {odds}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Race Listings */}
        <div className="max-w-5xl mx-auto px-4 pb-12">
          {Object.entries(groupedRaces).map(([track, races], i) => (
            <details key={i} className="border border-white rounded-lg bg-[#0a1024] mb-6 shadow-md">
              <summary className="cursor-pointer px-4 py-3 flex justify-between items-center font-semibold hover:bg-[#111b3a] transition">
                <span className="flex items-center gap-2 text-lg">
                  {track}
                  <Image src={`https://flagcdn.com/w20/${races[0].countryCode}.png`} alt="flag" width={20} height={14} className="object-contain rounded-sm" unoptimized />
                </span>
                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 py-4 space-y-6">
                {races.map(({ raceTime, raceName, runners }, j) => (
                  <div key={j} className="border border-white rounded-md bg-[#0a1024] p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">{raceName}</h3>
                      <span className="text-sm text-gray-300">{raceTime}</span>
                    </div>
                    <div className="mb-4 flex gap-2 flex-wrap">
                      {["Single", "Each Way", "Forecast", "Tricast"].map((type) => (
                        <button key={type} className="px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-black transition">
                          {type}
                        </button>
                      ))}
                    </div>
                    <div className="divide-y divide-white/30">
                      {runners.map(({ number, name, jockey, trainer, form, odds }, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 text-sm">
                          <div className="flex items-center gap-3">
                            <div className="font-bold w-6">{number}</div>
                            <div>
                              <div className="font-medium">{name}</div>
                              <div className="text-gray-400 text-xs">J: {jockey} | T: {trainer} | F: {form}</div>
                            </div>
                          </div>
                          <button className="bg-green-800 text-green-300 px-2 py-1 rounded text-sm font-semibold hover:bg-green-600 transition">{odds}</button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}
