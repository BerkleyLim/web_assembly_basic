import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from "three";

interface ModelEntity {
  type: string;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

interface ThreeCanvasProps {
  modelData?: ModelEntity[]; // 구체적인 타입 정의
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ modelData }) => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 기본 Three.js 구성
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // 카메라 초기 위치
    camera.position.z = 5;

    // DWF 데이터 렌더링
    if (modelData) {
      modelData.forEach((entity: any) => {
        if (entity.type === 'LINE') {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(entity.start.x, entity.start.y, 0),
            new THREE.Vector3(entity.end.x, entity.end.y, 0),
          ]);
          const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
          const line = new THREE.Line(geometry, material);
          scene.add(line);
        }
      });
    }

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // 클린업
    return () => {
      while (canvasRef.current?.firstChild) {
        canvasRef.current.removeChild(canvasRef.current.firstChild);
      }
    };
  }, [modelData]);

  return (
    <div ref={canvasRef}></div>
  );
}

export default ThreeCanvas;
