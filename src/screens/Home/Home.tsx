import { FC, useEffect } from 'react';
import { Row, Col, Form } from 'antd';

import styles from './Home.module.scss';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchCSVData } from '../../store/csv';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Table from '../../components/Table';
import Select from '../../components/Select';
import PieChartWithCustomizedLabel from '../../components/Charts/PieChartWithCustomizedLabel';
import StackedBar from '../../components/Charts/StackedBar';

import { FIELDS, TABLE_COLUMNS, CHARTS } from './config';

interface Props {

};

// const formComponents = {
//   select: {
//     Component: ({ text }) => {
//       return (
//         <Select>{text}</Select>
//       );
//     },
//   }
// }

const Home: FC<Props> = () => {
  const csvData = useAppSelector((state) => state.csv.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCSVData());
  }, []);

  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <Card title="Test Configuration">
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Form layout="inline">
                {
                  Object.values(FIELDS).map((field) => {
                    return (
                      <Form.Item label={field.label} key={field.label}>
                        Field
                      </Form.Item>
                    )
                  })
                }
              </Form>
            </Col>
            <Col span={24}>
              <Button>
                Identify Test & Control Entities
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Row style={{ height: 400 }}>
          <Col span={12}>
            <PieChartWithCustomizedLabel data={CHARTS.pieChart} />
          </Col>
          <Col span={12}>
            <StackedBar data={CHARTS.stackedBar} />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Table
          dataSource={csvData}
          columns={TABLE_COLUMNS}
          pagination={false}
          size="small"
          bordered
        />
      </Col>
    </Row>
  )
}

export default Home;
