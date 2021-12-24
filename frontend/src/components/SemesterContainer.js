import React, { useState} from 'react'
import Semester from './Semester'
import SemesterModal from './modals/SemesterModal.js'
import styles from '../styles/SemesterContainer.module.scss'
import { useContext } from 'react/cjs/react.development'
import { ScheduleContext } from '../context/ScheduleContext'

const SemesterContainer = () => {
    let scheduleHandler = useContext(ScheduleContext)
    let schedule = scheduleHandler.getData()
    
    const [modalOpen, setModalOpen] = useState(false)
    const displayModal = () => {setModalOpen(true)}
    const hideModal = () => {setModalOpen(false)}

    return (
        <div className={styles.container}>
            {schedule.map((_, index) => <Semester key={index} index={index}  />)}
            <p onClick={displayModal}>Edit Semesters</p>
            {modalOpen ? <SemesterModal close={hideModal} /> : ''}
        </div>
    )
}

export default SemesterContainer
