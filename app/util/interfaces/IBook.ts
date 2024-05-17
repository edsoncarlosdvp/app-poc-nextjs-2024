export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
    previewLink: string;
    readingModes: {
      image: boolean;
      text: boolean;
    };
  };
}
