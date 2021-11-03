import "./App.css";
import "antd/dist/antd.css";
import { Button, Table, Space, Input, Modal } from "antd";
import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [dataSource, setDataSource] = useState([
    {
      id: "43214234234",
      id_image: 1249,
      type: "Đồng",
      size: "Đường kính miệng: 61cm; Đường kính đáy: 60cm; Chiều cao: 90cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Thôn Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, năm 1961",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://media.sketchfab.com/models/93c8cf43b7fd421b8818ade273bb49a2/thumbnails/d7428e3c07d848b7b0d0b1f81f776394/3d4734fe96034c89bebd1340f0e6d4b9.jpeg",
    },
    {
      id: "432142342341",
      id_image: 1249,
      type: "Đồng",
      size: "Đường kính miệng: 61cm; Đường kính đáy: 60cm; Chiều cao: 90cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Thôn Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, năm 1961",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://media.sketchfab.com/models/93c8cf43b7fd421b8818ade273bb49a2/thumbnails/d7428e3c07d848b7b0d0b1f81f776394/3d4734fe96034c89bebd1340f0e6d4b9.jpeg",
    },
    {
      id: "4321423423411",
      id_image: 1249,
      type: "Đồng",
      size: "Đường kính miệng: 61cm; Đường kính đáy: 60cm; Chiều cao: 90cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Thôn Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, năm 1961",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://media.sketchfab.com/models/93c8cf43b7fd421b8818ade273bb49a2/thumbnails/d7428e3c07d848b7b0d0b1f81f776394/3d4734fe96034c89bebd1340f0e6d4b9.jpeg",
    },
    {
      id: "43214234234111",
      id_image: 1249,
      type: "Đồng",
      size: "Đường kính miệng: 61cm; Đường kính đáy: 60cm; Chiều cao: 90cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Thôn Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, năm 1961",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://media.sketchfab.com/models/93c8cf43b7fd421b8818ade273bb49a2/thumbnails/d7428e3c07d848b7b0d0b1f81f776394/3d4734fe96034c89bebd1340f0e6d4b9.jpeg",
    },
    {
      id: "432142342342",
      id_image: 1249,
      type: "Đồng",
      size: "Đường kính miệng: 61cm; Đường kính đáy: 60cm; Chiều cao: 90cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Thôn Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, năm 1961",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://media.sketchfab.com/models/93c8cf43b7fd421b8818ade273bb49a2/thumbnails/d7428e3c07d848b7b0d0b1f81f776394/3d4734fe96034c89bebd1340f0e6d4b9.jpeg",
    },
    {
      id: "4321423423422",
      id_image: 1249,
      type: "Đồng",
      size: "Đường kính miệng: 61cm; Đường kính đáy: 60cm; Chiều cao: 90cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Thôn Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, năm 1961",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://media.sketchfab.com/models/93c8cf43b7fd421b8818ade273bb49a2/thumbnails/d7428e3c07d848b7b0d0b1f81f776394/3d4734fe96034c89bebd1340f0e6d4b9.jpeg",
    },
    {
      id: "43214234234222",
      id_image: 1249,
      type: "Đồng",
      size: "Đường kính miệng: 61cm; Đường kính đáy: 60cm; Chiều cao: 90cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Thôn Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, năm 1961",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://media.sketchfab.com/models/93c8cf43b7fd421b8818ade273bb49a2/thumbnails/d7428e3c07d848b7b0d0b1f81f776394/3d4734fe96034c89bebd1340f0e6d4b9.jpeg",
    },
  ]);
  const [item, setItem] = useState();

  const [showModalAdd, setShowModalAdd] = useState(false);

  const columns = [
    {
      title: "Id Image",
      dataIndex: "id_image",
      key: "id_image",
      width: "7%",
    },
    {
      title: "Chất liệu",
      dataIndex: "type",
      key: "type",
      width: "7%",
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Niên đại",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Nơi phát hiện",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Công nhận",
      dataIndex: "recognition",
      key: "recognition",
    },
    {
      title: "Link 3D",
      dataIndex: "link3d",
      key: "link3d",
      render: record => {
        return (
          <div className="show-long-text">
            <a href={record} target="_blank" rel="noreferrer">
              {record}
            </a>
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined
            className="icon-edit"
            onClick={() => handleEditItem(record)}
          />

          <DeleteOutlined
            className="icon-delete"
            onClick={() => handleDeleteItem(record)}
          />
        </Space>
      ),
    },
  ];

  const handleEditItem = record => {
    setItem(record);
    setShowModalAdd(true);
  };

  const handleDeleteItem = record => {
    const filterData = dataSource.filter(data => data.id !== record.id);
    setDataSource(filterData);
  };

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setItem(prev => ({ ...prev, [name]: value }));
  };

  const handleShowModalAddItem = () => {
    setShowModalAdd(true);
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        JSON.stringify({
          trealet: {
            items: dataSource,
          },
        }),
      ],
      {
        type: "text/plain",
      }
    );
    element.href = URL.createObjectURL(file);
    element.download = "myFile.trealet";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleSaveModal = () => {
    if (item?.id) {
      const tempDataSourceFilter = dataSource.filter(
        data => data?.id !== item?.id
      );
      console.log(111, item, dataSource);
      setDataSource([...tempDataSourceFilter, item]);
      setItem({});
      setShowModalAdd(false);
      return;
    }
    if (item) {
      const tempId = uuidv4();
      setDataSource([...dataSource, { id: tempId, ...item }]);
      setItem({});
      setShowModalAdd(false);
    }
  };

  const handleCancelModal = () => {
    setShowModalAdd(false);
  };

  return (
    <div className="generate-trealet">
      <div className="generate-trealet-left">
        <h1>List items</h1>
        <div className="div-btn-download">
          <Button
            type="primary"
            onClick={handleShowModalAddItem}
            className="btn-add-new"
          >
            <PlusOutlined />
            Add Item
          </Button>
          <Button type="primary" danger onClick={downloadTxtFile}>
            <DownloadOutlined />
            Download file
          </Button>
        </div>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 4 }}
          scroll={{ y: 500 }}
        />
      </div>

      {showModalAdd && (
        <Modal
          centered
          visible={showModalAdd}
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
      )}
    </div>
  );
}

export default App;
