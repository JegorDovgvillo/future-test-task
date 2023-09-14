import { useHttp } from "../hook/usehttp";

const BookService = () => {
  const { request } = useHttp();
  const _apiBase = "https://www.googleapis.com/books/v1/";
  const key = "AIzaSyCqlK-sbXfW0-XxXXR1ZFKQliHNL0HxWAM";

  const getAllBooks = async ({
    str = "*",
    orderBy = "relevance",
    category = "*",
    startIndex = 0,
  }: {
    str?: string;
    orderBy?: string;
    category?: string;
    startIndex?: number;
  }) => {
    const res = await request({
      url: `${_apiBase}volumes?q=${str}+subject:${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${key}`,
      data: {},
    });
    return res;
  };
  const getBook = async (id?: string) => {
    const res = await request({
      url: `${_apiBase}volumes/${id}?key=${key}`,
      data: {},
    });
    return res;
  };
  return {
    getAllBooks,
    getBook,
  };
};
export default BookService;
