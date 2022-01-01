import { Modal, Button, Form, Select, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastSuccess } from "./ToastSuccess";

const { Option } = Select;

// const optionsTypeQuestion = [
//   { key: "Dạng chữ", value: "text" },
//   { key: "Dạng ảnh", value: "image" },
// ];

const optionsTypeAnswer = [
  { key: "Dạng chữ", value: "text" },
  { key: "Dạng ảnh", value: "image" },
  { key: "Dạng Đúng/Sai", value: "T/F" },
];

const optionsAnswer = [
  { key: "A", value: "A" },
  { key: "B", value: "B" },
  { key: "C", value: "C" },
  { key: "D", value: "D" },
];

const optionsAnswerTF = [
  { key: "A", value: "A" },
  { key: "B", value: "B" },
];

function ModalAddQuiz(props) {
  const { setShowModalAdd, dataStepQuest, setDataStepQuest, item, setItem } =
    props;

  const [quiz, setQuiz] = useState({
    typeQuestion: "text",
    typeAnswer: "text",
    textQuestion: "",
    idImageQuestion: "",
    A: "",
    B: "",
    C: "",
    D: "",
    answer: null,
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (quiz?.typeAnswer === "T/F" && name !== "question") return;
    setQuiz((prev) => ({ ...prev, [name]: value }));
  };

  const resetAnswers = () => {
    setQuiz((prev) => ({ ...prev, A: "", B: "", C: "", D: "" }));
  };

  // const onTypeQuestionChange = (value) => {
  //   setQuiz((prev) => ({ ...prev, typeQuestion: value }));
  // };

  const onTypeAnswerChange = (value) => {
    setQuiz((prev) => ({ ...prev, typeAnswer: value }));
    if (value === "T/F") {
      setQuiz((prev) => ({ ...prev, A: "Đúng", B: "Sai" }));
    } else {
      resetAnswers();
    }
  };

  const handleSaveModal = () => {
    if (item?.id) {
      const index = dataStepQuest.findIndex((data) => data?.id === quiz?.id);
      console.log("dasdasd", index, quiz, dataStepQuest);
      const tempData = dataStepQuest;
      tempData[index] = quiz;
      setDataStepQuest(tempData);
      setShowModalAdd(false);
      ToastSuccess("Cập nhật thành công!");
      setItem(null);
      return;
    }
    const tempId = uuidv4();
    setDataStepQuest([...dataStepQuest, { id: tempId, ...quiz }]);
    setShowModalAdd(false);
    ToastSuccess("Tạo thành công!");
  };

  const handleCancelModal = () => {
    setShowModalAdd(false);
    setItem(null);
  };

  useEffect(() => {
    if (item) setQuiz(item);
  }, [item]);

  return (
    <Modal
      centered
      visible
      width={1024}
      title={
        <span className="modal-title">
          {item ? "Sửa câu hỏi" : "Thêm câu hỏi"}
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
      <div className="create-form">
        <Form name="control-ref">
          <Form.Item
            className="form-item-create form-item-create-question"
            label={`Câu hỏi`}
          >
            <div
              className="form-item-create-div"
              style={{ marginLeft: "20px" }}
            >
              {/* <Select
                value={quiz?.typeQuestion}
                onChange={onTypeQuestionChange}
                style={{ width: "14%", marginRight: "16px" }}
              >
                {optionsTypeQuestion?.map((item) => (
                  <Option value={item?.value}>{item?.key}</Option>
                ))}
              </Select> */}
              <Input
                name="textQuestion"
                value={quiz?.textQuestion}
                onChange={handleChangeInput}
                placeholder={"Điền câu hỏi..."}
                style={{ width: "70%" }}
              />
            </div>
          </Form.Item>
          <Form.Item label={`ID ảnh (nếu có):`}>
            <Input
              name="idImageQuestion"
              value={quiz?.idImageQuestion}
              onChange={handleChangeInput}
              placeholder={"Điền id ảnh..."}
              style={{ width: "69%" }}
            />
          </Form.Item>
          <div>
            <Row style={{ marginBottom: "10px" }}>
              <div className="answer-title">
                <span>Dạng trả lời:</span>
              </div>
              <Select
                value={quiz?.typeAnswer}
                onChange={onTypeAnswerChange}
                style={{ width: "14%", marginRight: "16px" }}
              >
                {optionsTypeAnswer?.map((item) => (
                  <Option value={item?.value}>{item?.key}</Option>
                ))}
              </Select>
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              <div className="answer-title" style={{ marginRight: "47px" }}>
                <span>Đáp án:</span>
              </div>
              <Select
                value={quiz?.answer}
                onChange={(value) =>
                  setQuiz((prev) => ({ ...prev, answer: value }))
                }
                placeholder="Chọn đáp án"
                style={{ width: "14%", marginRight: "16px" }}
              >
                {quiz?.typeAnswer === "T/F" ? (
                  <>
                    {optionsAnswerTF?.map((item) => (
                      <Option value={item?.value}>{item?.key}</Option>
                    ))}
                  </>
                ) : (
                  <>
                    {optionsAnswer?.map((item) => (
                      <Option value={item?.value}>{item?.key}</Option>
                    ))}
                  </>
                )}
              </Select>
            </Row>
            <Row style={{ width: "100%" }}>
              <Form.Item
                name="note"
                className="form-item-create form-item-create-answer-item"
                label="A"
              >
                <div className="form-item-create-div">
                  <Input
                    style={{
                      pointerEvents:
                        quiz?.typeAnswer === "T/F" ? "none" : "visible",
                    }}
                    name="A"
                    value={quiz?.A}
                    onChange={handleChangeInput}
                    placeholder={
                      quiz?.typeAnswer === "text"
                        ? "Điền câu hỏi..."
                        : quiz?.typeAnswer === "image"
                        ? "Điền id ảnh..."
                        : ""
                    }
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="note"
                className="form-item-create form-item-create-answer-item"
                label="B"
              >
                <div className="form-item-create-div">
                  <Input
                    name="B"
                    value={quiz?.B}
                    onChange={handleChangeInput}
                    placeholder={
                      quiz?.typeAnswer === "text"
                        ? "Điền câu hỏi..."
                        : quiz?.typeAnswer === "image"
                        ? "Điền id ảnh..."
                        : ""
                    }
                  />
                </div>
              </Form.Item>
            </Row>
            {quiz?.typeAnswer !== "T/F" && (
              <Row>
                <Form.Item
                  name="note"
                  className="form-item-create form-item-create-answer-item"
                  label="C"
                >
                  <div className="form-item-create-div">
                    <Input
                      name="C"
                      value={quiz?.C}
                      onChange={handleChangeInput}
                      placeholder={
                        quiz?.typeAnswer === "text"
                          ? "Điền câu hỏi..."
                          : quiz?.typeAnswer === "image"
                          ? "Điền id ảnh..."
                          : ""
                      }
                    />
                  </div>
                </Form.Item>
                <Form.Item
                  name="note"
                  className="form-item-create form-item-create-answer-item"
                  label="D"
                >
                  <div className="form-item-create-div">
                    <Input
                      name="D"
                      value={quiz?.D}
                      onChange={handleChangeInput}
                      placeholder={
                        quiz?.typeAnswer === "text"
                          ? "Điền câu hỏi..."
                          : quiz?.typeAnswer === "image"
                          ? "Điền id ảnh..."
                          : ""
                      }
                    />
                  </div>
                </Form.Item>
              </Row>
            )}
          </div>

          {/* <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" onClick={handleSaveModal}>
              Lưu
            </Button>
          </Form.Item> */}
        </Form>
      </div>
    </Modal>
  );
}

export default ModalAddQuiz;
