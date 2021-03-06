import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle
} from "@ionic/react";
import {
  albumsOutline,
  informationCircleOutline,
  personCircleOutline,
  readerOutline,
  schoolOutline
} from "ionicons/icons";
import { observer } from "mobx-react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { store } from "../utils/Store";
import "../theme/menu.css";

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "About",
    url: "/about",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleOutline,
  },
  {
    title: "Teachers",
    url: "/teachers",
    iosIcon: schoolOutline,
    mdIcon: schoolOutline,
  },

  {
    title: "Projects",
    url: "/projects",
    iosIcon: readerOutline,
    mdIcon: readerOutline,
  },
  {
    title: "Promos",
    url: "/promo",
    iosIcon: albumsOutline,
    mdIcon: albumsOutline,
  },
  {
    title: "Students",
    url: "/students",
    iosIcon: personCircleOutline,
    mdIcon: personCircleOutline,
  }
];

const Menu: React.FC = observer(() => {
  return (
    <IonMenu contentId="main" type="overlay">
      <div className="items">
        <IonList class="ion-margin-top" id="inbox-list">
          <IonMenuToggle autoHide={false}>
            <IonItem
              onClick={() => (store.page = "about")}
              className={
                appPages[0].title.toLowerCase() === store.page
                  ? "selected"
                  : ""
              }
              routerLink={"/about"}
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon slot="start" icon={appPages[0].iosIcon} />
              <IonLabel>{appPages[0].title}</IonLabel>
            </IonItem>
            {store.isAuth.access === '0' && <IonItem
              onClick={() => (store.page = "teachers")}
              className={
                appPages[1].title.toLowerCase() === store.page
                  ? "selected"
                  : ""
              }
              routerLink={"/teachers"}
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon slot="start" icon={appPages[1].iosIcon} />
              <IonLabel>{appPages[1].title}</IonLabel>
            </IonItem>}


            <IonItem
              onClick={() => (store.page = "projects")}
              className={
                appPages[2].title.toLowerCase() === store.page
                  ? "selected"
                  : ""
              }
              routerLink={"/projects"}
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon slot="start" icon={appPages[2].iosIcon} />
              <IonLabel>{appPages[2].title}</IonLabel>
            </IonItem>
            <IonItem
              onClick={() => (store.page = "promo")}
              className={
                appPages[3].title.toLowerCase() === store.page
                  ? "selected"
                  : ""
              }
              routerLink={"/promo"}
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon slot="start" icon={appPages[3].iosIcon} />
              <IonLabel>{appPages[3].title}</IonLabel>
            </IonItem>
            <IonItem
              onClick={() => (store.page = "students")}
              className={
                appPages[4].title.toLowerCase() === store.page
                  ? "selected"
                  : ""
              }
              routerLink={"/students"}
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon slot="start" icon={appPages[4].iosIcon} />
              <IonLabel>{appPages[4].title}</IonLabel>
            </IonItem>

          </IonMenuToggle>
        </IonList>
      </div>
    </IonMenu>
  );
}
);

export default withRouter(Menu);
