import { useState } from "react";


export default function ImageLoader({src, alt}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">


    {/* If the image isn't fully loaded yet, show an svg. */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
        {/* Clock icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 mx-auto animate-pulse"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${loaded ? "opacity-100" : "opacity-0"}
                    transition-opacity duration-300`
                  }
      />
    </div>
  );
}