import { useState } from 'react';

interface IVideoPlayerProps {
  thumbnail?: string;
  embedUrl?: string;
  localVideo?: string;
}

export function VideoPlayer({
  thumbnail,
  embedUrl,
  localVideo,
}: IVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg">
      {!isPlaying ? (
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center"
          onClick={handlePlay}
        >
          {/* Imagem de Thumbnail (Opcional, com fallback cinza) */}
          {thumbnail ? (
            <img
              src={thumbnail}
              alt="Capa do vídeo"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400">
              Sem Capa
            </div>
          )}

          {/* Overlay Escuro Suave (para destacar o botão) */}
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

          {/* Botão de Play (Estilo Clean Branco) */}
          <div className="absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/90 pl-1 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <svg
              className="h-8 w-8 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        /* Estado de Reprodução */
        <div className="h-full w-full bg-black">
          {embedUrl ? (
            // Opção 1: Embed (YouTube/Vimeo)
            <iframe
              src={`${embedUrl}?autoplay=1`} // Tenta dar autoplay ao carregar
              title="Video Player"
              className="h-full w-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : localVideo ? (
            // Opção 2: Vídeo Local
            <video src={localVideo} controls autoPlay className="h-full w-full">
              Seu navegador não suporta a tag de vídeo.
            </video>
          ) : (
            <div className="flex h-full items-center justify-center text-white">
              Nenhuma fonte de vídeo fornecida.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
