import React from 'react'
import styles from './Alerts.module.css';
const Alerts = (props) => {
  return (
    <div className={styles.alertMsg}>
    {
      props.alertMSG && <div className="alert alert-success m-1" role="alert">
      <span>{props.alertMSG.msg}</span>
      </div>
    }
    </div>
  )
}

export default Alerts
