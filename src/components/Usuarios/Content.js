import React from "react";
import MaterialTable from "material-table";

import axios from "axios";


export default function MaterialTableDemo() {
    function getDB(){
        
    axios.get(`https://10.211.55.3:45455/api/content/GetUsuario`).then(res => {
        let usuariosData = [];
        var data = res.data;
        console.log(data);
   
    for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            usuariosData.push([
              obj.Nombre,
              obj.Correo,
              obj.Contrasena,
              obj.Rol
            ]);        
          }
          console.log(usuariosData);
          setDatos(usuariosData);

    });
}
    const [datos, setDatos] = React.useState({})


console.log("From state",datos);
  const [state, setState] = React.useState({
    columns: [
        { title: "Nombre", field: "Nombre" },
        { title: "Correo", field: "Correo", editable: "never" },
        { title: "Estado", field: "Estado" },
        { title: "Rol", field: "ID_Rol" }
    ]
  });

  
  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={[
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        {
          name: "Zerya Betül",
          surname: "Baran",
          birthYear: 2017,
          birthCity: 34
        }
      ]}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );

    }