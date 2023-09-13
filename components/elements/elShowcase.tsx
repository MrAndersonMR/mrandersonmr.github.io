import React, { useEffect, useRef, useState } from "react";
import AtImage from "../atoms/atImage";
import AtCard from "../atoms/atCard";
import AtText from "../atoms/atText";
import AtTable from "../atoms/atTable";
import AtForm from "../atoms/atForm";
import AtBadge from "../atoms/atBadge";
import AtButton from "../atoms/atButton";
import { CartItem, User, Comment } from "../../interfaces";
import SecModal from "../sections/secModal";
import { Overlay, Tooltip } from "react-bootstrap";

function ElShowcase({ item = undefined }: { item: any }) {
  let images: string[] = item ? item.urls : [];
  const [image, setImage] = useState(images[0]);

  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showNoTokenModal, setShowNoTokenModal] = useState(false);

  const [user, setUser] = useState<User>();
  const [userCart, setUserCart] = useState<CartItem[]>();

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  // const [show, setShow] = useState(false);
  // const target = useRef(null);

  const updateCart = () => {
    if (verifyLogged()) {
      if (color === "" || size === "") {
        // setShow(!show); //ModalNoSIZEorCOLOR
      } else {
        let usersAX = localStorage.getItem("users");
        let usersListAX = JSON.parse(usersAX);

        let productsAX = localStorage.getItem("products");
        let productsListAX = JSON.parse(productsAX);
        productsListAX.quantity = productsListAX.quantity - 1;
        localStorage.setItem("products", JSON.stringify(productsListAX));

        item.color = color;
        item.size = size;

        let check = false;

        usersListAX.map((e, i) => {
          if (e.id === user.id) {
            e.cartList.map((l, j) => {
              if (
                l.product.id === item.id &&
                l.product.size === item.size &&
                l.product.color === item.color
              ) {
                l.product.count = l.product.count + 1;
                check = true;
              }
            });
            if (!check) {
              item.count = 1;
              e.cartList.push({
                id: user.cartList.length.toString(),
                product: item,
                status: "processing",
                count: 1,
              });
            }
            setUserCart(e.cartList);
          }
          setUser(e);
        });

        localStorage.setItem("users", JSON.stringify(usersListAX));
        setShowCartModal(true);
      }
    }
  };

  function verifyLogged() {
    let check = false;
    JSON.parse(localStorage.getItem("users")).map((e, i) => {
      if (e.token !== "" && e.token !== undefined) {
        check = true;
        setUser(e);
      }
    });

    if (!check) {
      setShowNoTokenModal(true);
    } else {
      setShowCommentForm(true);
    }
    return check;
  }

  const updateComments = () => {
    let commentsAX: Comment[] = item.comments !== null ? item.comments : [];
    commentsAX.push({
      user: user ? user.name : "",
      comment: comment,
      date: new Date().toISOString().split("T")[0],
    });
    item.comments = commentsAX;
    // setRender(!render);
    setComments(commentsAX);
    let productsList = localStorage.getItem("products");
    let productsDTOList = JSON.parse(productsList);
    productsDTOList = productsDTOList.filter((e, i) => e.id !== item.id);
    productsDTOList.push(item);
    localStorage.setItem("products", JSON.stringify(productsDTOList));
  };

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("comments"));
    if (local) setComments(local);
    setComments(local);
    const userLocal = JSON.parse(localStorage.getItem("users"));
    userLocal.map((e, i) => {
      if (e.token !== "" && e.token !== undefined) {
        setUser(e);
        setUserCart(e.cartList);
      }
    });
  }, []);

  return (
    <>
      <div className="flex md:flex-row flex-col md:items-start items-center">
        <div className="flex md:flex-col md:gap-0 gap-2 items-center mt-6 mx-3">
          {images.map((image, i) => {
            return image && i < 3 ? (
              <div key={i} className="flex items-center justify-center">
                {i === 2 ? (
                  <h5 className="absolute mb-0 z-10 text-white">
                    <AtText
                      sentence={
                        images.length > 3
                          ? "l|:+" + (images.length - 3)
                          : "blankSpace"
                      }
                    />
                  </h5>
                ) : undefined}
                <AtImage
                  src={[image]}
                  width={50}
                  height={50}
                  css={
                    "bg-cover bg-center my-1 " +
                    (images.length > 3 && i === 2 ? "!brightness-50" : "")
                  }
                  click={() => setImage(image)}
                />
              </div>
            ) : (
              <></>
            );
          })}
          <AtButton
            level="secondary"
            iconType="bs"
            icon="BsChevronUp"
            css="my-0.5"
            click={() => {
              images[0] === image
                ? setImage(images[images.length - 1])
                : setImage(images[images.indexOf(image) - 1]);
            }}
          />
          <AtButton
            level="secondary"
            iconType="bs"
            icon="BsChevronDown"
            css="my-0.5"
            click={() => {
              images[images.length - 1] === image
                ? setImage(images[0])
                : setImage(images[images.indexOf(image) + 1]);
            }}
          />
        </div>
        <div className="flex flex-col">
          <AtCard
            image={image}
            title={"l|:" + item.name}
            text={"l|:" + item.description}
            wImage="40%"
            layout={["horizontal", "transparent"]}
            additional={["score", "comments", "clothesFilter"]}
            item={item}
            actions={["sizes", "colors", "buy"]}
            tooltips={[
              undefined,
              undefined,
              !user ? (
                <AtText type="legend" sentence={"messageNoLogged"} />
              ) : color === "" || size === "" ? (
                <AtText type="legend" sentence={"mustSelectSizeColor"} />
              ) : undefined,
            ]}
            // buttonsRef={[undefined, undefined, target]}
            clicks={[
              (e) => {
                setSize(e);
              },
              (e) => {
                setColor(e);
              },
              () => {
                updateCart();
              },
            ]}
            css="text-ellipsis"
          />

          <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center my-4">
            <div className="w-[100%]">
              <AtText
                sentence={"description"}
                css="!text-center sm:!text-left"
              />
              <div className="flex flex-col md:flex-row items-center my-2">
                <AtText sentence={"usersComments"} type="text" css="mr-2" />
                <AtBadge
                  bg={"dark"}
                  sentence={"l|:" + item.comments.length}
                  css="mr-2"
                />
                <AtText sentence={"questionsAnswers"} type="text" css="mr-2" />
                <AtBadge
                  bg={"dark"}
                  sentence={"l|:" + item.faqs.length}
                  css="mr-2"
                />
              </div>
              <div className="w-[100vw] sm:!w-auto">
                <AtTable
                  title={"description"}
                  item={item}
                  type="feature"
                  // variant={"dark"}
                  headers={["label", "feature", "infos"]}
                />
              </div>
            </div>
            <div className="flex justify-center">
              {/* <iframe
                width="auto"
                height="45%"
                src="https://player.vimeo.com/video/403777528"
              /> */}
              <iframe
                // width="auto"
                height="45%"
                src="https://player.vimeo.com/video/425837205"
                className="max-w-[90%]"
              />
              {/* <iframe
                width="auto"
                height="45%"
                src="https://player.vimeo.com/video/680697604"
              />
              <iframe
                width="auto"
                height="45%"
                src="https://player.vimeo.com/video/590799652"
              />
              <iframe
                width="auto"
                height="45%"
                src="https://player.vimeo.com/video/678173574"
              /> */}
            </div>
          </div>
          <AtText sentence={"comments"} css="mb-3 !text-center sm:!text-left" />
          <div className="w-[100vw] sm:!w-auto">
            <AtTable
              title={"comments"}
              item={item}
              type="comment"
              headers={["user", "comment", "date"]}
              click={
                !showCommentForm && user
                  ? () => {
                      verifyLogged();
                    }
                  : undefined
              }
            />
          </div>
          {showCommentForm ? (
            <AtForm
              value={comment}
              css={["mt-3", ""]}
              // iconType={"fa"}
              // icon={"FaCommentMedical"}
              placeholder="yourComment"
              iconName={["comment", "close"]}
              change={(e: any) => setComment(e.target.value)}
              click={[
                () => {
                  updateComments();
                  setComment("");
                },
                () => setShowCommentForm(false),
              ]}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <SecModal
        show={showCartModal}
        setShow={setShowCartModal}
        title="myCart"
        // size={"lg"}
        type="cart"
        carts={{ cartList: userCart }}
        closeButton="stylized"
      />
      <SecModal
        show={showNoTokenModal}
        setShow={setShowNoTokenModal}
        type="token"
      />
    </>
  );
}

export default ElShowcase;
