import { IonCol, IonRow, IonHeader, IonItem, IonTitle, IonToolbar, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonInput, IonButton } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useState } from 'react';
import axios from 'axios';
import { Redirect, Route } from 'react-router';
import Home from '../../pages/Home';


const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {
        //validate inputs code not shown
        const loginData = {
            email: email,
            password: password,
        };
        const api = axios.create({
            baseURL: `https://reqres.in/api`,
        });
        api.post("/login", loginData)
            .then((res) => {
            })
            .catch((error) => {
                postMessage("Auth failure! Please create an account");
            });
    };

    return (
        <div>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>


            <IonRow>
                <IonCol>
                    <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle}
                    />
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating"><h2> Email</h2></IonLabel>
                        <IonInput
                            type="email"
                            value={email}
                            onIonChange={(e) => setEmail(e.detail.value!)}
                        >
                        </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating"> <h2>Password</h2></IonLabel>
                        <IonInput
                            type="password"
                            value={password}
                            onIonChange={(e) => setPassword(e.detail.value!)}
                        >
                        </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <p style={{ fontSize: "small" }}>
                        By clicking LOGIN you agree to our <a href="#">Policy</a>
                    </p>
                    <IonButton expand="block" onClick={handleLogin}>
                        Login
                    </IonButton>
                    <p style={{ fontSize: "medium" }}>
                        Don't have an account? <a href="#">Sign up!</a>
                    </p>
                </IonCol>
            </IonRow>
            <IonPage>
                <IonRouterOutlet>
                    <Route exact path="/dashboard" component={Home} />
                </IonRouterOutlet>
            </IonPage>
        </div>
    )

}

export default LoginPage;