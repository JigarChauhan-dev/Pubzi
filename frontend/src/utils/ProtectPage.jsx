import { toast } from "react-toastify";
import CheckToken from "./CheckToken";

function ProtectPage({children}){
    if(!CheckToken()){
        toast.error("Kindly Login First.", {
          onClose: () => {
            
            window.location.href = "/login";
          },
        });
    }
    return children;
}

export default ProtectPage;