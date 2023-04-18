import React, { useState, useEffect } from 'react';
import '../Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderDash from '../../../components/header/headerDash';
import Options from '../../../components/option';
import PannelIdent from '../../../components/pannel/pannelIdent';
import Item from '../../../components/items';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Patients = ({}) => {
    const {id}=useParams(); 
    const [userName, setUserName] = useState('inconnue');
    const [idMed, setIdMed]=useState(0);
    const [patients, setPatients] = useState({ id:id, names: 'kris', phone: 895 ,sex: 'M', date: '08/02/2021' });
    const [meetings, setMeetings]= useState([]);
    const [myMeetings, setMyMeetings]= useState([]);
    const [sick, setSick]= useState([]);
    const [search, setSearch]= useState('');
    const baseUrl="https://backend.dbrtransfert.site/";
    
    const history = useNavigate();
   
    
     useEffect(() => {
        
        const getMyProfil = () => {
        const url = baseUrl+'medecins/me';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                const { id,nomMedecin } = res.data;
                setIdMed(id);
                return setUserName(nomMedecin);
            })
            .catch(err => {
                console.log(err);
               return history('/login');

            });
        };
        const getMeeting=()=>{
        const url = baseUrl+'consultations/'+id+'/all';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                const meets=res.data;
                console.log(meets);
                setMeetings(meets);
            })
            .catch(err => {
                console.log(err);                

            });
        };
        const getMyMeeting=()=>{
        const url = baseUrl+'consultations';
        const tokken = localStorage.getItem('tokken');
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                const meets=res.data;
                
                setMyMeetings(meets);
            })
            .catch(err => {
                console.log(err);               

            });
        };
        const getAllSick = () => {
        const tokken = localStorage.getItem('tokken');
        const id= localStorage.getItem('id');
        const url = baseUrl+'interventions/';
        
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + tokken } })
            .then(res => {
                const Sick=res.data;
                setSick(Sick);
            })
            .catch(err => {
                console.log(err);

            });
         };
        getMyProfil();
        getMeeting();
        getMyMeeting();
        getAllSick();
    },[]);
    
    const GetViewMyMeet=()=>{
        const patientIdent=id;
        return myMeetings.filter((meet)=>{  
            if(search=== "" && meet.patientId== patientIdent){
                return  meet;
            }else if(meet.type.toLowerCase().includes(search.toLowerCase()) && meet.patientId== patientIdent){
                return meet;
            }       
            
            return null;
        }).map((meet,id)=>(
            <div key={id} className='bw boxConsultation'>
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
                        <i className='mod bi bi-pencil-square'>Modifier</i>
                        <i className='sup bi bi-file-x-fill'>Supprimer</i>
                    </div>
                </div>
            </div>))
        
    
    }
    const GetViewMeet=()=>{
        
        return meetings.filter((meet)=>{  
            if(search=== "" && meet.medecinId!== idMed){
                return  meet;
            }else if(meet.type.toLowerCase().includes(search.toLowerCase()) && meet.medecinId!= idMed){
                return meet;
            }       
            
            return null;
        }).map((meet,id)=>(
            <div key={id} className='boxConsultation'>
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
                    {/* <div>
                        <i className='mod bi bi-pencil-square'>Modifier</i>
                        <i className='sup bi bi-file-x-fill'>Supprimer</i>
                    </div> */}
                </div>
            </div>))
        
    
    }

    

    return (
        <div className='containerPannel'>
            <Options activePatient='Links active' activeMeet='Links' activeSick='Links' />
            <div className='layout'>
                <HeaderDash userName={userName} search={search} mySearch={setSearch} />
                <PannelIdent patient={patients} />
                <h3>Mes Consultation</h3>
                <div className='boxMeets'>                  
                    <GetViewMyMeet/>
                </div>
                <hr/>
                <h3>Consultations</h3>
                <div className='boxMeets'>                  
                    <GetViewMeet/>
                </div>

            </div>
        </div>
    );
};

export default Patients;