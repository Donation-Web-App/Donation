import { redirectIfNotLoggedIn } from ".";
import axios from "axios";

/*
This function is meant to be used for requests to the backend.
It adds an auth header and parses the data from the response
*/

export async function authenticatedFetch(options) {
  redirectIfNotLoggedIn();

  // Token is valid, so we may proceed with the request
  const tokenValue = window.localStorage.getItem("tokenValue");

  // Making sure options object has headers
  if (!options.headers) {
    options.headers = {};
  }

  // Attaching the Authorization header with the token value
  options.headers["Authorization"] = `Bearer ${tokenValue}`;

  // Perform the request
  const response = await axios.request(options);

  if (response.data.status == "success") {
    return response.data;
  } else {
    throw "Something went wrong";
  }
}
