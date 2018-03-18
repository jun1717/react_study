import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default function Nav({ categories, onClick }) {
    //遷移パスの生成
    const to = category => (
        category.id === '1'
            ? '/all'
            : `/category/${category.id}`

    );
    console.log(categories);
    return (
        <Drawer type="permanent">
            <List style={{ width: 240 }}>
                {categories.map(category => (
                    <ListItem
                        button
                        key={`menu-item-${category.name}`}
                        onClick={() => onClick(to(category))}
                    >
                        <ListItemText primary={category.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
        // <ul>
        //     {categories.map(category => (
        //         <li key={`nav-item-${category.id}`}>
        //             <Link to={to(category)}>
        //                 {category.name}
        //             </Link>
        //         </li>

        //     ))}
        // </ul>
    );
}

Nav.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
};