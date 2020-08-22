import { Pizza } from '@/types';

export const fetchPizzaList = () => {
  const request = new Request('/pizzas.json');

  return fetch(request)
    .then(data => data.json())
    .then((data: Pizza[]) => data);
};
