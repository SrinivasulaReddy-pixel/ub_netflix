import React from "react";
import "./subscrictionSection.css";
import { Card } from "antd";
const { Meta } = Card;

export const SubscrictionSection = () => {
  return (
    <div className="Subscriction-Section-layout">
      <div className="row Subscriction-Section-content">
        <div className="col-4">
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div className="col-4">
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
        </div>
        
        <div className="col-4">
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
      </div>
    </div>
  );
};
