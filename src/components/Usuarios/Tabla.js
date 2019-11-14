import React from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function Tabla() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Nombre", field: "Nombre" },
      { title: "Apellido", field: "Apellido" },
      { title: "Correo", field: "Correo" },
      {
        title: "Tipo",
        field: "Tipo",
        lookup: { 34: "Administrador", 63: "Estandar" }
      }
    ],
    data: [
      { Nombre: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        Nombre: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
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
