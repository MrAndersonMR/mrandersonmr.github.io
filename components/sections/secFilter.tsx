import React, { useRef, useState } from "react";
import {
  Accordion,
  Button,
  Container,
  Form,
  Overlay,
  Tooltip,
} from "react-bootstrap";
import Icon from "../icon/icon";
import AtForm from "../atoms/atForm";

function SecFilter({
  type = undefined,
  setFilter = undefined,
}: {
  type?: string;
  setFilter?: any;
}) {
  const [minShow, setMinShow] = useState(false);
  const handleMinClose = () => {
    setMinShow(false);
  };
  const handleMinShow = () => {
    setMinShow(true);
    setMaxShow(false);
  };

  const [minValue, setMinValue] = useState(0);
  const [maxShow, setMaxShow] = useState(false);
  const handleMaxClose = () => {
    setMaxShow(false);
  };
  const handleMaxShow = () => {
    setMaxShow(true);
    setMinShow(false);
  };

  const [maxValue, setMaxValue] = useState(100);

  const minTarget = useRef(null);
  const maxTarget = useRef(null);
  const [filterEX, setFilterEX] = useState("");

  return (
    <>
      {true ? (
        <div>
          <Container className="flex items-center my-3">
            <AtForm
              level="main"
              placeholder="search"
              iconName={["filter"]}
              change={(e) => setFilterEX(e.target.value)}
              click={[
                () => {
                  setFilter(filterEX);
                },
              ]}
            />
            {/* <Form className="w-full">
              <Form.Group
                className="mr-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="!rounded-full !bg-white/25"
                  type="text"
                  placeholder="search"
                />
              </Form.Group>
            </Form>
            <Button variant="light" className="p-2 !rounded-full">
              {Icon("bs", "BsSliders")}
            </Button> */}
          </Container>
        </div>
      ) : (
        <div className="flex flex-col m-3">
          <div className="flex">
            <Button
              ref={minTarget}
              className="!p-3 !rounded-r-none !rounded-tl-3xl !rounded-bl-md"
              onClick={() => {
                minShow ? handleMinClose() : handleMinShow();
              }}
            >
              {Icon("fa", "FaGreaterThanEqual")}
            </Button>
            <Overlay
              target={minTarget.current}
              show={minShow}
              placement="right"
            >
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  <Form.Range
                    max={maxValue}
                    value={minValue}
                    onChange={(e: any) => setMinValue(e.currentTarget.value)}
                  />
                  min {minValue}
                </Tooltip>
              )}
            </Overlay>
            <Button
              ref={maxTarget}
              className="!p-3 !rounded-l-none !rounded-tr-md !rounded-br-3xl"
              onClick={() => {
                maxShow ? handleMaxClose() : handleMaxShow();
              }}
            >
              {Icon("fa", "FaLessThanEqual")}
            </Button>
            <Overlay
              target={maxTarget.current}
              show={maxShow}
              placement="right"
            >
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  <Form.Range
                    min={minValue}
                    value={maxValue}
                    onChange={(e: any) => setMaxValue(e.currentTarget.value)}
                  />
                  max {maxValue}
                </Tooltip>
              )}
            </Overlay>
            <div className="flex">
              {/* <div className="w-[90px] h-[90px] bg-green-400 !shadow-inner rounded-full"></div> */}
              <div className="ml-3 flex py-1 px-3 bg-slate-100 !shadow-[inset_0_3px_6px_-1px_rgba(0,0,0,0.3)] rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl">
                <h5 className="mt-[4px]">min ${minValue},00 - </h5>&nbsp;
                <h5 className="mt-[4px]"> max ${maxValue},00</h5>
              </div>
            </div>
          </div>
          <Accordion className="my-3 !rounded-none">
            <Accordion.Item
              eventKey="0"
              className="!bg-transparent !rounded-none !text-white"
            >
              <Accordion.Header>Colors</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`blue`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`green`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`gray`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`yellow`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`red`}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              className="!bg-transparent !rounded-none !text-white"
            >
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`extra small`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`small`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`medium`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`large`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`extra large`}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              className="!bg-transparent !rounded-none !text-white"
            >
              <Accordion.Header>Style</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`men`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`women`}
                />
                <Form.Check
                  type={"checkbox"}
                  name="group1"
                  id={`default-checkbox`}
                  label={`children`}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div>
            <Button className="!rounded-tl-md !rounded-tr-2xl !rounded-br-md !rounded-bl-2xl">
              Apply Filter
            </Button>
            <Button variant="outline-light" className="ml-3 p-1 !rounded-full">
              {Icon("ri", "RiEraserFill", "20px")}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default SecFilter;
