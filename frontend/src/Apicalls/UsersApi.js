import { axiosInstance } from './axiosInstance';

const getPageUrl = () => {
  return window.location.href;
}

const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    
    // Check for Chrome
    if (/Chrome/.test(userAgent) && !/Edge/.test(userAgent)) {
      return 'Google Chrome';
    }
    // Check for Firefox
    else if (/Firefox/.test(userAgent)) {
      return 'Mozilla Firefox';
    }
    // Check for Safari
    else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
      return 'Apple Safari';
    }
    // Check for Edge
    else if (/Edg/.test(userAgent)) {
      return 'Microsoft Edge';
    }
    // Check for Internet Explorer
    else if (/MSIE|Trident/.test(userAgent)) {
      return 'Internet Explorer';
    }
    // Default to user agent string
    else {
      return userAgent;
    }
  };

const getDeviceType = () => {
    const userAgent = navigator.userAgent;
    if (/Mobi/.test(userAgent) || /Android/i.test(userAgent)) {
        return 'Mobile';
    } else if (/Tablet|iPad/i.test(userAgent)) {
        return 'Tablet';
    } else {
        return 'Desktop';
    }
};

const getScreenResolution = () => {
    return `${window.screen.width}x${window.screen.height}`;
};

const getLanguage = () => {
    return navigator.language || navigator.userLanguage || 'Unknown';
};

export const usersVisited = async () => {
    try {
        const response = await axiosInstance.post("/track-visit",{
            deviceType: getDeviceType(),
            screenResolution: getScreenResolution(),
            language: getLanguage(),
            browser: getBrowserInfo(),
            pageUrl : getPageUrl(),
          });
        return response;
    } catch (error) {
        throw error;
    }

}

export const GetAllUsers = async () => {
  try {
      const response = await axiosInstance.get("/api/user/get-all-users");
      return response.data;
  } catch (error) {
      throw error;
  }

}