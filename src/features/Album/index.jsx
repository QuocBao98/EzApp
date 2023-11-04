import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './component/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
   const albumList = [
      {
         id: 1,
         name: 'Một Bước Yêu Vạn Dặm Đau',
         thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/4/e/3/d4e3607e272ee2425ab0470b1746b773.jpg',
      },
      {
         id: 2,
         name: 'Những ngày mưa cô đơn',
         thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/1/a/8/51a8d28177590b9f280cea854c81158d.jpg',
      },
      {
         id: 3,
         name: 'Màu Của Nỗi Buồn',
         thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/9/9/2/a9924a699be6554ea10f728839670ecd.jpg',
      },
      {
         id: 4,
         name: 'Điều Buôn Nhất',
         thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/6/7/3/e67343b69f8297ec456d164d52abdb82.jpg',
      },
   ];

   return <AlbumList albumList={albumList} />;
}

export default AlbumFeature;
