const series = ['2993', '7194', '28826', '1101', '82', '73'];

const getSeries = async () => {
  try {
    const infoSeries = [];
    await Promise.all(
      series.map(async (id) => {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        infoSeries.push({
          id: data.id,
          name: data.name,
          summary: data.summary,
          image: data.image.medium,
        });
      }),
    );
    return infoSeries;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export { getSeries };
