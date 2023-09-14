import green from '../assets/facil_market_green.jpg'
import black from '../assets/facil_market_black.jpg'
import foogan_yellow from '../assets/foogan_yellow.jpg'
import foogan_green from '../assets/foogan_black.jpg'
import rick_black from '../assets/rick_black.jpg'
import rick_purple from '../assets/rick_purple.jpg'
import simon_black from '../assets/simon_black.jpg'
import simon_pink from '../assets/simon_pink.jpg'
import edupluss_black from '../assets/edupluss_black.png'
import edupluss_blue from '../assets/edupluss_blue.png'
import { Project } from './interfaces'

export const projects: Project[] = [
    { 
        name: 'Facil Market',
        description: 'El project más cool',
        tecnologies: ['React', 'Typescript', 'JavaScript'],
        img_black: black,
        img_white: green,
        video: 'Link',
        repository: 'https://github.com/LaucataPe/facil-market-proyect',
        deploy: 'Link'
    },
    { 
        name: 'Edupluss',
        description: 'El project más cool',
        tecnologies: ['React', 'Typescript', 'JavaScript'],
        img_black: edupluss_black,
        img_white: edupluss_blue,
        video: 'Link',
        repository: 'https://github.com/LaucataPe/edupluss',
        deploy: 'Link'
    },
    { 
        name: 'Foogan',
        description: 'El project más cool',
        tecnologies: ['React', 'Typescript', 'JavaScript'],
        img_black: foogan_green,
        img_white: foogan_yellow,
        video: 'Link',
        repository: 'https://github.com/LaucataPe/Foogan',
        deploy: 'Link'
    },
    { 
        name: 'Rick & Morty',
        description: 'El project más cool',
        tecnologies: ['React', 'Typescript', 'JavaScript'],
        img_black: rick_black,
        img_white: rick_purple,
        video: 'Link',
        repository: 'https://github.com/LaucataPe/rick-morty',
        deploy: 'Link'
    },
    { 
        name: 'Simon Game',
        description: 'El project más cool',
        tecnologies: ['React', 'Typescript', 'JavaScript'],
        img_black: simon_black,
        img_white: simon_pink,
        video: 'Link',
        repository: 'https://github.com/LaucataPe/simon_game',
        deploy: 'Link'
    },
]