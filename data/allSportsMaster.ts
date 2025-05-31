// Full master data aggregator file

import premierLeague from "./leagues/premier_league.json";
import championship from "./leagues/championship.json";
import bundesliga from "./leagues/bundesliga.json";
import laLiga from "./leagues/la_liga.json";
import serieA from "./leagues/serie_a.json";
import ligue1 from "./leagues/ligue_1.json";
import mls from "./leagues/mls.json";
import leagueOfIreland from "./leagues/league_of_ireland.json";
import brazilianSerieA from "./leagues/brazilian_serie_a.json";
import ligaMx from "./leagues/liga_mx.json";
import j1League from "./leagues/j1_league.json";
import superLig from "./leagues/super_lig.json";
import faCup from "./leagues/fa_cup.json";
import eflCup from "./leagues/efl_cup.json";
import coppaItalia from "./leagues/coppa_italia.json";
import copaDelRey from "./leagues/copa_del_rey.json";
import supercopaDeEspana from "./leagues/supercopa_de_espana.json";

import { tennisEvents } from "./tennis";
import { ufcEvents } from "./ufc";
import { horseRaces } from "./horseRacing";
import { races as greyhoundRaces } from "./greyhoundRaces";
import { esportsEvents } from "./esports";
import { inPlayEvents } from "./inPlay";

export const allSportsMaster = {
  Football: [
    ...premierLeague,
    ...championship,
    ...bundesliga,
    ...laLiga,
    ...serieA,
    ...ligue1,
    ...mls,
    ...leagueOfIreland,
    ...brazilianSerieA,
    ...ligaMx,
    ...j1League,
    ...superLig,
    ...faCup,
    ...eflCup,
    ...coppaItalia,
    ...copaDelRey,
    ...supercopaDeEspana,
  ],
  Tennis: tennisEvents,
  UFC: ufcEvents,
  HorseRacing: horseRaces,
  Greyhounds: greyhoundRaces,
  eSports: esportsEvents,
  InPlay: inPlayEvents,
};
