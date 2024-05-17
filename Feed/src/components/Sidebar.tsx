import { PencilLine } from 'phosphor-react';
import React from 'react';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar} >
            <img className={styles.cover} src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=60&w=370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.profile}>

                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/113376173?v=4" />
                <strong>Maryéli Obici</strong>
                <span> Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}