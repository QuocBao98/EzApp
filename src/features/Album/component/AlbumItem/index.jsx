import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";

AlbumItem.propTypes = {
    album : PropTypes.array,
};

function AlbumItem({album}) {
    return (
        <div className='album'>
            <div className='album__thumbnail'>
                 <img src={album.thumbnail} alt={album.name} />
            </div>
            <p className='album__name'>{album.name}</p>
        </div>
    );
}

export default AlbumItem;