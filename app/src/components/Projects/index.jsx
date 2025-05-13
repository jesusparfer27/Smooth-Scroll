import styles from './style.module.css'
import React from 'react'
import Image from 'next/image'
import { useRef, useState, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function index() {
    const [selectedProject, setSelectedProject] = useState(0)
    const imageContainer = useRef(null)
    const projects = [
        {
            title: "Salar de Atacama",
            src: "/salar_de_atacama.jpg"
        },
        {
            title: "Valle de la luna",
            src: "/valle_de_la_muerte.jpeg"
        },
        {
            title: "Miscanti Lake",
            src: "/miscani_lake.jpeg"
        },
        {
            title: "Miniques Lagoons",
            src: "/miniques_lagoon.jpg"
        },
    ]

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`/images${projects[selectedProject].src}`}
                        fill={true}
                        alt='image'
                    />
                </div>
                <div className={styles.column}>
                    <p className={styles.pClass}>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.pClass}>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>
            <div className={styles.projectList}>
                {
                    projects.map ((project, i) => {
                        return <div onMouseOver={() => {setSelectedProject(i)}} className={styles.projectEl} key={`p_${i}`}>
                            <p className={styles.pClass}>{project.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}