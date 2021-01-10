import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home/home.js";
import Menu from "./pages/Menu/menu.js";

import Vacina from "./pages/Vacina/vacina.js";
import Vacina1 from "./pages/Vacina/vacina1.js";
import Vacina2 from "./pages/Vacina/vacina2.js";
import Vacina3 from "./pages/Vacina/vacina3.js";

import PEP from "./pages/PEP/pep.js";
import PEP1 from "./pages/PEP/pep1.js";
import PEP2 from "./pages/PEP/pep2.js";

import CRO from "./pages/CRO/cro.js";

import Bioseguranca from "./pages/Bioseguranca/bioseguranca.js";

import Consultorio from "./pages/Consultorio/consultorio.js";

import Instrumentos from "./pages/Instrumentos/instrumentos.js";

import Esterilizacao from "./pages/Esterilizacao/esterilizacao.js"
import Brocas from "./pages/Esterilizacao/brocas.js";
import Limas from "./pages/Esterilizacao/limas.js";

import Humidade from "./pages/Humidade/humidade.js";

import Fotopolimerizador from "./pages/Fotopolimerizador/fotopolimerizador.js";

import Assepsia from "./pages/Assepsia/assepsia.js";

import Manipulacao from "./pages/Manipulacao/manipulacao.js";
import Radiografia from "./pages/Manipulacao/radiografia.js";
import Amalgama from "./pages/Manipulacao/amalgama.js";

import Coordenadas from "./pages/Coordenadas/coordenadas.js";
import Horas from "./pages/Coordenadas/horas";
import Circulo from "./pages/Coordenadas/circulos.js";

import Descarte from "./pages/Descarte/descarte.js";

import Residuo from "./pages/Residuos/residuos.js";

import Entrevista from "./pages/Entrevista/entrevista.js";

import Referencia from "./pages/Referencia/referencia.js";

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator initialRouteName="Home">
        
        <AppStack.Screen 
            name="Home"
            component={Home}
            options={{
                headerShown: false,
            }}
        />

        <AppStack.Screen
            name="Menu"
            component={Menu}
            options={{
                headerTitle: "Menu"
            }}
        />

        <AppStack.Screen
            name="Vacina"
            component={Vacina}
            options={{
                headerTitle: "Vacinas"
            }}
        />

        <AppStack.Screen
            name="Vacina1"
            component={Vacina1}
            options={{
                headerTitle: "Vacinas: ao nascer"
            }}
        />

        <AppStack.Screen
            name="Vacina2"
            component={Vacina2}
            options={{
                headerTitle: "Vacinas: profissionais"
            }}
        /> 

        <AppStack.Screen
            name="Vacina3"
            component={Vacina3}
            options={{
                headerTitle: "Tabela de vacinas"
            }}
        />         

        <AppStack.Screen
            name="PEP"
            component={PEP}
            options={{
                headerTitle: "PEP"
            }}
        /> 

        <AppStack.Screen
            name="PEP1"
            component={PEP1}
            options={{
                headerTitle: "PEP - página 1"
            }}
        /> 

        <AppStack.Screen
            name="PEP2"
            component={PEP2}
            options={{
                headerTitle: "PEP - Página 2"
            }}
        /> 

        <AppStack.Screen
            name="CRO"
            component={CRO}
            options={{
                headerTitle: "CRO e ANVISA"
            }}
        /> 

        <AppStack.Screen
            name="Bioseguranca"
            component={Bioseguranca}
            options={{
                headerTitle: "Manobras de Biosegurança"
            }}
        /> 

        <AppStack.Screen
            name="Consultorio"
            component={Consultorio}
            options={{
                headerTitle: "Projeto arquitetônico - consultório"
            }}
        /> 

        <AppStack.Screen
            name="Instrumentos"
            component={Instrumentos}
            options={{
                headerTitle: "Tabela de instrumentos críticos"
            }}
        /> 

        <AppStack.Screen
            name="Esterilizacao"
            component={Esterilizacao}
            options={{
                headerTitle: "Esterilização"
            }}
        />  

        <AppStack.Screen
            name="Brocas"
            component={Brocas}
            options={{
                headerTitle: "Brocas odontológicas"
            }}
        /> 

        <AppStack.Screen
            name="Limas"
            component={Limas}
            options={{
                headerTitle: "Limas endodônticas"
            }}
        /> 

        <AppStack.Screen
            name="Humidade"
            component={Humidade}
            options={{
                headerTitle: "Utensílios - controle de humidade"
            }}
        /> 
        
        <AppStack.Screen
            name="Fotopolimerizador"
            component={Fotopolimerizador}
            options={{
                headerTitle: "Cuidados com o fotopolimerizador"
            }}
        />

        <AppStack.Screen
            name="Assepsia"
            component={Assepsia}
            options={{
                headerTitle: "Limpeza e Assepsia"
            }}
        />

        <AppStack.Screen
            name="Manipulacao"
            component={Manipulacao}
            options={{
                headerTitle: "Manipulacao"
            }}
        />

        <AppStack.Screen
            name="Radiografia"
            component={Radiografia}
            options={{
                headerTitle: "Manipulacao: filmes radiográficos"
            }}
        />

        <AppStack.Screen
            name="Amalgama"
            component={Amalgama}
            options={{
                headerTitle: "Manipulacao: amálgama"
            }}
        />

        <AppStack.Screen
            name="Coordenadas"
            component={Coordenadas}
            options={{
                headerTitle: "Coordenadas"
            }}
        />

        <AppStack.Screen
            name="Horas"
            component={Horas}
            options={{
                headerTitle: "Coordenadas: horas"
            }}
        />

        <AppStack.Screen
            name="Circulo"
            component={Circulo}
            options={{
                headerTitle: "Coordenadas: circulos concêntricos"
            }}
        />

        <AppStack.Screen
            name="Descarte"
            component={Descarte}
            options={{
                headerTitle: "Descarte materiais cortantes"
            }}
        />

        <AppStack.Screen
            name="Residuo"
            component={Residuo}
            options={{
                headerTitle: "Classificação dos resíduos"
            }}
        />

        <AppStack.Screen
            name="Entrevista"
            component={Entrevista}
            options={{
                headerTitle: "Entrevista com profissionais"
            }}
        />

        <AppStack.Screen
            name="Referencia"
            component={Referencia}
            options={{
                headerTitle: "Referencias Bibliográficas"
            }}
        />

    </AppStack.Navigator>
);

export default AppRoutes;