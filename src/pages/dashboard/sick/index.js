import React, { useState, useEffect } from 'react';
import '../Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";
import HeaderDash from '../../../components/header/headerDash';
import Options from '../../../components/option';
import Rdv from '../../../components/modal/modalRdvAdd';
import Del from '../../../components/modal/modalRdvDel';
import Loading from '../../../components/load';
import axios from "axios";

const Sick = () => {
    const [userName, setUserName] = useState('inconnue');
    const [search, setSearch]= useState('');
    const [myMeetings, setMyMeetings]= useState([]);
    const [showRdv, setShowRdv] = useState(false);
    const [showDel, setShowDel] = useState(false);
    const [data, setData]= useState({});
    const [viewDate, setViewDate]= useState(new Date());
    const [viewMotif, setViewMotif]= useState('');
    
    const [load, setLoad] = useState(true);    
    const history = useNavigate();
    const baseUrl="https://backend.dbrtransfert.site/";

    const viewModal = (meet) => {
        setData(meet);
        setShowRdv(!showRdv);
    };
    const viewModalDel = (meet) => {
        setData(meet);
        setShowDel(!showDel);
    };

    useEffect(() => {
        const getMyProfil = () => {
        const url = baseUrl+'medecins/me';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                const { nomMedecin } = res.data;
                return setUserName(nomMedecin);
            })
            .catch(err => {
                console.log(err);
               return history('/login');

            });
        };

        const getMeeting=()=>{
            setLoad(true);
        const url = baseUrl+'consultations';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                setLoad(false);
                const meets=res.data;                
                setMyMeetings(meets);

            })
            .catch(err => {
                setLoad(false);
                console.log(err);               

            });
        };

        getMyProfil();
        getMeeting();
    },[]);

        const GetViewMyMeet=()=>{
        return myMeetings.filter((meet)=>{  
            if(search=== ""){
                return  meet;
            }else if(meet.type.toLowerCase().includes(search.toLowerCase())){
                return meet;
            }       
            
            return null;
        }).map((meet,id)=>(
            
            <div key={id} className='bw boxConsultation' >
                
                <div className='consultationId'>
                    <i className="bi bi-calendar"/>
                    <div className='boxTitle'>
                        <h3>{meet.type}</h3>
                        <span>{
                                new Date(meet.dateConsultation).toLocaleString('en-GB', {hour12: false,})
                            }
                        </span>
                    </div>
                </div>
                <div className='boxState'>
                    {meet.valider?(<i className='bi bi-calendar-check-fill'>Annuler</i>):(<i className='bi bi-calendar-x-fill'>En cours</i>)}
                    <div>
                        <i className='mod bi bi-pencil-square' onClick={()=>viewModal(meet)}>Modifier</i>
                        <i className='sup bi bi-file-x-fill' onClick={()=>viewModalDel(meet)}>Supprimer</i>
                    </div>
                </div>
            </div>))
        
    
    }

    const Layout=()=>(<div className='layout'>
                <HeaderDash userName={userName} search={search} mySearch={setSearch} />
                <h3>Mes Prises en charges</h3>
                <div className='boxMeets'>                  
                    <GetViewMyMeet/>
                </div>
            </div>)
    
    return (
        <div className='containerPannel'>
            <Rdv showRdv={showRdv} setShowRdv={setShowRdv} meet={data} myDate={viewDate} myMotif={viewMotif}/>
            <Del showRdv={showDel} setShowRdv={setShowDel} meet={data} myDate={viewDate} myMotif={viewMotif}/>
            <Options activePatient='Links' activeMeet='Links' activeSick='Links active' />
            
            {load ? (<Loading />) : (<Layout />)}
        </div>
    );
};

export default Sick;