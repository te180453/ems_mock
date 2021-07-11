import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { tableListData } from "./dates/dummyTableData";

const ListTable = () => {
    return (
        <div style={{margin:"10px"}}>
            <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                {( () => 
                    ["管理番号", "品名", "型番", "メーカー", "仕様", "購入日", "耐用年数", 
                    "減価償却", "使用不能", "貸出可能", "設置場所", "使用期限"]
                    .map(e => <TableCell align="left">{e}</TableCell> )
                ) () }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableListData.map(e => (
                        <TableRow style={{backgroundColor:
                        e[7] == "〇" || e[8] == "〇"?"black":""
                        }}>
                            {e.map(ee => <TableCell>{ee}</TableCell>)}
                        </TableRow>
                        ))
                }
            </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default ListTable;