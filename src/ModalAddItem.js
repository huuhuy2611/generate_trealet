import React from "react";
import { Button, Input, Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ToastSuccess } from "./ToastSuccess";

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
      ToastSuccess("Update Item Successful!");
      return;
    }
    if (item) {
      const tempId = uuidv4();
      setDataItems([...dataItems, { id: tempId, ...item }]);
      setItem({});
      setShowModalAdd(false);
      ToastSuccess("Create Item Successful!");
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
          {item ? "Edit Item" : "Add New Item"}
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
            Cancel
          </Button>
          <Button type="primary" onClick={handleSaveModal}>
            Save
          </Button>
        </div>
      }
    >
      <div className="main-modal">
        <div className="add-form">
          <div className="input-item">
            <p className="input-item_title">Id Image</p>
            <Input
              name="id_image"
              placeholder="Id Image"
              value={item?.id_image}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-item">
            <p className="input-item_title">Chất liệu</p>
            <Input
              name="type"
              placeholder="Chất liệu"
              value={item?.type}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-item">
            <p className="input-item_title">Kích thước</p>
            <Input
              name="size"
              placeholder="Kích thước"
              value={item?.size}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-item">
            <p className="input-item_title">Niên đại</p>
            <Input
              name="age"
              placeholder="Niên đại"
              value={item?.age}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-item">
            <p className="input-item_title">Nơi phát hiện</p>
            <Input
              name="address"
              placeholder="Nơi phát hiện"
              value={item?.address}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-item">
            <p className="input-item_title">Công nhận</p>
            <Input
              name="recognition"
              placeholder="Công nhận"
              value={item?.recognition}
              onChange={handleChangeInput}
            />
          </div>
          <div className="input-item">
            <p className="input-item_title">Link 3D</p>
            <Input
              name="link3d"
              placeholder="Link 3D"
              value={item?.link3d}
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAddItem;
