import React from "react";
import Particles from "react-tsparticles"
import particlesConfig from "./config/particle-config"
import s from './app.module.css';

export default function ParticleBackground() {
    return (
            <Particles params={particlesConfig}></Particles>
        
    );
}