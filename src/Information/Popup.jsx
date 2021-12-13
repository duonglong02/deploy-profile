import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
	autoClose: 2000,
	draggable: false,
	limit: 3,
});

export default function Popup(props) {
    const { onSelect } = props;

    const handleChange = () => {
        onSelect();
        toast("Not found account");
    }

    return (
        <div>
            <button className="nav-item" onClick={() => handleChange()}>
                Hi, my name is Long
            </button>
        </div>
    );
}