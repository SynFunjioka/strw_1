'use client'

import { useEffect, useState } from 'react';

import iVideo from '@/interfaces/Video';
import VideoLink from '@/shared/components/VideoLink';

function Home() {

  const [videoList, setVideoList] = useState<iVideo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/videos');
  
        if(!res.ok) return;
  
        const { data } = await res.json();

        console.log('Res of API', data);
  
        setVideoList(data);
      } catch (error) {
        console.error('Error al obtener la lista de videos', error); 
      }
    }

    fetchData();
  }, [])
  
  return (
    <main>
      <h1 className='mb-5'>Inicio</h1>
      {/* {
        videoList.map((video: iVideo) => (
          <video width="720" height="400" controls>
            <source src={video.path}/>
          </video>
        ))
      } */}

      <section className='video-list row align-items-baseline' style={{gap: "7rem 0"}}>
        {
          videoList.map((video:iVideo) => (
            <VideoLink key={video.id} {...video} />
          ))
        }
      </section>

    </main>
  )
}

export default Home;