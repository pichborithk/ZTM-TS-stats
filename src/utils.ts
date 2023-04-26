export const dataStringToDate = (dataString: string): Date => {
  const dataParts = dataString
    .split('/')
    .map((value: string): number => parseInt(value));

  return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
};
