import  { useEffect } from 'react'
import { Button, Col, Form, Input, message, Row } from "antd";
import '../../resourses/authentication.css'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import useAxiosPublic from '../../hooks/useAxiosPublic';
const Login = () =>  {

  const axiosPublic = useAxiosPublic()
  const dispatch = useDispatch()
  const naviate = useNavigate()
  const onFinish=(values)=>{
    dispatch({type:'showLoading'})
    axiosPublic.post('/users/login' , values).then((res)=>{
     dispatch({type:'hideLoading'})
      message.success('Login successful')
      localStorage.setItem('pos-user' , JSON.stringify(res.data))
      naviate('/')
    }).catch(()=>{
     dispatch({type:'hideLoading'})
      message.error('Something went wrong')
    })
}

useEffect(() => {
    if(localStorage.getItem('pos-user'))
    naviate('/')
}, [])

  return (
    <div className='authentication'>
        <Row>
          <Col lg={8} xs={22}>
          <Form
            layout="vertical"
            onFinish={onFinish}
          >
            <h1 className='text-2xl text-center'><b>Jahid POS</b></h1>
            <hr />
            <h3 className='text-xl text-center'>Login</h3>
          
            <Form.Item name="userId" label="User ID">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input type='password'/>
            </Form.Item>

           

            <div className="flex justify-between items-center">
              <Link to='/register'>Not Yet Registered ? Click Here To Register</Link>
              <Button htmlType="submit" type="primary">
                Login
              </Button>
            </div>
          </Form>
          </Col>
        </Row>
    </div>
  )
}

export default Login