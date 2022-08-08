import MUIDataTable from "mui-datatables";
import Users from "../Dates/users.json";


const Columns = ["SolID","Name","Supervisor","Ciudad","Status","Status Time",]

const Option ={
    download: false,
    filterType: "multiselect",
    print: false,
    searchPlaceholder:"Search..",
    selectableRows:'multiple',
    selectableRowsOnClick:true,
    selectableRowsHideCheckboxes:true
}
export const DatatableRTA =() => {
    return(
        <>
            <MUIDataTable
            title={"RTA"}
            columns={Columns}
            data={Users}
            options={Option} />
        </>
    )
}