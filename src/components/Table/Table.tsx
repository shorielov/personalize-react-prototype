import AntTable, { TableProps } from 'antd/lib/table';

import styles from 'Table.module.scss';

interface Props extends TableProps<any> {

}

const Table: React.FC<Props> = (props) => {
  return (
    <AntTable
      {...props}
    />
  )
}

export default Table
