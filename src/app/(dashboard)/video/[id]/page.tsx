'use client'

import iVideo from "@/interfaces/Video";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VideoReproductor({
  params,
}: {
  params: { id: string }
}) {

  console.log('params of path', params);
  
  const videoID = params.id; 

  const [videoData, setVideoData] = useState<iVideo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/videos/${videoID}`);
  
        if(!res.ok) return;
  
        const { data } = await res.json();

        // console.log('Res of API', data);
  
        setVideoData(data);
      } catch (error) {
        console.error('Error al obtener la lista de videos', error); 
      }
    }

    fetchData();
  }, [videoID]);

  if(!videoData) return <main><p>Video no disponible</p></main>

  return (
    <main>
      <video width="720" height="400" poster={videoData.image} autoPlay controls>
        <source src={videoData.path}/>
      </video>
      <h1>{videoData.name}</h1>
    </main>
  )
}