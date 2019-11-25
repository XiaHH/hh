import React from 'react';
import { Table,Divider,Tag,Input,Button,Row,Col } from 'antd';
import { connect } from 'dva';
import ModalButton from './ModalButton/ModalButton';
const { Search } = Input;
class List extends React.Component {
    columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key:'name',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key:'sex',
        },
        {
          title: '工作',
          dataIndex: 'job',
          key:'job',
        },
        {
          title: '生日',
          dataIndex: 'birthday',
          key:'birthday',
        },
        {
          title: '爱好',
          dataIndex: 'hobby',
          key: 'hobby',
          render: hobby => (
            <span>
              {hobby.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record,index) => (
            <span>
              <a>修改 </a>
              <Divider type="vertical" />
              <a onClick={this.deletePerson.bind(this,index)}>删除</a>
            </span>
          ),
        },
    ];
    
    constructor(props) {
        super(props);
        this.state = {
            personList : [
              {
                key: '1',
                name: '胡彦斌',
                sex: '男',
                job:'歌手',
                birthday:'1997/09/16',
                hobby:['跑步','篮球','游戏']
              },
              {
                  key: '2',
                  name: '是多少',
                  sex: '男',
                  job:'演员',
                  birthday:'1997/09/16',
                  hobby:['跑步','篮球','游戏']
              },
              {
                  key: '3',
                  name: '小明',
                  sex: '男',
                  job:'学生',
                  birthday:'1997/09/16',
                  hobby:['跑步','篮球','游戏']
              },
              {
                  key: '4',
                  name: '小红',
                  sex: '女',
                  job:'歌手',
                  birthday:'1997/09/16',
                  hobby:['跑步','篮球','游戏']
              },
              {
                  key: '5',
                  name: '小林',
                  sex: '男',
                  job:'工程师',
                  birthday:'1997/09/16',
                  hobby:['跑步','篮球','游戏']
              },
          ],
          index : '',
          PersonCount :5,
          selectedRowKeys:[],
          selectedRows:[],
          visible: false,
          confirmLoading: false,
            
      }
      this.deletePerson = this.deletePerson.bind(this);
      this.addPerson = this.addPerson.bind(this);
      this.findPerson = this.findPerson.bind(this);

    }
    //
    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
    };
  
    addPerson = (newPerson) => {
        newPerson.key=this.state.PersonCount+1;
        this.setState({
              dataSource:[...this.state.dataSource,newPerson]
        })
      
    }
  
    deletePerson(index){
      console.log(index)
      const dataSource = [...this.state.personList];
      dataSource.splice(index, 1);
      this.setState(prevState => ({
      personList: dataSource,
      PersonCount:prevState.PersonCount-1
      }));
    }


  findPerson = (name) => {
    var n = this.state.personList.length;
    for (var i = 0; i < n; i++) {
      if (this.state.personList[i]["name"] == name)
        return this.state.personList[i];
    }
  }
    //
  
  
    render() {
        const { visible, confirmLoading, ModalText } = this.state;

        return (
        <div>
            <div>
                <Row>
                        <Col span={12}>
                        <Search placeholder="input search text" onSearch={value => console.log(this.findPerson(value))} enterButton />
                        </Col>
                        <Col span={4} offset={8}>
                        <ModalButton ></ModalButton> 
                        </Col>
                </Row>    
                
                
            </div>
            <Table columns={this.columns} dataSource={this.state.personList}  rowKey="key" />
        </div>
        );
  }
}

export default List;