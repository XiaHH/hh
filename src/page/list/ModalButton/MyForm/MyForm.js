import {
    Form,
    Select,
    Radio,
    Button,
    Checkbox,
    Row,
    Col,
    DatePicker,
    Input,
  } from 'antd';
  
  const { Option } = Select;
  
class RegistForm extends React.Component {
  

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          var o = this.props.form;
          var date = new Date(o.getFieldValue('birthday'));
          var year = date.getFullYear();
          var month = date.getMonth()+1;    //js从0开始取 
          var day = date.getDate(); 
          alert("姓名："+o.getFieldValue('name') + '\n-性别：'
          + o.getFieldValue('sex') + '\n-工作：'
          + o.getFieldValue('job') + '\n-爱好：'
          + o.getFieldValue('hobby') + '\n-生日：'
            + year + "年"+month+"月"+day+"日");
        }
      });
    };
  
    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
          };
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          
          <Form.Item label="姓名" {...formItemLayout}>
            {getFieldDecorator('name')(
              <Input placeholder="输入姓名" />
            )}
          </Form.Item>    
           
          <Form.Item label="性别">
            {getFieldDecorator('sex')(
              <Radio.Group>
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
              </Radio.Group>,
            )}
          </Form.Item>    
        

          <Form.Item label="职业" hasFeedback>
            {getFieldDecorator('job', {
              rules: [{ message: '请选择你的职业' }],
            })(
              <Select placeholder="请选择你的职业">
                <Option value="singer">歌手</Option>
                <Option value="actor">演员</Option>
                    <Option value="student">学生</Option>
                    <Option value="engineer">工程师</Option>
              </Select>,
            )}
          </Form.Item>
  
          <Form.Item label="出生日期">
          {getFieldDecorator('birthday')(<DatePicker />)}
         </Form.Item>
         
  
          <Form.Item label="爱好">
            {getFieldDecorator('hobby', {
              initialValue: [],
            })(
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  <Col span={8}>
                    <Checkbox value="swim">游泳</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox  value="ymq">
                      羽毛球
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="game">游戏</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="dance">跳舞</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="sing">唱歌</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>,
            )}
          </Form.Item>

  
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }

const WrappedRegistrationForm = Form.create()(RegistForm);
export default WrappedRegistrationForm;
  