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

    return (
      <Table
        rowsCount={dataList.getSize()}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}
        style={{ borderCollpase: 'collapse' }}
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
              <Cell style={{
                marginTop: '4px'
              }}>
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
              Worker
            </Cell>
          }
          cell={({ rowIndex }) => {
            return (
              <Cell
                style={{
                  marginTop: '-4px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    overflow: 'hidden',
                    whiteSpace: 'no-wrap'
                  }}
                >
                  <img
                    style={{
                      borderRadius: '50%',
                      width: '3em',
                      height: '3em',
                      padding: '0.3em'
                    }}
                    src={dataList.getObjectAt(rowIndex).avatar}
                  />
                  <div style={{
                    marginLeft: '0.3em',
                    marginTop: '0.3em'
                  }}>
                    <span
                      style={{
                        color: 'blue',
                        display: 'block'
                      }}
                    >
                      {`${dataList.getObjectAt(rowIndex).firstName} ${dataList.getObjectAt(rowIndex).lastName}`}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.7em',
                        color: 'gray'
                      }}
                    >
                      {`${dataList.getObjectAt(rowIndex).companyName}`}
                    </span>
                  </div>
                </div>
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
              <Cell
                style={{
                  lineHeight: '50px',
                  marginTop: '-8px'
                }}
              >
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
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '180px',
                  fontSize: '0.5em'
                }}>
                  <div style={{ width: '50px', textAlign: 'center' }}>
                    <span>$1345</span>
                  </div>
                  <span>$3655 Remaining</span>
                  <div style={{ width: '50px', textAlign: 'center' }}>
                    <span>$5000</span>
                  </div>
                </div>
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