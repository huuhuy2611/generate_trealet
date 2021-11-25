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

function App(props) {
  const [dataHeader, setDataHeader] = useState({
    id_logo: "",
    title: "",
  });
  const [dataBanner, setDataBanner] = useState({
    id_image: "",
    title: "",
    description: "",
  });

  const [dataItems, setDataItems] = useState([]);
  const [item, setItem] = useState();

  const [showModalAdd, setShowModalAdd] = useState(false);

  const columns = [
    {
      title: "ID Ảnh",
      dataIndex: "id_image",
      key: "id_image",
      width: "10%px",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: record => {
        return (
          <>
            <div
              className="long-text"
              dangerouslySetInnerHTML={{ __html: record }}
            />
          </>
        );
      },
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
      title: "Hành động",
      key: "action",
      render: record => (
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
            <h1>Tiêu đề</h1>
            <div style={{ marginBottom: "12px" }}>
              <p>ID Logo</p>
              <Input
                name="id_logo"
                value={dataHeader?.id_logo}
                onChange={handleChangeInputHeader}
                style={{ width: "450px", maxWidth: "100%" }}
                placeholder="Nhập ID Logo..."
              />
            </div>
            <div>
              <p>Tên tiêu đề (Tên bảo tảng, tác giả,...)</p>
              <Input
                name="title"
                value={dataHeader?.title}
                onChange={handleChangeInputHeader}
                style={{ width: "450px", maxWidth: "100%" }}
                placeholder="Nhập tên bảo tàng, tác giả..."
              />
            </div>
          </div>
          <div style={{ marginBottom: "12px", width: "50%" }}>
            <h1>Giới thiệu</h1>
            <div style={{ marginBottom: "12px" }}>
              <p>ID Ảnh Giới thiệu</p>
              <Input
                name="id_image"
                value={dataBanner?.id_image}
                onChange={handleChangeInputBanner}
                style={{ width: "500px", maxWidth: "100%" }}
                placeholder="Nhập ID Ảnh..."
              />
            </div>
            <div style={{ marginBottom: "12px" }}>
              <p>Tiêu đề giới thiệu</p>
              <Input
                name="title"
                value={dataBanner?.title}
                onChange={handleChangeInputBanner}
                style={{ width: "500px", maxWidth: "100%" }}
                placeholder="Nhập tiêu đề..."
              />
            </div>
            <div>
              <p>Mô tả</p>
              <TextArea
                name="description"
                value={dataBanner?.description}
                onChange={handleChangeInputBanner}
                style={{ width: "500px", maxWidth: "100%" }}
                placeholder="Nhập mô tả..."
              />
            </div>
          </div>
        </Row>

        <div style={{ marginBottom: "12px" }}>
          <Row justify="space-between" align="middle">
            <h1>Danh sách nội dung</h1>
            <div className="div-btn-download">
              <Button
                type="primary"
                onClick={handleShowModalAddItem}
                className="btn-add-new"
              >
                <PlusOutlined />
                Thêm nội dung
              </Button>
            </div>
          </Row>

          <Table
            dataSource={dataItems}
            columns={columns}
            pagination={{ pageSize: 4 }}
            scroll={{ y: 500 }}
          />
        </div>
        <Row justify="center" align="middle">
          <Button type="primary" danger onClick={downloadTxtFile}>
            <DownloadOutlined />
            Tải xuống File Trealet
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

// {
//   id: "55fe482a-2f1e-44db-822b-92db5a2bfe0f",
//   type: "Đồng",
//   id_image: "19754",
//   size: "Chiều cao: 8,5cm; Chiều rộng: 9,5cm",
//   age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
//   address: "Lạch Trường, Hoằng Hóa, Thanh Hóa, năm 1934",
//   recognition:
//     " Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
//   link3d:
//     "https://sketchfab.com/models/39840e112ed346a9b8ebf24c9fdc4b8f/embed",
// },
// {
//   id: "14ef2115-7392-47e8-a34b-9a09da20d042",
//   id_image: "19738",
//   type: "Đồng",
//   size: "Chiều cao: 40cm; Chiều dài: 30cm; Chiều rộng: 27cm",
//   age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
//   address: "Lạch Trường, Hoằng Hóa, Thanh Hóa, năm 1935",
//   recognition:
//     "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
//   link3d:
//     "https://sketchfab.com/models/9ded08611e7e4e5b9be11f4a9098e2e5/embed",
// },
// {
//   id: "1de99353-944b-4987-9634-bd44d4cd45d1",
//   id_image: "19722",
//   type: "Đồng",
//   size: "Đường kính mặt : 78,5cm; Đường kính chân: 79,9cm; Chiều cao: 61,5cm",
//   age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
//   address: "Làng Hoàng Hạ, xã Văn Hoàng, huyện Phú Xuyên, Hà Nội, năm 1937",
//   recognition:
//     "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
//   link3d:
//     "https://sketchfab.com/models/eb9be13432d84c60913a5fd98fc5e190/embed",
// },
// {
//   id: "372c7567-5d77-4b9a-abcd-d453b2d4cc0f",
//   id_image: "19770",
//   type: "Đồng",
//   size: "Đường kính miệng: 61cm; Đường kính đáy: 60cm; Chiều cao: 90cm",
//   age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
//   address: "Thôn Đào Thịnh, huyện Trấn Yên, tỉnh Yên Bái, năm 1961",
//   recognition:
//     "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ",
//   link3d:
//     "https://sketchfab.com/models/0605efb7decd47e9be0caf69ffde8eca/embed",
// },
// {
//   id: "55069989-4c5c-4b92-be13-e04601a7cb83",
//   id_image: "19730",
//   type: "Gỗ",
//   size: "Chiều dài: 476cm Chiều rộng: 77cm Chiều sâu: 39 cm",
//   age: "Văn hoá Đông Sơn, khoảng 2500 - 2000 năm cách ngày nay",
//   address: "Thôn Ngọc Khê, xã Phù Ninh, Thủy Nguyên, Hải Phòng, năm 1961",
//   recognition:
//     "Là Bảo vật quốc gia theo Quyết định số 2599/QĐ-TTg ngày 30/12/2013 của Thủ tướng Chính phủ.",
//   link3d: "https://3dbooth.egal.vn/baovatquocgia/dao-gam/index.html",
// },
// {
//   id: "836016de-fdc6-458c-8713-1fdef62313dd",
//   id_image: "19746",
//   type: "Đá cát",
//   size: "Chiều cao: 270cm; Dày: 110cm x 80cm",
//   age: "Thế kỷ 3 - 4",
//   address:
//     "Làng Võ Cạnh, xã Vĩnh Trung, huyện Diên Khánh, tỉnh Khánh Hòa, năm 1910",
//   recognition:
//     "Là Bảo vật quốc gia theo Quyết định số 2599/QĐ-TTg ngày 30/12/2013 của Thủ tướng Chính phủ.",
//   link3d:
//     "https://sketchfab.com/models/64dc0e08546046d88fca35612c9c2022/embed",
// },
// {
//   id: "c5a119bb-519a-4950-8415-d84437d617e8",
//   id_image: "19762",
//   type: "Đồng",
//   size: "Chiều cao: 8,5cm; Kích thước mặt: 7,3cm x 7,3cm",
//   age: "Niên hiệu Long Khánh 5, Trần Duệ Tông (năm 1377)",
//   address: "Hương Khê, Hà Tĩnh, năm 1962",
//   recognition:
//     "Là Bảo vật quốc gia theo Quyết định số 1426/QĐ-TTg ngày 01/10/2012 của Thủ tướng Chính phủ.",
//   link3d:
//     "https://sketchfab.com/models/0bb3fc2327e941de92991a49e8c2c0a7/embed",
// },
