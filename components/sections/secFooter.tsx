import Link from "next/link";
import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SimpleLanguageContext } from "../../context/simpleThemeContext";
import Icon from "../icon/icon";
import AtText from "../atoms/atText";

function SecFooter({
  title = undefined,
  colNum = 1,
  colTitles = undefined,
  colLinks = [],
  colHrefs = [],
}: {
  title: string;
  colNum?: number;
  colTitles?: string | string[];
  colLinks?: any[];
  colHrefs?: any[];
}) {
  // const [language, setLanguage] = useContext(SimpleLanguageContext);

  return (
    <>
      {/* <span className="text-white">{Icon("fa6", "FaArtstation", "36px")}</span>
      <Button onClick={() => setLanguage("pt")}>Translate</Button>
      {language} */}
      <Container>
        <Row>
          {colNum > 1 ? (
            Array.from(Array(colNum).keys()).map((e, i) => {
              return (
                <Col key={i}>
                  <AtText sentence={colTitles[i]} />
                  <div>
                    {colLinks.length > 0
                      ? colLinks[i].map((f: any, j: number) => {
                          return (
                            <div key={j}>
                              <Link href={colHrefs[i][j]}>
                                <AtText sentence={f} />
                              </Link>
                              <br />
                            </div>
                          );
                        })
                      : undefined}
                  </div>
                </Col>
              );
            })
          ) : (
            <Col>
              {title}
              {/* <AtText
                type="subtitle"
                sentence={typeof colTitles === "string" ? colTitles : ""}
                css="capitalize"
              /> */}
              <div className="flex gap-1 my-2">
                {colLinks.map((e: any, i: number) => {
                  return (
                    <div key={i} className="gap-1 my-2">
                      <Link key={i} href={colHrefs[i]}>
                        <AtText
                          sentence={e}
                          css={
                            i !== colLinks.length - 1
                              ? "pr-1 border-r-2 border-black"
                              : ""
                          }
                        />
                      </Link>
                      {/* {i !== colLinks.length - 1 ? " |" : undefined} */}
                    </div>
                  );
                })}
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default SecFooter;
