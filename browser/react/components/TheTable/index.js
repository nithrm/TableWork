import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Column,
  Cell
} from 'fixed-data-table-2';
import { Line } from 'rc-progress';
import Checkbox from 'material-ui/Checkbox';
import styles from './styles';

class TheTable extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {
      dataList,
      checkABox,
      updateCount
    } = this.props;
    console.log('dataList', dataList);

    return (
      <Table
        rowsCount={dataList.getSize()}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}
      >
        <Column
          width={42}
          header={
            <Cell
              style={{
                textAlign: 'center',
                backgroundColor: '#646b6f',
                color: 'white',
                fontSize: '1em',
                fontWeight: 'normal'
              }}
            >
              {updateCount}
            </Cell>
          }
          cell={({ rowIndex }) => {
            return (
              <Cell style={{ margin: '0 auto' }}>
                <Checkbox
                  key={rowIndex}
                  checked={dataList.getObjectAt(rowIndex).checked}
                  onCheck={() => { checkABox(rowIndex) }}
                />
              </Cell>
            );
          }}
        />
        <Column
          width={250}
          header={
            <Cell
              style={{
                textAlign: 'center',
                backgroundColor: '#646b6f',
                color: 'white',
                fontSize: '1em',
                fontWeight: 'normal'
              }}
            >
              E-Mail
            </Cell>
          }
          cell={({ rowIndex }) => {
            return (
              <Cell>
                {dataList.getObjectAt(rowIndex).email}
              </Cell>
            )
          }}
        />
        <Column
          width={200}
          header={
            <Cell
              style={{
                textAlign: 'center',
                backgroundColor: '#646b6f',
                color: 'white',
                fontSize: '1em',
                fontWeight: 'normal'
              }}
            >
              Budget
            </Cell>
          }
          cell={({ rowIndex }) => {
            return (
              <Cell>
                <Line
                  percent={dataList.getObjectAt(rowIndex).budget}
                  strokeWidth={4}
                  trailWidth={3.5}
                  style={{width: '180px'}}
                />
              </Cell>
            )
          }}
        />
      </Table>
    );
  };
};

TheTable.propTypes = {
  dataList: PropTypes.object,
  checkABox: PropTypes.func,
  updateCount: PropTypes.number
}

export default TheTable;