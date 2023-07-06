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

const likeSeries = async (showId) => {
    try {
        const response = await fetch(BaseUrl+'apps/'+AppId+'/likes/',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({item_id:showId}),
        });
        return {
            error:false
        }
    } catch (error) {
        return {error:true}
    }
}
export {
    getSeriesLikes,
    getAllLikes,
    likeSeries
}






