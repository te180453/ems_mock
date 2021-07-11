import 'date-fns';
import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import OuterFrame from "./OuterFrame";
import { header } from "./dates/dummyTableData";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from "react-router-dom";


const Create = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );
    const history = useHistory();

    return (
        <OuterFrame>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin:"50px"
                }}>
                <form>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width:"800px",
                        justifyContent:"space-between",
                        height:"1000px"
                    }}>
                        <Typography>作成フォームコンポーネント</Typography>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            {
                                header.map(e => {
                                    let type = ""
                                    if (["購入日", "使用期限"].indexOf(e) != -1)
                                        return <KeyboardDatePicker
                                            onChange={date => setSelectedDate(date)}
                                            value={selectedDate}
                                            disableToolbar
                                            variant="inline"
                                            format="yyyy/MM/dd"
                                            margin="normal"
                                            inputVariant="filled"
                                            label={e}
                                        />
                                    else
                                        return <TextField label={e} placeholder={e} type={type} variant="filled" />
                                }
                                )
                            }
                        </MuiPickersUtilsProvider>
                    </div>
                </form>
                <Button variant="contained" color="primary" onClick={() => history.push("/list")}>登録</Button>
            </div>
        </OuterFrame>
    );
}
export default Create;