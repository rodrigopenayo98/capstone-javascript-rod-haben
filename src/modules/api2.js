const api2 = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`

const generateAppId = async () => {
  const storedAppId = localStorage.getItem('appId');
  
  if (storedAppId && storedAppId === 'ADLmptdEyTczRMRKUEpG') {
    return storedAppId;
  }
  
  localStorage.setItem('appId', 'ADLmptdEyTczRMRKUEpG');
  
  return 'ADLmptdEyTczRMRKUEpG';
};

const getLikes = async (appId, itemId) => {
  try {
    const response = await fetch(`${involvementAPIBaseURL}apps/${appId}/likes`);
    const data = await response.json();
    
    const likes = Array.isArray(data)
      ? [...data.reduce((acc, item) => (item.item_id === itemId ? acc + item.likes : acc), 0)]
      : 0;
      
    return likes;
  } catch (error) {
    return 0;
  }
};

const getComments = async (appId, itemId) => {
  try {
    const response = await fetch(`${involvementAPIBaseURL}apps/${appId}/comments`); 
    const data = await response.json(); 

    const comments = Array.isArray(data)
      ? data.filter((comment) => comment.item_id === itemId)
      : [];

    return comments;
  } catch (error) {
    return []; 
  }
};

export {
  api2, generateAppId, getLikes, getComments 
}
