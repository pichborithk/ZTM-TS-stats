// import { MatchResult } from './MatchResult';

// let manUnitedWins = 0;

/* ---------------------------------------------------------------------------------------------- */
/*                                    Using inheritance method                                    */
/* ---------------------------------------------------------------------------------------------- */

// import { MatchReader } from './inheritance/MatchReader';

// const reader = new MatchReader('football.csv');
// reader.read();

// for (let match of reader.data) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

/* ---------------------------------------------- X --------------------------------------------- */

import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CSVFileReader } from './composition/CSVFileReader';
import { MatchReader } from './composition/MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const csvFileReader = new CSVFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// for (let match of matchReader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games`);

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
