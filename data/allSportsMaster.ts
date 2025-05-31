// data/allSportsMaster.ts

import { horseRaces } from "./horseRacing";
import { races as greyhoundRaces } from "./greyhoundRaces";
import { tennisEvents } from "./tennis";
import { ufcEvents } from "./ufc";
import { esportsEvents } from "./esports";
import { inPlayEvents } from "./inPlay";
import { basketballGames } from "./basketball";
import { footballLeagues } from "./football";

const allSportsData: Record<string, any> = {
  Football: Object.entries(footballLeagues).flatMap(([leagueName, matches]: [string, any[]]) =>
    matches.map(match => ({
      league: leagueName,
      match: match.match,
      time: match.time,
      countryCode: match.countryCode || "gb",
      odds: match.odds,
    }))
  ),

  Basketball: Object.entries(basketballGames).flatMap(([date, games]: [string, any[]]) =>
    games.map(game => ({
      league: game.league,
      match: game.game,
      time: game.tipOff,
      countryCode: game.countryCode,
      odds: game.odds,
    }))
  ),

  Tennis: Object.entries(tennisEvents).flatMap(([tournament, matches]: [string, any[]]) =>
    matches.map(match => ({
      tournament,
      match: match.match,
      time: match.startTime,
      odds: match.odds,
    }))
  ),

  UFC: ufcEvents.map(event => ({
    fight: event.fight,
    time: event.time,
    countryCode: event.countryCode,
    odds: event.odds,
  })),

  HorseRacing: horseRaces.map(race => ({
    track: race.track,
    race: race.raceName,
    time: race.raceTime,
    countryCode: race.countryCode,
    runners: race.runners,
  })),

  Greyhounds: greyhoundRaces.Today.map(race => ({
    track: race.track,
    race: race.raceName,
    time: race.raceTime,
    countryCode: race.countryCode,
    runners: race.runners,
  })),

  eSports: Object.entries(esportsEvents).flatMap(([tournament, matches]: [string, any[]]) =>
    matches.map(match => ({
      tournament,
      match: match.match,
      time: match.startTime,
      odds: match.odds,
    }))
  ),

  InPlay: inPlayEvents.map(event => ({
    match: event.match,
    time: event.time,
    countryCode: event.countryCode,
    odds: event.odds,
  })),
};

export default allSportsData;
