const series = ["2993", "7194", "28826", "1101", "82", "73"];


const getSeries = async () => {
  try {
    const seriesData = [];
    for (const id of series) {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      seriesData.push({
        id: data.id,
        name: data.name,
        summary: data.summary
      });
    }
    console.log(seriesData);
    return seriesData;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

getSeries();



