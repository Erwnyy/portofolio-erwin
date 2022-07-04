import React, { Suspense, useRef } from 'react';
import {Link} from "react-router-dom"
import './images.css'

import {Canvas, useFrame} from 'react-three-fiber';
import { Html, useGLTF} from '@react-three/drei';
import { Section } from '../../section.js';

const Model = () => {
  const gltf = useGLTF('/three/scene.gltf', true);
  return <primitive object={gltf.scene} dispose={null} />;
}

//Untuk design warna gambar
const Lights = () => {
  return (
    <>
        <ambientLight intensity={0.2}/>
        <directionalLight position={[10,10,4]} intensity={1}/>
        <spotLight position={[1000,100,-100]}/>
    </>
    
  );
};


const angleToRadians = (angleInDeg) => (Math.PI/ 180) * angleInDeg;

const HTMLContent = () => {

    //Untuk memutar gambar 
  const useref = useRef()
  // useFrame(() => (useref.current.rotation.y += 0.10))
  useFrame(() => (useref.current.rotation.y += 0.005))

  return(
    <Section factor={1.5} offset={1}>
      <group position={[0,210,0]}>
          <mesh ref={useref} position={[44,110,104]}>
            <Model/>
          </mesh>
          <mesh position={[45,110,104]} rotation={[-(angleToRadians), 0, 0]}>
            <planeGeometry args={[10, 17]}/>
            <meshStandardMaterial color="#8a8a8a"/>
          </mesh>
          <Html fullscreen>
              <div className="container">
                

                
              </div>
          </Html>
      </group>
    </Section>
  );
};

const Images = () => {
  return (
    <div>
      <div className='containerImages_title'>
        <h1 className='title_images'>Three JS</h1>
      </div>
      
      <img src="#" alt='' className='images_container'/>
      <div className='buttons_container'>
        <Link to="/dashboard" className='button-explore'>Explore</Link>
      </div>
      <Canvas
          colorManagement
          camera={{position:[50,20,120],fav:70}}
          style={{height:'85vh', position:"absolute", alignItems:"center", marginTop:"3vh", zIndex:'2'}}
          className="three_img"
        >
          
          <Lights/>
          <Suspense fallback={null}>
            <HTMLContent/>
          </Suspense>
          
          

          {/* <RoundedBox 
            args={[1, 1, 1]} 
            radius={0.05} 
            smoothness={4} 
            // {...meshProps}
            >
            <meshPhongMaterial color="#f3f3f3" />
          </RoundedBox> */}

        </Canvas>
        
    </div>
  )
}

export default Images