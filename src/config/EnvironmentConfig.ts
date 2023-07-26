const dev = {
  API_ENDPOINT_URL: 'http://localhost:9090/api/v2'
}

const prod = {
  API_ENDPOINT_URL: "https://dev.api.phamtomhealth.com/api/v2"
};

const test = {
  API_ENDPOINT_URL: 'http://localhost:9090/api/v2'
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    case "test":
      return test;
    default:
      break;
  }
}

export const env = getEnv();