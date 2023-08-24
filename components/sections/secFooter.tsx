import Link from "next/link";
import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SimpleLanguageContext } from "../../context/simpleThemeContext";
import Icon from "../icon/icon";

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
  const [language, setLanguage] = useContext(SimpleLanguageContext);

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
                  <h4>{colTitles[i]}</h4>
                  <div>
                    {colLinks.length > 0
                      ? colLinks[i].map((f: any, j: number) => {
                          return (
                            <div key={j}>
                              <Link href={colHrefs[i][j]}>{f}</Link>
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
              <h4>{colTitles}</h4>
              <div className="flex gap-1">
                {colLinks.map((e: any, i: number) => {
                  return (
                    <div key={i} className="gap-1">
                      <Link href={colHrefs[i]}>{e}</Link>
                      {i !== colLinks.length - 1 ? " |" : undefined}
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
