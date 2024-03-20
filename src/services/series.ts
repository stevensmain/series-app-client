import { Serie } from "../interfaces/series";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getSeries = async (): Promise<Serie[]> => {
  const res = await fetch(`${BASE_URL}/series`);
  const data = await res.json();

  return data;
};
