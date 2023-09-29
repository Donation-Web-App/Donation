import axios from "axios";

export async function login(email, password) {
  const url = "/api/v2/auth/login";
  const body = { email, password };
  const options = {
    method: "post",
    url: url,
    data: body,
  };
  const response = await axios.request(options);

  if (response.data.status == "success") {
    const {
      token,
      user: { role, firstname },
    } = response.data.data;

    return { token, role, firstname };
  } else {
    throw "Something went wrong";
  }
}
