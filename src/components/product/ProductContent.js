import React from "react";
import { Button, Card, Row, Col } from "antd";

import styled from "styled-components";
import DefalutLayout from "../ common/DefalutLayout";

const ProductWrap = styled.article`
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
`;
const ProductContent = () => {
  const { Meta } = Card;
  const Cover = (
    <img
      alt="example"
      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    />
  );
  return (
    <DefalutLayout>
      <Button>추가히기</Button>
      <ProductWrap>
        <Row>
          <Col span={6}>
            <Card hoverable style={{ width: 240 }} cover={Cover}>
              <Meta title="카드지갑" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable style={{ width: 240 }} cover={Cover}>
              <Meta title="카드지갑" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable style={{ width: 240 }} cover={Cover}>
              <Meta title="카드지갑" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable style={{ width: 240 }} cover={Cover}>
              <Meta title="카드지갑" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </ProductWrap>
    </DefalutLayout>
  );
};
export default React.memo(ProductContent);
