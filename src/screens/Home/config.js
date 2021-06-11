export const FIELDS = {
  entityId: {
    label: 'Entity ID',
    type: 'select',
  },
  identifier: {
    label: 'Identifier',
    type: 'select',
  },
  response: {
    label: 'Response',
    type: 'select',
  },
  event: {
    label: 'Event',
    type: 'select',
  },
  period: {
    label: 'Period',
    type: 'date',
  },
  periodRange: {
    label: 'Period Range',
    type: 'range',
  },
  relevantFields: {
    label: 'Relevant Fields',
    type: 'select',
    multiselect: [
      'MD ID',
      'Variant ID',
      'Date',
      'Speciality',
      'brand_segment',
      'brand_pre',
      'mkt_pre',
      'Event Period',
    ],
  },
};

export const TABLE_COLUMNS = [
  {
    title: 'MD ID',
    dataIndex: 'mdId',
    key: 'mdId',
  },
  {
    title: 'Variant ID',
    dataIndex: 'variantId',
    key: 'variantId',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date) => new Intl.DateTimeFormat('en').format(date),
  },
  {
    title: 'Speciality',
    dataIndex: 'speciality',
    key: 'speciality',
  },
  {
    title: 'brand_segment',
    dataIndex: 'brandSegment',
    key: 'brandSegment',
  },
  {
    title: 'brand_pre',
    dataIndex: 'brandPre',
    key: 'brandPre',
  },
  {
    title: 'mkt_pre',
    dataIndex: 'mktPre',
    key: 'mktPre',
  },
  {
    title: 'Event Period',
    dataIndex: 'eventPeriod',
    key: 'eventPeriod',
  },
];

export const CHARTS = {
  pieChart: [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ],
  stackedBar: [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
  ],
}




