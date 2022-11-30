import React, { useState } from 'react';
import "../Modal.css"
import { DarkTheme} from "../components/Themes";
import styled from 'styled-components';

const Settingsbtn = styled.div`

background-color:${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
    z-index: 3;
    color: white;
    padding: .30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

`

const Settings = () => {
   const [modalvisible, setModalvisible] = useState(0);

   const toggleTab = (index) => {
      setModalvisible(index);
   };



   return (
      <div className="settings__container">
         <Settingsbtn className="settings__button" onClick={() => toggleTab(1)}>
            <i className="bx bx-cog bx-spin settings__button-icon"></i>
         </Settingsbtn>

         <div className={modalvisible === 1 ? 'services__modal active-modal' : 'services__modal'}>
            <div className="services__modal-content">
            <i onClick={() => toggleTab(0)} className="fa-solid fa-square-xmark services__modal-close"></i>
          
               {/* Settings */}
             <div className="conta">
             <h3 className="settings__title"> Settings</h3>
             <div className="btn-setting-container">
             <button className='button__settings'>🇪🇸</button>
             <button className='button__settings'>🇺🇸</button>
            </div> 
            {/* <div className="btn-setting-container">
             <button className='button__settings' onClick={() => i18n.changeLanguage("es")}>🇪🇸</button>
             <button className='button__settings' onClick={() => i18n.changeLanguage("en")}>🇺🇸</button>
            </div> */}
             </div>
               
               {/* ////////////////////////// */}
            </div>
         </div>
      </div>
   );
};

export default Settings;
