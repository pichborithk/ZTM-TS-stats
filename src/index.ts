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
import { HTMLReport } from './reportTargets/HTMLReport';

// const csvFileReader = new CSVFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.readCSVFile('football.csv');
matchReader.load();

// for (let match of matchReader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games`);

const summaryManUnited = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summaryManUnited.buildAndPrintReport(matchReader.matches);

const summaryArsenal = new Summary(
  new WinsAnalysis('Arsenal'),
  new HTMLReport()
);
// const summaryArsenal = Summary.winsAnalysisWithHTMLReport('Arsenal');

summaryArsenal.buildAndPrintReport(matchReader.matches);
