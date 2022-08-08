import MUIDataTable from "mui-datatables";
import columns from '../Dates/ColumsE.json'
import users from '../Dates/TimeS.json';

const Option ={
    download: false,
    filterType: "multiselect",
    print: false,
    searchPlaceholder:"Search..",
    selectableRows:'multiple',
    selectableRowsOnClick:true,
    selectableRowsHideCheckboxes:true
}
export const DateTableE = () =>{
    return(
        <MUIDataTable
        title={"Export"}
        columns={columns}
        data={users}
        options={Option} />
    )
}

