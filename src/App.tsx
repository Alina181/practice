import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Создаем сцену
      const scene = new THREE.Scene();

      // Создаем камеру
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 10);

      // Создаем рендерер
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Создаем звездное небо
      const starGeometry = new THREE.SphereGeometry(1000, 10, 10);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.BackSide });
      const starMesh = new THREE.Mesh(starGeometry, starMaterial);
      scene.add(starMesh);

      // Создаем солнце
      const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
      const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffdd00 });
      const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sunMesh);

      // Создаем планеты
      const planetGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const planetMaterial = new THREE.MeshPhongMaterial({ color: 0x3366ff });
      const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
      planetMesh.position.set(3, 0, 0);
      scene.add(planetMesh);

      // Создаем оси координат
      const axesHelper = new THREE.AxesHelper(5);
      scene.add(axesHelper);

      // Создаем освещение
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(0, 0, 10);
      scene.add(pointLight);

      // Вращение объектов
      const animate = () => {
        requestAnimationFrame(animate);

        sunMesh.rotation.y += 0.01;
        planetMesh.rotation.y += 0.02;

        renderer.render(scene, camera);
      };

      animate();
    }
  }, []);

  return <div ref={containerRef}></div>;
};

export default App;






/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/