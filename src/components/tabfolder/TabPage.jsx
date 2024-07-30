import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabArray } from './TabArray';
import { tabArray2 } from './TabArray';
import { tabArray3 } from './TabArray';
import { tabArray4 } from './TabArray';
import { tabArray5 } from './TabArray';

import TabCard from './TabCard';

function TabPage () {
    return(
  <div>
     <Tabs>
    <TabList>
      <Tab>Domains</Tab>
      <Tab>Web Hosting</Tab>
      <Tab>Dedicated Servers</Tab>
      <Tab>Virtual Cloud Servers</Tab>
      <Tab>WordPress Hosting</Tab>
    </TabList>

    <TabPanel>
    <div>
    {tabArray.map(tabArray => (
        <TabCard type={tabArray.type} image={tabArray.cardImage} price={tabArray.price} description={tabArray.cardDescription} color={tabArray.color} />
      ))}
    </div>
    </TabPanel>
    <TabPanel>
    <div>
    {tabArray2.map(tabArray2 => (
        <TabCard type={tabArray2.type} image={tabArray2.cardImage} price={tabArray2.price} description={tabArray2.cardDescription} color={tabArray2.color} />
      ))}
    </div>
    </TabPanel>
    <TabPanel>
    <div>
    {tabArray3.map(tabArray3 => (
        <TabCard type={tabArray3.type} image={tabArray3.cardImage} price={tabArray3.price} description={tabArray3.cardDescription} color={tabArray3.color} />
      ))}
    </div>
    </TabPanel>
    <TabPanel>
    <div>
    {tabArray4.map(tabArray4 => (
        <TabCard type={tabArray4.type} image={tabArray4.cardImage} price={tabArray4.price} description={tabArray4.cardDescription} color={tabArray4.color} />
      ))}
    </div>
    </TabPanel>
    <TabPanel>
    <div>
    {tabArray5.map(tabArray5 => (
        <TabCard type={tabArray5.type} image={tabArray5.cardImage} price={tabArray5.price} description={tabArray5.cardDescription} color={tabArray5.color} />
      ))}
    </div>
    </TabPanel>
  </Tabs>
  </div>
    );
}export default TabPage