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
  Today: [
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
    }
  ],
  Tomorrow: []
};
