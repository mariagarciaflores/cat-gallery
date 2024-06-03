export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}
