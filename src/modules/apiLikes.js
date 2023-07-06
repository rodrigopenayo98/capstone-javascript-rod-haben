const BaseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`;
const AppId = `RfJpwLbuNZkYmafYdHPm`;

const getAllLikes = async () => {
    try {
        const response = await fetch(BaseUrl+'apps/'+AppId+'/likes/');
        const data = await response.json();
        return data;
    } catch (err) {
        return [];
    }
}
const getSeriesLikes = async (showId) => {
        try {
            const response = await fetch(BaseUrl+'apps/'+AppId+'/likes/?item_id='+showId);
            const data = response.json();
            return data.length?data[0].likes:0;
        } catch (err) {
            return 0;
        }
}

export {
    getSeriesLikes,
    getAllLikes
}






