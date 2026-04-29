import Cookies from "js-cookie";
import { toast } from "react-toastify";

function Logout() {
  try {
    Cookies.remove("token");
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
    Cookies.remove("token");
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
  }
}

export default Logout;
export { LogoutWithoutNotification };
