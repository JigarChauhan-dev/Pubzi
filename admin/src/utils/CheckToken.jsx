import Cookies from "js-cookie";

function CheckAdminToken(){
    try {
        let token = Cookies.get("token");
        return token;
    } catch (error) {
        console.log(error);
    }
}

export default CheckAdminToken;