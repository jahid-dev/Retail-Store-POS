import  { useEffect } from 'react'
import { Button, Col, Form, Input, message, Row } from "antd";
import '../../resourses/authentication.css'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import useAxiosPublic from '../../hooks/useAxiosPublic';
const Register = () => {
  const axiosPublic = useAxiosPublic()  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish=(values)=>{
         dispatch({type:'showLoading'})
         axiosPublic.post('/users/register' , values).then((res)=>{
          dispatch({type:'hideLoading'})
           message.success('Registration successfull , please wait for verification')
         }).catch(()=>{
          dispatch({type:'hideLoading'})
           message.error('Something went wrong')
         })
  }
  useEffect(() => {
    if(localStorage.getItem('pos-user'))
    navigate('/')
}, [])
  return (
    <div className='authentication'>
        <Row>
          <Col lg={8} xs={22}>
          <Form
            layout="vertical"
            onFinish={onFinish}
          >
            <h1 className='text-3xl text-center'><b>Jahid POS</b></h1>
            <hr />
            <h3 className='text-2xl text-center'>Register</h3>
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="userId" label="User ID">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input type='password'/>
            </Form.Item>

           

            <div className="flex justify-between items-center">
              <Link to='/login'>Already Registered ? Click Here To Login</Link>
              <Button htmlType="submit" type="primary">
                Register
              </Button>
            </div>
          </Form>
          </Col>
        </Row>
    </div>
  )
}

export default Register