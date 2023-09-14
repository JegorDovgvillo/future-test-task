export interface Book {
  id: string;
  volumeInfo: {
    title: string | null;
    authors: string[] | null;
    imageLinks: {
      small: string | undefined;
    };
    description: string | TrustedHTML;
    categories: string[] | null;
  };
}
export interface StateBook {
  info: Book;
  loadingStatus: string;
}
export interface CardBooks {
  id: string;
  volumeInfo: {
    title: string | null;
    authors: string[] | null;
    imageLinks: {
      smallThumbnail: string | undefined;
    };
    categories: string[] | null;
  };
}
export interface MainState {
  totalIndex: number;
  elems: CardBooks[];
  loadingStatus: string;
  startIndex: number;
}
