import "./App.css";
import "antd/dist/antd.css";
import { Button, Table, Space, Input, Row } from "antd";
import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import ModalAddItem from "./ModalAddItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastSuccess } from "./ToastSuccess";

const { TextArea } = Input;

function App() {
  const [dataHeader, setDataHeader] = useState({
    id_logo: "",
    title: "",
  });
  const [dataBanner, setDataBanner] = useState({
    id_image: "",
    title: "",
    description: "",
  });
  const [dataItems, setDataItems] = useState([
    {
      id: "14ef2115-7392-47e3128-a34b-9a09da20d042",
      id_image: "19738",
      type: "Đồng",
      size: "Chiều cao: 40cm; Chiều dài: 30cm; Chiều rộng: 27cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Lạch Trường, Hoằng Hóa, Thanh Hóa, năm 1935",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://sketchfab.com/models/9ded08611e7e4e5b9be11f4a9098e2e5/embed",
    },
    {
      id: "14ef2115-7392-47e8-a34b-9a0139da20d042",
      id_image: "19738",
      type: "Đồng",
      size: "Chiều cao: 40cm; Chiều dài: 30cm; Chiều rộng: 27cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Lạch Trường, Hoằng Hóa, Thanh Hóa, năm 1935",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://sketchfab.com/models/9ded08611e7e4e5b9be11f4a9098e2e5/embed",
    },
    {
      id: "14ef2115-7392-47e8-a34b-9a31209da20d042",
      id_image: "19738",
      type: "Đồng",
      size: "Chiều cao: 40cm; Chiều dài: 30cm; Chiều rộng: 27cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Lạch Trường, Hoằng Hóa, Thanh Hóa, năm 1935",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://sketchfab.com/models/9ded08611e7e4e5b9be11f4a9098e2e5/embed",
    },
    {
      id: "14ef2115-7392-47e8-a34b-9a09da20d0331242",
      id_image: "19738",
      type: "Đồng",
      size: "Chiều cao: 40cm; Chiều dài: 30cm; Chiều rộng: 27cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Lạch Trường, Hoằng Hóa, Thanh Hóa, năm 1935",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://sketchfab.com/models/9ded08611e7e4e5b9be11f4a9098e2e5/embed",
    },
    {
      id: "14ef2115-7392-47e8-a34b-9a09da20d041112",
      id_image: "19738",
      type: "Đồng",
      size: "Chiều cao: 40cm; Chiều dài: 30cm; Chiều rộng: 27cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Lạch Trường, Hoằng Hóa, Thanh Hóa, năm 1935",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://sketchfab.com/models/9ded08611e7e4e5b9be11f4a9098e2e5/embed",
    },
    {
      id: "14ef2115-7392-47e8-a34b-9a09da20d0412",
      id_image: "19738",
      type: "Đồng",
      size: "Chiều cao: 40cm; Chiều dài: 30cm; Chiều rộng: 27cm",
      age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
      address: "Lạch Trường, Hoằng Hóa, Thanh Hóa, năm 1935",
      recognition:
        "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
      link3d:
        "https://sketchfab.com/models/9ded08611e7e4e5b9be11f4a9098e2e5/embed",
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
    const filterData = dataItems.filter(data => data.id !== record.id);
    setDataItems(filterData);
    ToastSuccess("Delete Item Successful!");
  };

  const handleShowModalAddItem = () => {
    setShowModalAdd(true);
  };

  const handleChangeInputHeader = e => {
    const { name, value } = e.target;
    setDataHeader(prev => ({ ...prev, [name]: value }));
  };

  const handleChangeInputBanner = e => {
    const { name, value } = e.target;
    setDataBanner(prev => ({ ...prev, [name]: value }));
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        JSON.stringify({
          trealet: {
            header: dataHeader,
            banner: dataBanner,
            items: dataItems,
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

  return (
    <div className="generate-trealet">
      <ToastContainer />
      <div className="generate-trealet-left">
        <Row>
          <div style={{ marginBottom: "12px", width: "50%" }}>
            <h1>Header</h1>
            <div style={{ marginBottom: "12px" }}>
              <p>Logo ID</p>
              <Input
                name="id_logo"
                value={dataHeader?.id_logo}
                onChange={handleChangeInputHeader}
                style={{ width: "450px", maxWidth: "100%" }}
                placeholder="Enter logo id..."
              />
            </div>
            <div>
              <p>Title Header</p>
              <Input
                name="title"
                value={dataHeader?.title}
                onChange={handleChangeInputHeader}
                style={{ width: "450px", maxWidth: "100%" }}
                placeholder="Enter title header..."
              />
            </div>
          </div>
          <div style={{ marginBottom: "12px", width: "50%" }}>
            <h1>Banner</h1>
            <div style={{ marginBottom: "12px" }}>
              <p>Image Banner ID</p>
              <Input
                name="id_image"
                value={dataBanner?.id_image}
                onChange={handleChangeInputBanner}
                style={{ width: "500px", maxWidth: "100%" }}
                placeholder="Enter Image Banner id..."
              />
            </div>
            <div style={{ marginBottom: "12px" }}>
              <p>Title banner</p>
              <Input
                name="title"
                value={dataBanner?.title}
                onChange={handleChangeInputBanner}
                style={{ width: "500px", maxWidth: "100%" }}
                placeholder="Enter title..."
              />
            </div>
            <div>
              <p>Description</p>
              <TextArea
                name="description"
                value={dataBanner?.description}
                onChange={handleChangeInputBanner}
                style={{ width: "500px", maxWidth: "100%" }}
                placeholder="Enter description..."
              />
            </div>
          </div>
        </Row>

        <div style={{ marginBottom: "12px" }}>
          <Row justify="space-between" align="middle">
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
            </div>
          </Row>

          <Table
            dataItems={dataItems}
            columns={columns}
            pagination={{ pageSize: 4 }}
            scroll={{ y: 500 }}
          />
        </div>
        <Row justify="center" align="middle">
          <Button type="primary" danger onClick={downloadTxtFile}>
            <DownloadOutlined />
            Download file
          </Button>
        </Row>
      </div>

      {showModalAdd && (
        <ModalAddItem
          setShowModalAdd={setShowModalAdd}
          item={item}
          setItem={setItem}
          dataItems={dataItems}
          setDataItems={setDataItems}
        />
      )}
    </div>
  );
}

export default App;
