import { useState } from "react";
import * as S from "./style";

import OrderLeftSection from "../../molecules/OrderLeftSection";
import OrderCenterSection from "../../molecules/OrderCenterSection";
import OrderRightSection from "../../molecules/OrderRightSection";

const OrderRow = ({ data }) => {
  const [status, setStatus] = useState(data.order_check);

  return (
    <S.Wrapper status={status}>
      <OrderLeftSection time={data.order_time} client={data.client_number} />
      <OrderCenterSection
        bill={data.order_bills}
        cocktails={data.client_cocktails}
      />
      <OrderRightSection handleClick={setStatus} status={status} />
    </S.Wrapper>
  );
};

export default OrderRow;
