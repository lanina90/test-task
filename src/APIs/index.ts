import axios from "axios";

const $host = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
});

export { $host };