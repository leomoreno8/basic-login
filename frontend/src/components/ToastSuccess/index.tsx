import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function ToastSuccess(message: string) {

    const notifySuccess = () =>  toast.success('✅' + message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    notifySuccess();
}

export default ToastSuccess
