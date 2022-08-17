import MUIDataTable from "mui-datatables";
import Users from "../Dates/users.json";
import React from "react";


const Columns = ["id_solvo","Firts Name","Supervisor","Ciudad","state","time",]

const Option ={
    download: false,
    filterType: "multiselect",
    print: false,
    searchPlaceholder:"Search..",
    selectableRows:'multiple',
    selectableRowsOnClick:true,
    selectableRowsHideCheckboxes:true
}

class DatatableRTA extends React.Component{
    render(){
        const {Name}=this.props
        return(
            <>
                <MUIDataTable
                title={"RTS  "+ Name.compania}
                columns={Columns}
                data={Name.listRTS}
                options={Option} />
            </>
        )
    }
}
export default DatatableRTA;