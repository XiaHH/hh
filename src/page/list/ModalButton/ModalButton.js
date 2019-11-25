import { Modal, Button } from 'antd';
import WrappedRegistrationForm from './MyForm/MyForm'
class ModalButton extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };



  showModal = () => {
    this.setState({
      visible: true,
    });
  };


  handleCancel = () => {
    console.log('取消');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal} >
          增加
        </Button>
        <Modal
          title="Title"
          visible={visible}
        
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
        <WrappedRegistrationForm ></WrappedRegistrationForm>
        </Modal>
      </div>
    );
  }
}
export default ModalButton;
