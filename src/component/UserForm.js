// import React from 'react'
// import { Input, Button } from 'antd';
// import 'antd/dist/antd.css';
// const { Search } = Input;
// function UserForm() {
//   const onSearch = (value) => console.log(value);
//   return (
//     <div >
//       <div>
//       <Search placeholder="input search text" onSearch={onSearch} enterButton/>
//       </div>
//       <div
//         style={{ display: "flex", justifyContent: "space-around" }}>
//         <Button type='primary'>New Post</Button>
//         <Button type='primary'>Published</Button>
//       </div>
//     </div>
//   )
// }

import React, { useState } from "react";
import { Input, Row, Space, Col, Button, Card } from "antd";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";

function UserForm() {
  const [newPostDisplay, setNewPostDisplay] = useState(false);
  const [publish, setPublish] = useState("");
  const [title, setTitle] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const onSearch = (value) => {

    value = value.target.value.toLowerCase();
    if (value) {
      const filteredArr = task.filter((item) => {
        const present = item.toLowerCase().includes(value);
        if (present) {
          return item;
        }
      });
      setTask(filteredArr);
    } else {
      setTask(filteredData);
    }
  };
  const storeData = (e) => {
    setTask([...task, title, text]);
    setFilteredData([...task, title, text]);
  };
  return (
    <div>
      <Card style={{ border: "none" }}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="input search text"
          onChange={onSearch}
          allowClear
          style={{ margin: "0px 0px 20px 0px" }}
        />
        <Row>
          <Col span={12}>
            <Button
              type="primary"
              onClick={() => setNewPostDisplay(true)}
              style={{ marginBottom: "10px" }}
            >
              New Post
            </Button>
            {newPostDisplay && (
              <div>
                <Input
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <br />
                <Input
                  placeholder="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <br />
                <br />
                <Button onClick={storeData}>PUBLISH</Button>
              </div>
            )}
          </Col>
          <Col span={12}>
            <Button type="primary" onClick={() => setPublish(true)}>
              Published
            </Button>
            <br />
            <br />
            <div style={{ height: "78vh", overflowY: "auto" }}>
              {publish &&
                task.map((item, index) => <h1 key={index}>{item}</h1>)}
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
export default UserForm;