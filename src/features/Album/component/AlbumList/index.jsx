import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import "./style.scss";

AlbumList.propTypes = {
    AlBumList : PropTypes.array,
    
};

function AlbumList({albumList}) {
    return (
        <div className='abc'>
         <h3> Sad Story</h3>
         <ul className='album-list'>
             {albumList.map( album => (
                <li key={album.id}>
                    <AlbumItem album={album}/>
                </li>
             ))}
         </ul>
        </div>
    );
}

export default AlbumList;