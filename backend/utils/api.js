import axios from 'axios';
import ErrorResponse from './ErrorResponse.js';

export const invokeGetApi = async (apiUrl, authConfig, skipIfError) => {
  const response = await axios.get(apiUrl, authConfig)
    .catch((err) => {
      if (!skipIfError) {
        throw new ErrorResponse(err.response.status, 
          `Unable to Establish connection with API URL: ${apiUrl}, error: ${err.message}`);
        }else{
          console.log(`Unable to Establish connection with API URL: ${apiUrl}, error: ${err.message}`);
          return "";
        }
    });
    
    return {
      data: Object.keys(response).length !== 0 ? response.data : {},
      status: Object.keys(response).length !== 0 ? response.status : 400
    };
}

export const getGitAuthConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_API_SECRET_KEY}`
    }
  };
}
