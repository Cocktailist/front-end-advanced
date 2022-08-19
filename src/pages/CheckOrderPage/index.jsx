/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Space, Tabs, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import OrderRow from "../../components/organisms/OrderRow";

const dateFormatting = (params) => {};

// GET 주문목록!
const dummyDidMount = [
  {
    order_num: "1",
    client_number: "3",
    order_time: Date.now(),
    order_bills: "42800",
    client_cocktails: [
      {
        cocktail: "마가리따",
        options: [
          { option: "테킬라", value: "2" },
          { option: "트리플 섹", value: "3" },
          { option: "라임 주스", value: "1" },
          { option: "얼음", value: "1" },
        ],
      },
      {
        cocktail: "모히또",
        options: [
          { option: "강낭콩", value: "2" },
          { option: "증류수", value: "3" },
          { option: "라임 주스", value: "1" },
          { option: "얼음", value: "1" },
        ],
      },
    ],
    order_check: "inOrder", // inOrder | inServe | doneOrder
  },
  {
    order_num: "2",
    client_number: "5",
    order_time: Date.now(),
    order_bills: "15000",
    client_cocktails: [
      {
        cocktail: "모히또",
        options: [
          { option: "테킬라", value: "2" },
          { option: "트리플 섹", value: "3" },
          { option: "라임 주스", value: "1" },
          { option: "얼음", value: "1" },
        ],
      },
    ],
    order_check: "inServe",
  },
];

const CheckOrderPage = () => {
  // TODO: API
  // parse cocktailbarId from dynamic path
  // & API

  useEffect(() => {}, []);

  const [views, setViews] = useState("inOrder");
  const navigate = useNavigate();

  return (
    <>
      <Tabs
        color={"var(--primary-color)"}
        defaultValue="all"
        style={{
          transform: "translateX(-1.5em) translateY(-1.5em)",
          position: "fixed",
          zIndex: 5,
          backgroundColor: "white",
        }}
        onTabChange={(value) => {
          navigate(`?views=${value}`);
          setViews(`${value}`);
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="inOrder">
            <Text size="lg">주문중</Text>
          </Tabs.Tab>
          <Tabs.Tab value="doneOrder">
            <Text size="lg">주문완료</Text>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Space h="xl"></Space>

      {dummyDidMount.map((order) => (
        <OrderRow data={order} />
      ))}

      {/* {dummyDidMount.cocktails.map((cocktail) => {
        if (views === "recommend" && cocktail.cocktail_recommended === "false")
          return null;
        return (
          <CocktailImgWithText
            key={cocktail.cocktail_id}
            to={cocktail.cocktail_id}
            img={cocktail.cocktail_img}
            upper={cocktail.cocktail_korname}
            lower={cocktail.cocktail_ingredients}
          ></CocktailImgWithText>
        );
      })} */}
    </>
  );
};

export default CheckOrderPage;
