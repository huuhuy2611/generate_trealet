import { toast } from "react-toastify";
import { CloseOutlined } from "@ant-design/icons";

export const ToastSuccess = msg => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { background: "green", color: "white" },
    progressStyle: { background: "none" },
    closeButton: <CloseOutlined style={{ color: "white !important" }} />,
  });
};
