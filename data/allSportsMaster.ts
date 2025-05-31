// data/allSportsMaster.ts

import { horseRaces } from "../data/horseRacing";
import { races as greyhoundRaces } from "../data/greyhoundRaces";
import { tennisEvents } from "../data/tennis";
import { ufcEvents } from "../data/ufc";
import { esportsEvents } from "../data/esports";
import { inPlayEvents } from "../data/inPlay";
import { basketballGames } from "../data/basketball";
import { footballLeagues } from "../data/football";

const allSportsData = {
  Football: Object.values(footballLeagues).flatMap(matches => matches),
  HorseRacing: horseRaces,
  Greyhounds: Object.values(greyhoundRaces).flatMap(race => race),
  Basketball: Object.values(basketballGames).flatMap(games => games),
  Tennis: Object.entries(tennisEvents).flatMap(([tournament, matches]) =>
    matches.map(match => ({
      tournament,
      ...match
    }))
  ),
  UFC: ufcEvents,
  eSports: Object.entries(esportsEvents).flatMap(([league, matches]) =>
    matches.map(match => ({
      league,
      ...match
    }))
  ),
  InPlay: inPlayEvents,
};

export default allSportsData;
