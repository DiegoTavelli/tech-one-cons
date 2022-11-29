import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { HotTable, HotColumn } from '@handsontable/react'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.css'
import ButtonDownload from '../CustomComponents/CustomButtons/ButtonDownload/ButtonDownload'

registerAllModules();

function UsersList() {
  const usersData = useSelector((state) => state.users);
  const hotTableComponent = useRef(null);


  const downloadFunction = () => {
    const downloadPlugin = hotTableComponent.current.hotInstance.getPlugin('exportFile');
    downloadPlugin.downloadFile('csv', {
      filename: 'users',
      fileExtension: 'csv',
      mimeType: 'text/csv',
      columnHeaders: true
    })
  }

  return (
    <div>
      <ButtonDownload onClickFnc={downloadFunction} />
      {
        usersData &&
        <HotTable
          ref={hotTableComponent}
          data={usersData}
          licenseKey='non-commercial-and-evaluation'
          colHeaders={true}
          rowHeaders={true}
          columnSorting={true}
          mergeCells={true}
          contextMenu={['alignment']}
          readOnly={true}
        >
          <HotColumn data='id' title='id' />
          <HotColumn data='name' title='Name' />
          <HotColumn data='lastName' title='Last Name' />
          <HotColumn data='email' title='Email' />
          <HotColumn data='phone' title='Phone' />
          <HotColumn data='country' title='Country' />
          <HotColumn data='city' title='City' />
          <HotColumn data='street' title='Street' />
          <HotColumn data='streetNumber' title='Street Number' />
          <HotColumn data='postalCode' title='Postal Code' />
          <HotColumn data='institution' title='Institution' />
          <HotColumn data='degree' title='Degree' />
          <HotColumn data='fieldOfStudy' title='Field Of Study' />
          <HotColumn data='activities' title='Activities' />
          <HotColumn data='description' title='Description' />
          <HotColumn data='start' title='Start Date' />
          <HotColumn data='end' title='End Date' />
        </HotTable>
      }
    </div>
  )
}

export default UsersList;

