import Cookie from "js-cookie";

function CheckToken() {
  try {
    const token = Cookie.get("token");
    // console.log("Token:", token);
    return token || "";
  } catch (error) {
    console.log(error);
    return "";
  }
}

export default CheckToken;