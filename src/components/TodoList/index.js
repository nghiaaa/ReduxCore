import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import { todoListSelector } from "../../redux/selector";

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("medium");
  // lay data todolist
  const todolist = useSelector(todoListSelector);

  const handleAddTdodo = () => {
    //goi action
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        prioriry: priority,
      })
    );
    setTodoName("");
    setPriority("medium");
  };
  console.log();
  const handleOnchangeInput = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriority = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todolist.map((todo) => (
          <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={(e) => handleOnchangeInput(e)} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTdodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
