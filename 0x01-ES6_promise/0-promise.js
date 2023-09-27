function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call or replace with your actual API request
    setTimeout(() => {
      const apiResponse = { data: 'API response data' };
      // Resolve the Promise with the API response data
      resolve(apiResponse);
      
      // If there's an error, you can reject the Promise
      // reject(new Error('API request failed'));
    }, 1000); // Simulated delay of 1 second
  });
}
