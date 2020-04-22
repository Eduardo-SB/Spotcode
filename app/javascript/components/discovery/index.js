import React , { useEffect, useState } from 'react';
import Album from '../common/album';
import styled from 'styled-components';
import { Columns, Heading } from 'react-bulma-components';

import AlbumsService from '../../services/albums';

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

export default function Discovery() {
  const [recent_albums, setRecentAlbums] = useState([]);
  const [recommended_albums, setRecommendedAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  async function fetchAlbums() {
    const response = await AlbumsService.index();
    setRecentAlbums(response.data['recent_albums']);
    setRecommendedAlbums(response.data['recommend_albums']);
  }
  
  // const recent_albums_components = recent_albums.map((album, key) =>
  //   <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
  //     <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id}/>
  //   </Columns.Column>
  // );

  // const recommended_albums_components = recommended_albums.map((album, key) =>
  //   <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
  //     <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id}/>
  //   </Columns.Column>
  // );

  // const albums_mock = [
  //   { id: 1, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2f248b465e87a8800d0362b55a3b16f9d7173888/gubernator.jpg' },
  //   { id: 2, artist_name: 'Andrew Howes', title: 'The Great Bear', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ffbb0eea38171a0cd8c85f977e3bf2e4f9996775/the_great_bear.jpg' },
  //   { id: 3, artist_name: 'Yellow Chair', title: 'Barcelona', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b56f4c80ed66afda06173d0530bbf8c720ad7ae0/barcelona.jpg' },
  //   { id: 4, artist_name: 'Andrew Howes', title: 'Gubernator', cover_url: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2f248b465e87a8800d0362b55a3b16f9d7173888/gubernator.jpg' },
  // ];

  // const albums = albums_mock.map((album, key) => 
  //   <Columns.Column desktop={{ size:3 }} mobile={{ size: 6}} key={key} >
  //     <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} id={album.id} />
  //   </Columns.Column>
  // );

  return (
    <>
      {recent_albums.length > 0 &&
        <div>
          <Heading className='has-text-white' size={4}>
            Tocadas recentemente
          </Heading>
          <Columns className='is-mobile'>
            {recent_albums.map((album, key) => (
                <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
                  <Album artist_name={album.artist_name} title={album.title} cover_url={album.artist_url} key={key} id={album.id}/>
                </Columns.Column>
                )) 
            }
          </Columns>
        </div>
      }

      {recommended_albums.length > 0 &&
        <DivVSpaced>
          <Heading className='has-text-white' size={4}>
              Recomendadas
          </Heading>
          <Columns className='is-mobile'>
            {recommended_albums.map((album, key) => (
                <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
                  <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id}/>
                </Columns.Column>
              ))
            }
          </Columns>
        </DivVSpaced>
      }
    </>
  );
}
