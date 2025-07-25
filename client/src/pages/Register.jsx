import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  
  const {registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading} = useContext(AuthContext)
  return (
    <>
      <Form onSubmit={registerUser}>
        <Row style={{height:"100vh", justifyContent:"center", paddingTop:"10%"}}>
          <Col xs={6}>
            <Stack gap={3}>
              <h2 className="text-white">Register</h2>

              <Form.Control type="text" placeholder="Name" onChange={(e) => updateRegisterInfo({...registerInfo, name: e.target.value})}/>
              <Form.Control type="email" placeholder="Email" onChange={(e) => updateRegisterInfo({...registerInfo, email: e.target.value})} />
              <Form.Control type="password" placeholder="Password" onChange={(e) => updateRegisterInfo({...registerInfo, password: e.target.value})}/>


              <Button variant="primary" type="submit">
                {isRegisterLoading ? "Creating your Account" : "Register"}
              </Button>
              {
                registerError?.error && <Alert variant="danger"><p>{registerError?.message}</p></Alert>
              }
              
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Register;
