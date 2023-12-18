'use client'

import { useEffect, useState } from "react";

import iVideo from "@/interfaces/Video";
import VideoLink from "@/shared/components/VideoLink";

export default function InstrumentVideos({
  params,
}: {
  params: { instrument: string }
}) {
      
  const instrument = params.instrument; 

  const [videoList, setVideoList] = useState<iVideo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('instrument', instrument);
        
        const res = await fetch(`/api/videos?type=${instrument}`);
  
        if(!res.ok) return;
  
        const { data } = await res.json();

        console.log('Res of API', data);
  
        setVideoList(data);
      } catch (error) {
        console.error('Error al obtener la lista de videos', error); 
      }
    }

    fetchData();
  }, [instrument]);

  return (
    <main>
      <h1 className="mb-5" style={{textTransform: "capitalize"}}>{instrument} videos list</h1>

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