import React from "react";
import styles from "./CohortDetails.module.css";


function CohortDetails(props) {

    return (

        <div className={styles.box}>

            <h3 
            style={{
                color: props.cohort.status === "ongoing" 
                ? "green" 
                : "blue"
            }}
            >
                {props.cohort.name}
            </h3>


            <dl>

                <dt>Cohort ID</dt>
                <dd>{props.cohort.id}</dd>


                <dt>Cohort Name</dt>
                <dd>{props.cohort.name}</dd>


                <dt>Status</dt>
                <dd>{props.cohort.status}</dd>


            </dl>


        </div>

    );
}


export default CohortDetails;