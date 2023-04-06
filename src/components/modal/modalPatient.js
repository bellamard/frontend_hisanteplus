

const ModalPatient = ({ showRdv, setShowRdv }) => {
    const cancel = () => {
        setShowRdv(!showRdv);
        console.log(showRdv);
    }

    const Condition = () => (
        <div className='myModal'>
            <div className='boxModal'>
                <h2>Condition d'utilisation</h2>
                <div className='boxScroll'>
                    <h3>Principales dispositions du règlement</h3>
                    <p>
                        Il y a désormais un seul ensemble de règles relatives à la protection des données, directement applicable dans tous les États membres de l'Union européenne, atténuant ainsi la fragmentation actuelle des lois nationales de protection des données.
                        Le règlement s'inscrit dans les dispositions juridiques bénéficiant de l'extraterritorialité du droit européen. Il s'applique aux entreprises établies en dehors de l'Union européenne qui traitent les données relatives aux activités des organisations de l'UE. Les sociétés non européennes sont également soumises au règlement dès qu'elles ciblent les résidents de l'UE par le profilage ou proposent des biens et services à des résidents européens.
                        Les entreprises et organismes doivent donner aux citoyens davantage de contrôle sur leurs données privées, notamment via l'acceptation des cookies sur les sites internet et sur le contrôle de l'utilisation qui est faite des données que les internautes envoient dans les formulaires de contact. Par exemple, il n'est plus possible que la case « j'accepte de recevoir la newsletter » soit pré-cochée lors de l'envoi d'un formulaire de contact dans lequel l'e-mail est renseigné.
                        Les obligations d'information et de réponses à l'exercice individuel des droits qui incombent aux responsables de traitements doivent être mises en œuvre de façon transparente (notamment : claire, simple, aisément accessible ; a priori écrite ; gratuite). 15
                        Par principe, le délai de réponse à l’exercice de droits est fixé à un mois. La seule réserve étant le caractère excessif ou infondé de la demande.
                        La personne concernée a le droit d'obtenir du responsable du traitement la confirmation que des données à caractère personnel la concernant sont ou ne sont pas traitées et, lorsqu'elles le sont, l'accès auxdites données à caractère personnel" ainsi que d'autres informations (notamment leurs finalités, destinataires, source et l'existence d'un profilage)
                        La personne concernée a le droit d'obtenir du responsable du traitement, dans les meilleurs délais, la rectification des données à caractère personnel la concernant qui sont inexactes" ou incomplètes. 17
                        Ce droit est à rapprocher de l'obligation pour le responsable de traitement de traiter "des données exactes et, si nécessaire, tenues à jour". (article 5, d) du RGPD)
                        La personne concernée a le droit d'obtenir du responsable du traitement l'effacement, dans les meilleurs délais, de données à caractère personnel la concernant et le responsable du traitement a l'obligation d'effacer ces données à caractère personnel dans les meilleurs délais pour 6 motifs18. Ceci ne représente cependant pas un droit « absolu 
                        Les personnes concernées ont le droit de recevoir les données à caractère personnel les concernant qu'elles ont fournies à un responsable du traitement, dans un format structuré, couramment utilisé et lisible par machine, et ont le droit de transmettre ces données à un autre responsable du traitement. Lorsque la personne concernée exerce son droit à la portabilité des données en application du paragraphe 1, elle a le droit d'obtenir que les données à caractère personnel soient transmises directement d'un responsable du traitement à un autre, lorsque cela est techniquement possible.
                        Ce droit ne peut s’appliquer que si la base juridique du traitement (article 6 du RGPD) est le consentement ou le contrat.
                        La personne concernée a le droit de s'opposer à tout moment, pour des raisons tenant à sa situation particulière, à un traitement des données à caractère personnel la concernant fondé sur l'article 6, paragraphe 1, point e) ou f), y compris un profilage fondé sur ces dispositions. Le responsable du traitement ne traite plus les données à caractère personnel, à moins qu'il ne démontre qu'il existe des motifs légitimes et impérieux pour le traitement qui prévalent sur les intérêts et les droits et libertés de la personne concernée, ou pour la constatation, l'exercice ou la défense de droits en justice.
                        Le règlement européen définit le principe de « protection des données dès la conception » (en anglais : Privacy by design) qui impose aux organisations de prendre en compte des exigences relatives à la protection des données personnelles dès la conception des produits, services et systèmes exploitant des données à caractère personnel. De plus, le règlement consacre la nouvelle règle de la « sécurité par défaut » qui impose à toute organisation de disposer d’un système d’information sécurisé.
                        En cas de risque pour les personnes concernées, les entreprises et les organismes sont tenus de notifier dès que possible l'autorité nationale de protection en cas de violations de données. Lorsqu'une violation de données à caractère personnel est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes concernées, alors ces dernières doivent également en être informées.
                        Les Entreprises seront obligées de signaler à une autorité compétente et aux personnes concernées tout piratage de données à caractère personnel dans un délai de 72 heures au maximum, à partir de mai 2018.
                        Cette désignation est obligatoire lorsque :
                        « le traitement est effectué par une autorité publique ou un organisme public, à l'exception des juridictions agissant dans l'exercice de leur fonction juridictionnelle » (article 37-1.a) ;
                        « les activités de base du responsable du traitement ou du sous-traitant consistent en des opérations de traitement qui, du fait de leur nature, de leur portée et/ou de leurs finalités, exigent un suivi régulier et systématique à grande échelle des personnes concernées » (article 37-1.b) ;
                        « les activités de base du responsable du traitement ou du sous-traitant consistent en un traitement à grande échelle de catégories particulières de données visées à l'article 9 et de données à caractère personnel relatives à des condamnations pénales et à des infractions visées à l'article 10. » (article 37-1.c) Sont ainsi visées les données « sensibles » dont notamment celles relatives à l'état de santé des personnes, leur état de fragilité, ou encore les données à caractère personnel relatives aux infractions et condamnations.
                        Le délégué à la protection des données doit être associé à toutes les questions de protection des données à caractère personnel. Ses principales missions sont de contrôler le respect du règlement, de conseiller le responsable des traitements sur son application et de faire office de point de contact avec l'autorité de contrôle, de répondre aux sollicitations de personnes qui souhaitent exercer leurs droits.
                        Toutes les activités qui peuvent avoir des conséquences importantes en matière de protection de données personnelles doivent être précédées d’une étude d’impact sur la vie privée qui doit aussi prévoir les mesures pour diminuer les conséquences possibles des dommages potentiels relatifs la protection des données personnelles. Le responsable du traitement consulte l'autorité de contrôle préalablement au traitement lorsqu'une analyse d'impact relative à la protection des données effectuée au titre de l'article 35 indique que le traitement présenterait un risque élevé si le responsable du traitement ne prenait pas de mesures pour atténuer le risque.
                        Le principe de responsabilité fait également son apparition. Son objectif est de responsabiliser les entreprises, qui n’auront plus à contacter une autorité de contrôle pour demander une autorisation de traitement sur des données personnelles. En contrepartie, elles devront être en mesure à tout moment d'apporter les preuves qu’elles respectent le règlement.
                        Le règlement donne aux régulateurs le pouvoir d'infliger des sanctions financières allant jusqu'à 4 % du chiffre d'affaires mondial annuel d'une entreprise ou 20 millions d'euros (le montant le plus élevé étant retenu), en cas de non-respect.
                        La création du Comité européen de la protection des données (réincarnation de l'ancien article G29) qui a autorité dans tout ce qui concerne l’interprétation du Règlement.
                        L'élaboration de codes de conduite et certifications destinés à contribuer à la bonne application du présent règlement est encouragée.
                    </p>
                </div>
                <button onClick={cancel} className="btn">OK</button>
            </div>
        </div>);
    return (
        <>
            {showRdv ? < Condition /> : null}
        </>
    );
};

export default ModalPatient;