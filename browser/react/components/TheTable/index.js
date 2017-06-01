import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Column,
  Cell
} from 'fixed-data-table-2';
import FakeData from '../../../helpers/fakeData';
import styles from './styles';

class TheTable extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: new FakeData(2000)
    };
  };

  render () {
    return (
      <Table
        rowsCount={this.state.data.getSize()}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}
      >
        <Column
          width={200}
          cell={({ rowIndex }) => {
            return (
              <Cell>
                {this.state.data.getObjectAt(rowIndex).email}
              </Cell>
            )
          }}
        />
      </Table>
    );
  };
};

export default TheTable;