export async function getAllBooks(query: string) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log('getAll: ', data);
  return data.items || [];

  // return (
  //   <>
  //     <p>{JSON.stringify(data.item)}</p>
  //   </>
  // );
}
