import React, { useState } from 'react';
import axios from 'axios';

const VideoDownloader = () => {
  const [url, setUrl] = useState('');

  const handleDownload = () => {
    axios.get(`https://server-nine-fawn.vercel.app/download?url=${url}`, { responseType: 'blob' })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'video.mp4');
        document.body.appendChild(link);
        link.click();
      });
  };

  return (
    
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default VideoDownloader;
