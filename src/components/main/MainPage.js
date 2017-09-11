import React, { Component } from 'react';
import Scene from 'react-three-renderer';
import * as THREE from 'three';


export default class MainPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.cameraPosition = new THREE.Vector3(0, 0, 10);
        this.SpherPosition = new THREE.Vector3(2, 2, 2);
        var listener = new THREE.AudioListener();

        this.state = {
            cubeRotation: new THREE.Euler(),
            sphereRotation: new THREE.Euler(),
            sound: new THREE.Audio(listener),
        };

        this._onAnimate = () => {
            this.setState({
                cubeRotation: new THREE.Euler(
                    this.state.cubeRotation.x + 0.05,
                    this.state.cubeRotation.y + 0.05,
                    this.state.cubeRotation.z + 0.05
                ),
                sphereRotation: new THREE.Euler(
                    this.state.sphereRotation.x + 0.01,
                    this.state.sphereRotation.y + 0.01,
                    this.state.sphereRotation.z + 0.01,
                )
            });
        };
    }

    render() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const audioLoader = new THREE.AudioLoader();

        return (
            <Scene
                mainCamera="camera"
                width={width}
                height={height}
                onAnimate={this._onAnimate}
            >
                <scene>
                    <perspectiveCamera
                        name="camera"
                        fov={75}
                        aspect={width / height}
                        near={0.1}
                        far={1000}
                        position={this.cameraPosition}
                    />
                    <mesh
                        rotation={this.state.cubeRotation}
                    >
                        <boxGeometry
                            width={1}
                            height={1}
                            depth={1}
                        />
                        <meshNormalMaterial
                        />
                    </mesh>
                    <mesh
                        rotation={this.state.sphereRotation}
                        position={this.SpherPosition}
                    >
                        <sphereGeometry
                            radius={1}
                            widthSegments={32}
                            heightSegments={5}
                        />
                        <meshBasicMaterial
                        />
                    </mesh>
                </scene>
            </Scene>
        );
    }
}
