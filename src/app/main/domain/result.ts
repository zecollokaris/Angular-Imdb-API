export interface Result {
  id: string;
  resultType: string;
  image: string;
  description: string;
  title: string;
  actorList: Array<Actor>;
}

export interface ResultItem {
  id: string;
  image: string;
  title: string;
  imDbRating: number;
  genres: string;
}

export interface Actor {
  image: string;
  name: string;
}
