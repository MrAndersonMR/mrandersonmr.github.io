import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Offcanvas, Row } from "react-bootstrap";
import { User } from "../../interfaces";
import AtButton from "../atoms/atButton";
import AtText from "../atoms/atText";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import { ThemeContext } from "../../context/themeContext";
import AtForm from "../atoms/atForm";
import AtToast from "../atoms/atToast";

function SecOffcanvas({
  show = false,
  setShow = undefined,
  type = undefined,
  setUser = undefined,
}: {
  show: boolean;
  setShow: any;
  type?: "login";
  setUser?: any;
}) {
  const [users, setUsers] = useState<User[]>([]);
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const [register, setRegister] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setLogin(false);
    const local = JSON.parse(localStorage.getItem("users"));
    if (local) setUsers(local);
    setUsers(local);
  }, []);

  const updateUsers = () => {
    let usersAX: User[] = users !== null ? users : [];
    let userList = localStorage.getItem("users");
    let checkEmail = false;
    JSON.parse(userList).map((e, i) => {
      if (e.email === email) checkEmail = true;
    });
    if (!checkEmail) {
      usersAX.push({
        id: usersAX.length.toString(),
        name: name,
        email: email,
        password: password,
        type:
          themeStyle.themeName === "augustinNutTheme" ? "patient" : "client",
        cartList: [],
        histPurchase: [],
      });
      setUsers(usersAX);
      setRegister(true);
      // alert("Email Registrado");
      localStorage.setItem("users", JSON.stringify(usersAX));
      setName("");
      setEmail("");
      setPassword("");
      setLogin(true);
    } else setRegistered(true); //alert("Email já cadastrado");
    // setRender(!render);
  };

  const checkEmail = () => {
    let userList = localStorage.getItem("users");
    let user;
    let userListArray = JSON.parse(userList);
    userListArray.map((e, i) => {
      if (e.email === email && e.password === password) {
        user = e;
        user.token = (Math.random() + 1).toString(36).substring(7);
        userListArray = userListArray.filter((item) => item.email !== email);
        userListArray.push(user);
        setShow(false);
        setLogged(true);
        // alert("You are logged, name: " + e.name + " token: " + e.token);
        () => setUser(e);
      } else {
        e.token = "";
      }
    });
    if (!user) setNotRegistered(true);
    // console.log(userListArray);
    localStorage.setItem("users", JSON.stringify(userListArray));
  };

  return (
    <>
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement={type === "login" ? "end" : "start"}
        className={theme === "light" ? "" : "!bg-slate-500"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <AtText
              type="subtitle"
              sentence={!login ? "signUp" : "login"}
              css="capitalize"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {type === "login" ? (
            <>
              <Nav
                variant="underline"
                defaultActiveKey={!login ? "link-2" : "link-1"}
                className="mb-3 flex justify-end"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="link-2"
                    /*href="/"*/ onClick={() => setLogin(false)}
                  >
                    <AtText sentence="signUp" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" onClick={() => setLogin(true)}>
                    <AtText sentence="signIn" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              {!login ? (
                <AtForm
                  title="name"
                  placeholder="name"
                  level="main"
                  value={name}
                  change={(e: any) => setName(e.target.value)}
                  css={["mb-2"]}
                />
              ) : (
                <></>
              )}
              <AtForm
                title="email"
                placeholder="email"
                level="main"
                value={email}
                change={(e: any) => setEmail(e.target.value)}
                css={["mb-2"]}
              />
              <AtForm
                type="password"
                title="password"
                placeholder="password"
                level="main"
                value={password}
                change={(e: any) => setPassword(e.target.value)}
                css={["mb-4"]}
              />
              <Form.Group as={Row} className="mb-3">
                <Col className="flex justify-end">
                  {!login ? (
                    <AtButton sentence="register" click={() => updateUsers()} />
                  ) : (
                    <AtButton sentence="login" click={() => checkEmail()} />
                  )}
                </Col>
              </Form.Group>
              {false ? (
                <Form>
                  {!login ? (
                    <Form.Group
                      as={Row}
                      className="mb-3 flex justify-between"
                      controlId="formHorizontalName"
                    >
                      <Form.Label column sm={2}>
                        Name
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e: any) => setName(e.target.value)}
                        />
                      </Col>
                    </Form.Group>
                  ) : (
                    <></>
                  )}
                  <Form.Group as={Row} className="mb-3">
                    <Col className="flex justify-end">
                      {!login ? (
                        <AtButton
                          sentence="register"
                          click={() => updateUsers()}
                        />
                      ) : (
                        <AtButton sentence="login" click={() => checkEmail()} />
                      )}
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3 flex justify-between"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3 flex justify-between"
                    controlId="formHorizontalPassword"
                  >
                    <Form.Label column sm={2}>
                      Password
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Col
                      /*sm={{ span: 10, offset: 2 }}*/ className="flex justify-end"
                    >
                      {!login ? (
                        <AtButton
                          /* type="submit" */ sentence="register"
                          click={() => updateUsers()}
                        />
                      ) : (
                        <AtButton sentence="login" click={() => checkEmail()} />
                      )}
                    </Col>
                  </Form.Group>
                </Form>
              ) : (
                <></>
              )}
              {!login ? (
                <></>
              ) : (
                <div className="flex justify-center">
                  <Link href={""}>
                    <AtText type="legend" sentence="forgetPassword" />
                  </Link>
                </div>
              )}
            </>
          ) : (
            <>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <AtToast
        defShow={logged}
        defSetShow={setLogged}
        position="top-center"
        closeButton={true}
        title="l|:Sesion iniciada"
        content={[
          "l|:Su sesion se inicio, nombre:",
          users.filter((e) => e.token !== "")[0]
            ? users.filter((e) => e.token !== "")[0].name
            : "",
          "token:",
          users.filter((e) => e.token !== "")[0]
            ? users.filter((e) => e.token !== "")[0].token
            : "",
        ].join(" ")}
      />
      <AtToast
        defShow={register}
        defSetShow={setRegister}
        position="top-center"
        closeButton={true}
        title="l|:Registro finalizado"
        content={["l|:Su registro foi concluido"].join(" ")}
      />
      <AtToast
        defShow={registered}
        defSetShow={setRegistered}
        position="top-center"
        closeButton={true}
        title="l|:Usuario ya resgistrado"
        content={["l|:Correo electronico ya resgistrado"].join(" ")}
      />
      <AtToast
        defShow={notRegistered}
        defSetShow={setNotRegistered}
        position="top-center"
        closeButton={true}
        title="l|:Usuario no resgistrado"
        content={["l|:Correo electronico no esta resgistrado"].join(" ")}
      />
    </>
  );
}

export default SecOffcanvas;
