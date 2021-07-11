import React from "react";
import { Typography } from "@material-ui/core";
import OuterFrame from "./OuterFrame";
import SearchForm from "./SearchForm";
import ListTable from "./ListTable";

const List = () => {
    return (
        <OuterFrame>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column"
            }}>
                <div style={{width:"600px"}}>
                    <SearchForm />
                </div>
                <div style={{width:"99%"}}>
                    <ListTable />
                </div>
            </div>
        </OuterFrame>
    );
}
export default List;