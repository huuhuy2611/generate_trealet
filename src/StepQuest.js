import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Row } from "antd";
import "./StepQuest.css";
import { ToastSuccess } from "./ToastSuccess";
import ModalAddQuiz from "./ModalAddQuiz";

function StepQuest(props) {
  const { dataStepQuest, setDataStepQuest } = props;

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [dataEdit, setDataEdit] = useState(null);

  const handleCreateQuiz = () => {
    setShowModalAdd(true);
  };

  const handleEditQuiz = (item) => {
    setDataEdit(item);
    setShowModalAdd(true);
  };

  const handleDeleteQuiz = (item) => {
    const tempData = dataStepQuest;
    const filterItem = tempData?.filter((subItem) => subItem !== item);
    setDataStepQuest(filterItem);
    ToastSuccess("Xoá câu hỏi thành công!");
  };

  return (
    <div>
      {showModalAdd && (
        <ModalAddQuiz
          setShowModalAdd={setShowModalAdd}
          dataStepQuest={dataStepQuest}
          setDataStepQuest={setDataStepQuest}
          item={dataEdit}
          setItem={setDataEdit}
        />
      )}
      <div className="title-step-quest">
        <span>Xây dựng kịch bản tương tác</span>
      </div>

      <div className="list-step-quest">
        {dataStepQuest?.length ? (
          <>
            {dataStepQuest?.map((item, index) => (
              <div className="quest">
                <div className="create-form">
                  <Form name="control-ref">
                    <Form.Item
                      name="note"
                      className="form-item-create form-item-create-question"
                      label={`Câu hỏi ${index + 1}`}
                      style={{ marginBottom: "12px" }}
                    >
                      <Row style={{ flexDirection: "column" }}>
                        <div className="form-item-create-div">
                          <div style={{ fontSize: "16px" }}>
                            {item?.textQuestion}
                          </div>
                        </div>
                        {item?.idImageQuestion && (
                          <div>[ID ảnh: {item?.idImageQuestion}]</div>
                        )}
                      </Row>
                    </Form.Item>
                    <div>
                      <Row align="bottom" style={{ marginBottom: "10px" }}>
                        <div className="answer-title">
                          <span>Dạng trả lời:</span>
                        </div>
                        <span style={{ fontSize: "16px" }}>
                          (
                          {item?.typeAnswer === "text"
                            ? "Dạng chữ"
                            : item?.typeAnswer === "image"
                            ? "Dạng ảnh"
                            : "Dạng Đúng/Sai"}
                          )
                        </span>
                      </Row>
                      <Row style={{ width: "100%" }}>
                        <Form.Item
                          name="note"
                          className="form-item-create form-item-create-answer-item font-16"
                          label="A"
                          style={item?.answer === "A" && { color: "blue" }}
                        >
                          <div className="form-item-create-div">
                            <span>{item?.A}</span>
                          </div>
                        </Form.Item>
                        <Form.Item
                          name="note"
                          className="form-item-create form-item-create-answer-item font-16"
                          label="B"
                          style={item?.answer === "B" && { color: "blue" }}
                        >
                          <div className="form-item-create-div">
                            <span>{item?.B}</span>
                          </div>
                        </Form.Item>
                      </Row>
                      {item?.typeAnswer !== "T/F" && (
                        <Row>
                          <Form.Item
                            name="note"
                            className="form-item-create form-item-create-answer-item font-16"
                            label="C"
                            style={item?.answer === "C" && { color: "blue" }}
                          >
                            <div className="form-item-create-div">
                              <span>{item?.C}</span>
                            </div>
                          </Form.Item>
                          <Form.Item
                            name="note"
                            className="form-item-create form-item-create-answer-item font-16"
                            label="D"
                            style={item?.answer === "D" && { color: "blue" }}
                          >
                            <div className="form-item-create-div">
                              <span>{item?.D}</span>
                            </div>
                          </Form.Item>
                        </Row>
                      )}
                    </div>
                    <Row justify="center" style={{ marginBottom: "24px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "white",
                          background: "blue",
                          marginRight: "8px",
                          padding: "4px 12px",
                          border: "1px solid blue",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleEditQuiz(item)}
                      >
                        Sửa
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "white",
                          background: "red",
                          padding: "4px 12px",
                          border: "1px solid red",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDeleteQuiz(item)}
                      >
                        Xoá
                      </div>
                    </Row>
                  </Form>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <span style={{ fontSize: "16px" }}>
              Chưa có câu hỏi!!!
              <br />
              Vui lòng nhấn{" "}
              <span
                className="create-icon"
                style={{ margin: 0, padding: "3px 6px", pointerEvents: "none" }}
              >
                <PlusOutlined style={{ fontSize: "13px", color: "white" }} />
              </span>{" "}
              bên dưới để tạo câu hỏi
            </span>
          </>
        )}
      </div>

      <div onClick={handleCreateQuiz} className="create-icon">
        <PlusOutlined style={{ fontSize: "30px", color: "white" }} />
      </div>
    </div>
  );
}

export default StepQuest;
