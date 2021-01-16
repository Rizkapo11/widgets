import React, {content, useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    {
        title :'what is React?',
        content : 'React is a front and javascript framework',
    },
    {
        title :'why use React?',
        content : 'React is a favorite JS library  among engineers',
    },
    {
        title :'how do you use React?',
        content : 'You use React by creating components',
    },
];

const options = [
{
    label: 'the color Red',
    value: 'Red',
},
{
    label: 'the color Green',
    value: 'Green',  
},
{
    label: 'A shade of Blue',
    value: 'Blue',
},
];
export default () => {
    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            < Header />
            < Route path="/" >
                <Accordion items={items} />
            </Route>

            < Route path="/list" >
                <Search />
            </Route>


            < Route path="/dropdown" >
                <Dropdown 
                lebel = 'Select a color'
                options = {options}
                selected = {selected}
                onSelectedChange = {setSelected}
                />
            </Route>

            < Route path="/translate" >
                <Translate />
            </Route>
        </div>
    );
};