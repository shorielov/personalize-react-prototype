import AntSelect, { SelectProps } from 'antd/lib/select';
import './style.scss'

interface Props extends SelectProps<any> {

}

const Select: React.FC<Props> = ({ children, ...otherProps }) => {
  return (
    <AntSelect {...otherProps}>
      { children }
    </AntSelect>
  );
}

export default Select
