'use client'
import { ChangeEvent, useState } from "react";
import Link from "next/link";

import iVideo from "@/interfaces/Video";

function VideoLink(props:iVideo) {
    let { id, name, type, path, image, duration} = props;
    
    return(
        <div className="video-item col-lg-3 col-md-4 colsm-2 d-flex flex-column">
            <div className="video-item__image">
                <Link href="/video/1">
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="video-item__info">
                <Link href="/video/1">{name} - <span className="video-duration">{duration}</span></Link>
            </div>
        </div>
    );
}

export default VideoLink;