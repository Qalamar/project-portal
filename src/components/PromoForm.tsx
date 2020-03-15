import {
    IonInput,
   
    IonToggle,
    IonSelect,
    IonButton,
    IonLabel,
    IonList,
    IonIcon,
    IonItem,
    IonContent,
    IonToast,
    IonSelectOption ,
    IonDatetime,
    IonRadioGroup,
    IonRadio
} from "@ionic/react";
import {
    calendarOutline,
    speedometerOutline,
    codeOutline
  } from "ionicons/icons";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./PromoForm.css";
import axios from "axios";


let renderCount = 0;
let initialValues = {
  rangeInfo: -100,
  CodePromo: "",
  Cycle: "",
  Level: "",
  AcademicYear :"2019-2020",
  Speciality:"",

};



const PromoForm: React.FC = observer(() => {
    const { control, handleSubmit, formState, reset, errors } = useForm({
        defaultValues: { ...initialValues },
        mode:"onChange"
         
      });renderCount++;
      const [data, setData] = useState();
  const [showToast, setshowToast] = useState(false);
  
  const [SelectCycle, setCycle] = useState<string>();

  const [checked, setChecked] = useState(false);
  
 const showError = (_fieldName: string) => {
   let error = (errors as any)[_fieldName];
   return error ? (
     <div style={{ color: "red", fontWeight: "bold" }}>
       {error.message || "Field Is Required"}
     </div>
   ) : null;
 };


  const ShowSpeciality = () => {
    setChecked(true);
  };
  

  


return (
    <IonContent color="dark" >
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setshowToast(false)}
        message="Promo Added"
        duration={400}
        />
        <form style={{ padding: 18 }}>
        <IonLabel color="light">
          <h1>Information About Promo </h1>
        </IonLabel>
        <IonItem color="dark" class="">
            <IonIcon slot="start" icon="codeOutline"></IonIcon>
           <Controller
            as={IonInput}
            placeholder="Code Promo"
            className="firstCapital"
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("CodePromo", selected.detail.value);
              return selected.detail.value;
            }}
            name="CodePromo"
            rules={{
              required: true,
              minLength: { value: 2, message: "Must be 2 chars long" }
            }}
          />
        </IonItem>
        {showError("CodePromo")}
        <IonItem color="dark">
            <IonLabel>Cycle</IonLabel>
           
            <Controller
            
            as={ <IonSelect value={SelectCycle} placeholder="Select One" onIonChange={e => setCycle(e.detail.value)}>
              <IonSelectOption value="Preparatory">Preparatory</IonSelectOption>
              <IonSelectOption value="Secondary">Secondary</IonSelectOption>
            </IonSelect>
            }
            control={control}
            onChangeName="onIonChange"
                onChange={([selected]) => {
                  console.log(selected.detail.value);
                  return selected.detail.value;
                }}
            name="Cycle"
            rules={{
              required: true,
            }}
          />
        {showError("Cycle")}
          </IonItem>
          <IonItem color="dark" class="">
              <IonIcon slot="start" icon={speedometerOutline} ></IonIcon>
           <Controller
            as={IonInput}
            placeholder="Level"
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("Level", selected.detail.value);
              return selected.detail.value;
            }}
            name="Level"
            rules={{
              required: true,
              pattern: {
                value:  /^[1-9]$/i,
                message: "invalid Level"
              }
            }}
          />
          {showError("Level")}
        </IonItem>
        <IonItem color="dark" class="">
        <IonIcon slot="start" icon={calendarOutline}></IonIcon>
           <Controller
            as={IonInput}
            placeholder="Academic Year"
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("AcademicYear", selected.detail.value);
              return selected.detail.value;
            }}
            name="AcademicYear"
            rules={{
              required: true,
              pattern: {
                value:  /^20[0-9][0-9]-20[0-9][0-9]$/i,
                message: "Academic year must be 20xx-20xx"
              }
            }}
          />
          {showError("AcademicYear")}
        </IonItem>
          
        <IonItem color="dark">
            <IonLabel> Speciality </IonLabel>
            <Controller
             as ={ 
             <IonToggle  color="danger" checked={checked} onIonChange={()=>ShowSpeciality()} />
          }   
                  

        
                control={control}
                onChangeName="onIonChange"
                onChange={([selected]) => {

                  console.log(selected.detail.value);
                  return (selected.detail.value);
                    
                }}
            
            name="Speciality"
            />
            
            
               
        </IonItem>
        <IonItem color="dark" class="">
        
           <Controller
            as={ 
               <IonRadioGroup>
              <IonItem color="dark">
                <IonLabel>ISI</IonLabel>
                <IonRadio value="ISI" />
              </IonItem>
              <IonItem color="dark">
               
                <IonLabel>SIW</IonLabel>
                <IonRadio value="SIW" />
              </IonItem>
            </IonRadioGroup>
            
            }
            
            control={control}
            onChangeName="onIonChange"
            onChange={([selected]) => {
              console.log("Spec", selected.detail.value);
              return selected.detail.value;
            }}
            name="Spec"
          />
          {showError("Spec")}
        </IonItem>
        <IonItem color="dark">
            </IonItem>
        <IonButton
          color="danger"
          type="button"
          onClick={() => {
            reset(initialValues);
          }}
        >
          Reset Form
        </IonButton>
        <IonButton
          color="light"
          type="submit"
          onClick={() => setshowToast(true)}
          disabled={formState.isValid === false}
        >
          Submit
        </IonButton>
        </form>
      </IonContent>

);
});
export default PromoForm;