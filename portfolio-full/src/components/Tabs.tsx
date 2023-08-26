import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function BaseTab() {
  return (
    <Tabs
      defaultActiveKey='profile'
      id='justify-tab-example'
      className='mb-3'
      justify>
      {/* {props.items.map(tab => (
        <Tab eventKey={tab.eventKey} title={tab.title}>
          {tab.children}
        </Tab>
      ))} */}
      <Tab eventKey='profile' title='Profile'>
        Tab content for Profile
      </Tab>
      <Tab eventKey='longer-tab' title='Loooonger Tab'>
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey='contact' title='Contact'>
        Tab content for Contact
      </Tab>
    </Tabs>
  )
}

export default BaseTab
