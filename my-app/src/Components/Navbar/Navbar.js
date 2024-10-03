import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
import image from '../../assets/images/Vector (2).png';
import image1 from '../../assets/images/Vector (3).png';
import profile from '../../assets/images/profile.png';
import searchicon from '../../assets/images/8666693_search_icon.png';

const Navbar = () => {
    return (
        <>
            <div className={styles.upperdiv}>
                <div className={styles.button}>
                    <button>Consult</button>
                </div>
                <div className={styles.msg}>
                    <span className={styles.msg3}>3</span>
                    <img src={image} alt='' />
                </div>
                <div className={styles.bell}>
                    <span className={styles.msgbell}>3</span>
                    <img src={image1} alt='' />
                </div>
                <div className={styles.line}></div>
                <div className={styles.profileimg}>
                    <img src={profile} />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.navdown}>
                    <div className={styles.buttondashboard}>
                        <button className={styles.button}>
                            <NavLink
                                to={'/dashboard'}
                                className={({ isActive }) => (isActive ? styles.activeButton : styles.button)}
                            >
                                Dashboard
                            </NavLink>
                        </button>

                    </div>
                    <div className={styles.buttonappointment}>
                        <button className={styles.button}>
                            <NavLink
                                to={'/appointments'}
                                className={({ isActive }) => (isActive ? styles.activeButton : styles.button)}
                            >
                                Appointments
                            </NavLink>
                        </button>
                    </div>
                    <div className={styles.buttonsetting}>
                        <button className={styles.button}>
                            <NavLink
                                to={'/settings'}
                                className={({ isActive }) => (isActive ? styles.activeButton : styles.button)}
                            >
                                Settings
                            </NavLink>
                        </button>
                    </div>
                    <div className={styles.buttondashboard}>
                        <div className={styles.searchContainer}>
                            <img className={styles.searchicon} src={searchicon} alt="Search Icon" />
                            <input
                                className={styles.search}
                                placeholder="Search here"
                                type="search"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky footer for mobile devices */}
            <div className={styles.footer}>
                <div className={styles.footerButtons}>
                    <div className={styles.buttondashboard}>
                        <NavLink
                            to={'/dashboard'}
                            className={({ isActive }) => (isActive ? styles.activeButton : styles.button)}
                        >
                            Dashboard
                        </NavLink>
                    </div>
                    <div className={styles.buttonappointment}>
                        <NavLink
                            to={'/appointments'}
                            className={({ isActive }) => (isActive ? styles.activeButton : styles.button)}
                        >
                            Appointments
                        </NavLink>
                    </div>
                    <div className={styles.buttonsetting}>
                        <NavLink
                            to={'/settings'}
                            className={({ isActive }) => (isActive ? styles.activeButton : styles.button)}
                        >
                            Settings
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
