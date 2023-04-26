import fs from 'fs';

export abstract class CSVFileReader<TypeOfData> {
  data: TypeOfData[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
