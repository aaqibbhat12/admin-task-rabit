import React from 'react'
import { useState, useEffect } from 'react';
import menimg from '../../assets/images/men.png'
import calanderimg from '../../assets/images/Vector (4).png';
import imagetime from '../../assets/images/Group 17.png';
import styles from '../Card/Card.module.css'

const Card = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');


    const updateTime = () => {
        const currentTime = new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata'
        });
        setTime(currentTime);
    };


    const updateDate = () => {
        const currentDate = new Date().toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'Asia/Kolkata'
        });
        setDate(currentDate);
    };


    useEffect(() => {
        updateTime();
        updateDate();

        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.card}>
            <div className={styles.men}>
                <img src={menimg} className={styles.menimg} alt="Men" />
            </div>
            <div className={styles.name}>
                Good morning
                Basit Bashir
            </div>
            <div className={styles.date}>
                <div className={styles.image}>
                    <img src={calanderimg} alt="Calendar" />
                </div>

                {new Date().toLocaleDateString('en-IN', { weekday: 'long', timeZone: 'Asia/Kolkata' })}
                <div className={styles.dataexact}>{date}</div>
            </div>
            <div className={styles.time}>
                <img src={imagetime} alt="Time" />
                {time}
            </div>
        </div>
    );
};


export default Card