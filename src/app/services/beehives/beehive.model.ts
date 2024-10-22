export interface Beehive {
  temperature: number;
  name: string;
  id: number;
  humidity: number;
  coordY: number;
  coordx: number;
  weight: number;
}

export const beehivesTestData: Beehive[] = [
  {
    temperature: 35.2,
    name: 'Hive A',
    id: 1,
    humidity: 60.5,
    coordY: 19.4326,
    coordx: -99.1332,
    weight: 75.3,
  },
  {
    temperature: 33.8,
    name: 'Hive B',
    id: 2,
    humidity: 58.2,
    coordY: 19.4512,
    coordx: -99.1453,
    weight: 80.1,
  },
  {
    temperature: 36.0,
    name: 'Hive C',
    id: 3,
    humidity: 62.0,
    coordY: 19.4171,
    coordx: -99.1277,
    weight: 70.8,
  },
  {
    temperature: 34.5,
    name: 'Hive D',
    id: 4,
    humidity: 59.8,
    coordY: 19.4394,
    coordx: -99.1623,
    weight: 72.4,
  },
  {
    temperature: 32.9,
    name: 'Hive E',
    id: 5,
    humidity: 57.3,
    coordY: 19.4289,
    coordx: -99.1346,
    weight: 78.6,
  },
];
