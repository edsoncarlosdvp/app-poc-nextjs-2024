export async function getAllBooks(query: any) {
  const API_KEY = 'guardada';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  return data.item || [];
}
