import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { Table } from 'antd';

export default class PersonPage extends Component {
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
        ]
      }
    }

    addPerson = () => {
      this.setState(prevState => {
      const prevPersonList = prevState.personList;
        this.counter += 1;
        const newPerson = {
        key: this.counter,
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        job: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        };
        return {
        personList: prevPersonList.concat(newPerson),
        };
      });
    }
    render() {
      return (
        <div>
          {
            this.state.personList.map(person => {
              return (
                <Card key={person.key}>
                  <div>Q: {person.name}</div>
                  <div>
                    <strong>A: {person.job}</strong>
                  </div>
                </Card>
              );
            })
          }
          <div>
          <Button onClick={this.addPerson}> 添加卡片 </Button>
          </div>   
        </div>
      );
    }
  }