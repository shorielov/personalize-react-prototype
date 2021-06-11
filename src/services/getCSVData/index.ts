import mocker from 'mocker-data-generator';

type CSVData = {
  mdId: number,
  variantId: number,
  date: Date,
  speciality: string,
  brandSegment: string,
  brandPre: number,
  mktPre: number,
  eventPeriod: number,
};

const row = {
  mdId: {
    faker: 'random.number',
  },
  variantId: {
    faker: 'random.number',
  },
  date: {
    faker: 'date.past',
  },
  speciality: {
    values: ['PCP', 'CARD', 'EDN'],
  },
  brandSegment: {
    values: ['A', 'B'],
  },
  brandPre: {
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  mktPre: {
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  eventPeriod: {
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

const getCSVData = () => {
  return new Promise<CSVData>((resolve, reject) => {
    mocker()
    .schema('row', row, 10)
    .build(function(error, data) {
      if (error) {
        reject(error)
      }

      resolve(data.row);
    })
  });
};

export default getCSVData;
