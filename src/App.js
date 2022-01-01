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
import StepQuest from "./StepQuest";

const { TextArea } = Input;

function App() {
  // state show off
  const [dataHeader, setDataHeader] = useState({
    id_logo: "",
    title: "",
  });
  const [dataBanner, setDataBanner] = useState({
    id_image: "",
    title: "",
    description: "",
  });
  const [titleContent, setTitleContent] = useState("");
  const [dataItems, setDataItems] = useState([]);
  const [item, setItem] = useState();
  const [showModalAdd, setShowModalAdd] = useState(false);

  // state step quest
  const [dataStepQuest, setDataStepQuest] = useState([]);

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
      render: (record) => {
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
      title: "Link video, 3D",
      dataIndex: "link3d",
      key: "link3d",
      render: (record) => {
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
      title: "Sửa/Xoá",
      key: "action",
      render: (record) => (
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

  const handleEditItem = (record) => {
    setItem(record);
    setShowModalAdd(true);
  };

  const handleDeleteItem = (record) => {
    const filterData = dataItems.filter((data) => data.id !== record.id);
    setDataItems(filterData);
    ToastSuccess("Delete Item Successful!");
  };

  const handleShowModalAddItem = () => {
    setShowModalAdd(true);
  };

  const handleChangeInputHeader = (e) => {
    const { name, value } = e.target;
    setDataHeader((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeInputBanner = (e) => {
    const { name, value } = e.target;
    setDataBanner((prev) => ({ ...prev, [name]: value }));
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [
        JSON.stringify({
          trealet: {
            header: dataHeader,
            banner: dataBanner,
            titleContent,
            items: dataItems,
            questions: dataStepQuest,
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

  // useEffect(() => {
  //   const a = { ...TestJson };
  //   const temp =
  //     "<ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Cras sit amet dui in felis bibendum mollis.</li><li>Donec et lacus congue velit porttitor auctor.</li><li>Nunc non sapien non lacus molestie faucibus.</li><li>Vestibulum malesuada metus vitae euismod dictum.</li><li>Etiam mattis ex fringilla, molestie velit quis, fringilla arcu.</li><li>Duis nec lorem id augue tempus pulvinar.</li><li>Duis tristique massa sit amet est accumsan, vitae facilisis orci rutrum.</li><li>Proin vulputate sem sodales porta semper.</li><li>Praesent posuere justo sed justo hendrerit scelerisque.</li><li>Pellentesque tincidunt magna sit amet consequat porttitor.</li><li>Proin posuere ligula ultricies libero cursus eleifend.</li><li>Aliquam sed ex id libero finibus finibus</li><li>Nulla interdum massa et lorem congue cursus.</li><li>Maecenas ultrices enim id sapien viverra, eget elementum nulla luctus.</li><li>Praesent sit amet lacus at tellus tincidunt ullamcorper eget eget mi.</li><li>Vivamus sed dui a risus interdum blandit. </li></ul>";
  //   const tempDataExample = {
  //     trealet: {
  //       header: {
  //         id_logo: "23282",
  //         title: "Bảo Tàng Quốc Gia",
  //       },
  //       banner: {
  //         id_image: "23290",
  //         title: "Bảo Tàng Lịch Sử Quốc Gia",
  //         description:
  //           "Bảo tàng Lịch sử quốc gia đang lưu giữ số lượng bảo vật quốc gia nhiều nhất trong hệ thống các bảo tàng, di tích trên toàn quốc.Với những giá trị lịch sử tiêu biểu, độc đáo và quí hiếm, qua các đợt xét chọn, thẩm định của Hội đồng Di sản văn hóa quốc gia, 20 hiện vật trong tổng số hơn 200.000 tài liệu, hiện vật đang lưu giữ tại Bảo tàng đã được Thủ tướng Chính phủ công nhận là Bảo vật quốc gia.\n\nMỗi bảo vật quốc gia là một di sản quý giá chứa đựng những thông điệp của quá khứ, tinh hoa của nền văn hóa Việt Nam phong phú, đa dạng, giàu bản sắc, phản ánh lịch sử văn hóa lâu đời, truyền thống dựng nước và giữ nước của dân tộc Việt Nam.\n\nVới mục đích tôn vinh, quảng bá và giới thiệu giá trị của bảo vật đến đông đảo công chúng trong và ngoài nước; đổi mới cách tiếp cận nội dung và hình thức thể hiện kết hợp với ứng dụng công nghệ hiện đại, 20 bảo vật quốc gia được giới thiệu ở nhiều góc độ, cấp độ thông tin, cách thức tìm hiểu, trải nghiệm khác nhau về những nét đặc sắc, độc đáo của từng bảo vật.\n\nBảo tàng Lịch sử quốc gia trân trọng giới thiệu Trưng bày ảo 3D chuyên đề “Bảo vật quốc gia”",
  //       },
  //       titleContent: "Các sản phẩm nổi bật",
  //       items: a.trealet.items.map((item) => ({
  //         id: item.id,
  //         id_image: item.id_image,
  //         description: temp,
  //         titleVideo: "Hình ảnh liên quan",
  //         link3d: item.link3d,
  //       })),
  //     },
  //   };
  //   setDataBanner(tempDataExample?.trealet?.banner);
  //   setDataHeader(tempDataExample?.trealet?.header);
  //   setTitleContent(tempDataExample.trealet?.titleContent);
  //   setDataItems(tempDataExample.trealet?.items);
  // }, []);

  return (
    <>
      <ToastContainer />

      <div className="generate-trealet">
        <div className="generate-trealet-left">
          <div className="title-show-off">
            <span>Xây dựng kịch bản show off</span>
          </div>
          <Row>
            <div style={{ marginBottom: "12px", width: "50%" }}>
              <h1>Tiêu đề</h1>
              <div style={{ marginBottom: "12px" }}>
                <h3>ID Logo</h3>
                <Input
                  name="id_logo"
                  value={dataHeader?.id_logo}
                  onChange={handleChangeInputHeader}
                  style={{ width: "450px", maxWidth: "100%" }}
                  placeholder="Nhập ID Logo..."
                />
              </div>
              <div>
                <h3>Tên tiêu đề (Tên bảo tảng, tác giả,...)</h3>
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
                <h3>ID Ảnh Giới thiệu</h3>
                <Input
                  name="id_image"
                  value={dataBanner?.id_image}
                  onChange={handleChangeInputBanner}
                  style={{ width: "500px", maxWidth: "100%" }}
                  placeholder="Nhập ID Ảnh..."
                />
              </div>
              <div style={{ marginBottom: "12px" }}>
                <h3>Tiêu đề giới thiệu</h3>
                <Input
                  name="title"
                  value={dataBanner?.title}
                  onChange={handleChangeInputBanner}
                  style={{ width: "500px", maxWidth: "100%" }}
                  placeholder="Nhập tiêu đề..."
                />
              </div>
              <div>
                <h3>Mô tả</h3>
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
            <h1>Nội dung</h1>
            <div>
              <h3>Tiêu đề phần nội dung</h3>
              <Input
                value={titleContent}
                onChange={(e) => setTitleContent(e.target.value)}
                style={{ width: "500px", maxWidth: "100%" }}
                placeholder="Nhập tiêu đề nội dung..."
              />
            </div>
            <Row justify="space-between" align="middle">
              <h3>Danh sách nội dung</h3>
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
              pagination={dataItems?.length > 4 ? { pageSize: 4 } : false}
              scroll={{ y: 500 }}
            />
          </div>
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
      <div className="step-quest">
        <StepQuest
          dataStepQuest={dataStepQuest}
          setDataStepQuest={setDataStepQuest}
        />
      </div>
      <div className="step-quest download">
        <Row justify="center" align="middle">
          <Button type="primary" danger onClick={downloadTxtFile}>
            <DownloadOutlined />
            Tải xuống File Trealet
          </Button>
        </Row>
      </div>
    </>
  );
}

export default App;
