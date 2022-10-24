import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function ToastError(message: string) {
    const notifyError = () =>  toast.error(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    notifyError();
}

export default ToastError

