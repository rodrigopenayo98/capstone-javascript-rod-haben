const searchInput = document.getElementById('search-input');

searchInput.addEventListener('search', () => {
  const query = searchInput.value;
  // here I have to return in a specific html element the list of movie letters
});

const getArticles = async (query) => {
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    const articles = data.map((item) => ({
      id: item.show.id,
      name: item.show.name,
    }));

    return articles;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

const getArticleDetails = async (articleId) => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${articleId}`);
    const data = await response.json();

    const articleDetails = {
      id: data.id,
      name: data.name,
      summary: data.summary,

    };

    return articleDetails;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

const api = `https://api.tvmaze.com/search/shows?q=${query}`;


