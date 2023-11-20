'use client';

import { useEffect, useRef } from 'react';
import styles from './AnimatedBlob.module.scss';
import { url } from 'inspector';
// import autor from '../../assets/about_author.png'

interface AnimatedBlobProps {
  id: string;
  title?: string;
  width: number;
  height: number;
  index: number;
  backgroundImage?: string;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({
  title,
  width,
  height,
  id,
  index,
  backgroundImage,
}) => {
  const containerId = useRef(`animatedBlobContainer_${id}`);
  const canvasId = useRef(`animatedBlobCanvas_${id}`);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = document.getElementById(`${id}`) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!container || !ctx) {
      console.error('Container or Canvas context is null');
      return;
    }

    // Збільшити розмір Canvas та його роздільну здатність
    const scale = 1; // Змініть за потребою
    const containerSize = Math.min(width, height);
    canvas.width = containerSize * scale;
    canvas.height = containerSize * scale;
    ctx.scale(scale, scale);

    let time = 5;

    const drawBlob = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = containerSize / 2.5;
      const points = 100;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * 2 * Math.PI;
        const waveX = Math.sin(angle + time) * index;
        const waveY = Math.cos(angle + time) * index;
        const x = centerX + Math.cos(angle) * (radius + waveX);
        const y = centerY + Math.sin(angle) * (radius + waveY);
        ctx.lineTo(x, y);
      }

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius,
      );
      gradient.addColorStop(0.4, '#f4e6c2');
      gradient.addColorStop(1.0, '#d4b44f');

      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = '#d4b44f';
      ctx.lineWidth = 3;
      ctx.stroke();

      time += 0.008;

      // Викликати requestAnimationFrame для продовження анімації
      requestAnimationFrame(drawBlob);
    };

    // Початок анімації
    drawBlob();
  }, [width, height, containerId, canvasId, id, index]);

  return (
    <div
      className={styles.animated_blob_container}
      ref={containerRef}
      id={containerId.current}
    >
      <canvas id={id} className={styles.blobCanvas} />
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={styles.imageContainer}
      >
        {title}
      </div>
    </div>
  );
};

export default AnimatedBlob;
