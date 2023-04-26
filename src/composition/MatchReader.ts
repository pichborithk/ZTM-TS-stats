import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { dataStringToDate } from '../utils';
import { CSVFileReader } from './CSVFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static readCSVFile(filename: string): MatchReader {
    return new MatchReader(new CSVFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dataStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
