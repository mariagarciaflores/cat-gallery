import { Injectable } from '@angular/core';

import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor() {}

  async getCats(): Promise<Cat[]> {
    const url =
      'https://api.thecatapi.com/v1/images/search?limit=50&include_categories&api_key=live_lprLGU6ZpdipDiqBU2tgtyEr9Poi8OOddUdFTvhNNg8CKzh7JbH1zQ35e7Oxj4yH'; // Replace with your API key

    return fetch(url)
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        const cats: Cat[] = data.map((catData: Cat) => ({
          id: catData.id,
          url: catData.url,
          width: catData.width, // Assuming the API provides width
          height: catData.height, // Assuming the API provides height
          categories: catData.categories,
        }));
        return cats;
      });
  }

  async getCat(id: string): Promise<Cat> {
    const url = `https://api.thecatapi.com/v1/images/${id}?api_key=live_lprLGU6ZpdipDiqBU2tgtyEr9Poi8OOddUdFTvhNNg8CKzh7JbH1zQ35e7Oxj4yH&include_categories=1`; // Replace with your API key

    return fetch(url)
      .then((response) => response.json())
      .then((catData) => {
        const cat: Cat = {
          id: catData.id,
          url: catData.url,
          width: catData.width,
          height: catData.height,
          categories: catData.categories,
        };
        return cat;
      });
  }
}
