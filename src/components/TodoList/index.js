import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { TodoListSelector, searchTextSelector } from "../../redux/selector"
export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState('');
  const [prioriry, setPrioriry] = useState("Medium");

  const todoList = useSelector(TodoListSelector)
  const searchText = useSelector(searchTextSelector);
  // console.log("1111", prioriry)
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
      id: uuidv4(),
      name: todoName,
      priority: prioriry,
      completed: false
    }))
    setTodoName("");
    setPrioriry("Medium")
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
    // console.log("handleInputChange", e.target.value)  
  }

  const handlePriorityChange = (value) => {
    //  console.log("value", value)  
    setPrioriry(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map((item, index) => (
            <Todo name={item.name} prioriry={item.priority} key={index}/>
          ))
        }
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={handleInputChange} value={todoName} />
          <Select  value={prioriry} onChange={handlePriorityChange} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
