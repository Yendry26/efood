import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const data = window.localStorage.key(1);

const loop = ()=>{
    for (var i = 0; i < localStorage.length; i++){
      console.log(localStorage.getItem(localStorage.key(i)),localStorage.getItem(localStorage.ge(i)));
  }
}

  const [state, setState] = React.useState({
    columns: [
        { title: "ID_Producto", field: "ID_Producto", editable: "never" },
        { title: "ID_Tipo_Precio", field: "ID_Tipo_Precio" },
        { title: "Nombre", field: "Nombre" },
        { title: "Descripcion", field: "Descripcion" },
        { title: "Foto", field: "Foto" }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
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
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
    console.log('hjola');
      
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
