// https://youtube-mp36.p.rapidapi.com/dl

import axiosClient from "../axiosClient";

const convertToMp3Api = {
    async getMp3Link(youtubeLink: string, navigate?: any) {
      const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${youtubeLink}`;
      try {
        const response = await axiosClient.get(url);
        // return response;
        console.log(response)
      } catch (error: any) {
        console.log(error);
        // navigate to register fail
        // navigate(`/error/${error.response.data.msg}`);
      }
    },
}  

export default convertToMp3Api