import { FaCreditCard, FaBook, FaBriefcase, FaGlobe, FaStar } from 'react-icons/fa';
import React from 'react';
const sublinks = [

    {
        page: 'Regionen',
        links: [
            { label: 'Alleinlage', icon: <FaGlobe />, url: '/' },
            { label: 'Berge', icon: <FaGlobe />, url: '/' },
            { label: 'Seen', icon: <FaGlobe />, url: '/' },
            { label: 'Meer & Strand', icon: <FaGlobe />, url: '/' },
            { label: 'Bauernhof', icon: <FaGlobe />, url: '/' },
            { label: 'Weingegend', icon: <FaGlobe />, url: '/' },
            { label: 'Stadt', icon: <FaGlobe />, url: '/' },
        ],
    },
    {
        page: 'Inspirationen',
        links: [
            { label: 'Wünsche', icon: <FaStar />, url: '/' },
            { label: 'Ausstattung', icon: <FaStar />, url: '/' },
            { label: 'Freizeit', icon: <FaStar />, url: '/' },
        ],
    }
];

export default sublinks;