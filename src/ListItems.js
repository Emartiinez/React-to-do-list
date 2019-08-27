import React from 'react';
import './ListItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flipmove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const ListItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key}
                    value={item.text}
                    onChange={
                        (e) => {
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                ></input>
                <span>
                    <FontAwesomeIcon
                        className="icons"
                        icon='trash'
                        onClick={() => props.deleteItem(item.key)}
                    >
                    </FontAwesomeIcon>
                </span>
            </p>


        </div>
    })
    return (
        <div>
            <Flipmove duration={800} easing="ease-in-out">
                {ListItems}
            </Flipmove>
        </div>
    )

}
export default ListItems;