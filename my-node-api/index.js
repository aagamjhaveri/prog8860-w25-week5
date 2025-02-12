import moment from "moment";

export const handler = async (event, context) => {
  
    const path = event.path;
    const method = event.httpMethod;
  
    switch (path) {
      case '/v1/featureA':
        if (method === 'GET') {

            const min = 1;
            const max = 6;

            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            const now = moment().format();

            const message = 'Your dice throw resulted in ' + randomNumber + ' and was issued at ' + now;

            return {
                statusCode: 200,
                body: JSON.stringify(message),
            };
        }
        break;
      case '/v1/featureB':
        if (method === 'POST') {
          return {
            statusCode: 200,
            body: JSON.stringify('Response from featureB API!!'),
          };
        }
        break;
      default:
        return {
          statusCode: 404,
          body: JSON.stringify('Not Found'),
        };
    }
  };  