export interface GreyhoundRunner {
  name: string;
  odds: string;
}

export interface GreyhoundRace {
  track: string;
  countryCode: string;
  raceTime: string;
  raceName: string;
  runners: GreyhoundRunner[];
}

export const greyhoundRaces: {
  Today: GreyhoundRace[];
  Tomorrow: GreyhoundRace[];
} = {
  Today:[
  {
    track: "Harlow",
    countryCode: "gb",
    raceTime: "11:05",
    raceName: "A5 415m",
    runners: [
      { name: "Swift Horizon", odds: "5/2" },
      { name: "Ballymac Flyer", odds: "9/2" },
      { name: "Romeos Dream", odds: "7/4" },
      { name: "Skyline Jet", odds: "4/1" },
      { name: "Droopys Vegas", odds: "6/1" },
      { name: "Turn The Page", odds: "5/1" },
    ]
  },
  {
    track: "Romford",
    countryCode: "gb",
    raceTime: "11:20",
    raceName: "A6 400m",
    runners: [
      { name: "Stormy Dancer", odds: "3/1" },
      { name: "Lucky Bullet", odds: "4/1" },
      { name: "Pineapple Jack", odds: "5/2" },
      { name: "Midnight Flyer", odds: "7/2" },
      { name: "Tornado Echo", odds: "9/2" },
      { name: "Rocky Express", odds: "6/1" },
    ]
  },
  {
    track: "Shelbourne",
    countryCode: "ie",
    raceTime: "11:40",
    raceName: "A4 525m",
    runners: [
      { name: "Limerick Boy", odds: "5/2" },
      { name: "Silver Rocket", odds: "3/1" },
      { name: "Fast N Furious", odds: "4/1" },
      { name: "Celtic Dream", odds: "9/2" },
      { name: "Blazing Star", odds: "6/1" },
      { name: "Smooth Operator", odds: "7/1" },
    ]
  },
  {
    track: "Monmore",
    countryCode: "gb",
    raceTime: "12:00",
    raceName: "A7 480m",
    runners: [
      { name: "Rapid Racer", odds: "3/1" },
      { name: "Tiger Flame", odds: "5/2" },
      { name: "Highland Prince", odds: "4/1" },
      { name: "Black Pearl", odds: "9/2" },
      { name: "Ocean's Edge", odds: "6/1" },
      { name: "Desert Rose", odds: "7/1" },
    ]
  },
  {
    track: "Nottingham",
    countryCode: "gb",
    raceTime: "12:20",
    raceName: "A3 500m",
    runners: [
      { name: "King's Gambit", odds: "11/4" },
      { name: "Magic Moon", odds: "3/1" },
      { name: "Golden Whippet", odds: "5/2" },
      { name: "Blue Sky Jet", odds: "4/1" },
      { name: "Silent Runner", odds: "9/2" },
      { name: "Steel Warrior", odds: "5/1" },
    ]
  },
  {
    track: "Crayford",
    countryCode: "gb",
    raceTime: "12:40",
    raceName: "A2 380m",
    runners: [
      { name: "Electric Storm", odds: "5/2" },
      { name: "Sonic Speed", odds: "7/4" },
      { name: "Dublin Flyer", odds: "4/1" },
      { name: "Master Dash", odds: "9/2" },
      { name: "Lucky Fortune", odds: "5/1" },
      { name: "Moonlight Grace", odds: "6/1" },
    ]
  },
  {
    track: "Youghal",
    countryCode: "ie",
    raceTime: "13:00",
    raceName: "A1 525m",
    runners: [
      { name: "Cork Comet", odds: "2/1" },
      { name: "Red Bandit", odds: "3/1" },
      { name: "Steely Dan", odds: "7/2" },
      { name: "Silver Blade", odds: "9/2" },
      { name: "Phoenix Blaze", odds: "5/1" },
      { name: "Shadow Dancer", odds: "6/1" },
    ]
  },
  {
    track: "Sunderland",
    countryCode: "gb",
    raceTime: "13:20",
    raceName: "A5 450m",
    runners: [
      { name: "Fast Tempo", odds: "5/2" },
      { name: "Dashing Star", odds: "3/1" },
      { name: "Comet Warrior", odds: "7/2" },
      { name: "Lunar Jet", odds: "4/1" },
      { name: "Storm Catcher", odds: "9/2" },
      { name: "King Cobra", odds: "6/1" },
    ]
  },
  {
    track: "Waterford",
    countryCode: "ie",
    raceTime: "13:40",
    raceName: "A4 525m",
    runners: [
      { name: "Atlantic Surf", odds: "5/2" },
      { name: "Golden Hawk", odds: "3/1" },
      { name: "Iron Claw", odds: "7/2" },
      { name: "Blue Inferno", odds: "9/2" },
      { name: "Electric Pulse", odds: "5/1" },
      { name: "Tornado Flight", odds: "6/1" },
    ]
  },
  {
    track: "Cork",
    countryCode: "ie",
    raceTime: "14:00",
    raceName: "A3 525m",
    runners: [
      { name: "Red Rocket", odds: "5/2" },
      { name: "Swift Blazer", odds: "3/1" },
      { name: "Bold Impact", odds: "7/2" },
      { name: "Shadow Pulse", odds: "4/1" },
      { name: "Lucky Ace", odds: "9/2" },
      { name: "Iron Blade", odds: "6/1" },
    ]
  }
]
,
  Tomorrow: []
};
