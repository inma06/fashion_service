'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, title }: ImageModalProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y
      });
    }
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white rounded-full hover:bg-gray-100"
            title="Zoom In"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white rounded-full hover:bg-gray-100"
            title="Zoom Out"
          >
            <MagnifyingGlassIcon className="h-6 w-6 transform rotate-180" />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-white rounded-full hover:bg-gray-100"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div 
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div
            className="relative w-full h-full cursor-move"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              style={{
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s'
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {isHovering && (
            <div 
              className="absolute pointer-events-none w-32 h-32 rounded-full border-2 border-white shadow-lg overflow-hidden"
              style={{
                left: `${mousePosition.x - 64}px`,
                top: `${mousePosition.y - 64}px`,
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `${-mousePosition.x * 2 + 64}px ${-mousePosition.y * 2 + 64}px`,
                backgroundSize: `${scale * 200}%`,
                transform: `scale(${2})`,
                transformOrigin: 'center',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
} 