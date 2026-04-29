import Cookie from "js-cookie";
import { toast } from "react-toastify";

function Logout() {
  try {
    Cookie.remove("token");
    toast.success("Logout Successful", {
      onClose: () => {
        window.location.href = "/login";
      },
    });
  } catch (error) {
    console.log(error);
  }
}

function LogoutWithoutNotification() {
  try {
    Cookie.remove("token");
  } catch (error) {
    console.log(error);
  }
}

export default Logout;
export { LogoutWithoutNotification };
