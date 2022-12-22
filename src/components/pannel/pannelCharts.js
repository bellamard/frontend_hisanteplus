import React from 'react';
import Chart from '../chart';

const PannelCharts = ({ sickTitle, meetTitle, patientTitle, sickStat, meetStat, patientStat, indSickTitle, indMeetTitle, indPatientTitle, indSickStat, indMeetStat, indPatientStat }) => {
    return (
        <div className='containerCharts'>
            <h3>Analyses Annuelle</h3>
            <hr />
            <div className='boxCharts'>
                <div className='chart'>
                    <h4>
                        Analyse Global
                    </h4>
                    <Chart sickTitle={sickTitle} meetTitle={meetTitle} patientTitle={patientTitle} sickStat={sickStat} meetStat={meetStat} patientStat={patientStat} />
                </div>
                <div className='chart'>
                    <h4>
                        Analyse individuel
                    </h4>
                    <Chart sickTitle={indSickTitle} meetTitle={indMeetTitle} patientTitle={indPatientTitle} sickStat={indSickStat} meetStat={indMeetStat} patientStat={indPatientStat} />
                </div>
            </div>

        </div>
    );
};

export default PannelCharts;