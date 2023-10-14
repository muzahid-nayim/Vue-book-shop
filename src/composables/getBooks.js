import { ref } from 'vue';

const getBooks = (category) => {
  const books = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let url = 'http://localhost:3000/books';
      if (category) {
        // If a category is specified, append it to the URL as a query parameter
        url += `?category=${category}`;
      }
      
      let data = await fetch(url);
      if (!data.ok) {
        throw Error('No data available');
      }
      books.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { books, error, load };
};

export default getBooks;

