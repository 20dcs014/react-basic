import './App.css';
import { useState } from 'react';
import { Col, Container, Form, Row, Table } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [formData, setFormData] = useState({
    uname: '',
    umail: '',
    uphone: '',
    uMessage: '',
    index: ''
  });

  const [userData, setUserData] = useState([]);

  const getVal = (event) => {
    const oldData = { ...formData };
    const inputName = event.target.name;
    const inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currUserData = {
      uname: formData.uname,
      umail: formData.umail,
      uphone: formData.uphone,
      uMessage: formData.uMessage
    };

    if(formData.index ===""){

    

    let checkFilterUser = userData.filter((v) => v.umail === formData.umail || v.uphone === formData.uphone);
    if (checkFilterUser.length === 1) {
      toast.error("Email or phone already exist");
    } else {
      const updatedUserData = [...userData, currUserData];
      setUserData(updatedUserData);

      setFormData({
        uname: '',
        umail: '',
        uphone: '',
        uMessage: '',
        index: ''
      });
    }
  }
  else{
    let editData= formData.index;
    let updatedUserData =userData;
    let checkFilterUser = userData.filter((v,i) =>(v.umail === formData.umail || v.uphone === formData.uphone)&& i!= editData);
    if (checkFilterUser.length === 0) {
     
    
    updatedUserData[editData]['uname'] = formData.uname;
    updatedUserData[editData]['umail'] = formData.umail;
    updatedUserData[editData]['uphone'] = formData.uphone;
    updatedUserData[editData]['uMessage'] = formData.uMessage;

    setUserData(updatedUserData)
    setFormData({
      uname: '',
      umail: '',
      uphone: '',
      uMessage: '',
      index: ''
    });
  }
  else{
    toast.error("Email or phone already exist");
  }
  }
  };

  const deleteRow = (i) => {
    const updatedUserData = userData.filter((_, index) => index !== i);
    setUserData(updatedUserData);
    toast.success("Data deleted")
  };

  const editRow=(index)=>{
  let editData = userData.filter((v,i)=>i == index)[0];
  editData['index']= index;
  setFormData(editData)
  }

  return (
    <Container fluid>
      <ToastContainer/>
      <Container>
        <Row>
          <Col className='text-center py-5'>
            <h1>Enquiry Now</h1>
          </Col>
        </Row>

        <Row>
          <Col lg={5}>
            <Form onSubmit={handleSubmit}>
              <div className='pb-3'>
                <label className='form-label'>Name</label>
                <input type="text" onChange={getVal} name='uname' value={formData.uname} className='form-control' />
              </div>
              <div className='pb-3'>
                <label className='form-label'>Email</label>
                <input type="email" onChange={getVal} value={formData.umail} name='umail' className='form-control' />
              </div>
              <div className='pb-3'>
                <label className='form-label'>Phone</label>
                <input type="text" onChange={getVal} value={formData.uphone} name='uphone' className='form-control' />
              </div>
              <div className='mb-3'>
                <label htmlFor='uMessage' className='form-label'>Message</label>
                <textarea className='form-control' onChange={getVal} value={formData.uMessage} name='uMessage' id='uMessage' rows='3'></textarea>
              </div>
              <button className='btn btn-primary'>
                {formData.index !== "" ? 'Update' : 'Save'}
              </button>
            </Form>
          </Col>

          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? userData.map((obj, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{obj.uname}</td>
                    <td>{obj.umail}</td>
                    <td>{obj.uphone}</td>
                    <td>{obj.uMessage}</td>
                    <td>
                      <button onClick={() => deleteRow(i)}>Delete</button>
                      <button onClick={() => editRow(i)}>Edit</button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={6}>No Data Found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
