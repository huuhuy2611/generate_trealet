import React from "react";
import { Button, Input, Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ToastSuccess } from "./ToastSuccess";
import TextEditor from "./Editor";

function ModalAddItem(props) {
  const { item, setItem, setShowModalAdd, dataItems, setDataItems } = props;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setItem(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveModal = () => {
    if (item?.id) {
      const tempdataItemsFilter = dataItems.filter(
        data => data?.id !== item?.id
      );
      setDataItems([...tempdataItemsFilter, item]);
      setItem({});
      setShowModalAdd(false);
      ToastSuccess("Cập nhật thành công!");
      return;
    }
    if (item) {
      const tempId = uuidv4();
      setDataItems([...dataItems, { id: tempId, ...item }]);
      setItem({});
      setShowModalAdd(false);
      ToastSuccess("Tạo thành công!");
    }
  };

  const handleCancelModal = () => {
    setShowModalAdd(false);
  };

  return (
    <Modal
      centered
      visible
      width={1024}
      title={
        <span className="modal-title">
          {item ? "Sửa nội dung" : "Thêm nội dung"}
        </span>
      }
      onCancel={handleCancelModal}
      footer={
        <div className="modal-footer-custom">
          <Button
            type="primary"
            onClick={handleCancelModal}
            className="btn-cancel-modal"
          >
            Huỷ bỏ
          </Button>
          <Button type="primary" onClick={handleSaveModal}>
            Lưu
          </Button>
        </div>
      }
    >
      <div className="main-modal">
        <div className="add-form">
          <div className="input-item">
            <p className="input-item_title">ID Ảnh</p>
            <Input
              name="id_image"
              placeholder="Id Image"
              value={item?.id_image}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-item">
            <p className="input-item_title">Link 3D, Video (Nếu có)</p>
            <Input
              name="link3d"
              placeholder="Link 3D"
              value={item?.link3d}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-item">
            <p className="input-item_title">Mô tả nội dung</p>
            <TextEditor
              value={item?.description}
              setValue={value => {
                setItem(prev => ({ ...prev, description: value }));
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAddItem;
