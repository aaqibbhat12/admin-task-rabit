import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Table/Table.module.css';
import ellipseimg from '../../assets/images/Ellipse 66.png';

const Table = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setloading] = useState(true); // Set initial loading to true

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.100.26:4000/admin/getAppointment');
                setAppointments(response.data.appointments);
                console.log(response.data.appointments);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setloading(false); // Set loading to false after fetching
            }
        };

        fetchData();
    }, []);

    const getStatusButtonClass = (status) => {
        if (status === "Upcoming") return styles.upcomingButton;
        if (status === "Cancelled") return styles.rejectedButton;
        if (status === "Completed") return styles.completedButton;
        return styles.defaultButton;
    };

    return (
        <>
            <div className={styles.maindiv}>
                <div className={styles.divtable}>
                    <div className={styles.scrollableContent}>
                        {loading ? (
                            <div className={styles.loading}>Loading...</div>
                        ) : (
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th className={styles.Name}>Name</th>
                                        <th className={styles.Time}>Time Slot</th>
                                        <th className={styles.StatusSt}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((appointment, index) => (
                                        <tr key={index}>
                                            <td className={styles.nameColumn}>
                                                <img src={ellipseimg} alt="profile" className={styles.profileImage} />
                                                <div className={styles.name}>{appointment.name}</div>
                                            </td>
                                            <td>
                                                <div className={styles.timeSlot}>{appointment.timeSlot}</div>
                                            </td>
                                            <td>
                                                <button className={getStatusButtonClass(appointment.status)}>
                                                    {appointment.status}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
