import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../../Components/Card/Card'
import styles from '../../Pages/Appointments/Appointments.module.css'
import ellipseimg from '../../assets/images/Ellipse 66.png';

const Viewall = () => {
    const [appoint, setAppointment] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.100.26:4000/admin/getTodayAppointments');
            console.log(response.data);
            setAppointment(response.data.appointments);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>

            <div className={styles.maindiv}>
                <Card />
                <div className={styles.sidediv}>
                    <div className={styles.upcomingappointmentstoday}>
                        Upcoming Appointments- <span>Today</span>
                    </div>
                    {/* <div className={styles.viewallappointments}>
                        View all Appointments
                    </div> */}
                    {appoint && appoint.length > 0 ? (
                        appoint.map((appointment, index) => (
                            <div key={index} className={styles.items}>
                                <div className={styles.imagebasit}>
                                    <img src={ellipseimg} alt="profile" />
                                </div>
                                <div className={styles.basitname}>{appointment.name}</div>
                                <div className={styles.time}>{appointment.timeSlot}</div>
                                <div>
                                    <button className={styles.upcomingbutton}>
                                        {appointment.status}
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.loading}>Loading appointments...</div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Viewall